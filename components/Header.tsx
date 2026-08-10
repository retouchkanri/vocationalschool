"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { INQUIRY, NAV, SCHOOL } from "@/lib/site";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.5 12 14l9-5.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
}

function InquiryNavButton({
  scrolled,
  className,
}: {
  scrolled: boolean;
  className?: string;
}) {
  return (
    <Link
      href={INQUIRY.href}
      className={`group flex shrink-0 flex-col items-center justify-center gap-1 border-l px-4 transition-colors duration-300 ${
        scrolled
          ? "border-primary-dark/20 bg-primary text-white hover:bg-primary-dark"
          : "border-ink/10 bg-white text-ink hover:bg-cream"
      } ${className ?? ""}`}
    >
      <EnvelopeIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-105 xl:h-6 xl:w-6" />
      <span className="whitespace-nowrap font-display text-[10px] font-bold leading-none tracking-wide xl:text-[11px]">
        {INQUIRY.label}
      </span>
    </Link>
  );
}

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
        className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/5 bg-paper/95 shadow-[0_1px_16px_-6px_rgb(31_45_35/0.15)] backdrop-blur-xl"
            : "bg-primary/70 backdrop-blur-sm"
        }`}
      >
        <div className="flex min-h-16 items-stretch md:min-h-20">
          <div className="mx-[5vw] flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 md:py-0">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span
              className={`relative block h-[3.3rem] w-[14.85rem] transition-all duration-500 md:h-[3.85rem] md:w-[18.15rem] ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            >
              <Image
                src={SCHOOL.logo}
                alt={SCHOOL.name}
                fill
                sizes="(min-width: 768px) 290px, 238px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>

          {/* Desktop nav — wraps on mid-size screens so items are not clipped */}
          <nav
            aria-label="メインナビゲーション"
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-0.5 gap-y-1 lg:flex xl:gap-x-1"
          >
            {NAV.filter((n) => n.href !== "/").map((item) => {
              const active =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap px-2 py-1.5 font-display text-[11px] font-bold tracking-wide transition-colors xl:px-2.5 xl:py-2 xl:text-[13px] ${
                    scrolled
                      ? active
                        ? "text-primary"
                        : "text-ink hover:text-primary"
                      : active
                        ? "text-accent"
                        : "text-white hover:text-accent"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left transition-transform duration-300 ${
                      scrolled ? "bg-primary" : "bg-accent"
                    } ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile / tablet hamburger */}
          <button
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full transition-colors lg:hidden ${
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

          <InquiryNavButton scrolled={scrolled} className="hidden min-h-full lg:flex" />
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-primary-deep/97 px-6 pt-24 pb-10 backdrop-blur-sm lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-sm flex-col">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={INQUIRY.href}
                  className="mb-6 flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white px-6 py-4 font-display text-sm font-bold text-ink shadow-lg"
                >
                  <EnvelopeIcon className="h-6 w-6" />
                  {INQUIRY.label}
                </Link>
              </motion.div>
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
