"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { DEFAULT_FAQS } from "@/lib/faq-defaults";
import { SCHOOL } from "@/lib/site";

const CATEGORIES = [
  "入学・出願",
  "学費",
  "授業・生活",
  "就職・JRA",
  "見学",
] as const;

type Category = (typeof CATEGORIES)[number];
type FaqExplorerItem = FaqItem & { category: string };

const SUGGEST_KEYWORDS = [
  "未経験",
  "学費",
  "寮",
  "JRA",
  "分割払い",
  "女子",
  "食事",
  "東京駅",
];

function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60),
    )
    .replace(/\s+/g, "");
}

export default function FaqExplorer({ items }: { items?: FaqExplorerItem[] }) {
  const source = items?.length ? items : DEFAULT_FAQS;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"すべて" | Category>("すべて");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of source) {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return map;
  }, [source]);

  const filtered = useMemo(() => {
    const nq = normalize(query);
    return source.filter(
      (item) =>
        (category === "すべて" || item.category === category) &&
        (nq === "" || normalize(item.q + item.a).includes(nq)),
    );
  }, [query, category, source]);

  const reset = () => {
    setQuery("");
    setCategory("すべて");
  };

  return (
    <div>
      <div role="search" className="mx-auto max-w-2xl">
        <label htmlFor="faq-search" className="sr-only">
          質問をキーワードで検索
        </label>
        <div className="relative">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="faq-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="気になるキーワードを入力（例：学費、寮、JRA）"
            className="shadow-card w-full rounded-full border-2 border-tan/60 bg-white py-4 pl-[3.25rem] pr-12 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent md:text-base"
          />
          {query !== "" && (
            <button
              onClick={() => setQuery("")}
              aria-label="検索キーワードをクリア"
              className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink/50 transition-colors hover:bg-accent hover:text-white"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-3.5 w-3.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-ink/50">
          入力と同時に、関連する質問がすぐに絞り込まれます。
        </p>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
          よく検索されるキーワード
        </span>
        {SUGGEST_KEYWORDS.map((kw) => (
          <motion.button
            key={kw}
            whileTap={{ scale: 0.94 }}
            onClick={() => setQuery(kw)}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              query === kw
                ? "border-accent bg-accent text-white"
                : "border-tan/70 bg-white text-primary hover:border-accent hover:text-accent"
            }`}
          >
            {kw}
          </motion.button>
        ))}
      </div>

      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="カテゴリで絞り込み"
      >
        {(["すべて", ...CATEGORIES] as const).map((cat) => {
          const active = category === cat;
          const count =
            cat === "すべて" ? source.length : (counts.get(cat) ?? 0);
          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(cat)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active
                  ? "bg-primary text-white shadow-lg"
                  : "border border-tan/70 bg-white text-ink/70 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
              <span
                className={`font-display rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wider ${
                  active ? "bg-white/20 text-tan" : "bg-cream text-primary/70"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-8 text-center text-xs text-ink/50">
        該当する質問：
        <span className="font-display mx-1 text-base font-semibold tracking-wider text-accent">
          {filtered.length}
        </span>
        件
      </p>

      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          {filtered.length > 0 ? (
            <motion.div
              key={`list-${category}-${normalize(query)}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaqAccordion items={filtered} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shadow-card rounded-2xl border border-tan/40 bg-white px-6 py-12 text-center md:px-10"
            >
              <p className="font-mincho text-lg text-ink md:text-xl">
                ご質問が見つかりませんでした
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-loose text-ink/60">
                キーワードを変えてお試しいただくか、事務局までお気軽にお問合せください。
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${SCHOOL.tel}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  電話相談
                  <span className="font-display tracking-wider">
                    {SCHOOL.tel}
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  資料請求・問合せ
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <button
                onClick={reset}
                className="mt-6 text-xs font-bold text-primary underline decoration-tan underline-offset-4 transition-colors hover:text-accent"
              >
                検索条件をクリアして全件表示に戻す
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
