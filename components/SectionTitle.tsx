import { Reveal } from "@/components/Reveal";

type SectionTitleProps = {
  /** Small English eyebrow label, e.g. "FEATURES". */
  eyebrow: string;
  /** Main Japanese title. */
  title: string;
  /** Optional lead paragraph under the title. */
  lead?: string;
  /** Center (default) or left aligned. */
  align?: "center" | "left";
  /** Use white text (for dark/photo backgrounds). */
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-10 md:mb-14 ${centered ? "text-center" : "text-left"}`}
    >
      <p
        className={`font-display text-[13px] font-semibold tracking-[0.35em] ${
          light ? "text-tan" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-mincho text-3xl leading-snug tracking-wide md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`rule-diamond mt-6 ${centered ? "mx-auto" : ""} w-24`}
      />
      {lead && (
        <p
          className={`mx-auto mt-6 max-w-3xl text-[15px] leading-loose md:text-base ${
            light ? "text-white/80" : "text-ink/70"
          } ${centered ? "" : "mx-0"}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
