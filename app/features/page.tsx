import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import NumbersBand from "@/components/NumbersBand";
import HomeHero from "@/components/pages/HomeHero";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "馬の学校　比較ポイント／JRA厩務員を目指すなら",
  description:
    "JRA競馬学校の厩務員合格を目指せる学校。馬の学校を比較（合格率、学費、内容、カリキュラム）毎年7月には定員を満たす馬の学校　東関東馬事専門学院。通称、バジガクでは、未経験から最短1年6ヶ月で厩務員合格を目指せる。在学中に最高2回の受験へ。",
  keywords: [
    "バジガク",
    "馬",
    "教育",
    "評判",
    "口コミ",
    "Retouch",
    "リタッチ",
    "引退馬",
    "JRA",
    "競馬会",
    "社台",
    "比較",
    "相談",
    "募集要項",
    "学費",
  ],
};

/** 入口 — 夢への第一歩となる4つのご提案 */
type EntryPoint = {
  no: string;
  tag: string;
  title: string;
  body: ReactNode;
  link?: { href: string; label: string };
};

const entryPoints: EntryPoint[] = [
  {
    no: "01",
    tag: "BEGINNER",
    title: "未経験者・初心者でも安心",
    body: "本校では、毎年入学者の約7割が未経験者・初心者です。基礎から実践まで段階的に学べるため、馬に触れたことがない方でも安心してスタートできます。在学中にJRA競馬学校厩務員課程へ合格した学生も多数います。",
    link: {
      href: "/contact",
      label: "今すぐ資料請求へ",
    },
  },
  {
    no: "02",
    tag: "OPEN CAMPUS",
    title: "オープンキャンパスで未来を確認",
    body: "学校選びは、実際に見て、感じることが大切です。「自分にもできるか」「目指したい環境があるか」を体験し、不安を自信へ変える機会としてご参加ください。",
    link: {
      href: "https://vocationalschool.vercel.app/opencampus",
      label: "学校見学申込へ",
    },
  },
  {
    no: "03",
    tag: "SUPPORT",
    title: "学費サポートも充実",
    body: "本校では授業費の約3割免除をはじめ、インターンシップによる最大50万円の還付制度や20万円の返戻制度をご用意しています。さらに、学費分割制度も充実し、無理なく学べる環境を整えています。",
    link: {
      href: "/admission",
      label: "募集要項へ",
    },
  },
  {
    no: "04",
    tag: "HIGH SCHOOL",
    title: "高校から馬を学ぶという選択",
    body: (
      <>
        中学校卒業後から馬の世界を目指す方には、
        <strong className="font-bold text-ink">
          高校卒業資格を取得しながら専門教育を学べる「東関東馬事高等学院」
        </strong>
        もおすすめです。早くから馬と共に学び、夢への第一歩を踏み出せます。
      </>
    ),
    link: {
      href: "https://bajigaku.site/",
      label: "東関東馬事高等学院",
    },
  },
];

/** 中身 — 何を、どう学ぶのか */
const learningCards = [
  {
    tag: "FEATURE 01",
    title: "一人ひとりに担当馬。毎日が実践",
    body: "約120頭の馬たちの中から自分の担当馬を持ち、飼育管理から騎乗、運動まで日々実践。馬と向き合い続ける中で、知識だけでは身につかない「現場力」を養います。",
    image: "/images/theme/img_tokucho_img_002_2.jpg",
    alt: "担当馬の世話をする学生たち",
  },
  {
    tag: "FEATURE 02",
    title: "約120頭の馬が、生きた教材",
    body: "乗用馬、競技馬、引退競走馬、現役競走馬など、本校が管理する馬は約120頭。一頭一頭の性格や能力、管理方法の違いを学べる、国内でも屈指の実践環境です。",
    image: "/images/theme/img_tokucho_img_002_5.jpg",
    alt: "学校で管理する多くの馬たち",
  },
  {
    tag: "FEATURE 03",
    title: "現場に直結する実践型教育",
    body: "馴致や騎乗訓練、競走馬の育成・調教まで、実際の現場を意識した授業を展開。担当馬が競馬場を走ることもあり、馬の成長と仕事をリアルに学べます。",
    image: "/images/theme/img_tokucho_img_002_3.jpg",
    alt: "実践型の授業を受ける学生たち",
  },
  {
    tag: "FEATURE 04",
    title: "大手育成牧場で報酬型インターン",
    body: "大手の総合牧場をはじめ国内様々な場所で、第一線の現場で研修。在学中の取り組みに応じて最大70万円が戻る制度で、「働きながら学ぶ」を経験できます。",
    image: "/images/theme/img_6_004_img_002_1.jpg",
    alt: "牧場実習で競走馬に騎乗する学生",
  },
  {
    tag: "FEATURE 05",
    title: "全国最大6ヶ所で現場研修",
    body: "全国の競走馬育成牧場や乗馬クラブなどで、在学中に最大6ヶ所の研修を経験。北海道での馬のお産や2歳馬の馴致など、学校だけでは学べない仕事を現場で身につけます。",
    image: "/images/theme/img_6_004_img_002_2.jpg",
    alt: "北海道・関西エリアでの実習風景",
  },
  {
    tag: "FEATURE 06",
    title: "セリから競馬場まで、本物を学ぶ",
    body: "競走馬のセリで馬を購入し、育成・調教を経て、学校の馬が実際のレースへ出走。馬を「買う・育てる・走らせる」という競馬の世界を、学生のうちから実践的に学びます。",
    image: "/images/theme/img_tokucho_img_002_4.jpg",
    alt: "競馬場でレースに向かう学校の馬",
  },
];

/** 出口 — 目指せる進路 */
const careerPaths = [
  {
    en: "JRA GROOM",
    title: "JRA厩務員",
    body: "JRA競馬学校「厩務員課程」の合格を在学中から目指せる、本校を代表する進路です。",
    image: "/images/theme/img_6_006_img_003_4.jpg",
    alt: "現役競走馬とともに歩む学生",
  },
  {
    en: "BREEDING FARM",
    title: "競走馬生産牧場・育成牧場",
    body: "競走馬を生み、鍛える現場へ。インターン研修で培った実践力が即戦力として評価されています。",
    image: "/images/theme/img_6_004_img_002_5.jpg",
    alt: "若馬の馴致調教の様子",
  },
  {
    en: "RIDING CLUB",
    title: "乗馬クラブ",
    body: "騎乗技術と馬の管理能力を活かし、乗馬の楽しさを伝えるインストラクターやスタッフへ。",
    image: "/images/theme/img_6_002_img_002_2.jpg",
    alt: "馬術競技に取り組む学生",
  },
  {
    en: "TOURISM RANCH",
    title: "観光牧場",
    body: "馬とのふれあいを通じて人を笑顔にする仕事。接客と馬の管理、両方の力が活きる進路です。",
    image: "/images/theme/img_6_003_img_002_5.jpg",
    alt: "馬とふれあう学生の様子",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <HomeHero />
      <nav
        aria-label="パンくずリスト"
        className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-ink/60 md:px-6"
      >
        <Link href="/" className="transition-colors hover:text-primary">
          ホーム
        </Link>
        <span aria-hidden>›</span>
        <span className="text-primary">本校の特徴</span>
      </nav>

      {/* 1. Intro — 学校選びの大切さ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="PHILOSOPHY"
            title="学校選びは、これからの人生を選ぶこと。"
            lead="学校生活が充実していることはもちろん大切ですが、本当に重要なのは、その先の未来です。"
          />

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal x={-24} y={0}>
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/theme/img_tokucho_img_002_6.jpg"
                  alt="授業に取り組む学生と馬たち"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal x={24} y={0}>
              <h3 className="font-mincho text-xl leading-relaxed text-ink md:text-2xl">
                卒業後にどのような道へ進み、
                <br />
                どんな力を身につけられるのか。
              </h3>
              <p className="mt-5 text-[15px] leading-loose text-ink/75 md:text-base">
                その答えが、学校選びの価値を決めます。本校では、学費や設備だけでは測れない「学びの価値」を大切にしています。本校では、約118頭の馬とともに学ぶ環境の中で、知識・技術・人間力を育み、夢の実現へと導いています。
              </p>
              <p className="mt-4 text-[15px] leading-loose text-ink/75 md:text-base">
                このページでは、本校ならではの魅力を、「入口」「中身」「出口」という3つの物語を通してご紹介します。ぜひ、あなた自身の未来を重ねながらご覧ください。
              </p>
            </Reveal>
          </div>

          {/* Story navigation */}
          <RevealGroup className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
            {[
              {
                no: "01",
                en: "ENTRY",
                title: "入口",
                text: "夢への第一歩となる4つのご提案",
                href: "#entry",
              },
              {
                no: "02",
                en: "LEARNING",
                title: "中身",
                text: "本物の環境で、本物を学ぶ",
                href: "#learning",
              },
              {
                no: "03",
                en: "CAREER",
                title: "出口",
                text: "安心して馬業界の第一線へ",
                href: "#career",
              },
            ].map((s) => (
              <RevealItem key={s.no}>
                <a
                  href={s.href}
                  className="group flex items-center gap-5 rounded-2xl border border-tan/40 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover"
                >
                  <span className="font-display text-3xl font-semibold tracking-wider text-tan transition-colors duration-300 group-hover:text-accent">
                    {s.no}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[11px] font-semibold tracking-[0.3em] text-primary">
                      {s.en}
                    </span>
                    <span className="mt-1 block font-mincho text-[22px] text-accent">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-xs text-ink/60">
                      {s.text}
                    </span>
                  </span>
                  <span className="text-accent transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 2. Stats impact band */}
      <NumbersBand>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="BAJIGAKU IN NUMBERS"
            title="数字が語る、本校の実力"
            light
          />
          <RevealGroup className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <p className="font-display text-5xl font-semibold tracking-wide text-tan md:text-6xl">
                  <AnimatedCounter
                    value={s.value}
                    className="tabular-nums"
                  />
                  <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">
                    {s.suffix}
                  </span>
                </p>
                <div className="mx-auto mt-4 h-px w-10 bg-accent" />
                <p className="mt-3 text-xs leading-relaxed text-white/70 md:text-sm">
                  {s.label}
                </p>
                {"note" in s && s.note ? (
                  <p className="mt-1 text-[11px] leading-relaxed text-white/55 md:text-xs">
                    {s.note}
                  </p>
                ) : null}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </NumbersBand>

      {/* 3. 入口 — Entry */}
      <section id="entry" className="scroll-mt-20 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="STORY 01 — ENTRY"
            title={
              <>
                <span className="font-black text-primary">「入口」</span>
                — 未経験から、全国から。
              </>
            }
            lead="入学を検討される皆様へ「夢への第一歩となる4つのご提案」"
          />
          <RevealGroup className="grid gap-5 md:grid-cols-2 md:gap-7">
            {entryPoints.map((p) => (
              <RevealItem key={p.no}>
                <article className="group h-full rounded-2xl bg-white p-7 shadow-card shadow-card-hover transition-transform duration-300 hover:-translate-y-1 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-semibold tracking-wider text-accent">
                      {p.no}
                    </span>
                    <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-accent">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-mincho text-xl text-ink md:text-[22px]">
                    {p.title}
                  </h3>
                  <div className="mt-3 h-px w-12 bg-tan/60 transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
                  <p className="mt-4 text-sm leading-loose text-ink/75 md:text-[15px]">
                    {p.body}
                  </p>
                  {p.link &&
                    (p.link.href.startsWith("http") ? (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
                      >
                        {p.link.label}
                        <span aria-hidden>→</span>
                      </a>
                    ) : (
                      <Link
                        href={p.link.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
                      >
                        {p.link.label}
                        <span aria-hidden>→</span>
                      </Link>
                    ))}                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. 中身 — Learning */}
      <section id="learning" className="scroll-mt-20 bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="STORY 02 — LEARNING"
            title={
              <>
                <span className="font-black text-primary">「中身」</span>
                — 本物の環境で、本物を学ぶ。
              </>
            }
            lead="乗用馬から現役競走馬まで約118頭。生きた教材に囲まれた実践の毎日が、未経験者を2年間でプロへと育てます。"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {learningCards.map((c) => (
              <RevealItem key={c.tag}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover transition-transform duration-300 hover:-translate-y-1">
                  <div className="img-zoom relative aspect-[4/3]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-primary">
                      {c.tag}
                    </p>
                    <h3 className="mt-2 font-mincho text-lg leading-snug text-ink md:text-xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-loose text-ink/75">
                      {c.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-14 md:mt-16">
            <div className="paper-crumple">
              <div className="p-8 md:p-10">
                <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-primary">
                  PAID INTERNSHIP
                </p>
                <p className="mt-2 font-mincho text-lg leading-relaxed text-ink md:text-xl">
                  「働きながら学び、学びながら働ける」——
                  在学中の取り組みにより
                  <span className="mx-1 font-display text-2xl font-semibold text-accent md:text-3xl">
                    最大70万円
                  </span>
                  が戻る報酬型インターン制度。
                </p>
                <p className="mt-3 text-sm leading-loose text-ink/70 md:text-[15px]">
                  提携する牧場・乗馬クラブでの研修に応じて経費が学生に還付される、本校独自の仕組みです。現場での経験がそのまま学びとなり、経済面の支えにもなります。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 出口 — Career */}
      <section id="career" className="scroll-mt-20 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="STORY 03 — CAREER"
            title={
              <>
                <span className="font-black text-primary">「出口」</span>
                — 安心して馬業界の第一線へ。
              </>
            }
            lead="本校では、設立から15年の中で築き上げた業界からの信頼と業界への実績。一人ひとりにあった進路へと導きます。"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((c) => (
              <RevealItem key={c.en}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover transition-transform duration-300 hover:-translate-y-1">
                  <div className="img-zoom relative aspect-[4/3]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-primary">
                      {c.en}
                    </p>
                    <h3 className="mt-2 font-mincho text-lg leading-snug text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-loose text-ink/75">
                      {c.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* JRA highlight */}
          <Reveal delay={0.1}>
            <div className="relative mt-14 overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src="/images/theme/img_6_006_img_003_3.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/40 via-primary-deep/40 to-primary-deep/15" />
              </div>
              <div className="relative z-10 px-6 py-12 md:px-14 md:py-16">
                <p className="font-display text-[12px] font-semibold tracking-[0.35em] text-tan">
                  JRA ACHIEVEMENT
                </p>
                <h3 className="mt-4 font-mincho text-2xl leading-snug text-white md:text-3xl">
                  JRA競馬学校「厩務員課程」
                  <br className="sm:hidden" />
                  <span className="text-accent">72名</span>合格。
                </h3>
                <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-white/85 md:text-[15px]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    未経験からの入学後、最短1年6ヶ月で合格した実績があります。
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    国語・社会・競馬一般の筆記試験に対応した独自の受験対策で、在学中の受験挑戦を支えます。
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    女性のJRA厩務員も本校から誕生しています。
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/jra"
                    className="group mx-auto inline-flex w-fit items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white md:mx-0 md:text-base"
                  >
                    JRA厩務員へ
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/admission"
                    className="group mx-auto inline-flex w-fit items-center justify-center gap-3 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent md:mx-0 md:text-base"
                  >
                    募集要項
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
