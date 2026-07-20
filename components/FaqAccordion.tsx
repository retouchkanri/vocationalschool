"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type FaqItem = {
  q: string;
  a: string;
  category?: string;
};

/** Animated accordion list of Q&A items. */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="shadow-card overflow-hidden rounded-2xl border border-tan/40 bg-white"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-cream md:px-7"
            >
              <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                Q
              </span>
              <span className="flex-1 text-[15px] font-bold leading-relaxed text-ink md:text-base">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative flex h-6 w-6 shrink-0 items-center justify-center"
                aria-hidden
              >
                <span className="absolute h-0.5 w-4 rounded bg-accent" />
                <span className="absolute h-4 w-0.5 rounded bg-accent" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-4 border-t border-tan/30 bg-cream/60 px-5 py-5 md:px-7">
                    <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                      A
                    </span>
                    <p className="flex-1 pt-1.5 text-sm leading-loose text-ink/80 md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
