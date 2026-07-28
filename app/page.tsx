import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PhotoFrame from "@/components/PhotoFrame";
import CampusShowcase from "@/components/pages/CampusShowcase";
import TrainingCardDeck from "@/components/pages/TrainingCardDeck";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem, RevealScale } from "@/components/Reveal";
import {
  CAMPUS_PHOTOS,
  GALLERY_PHOTOS,
  HERO_PHOTOS,
  HORSE_PORTRAITS,
  LIFESTYLE_PHOTOS,
  TRAINING_PHOTOS,
} from "@/lib/photography";
import { SCHOOL, STATS } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "馬の学校・東関東馬事専門学院（バジガク）公式サイト。千葉・大阪の4施設、約120頭の馬とともに学び、未経験からJRA厩務員・牧場就職を目指せる馬の専門学校です。",
};

const OPENCAMPUS_DATES = ["5/31（日）", "6/6（土）", "6/28（日）", "7/11（土）"];

type NewsItem = {
  date: string;
  category: string;
  title: string;
  href: string;
  external?: boolean;
};

const NEWS: NewsItem[] = [
  {
    date: "2025.01.03",
    category: "ブログ",
    title: "学校ブログをアメブロへ移転しました。日々の様子は新ブログでご覧ください。",
    href: SCHOOL.sns.blog,
    external: true,
  },
  {
    date: "2024.03.25",
    category: "施設",
    title:
      "関西研修施設「ホースレスト」（大阪府河内長野市）を研修・合宿に活用しています。",
    href: "/about",
  },
  {
    date: "2024.03.25",
    category: "施設",
    title:
      "千葉県八街市の広大な総合施設が、JRA厩務員受験対策・競走馬育成・馬の養老牧場を担っています。",
    href: "/features",
  },
  {
    date: "2024.03.10",
    category: "実績",
    title:
      "未経験の入学から最短1年6ヶ月で、JRA競馬学校厩務員課程に合格した実績が生まれました。",
    href: "/jra",
  },
  {
    date: "2023.01.21",
    category: "実績",
    title: "在校生がJRA競馬学校「厩務員課程」の受験に合格しました。",
    href: "/jra",
  },
  {
    date: "2022.12.20",
    category: "支援制度",
    title:
      "災害被害等による学費のお悩みに対応する、馬事学院独自の救済支援制度を設けています。",
    href: "/admission",
  },
];

type FeatureCard = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  href: string;
};

const FEATURES: FeatureCard[] = [
  {
    eyebrow: "JRA",
    title: "在学中に最大2回、JRA厩務員へ挑戦",
    body: "JRA競馬学校厩務員課程の合格実績は10年連続。筆記試験対策と実践訓練で、未経験からの合格者を多数輩出しています。",
    image: "/images/theme/img_top_toku_img_003.jpg",
    href: "/jra",
  },
  {
    eyebrow: "ENVIRONMENT",
    title: "約120頭とともに学ぶ、国内最大級の環境",
    body: "千葉・大阪の4施設で、おとなしい乗用馬から現役競走馬まで約120頭を学生自身が管理。入学すると担当馬を持てます。",
    image: "/images/theme/img_tokucho_img_002_5.jpg",
    href: "/features",
  },
  {
    eyebrow: "CURRICULUM",
    title: "現場で働きながら学ぶ実践カリキュラム",
    body: "全国の育成牧場・乗馬クラブと連携し、在学中に最大6ヶ所でインターン研修。取り組みに応じて最大70万円が戻る報酬型インターン制度もあります。",
    image: "/images/theme/img_top_toku_img_002.jpg",
    href: "/curriculum",
  },
  {
    eyebrow: "SUPPORT",
    title: "学費の負担を抑える独自の支援制度",
    body: "令和9年4月生対象の、授業費30％（90万円相当）納付免除の支援制度。在学中2年〜最大5年間の分割払いにも対応しています。",
    image: "/images/theme/img_top_toku_img_005.jpg",
    href: "/admission",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== 1. Cinematic hero (21:9) ===== */}
      <section
        data-hero
        className="relative flex min-h-[88vh] items-end overflow-hidden md:min-h-[92vh] md:items-center"
      >
        <HeroSlider
          images={HERO_PHOTOS.map((p) => p.src)}
          alts={HERO_PHOTOS.map((p) => p.alt)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-deep/75 via-primary-deep/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-primary-deep/85 via-primary-deep/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-28 md:px-6 md:pb-28 md:pt-32">
          <Reveal y={24}>
            <p className="font-display text-[11px] font-semibold tracking-[0.45em] text-tan md:text-sm">
              PREMIUM DOCUMENTARY — BAJIGAKU
            </p>
            <h1 className="mt-5 max-w-3xl font-mincho text-4xl font-bold leading-[1.35] tracking-[0.06em] text-white md:text-6xl md:leading-[1.3]">
              ここで学びたい。
              <br />
              <span className="text-[0.92em] text-white/95">
                馬とともに、一生の仕事へ。
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm font-normal leading-[1.8] text-white/85 md:text-base">
              本物の馬、本物の仲間、本物の現場。
              未経験からJRA厩務員・牧場・乗馬クラブへ——約120頭の馬とともに歩む、国内最大級の馬の専門学校です。
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`tel:${SCHOOL.tel}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:shadow-2xl"
              >
                資料請求・ご相談
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <Link
                href="/opencampus"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/80 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent"
              >
                学校見学に申し込む
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/70">
              お電話でのご相談・資料請求：
              <span className="font-display ml-1 text-sm font-semibold tracking-wider text-tan">
                {SCHOOL.tel}
              </span>
              （馬事学院事務局）
            </p>
          </Reveal>
        </div>

        {/* Scroll-down indicator */}
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="font-display text-[10px] font-semibold tracking-[0.4em] text-white/70">
            SCROLL
          </span>
          <span className="animate-float text-white/80">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </section>

      {/* ===== 2. Training in action — playing-card gallery ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="TRAINING"
            title="現場で学ぶ、本物の実践"
            lead="乗馬・グルーミング・厩務——動きのある瞬間が、本校の教育を物語ります。カードをクリックして詳しくご覧ください。"
          />
          <TrainingCardDeck photos={TRAINING_PHOTOS} />
        </div>
      </section>

      {/* ===== 3. 募集状況 notice band ===== */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="paper-crumple">
              <div className="flex flex-col gap-8 p-6 pl-9 md:flex-row md:items-center md:gap-10 md:p-10 md:pl-14">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-alert px-4 py-1 text-xs font-bold tracking-wider text-white">
                      重要
                    </span>
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
                      ADMISSION INFORMATION
                    </p>
                  </div>
                  <h2 className="mt-4 font-mincho text-2xl font-bold leading-snug tracking-[0.06em] text-ink md:text-3xl">
                    令和9年4月生 募集案内
                  </h2>
                  <dl className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/80 md:text-[15px]">
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <dt className="shrink-0 font-bold text-primary">出願期間</dt>
                      <dd>令和8年5月1日（金）〜 7月24日（金）</dd>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <dt className="shrink-0 font-bold text-primary">選考方法</dt>
                      <dd>
                        随時選考のため、
                        <span className="font-bold text-alert">
                          定員になり次第、募集を終了します。
                        </span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    令和9年4月生には、授業費30％（90万円相当）の納付が免除となる支援制度（入学内定者対象）をご用意しています。
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href="/admission"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark"
                  >
                    募集要項を見る
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

      {/* ===== 3. NEWS ===== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="NEWS"
            title="お知らせ"
            lead="学校の最新情報や施設・実績に関するトピックスをお届けします。"
          />
          <RevealGroup>
            <ul className="divide-y divide-tan/40 rounded-2xl bg-white px-6 shadow-card md:px-10">
              {NEWS.map((item) => (
                <li key={`${item.date}-${item.title}`}>
                  <RevealItem>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-5"
                      >
                        <NewsRow item={item} />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-5"
                      >
                        <NewsRow item={item} />
                      </Link>
                    )}
                  </RevealItem>
                </li>
              ))}
            </ul>
          </RevealGroup>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center">
              <a
                href={SCHOOL.sns.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                日々の様子は学校ブログ（アメブロ）で
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== 4a. Stats band (dark) ===== */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            light
            eyebrow="BAJIGAKU IN NUMBERS"
            title="数字で見る、本校の教育環境"
            lead="馬の学校選びは、卒業後の進路に直結します。規模と実績が、本校の学びを物語ります。"
          />
          <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {STATS.map((stat) => (
              <RevealItem key={stat.label} className="text-center">
                <p className="font-display text-5xl font-semibold tracking-wide text-tan md:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.value === 120 ? "約" : ""}
                  />
                  <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">
                    {stat.suffix}
                  </span>
                </p>
                <div className="rule-diamond mx-auto mt-5 w-16" aria-hidden />
                <p className="mt-4 text-xs leading-relaxed text-white/75 md:text-sm">
                  {stat.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== 4b. 本校の特徴 digest ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FEATURES"
            title="本校が選ばれる理由"
            lead="千葉・大阪の4施設と全国の牧場ネットワーク。約120頭の馬とともに積む実体験が、夢への最短ルートをつくります。"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((card) => (
              <RevealItem key={card.href} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover"
                >
                  <div className="shadow-card">
                    <PhotoFrame
                      src={card.image}
                      alt={card.title}
                      aspect="card"
                      grade="documentary"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      zoom
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-accent">
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-2 font-sans text-lg font-bold leading-snug text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {card.body}
                    </p>
                    <p className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-primary transition-colors group-hover:text-accent">
                      詳しく見る
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2}>
            <p className="mt-12 text-center">
              <Link
                href="/features"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                本校の特徴をすべて見る
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Campus & environment ===== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="CAMPUS"
            title="広い緑と、暮らす場所"
            lead="放牧地、アリーナ、学生寮——キャンパス全体が、馬とともに学ぶ舞台です。"
          />
          <CampusShowcase photos={CAMPUS_PHOTOS} />
        </div>
      </section>

      {/* ===== Horse portraits ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="HORSES"
            title="一匹一匹が、記憶に残る"
            lead="約120頭の馬たち。担当馬との出会いが、あなたの学びの中心になります。"
          />
          <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {HORSE_PORTRAITS.map((photo) => (
              <RevealItem key={photo.src}>
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  aspect="gallery"
                  grade="portrait"
                  caption={photo.caption}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="shadow-card"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== Student lifestyle (1:1) ===== */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            light
            eyebrow="LIFESTYLE"
            title="学びの先にある、毎日"
            lead="仲間との時間、寮生活、馬の世話——入学を決めるのは、授業だけではありません。"
          />
          <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {LIFESTYLE_PHOTOS.map((photo) => (
              <RevealItem key={photo.src}>
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  aspect="story"
                  grade="documentary"
                  caption={photo.caption}
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== 5. 学校見学・オープンキャンパス ===== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                align="left"
                eyebrow="OPEN CAMPUS"
                title="まずは、馬たちに会いに来てください。"
              />
              <Reveal>
                <p className="text-sm leading-loose text-ink/80 md:text-[15px]">
                  入学をご検討中の方には、まず学校見学・入学説明会へのご参加をお願いしています。
                  在校生の様子や授業内容、馬業界が求める人材像まで、現地でじっくりご確認いただけます。
                  説明会後には乗馬体験や馬のお手入れ体験、在校生との交流も。
                  JR東京駅（八重洲中央口）までの無料送迎があるので、遠方の方も安心してご参加いただけます。
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-7">
                  <p className="text-xs font-bold tracking-wider text-primary">
                    開催日程（令和9年4月生対象）
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {OPENCAMPUS_DATES.map((date) => (
                      <li
                        key={date}
                        className="rounded-full border border-tan/70 bg-white px-4 py-1.5 font-display text-sm font-semibold tracking-wider text-primary"
                      >
                        {date}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-9">
                  <Link
                    href="/opencampus"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-10 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:shadow-2xl"
                  >
                    オープンキャンパスに申し込む
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <p className="mt-4 text-xs leading-relaxed text-ink/60">
                    資料請求をいただいた方には、学校案内とあわせてオープンキャンパスのご案内もお送りしています。
                  </p>
                </div>
              </Reveal>
            </div>

            <div>
              <RevealScale>
                <PhotoFrame
                  src="/images/theme/img_taiken_img_001_1.jpg"
                  alt="学校見学・入学説明会の様子"
                  aspect="card"
                  grade="cinematic"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="shadow-card"
                />
              </RevealScale>
              <RevealGroup className="mt-4 grid grid-cols-2 gap-4">
                <RevealItem>
                  <PhotoFrame
                    src="/images/theme/img_taiken_img_002_1.jpg"
                    alt="オープンキャンパスでの乗馬体験"
                    aspect="card"
                    grade="documentary"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="shadow-card"
                  />
                </RevealItem>
                <RevealItem>
                  <PhotoFrame
                    src="/images/theme/img_taiken_img_002_2.jpg"
                    alt="馬のお手入れ体験・ふれあい"
                    aspect="card"
                    grade="documentary"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="shadow-card"
                  />
                </RevealItem>
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. YouTube & Instagram ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="SOCIAL MEDIA"
            title="SNSで、バジガクの毎日を"
            lead="学校の日常や馬たちの様子を発信中です。入学前に、キャンパスの空気をのぞいてみてください。"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            <RevealItem className="h-full">
              <a
                href={SCHOOL.sns.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-card shadow-card-hover md:p-10"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF0000]/10 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-[#FF0000]"
                    aria-hidden
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
                  </svg>
                </span>
                <h3 className="mt-5 font-sans text-xl font-bold text-ink">
                  公式YouTubeチャンネル
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  授業風景や馬たちの日常を、動画でありのままにお届けしています。
                </p>
                <p className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-primary transition-colors group-hover:text-accent">
                  チャンネルを見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </a>
            </RevealItem>
            <RevealItem className="h-full">
              <a
                href={SCHOOL.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-card shadow-card-hover md:p-10"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-white"
                    aria-hidden
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.9 3.9 0 0 1-.9 1.4 3.9 3.9 0 0 1-1.4.9c-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1m0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.8-.3 1.8-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.8.3 1.8.3 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.8.3-1.8.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8a2.6 2.6 0 0 0-.7-1.1 2.6 2.6 0 0 0-1.1-.7c-.3-.1-.8-.3-1.8-.3-1.3-.1-1.6-.1-4.8-.1zm0 3.1a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0z" />
                  </svg>
                </span>
                <h3 className="mt-5 font-sans text-xl font-bold text-ink">
                  公式Instagram
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  学生と馬たちの何気ない瞬間を、写真で切り取ってお届けしています。
                </p>
                <p className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-primary transition-colors group-hover:text-accent">
                  Instagramを見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </a>
            </RevealItem>
          </RevealGroup>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SCHOOL.sns.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-tan/70 bg-white px-5 py-2 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L1 2h6.4l4.4 5.9L18.9 2zm-1.1 18.1h1.7L6.5 3.8H4.7l13.1 16.3z" />
                </svg>
                X（旧Twitter）@bajigakuin
              </a>
              <a
                href={SCHOOL.sns.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-tan/70 bg-white px-5 py-2 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                学校ブログ（アメブロ）
                <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Photo gallery (3:2 documentary strip) ===== */}
      <section
        className="overflow-hidden bg-cream py-14 md:py-20"
        aria-label="キャンパスフォトギャラリー"
      >
        <Reveal>
          <p className="text-center font-display text-[13px] font-semibold tracking-[0.35em] text-accent">
            DOCUMENTARY GALLERY
          </p>
          <h2 className="mt-3 text-center font-mincho text-2xl font-bold leading-snug tracking-[0.06em] text-ink md:text-3xl">
            馬たちと過ごす、バジガクの日常
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm font-normal leading-[1.8] text-ink/65">
            70% ドキュメンタリー · 20% ライフスタイル · 10% プレミアム——本物の学びを、写真で伝えます。
          </p>
        </Reveal>
        <div className="mt-10">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex gap-4 pr-4"
                aria-hidden={copy === 1}
              >
                {GALLERY_PHOTOS.map((photo) => (
                  <div
                    key={`${copy}-${photo.src}`}
                    className="relative h-48 w-72 shrink-0 overflow-hidden md:h-60 md:w-[22.5rem]"
                  >
                    <div className="photo-frame photo-grade-documentary relative h-full w-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="360px"
                        className="photo-image object-cover"
                      />
                      <div className="photo-overlay" aria-hidden />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. CTA ===== */}
      <CtaSection />
    </div>
  );
}

/** Inner layout for a NEWS row (shared between internal Link and external anchor). */
function NewsRow({ item }: { item: NewsItem }) {
  return (
    <>
      <time className="w-24 shrink-0 font-display text-sm font-semibold tracking-wider text-primary/70">
        {item.date}
      </time>
      <span className="w-fit shrink-0 rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent-dark">
        {item.category}
      </span>
      <span className="text-sm leading-relaxed text-ink/85 transition-colors group-hover:text-accent md:text-[15px]">
        {item.title}
      </span>
      <span
        className="ml-auto hidden shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 sm:block"
        aria-hidden
      >
        →
      </span>
    </>
  );
}
