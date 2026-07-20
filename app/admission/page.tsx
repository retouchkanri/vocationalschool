import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SCHOOL } from "@/lib/site";

export const metadata: Metadata = {
  title: "募集要項",
  description:
    "東関東馬事専門学院 令和9年4月生の募集要項。出願期間・選考日程、入学までの流れ、2年間の学費、授業費30%納付免除・報酬型インターン・分割払いなどの学費サポート制度をご案内します。",
};

const EVENT_DATES = [
  { date: "5/31", day: "日" },
  { date: "6/6", day: "土" },
  { date: "6/28", day: "日" },
  { date: "7/11", day: "土" },
];

const REQUIREMENTS = [
  {
    label: "年齢",
    text: "入学時点で高校卒業以上、26歳までの方",
  },
  {
    label: "体重",
    text: "入学時点で体重68kg以下の方",
  },
  {
    label: "健康",
    text: "馬の管理・騎乗に支障のない健康状態の方",
  },
];

const CAREERS = ["JRA厩務員", "生産牧場", "育成牧場", "乗馬クラブ", "観光牧場", "養老牧場"];

const FLOW_STEPS = [
  {
    num: "01",
    title: "資料請求",
    text: "まずは資料請求から。学校案内に加えて、オープンキャンパスのご案内も同封してお届けします。",
  },
  {
    num: "02",
    title: "学校見学・オープンキャンパス",
    text: "原則として、出願の前にオープンキャンパスへご参加いただきます。在校生の様子や授業内容を、実際に肌で感じてください。ご都合がつかない場合は事務局までご相談ください。",
  },
  {
    num: "03",
    title: "出願（インターネット出願）",
    text: "出願期間内に、インターネットの入学出願フォームからお申込みください。",
  },
  {
    num: "04",
    title: "選考",
    text: "出願順に随時選考を行います。定員になり次第、募集を終了しますので、お早めの出願をおすすめします。",
  },
  {
    num: "05",
    title: "合格・入学内定",
    text: "合格内定者の方のみ、①入校申込書 ②健康診断書 ③住民票（発行3ヶ月以内・家族構成がわかるもの）をご提出いただきます。",
  },
  {
    num: "06",
    title: "入学",
    text: "令和9年4月、いよいよ馬とともに歩む2年間がスタートします。",
  },
];

type FeeRow = {
  item: string;
  amount: string;
  note: string;
  highlight?: boolean;
};

const FEE_ROWS: FeeRow[] = [
  {
    item: "入学申込金",
    amount: "480,000円",
    note: "",
  },
  {
    item: "通常授業費（2年間）",
    amount: "3,300,000円",
    note: "",
  },
  {
    item: "納付授業費",
    amount: "2,310,000円",
    note: "通常授業費の30%相当をあらかじめ免除した金額です。",
  },
  {
    item: "在学中の還付見込額",
    amount: "700,000円",
    note: "報酬型インターンなど在学中の取り組みに応じて還付されます。",
  },
  {
    item: "実質授業費",
    amount: "1,500,000円",
    note: "納付授業費231万円から還付見込額70万円を差し引いた実質負担の目安です。",
    highlight: true,
  },
];

const SUPPORT_CARDS = [
  {
    label: "SUPPORT 01",
    image: "/images/theme/img_top_toku_img_005.jpg",
    title: "授業費30%の納付免除",
    figure: "90万円相当",
    text: "令和9年4月生の入学内定者を対象に、授業費の30%（90万円相当）の納付を免除する支援制度です。競走馬の育成や馬術競技会の運営サポート、引退競走馬の乗用馬転用など、授業の成果に応じた還元を想定しています。",
  },
  {
    label: "SUPPORT 02",
    image: "/images/theme/img_top_toku_img_002.jpg",
    title: "報酬型インターン制度",
    figure: "最大70万円が戻る",
    text: "提携する牧場・乗馬クラブでの研修に取り組むことで、在学中の取り組みに応じて最大70万円が戻る制度です。働きながら学ぶ実践教育が、そのまま学費の軽減につながります。",
  },
  {
    label: "SUPPORT 03",
    image: "/images/theme/img_cmn_img_group_b3.jpg",
    title: "授業費の分割払い",
    figure: "在学中2年〜最大5年",
    text: "独自の保証会社の審査により、在学中の2年から最大5年間の分割払いに対応しています。卒業後の分割払いについてもご相談いただけますので、経済面の不安もお気軽にお問い合わせください。",
  },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        eyebrow="ADMISSION"
        title="募集要項"
        lead="令和9年4月生の募集案内です。出願期間や選考日程、入学までの流れ、2年間の学費と学費サポート制度についてご案内します。"
        image="/images/theme/img_cmn_img_group_a2.jpg"
        breadcrumb="募集要項"
      />

      {/* 1. 募集概要 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="OVERVIEW"
            title="令和9年4月生 募集概要"
            lead="JRA厩務員や牧場・乗馬クラブなど、馬の仕事を本気で目指す方を対象とした募集です。随時選考のため、お早めの出願をおすすめします。"
          />

          {/* 出願期間の重要告知 */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-alert/25 bg-white shadow-card">
              <div className="bg-alert px-6 py-3">
                <p className="text-center text-sm font-bold tracking-widest text-white">
                  出願期間のご案内
                </p>
              </div>
              <div className="px-6 py-8 text-center md:py-10">
                <p className="font-display text-[13px] font-semibold tracking-[0.35em] text-accent">
                  APPLICATION PERIOD
                </p>
                <p className="mt-4 font-mincho text-2xl leading-snug text-alert md:text-4xl">
                  令和8年5月1日（金）〜 7月24日（金）
                </p>
                <p className="mt-5 text-sm font-bold leading-relaxed text-alert md:text-base">
                  随時選考のため、定員になり次第、募集を終了します。
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink/60 md:text-sm">
                  出願は先着順に選考します。ご検討中の方はお早めにご準備ください。
                </p>
              </div>
            </div>
          </Reveal>

          {/* 選考・イベント日程 */}
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-card md:p-8">
              <h3 className="text-center font-mincho text-xl text-ink md:text-2xl">
                選考・イベント日程
              </h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-ink/60">
                令和9年4月生を対象としたオープンキャンパス＆説明会の開催日です。ご都合のよい日をお選びください。
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {EVENT_DATES.map((d) => (
                  <li
                    key={d.date}
                    className="rounded-xl border border-tan/40 bg-cream px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="font-display text-2xl font-semibold tracking-wider text-primary md:text-3xl">
                      {d.date}
                    </span>
                    <span className="ml-1 text-sm text-ink/60">（{d.day}）</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 応募条件・目指せる進路 */}
          <RevealGroup className="mt-8 grid gap-6 md:grid-cols-2">
            <RevealItem className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 shadow-card md:p-8">
                <h3 className="font-mincho text-xl text-ink md:text-2xl">応募条件</h3>
                <ul className="mt-5 space-y-4">
                  {REQUIREMENTS.map((r) => (
                    <li key={r.label} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex w-14 shrink-0 items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold text-white">
                        {r.label}
                      </span>
                      <span className="text-sm leading-relaxed text-ink/80 md:text-[15px]">
                        {r.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-tan/40 pt-4 text-xs leading-relaxed text-ink/60">
                  ※中学卒業後に入学をご希望の方は、系列校の
                  <a
                    href={SCHOOL.related.corporate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1 font-bold text-primary underline underline-offset-2 transition-colors hover:text-accent"
                  >
                    東関東馬事高等学院
                  </a>
                  をご覧ください。
                </p>
              </div>
            </RevealItem>
            <RevealItem className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 shadow-card md:p-8">
                <h3 className="font-mincho text-xl text-ink md:text-2xl">目指せる進路</h3>
                <p className="mt-4 text-sm leading-loose text-ink/70 md:text-[15px]">
                  JRA厩務員をはじめ、競走馬の生産・育成牧場、乗馬クラブ、観光牧場、養老牧場など、馬に関わる幅広い進路を目指せます。
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {CAREERS.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-primary/30 bg-meadow px-4 py-1.5 text-sm font-bold text-primary"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. 入学までの流れ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FLOW"
            title="入学までの流れ"
            lead="資料請求から入学まで、6つのステップでご案内します。原則として、出願の前にオープンキャンパスへご参加ください。"
          />
          <RevealGroup>
            <ol className="relative ml-4 border-l-2 border-tan/60 md:ml-8">
              {FLOW_STEPS.map((step, i) => (
                <li
                  key={step.num}
                  className={`relative pl-8 md:pl-12 ${i === FLOW_STEPS.length - 1 ? "" : "pb-10 md:pb-12"}`}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-paper bg-accent"
                  />
                  <RevealItem>
                    <div className="rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-7">
                      <p className="font-display text-sm font-semibold tracking-[0.3em] text-accent">
                        STEP {step.num}
                      </p>
                      <h3 className="mt-2 font-mincho text-lg text-ink md:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-loose text-ink/70 md:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </RevealItem>
                </li>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </section>

      {/* 3. 学費 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="TUITION"
            title="学費（2年間）"
            lead="令和9年4月生を対象とした学費のご案内です。授業費の事前免除と在学中の還付により、実質負担を大きく抑えられます。"
          />
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wider md:text-base">
                        項目
                      </th>
                      <th scope="col" className="w-40 px-6 py-4 text-right text-sm font-bold tracking-wider md:w-48 md:text-base">
                        金額
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wider md:text-base">
                        備考
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_ROWS.map((row) => (
                      <tr
                        key={row.item}
                        className={`border-t border-tan/30 ${
                          row.highlight ? "bg-meadow/70" : "odd:bg-cream/60"
                        }`}
                      >
                        <th
                          scope="row"
                          className={`px-6 py-4 text-sm font-bold md:text-[15px] ${
                            row.highlight ? "text-primary" : "text-ink"
                          }`}
                        >
                          {row.item}
                        </th>
                        <td
                          className={`px-6 py-4 text-right font-display text-base font-semibold tracking-wider md:text-lg ${
                            row.highlight ? "text-accent" : "text-ink"
                          }`}
                        >
                          {row.amount}
                        </td>
                        <td className="px-6 py-4 text-xs leading-relaxed text-ink/60 md:text-sm">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3 rounded-2xl border border-tan/40 bg-cream p-6 text-xs leading-relaxed text-ink/70 md:p-8 md:text-sm">
              <li>
                ※在学中にJRA競馬学校厩務員課程の受験に合格した場合は、合格奨励金100,000円を諸経費の還付として支給します。
              </li>
              <li>
                ※授業費の免除は、競走馬の育成、引退競走馬の乗用馬転用、馬術競技の運営サポート、馬のテレビ撮影・メディア制作等の授業による外部収益を原資としています。
              </li>
              <li>
                ※還付は、提携牧場・乗馬クラブでの研修による「学校運営協力金」を、研修回数等に応じて学生に還付する仕組みです。
              </li>
              <li>
                ※JRA競馬学校厩務員課程の在学中受験は、技術レベル・経験により本校が認めた場合に限り可能です。
              </li>
              <li className="font-bold text-alert">
                ※本学費案内は令和9年4月生を対象としたものです。それ以降の年度については、各年度の募集要項を必ずご確認ください。
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. 実質授業費 impact band */}
      <section className="bg-primary-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="REAL COST"
            title="学びの成果が、学費になる。"
            lead="授業の成果に応じた事前免除と、在学中の取り組みに応じた還付。ふたつの仕組みで、授業費の実質負担を軽減します。"
            light
          />
          <RevealGroup className="grid gap-10 text-center md:grid-cols-3 md:gap-6">
            <RevealItem>
              <p className="text-sm tracking-widest text-white/70">通常授業費</p>
              <p className="mt-3 font-display text-5xl font-semibold text-white/80 md:text-6xl">
                <AnimatedCounter value={330} />
                <span className="ml-1 text-2xl">万円</span>
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-sm tracking-widest text-white/70">
                納付授業費<span className="ml-1 text-xs">（30%相当を事前免除）</span>
              </p>
              <p className="mt-3 font-display text-5xl font-semibold text-tan md:text-6xl">
                <AnimatedCounter value={231} />
                <span className="ml-1 text-2xl">万円</span>
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-sm font-bold tracking-widest text-white">
                実質授業費<span className="ml-1 text-xs font-normal text-white/70">（還付見込額70万円を差引）</span>
              </p>
              <p className="mt-3 font-display text-5xl font-semibold text-accent md:text-7xl">
                <AnimatedCounter value={150} />
                <span className="ml-1 text-2xl">万円</span>
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 5. 学費サポート */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="SUPPORT"
            title="学費サポート制度"
            lead="夢への挑戦を、経済面からも支えたい。バジガクならではの3つのサポート制度をご用意しています。"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {SUPPORT_CARDS.map((card) => (
              <RevealItem key={card.title} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="img-zoom relative aspect-[4/3]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
                      {card.label}
                    </p>
                    <h3 className="mt-2 font-mincho text-lg leading-snug text-ink md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 inline-block font-display text-xl font-semibold tracking-wider text-primary">
                      {card.figure}
                    </p>
                    <p className="mt-3 text-sm leading-loose text-ink/70">{card.text}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-white p-6 shadow-card md:p-8">
              <h3 className="font-mincho text-lg text-ink md:text-xl">そのほかのサポート</h3>
              <ul className="mt-4 space-y-2 text-sm leading-loose text-ink/70 md:text-[15px]">
                <li className="flex gap-2">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  災害被害等により学費の納付が難しくなった場合に備えた、馬事学院独自の救済支援制度があります。
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  国の教育ローン（日本政策金融公庫）の活用もご相談いただけます。
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. 出願方法・お問合せ */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="APPLICATION"
            title="出願方法・お問合せ"
            lead="出願はインターネットの入学出願フォームからのお申込みです。ご不明な点は、お気軽に事務局までご相談ください。"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            <RevealItem className="h-full">
              <div className="h-full rounded-2xl bg-white p-6 shadow-card md:p-8">
                <h3 className="font-mincho text-xl text-ink md:text-2xl">出願方法</h3>
                <ul className="mt-5 space-y-4 text-sm leading-loose text-ink/70 md:text-[15px]">
                  <li className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                    出願期間内に、インターネットの入学出願フォームからお申込みください。
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                    原則として、オープンキャンパス参加後の出願となります。参加できない場合は事務局までご連絡ください。
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                    書類の提出は合格内定者のみ。①入校申込書 ②健康診断書 ③住民票（発行3ヶ月以内・家族構成がわかるもの）をご提出いただきます。
                  </li>
                </ul>
              </div>
            </RevealItem>
            <RevealItem className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card md:p-8">
                <h3 className="font-mincho text-xl text-ink md:text-2xl">お問合せ先</h3>
                <dl className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80 md:text-[15px]">
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 font-bold text-primary">学校名</dt>
                    <dd>{SCHOOL.name}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 font-bold text-primary">運営</dt>
                    <dd>{SCHOOL.operator}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 font-bold text-primary">所在地</dt>
                    <dd>
                      {SCHOOL.zip} {SCHOOL.address}
                    </dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <dt className="w-16 shrink-0 font-bold text-primary">電話</dt>
                    <dd>
                      <a
                        href={`tel:${SCHOOL.tel}`}
                        className="font-display text-xl font-semibold tracking-wider text-ink transition-colors hover:text-accent"
                      >
                        {SCHOOL.tel}
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-ink/60">
                  資料請求では、学校案内とあわせてオープンキャンパスのご案内もお届けします。ご相談だけでも歓迎です。
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`tel:${SCHOOL.tel}`}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark"
                  >
                    資料請求・ご相談はお電話で
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <Link
                    href="/opencampus"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    学校見学・オープンキャンパスへ
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
