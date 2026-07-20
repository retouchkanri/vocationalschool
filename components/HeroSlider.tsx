"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type HeroSliderProps = {
  /** Image paths (from /public) to crossfade between. */
  images: string[];
  /** Seconds each slide stays visible. */
  interval?: number;
  className?: string;
};

/** Fullscreen crossfading Ken Burns slideshow for the TOP hero. */
export default function HeroSlider({
  images,
  interval = 6,
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
    <div className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: interval + 2, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`スライド ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-accent" : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
