import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import FaqExplorer from "@/components/pages/FaqExplorer";
import { SCHOOL, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "東関東馬事専門学院（バジガク）へのよくある質問Q&A。未経験からの入学、学費・分割払い、寮生活、JRA厩務員受験、学校見学など、気になることをキーワードやカテゴリですぐに検索できます。",
};

const CONTACT_CHANNELS = [
  {
    title: "電話で相談する",
    en: "TEL",
    body: "進路や学費のことなど、馬事学院事務局のスタッフが直接お答えします。お気軽にお電話ください。",
    href: `tel:${SCHOOL.tel}`,
    cta: SCHOOL.tel,
    external: true,
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
  },
  {
    title: "資料請求をする",
    en: "REQUEST",
    body: "学校案内に加えて、オープンキャンパスのご案内も同封してお届けします。ただいまクリアーファイルを無料プレゼント中です。",
    href: "/contact",
    cta: "資料請求・お問合せ",
    external: false,
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "見学して確かめる",
    en: "VISIT",
    body: "乗馬体験や馬のお手入れ体験、在校生との交流も。JR東京駅（八重洲中央口）から無料送迎で参加できます。",
    href: "/opencampus",
    cta: "学校見学・オープンキャンパス",
    external: false,
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
] as const;

export default function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="Q&A"
        title="よくある質問"
        lead="未経験からの入学、学費、寮生活、JRA厩務員のことまで。気になることをすぐに検索できます。"
        image="/images/theme/img_cmn_img_group_a1.jpg"
        breadcrumb="よくある質問"
      />

      {/* FAQ検索・一覧 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FAQ SEARCH"
            title="知りたいことを、すぐに。"
            lead="入学検討者の方から実際に多く寄せられるご質問をまとめました。キーワード検索とカテゴリの絞り込みで、答えがその場で見つかります。"
          />
          <Reveal delay={0.1}>
            <FaqExplorer />
          </Reveal>
        </div>
      </section>

      {/* 数字で見る安心（ダークバンド） */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FACTS"
            title="数字で見る、安心の理由"
            lead="ご質問への答えのなかでも、特に多くの方が安心されるポイントを数字でご紹介します。"
            light
          />
          <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {STATS.map((stat) => (
              <RevealItem
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center transition-colors duration-300 hover:border-tan/40 hover:bg-white/10"
              >
                <p className="font-display text-4xl font-semibold tracking-wider text-tan md:text-5xl">
                  <AnimatedCounter value={stat.value} />
                  <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-4 whitespace-pre-line text-xs leading-relaxed text-white/75 md:text-sm">
                  {stat.label}
                </p>
                {"note" in stat && stat.note ? (
                  <p className="mt-1 text-[11px] leading-relaxed text-white/55 md:text-xs">
                    {stat.note}
                  </p>
                ) : null}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* まだ解決しない方へ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="CONTACT"
            title="まだ解決しない方へ"
            lead="ここに載っていないご質問も、どうぞ遠慮なくお寄せください。電話・資料請求・見学、ご都合に合わせた方法でお答えします。"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-3 md:gap-8">
            {CONTACT_CHANNELS.map((ch) => (
              <RevealItem key={ch.title} className="h-full">
                {ch.external ? (
                  <a
                    href={ch.href}
                    className="shadow-card shadow-card-hover group flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <ContactCardBody {...ch} />
                  </a>
                ) : (
                  <Link
                    href={ch.href}
                    className="shadow-card shadow-card-hover group flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <ContactCardBody {...ch} />
                  </Link>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-xs leading-relaxed text-ink/50">
              {SCHOOL.name}（運営：{SCHOOL.operator}）／{SCHOOL.zip}{" "}
              {SCHOOL.address}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

function ContactCardBody({
  title,
  en,
  body,
  cta,
  icon,
}: {
  title: string;
  en: string;
  body: string;
  cta: string;
  icon: ReactNode;
}) {
  return (
    <>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
        {icon}
      </span>
      <span className="font-display mt-5 text-xs font-semibold tracking-[0.35em] text-primary">
        {en}
      </span>
      <span className="mt-2 font-mincho text-xl text-ink">{title}</span>
      <span className="mt-4 flex-1 text-sm leading-loose text-ink/70">
        {body}
      </span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 group-hover:text-accent">
        {cta}
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </>
  );
}
