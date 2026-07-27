"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type HeroSliderProps = {
  /** Image paths (from /public) to crossfade between. */
  images: string[];
  /** Optional alt text per slide (same order as images). */
  alts?: string[];
  /** Seconds each slide stays visible. */
  interval?: number;
  className?: string;
};

function HeroSlide({
  src,
  alt,
  priority,
  animateKenBurns,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  animateKenBurns?: boolean;
}) {
  const frame = (
    <div className="photo-frame photo-grade-cinematic absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="photo-image object-cover object-[center_35%]"
      />
      <div className="photo-overlay" aria-hidden />
    </div>
  );

  if (!animateKenBurns) return frame;

  return (
    <motion.div
      initial={{ scale: 1.14 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, ease: "linear" }}
      className="absolute inset-0"
    >
      {frame}
    </motion.div>
  );
}

/** Cinematic crossfading Ken Burns slideshow for the TOP hero (21:9 feel). */
export default function HeroSlider({
  images,
  alts = [],
  interval = 7,
  className,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval * 1000,
    );
    return () => clearInterval(id);
  }, [images.length, interval, mounted]);

  const rootClass = `photo-vignette absolute inset-0 overflow-hidden ${className ?? ""}`;

  // Static first slide on server + first client paint (matches SSR, avoids hydration mismatch).
  if (!mounted) {
    return (
      <div className={rootClass}>
        <HeroSlide
          src={images[0]}
          alt={alts[0] ?? ""}
          priority
          animateKenBurns={false}
        />
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
          {images.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={`h-1 rounded-full ${
                i === 0 ? "w-8 bg-accent" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <HeroSlide
            src={images[index]}
            alt={alts[index] ?? ""}
            priority={index === 0}
            animateKenBurns
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`スライド ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-accent" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
