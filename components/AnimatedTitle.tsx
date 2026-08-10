"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type AnimatedTitleProps = {
  text: string;
  className?: string;
  /** Element tag to render (defaults to h1). */
  as?: "h1" | "h2";
  /** Seconds before the first character starts animating. */
  delay?: number;
  /** Seconds between each character's animation start. */
  charDelay?: number;
};

/**
 * Reveals a heading one character at a time. Mounts hidden and staggers
 * each glyph in — since each page's hero title is a fresh component
 * instance, navigating to a new page re-triggers the whole reveal.
 */
export default function AnimatedTitle({
  text,
  className,
  as = "h1",
  delay = 0.1,
  charDelay = 0.028,
}: AnimatedTitleProps) {
  const MotionTag = as === "h2" ? motion.h2 : motion.h1;
  const characters = Array.from(text);

  return (
    <MotionTag className={className} aria-label={text}>
      <span aria-hidden="true">
        {characters.map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            className="inline-block"
            initial={{ opacity: 0, y: "0.45em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * charDelay,
              ease: EASE,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </MotionTag>
  );
}
