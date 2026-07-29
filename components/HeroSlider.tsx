"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type HeroSliderProps = {
  /** Image paths (from /public) to slide between. */
  images: string[];
  /** Optional alt text per slide (same order as images). */
  alts?: string[];
  /** Seconds each slide stays visible. */
  interval?: number;
  /**
   * `banner` — designed art with baked-in copy (no cinematic grade/overlay).
   * `cinematic` — documentary photo treatment with Ken Burns.
   */
  variant?: "banner" | "cinematic";
  /** Banner image fit mode. Use `contain` to avoid cropping. */
  bannerFit?: "cover" | "contain";
  className?: string;
};

function HeroSlide({
  src,
  alt,
  priority,
  variant,
  bannerFit,
  animateKenBurns,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  variant: "banner" | "cinematic";
  bannerFit: "cover" | "contain";
  animateKenBurns?: boolean;
}) {
  if (variant === "banner") {
    return (
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={
            bannerFit === "contain"
              ? "object-contain object-center"
              : "object-cover object-center"
          }
        />
      </div>
    );
  }

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

const slideTransition = {
  banner: {
    initial: { opacity: 0, x: 48 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -48 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
  cinematic: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 2, ease: "easeInOut" as const },
  },
};

/** Crossfading / sliding slideshow for TOP and designed banner heroes. */
export default function HeroSlider({
  images,
  alts = [],
  interval = 7,
  variant = "cinematic",
  bannerFit = "cover",
  className,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const effect = slideTransition[variant];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval * 1000,
    );
    return () => clearInterval(id);
  }, [images.length, interval, mounted]);

  const rootClass =
    variant === "banner"
      ? `absolute inset-0 overflow-hidden ${className ?? ""}`
      : `photo-vignette absolute inset-0 overflow-hidden ${className ?? ""}`;

  const dots = (
    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 md:bottom-8">
      {images.map((_, i) =>
        mounted ? (
          <button
            key={i}
            type="button"
            aria-label={`スライド ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-accent"
                : variant === "banner"
                  ? "w-3 bg-ink/25 hover:bg-ink/50"
                  : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ) : (
          <span
            key={i}
            aria-hidden
            className={`h-1 rounded-full ${
              i === 0
                ? "w-8 bg-accent"
                : variant === "banner"
                  ? "w-3 bg-ink/25"
                  : "w-3 bg-white/40"
            }`}
          />
        ),
      )}
    </div>
  );

  // Static first slide on server + first client paint (avoids hydration mismatch).
  if (!mounted) {
    return (
      <div className={rootClass}>
        <HeroSlide
          src={images[0]}
          alt={alts[0] ?? ""}
          priority
          variant={variant}
          bannerFit={bannerFit}
          animateKenBurns={false}
        />
        {dots}
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={effect.initial}
          animate={effect.animate}
          exit={effect.exit}
          transition={effect.transition}
          className="absolute inset-0"
        >
          <HeroSlide
            src={images[index]}
            alt={alts[index] ?? ""}
            priority={index === 0}
            variant={variant}
            bannerFit={bannerFit}
            animateKenBurns={variant === "cinematic"}
          />
        </motion.div>
      </AnimatePresence>
      {dots}
    </div>
  );
}
