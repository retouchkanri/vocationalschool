import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTA_PHOTO } from "@/lib/photography";
import { SCHOOL } from "@/lib/site";

/** Shared bottom-of-page CTA — soushin-style rectangular buttons. */
export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <Image
          src={CTA_PHOTO.src}
          alt={CTA_PHOTO.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft wash — keeps the ranch photo visible while text stays readable */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6">
        <Reveal>
          <p className="font-display text-sm font-semibold tracking-[0.35em] text-accent drop-shadow">
            NEXT STEP
          </p>
          <h2 className="mt-4 font-mincho text-3xl font-semibold leading-snug tracking-[0.04em] text-white drop-shadow-md md:text-4xl">
            馬と生きる未来へ、
            <br className="md:hidden" />
            一歩踏み出そう。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-[1.9] text-white drop-shadow md:text-base">
            まずは学校見学・オープンキャンパスで、約118頭の馬たちと本校の学びをご体感ください。
            資料請求・ご相談もお気軽にどうぞ。
          </p>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RevealItem>
            <Link
              href="/opencampus"
              className="inline-flex h-14 min-w-64 items-center justify-center bg-primary px-8 font-mincho text-base font-semibold text-white transition-colors duration-300 hover:bg-accent hover:text-ink"
            >
              見学・体験
            </Link>
          </RevealItem>
          <RevealItem>
            <Link
              href="/admission"
              className="inline-flex h-14 min-w-64 items-center justify-center border border-white px-8 font-mincho text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              募集要項
            </Link>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.25}>
          <p className="mt-8 text-sm text-white drop-shadow">
            お電話でのご相談：
            <a
              href={`tel:${SCHOOL.tel}`}
              className="font-display ml-1 text-lg font-semibold tracking-wider text-accent transition-colors hover:text-white"
            >
              {SCHOOL.tel}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
