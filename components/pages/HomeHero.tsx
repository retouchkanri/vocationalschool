"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_PHOTOS } from "@/lib/photography";
import { SCHOOL } from "@/lib/site";

function navLabel(alt: string) {
  return alt.split("。")[0] || alt;
}

/**
 * Homepage hero — soushin.ed.jp layout.
 * Mobile: image + dots only (caption / CTAs hidden), matching soushin’s
 * stop_animation mobile pattern.
 */
export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const photos = HERO_PHOTOS;
  const len = photos.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || len <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 5000);
    return () => clearInterval(id);
  }, [mounted, len]);

  const navWindow = useMemo(() => {
    if (len <= 3) return photos.map((p, i) => ({ photo: p, i }));
    const left = (index - 1 + len) % len;
    const right = (index + 1) % len;
    return [
      { photo: photos[left], i: left },
      { photo: photos[index], i: index },
      { photo: photos[right], i: right },
    ];
  }, [index, len, photos]);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + len) % len);
  const current = photos[mounted ? index : 0];

  return (
    <section data-hero className="relative overflow-hidden bg-ink">
      {/*
        Mobile: taller frame like soushin (~555px), cover crop OK so baked
        art fills the viewport. Desktop: exact 1280/500 so full banner shows.
      */}
      <div className="relative h-[min(70svh,555px)] w-full min-h-[280px] md:h-auto md:min-h-0 md:aspect-[1280/500]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={mounted ? index : 0}
            initial={mounted ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center md:object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Desktop only — bottom wash for caption readability */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] hidden h-[42%] bg-gradient-to-t from-black/55 via-black/20 to-transparent md:block"
          aria-hidden
        />

        {/* Caption + CTAs — desktop / tablet only (hidden on mobile) */}
        <div className="absolute inset-x-0 bottom-0 z-10 hidden justify-center px-8 pb-6 pt-16 md:flex lg:pb-8">
          <div className="w-full max-w-4xl text-center text-white">
            <motion.h1
              key={`catch-${mounted ? index : 0}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-mincho text-[clamp(0.95rem,3.8vw,2.15rem)] font-black leading-[1.5] tracking-[0.04em] drop-shadow"
            >
              <span className="inline-block whitespace-nowrap">
                いつか一緒に　いつも一緒に
              </span>
              <br />
              馬とともに。学べる学校
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href={`tel:${SCHOOL.tel}`}
                className="inline-flex h-11 min-w-[200px] items-center justify-center bg-primary px-6 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-accent hover:text-ink md:h-14 md:min-w-[240px] md:text-base"
              >
                資料請求・相談
              </a>
              <Link
                href="/opencampus"
                className="inline-flex h-11 min-w-[200px] items-center justify-center border border-white bg-transparent px-6 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-ink md:h-14 md:min-w-[240px] md:text-base"
              >
                見学申込
              </Link>
            </motion.div>

            <p className="mt-3 font-display text-[11px] tracking-wide text-white/90 md:text-sm">
              お電話でのお問い合わせ：
              <span className="ml-1 font-semibold tracking-wider">
                {SCHOOL.tel}
              </span>
              （事務局）
            </p>
          </div>
        </div>

        {/* Mobile dots — soushin slick-dots style */}
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-[14px] md:hidden">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`スライド ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white transition-colors ${
                i === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip — desktop only (soushin hides nav on mobile) */}
      <div className="relative z-20 hidden bg-primary-deep py-4 md:block">
        <div className="relative mx-auto flex w-[min(995px,94vw)] items-center justify-center gap-2 lg:gap-3">
          <button
            type="button"
            aria-label="前のスライド"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-white/80 transition hover:text-accent md:-left-2 lg:-left-6"
          >
            <span aria-hidden className="text-2xl leading-none">
              ‹
            </span>
          </button>

          {navWindow.map(({ photo, i }) => {
            const active = i === index;
            return (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                aria-label={navLabel(photo.alt)}
                aria-current={active ? "true" : undefined}
                onClick={() => setIndex(i)}
                className="group relative h-[72px] w-[min(30vw,280px)] max-w-[280px] shrink-0 overflow-hidden bg-black lg:h-[100px]"
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute inset-0 z-[2] bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active
                      ? "translate-x-0"
                      : "-translate-x-full group-hover:translate-x-0"
                  }`}
                  aria-hidden
                />
                <span
                  className={`absolute inset-y-0 left-0 z-[3] flex w-full items-center px-4 text-left font-mincho text-[11px] font-semibold leading-snug tracking-wide transition-opacity duration-300 lg:px-6 lg:text-sm ${
                    active
                      ? "text-ink opacity-100"
                      : "text-ink opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {navLabel(photo.alt)}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            aria-label="次のスライド"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-white/80 transition hover:text-accent md:-right-2 lg:-right-6"
          >
            <span aria-hidden className="text-2xl leading-none">
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
