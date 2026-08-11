import type { NewsCategory, NewsItem } from "@/components/pages/NewsSection";

export type AnnouncementRow = {
  id: string;
  title: string;
  category: NewsCategory;
  href: string;
  external: boolean;
  published_at: string;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

export type FaqRow = {
  id: string;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
  published: boolean;
  created_at?: string;
  updated_at?: string;
};

export const NEWS_CATEGORIES: { value: NewsCategory; label: string }[] = [
  { value: "announce", label: "ご案内" },
  { value: "facility", label: "施設" },
  { value: "achievement", label: "実績" },
  { value: "admission", label: "入試" },
];

export const FAQ_CATEGORIES = [
  "入学・出願",
  "学費",
  "授業・生活",
  "就職・JRA",
  "見学",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

/** Format DB date (YYYY-MM-DD) → display "YYYY.MM.DD" */
export function formatNewsDate(isoDate: string): string {
  const d = isoDate.slice(0, 10);
  return d.replace(/-/g, ".");
}

export function announcementToNewsItem(row: AnnouncementRow): NewsItem {
  return {
    date: formatNewsDate(row.published_at),
    category: row.category,
    title: row.title,
    href: row.href || "#",
    external: row.external,
  };
}
