"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CuratedPhoto } from "@/lib/photography";

type TrainingCardDeckProps = {
  photos: CuratedPhoto[];
};

/** Fan slot layout — spaced so cards never overlap; center slightly larger. */
const SLOTS = [
  { key: "left", rotate: -14, x: -570, y: 54, scale: 0.92, z: 1 },
  { key: "center", rotate: 0, x: 0, y: 0, scale: 1, z: 5 },
  { key: "right", rotate: 14, x: 570, y: 54, scale: 0.92, z: 1 },
] as const;

function BorderSpin({ modal = false }: { modal?: boolean }) {
  return (
    <span
      className={`card-border-spin ${modal ? "card-border-spin--modal" : ""}`}
      aria-hidden
    />
  );
}

/**
 * 3-card fan (TDA MV style): center + two sides.
 * Advances left→right every 5s. Caption only under the center card.
 * No polaroid white frame — full-bleed rounded images.
 */
export default function TrainingCardDeck({ photos }: TrainingCardDeckProps) {
  const [center, setCenter] = useState(0);
  const [active, setActive] = useState<CuratedPhoto | null>(null);
  const count = photos.length;

  const close = useCallback(() => setActive(null), []);

  const visible = useMemo(() => {
    if (count === 0) return [];
    const left = (center - 1 + count) % count;
    const right = (center + 1) % count;
    return [
      { photo: photos[left], slot: SLOTS[0], index: left },
      { photo: photos[center], slot: SLOTS[1], index: center },
      { photo: photos[right], slot: SLOTS[2], index: right },
    ];
  }, [center, count, photos]);

  // Advance carousel left → right every 5 seconds
  useEffect(() => {
    if (count <= 1 || active) return;
    const id = setInterval(() => {
      setCenter((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(id);
  }, [count, active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  const centerPhoto = photos[center];

  return (
    <>
      <div className="relative mx-auto w-full max-w-[1700px] overflow-x-clip px-2 lg:overflow-visible">
        {/* Soft pastel glow like TDA MV */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <span className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-[#b8f0d8]/40 blur-3xl md:h-72 md:w-72" />
          <span className="absolute right-[10%] top-[10%] h-52 w-52 rounded-full bg-[#f7c4d8]/35 blur-3xl md:h-80 md:w-80" />
          <span className="absolute bottom-[18%] left-1/2 h-44 w-56 -translate-x-1/2 rounded-full bg-[#f7e8a0]/35 blur-3xl" />
        </div>

        {/*
          Base card ~2× previous size. On narrow screens the whole fan is
          scaled down so all three cards stay fully visible without overlap.
        */}
        <div className="relative mx-auto flex h-[400px] origin-bottom scale-[0.32] items-end justify-center sm:h-[480px] sm:scale-[0.42] md:h-[560px] md:scale-[0.55] lg:h-[640px] lg:scale-[0.67] xl:h-[780px] xl:scale-100">
          {visible.map(({ photo, slot, index }) => {
            const isCenter = slot.key === "center";
            return (
              <motion.button
                key={photo.src}
                type="button"
                initial={false}
                animate={{
                  opacity: 1,
                  x: slot.x,
                  y: slot.y,
                  rotate: slot.rotate,
                  scale: slot.scale,
                  zIndex: slot.z,
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`${photo.caption ?? photo.alt}を拡大表示`}
                aria-current={isCenter ? "true" : undefined}
                onClick={() => {
                  setCenter(index);
                  setActive(photo);
                }}
                className="absolute bottom-0 origin-bottom focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="relative block">
                  {isCenter && <BorderSpin />}
                  <span className="relative z-[1] block overflow-hidden rounded-3xl shadow-[0_22px_48px_-16px_rgb(0_0_0/0.35)]">
                    <span className="relative block h-[720px] w-[480px]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="480px"
                        className="object-cover object-center"
                        priority={isCenter}
                      />
                    </span>
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Caption — center card only, outside the image */}
        <div className="relative z-10 mt-1 min-h-[2rem] text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={centerPhoto?.src ?? "empty"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="font-mincho text-sm font-semibold tracking-wide text-ink md:text-base"
            >
              {centerPhoto?.caption ?? centerPhoto?.alt}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>


      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={close}
          >
            <div className="absolute inset-0 bg-ink/75 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[min(92vw,28rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="閉じる"
                onClick={close}
                className="absolute -top-12 right-0 z-20 inline-flex h-11 items-center rounded-full bg-white px-5 font-mincho text-sm font-semibold text-ink shadow-lg transition-colors hover:bg-accent md:-right-2 md:-top-2 md:h-12"
              >
                閉じる
              </button>

              <div className="relative">
                <BorderSpin modal />
                <div className="relative z-[1] overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <div className="relative aspect-[5/7] w-full bg-cream">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      fill
                      sizes="(min-width: 768px) 28rem, 92vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                {(active.caption || active.alt) && (
                  <p className="mt-4 text-center font-mincho text-sm font-semibold tracking-wide text-white md:text-base">
                    {active.caption ?? active.alt}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-10 text-center">
        <Link
          href="/curriculum"
          className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
        >
          カリキュラム
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </p>
    </>
  );
}
