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

/** Cinematic crossfading Ken Burns slideshow for the TOP hero (21:9 feel). */
export default function HeroSlider({
  images,
  alts = [],
  interval = 7,
  className,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval * 1000,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`photo-vignette absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: interval + 3, ease: "linear" }}
            className="photo-frame photo-grade-cinematic absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={alts[index] ?? ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="photo-image object-cover object-[center_35%]"
            />
            <div className="photo-overlay" aria-hidden />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
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
