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
  /** Tighter spacing below title (no lead paragraph). */
  compact?: boolean;
};

/** Section headline — soushin-style gothic weight 600 + accent rule. */
export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  light = false,
  compact = false,
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${compact ? "mb-4 md:mb-5" : "mb-10 md:mb-14"} ${centered ? "text-center" : "text-left"}`}
    >
      <p
        className={`font-display text-[13px] font-semibold tracking-[0.28em] ${
          light ? "text-accent" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-mincho text-[1.65rem] font-bold leading-snug tracking-[0.04em] md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-0.5 w-16 ${centered ? "mx-auto" : ""} ${
          light ? "bg-accent" : "bg-primary"
        }`}
      />
      {lead && (
        <p
          className={`mx-auto mt-6 max-w-3xl text-[15px] font-normal leading-[1.9] md:text-base ${
            light ? "text-white/85" : "text-ink/70"
          } ${centered ? "" : "mx-0"}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
