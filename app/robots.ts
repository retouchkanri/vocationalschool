import type { MetadataRoute } from "next";
import { SCHOOL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${SCHOOL.url}/sitemap.xml`,
  };
}
