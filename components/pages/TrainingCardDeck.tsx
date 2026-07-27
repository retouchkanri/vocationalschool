"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CuratedPhoto } from "@/lib/photography";

/** Fan spread angles and horizontal offsets for six playing-card photos. */
const CARD_LAYOUT = [
  { rotate: -22, x: -200, y: 8, z: 1 },
  { rotate: -13, x: -120, y: 4, z: 2 },
  { rotate: -5, x: -40, y: 0, z: 3 },
  { rotate: 5, x: 40, y: 0, z: 4 },
  { rotate: 13, x: 120, y: 4, z: 5 },
  { rotate: 22, x: 200, y: 8, z: 6 },
] as const;

type TrainingCardDeckProps = {
  photos: CuratedPhoto[];
};

export default function TrainingCardDeck({ photos }: TrainingCardDeckProps) {
  const [active, setActive] = useState<CuratedPhoto | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

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

  return (
    <>
      <div className="relative mx-auto flex min-h-[240px] w-full max-w-4xl origin-bottom scale-[0.52] items-end justify-center sm:min-h-[300px] sm:scale-[0.72] md:min-h-[400px] md:scale-100">
        {photos.map((photo, i) => {
          const layout = CARD_LAYOUT[i] ?? CARD_LAYOUT[0];
          const isHovered = hovered === i;
          const lift = isHovered ? -28 : 0;
          const scale = isHovered ? 1.06 : 1;

          return (
            <button
              key={photo.src}
              type="button"
              aria-label={`${photo.caption ?? photo.alt}を拡大表示`}
              onClick={() => setActive(photo)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className="absolute bottom-0 origin-bottom transition-[transform,box-shadow] duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{
                zIndex: isHovered ? 20 : layout.z,
                transform: `translateX(${layout.x}px) translateY(${layout.y + lift}px) rotate(${layout.rotate}deg) scale(${scale})`,
              }}
            >
              <span className="block overflow-hidden border border-ink/10 bg-white p-1.5 shadow-[0_12px_32px_-8px_rgb(31_45_35/0.35)] md:p-2">
                <span className="relative block h-44 w-32 overflow-hidden md:h-56 md:w-40">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="160px"
                    className="photo-image object-cover"
                  />
                  <span className="photo-overlay" aria-hidden />
                </span>
                {photo.caption && (
                  <span className="mt-2 block truncate px-0.5 text-center text-[10px] font-bold tracking-wide text-ink md:text-xs">
                    {photo.caption}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-ink/50 md:text-sm">
        カードをクリックすると拡大表示されます
      </p>

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
            <div className="absolute inset-0 bg-primary-deep/75 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="閉じる"
                onClick={close}
                className="absolute -right-1 -top-11 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-ink shadow-lg transition-colors hover:bg-accent hover:text-white md:-right-3 md:-top-3"
              >
                ×
              </button>

              <div className="overflow-hidden border border-ink/10 bg-white p-2 shadow-2xl md:p-3">
                <div className="photo-frame photo-grade-cinematic relative aspect-[4/3] w-full">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="photo-image object-cover"
                    priority
                  />
                  <div className="photo-overlay" aria-hidden />
                </div>
                {(active.caption || active.alt) && (
                  <p className="mt-3 px-2 pb-1 text-center font-sans text-sm font-bold text-ink md:text-base">
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
          className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
        >
          授業・カリキュラムを見る
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </p>
    </>
  );
}
