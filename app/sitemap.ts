import type { MetadataRoute } from "next";
import { SCHOOL } from "@/lib/site";

/**
 * Static sitemap for the public marketing pages.
 * Priorities loosely reflect the SEO/keyword plan in docs/専門学校.xlsx:
 * the JRA / admission / features pages are the primary conversion & search
 * targets, so they rank slightly above the informational pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/features", priority: 0.9, changeFrequency: "monthly" },
    { path: "/curriculum", priority: 0.9, changeFrequency: "monthly" },
    { path: "/jra", priority: 0.9, changeFrequency: "monthly" },
    { path: "/admission", priority: 0.8, changeFrequency: "monthly" },
    { path: "/opencampus", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/comparison", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SCHOOL.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
