import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoFrame from "@/components/PhotoFrame";
import CampusShowcase from "@/components/pages/CampusShowcase";
import HomeHero from "@/components/pages/HomeHero";
import HorsePortraitGallery from "@/components/pages/HorsePortraitGallery";
import NewsSection from "@/components/pages/NewsSection";
import TrainingCardDeck from "@/components/pages/TrainingCardDeck";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem, RevealScale } from "@/components/Reveal";
import {
  CAMPUS_PHOTOS,
  GALLERY_PHOTOS,
  HORSE_PORTRAITS,
  LIFESTYLE_PHOTOS,
  TRAINING_PHOTOS,
} from "@/lib/photography";
import { NEWS } from "@/lib/news";
import { SCHOOL, STATS } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "馬の学校・東関東馬事専門学院（バジガク）公式サイト。千葉・大阪の8施設、約118頭の馬とともに学び、未経験からJRA厩務員・牧場就職を目指せる馬の専門学校です。",
};

const OPENCAMPUS_DATES = ["5/31（日）", "6/6（土）", "6/28（日）", "7/11（土）"];

type FeatureCard = {
  no: string;
  title: string;
  body: string;
  image: string;
  href: string;
  accentClass: string;
};

const FEATURES: FeatureCard[] = [
  {
    no: "1",
    title: "未経験から最短1年6か月\nJRA競馬学校厩務員課程合格へ",
    body: "在学中にJRA競馬学校厩務員課程を2回受験可能。平成28年以降、41名が在学中に合格し、多くの卒業生が競馬業界で活躍しています。",
    image: "/images/theme/002/feature-jra.jpg",
    href: "/jra",
    accentClass: "bg-primary border-primary",
  },
  {
    no: "2",
    title: "本校が管理する馬、約120頭\n担当馬制度で実践的に学べる",
    body: "約120頭の馬たちの中から担当馬を持ち、毎日実践的に学べる環境です。乗用馬から現役競走馬まで、幅広い経験を積むことができます。",
    image: "/images/theme/img_tokucho_img_002_5.jpg",
    href: "/features",
    accentClass: "bg-[#e9507b] border-[#e9507b]",
  },
  {
    no: "3",
    title: "在学中に最大6つの施設で学べる\n本校独自のインターンシップ制度",
    body: "提携する施設から６つの施設で現場経験を積み、学校で学んだ知識や技術を実践します。卒業後に即戦力として活躍できる力を養います。",
    image: "/images/theme/002/feature-intern.jpg",
    href: "/curriculum",
    accentClass: "bg-[#11a59b] border-[#11a59b]",
  },
  {
    no: "4",
    title: "入学前に学費30％の免除も！\nさらに、在学中に最大70万円戻る",
    body: "令和9年4月入学生を対象に学費30％（約99万円）納付免除。さらに在学中に最大70万円返戻や、授業費分割払いに対応しています。",
    image: "/images/theme/img_top_toku_img_005.jpg",
    href: "/admission",
    accentClass: "bg-[#8850ad] border-[#8850ad]",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== 1. Hero (soushin.ed.jp-style full-viewport slider) ===== */}
      <HomeHero />

      {/* ===== 2. Training in action — playing-card gallery ===== */}
      <section id="training" className="scroll-mt-20 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="TRAINING"
            title="現場で学ぶ、本物の実践"
            compact
          />
          <TrainingCardDeck photos={TRAINING_PHOTOS} />
        </div>
      </section>

      {/* ===== 3. 募集状況 notice band ===== */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="paper-crumple">
              <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:gap-10 md:p-12">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-alert px-4 py-1 text-xs font-bold tracking-wider text-white">
                      重要
                    </span>
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-primary">
                      ADMISSION INFORMATION
                    </p>
                  </div>
                  <h2 className="mt-4 font-mincho text-2xl font-bold leading-snug tracking-[0.06em] text-ink md:text-3xl">
                    令和9年4月生 募集案内
                  </h2>
                  <dl className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/80 md:text-[15px]">
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <dt className="shrink-0 font-bold text-primary">出願期間</dt>
                      <dd>令和8年5月1日（金）〜 10月28日（水）</dd>
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
                    className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
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

      <NewsSection items={NEWS} blogHref={SCHOOL.sns.blog} />

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
                  <AnimatedCounter value={stat.value} />
                  <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">
                    {stat.suffix}
                  </span>
                </p>
                {"note" in stat && stat.note ? (
                  <p className="mt-2 text-[11px] leading-relaxed text-white/55 md:text-xs">
                    {stat.note}
                  </p>
                ) : null}
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
            lead="千葉・大阪の8施設と全国の牧場ネットワーク。約118頭の馬とともに積む実体験が、夢への最短ルートをつくります。"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((card) => (
              <RevealItem key={card.href} className="h-full">
                <Link
                  href={card.href}
                  className="group block h-full overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover"
                >
                  <div className={`border-[6px] border-b-0 p-1.5 pb-0 ${card.accentClass}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={`relative flex min-h-40 items-end gap-3 px-5 pb-5 pt-4 text-white ${card.accentClass}`}>
                    <span className="font-display text-[78px] leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]">
                      {card.no}
                    </span>
                    <h3 className="pb-1 font-mincho text-xl font-bold leading-snug whitespace-pre-line md:text-[1.35rem]">
                      {card.title}
                    </h3>
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
                特徴を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Campus & environment ===== */}
      <section className="overflow-hidden bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="CAMPUS"
            title="夢を育てる、国内最大級の学びのフィールド。"
            lead="馬たちとともに学び、実践を重ねながら技術と知識を身につける。本物の現場で成長できる環境がここにあります。（山武施設／八街施設／大阪施設）"
          />
        </div>
        <CampusShowcase photos={CAMPUS_PHOTOS} />
      </section>

      {/* ===== Horse portraits ===== */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="HORSES"
            title="1頭1頭が、心に残る存在になる。"
            lead="たくさんの馬たちと出会い、触れ合い、それぞれの個性や物語を知る。その一つひとつの経験が、一生忘れられない思い出になります。"
          />
          <HorsePortraitGallery photos={HORSE_PORTRAITS} />
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
                    className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-10 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    参加申込
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

      {/* ===== Photo gallery (3:2 documentary strip) ===== */}
      <section
        className="overflow-hidden bg-cream py-14 md:py-20"
        aria-label="キャンパスフォトギャラリー"
      >
        <Reveal>
          <p className="text-center font-display text-[13px] font-semibold tracking-[0.35em] text-primary">
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
