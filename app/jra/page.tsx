import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import StudentPhotoOrbit from "@/components/pages/StudentPhotoOrbit";

export const metadata: Metadata = {
  title: "JRA厩務員になるには？／未経験からのJRA受験へ",
  description:
    "未経験からのJRA競馬学校の厩務員受験。過去多数の合格者輩出のバジガク。未経験からのJRA競馬学校の厩務員課程受験合格。本気で厩務員受験を目指すなら千葉県にある東関東馬事専門学院へ",
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

/** JRA厩務員の主な仕事（旧サイト 6-006 より）。 */
const DUTIES = [
  "馬房の清掃",
  "馬の健康管理",
  "飼いつけ（エサの給与）",
  "馬の手入れ",
  "調教・運動の準備",
  "馬のウォーミングアップ",
  "競馬場への輸送・付添",
  "パドックでの引き馬",
  "優勝時の表彰式",
];

/** 合格を目指す学生たちの日常（夢に向かって） */
const STUDENT_PHOTOS = [
  "/images/student/student-01.jpg",
  "/images/student/student-02.jpg",
  "/images/student/student-03.jpg",
  "/images/student/student-04.jpg",
  "/images/student/student-05.jpg",
  "/images/student/student-06.jpg",
  "/images/student/student-07.jpg",
  "/images/student/student-08.jpg",
  "/images/student/student-09.jpg",
  "/images/student/student-10.jpg",
  "/images/student/student-11.jpg",
] as const;

/** 年度別 JRA競馬学校「厩務員課程」合格実績 */
const YEARLY_RESULTS = [
  { year: "令和8年度", examinees: 5, passed: 2, allPassed: false, afterGraduation: 2 },
  { year: "令和7年度", examinees: 7, passed: 5, allPassed: false, afterGraduation: 3 },
  { year: "令和6年度", examinees: 4, passed: 2, allPassed: false, afterGraduation: 1 },
  { year: "令和5年度", examinees: 5, passed: 5, allPassed: true, afterGraduation: 3 },
  { year: "令和4年度", examinees: 6, passed: 6, allPassed: true, afterGraduation: 3 },
  { year: "令和3年度", examinees: 5, passed: 2, allPassed: false, afterGraduation: 3 },
  { year: "令和2年度", examinees: 8, passed: 6, allPassed: false, afterGraduation: 2 },
  { year: "平成31年度", examinees: 6, passed: 5, allPassed: false, afterGraduation: 4 },
  { year: "平成30年度", examinees: 6, passed: 3, allPassed: false, afterGraduation: 4 },
  { year: "平成29年度", examinees: 3, passed: 3, allPassed: true, afterGraduation: 3 },
  { year: "平成28年度", examinees: 1, passed: 1, allPassed: true, afterGraduation: 4 },
] as const;

type Feature = {
  no: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    no: "01",
    title: "在学中に最大2回のJRA受験が可能",
    body: "一般的には、未経験からJRA競馬学校「厩務員課程」の受験資格を得るまでに5年以上かかると言われています。本校では在学中に受験資格の取得を目指せ、技術レベルや経験に応じて学校が認めた場合、2年間の在学中に最大2回の受験が可能。夢へのスタートラインに、誰よりも早く立てます。",
    image: "/images/theme/img_6_001_img_002_1.jpg",
    alt: "未経験から騎乗訓練に取り組む学生",
  },
  {
    no: "02",
    title: "JRA厩務員課程 72名合格の実績",
    body: "本校はJRA競馬学校「厩務員課程」の合格実績を72名で達成しています。令和4年度後期には受験した6名全員が一次選考を通過し、そのまま6名全員が最終合格。在学中の合格者に加え、女性の合格者も多数輩出してきました。",
    image: "/images/theme/img_6_001_img_002_8.jpg",
    alt: "本校から誕生した女性のJRA厩務員",
  },
  {
    no: "03",
    title: "未経験から最短1年6か月 JRA競馬学校厩務員課程合格へ",
    body: "在学中にJRA競馬学校厩務員課程を2回受験可能。平成28年以降、41名が在学中に合格し、多くの卒業生が競馬業界で活躍しています。",
    image: "/images/theme/img_6_001_img_002_5.jpg",
    alt: "毎日の騎乗訓練に励む学生",
  },
  {
    no: "04",
    title: "一人ひとりに合わせた個別受験対策",
    body: "筆記試験（国語・社会・競馬一般）には本校独自の受験対策ワークを用意し、勉強が苦手な学生も筆記試験をクリアしています。騎乗試験を見据えた木馬トレーニングや実践騎乗訓練、定期的なJRA美浦トレーニングセンター見学も実施。定員が毎年30名前後の少人数制だからこそ、一人ひとりに合わせた対策ができます。",
    image: "/images/theme/img_6_001_img_002_12.jpg",
    alt: "騎乗試験を見据えた木馬トレーニング",
  },
  {
    no: "05",
    title: "現役競走馬を含む約118頭での実践教育",
    body: "おとなしい乗用馬から引退競走馬、デビュー前の育成馬、そして現役競走馬まで、約118頭の馬を学生自身が管理します。入学すると担当馬を持ち、レースの最短10日前まで競走馬を学校で管理するなど、現場さながらの環境で「本物」の厩務を毎日積み重ねられます。",
    image: "/images/theme/img_6_001_img_002_7.jpg",
    alt: "レース直前まで学校で管理される競走馬",
  },
  {
    no: "06",
    title: "大手育成牧場インターンで騎乗・現場経験",
    body: "入学から6ヶ月以降は、国内最大級の社台グループ（社台ファーム・追分ファーム）や関西最大級のグリーンウッドパークなど、トップレベルの生産・育成現場でインターン研修を実施。在学中に最大6ヶ所の職場で、競走馬への騎乗や馴致調教といった実務を経験できます。現場で磨いた技術と経験が、受験でも就職でも大きな武器になります。",
    image: "/images/theme/img_6_001_img_002_6.jpg",
    alt: "競走騎乗のトレーニングに取り組む学生",
  },
];

type Step = {
  step: string;
  title: string;
  note?: string;
  body: string;
};

const ROADMAP: Step[] = [
  {
    step: "01",
    title: "入学",
    body: "入学者の約7割は未経験からのスタート。一人ひとりに担当馬が提供され、馬とともに暮らす学びが始まります。",
  },
  {
    step: "02",
    title: "基礎課程",
    body: "まずはおとなしい乗用馬を担当し、体調管理・飼養管理・手入れ・検温、そして騎乗の基礎を徹底的に身につけます。",
  },
  {
    step: "03",
    title: "実践・インターン研修",
    body: "技術レベルの向上に応じて引退競走馬・育成馬・現役競走馬を担当。入学6ヶ月以降は社台グループなど大手育成牧場でのインターン研修で、現場の実務と騎乗経験を積みます。",
  },
  {
    step: "04",
    title: "受験対策",
    body: "独自の受験対策ワークで筆記試験（国語・社会・競馬一般）を攻略。騎乗試験を見据えた実践騎乗訓練と個別指導で仕上げます。",
  },
  {
    step: "05",
    title: "JRA競馬学校 受験",
    note: "在学中最大2回",
    body: "技術レベル・経験により本校が認めた場合、在学中に受験が可能です。未経験の入学から最短1年6ヶ月で合格した実績があります。",
  },
  {
    step: "06",
    title: "JRA競馬学校 厩務員課程",
    body: "合格後はJRA競馬学校の厩務員課程へ。本校は72名で合格者を輩出しています。",
  },
  {
    step: "07",
    title: "JRA厩務員として活躍",
    body: "卒業生はJRA厩務員として第一線で活躍中。女性の厩務員も本校から誕生しています。",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "馬に触ったことがなくても、JRA厩務員を目指せますか？",
    a: "はい、目指せます。入学者の約7割はまったくの初心者ですが、基礎から学べるカリキュラムで、未経験の入学から最短1年6ヶ月でJRA競馬学校厩務員課程に合格した実績があります。",
  },
  {
    q: "在学中のJRA受験は誰でもできますか？",
    a: "在学中の受験は、技術レベルや経験により本校が認めた場合に可能です。一人ひとりの成長に合わせて受験時期を見極め、在学中最大2回のチャンスを活かせるよう個別にサポートします。",
  },
  {
    q: "女性でもJRA厩務員になれますか？",
    a: "なれます。本校の入学者は年により異なりますが男女比はおおむね半々で、女性のJRA厩務員も本校から誕生しています。女性も馬の仕事・就職に結び付けられるカリキュラムを用意しています。",
  },
  {
    q: "受験ではどんな試験がありますか？",
    a: "筆記試験の科目は国語・社会・競馬一般です。本校独自の受験対策ワークで、勉強が苦手な学生も筆記試験をクリアしています。騎乗については、現役競走馬を活用した実践騎乗訓練で備えます。",
  },
  {
    q: "在学中に合格できなかった場合はどうなりますか？",
    a: "本校では基本的にほぼ全員が就職内定しており、万一在学中に就職が決まらない場合も、追加授業費の負担なしで就職決定まで学校がサポートします。全国の牧場・乗馬クラブの求人を保有しているため、現場で経験を積みながら次の目標へ進むことができます。",
  },
];

export default function JraPage() {
  return (
    <div>
      <PageHero
        eyebrow="FOR JRA"
        title="JRA競馬学校 厩務員受験を目指す方へ"
        lead="在学中にJRA競馬学校厩務員課程を2回受験可能。平成28年以降、41名が在学中に合格し、多くの卒業生が競馬業界で活躍しています。"
        image="/images/theme/img_6_006_img_003_3.jpg"
        breadcrumb="JRA厩務員を目指す方へ"
      />

      {/* 1. Hook: JRA厩務員という仕事とその狭き門 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="THE CHALLENGE"
            title="目指せる！JRA厩務員という仕事へ"
            lead="JRA厩務員を目指すには、JRA競馬学校の厩務員課程受験合格が必須です。本校では、未経験から最短1年6ヶ月でJRA厩務員課程を受験し合格者を送り出しています。"
          />

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal x={-24} y={0}>
              <h3 className="font-mincho text-2xl leading-snug text-ink md:text-3xl">
                担当馬の毎日を支え、
                <br />
                レースの舞台裏に立つ仕事。
              </h3>
              <p className="mt-5 text-[15px] leading-loose text-ink/75 md:text-base">
                厩務員の仕事は、馬房の清掃や飼いつけ、健康管理から、調教の準備、競馬場への輸送・付添、パドックでの引き馬まで多岐にわたります。担当馬がレースに出走すれば競馬場に出向き、優勝すれば表彰式にも立ち会う。馬の一番近くで勝負の瞬間を共にできる仕事です。
              </p>
              <p className="mt-4 text-[15px] leading-loose text-ink/75 md:text-base">
                トレーニングセンターでの調教は主に騎手や調教助手が担いますが、「調教厩務員」になれば調教師の指示のもと、担当する2頭に限り調教も任されます。
              </p>
              <RevealGroup className="mt-7 flex flex-wrap gap-2.5">
                {DUTIES.map((duty) => (
                  <RevealItem key={duty}>
                    <span className="inline-block rounded-full border border-tan/50 bg-white px-4 py-2 text-xs font-bold text-primary md:text-sm">
                      {duty}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>

            <Reveal x={24} y={0}>
              <div className="relative mx-auto w-full max-w-md pb-10 pt-2 md:max-w-none md:pb-12">
                {/* Top photo — back of stack */}
                <div className="img-zoom relative z-10 aspect-[4/3] w-[88%] overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/theme/img_6_006_img_003_3.jpg"
                    alt="JRA美浦トレーニングセンターの見学"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                {/* Bottom photo — overlaps lower-right of the top image */}
                <div className="img-zoom absolute -bottom-1 right-0 z-20 aspect-[16/9] w-[78%] overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(17,17,17,0.22)] ring-4 ring-paper">
                  <Image
                    src="/images/theme/img_6_006_img_002_1.jpg"
                    alt="JRA厩務員として活躍する本校の卒業生"
                    fill
                    sizes="(min-width: 768px) 35vw, 75vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* 一般ルートとの比較 */}
          <Reveal>
            <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-tan/40 bg-cream/70 p-7 text-center md:p-9">
                <p className="font-display text-xs font-semibold tracking-[0.3em] text-ink/50">
                  GENERAL ROUTE
                </p>
                <p className="mt-3 font-mincho text-lg text-ink/80">
                  一般的なルート
                </p>
                <p className="mt-4 font-display text-4xl font-semibold text-ink/70 md:text-5xl">
                  5<span className="text-lg">年以上</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">
                  未経験から受験資格を得るまでに、牧場等での長い実務経験が必要と言われています。
                </p>
              </div>

              <div
                aria-hidden
                className="flex items-center justify-center font-display text-2xl text-accent md:px-2"
              >
                <span className="rotate-90 md:rotate-0">→</span>
              </div>

              <div className="rounded-2xl bg-primary p-7 text-center text-white shadow-card md:p-9">
                <p className="font-display text-xs font-semibold tracking-[0.3em] text-tan">
                  BAJIGAKU ROUTE
                </p>
                <p className="mt-3 font-mincho text-lg text-white/90">
                  本校での挑戦
                </p>
                <p className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                  在学中<span className="text-lg">に</span>最大2
                  <span className="text-lg">回受験</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  在学中に受験資格の取得を目指せ、未経験の入学から最短1年6ヶ月で合格した実績があります。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 本校が選ばれる理由 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="6 REASONS"
            title="本校が選ばれる6つの理由"
            lead="JRA厩務員を本気で目指すなら、環境がすべてを左右します。バジガクだけの6つの強みをご紹介します。"
          />

          <div className="space-y-14 md:space-y-24">
            {FEATURES.map((feature, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={feature.no}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
                >
                  <Reveal
                    x={reversed ? 28 : -28}
                    y={0}
                    className={reversed ? "md:order-2" : ""}
                  >
                    <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                  <Reveal
                    x={reversed ? -28 : 28}
                    y={0}
                    className={reversed ? "md:order-1" : ""}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl font-semibold leading-none text-accent/80 md:text-6xl">
                        {feature.no}
                      </span>
                      <span className="font-display text-xs font-semibold tracking-[0.35em] text-primary/60">
                        REASON
                      </span>
                    </div>
                    <h3 className="mt-4 font-mincho text-2xl leading-snug text-ink md:text-[28px]">
                      {feature.title}
                    </h3>
                    <div className="rule-diamond mt-5 w-20" />
                    <p className="mt-5 text-[15px] leading-loose text-ink/75 md:text-base">
                      {feature.body}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 合格までのロードマップ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="ROADMAP"
            title="合格までのロードマップ"
            lead="未経験の入学から、JRA厩務員としてターフの舞台裏に立つ日まで。バジガクの2年間は、合格から逆算して設計されています。"
          />

          <div className="relative ml-2 border-l-2 border-tan/60 pl-8 md:ml-6 md:pl-12">
            {ROADMAP.map((step, i) => {
              const highlight = step.step === "05";
              const last = i === ROADMAP.length - 1;
              const framed = highlight || last;
              return (
                <Reveal key={step.step} className={last ? "" : "pb-10 md:pb-12"}>
                  <div className="relative">
                    <span
                      aria-hidden
                      className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 md:-left-[57px] ${
                        highlight || last
                          ? "border-accent bg-white"
                          : "border-primary bg-white"
                      }`}
                    />
                    <div className={framed ? "paper-crumple" : undefined}>
                      <div className={framed ? "p-6 md:p-8" : undefined}>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-display text-sm font-semibold tracking-[0.25em] text-accent">
                            STEP {step.step}
                          </span>
                          {step.note && (
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                              {step.note}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 font-mincho text-xl text-ink md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-loose text-ink/70 md:text-[15px]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5. 夢に向かって（学生たちの日常） */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="DAILY LIFE"
            title="夢に向かって"
            lead="合格を目指し、日々馬と向き合う学生たちの様子です。基礎課程からインターン研修、実践騎乗訓練まで、その一枚一枚に努力の積み重ねが刻まれています。"
          />
          <StudentPhotoOrbit photos={STUDENT_PHOTOS} />
        </div>
      </section>

      {/* 4. 実績バンド（ダーク） */}
      <section className="relative overflow-hidden bg-primary-deep py-16 md:py-24">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/theme/img_6_001_img_002_3.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/60 via-transparent to-primary-deep/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="ACHIEVEMENTS"
            title="数字が語る、バジガクのJRA実績"
            light
          />

          <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            <RevealItem className="text-center">
              <p className="font-display text-5xl font-semibold text-tan md:text-6xl">
                <AnimatedCounter value={10} />
                <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">年連続</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/75 md:text-sm">
                JRA競馬学校「厩務員課程」
                <br />
                合格実績
              </p>
            </RevealItem>
            <RevealItem className="text-center">
              <p className="font-display text-5xl font-semibold text-tan md:text-6xl">
                <span className="mr-1 text-lg font-medium text-white/80 md:text-xl">最大</span>
                <AnimatedCounter value={2} />
                <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">回</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/75 md:text-sm">
                在学中の
                <br />
                JRA受験チャンス
              </p>
            </RevealItem>
            <RevealItem className="text-center">
              <p className="font-display text-5xl font-semibold text-tan md:text-6xl">
                <span className="mr-1 text-lg font-medium text-white/80 md:text-xl">最短</span>
                <AnimatedCounter value={1} />
                <span className="text-lg font-medium text-white/80 md:text-xl">年</span>
                <AnimatedCounter value={6} />
                <span className="text-lg font-medium text-white/80 md:text-xl">ヶ月</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/75 md:text-sm">
                未経験の入学から
                <br />
                合格までの最短実績
              </p>
            </RevealItem>
            <RevealItem className="text-center">
              <p className="font-display text-5xl font-semibold text-tan md:text-6xl">
                <span className="mr-1 text-lg font-medium text-white/80 md:text-xl">高校</span>
                <AnimatedCounter value={3} />
                <span className="ml-1 text-lg font-medium text-white/80 md:text-xl">年次</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/75 md:text-sm">
                系列・東関東馬事高等学院で
                <br />
                現役合格の実績
              </p>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-loose text-white/70">
              系列校の東関東馬事高等学院では、高校3年次に2回のJRA競馬学校受験に挑み、高校生のうちに現役で厩務員課程へ合格した実績もあります。中学卒業から専門課程まで、一貫してJRA厩務員への道を描けるのはバジガクグループだけの強みです。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4.5. 年度別 JRA厩務員課程 合格実績 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="RECORDS"
            title="年度別 JRA厩務員課程 合格実績"
            lead="平成28年度以降、在学中の受験・合格実績を年度別にご紹介します。※は本校を卒業後、牧場等に就職してから受験・合格した人数です。"
          />
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wider md:text-base">
                        年度
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-bold tracking-wider md:text-base">
                        受験者数
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-bold tracking-wider md:text-base">
                        合格者数（在学中）
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-bold tracking-wider md:text-base">
                        ※卒業後の合格者数
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {YEARLY_RESULTS.map((row) => (
                      <tr key={row.year} className="border-t border-tan/30 odd:bg-cream/60">
                        <th
                          scope="row"
                          className="px-6 py-4 text-sm font-bold text-ink md:text-[15px]"
                        >
                          {row.year}
                        </th>
                        <td className="px-6 py-4 text-center font-display text-base font-semibold tracking-wider text-ink md:text-lg">
                          {row.examinees}名
                        </td>
                        <td className="px-6 py-4 text-center font-display text-base font-semibold tracking-wider text-accent md:text-lg">
                          {row.passed}名
                          {row.allPassed ? (
                            <span className="ml-1 text-xs font-bold text-primary md:text-sm">
                              （全員合格）
                            </span>
                          ) : null}
                        </td>
                        <td className="px-6 py-4 text-center font-display text-base font-semibold tracking-wider text-ink/70 md:text-lg">
                          {row.afterGraduation}名
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-xs leading-relaxed text-ink/60 md:text-sm">
              ※記載の卒業後の合格者数は、本校を卒業後、牧場等に就職してから受験・合格した人数です。現役合格と卒業後の合格を合わせて、把握している合格者は72名（令和8年8月現在）となります。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. よくある質問 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Q&A"
            title="JRA受験に関するよくある質問"
            lead="受験を考える皆さまから多く寄せられるご質問にお答えします。"
          />

          <Reveal>
            <FaqAccordion items={FAQ_ITEMS} />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <Link
                href="/faq"
                className="group mx-auto inline-flex w-fit items-center justify-center gap-3 rounded-full border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white md:mx-0"
              >
                その他のよくある質問を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
