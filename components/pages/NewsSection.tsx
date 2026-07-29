"use client";

import Link from "next/link";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export type NewsCategory = "announce" | "facility" | "achievement" | "admission";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  href: string;
  external?: boolean;
};

const CATEGORY_META: Record<
  NewsCategory,
  { label: string; bg: string }
> = {
  announce: { label: "ご案内", bg: "#e68a00" },
  facility: { label: "施設", bg: "#3d9970" },
  achievement: { label: "実績", bg: "#c22d64" },
  admission: { label: "入試", bg: "#008cc2" },
};

const TAB_ORDER: (NewsCategory | "all")[] = [
  "all",
  "announce",
  "facility",
  "achievement",
  "admission",
];

const PREVIEW_LIMIT = 5;

const pillButtonClass =
  "group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white";

const arrowToggleClass =
  "inline-flex h-12 w-12 items-center justify-center text-3xl font-light text-primary transition-transform duration-300 hover:-translate-y-1 hover:text-accent";

type NewsSectionProps = {
  items: NewsItem[];
  blogHref: string;
};

export default function NewsSection({ items, blogHref }: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState<NewsCategory | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const sortedItems = [...items].sort(
    (a, b) =>
      new Date(b.date.replace(/\./g, "-")).getTime() -
      new Date(a.date.replace(/\./g, "-")).getTime()
  );

  const filtered =
    activeTab === "all"
      ? sortedItems
      : sortedItems.filter((item) => item.category === activeTab);

  const hasMore = filtered.length > PREVIEW_LIMIT;
  const visible =
    expanded || !hasMore ? filtered : filtered.slice(0, PREVIEW_LIMIT);

  function selectTab(tab: NewsCategory | "all") {
    setActiveTab(tab);
    setExpanded(false);
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionTitle
          eyebrow="NEWS"
          title="お知らせ"
          lead="学校の最新情報や施設・実績に関するトピックスをお届けします。"
        />

        <nav
          className="mb-0 flex flex-wrap gap-x-6 gap-y-2 border-b border-ink/15"
          aria-label="お知らせカテゴリ"
        >
          {TAB_ORDER.map((tab) => {
            const isActive = activeTab === tab;
            const label =
              tab === "all" ? "すべて" : CATEGORY_META[tab].label;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => selectTab(tab)}
                className={`relative pb-3 text-sm font-bold transition-colors md:text-[15px] ${
                  isActive
                    ? "text-primary"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {isActive ? (
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-primary"
                    aria-hidden
                  />
                ) : null}
                {label}
              </button>
            );
          })}
        </nav>

        <ul className="divide-y divide-ink/10 border border-ink/15 bg-white">
          {visible.length === 0 ? (
            <li className="px-5 py-10 text-center text-sm text-ink/50 md:px-8">
              該当するお知らせはありません。
            </li>
          ) : (
            visible.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 md:px-8 md:py-5"
                  >
                    <NewsRow item={item} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 md:px-8 md:py-5"
                  >
                    <NewsRow item={item} />
                  </Link>
                )}
              </li>
            ))
          )}
        </ul>

        {hasMore ? (
          <p className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className={arrowToggleClass}
              aria-label={expanded ? "お知らせを閉じる" : "お知らせをもっと見る"}
            >
              <span
                className={expanded ? "arrow-flash-up" : "arrow-flash"}
                aria-hidden
              >
                {expanded ? "⌃" : "⌄"}
              </span>
            </button>
          </p>
        ) : null}

        <p className="mt-8 text-center">
          <a
            href={blogHref}
            target="_blank"
            rel="noopener noreferrer"
            className={pillButtonClass}
          >
            学校ブログへ
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}

function NewsRow({ item }: { item: NewsItem }) {
  const meta = CATEGORY_META[item.category];

  return (
    <>
      <time
        className="w-24 shrink-0 text-sm tracking-wide text-ink/45"
        dateTime={item.date.replace(/\./g, "-")}
      >
        {item.date}
      </time>
      <span
        className="w-fit shrink-0 rounded-full px-3.5 py-1 text-xs font-bold text-white"
        style={{ backgroundColor: meta.bg }}
      >
        {meta.label}
      </span>
      <span className="text-sm leading-relaxed text-ink transition-colors group-hover:text-primary md:text-[15px]">
        {item.title}
      </span>
    </>
  );
}
