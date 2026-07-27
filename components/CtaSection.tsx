import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTA_PHOTO } from "@/lib/photography";
import { SCHOOL } from "@/lib/site";

/** Shared bottom-of-page CTA with 16:9 cinematic banner photography. */
export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="photo-vignette absolute inset-0">
        <div className="photo-frame photo-grade-cinematic absolute inset-0">
          <Image
            src={CTA_PHOTO.src}
            alt={CTA_PHOTO.alt}
            fill
            sizes="100vw"
            className="photo-image object-cover object-[center_40%]"
          />
          <div className="photo-overlay" aria-hidden />
        </div>
        <div className="absolute inset-0 bg-primary-deep/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6">
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-[0.4em] text-tan">
            NEXT STEP
          </p>
          <h2 className="mt-4 font-mincho text-3xl font-bold leading-snug tracking-[0.06em] text-white md:text-4xl">
            馬と生きる未来へ、
            <br className="md:hidden" />
            一歩踏み出そう。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-[1.8] text-white/80 md:text-base">
            まずは学校見学・オープンキャンパスで、約120頭の馬たちと本校の学びをご体感ください。
            資料請求・ご相談もお気軽にどうぞ。
          </p>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RevealItem>
            <Link
              href="/opencampus"
              className="group inline-flex min-w-64 items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:shadow-2xl"
            >
              学校見学・オープンキャンパス
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </RevealItem>
          <RevealItem>
            <Link
              href="/admission"
              className="group inline-flex min-w-64 items-center justify-center gap-3 rounded-full border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent"
            >
              募集要項を見る
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.3}>
          <p className="mt-8 text-sm text-white/70">
            お電話でのご相談：
            <a
              href={`tel:${SCHOOL.tel}`}
              className="font-display ml-1 text-lg font-semibold tracking-wider text-tan transition-colors hover:text-accent"
            >
              {SCHOOL.tel}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
