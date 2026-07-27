"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SCHOOL } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/5 bg-paper/80 shadow-[0_1px_16px_-6px_rgb(31_45_35/0.15)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="mx-[5vw] flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span
              className={`relative block h-10 w-40 transition-all duration-500 md:h-12 md:w-52 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            >
              <Image
                src={SCHOOL.logo}
                alt={SCHOOL.name}
                fill
                sizes="208px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.filter((n) => n.href !== "/").map((item) => {
              const active =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    scrolled
                      ? active
                        ? "text-accent"
                        : "text-ink hover:text-accent"
                      : active
                        ? "text-tan"
                        : "text-white hover:text-tan"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors xl:hidden ${
              open ? "bg-primary" : scrolled ? "bg-primary" : "bg-black/30"
            }`}
          >
            <span
              className={`block h-0.5 w-5 rounded bg-white transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-white transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-primary-deep/97 px-6 pt-24 pb-10 backdrop-blur-sm xl:hidden"
          >
            <nav className="mx-auto flex w-full max-w-sm flex-col">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between border-b border-white/10 py-4 text-white"
                  >
                    <span className="text-base font-bold transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                    <span className="font-display text-[11px] tracking-[0.2em] text-tan/70">
                      {item.labelEn}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
