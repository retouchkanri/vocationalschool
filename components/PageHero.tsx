import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import AnimatedTitle from "@/components/AnimatedTitle";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  breadcrumb: string;
};

const TITLE_START_DELAY = 0.15;
const TITLE_CHAR_DELAY = 0.026;

/** Sub-page hero — full-bleed photo with light text scrim only (no solid wash). */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  breadcrumb,
}: PageHeroProps) {
  // Time for the char-by-char title reveal to finish, so the lead
  // paragraph and breadcrumb follow once the title has mostly appeared.
  const titleRevealSpan =
    TITLE_START_DELAY + Array.from(title).length * TITLE_CHAR_DELAY;
  const leadDelay = titleRevealSpan + 0.2;
  const breadcrumbDelay = leadDelay + 0.25;

  return (
    <section
      data-hero
      className="relative flex min-h-[42vh] items-center overflow-hidden pt-16 md:min-h-[48vh] md:pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-[center_35%]"
        />
        {/* Soft left/bottom scrim for type — keeps the photo clearly visible */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <Reveal y={16} duration={0.6}>
          <p className="font-display text-sm font-semibold tracking-[0.4em] text-tan">
            {eyebrow}
          </p>
        </Reveal>
        <AnimatedTitle
          key={title}
          text={title}
          delay={TITLE_START_DELAY}
          charDelay={TITLE_CHAR_DELAY}
          className="mt-3 font-mincho text-3xl font-black leading-snug tracking-[0.06em] text-white md:text-5xl"
        />
        {lead && (
          <Reveal y={12} delay={leadDelay}>
            <p className="mt-5 max-w-2xl text-sm font-normal leading-[1.8] text-white/90 md:text-base">
              {lead}
            </p>
          </Reveal>
        )}
        <Reveal delay={breadcrumbDelay} y={12}>
          <nav
            aria-label="パンくずリスト"
            className="mt-8 flex items-center gap-2 text-xs text-white/80"
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
