"use client";

import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SCHOOL } from "@/lib/site";

type InquiryType = {
  icon: string;
  title: string;
  description: string;
  subject: string;
  href?: string;
};

const INQUIRY_TYPES: InquiryType[] = [
  {
    icon: "📋",
    title: "資料請求",
    description:
      "学校案内・募集要項・オープンキャンパスのご案内をお届けします。クリアーファイル無料プレゼント中。",
    subject: "資料請求希望",
  },
  {
    icon: "🎓",
    title: "入学・学費相談",
    description:
      "出願資格、学費分割、奨学金、寮生活など、進路や費用面のご不安を個別にご相談いただけます。",
    subject: "入学・学費について",
  },
  {
    icon: "🏇",
    title: "見学・体験予約",
    description:
      "オープンキャンパスや個別見学の日程・内容について。馬と触れ合える体験をご案内します。",
    subject: "見学・体験の予約",
    href: "/opencampus",
  },
  {
    icon: "💬",
    title: "その他のご相談",
    description:
      "JRA厩務員、就職実績、取材・ロケのご依頼など、上記以外のお問合せもお気軽にどうぞ。",
    subject: "その他のお問合せ",
  },
];

type InquiryHighlightsProps = {
  onSelectSubject?: (subject: string) => void;
};

export default function InquiryHighlights({
  onSelectSubject,
}: InquiryHighlightsProps) {
  return (
    <>
      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INQUIRY_TYPES.map((item) => (
          <RevealItem key={item.title}>
            {item.href ? (
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 font-mincho text-lg text-ink transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                  {item.description}
                </p>
                <span className="mt-4 text-xs font-bold text-primary transition-colors group-hover:text-accent">
                  詳しく見る →
                </span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => onSelectSubject?.(item.subject)}
                className="group flex h-full w-full flex-col rounded-2xl border border-ink/8 bg-white p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 font-mincho text-lg text-ink transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                  {item.description}
                </p>
                <span className="mt-4 text-xs font-bold text-primary transition-colors group-hover:text-accent">
                  フォームに反映 →
                </span>
              </button>
            )}
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.15}>
        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div className="rounded-2xl border border-meadow bg-gradient-to-br from-cream to-white px-6 py-5 md:px-8">
            <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
              OFFICE HOURS
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              事務局でのご相談は
              <span className="font-bold text-ink"> 平日 10:00〜17:00 </span>
              （土日祝・年末年始を除く）に受け付けています。お急ぎの場合はお電話ください。
            </p>
          </div>
          <a
            href={`tel:${SCHOOL.tel}`}
            className="flex items-center gap-4 rounded-2xl bg-primary px-6 py-4 text-white transition-colors hover:bg-primary-dark md:min-w-[15rem]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
              ☎
            </span>
            <span>
              <span className="block font-display text-[11px] font-semibold tracking-wider text-white/75">
                お電話でのご相談
              </span>
              <span className="mt-0.5 block font-display text-xl font-semibold tracking-wider">
                {SCHOOL.tel}
              </span>
            </span>
          </a>
        </div>
      </Reveal>
    </>
  );
}
