"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Lower-right "Top" control. Hidden while the page hero is in view.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
        setVisible(window.scrollY > heroBottom - 48);
        return;
      }
      setVisible(window.scrollY > 480);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="ページ上部へ戻る"
          onClick={scrollTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-4 z-[60] flex h-12 w-12 flex-col items-center justify-center rounded-full border border-ink/10 bg-paper/95 text-primary shadow-[0_10px_28px_-10px_rgb(53_34_10/0.35)] backdrop-blur-md transition-colors hover:border-accent hover:text-accent md:bottom-6 md:right-6"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
