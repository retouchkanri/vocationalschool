import { createClient } from "@/lib/supabase/server";
import { NEWS } from "@/lib/news";
import { DEFAULT_FAQS } from "@/lib/faq-defaults";
import {
  announcementToNewsItem,
  type AnnouncementRow,
  type FaqRow,
} from "@/lib/content-types";
import type { NewsItem } from "@/components/pages/NewsSection";
import type { FaqItem } from "@/components/FaqAccordion";

export type PublicFaq = FaqItem & { id?: string; category: string };

export async function getPublishedAnnouncements(): Promise<NewsItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("announcements")
      .select(
        "id, title, category, href, external, published_at, published, sort_order",
      )
      .eq("published", true)
      .order("published_at", { ascending: false })
      .order("sort_order", { ascending: true });

    if (error || !data?.length) {
      if (error) console.warn("[announcements]", error.message);
      return NEWS;
    }
    return (data as AnnouncementRow[]).map(announcementToNewsItem);
  } catch (e) {
    console.warn("[announcements]", e);
    return NEWS;
  }
}

export async function getPublishedFaqs(): Promise<PublicFaq[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faqs")
      .select("id, category, question, answer, sort_order, published")
      .eq("published", true)
      .order("sort_order", { ascending: true });

    if (error || !data?.length) {
      if (error) console.warn("[faqs]", error.message);
      return DEFAULT_FAQS;
    }
    return (data as FaqRow[]).map((row) => ({
      id: row.id,
      category: row.category,
      q: row.question,
      a: row.answer,
    }));
  } catch (e) {
    console.warn("[faqs]", e);
    return DEFAULT_FAQS;
  }
}
