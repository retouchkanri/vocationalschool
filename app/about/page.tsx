import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SCHOOL, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "学校概要",
  description:
    "東関東馬事専門学院の教育方針・学校概要・施設環境・近年のあゆみをご紹介。千葉・大阪の8施設で約118頭の馬とともに学ぶ、実践型の馬の専門学校です。",
};

/** 教育方針の3つの柱 */
const PILLARS = [
  {
    no: "01",
    title: "現場で鍛える実践型教育",
    body: "在学中から大手育成牧場での研修・インターンを取り入れ、未経験からでも現場で通用する技術と知識を育てます。入学後は学生一人ひとりが担当馬を持ち、日々の厩務と騎乗を通してプロの基礎を身につけます。",
  },
  {
    no: "02",
    title: "馬産業への人材輩出",
    body: "JRA厩務員をはじめ、生産牧場・育成牧場・乗馬クラブ・観光牧場など、馬業界の第一線へ人材を送り出しています。JRA競馬学校厩務員課程では72名の合格実績、令和7年度には牧場・乗馬クラブへの就職率73%を記録しました。",
  },
  {
    no: "03",
    title: "引退馬のセカンドキャリア支援",
    body: "引退競走馬を乗用馬へ転用する調教を授業に取り入れ、千葉県八街市の総合施設には馬の養老牧場を併設。おとなしい乗用馬から現役競走馬まで約118頭の馬たちと向き合い、馬の一生に寄り添う教育を実践しています。",
  },
];

/** 施設ギャラリー（kankyo 掲載写真） */
const CAMPUS_PHOTOS = [
  { src: "/images/theme/img_kankyo_img_002_1.jpg", caption: "練習運動場", aspect: "aspect-[4/3]" },
  { src: "/images/theme/img_kankyo_img_002_2.jpg", caption: "1周150mの走路トラック", aspect: "aspect-[3/4]" },
  { src: "/images/theme/img_kankyo_img_002_3.jpg", caption: "広々とした馬場", aspect: "aspect-square" },
  { src: "/images/theme/img_kankyo_img_002_4.jpg", caption: "厩舎（馬の部屋）", aspect: "aspect-[4/3]" },
  { src: "/images/theme/img_kankyo_img_002_5.jpg", caption: "クラブハウス（教室・事務所）", aspect: "aspect-[3/4]" },
  { src: "/images/theme/img_kankyo_img_002_6.jpg", caption: "快適に過ごす馬たち", aspect: "aspect-[4/3]" },
  { src: "/images/theme/img_kankyo_img_002_7.jpg", caption: "のどかな周辺環境", aspect: "aspect-square" },
  { src: "/images/theme/img_kankyo_img_002_8.jpg", caption: "学院の日常のひとコマ", aspect: "aspect-[4/3]" },
  { src: "/images/theme/img_kankyo_img_002_9.jpg", caption: "ミニパドック（放牧場）", aspect: "aspect-[3/4]" },
  { src: "/images/theme/img_kankyo_img_002_10.jpg", caption: "数多く並ぶ厩舎", aspect: "aspect-[4/3]" },
  { src: "/images/theme/img_kankyo_img_002_11.jpg", caption: "円形の丸馬場でのトレーニング", aspect: "aspect-square" },
  { src: "/images/theme/img_kankyo_img_002_12.jpg", caption: "坂道での馬の散歩コース", aspect: "aspect-[4/3]" },
];

/** 学生寮の設備写真 */
const DORM_PHOTOS = [
  { src: "/images/theme/img_kankyo_img_004_1.jpg", caption: "365日提供される食事" },
  { src: "/images/theme/img_kankyo_img_004_2.jpg", caption: "洗面・洗濯スペース" },
  { src: "/images/theme/img_kankyo_img_004_3.jpg", caption: "みんなで囲む食堂" },
  { src: "/images/theme/img_kankyo_img_004_4.jpg", caption: "男子風呂" },
  { src: "/images/theme/img_kankyo_img_004_5.jpg", caption: "管理室（荷物の受け取りにも対応）" },
  { src: "/images/theme/img_kankyo_img_004_6.jpg", caption: "寮内の掲示スペース" },
];

/** 学校概要テーブル */
const OVERVIEW_ROWS = [
  { th: "名称", td: `${SCHOOL.name}（馬の学校・馬の専門学校）` },
  { th: "運営会社", td: SCHOOL.operator },
  { th: "所在地", td: `${SCHOOL.zip} ${SCHOOL.address}` },
  { th: "連絡先", td: "", tel: true },
  {
    th: "拠点",
    td: "千葉・大阪の計8施設（千葉県山武市・八街市、大阪府河内長野市の関西研修施設「ホースレスト」）",
  },
  {
    th: "管理頭数",
    td: "約118頭（おとなしい乗用馬から馬術競技馬・引退競走馬・現役競走馬まで）",
  },
  { th: "系列校", td: "東関東馬事高等学院（厩務員を目指せる高校）" },
];

/** 近年のあゆみ（公式サイトのニュース・記事掲載情報より） */
const HISTORY = [
  {
    year: "2020",
    label: "令和2年",
    items: [
      "NHK番組「目撃にっぽん」で学院の馬「バジガクモミジ」が紹介されるなど、NHK「ジューダイ」や各種新聞でのメディア掲載が続く。",
      "在校生・卒業生のJRA競馬学校「厩務員課程」合格の実績を紹介。",
    ],
  },
  {
    year: "2022",
    label: "令和4年",
    items: [
      "災害被害等で学費の納付が難しくなった学生を支える、馬事学院独自の救済支援制度を案内（12月）。",
    ],
  },
  {
    year: "2023",
    label: "令和5年",
    items: [
      "在校生がJRA競馬学校「厩務員課程」に合格（1月）。他校からの転入・転校の受け入れも案内。",
      "系列校・東関東馬事高等学院で、高校3年次の受験による高校生現役でのJRA厩務員課程合格の実績（3月）。",
    ],
  },
  {
    year: "2024",
    label: "令和6年",
    items: [
      "未経験の入学から最短1年6ヶ月でのJRA競馬学校厩務員課程合格の実績を発表（3月）。",
      "関西研修施設「ホースレスト」（大阪府河内長野市）を研修・合宿などで活用（3月）。",
      "千葉県八街市の広大な総合施設（JRA厩務員受験対策・競走馬育成・馬の養老牧場を兼ねる）を紹介（3月）。",
    ],
  },
  {
    year: "2025",
    label: "令和7年",
    items: [
      "1月3日より学校ブログをアメブロへ移転。",
      "令和7年度には牧場・乗馬クラブへの就職率73%を記録。",
    ],
  },
];

/** 関連団体 */
const RELATED = [
  {
    eyebrow: "RELATED SCHOOL",
    name: "東関東馬事高等学院",
    domain: "bajigakuin.com",
    href: SCHOOL.related.highSchool,
    body: "厩務員を目指せる系列の高校です。高校3年次に2回のJRA競馬学校受験が可能で、高校生現役でのJRA厩務員課程合格の実績があります。中学卒業後に馬の道へ進みたい方はこちらへ。",
  },
  {
    eyebrow: "OPERATOR",
    name: "株式会社 馬事学院（バジガク）",
    domain: "bajigaku.com",
    href: SCHOOL.related.corporate,
    body: "本学院を運営する会社です。学校運営のほか、競走馬の育成や引退競走馬の乗用馬転用など、馬とともに歩む事業を展開しています。",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="ABOUT"
        title="学校概要"
        lead="千葉・大阪の4つの施設と約118頭の馬たち。東関東馬事専門学院の教育方針と学びの環境、これまでのあゆみをご紹介します。"
        image="/images/theme/img_kankyo_img_001_1.jpg"
        breadcrumb="学校概要"
      />

      {/* ── 教育方針 ─────────────────────────────── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="PHILOSOPHY"
            title="教育方針"
            lead="馬の仕事は、馬主の大切な財産であるサラブレッドを預かる、高い専門性が求められる世界です。だからこそ本学院は、教室ではなく「現場」を学びの中心に置いています。"
          />

          <Reveal>
            <blockquote className="relative mx-auto max-w-3xl py-6 text-center">
              <span
                aria-hidden
                className="font-display absolute -top-2 left-0 text-6xl leading-none text-tan/50 md:-left-6"
              >
                “
              </span>
              <p className="font-mincho text-2xl leading-relaxed tracking-wide text-primary md:text-4xl md:leading-relaxed">
                馬と向き合う毎日が、
                <br />
                プロを育てる。
              </p>
              <p className="mt-6 text-sm leading-loose text-ink/70 md:text-base">
                未経験から入学する学生がほとんどでも、担当馬との日々の厩務、
                現場での研修、そして引退馬と歩む時間のすべてが教材になります。
                馬業界へ人材を送り出し、馬の一生を支える——それが本学院の使命です。
              </p>
            </blockquote>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <RevealItem key={p.no}>
                <article className="group h-full rounded-2xl border border-tan/40 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <p className="font-display text-3xl font-semibold tracking-[0.2em] text-accent/80 transition-colors duration-300 group-hover:text-accent">
                    {p.no}
                  </p>
                  <h3 className="mt-4 font-mincho text-xl leading-snug text-ink">
                    {p.title}
                  </h3>
                  <div className="rule-diamond mt-4 w-14" />
                  <p className="mt-4 text-sm leading-loose text-ink/70">
                    {p.body}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 数字で見るバジガク（ダーク帯） ───────────── */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="NUMBERS"
            title="数字で見る東関東馬事専門学院"
            light
          />
          <RevealGroup className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <p className="font-display text-4xl font-semibold tracking-wider text-tan md:text-5xl">
                  <AnimatedCounter value={s.value} />
                  <span className="ml-1 text-lg text-white/80 md:text-xl">
                    {s.suffix}
                  </span>
                </p>
                <p className="mx-auto mt-3 max-w-[12rem] text-xs leading-relaxed text-white/70 md:text-sm">
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
      </section>

      {/* ── 学校概要テーブル ─────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="OVERVIEW"
            title="学校概要"
            lead="東関東馬事専門学院の基本情報です。ご不明な点はお気軽にお問合せください。"
          />
          <Reveal>
            <div className="overflow-x-auto rounded-2xl bg-white shadow-card">
              <table className="w-full min-w-[36rem] text-left text-sm md:text-[15px]">
                <caption className="sr-only">東関東馬事専門学院の基本情報</caption>
                <tbody>
                  {OVERVIEW_ROWS.map((row) => (
                    <tr
                      key={row.th}
                      className="border-b border-tan/30 last:border-b-0 odd:bg-cream/60"
                    >
                      <th
                        scope="row"
                        className="w-36 whitespace-nowrap px-6 py-5 align-top font-mincho text-primary md:w-44"
                      >
                        {row.th}
                      </th>
                      <td className="px-6 py-5 leading-relaxed text-ink/80">
                        {row.tel ? (
                          <>
                            <a
                              href={`tel:${SCHOOL.tel}`}
                              className="font-display text-base font-semibold tracking-wider text-primary transition-colors hover:text-accent"
                            >
                              {SCHOOL.tel}
                            </a>
                            <span className="ml-2 text-xs text-ink/60">
                              （ご相談・お問合せ）
                            </span>
                          </>
                        ) : (
                          row.td
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 施設・環境 ───────────────────────────── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FACILITIES"
            title="施設・環境"
            lead="関東・関西の8施設に、練習運動場や1周150mの走路トラック、広い馬場、数多くの厩舎などを備え、乗馬と競走馬を同時に学べる環境を整えています。"
          />

          <Reveal>
            <h3 className="text-center font-mincho text-xl text-ink md:text-2xl">
              馬とともに過ごすキャンパス
            </h3>
          </Reveal>

          <RevealGroup className="mt-8 columns-2 gap-3 md:columns-3">
            {CAMPUS_PHOTOS.map((photo) => (
              <RevealItem key={photo.src} className="mb-3 break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-xl shadow-card">
                  <div className={`img-zoom relative ${photo.aspect}`}>
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8 text-[11px] font-medium text-white md:text-xs">
                    {photo.caption}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* 学生寮 */}
          <div className="mt-20">
            <Reveal>
              <p className="font-display text-center text-[13px] font-semibold tracking-[0.35em] text-primary">
                DORMITORY
              </p>
              <h3 className="mt-3 text-center font-mincho text-xl text-ink md:text-2xl">
                全室個室の学生寮
              </h3>
              <div className="rule-diamond mx-auto mt-5 w-20" />
            </Reveal>

            <div className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <Reveal x={-24} y={0}>
                <div className="grid grid-cols-2 gap-3">
                  <figure className="img-zoom relative aspect-[3/4] overflow-hidden rounded-xl shadow-card">
                    <Image
                      src="/images/theme/img_kankyo_img_003_1.jpg"
                      alt="学生寮の外観"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                  <figure className="img-zoom relative mt-6 aspect-[3/4] overflow-hidden rounded-xl shadow-card">
                    <Image
                      src="/images/theme/img_kankyo_img_003_2.jpg"
                      alt="学生寮の個室の様子"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </figure>
                </div>
              </Reveal>
              <Reveal x={24} y={0}>
                <p className="text-sm leading-loose text-ink/75 md:text-[15px]">
                  キャンパスから徒歩2分の学生寮では、約55名の学生が生活しています。
                  全室個室でテレビ備え付け・Wi-Fi完備、部屋の模様替えも自由。
                  プライベートを確保しながら、初めての一人暮らしでも安心して過ごせます。
                  食事は土日祝日を問わず365日提供され、食堂・洗面/洗濯スペース・男子風呂・
                  荷物の受け取りに対応する管理室など、暮らしを支える設備が揃っています。
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink/80">
                  {[
                    "全室個室（テレビ備え付け）",
                    "Wi-Fi完備",
                    "キャンパスまで徒歩2分",
                    "365日の食事提供",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <RevealGroup className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
              {DORM_PHOTOS.map((photo) => (
                <RevealItem key={photo.src}>
                  <figure className="group relative overflow-hidden rounded-xl shadow-card">
                    <div className="img-zoom relative aspect-[4/3]">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8 text-[11px] font-medium text-white md:text-xs">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── 近年のあゆみ ─────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="HISTORY"
            title="近年のあゆみ"
            lead="メディア掲載や合格実績、施設の拡充など、近年のトピックスを振り返ります。"
          />

          <div className="relative mx-auto max-w-3xl">
            <RevealGroup className="border-l-2 border-tan/60 pl-8 md:pl-12">
              {HISTORY.map((entry) => (
                <RevealItem key={entry.year} className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-cream bg-accent md:-left-[57px]"
                  />
                  <p className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold tracking-wider text-primary">
                      {entry.year}
                    </span>
                    <span className="text-xs text-ink/50">{entry.label}</span>
                  </p>
                  <ul className="mt-3 space-y-2">
                    {entry.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-loose text-ink/75 md:text-[15px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-xs text-ink/50">
              ※公式サイトのニュース・記事掲載情報をもとに構成しています。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 関連団体 ─────────────────────────────── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="RELATED"
            title="関連団体"
            lead="東関東馬事専門学院は、系列校・運営会社とともに馬業界の未来を支えています。"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {RELATED.map((org) => (
              <RevealItem key={org.name}>
                <a
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-tan/40 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-hover"
                >
                  <p className="font-display text-xs font-semibold tracking-[0.3em] text-primary">
                    {org.eyebrow}
                  </p>
                  <h3 className="mt-3 font-mincho text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                    {org.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-loose text-ink/70">
                    {org.body}
                  </p>
                  <p className="mt-5 flex items-center justify-between border-t border-tan/30 pt-4 text-sm">
                    <span className="font-display tracking-wider text-ink/50">
                      {org.domain}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-primary transition-transform duration-300 group-hover:translate-x-1">
                      公式サイトへ
                      <span aria-hidden>↗</span>
                    </span>
                  </p>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
