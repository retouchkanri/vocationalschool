import type { ReactNode } from "react";
import Image from "next/image";

type NumbersBandProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Dark impact band used for "数字で見る" / BAJIGAKU IN NUMBERS sections.
 * School exterior photo sits behind a primary-deep wash so white/tan
 * typography stays readable on every page.
 */
export default function NumbersBand({ children, className }: NumbersBandProps) {
  return (
    <section
      className={`relative overflow-hidden bg-primary-deep py-16 md:py-24 ${className ?? ""}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/facilities/kosha-gaikan.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-deep/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/40 via-transparent to-primary-deep/55" />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
