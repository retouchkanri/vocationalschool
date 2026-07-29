"use client";

import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { THEME_000_BANNERS } from "@/lib/photography";

type FeaturesHeroBannerProps = {
  breadcrumb?: string;
  interval?: number;
};

/**
 * Features page main visual — client-supplied designed banners from
 * /images/theme/000 (no cinematic overlay; text is baked into the art).
 */
export default function FeaturesHeroBanner({
  breadcrumb = "本校の特徴",
  interval = 5,
}: FeaturesHeroBannerProps) {
  return (
    <section data-hero className="relative overflow-hidden bg-paper pt-16 md:pt-20">
      <div className="relative aspect-[1280/500] w-full">
        <HeroSlider
          images={THEME_000_BANNERS.map((p) => p.src)}
          alts={THEME_000_BANNERS.map((p) => p.alt)}
          interval={interval}
          variant="banner"
          bannerFit="cover"
        />
      </div>

      <nav
        aria-label="パンくずリスト"
        className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-ink/60 md:px-6"
      >
        <Link href="/" className="transition-colors hover:text-primary">
          ホーム
        </Link>
        <span aria-hidden>›</span>
        <span className="text-primary">{breadcrumb}</span>
      </nav>
    </section>
  );
}
