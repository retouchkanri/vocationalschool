import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "高校卒業後馬の世界へ／未経験から安心の馬の学校",
  description:
    "馬の仕事を目指すためには、千葉県にあるウマの学校　東関東馬事専門学院がおススメです。卒業生の評判も高く、充実したカリキュラムが準備されています。馬の世界を目指すなら東関東馬事高等学院（株式会社馬事学院）",
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

/** 授業内容カード（/images/theme/img_curriculum_img_002_1..6.jpg） */
const LESSONS = [
  {
    image: "/images/theme/img_curriculum_img_002_1.jpg",
    title: "基礎から積み上げる騎乗訓練",
    text: "入学者の約7割はまったくの初心者。基礎訓練からのわかりやすい指導で、未経験からでも着実に騎乗技術を身につけていきます。",
  },
  {
    image: "/images/theme/img_curriculum_img_002_2.jpg",
    title: "担当馬制度による厩務実習",
    text: "一人1頭以上（最大4頭）の担当馬を受け持ち、体調管理・飼養管理・手入れ・検温といった厩務の基本を毎日の実習で習得します。",
  },
  {
    image: "/images/theme/img_curriculum_img_002_3.jpg",
    title: "現場で学ぶインターン研修",
    text: "全国の生産牧場・育成牧場・乗馬クラブ等と連携し、在学中に最大6ヶ所の職場で研修が可能。働きながら学べる実践型の授業です。",
  },
  {
    image: "/images/theme/img_curriculum_img_002_4.jpg",
    title: "JRA厩務員 筆記試験対策",
    text: "JRA競馬学校「厩務員課程」の受験に向けた筆記試験対策を実施。在学中に最大2回の受験が可能で、合格者を72名で輩出しています。",
  },
  {
    image: "/images/theme/img_curriculum_img_002_5.jpg",
    title: "夢の実現へ、徹底した進路サポート",
    text: "生産牧場・育成牧場・乗馬クラブ・観光牧場・JRA厩務員など、目指す進路に合わせて一人ひとりを卒業まで徹底的にサポートします。",
  },
  {
    image: "/images/theme/img_curriculum_img_002_6.jpg",
    title: "118頭を超える馬たちが教材",
    text: "おとなしい乗用馬から馬術競技馬、引退競走馬、現役競走馬まで。多様な馬たちと向き合うことで、本物のノウハウを学び取ります。",
  },
] as const;

/** 学びのステップ（抽出資料の事実のみで構成） */
const STEPS = [
  {
    step: "01",
    period: "入学〜",
    title: "おとなしい乗用馬で基礎を固める",
    text: "入学すると一人ひとりに担当馬が提供されます。まずはおとなしい乗用馬を受け持ち、体調管理・飼養管理・手入れ・検温など厩務の基本と、騎乗の基礎訓練からスタートします。",
  },
  {
    step: "02",
    period: "入学6ヶ月以降",
    title: "実際の現場でインターン研修",
    text: "入学から6ヶ月以降は、提携する牧場・乗馬クラブなど実際の現場で学ぶ機会が始まります。在学中に最大6ヶ所の職場を経験し、現場対応力を養います。",
  },
  {
    step: "03",
    period: "技術レベルの向上に応じて",
    title: "育成馬・現役競走馬、そして受験へ",
    text: "技術の向上に応じて、引退競走馬やデビュー前の1歳育成馬、現役競走馬も担当。キャンパス内で年間10回以上開催される公認馬術大会にも費用負担なしで出場でき、JRA競馬学校「厩務員課程」は在学中に最大2回の受験が可能です。",
  },
  {
    step: "04",
    period: "2年間の集大成",
    title: "馬業界の第一線へ",
    text: "未経験から2年間で技術と知識を習得し、競走馬の生産牧場・育成牧場、乗馬クラブ、観光牧場、JRA厩務員といった進路へ。卒業生は業界の第一線で活躍しています。",
  },
] as const;

/** 実習・インターンの特徴（photos: img_6_003_* / img_6_002_*） */
const INTERNSHIP = [
  {
    image: "/images/theme/img_6_003_img_002_2.jpg",
    tag: "最大6ヶ所",
    title: "在学中に最大6つの施設で学べる",
    text: "提携する施設から６つの施設で現場経験を積み、学校で学んだ知識や技術を実践します。卒業後に即戦力として活躍できる力を養います。",
  },
  {
    image: "/images/theme/img_6_003_img_002_5.jpg",
    tag: "月あたり約10万円",
    title: "報酬型インターン制度",
    text: "独自制度により、実習中は1ヶ月あたり約10万円の報酬を受け取れます。「働きながら学び、学びながら働ける」のが本校の実習の大きな特長です。",
  },
  {
    image: "/images/theme/img_6_002_img_002_3.jpg",
    tag: "業界との信頼関係",
    title: "大手育成牧場との連携",
    text: "実習先には、国内最大級の社台グループ（社台ファーム・追分ファーム）や関西最大級のグリーンウッドパークなど、競走馬の生産・育成のトップレベルの職場が並びます。",
  },
] as const;

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="CURRICULUM"
        title="授業内容・カリキュラム"
        lead="未経験を前提に、厩務・騎乗・馬の管理を実習中心で段階的に学ぶ2年間。118頭を超える馬たちと現場での研修が、あなたをプロへと育てます。"
        image="/images/theme/img_curriculum_img_001_1.jpg"
        breadcrumb="授業・カリキュラム"
      />

      {/* 1. 学びの全体像 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="OVERVIEW"
            title="学びの全体像"
            lead="馬の仕事は、数百万円から数千万円ものサラブレッドという「馬主様の財産」を預かる、高い専門性が求められる世界です。だからこそ本校は、実体験を重ねる実習中心の授業にこだわっています。"
          />

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal x={-24} y={0}>
              <div className="img-zoom overflow-hidden rounded-2xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/theme/img_tokucho_img_002_3.jpg"
                    alt="授業中の学生たちの様子"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal x={24} y={0}>
              <h3 className="font-mincho text-2xl leading-relaxed text-ink md:text-3xl">
                未経験から2年間で、
                <br />
                現場で通用する力を。
              </h3>
              <p className="mt-6 text-[15px] leading-loose text-ink/75 md:text-base">
                本校のカリキュラムは、馬に触れたことのない方を前提に組み立てられています。厩務（馬の世話）・騎乗・馬の管理を基礎から段階的に学び、未経験から2年間で馬業界に必要な技術と知識を習得します。
              </p>
              <p className="mt-4 text-[15px] leading-loose text-ink/75 md:text-base">
                教材となるのは、関東（千葉県3ヶ所）と関西（大阪府1ヶ所）の拠点で学生が管理する118頭を超える馬たち。一人1頭以上の担当馬を受け持ち、毎日馬と向き合う中で、競走馬のノウハウと「考える力」を養います。
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
            {[
              { value: 7, prefix: "約", suffix: "割", label: "入学者は馬の未経験者" },
              { value: 2, prefix: "", suffix: "年間", label: "技術・知識を習得する課程" },
              { value: 118, prefix: "", suffix: "頭超", label: "学生が管理する馬たち" },
              { value: 4, prefix: "最大", suffix: "頭", label: "一人あたりの担当馬" },
            ].map((stat) => (
              <RevealItem key={stat.label}>
                <div className="rounded-2xl border border-tan/40 bg-white p-5 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-6">
                  <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 2. 授業内容カード */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="LESSONS"
            title="6つの授業内容"
            lead="厩務・騎乗・受験対策から進路サポートまで。実習を中心に、馬のプロに必要な力をまるごと育てる授業です。"
          />

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {LESSONS.map((lesson, i) => (
              <RevealItem key={lesson.title}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div className="img-zoom relative">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={lesson.image}
                        alt={lesson.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="font-display absolute left-4 top-4 rounded-full bg-primary-deep/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-tan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-mincho text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-primary md:text-xl">
                      {lesson.title}
                    </h3>
                    <p className="mt-3 text-sm leading-loose text-ink/70">
                      {lesson.text}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 3. 学びのステップ（ダークバンド） */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            light
            eyebrow="STEP BY STEP"
            title="未経験からプロへ、学びのステップ"
            lead="おとなしい乗用馬での基礎から、現役競走馬まで。技術レベルに合わせて学びが段階的にステップアップしていきます。"
          />

          <ol className="relative ml-4 border-l border-white/20 md:ml-6">
            {STEPS.map((item, i) => (
              <li
                key={item.step}
                className={`relative pl-8 md:pl-12 ${
                  i === STEPS.length - 1 ? "" : "pb-12 md:pb-14"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute -left-[9px] top-1 h-[17px] w-[17px] rounded-full border-2 border-accent bg-primary-deep"
                />
                <Reveal>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-3xl font-semibold tracking-widest text-accent md:text-4xl">
                      {item.step}
                    </span>
                    <span className="rounded-full border border-tan/40 px-3 py-1 text-xs tracking-wider text-tan">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-3 font-mincho text-xl leading-snug text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-loose text-white/75 md:text-[15px]">
                    {item.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. 実習・インターン */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="INTERNSHIP"
            title="実習・インターン研修"
            lead="就職前にどれだけ豊富な実体験を積めるかが、夢の実現を左右します。本校では業界との信頼関係を活かし、在学中から本物の現場で経験を重ねられます。"
          />

          <RevealGroup className="grid gap-6 md:grid-cols-3 md:gap-8">
            {INTERNSHIP.map((item) => (
              <RevealItem key={item.title}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div className="img-zoom relative">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute bottom-4 left-4 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-mincho text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-primary md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-loose text-ink/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10 md:mt-14">
            <div className="rounded-2xl border border-tan/40 bg-cream p-6 md:p-8">
              <p className="font-display text-xs font-semibold tracking-[0.35em] text-primary">
                REFUND SYSTEM
              </p>
              <h3 className="mt-2 font-mincho text-xl leading-snug text-ink md:text-2xl">
                研修が、学費の負担軽減にもつながります。
              </h3>
              <p className="mt-3 text-sm leading-loose text-ink/70 md:text-[15px]">
                提携する牧場・乗馬クラブからの「学校運営協力金」を、研修回数などに応じて学生の皆さまに諸経費として還付しています（在学中の見込額は最大50万円程度）。詳しくは募集要項をご確認ください。
              </p>
              <Link
                href="/admission"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                募集要項・学費について
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 関連リンク */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="RELATED"
            title="あわせて読みたい"
            lead="カリキュラムとあわせて、JRA厩務員への道と本校ならではの特徴もぜひご覧ください。"
          />

          <RevealGroup className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                href: "/jra",
                eyebrow: "JRA",
                title: "JRA厩務員を目指す方へ",
                text: "在学中に最大2回の受験機会。JRA競馬学校「厩務員課程」合格72名の実績と、受験対策の詳細をご紹介します。",
                image: "/images/theme/img_top_toku_img_003.jpg",
                alt: "JRA厩務員課程合格に関する写真",
              },
              {
                href: "/features",
                eyebrow: "FEATURES",
                title: "本校の特徴",
                text: "約118頭の馬たちと国内最大級の教育環境。担当馬制度や馬術大会など、本校が選ばれる理由をまとめました。",
                image: "/images/theme/img_tokucho_img_002_5.jpg",
                alt: "学生の教材となる約118頭の馬たち",
              },
            ].map((card) => (
              <RevealItem key={card.href}>
                <Link
                  href={card.href}
                  className="group block h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="img-zoom relative">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
                    <p className="font-display absolute bottom-4 left-5 text-xs font-semibold tracking-[0.35em] text-tan">
                      {card.eyebrow}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-mincho text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-primary md:text-2xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-loose text-ink/70">
                        {card.text}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
