import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import NumbersBand from "@/components/NumbersBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SCHOOL, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "株式会社 馬事学院が運営する東関東馬事専門学院" },
  description:
    "学費救済支援、学費の滞納にも柔軟に対応する支払いサポート。株式会社馬事学院では、馬の仕事を目指す若者の育成。千葉県山武市・八街市・大阪府河内長野市を拠点とするバジガクネットワーク。株式会社馬事学院へお問い合わせください。ロケ、取材も受付中。",
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

/** 教育方針の3つの柱 */
const PILLARS = [
  {
    no: "01",
    title: "思いやりと感謝",
    body: "動物を通じ、また団体生活の中で、常にお互いを助け合う気持ちを培い、相手を思いやる心、感謝の気持ちを持てる人材を育成する。",
  },
  {
    no: "02",
    title: "情操豊かな人間性",
    body: "個性尊重の教育において、一人ひとりが持つ可能性、個性、特性を最大限に引き伸ばし、情操豊かな人間性を培う。",
  },
  {
    no: "03",
    title: "有能な人材の育成",
    body: "馬業界を目指す若人に対し、必要な馬学と豊かな技術を身につけ、国内外における馬事発展を目指す有能な人材の育成を図る。",
  },
];

/** 施設ギャラリー（施設・環境フォルダの写真。キャプションは元ファイル名の日本語） */
const CAMPUS_PHOTOS = [
  { src: "/images/facilities/kosha-gaikan.jpg", caption: "校舎外観", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/baba.jpg", caption: "馬場", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/kyusha.jpg", caption: "厩舎", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/shinrindo.jpg", caption: "新林道", aspect: "aspect-[3/4]" },
  { src: "/images/facilities/mori-shisetsu.jpg", caption: "森施設", aspect: "aspect-[3/4]" },
  { src: "/images/facilities/taiikukan.jpg", caption: "体育館", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/training-room.jpg", caption: "トレーニングルーム", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/kyoshitsu.jpg", caption: "教室", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/kogishitsu.jpg", caption: "講義室", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/kyukeishitsu.jpg", caption: "休憩室", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/cafeteria.jpg", caption: "食堂", aspect: "aspect-[4/3]" },
  { src: "/images/facilities/kitchen.jpg", caption: "厨房", aspect: "aspect-square" },
  { src: "/images/facilities/mendanshitsu-sanbu.jpg", caption: "面談室／山武", aspect: "aspect-[4/3]" },
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
    td: "計3ヶ所（千葉県内2ヶ所・大阪府内１ヶ所）令和8年8月10日現在",
  },
  {
    th: "管理頭数",
    td: "約118頭（おとなしい乗用馬から馬術競技馬・引退競走馬・現役競走馬まで）",
  },
  { th: "系列校", td: "東関東馬事高等学院（厩務員を目指せる高校）" },
];

/** 学校沿革 */
const HISTORY = [
  {
    date: "平成21年9月",
    body: "東関東馬事職業訓練校（東関東馬事専門学院の前身）を設立　平成21年10月より、平成22年4月生（第一期生）の募集を開始。",
  },
  {
    date: "平成21年12月",
    body: "中学卒業後に生徒を受け入れる東関東馬事高等学院を設立。（明蓬館高等学校との連携）",
  },
  {
    date: "平成22年3月",
    body: "小学生・中学生を対象とした東関東ジュニアホースクラブを設立",
  },
  {
    date: "平成24年4月",
    body: "東関東馬事職業訓練から、東関東馬事専門学院へ改名（授業カリキュラムを増やし1年コースより2年・3年コースを変更）",
  },
  {
    date: "平成26年7月",
    body: "地方競馬全国協会　馬主登録／株式会社 馬事学院",
  },
  {
    date: "平成26年12月",
    body: "学校管理馬を競走馬として地方競馬デビューへ（各新聞・TVにてそれらが掲載されました）",
  },
  {
    date: "平成27年5月",
    body: "東京都馬主会・兵庫県馬主会・千葉県馬主会・神奈川県馬主会・石川県馬主会に加入。競走馬育成協会、日本馬術連盟・東京都馬術連盟に加入。",
  },
  {
    date: "平成27年10月",
    body: "各種、競走馬の生産牧場、育成牧場、乗馬クラブとの連携で在学中にインターンシップ制度を充実。本校に在籍する生徒たちが、在学中に最大6ヶ月間（6ケ所）のインターンシップ研修。",
  },
  {
    date: "平成28年4月",
    body: "本校での授業カリキュラムにおいて、在学中にJRA競馬学校の厩務員課程受験が可能に。平成28年度、本校の生徒がJRA厩務員課程受験合格。女性厩務員誕生！",
  },
  {
    date: "平成29年10月",
    body: "在学中に生徒3名がJRA競馬学校の厩務員課程受験。全員の3名が受験合格。本校入学から1年6ヵ月。（以降、令和8年まで、連続10年間の在学中受験合格者38名継続中。）",
  },
  {
    date: "平成30年3月",
    body: "千葉県八街市内に「引退馬の森」がオープン。引退競走馬の受け入れ施設。",
  },
  {
    date: "令和2年7月",
    body: "大阪府河内長野市に「引退馬の森ホースレスト」引退競走馬の受け入れ施設。",
  },
  {
    date: "令和4年4月",
    body: "千葉県山武市の旧：小学校施設にキャンパスを移転。",
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
        lead="千葉・大阪の3つの施設と約118頭の馬たち。東関東馬事専門学院の教育方針と学びの環境、これまでのあゆみをご紹介します。"
        image="/images/facilities/kosha-gaikan.jpg"
        breadcrumb="学校概要"
      />

      {/* ── 教育方針 ─────────────────────────────── */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="PHILOSOPHY"
            title="教育方針"
            lead="高い専門性に限らず人間性を伸ばす教育を実施し、将来の馬業界をリードする有能な人材を育成します。"
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
                 馬と向き合う毎日が
                <br />
                プロとしての人間性を作り出す
              </p>
              <p className="mt-6 text-sm leading-loose text-ink/70 md:text-base">
                馬の仕事は、馬という命ある生き物、そして商品としての貴重な財産であるサラブレッドを預かる仕事であり、
                高い専門性が求められる世界です。ゆえに、
                まずはそれを任せてもらえる人間性を高め教え育てることが、
                各生徒に対する本校の使命だと考えます。
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
      <NumbersBand>
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
      </NumbersBand>

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
            lead="関東・関西の３施設により、乗馬と競走馬の両角度から個々の生徒に応じてしっかり学べる体制が整っています。"
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
                  生徒たちは一人ひとり、プライベートを確保した個室を用意しています。
                  全室個室でテレビ備え付け・Wi-Fi完備、部屋の模様替えも自由。
                  プライベートを確保しながら、初めての一人暮らしでも安心して過ごせます。
                  食事は土日祝日を問わず365日提供され、食堂・洗面/洗濯スペース・男子風呂・
                  荷物の受け取りに対応する管理室など、暮らしを支える設備が揃っています。
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink/80">
                  {[
                    "全室個室。テレビ備え付け・Wi-Fi完備で、部屋の模様替えも自由",
                    "学校キャンパスから送迎有。約50名の学生が暮らしています",
                    "食事は、休日や長期休暇時も食事提供があります。",
                    "食堂・洗面所・洗濯スペース・風呂・休憩室もあります。",
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

      {/* ── 学校沿革 ─────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="HISTORY"
            title="学校沿革"
            lead="東関東馬事専門学院の歴史を振り返ります。"
          />

          <div className="relative mx-auto max-w-3xl">
            <RevealGroup className="border-l-2 border-tan/60 pl-8 md:pl-12">
              {HISTORY.map((entry) => (
                <RevealItem key={entry.date} className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-cream bg-accent md:-left-[57px]"
                  />
                  <p className="font-mincho text-lg font-semibold tracking-wide text-primary md:text-xl">
                    {entry.date}
                  </p>
                  <p className="mt-3 text-sm leading-loose text-ink/75 md:text-[15px]">
                    {entry.body}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
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
