"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";

type StudentPhotoOrbitProps = {
  photos: readonly string[];
};

type Phase = "deploying" | "holding" | "gathering";

const PAIR_INTERVAL_MS = 1000;
const HOLD_MS = 30_000;
const GATHER_MS = 1200;
const ORBIT_SLOTS = 10;
/** Degrees per second while the ring is fully open (slow CW spin). */
const SPIN_DEG_PER_SEC = 8;

function orbitOffset(slot: number, radius: number, spinDeg: number) {
  const angle =
    ((-90 + slot * (360 / ORBIT_SLOTS) + spinDeg) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function BorderSpin({ size = "orbit" }: { size?: "orbit" | "modal" }) {
  return (
    <span
      className={`card-border-spin ${size === "modal" ? "card-border-spin--modal" : "card-border-spin--orbit"}`}
      aria-hidden
    />
  );
}

/**
 * 11 student photos: one stays centered; every second a CW + CCW pair
 * flies out to a ring; holds 30s while the ring slowly rotates CW;
 * gathers back; loops. Click any photo to open a modal.
 */
export default function StudentPhotoOrbit({ photos }: StudentPhotoOrbitProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35, once: false });
  const [phase, setPhase] = useState<Phase>("deploying");
  const [pairsOut, setPairsOut] = useState(0);
  const [radius, setRadius] = useState(230);
  const [spinDeg, setSpinDeg] = useState(0);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const spinRef = useRef(0);

  const centerSrc = photos[0];
  const orbitPhotos = photos.slice(1, 11);

  const closeModal = useCallback(() => setModalSrc(null), []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setRadius(130);
      else if (w < 768) setRadius(170);
      else if (w < 1024) setRadius(230);
      else setRadius(290);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Slow clockwise spin while fully deployed
  useEffect(() => {
    if (phase !== "holding" || !inView || modalSrc) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      spinRef.current = (spinRef.current + SPIN_DEG_PER_SEC * dt) % 360;
      setSpinDeg(spinRef.current);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, inView, modalSrc]);

  // Animation timeline (pauses while modal is open or off-screen)
  useEffect(() => {
    if (!inView || modalSrc) return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "deploying") {
      if (pairsOut < 5) {
        timer = setTimeout(() => setPairsOut((n) => n + 1), PAIR_INTERVAL_MS);
      } else {
        timer = setTimeout(() => setPhase("holding"), 50);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("gathering"), HOLD_MS);
    } else {
      setPairsOut(0);
      spinRef.current = 0;
      setSpinDeg(0);
      timer = setTimeout(() => setPhase("deploying"), GATHER_MS);
    }

    return () => clearTimeout(timer);
  }, [phase, pairsOut, inView, modalSrc]);

  useEffect(() => {
    if (!modalSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalSrc, closeModal]);

  function placement(orbitIndex: number) {
    const isCw = orbitIndex < 5;
    const pairOrder = isCw ? orbitIndex : orbitIndex - 5;
    const slot = isCw ? pairOrder : 9 - pairOrder;
    const out = phase === "gathering" ? false : pairsOut > pairOrder;
    return { slot, out, isCw };
  }

  // ~1.5× previous card sizes (overlap is intentional)
  const cardW =
    radius < 150 ? 126 : radius < 200 ? 150 : radius < 260 ? 180 : 210;
  const cardH = Math.round(cardW * 0.75);
  const centerW = Math.round(cardW * 1.15);
  const centerH = Math.round(cardH * 1.15);

  // During holding, keep spring soft so continuous spin stays smooth
  const orbitTransition =
    phase === "holding"
      ? { type: "tween" as const, duration: 0.05, ease: "linear" as const }
      : {
          type: "spring" as const,
          stiffness: 120,
          damping: 18,
          mass: 0.9,
        };

  return (
    <>
      <div
        ref={rootRef}
        className="relative mx-auto flex min-h-[28rem] w-full max-w-5xl items-center justify-center sm:min-h-[34rem] md:min-h-[40rem] lg:min-h-[46rem]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(92%,34rem)] w-[min(92%,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(0_145_58/0.08)_0%,transparent_68%)]"
        />

        <motion.button
          type="button"
          onClick={() => setModalSrc(centerSrc)}
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          style={{ width: centerW, height: centerH }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative block h-full w-full">
            <BorderSpin />
            <span className="relative z-[1] block h-full w-full overflow-hidden rounded-xl border-[3px] border-white shadow-[0_14px_36px_-10px_rgb(17_17_17/0.35)]">
              <Image
                src={centerSrc}
                alt="夢に向かって馬と向き合う学生の様子"
                fill
                sizes="260px"
                className="object-cover"
                priority
              />
            </span>
          </span>
        </motion.button>

        {orbitPhotos.map((src, i) => {
          const { slot, out, isCw } = placement(i);
          const spin = out && phase === "holding" ? spinDeg : out ? spinDeg : 0;
          const target = orbitOffset(slot, radius, out ? spin : 0);
          const stackJitter = {
            x: ((i % 5) - 2) * 3,
            y: ((i % 3) - 1) * 2,
            rotate: (i - 4.5) * 1.4,
          };

          return (
            <motion.button
              key={src}
              type="button"
              onClick={() => setModalSrc(src)}
              className="absolute left-1/2 top-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{
                width: cardW,
                height: cardH,
                marginLeft: -cardW / 2,
                marginTop: -cardH / 2,
                zIndex: out ? 20 + slot : 10 - i,
              }}
              initial={false}
              animate={{
                x: out ? target.x : stackJitter.x,
                y: out ? target.y : stackJitter.y,
                rotate: out ? (isCw ? 6 : -6) : stackJitter.rotate,
                scale: out ? 1 : 0.88 - i * 0.012,
                opacity: 1,
              }}
              transition={orbitTransition}
              whileHover={{ scale: out ? 1.06 : 0.95, zIndex: 40 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="relative block h-full w-full">
                <BorderSpin />
                <span className="relative z-[1] block h-full w-full overflow-hidden rounded-xl border-[3px] border-white shadow-card">
                  <Image
                    src={src}
                    alt="夢に向かって馬と向き合う学生の様子"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {modalSrc && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="閉じる"
              className="absolute inset-0 bg-ink/70 backdrop-blur-[2px]"
              onClick={closeModal}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="写真を拡大表示"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl"
            >
              <span className="relative block">
                <BorderSpin size="modal" />
                <div className="relative z-[1] overflow-hidden rounded-2xl border-[3px] border-white bg-paper shadow-[0_24px_64px_-16px_rgb(0_0_0/0.5)]">
                  <button
                    type="button"
                    aria-label="閉じる"
                    onClick={closeModal}
                    className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-xl text-white transition-colors hover:bg-accent"
                  >
                    ×
                  </button>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={modalSrc}
                      alt="夢に向かって馬と向き合う学生の様子"
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
