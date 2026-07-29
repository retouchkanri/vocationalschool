"use client";

import Link from "next/link";
import { SCHOOL } from "@/lib/site";

/**
 * Fixed bottom action bar — soushin.ed.jp mobile footer-bar pattern.
 * Shown only on small screens where hero CTAs are hidden.
 */
export default function MobileFooterBar() {
  return (
    <nav
      aria-label="モバイルショートカット"
      className="fixed inset-x-0 bottom-0 z-[70] flex border-t border-white/20 bg-primary text-white md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={`tel:${SCHOOL.tel}`}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 border-r border-white/25 py-2.5 text-center transition-colors active:bg-primary-dark"
      >
        <span className="text-base leading-none" aria-hidden>
          ☎
        </span>
        <span className="font-mincho text-[10px] font-semibold tracking-wide">
          電話相談
        </span>
      </a>
      <Link
        href="/admission"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 border-r border-white/25 py-2.5 text-center transition-colors active:bg-primary-dark"
      >
        <span className="text-base leading-none" aria-hidden>
          ✎
        </span>
        <span className="font-mincho text-[10px] font-semibold tracking-wide">
          資料請求
        </span>
      </Link>
      <Link
        href="/opencampus"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-center transition-colors active:bg-accent active:text-ink"
      >
        <span className="text-base leading-none" aria-hidden>
          ★
        </span>
        <span className="font-mincho text-[10px] font-semibold tracking-wide">
          学校見学
        </span>
      </Link>
    </nav>
  );
}
