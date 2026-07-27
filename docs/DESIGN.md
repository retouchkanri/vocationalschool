# バジガク新サイト — ページ実装ガイド（agents 向け）

School: 東関東馬事専門学院 (horse vocational academy, Chiba). Stylish, warm, premium "equestrian" feel: deep saddle brown + orange accents + cream paper backgrounds, mincho display headings, clean scroll animations.

## Stack & conventions

- Next.js 15 App Router, TypeScript, Tailwind CSS v4 (tokens in `app/globals.css` `@theme`), framer-motion.
- Each page = **server component** at `app/<route>/page.tsx` with `export const metadata: Metadata = { title: "...", description: "..." }` (title WITHOUT school name — the layout template appends it).
- If a page needs client interactivity beyond the shared components, put a `"use client"` component in `components/pages/<Route><Name>.tsx` and import it.
- Import alias: `@/components/...`, `@/lib/site`.
- Do NOT edit shared files (`app/layout.tsx`, `app/globals.css`, `components/Header.tsx`, `Footer.tsx`, `Reveal.tsx`, `SectionTitle.tsx`, `PageHero.tsx`, `CtaSection.tsx`, `FaqAccordion.tsx`, `AnimatedCounter.tsx`, `HeroSlider.tsx`, `lib/site.ts`). Only create your own page files.
- `next/image` `<Image>` for all images (config has `unoptimized: true`). For `fill`, parent needs `relative` + explicit height (or aspect-*).

## Design tokens (Tailwind classes)

Colors: `primary` #804F1B (brand brown) / `primary-dark` / `primary-deep` (footer-dark) / `accent` #F08300 (orange, CTA + eyebrow) / `accent-dark` / `tan` #DBBF93 / `cream` #FAF6EC (alternate section bg) / `paper` #FFFDF8 (page bg) / `ink` #26190C (text) / `alert` #E60012 (important notice only) / `meadow` #EAF4E3 (soft green tint).
Usage: `bg-cream`, `text-accent`, `border-tan/40`, etc.

Fonts: `font-sans` (Noto Sans JP — body), `font-mincho` (Noto Serif JP — ALL display headings; h1–h6 get it globally via globals.css), `font-display` (Oswald — English eyebrow labels / big numbers, use `tracking-[0.3em]`-ish).

Utility classes defined in globals.css: `.rule-diamond` (decorative rule), `.shadow-card`, `.shadow-card-hover`, `.img-zoom` (wrap an Image; zooms on hover), `.writing-vertical`, `animate-ken-burns`, `animate-marquee` (duplicate content 2x inside a `flex w-max` track), `animate-float`.

## Shared components (import and use these — keep the site consistent)

```tsx
import PageHero from "@/components/PageHero";           // EVERY sub page starts with this
import SectionTitle from "@/components/SectionTitle";   // eyebrow EN + mincho JA title + rule
import { Reveal, RevealGroup, RevealItem, RevealScale } from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";       // EVERY page ends with this (before footer)
import AnimatedCounter from "@/components/AnimatedCounter";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { SCHOOL, STATS, NAV } from "@/lib/site";
```

- `<PageHero eyebrow="ADMISSION" title="募集要項" lead="..." image="/images/theme/..." breadcrumb="募集要項" />`
- `<SectionTitle eyebrow="TUITION" title="学費について" lead="..." align="center|left" light />`
- Wrap every content block in `Reveal` / `RevealGroup`+`RevealItem` (staggered grids). Animations must be subtle & clean — fade/slide only, `once`.
- Section rhythm: alternate `bg-paper` and `bg-cream` (or a `bg-primary-deep` dark band for impact stats/quotes). Vertical padding `py-16 md:py-24`. Container: `mx-auto max-w-7xl px-4 md:px-6` (text-heavy: `max-w-5xl`).

## Content sources (READ THESE FIRST)

- `docs/site-content-extract.json` — structured facts extracted from the current site (array; find your slugs). **Write fresh original Japanese copy from these facts. Never invent facts, fees, dates, or statistics not present in the extract.** Paraphrase; don't copy sentences verbatim from the old site.
- `docs/image-manifest.txt` — maps original URLs → local `/images/...` paths. Images in the extract are original URLs; convert via this manifest. Only reference files that exist in `public/images/` (thumbnails with `-WxH` suffixes were NOT downloaded — strip the suffix to find the original in the manifest; if absent, pick another image).
- Tone: 前向き・誠実・具体的。です・ます調。Short punchy headlines (mincho), concrete body text. English eyebrows per section (e.g. "SUPPORT", "FLOW", "TUITION").

## Page furniture

- Numbers/stats: `font-display` big digits with `AnimatedCounter`, unit in small JA text.
- Steps/flow: numbered vertical timeline (border-l, dots) or numbered cards with connecting arrows.
- Tables (fees etc.): rounded-2xl card, `overflow-x-auto`, header row `bg-primary text-white`, zebra `odd:bg-cream/60`; important notes in `text-alert`.
- Cards: `rounded-2xl bg-white shadow-card shadow-card-hover overflow-hidden`, photo top (`img-zoom` + `aspect-[4/3]`), body `p-6`.
- Photo galleries: RevealGroup grid `grid-cols-2 md:grid-cols-3 gap-3`, rounded, img-zoom.
- Link buttons: rounded-full, `bg-accent text-white font-bold px-8 py-4 hover:-translate-y-1 hover:bg-accent-dark transition-all` (+ `→` that slides on hover). Secondary: `border-2 border-primary text-primary hover:bg-primary hover:text-white`.
- Accessibility: semantic headings h1(hero)→h2→h3, alt text on meaningful images, `aria` where relevant.
