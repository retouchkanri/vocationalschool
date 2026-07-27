import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  /** English eyebrow label, e.g. "CURRICULUM". */
  eyebrow: string;
  /** Japanese page title. */
  title: string;
  /** Optional short lead sentence shown under the title. */
  lead?: string;
  /** Background image path (from /public). */
  image: string;
  /** Breadcrumb label for the current page. */
  breadcrumb: string;
};

/** Sub-page hero: full-width photo, dark gradient, animated title, breadcrumb. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section
      data-hero
      className="relative flex min-h-[320px] items-center overflow-hidden pt-16 md:min-h-[420px] md:pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary-deep/60 to-primary-deep/30" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <Reveal y={24}>
          <p className="font-display text-sm font-semibold tracking-[0.4em] text-tan">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-mincho text-3xl leading-snug tracking-wide text-white md:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-sm leading-loose text-white/85 md:text-base">
              {lead}
            </p>
          )}
        </Reveal>
        <Reveal delay={0.25} y={12}>
          <nav
            aria-label="パンくずリスト"
            className="mt-8 flex items-center gap-2 text-xs text-white/70"
          >
            <Link href="/" className="transition-colors hover:text-tan">
              ホーム
            </Link>
            <span aria-hidden>›</span>
            <span className="text-tan">{breadcrumb}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
