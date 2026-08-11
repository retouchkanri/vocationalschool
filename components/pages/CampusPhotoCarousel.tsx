"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type CampusCarouselPhoto = {
  src: string;
  caption: string;
};

type CampusPhotoCarouselProps = {
  photos: CampusCarouselPhoto[];
};

const INTERVAL_MS = 3000;
const CENTER_SCALE = 1.5;
const OFFSETS = [-2, -1, 0, 1, 2] as const;

/** Full-bleed five-up carousel: cards span the viewport, center ~1.5×. */
export default function CampusPhotoCarousel({ photos }: CampusPhotoCarouselProps) {
  const count = photos.length;
  const [center, setCenter] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setCenter((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCenter((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(id);
  }, [count, paused, goNext]);

  const visible = useMemo(() => {
    if (count === 0) return [];
    return OFFSETS.map((offset) => {
      const index = (center + offset + count * 10) % count;
      return { photo: photos[index], offset, index };
    });
  }, [center, count, photos]);

  if (!count) return null;

  return (
    <div
      className="relative mt-10 w-screen max-w-[100vw] left-1/2 -translate-x-1/2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative h-[min(48vw,22rem)] w-full overflow-hidden sm:h-[min(40vw,26rem)] md:h-[min(36vw,30rem)] lg:h-[min(34vw,34rem)]">
        {visible.map(({ photo, offset, index }) => {
          const isCenter = offset === 0;
          const scale = isCenter ? CENTER_SCALE : 1;
          // Tighter pitch + wider cards so gaps shrink across the viewport
          const stepVw = 16.25;
          const x = offset * stepVw;

          return (
            <motion.button
              key={photo.src}
              type="button"
              initial={false}
              animate={{
                x: `calc(-50% + ${x}vw)`,
                y: "-50%",
                scale,
                opacity: 1,
                zIndex: isCenter ? 20 : 10 - Math.abs(offset),
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setCenter(index)}
              aria-label={`${photo.caption}を中央に表示`}
              aria-current={isCenter ? "true" : undefined}
              className="absolute left-1/2 top-1/2 w-[min(20vw,19rem)] min-w-[7.5rem] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span
                className={`relative block aspect-[4/3] overflow-hidden rounded-xl border-[3px] border-white bg-white shadow-card transition-shadow ${
                  isCenter
                    ? "shadow-[0_18px_44px_-14px_rgb(17_17_17/0.38)]"
                    : "hover:shadow-card-hover"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="17vw"
                  className="object-cover"
                  priority={isCenter}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-2.5 pb-2 pt-8 text-center text-[10px] font-medium leading-snug text-white sm:text-[11px] md:text-xs">
                  {photo.caption}
                </span>
              </span>
            </motion.button>
          );
        })}

        <button
          type="button"
          aria-label="前の写真へ"
          onClick={goPrev}
          className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white/95 text-xl font-bold text-primary shadow-card transition-all duration-300 hover:bg-primary hover:text-white sm:left-4 md:left-6 md:h-14 md:w-14"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="次の写真へ"
          onClick={goNext}
          className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white/95 text-xl font-bold text-primary shadow-card transition-all duration-300 hover:bg-primary hover:text-white sm:right-4 md:right-6 md:h-14 md:w-14"
        >
          →
        </button>
      </div>

      <p className="mt-5 text-center font-display text-sm tracking-wider text-ink/55">
        <span className="tabular-nums">
          {String(center + 1).padStart(2, "0")}
        </span>
        {" / "}
        <span className="tabular-nums">{String(count).padStart(2, "0")}</span>
      </p>
    </div>
  );
}
