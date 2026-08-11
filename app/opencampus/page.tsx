import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import { SCHOOL } from "@/lib/site";

export const metadata: Metadata = {
  title: "JR東京駅お迎え／馬の学校 オープンキャンパス",
  description:
    "関東エリアはもちろん、関西エリアから西日本エリアからの入学者も多数。JR東京駅までお迎えにあがります。馬の専門学校　東関東馬事専門学院のオープンキャンパスで乗馬体験・学校体験。募集要項、カリキュラム等はサイトをご覧ください。",
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

/** 見学・オープンキャンパスでできること */
const EXPERIENCES = [
  {
    image: "/images/theme/img_taiken_img_002_1.jpg",
    title: "乗馬体験",
    text: "説明会のあとには乗馬体験にご参加いただけます。乗馬未経験の参加者も多いので、初めての方もどうぞ気負わずにご参加ください。",
  },
  {
    image: "/images/theme/img_taiken_img_002_2.jpg",
    title: "馬のお手入れ・ふれあい",
    text: "ブラッシングなどのお手入れ体験を通じて、馬と間近でふれあえます。馬の温もりを肌で感じる時間は、進路を考える大きなヒントになります。",
  },
  {
    image: "/images/theme/img_taiken_img_002_3.jpg",
    title: "在校生との交流",
    text: "実際に学んでいる在校生と直接話せる機会があります。授業や寮生活のリアルな声を聞いて、入学後の自分をイメージしてください。",
  },
  {
    image: "/images/theme/img_taiken_img_002_4.jpg",
    title: "入学説明会・個別相談",
    text: "在校生の様子や授業内容に加え、馬社会が求める人材像や業界の動向まで丁寧にご説明します。進路の疑問は個別にご相談いただけます。",
  },
  {
    image: "/images/theme/img_taiken_img_002_5.jpg",
    title: "在校生からの記念品",
    text: "ご参加いただいた方には、在校生からささやかなプレゼント（記念品）をお渡ししています。当日の思い出としてお持ち帰りください。",
  },
  {
    image: "/images/theme/img_taiken_img_002_6.jpg",
    title: "駅までの無料送迎",
    text: "行きはJR東京駅（八重洲中央口）まで無料でお迎え。帰りは最寄りのJR八街駅までお送りします（東京駅まで直通）。遠方の方もご参加いただきやすい環境です。",
  },
] as const;

/** 開催日程 */
const DATES = [
  { date: "8/23", dow: "日", closed: true },
  { date: "9/19", dow: "土", closed: false },
  { date: "10/12", dow: "祝・月", closed: false },
] as const;

/** 体験入学参加者の感想（アンケートより） */
const VOICES = ["雰囲気が良い", "先生と生徒の距離が近い", "在校生が明るい"] as const;

/** 当日の流れ */
const FLOW = [
  {
    title: "お申込み",
    text: "開催日程からご都合の良い日を選んでお申込みください。内容を確認のうえ、事務局よりメールまたはお電話でご連絡します。",
  },
  {
    title: "集合・受付",
    text: "東京駅からの無料送迎をご希望の方は、JR東京駅 八重洲中央口に11時30分集合・出発です。",
  },
  {
    title: "学校見学・入学説明会",
    text: "キャンパスと在校生の様子をご覧いただきながら、授業内容や馬社会が求める人材像・業界の動向をご説明します。",
  },
  {
    title: "乗馬体験・馬とのふれあい",
    text: "説明会のあとは乗馬体験やお手入れ体験へ。未経験の方も、馬たちとのふれあいを通じて学びの現場を体感できます。",
  },
  {
    title: "個別相談・お見送り",
    text: "在校生との交流や個別相談で疑問を解消。お帰りはJR八街駅までお送りします（東京駅まで直通）。",
  },
] as const;

/** 学生寮の特長 */
const DORM_FEATURES = [
  "全室個室。テレビ備え付け・Wi-Fi完備で、部屋の模様替えも自由",
  "学校キャンパスから送迎有。約50名の学生が暮らしています",
  "食事は、休日や長期休暇時も食事提供があります。",
  "食堂・洗面所・洗濯スペース・風呂・休憩室もあります。",
] as const;

export default function OpenCampusPage() {
  return (
    <>
      <PageHero
        eyebrow="OPEN CAMPUS"
        title="学校見学・オープンキャンパス"
        lead="学校選びは、在学中の充実だけでなく卒業後の進路にも直結する大切な一歩。まずは実際のキャンパスで、馬たちと本校の学びをご体感ください。"
        image="/images/theme/opencampus-hero.jpg"
        breadcrumb="学校見学・オープンキャンパス"
      />

      {/* 見学・オープンキャンパスでできること */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="EXPERIENCE"
            title="見学・オープンキャンパスでできること"
            lead="入学をお考えの方には、まず学校見学・入学説明会へのご参加をお願いしています。他校を検討中の方のご参加も歓迎。入学の有無にかかわらず、進路の情報収集にきっと役立ちます。"
          />
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((item) => (
              <RevealItem key={item.title}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover">
                  <div className="img-zoom relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-mincho text-lg tracking-wide text-ink">
                      {item.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-accent/60 transition-all duration-300 group-hover:w-16" />
                    <p className="mt-3 text-sm leading-loose text-ink/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 開催日程（ダーク帯） */}
      <section className="relative overflow-hidden bg-primary-deep py-16 md:py-24">
        {/* Solid color backdrop + two rider silhouettes centered, in brand green */}
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none bg-primary-deep">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 78% 68% at 50% 48%, rgba(14, 104, 52, 0.45) 0%, transparent 72%), linear-gradient(165deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(0,0,0,0.18) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Soft outer glow */}
          <div
            className="absolute left-1/2 top-[6%] h-[90%] w-[92%] max-w-[820px] -translate-x-1/2"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              WebkitMaskImage:
                "url(/images/theme/horse-jump-silhouette.png)",
              maskImage: "url(/images/theme/horse-jump-silhouette.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              filter: "blur(12px)",
              transform: "translateX(-50%) scale(1.05)",
            }}
          />
          {/* Light outline */}
          <div
            className="absolute left-1/2 top-[6%] h-[90%] w-[92%] max-w-[820px] -translate-x-1/2"
            style={{
              backgroundColor: "rgba(255,255,255,0.22)",
              WebkitMaskImage:
                "url(/images/theme/horse-jump-silhouette.png)",
              maskImage: "url(/images/theme/horse-jump-silhouette.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              transform: "translateX(-50%) scale(1.012)",
            }}
          />
          {/* Silhouette fill in current primary-deep */}
          <div
            className="absolute left-1/2 top-[6%] h-[90%] w-[92%] max-w-[820px] -translate-x-1/2"
            style={{
              backgroundColor: "#024d1f",
              WebkitMaskImage:
                "url(/images/theme/horse-jump-silhouette.png)",
              maskImage: "url(/images/theme/horse-jump-silhouette.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="SCHEDULE"
            title="開催日程"
            lead="現在、受け中の学校見学、オープンキャンパスは、以下の日程となります。"
            light
          />
          <RevealGroup className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 sm:items-stretch">
            {DATES.map((d) => (
              <RevealItem key={d.date} className="h-full">
                <div
                  className={`group flex h-full min-h-[11.5rem] flex-col items-center justify-center rounded-2xl border px-4 py-8 text-center transition-all duration-300 ${
                    d.closed
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-white/15 bg-white/5 hover:-translate-y-1 hover:border-tan/60 hover:bg-white/10"
                  }`}
                >
                  <p
                    className={`mb-2 text-xs font-bold tracking-wider ${
                      d.closed ? "text-white/40" : "invisible"
                    }`}
                    aria-hidden={!d.closed}
                  >
                    受付終了
                  </p>
                  <p
                    className={`font-display text-4xl font-semibold tracking-wider md:text-5xl ${
                      d.closed ? "text-white/40" : "text-white"
                    }`}
                  >
                    {d.date}
                  </p>
                  <p className={`mt-3 text-sm ${d.closed ? "text-white/30" : "text-tan"}`}>
                    {d.dow.length === 1 ? `${d.dow}曜日` : d.dow}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-loose text-white/75">
              定員になり次第、募集は終了となります。日程のご都合がつかない場合は、
              事務局（
              <a
                href={`tel:${SCHOOL.tel}`}
                className="font-display tracking-wider text-tan transition-colors hover:text-accent"
              >
                {SCHOOL.tel}
              </a>
              ）までお気軽にご相談ください。
            </p>
          </Reveal>

          {/* 参加者の声 */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:p-10">
              <p className="font-display text-[13px] font-semibold tracking-[0.35em] text-tan">
                VOICES
              </p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {VOICES.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-tan/40 px-5 py-2 font-display text-sm font-bold tracking-wide text-white"
                  >
                    「{v}」
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-loose text-white/75">
                体験入学に参加された方から多く寄せられる感想です。アンケートでは、他校との比較のために見学へ来られた方のほとんどが、そのまま本校へ出願しています。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 当日の流れ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FLOW"
            title="当日の流れ"
            lead="お申込みから当日のお見送りまで。初めての方も安心してご参加いただけます。"
          />
          <RevealGroup className="relative">
            <ol className="space-y-0">
              {FLOW.map((step, i) => (
                <li key={step.title} className="relative pb-10 last:pb-0">
                  {/* 縦ライン */}
                  {i < FLOW.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-6 top-14 bottom-0 w-px bg-tan/60 md:left-7"
                    />
                  )}
                  <RevealItem className="flex gap-6 md:gap-8">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-card md:h-14 md:w-14">
                      <span className="font-display text-lg font-semibold md:text-xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-7">
                      <h3 className="font-mincho text-lg tracking-wide text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-loose text-ink/70">
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

      {/* 遠方の方へ（学生寮・関西拠点） */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="DORMITORY & BASES"
            title="遠方の方も、安心して。"
            lead="東京駅までの無料送迎に加え、入学後の暮らしを支える学生寮、関東・関西の拠点があります。見学の際には、入学後の生活イメージもあわせてご確認ください。"
          />

          {/* 学生寮 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24} y={0}>
              <div className="grid grid-cols-2 gap-3">
                <div className="img-zoom relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/theme/img_kankyo_img_003_1.jpg"
                    alt="学生寮の外観"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/theme/img_kankyo_img_003_2.jpg"
                    alt="学生寮の個室"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src="/images/theme/img_kankyo_img_004_1.jpg"
                    alt="学生寮で提供される食事"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal x={24} y={0}>
              <p className="font-display text-[13px] font-semibold tracking-[0.35em] text-primary">
                DORMITORY
              </p>
              <h3 className="mt-3 font-mincho text-2xl leading-snug tracking-wide text-ink md:text-3xl">
                全室個室・原則、休日も食事提供あります
              </h3>
              <p className="mt-5 text-sm leading-loose text-ink/70 md:text-[15px]">
                初めてのひとり暮らしも安心。馬の学びに集中できるよう、生活面も全面サポートしています。
              </p>
              <ul className="mt-6 space-y-3">
                {DORM_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-accent"
                    />
                    <span className="text-sm leading-relaxed text-ink/80">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* 関東・関西の拠点 */}
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            <RevealItem>
              <article className="h-full overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover">
                <div className="img-zoom relative aspect-[16/9]">
                  <Image
                    src="/images/uploads/2024_03_f655bd20238dcfddb00ee6ebf19ddbf5.jpg"
                    alt="千葉県八街市の総合施設"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="font-display text-xs font-semibold tracking-[0.3em] text-primary">
                    KANTO / CHIBA
                  </p>
                  <h3 className="mt-2 font-mincho text-lg tracking-wide text-ink">
                    千葉県八街市の広大な総合施設
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-ink/70">
                    JRA厩務員の受験対策から競走馬の育成、馬の養老牧場までを兼ねる広大な総合施設が千葉県八街市にあります。関東・関西あわせて国内最大級の4つの教育施設を展開しています。
                  </p>
                </div>
              </article>
            </RevealItem>
            <RevealItem>
              <article className="flex h-full flex-col justify-center rounded-2xl border border-tan/40 bg-cream p-6 md:p-8">
                <p className="font-display text-xs font-semibold tracking-[0.3em] text-primary">
                  KANSAI / OSAKA
                </p>
                <h3 className="mt-2 font-mincho text-lg tracking-wide text-ink">
                  関西研修施設「ホースレスト」
                </h3>
                <p className="mt-3 text-sm leading-loose text-ink/70">
                  大阪府河内長野市には関西の研修施設「ホースレスト」があり、研修や合宿などで活用しています。関西方面にお住まいの方も、進学のご相談をお気軽にお寄せください。
                </p>
                <p className="mt-5 text-sm leading-loose text-ink/70">
                  オープンキャンパス当日は、JR東京駅（八重洲中央口）までの無料送迎をご利用いただけるため、遠方からのご参加も安心です。
                </p>
              </article>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 参加申込・アクセス */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="ENTRY / ACCESS"
            title="参加申込・アクセス"
            lead="お申込み・ご相談はお電話でどうぞ。内容確認のうえ、事務局よりご連絡いたします。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {/* アクセス */}
            <Reveal>
              <div className="h-full rounded-2xl bg-white p-6 shadow-card md:p-8">
                <h3 className="font-mincho text-xl tracking-wide text-ink">
                  アクセス
                </h3>
                <div className="rule-diamond mt-4 w-16" />
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 font-bold text-primary">
                      学校名
                    </dt>
                    <dd className="text-ink/80">
                      {SCHOOL.name}
                      <span className="mt-1 block text-xs text-ink/60">
                        運営：{SCHOOL.operator}
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 font-bold text-primary">
                      所在地
                    </dt>
                    <dd className="text-ink/80">
                      {SCHOOL.zip} {SCHOOL.address}
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 font-bold text-primary">
                      電話
                    </dt>
                    <dd className="text-ink/80">
                      <a
                        href={`tel:${SCHOOL.tel}`}
                        className="font-display text-lg font-semibold tracking-wider text-primary transition-colors hover:text-accent"
                      >
                        {SCHOOL.tel}
                      </a>
                      <span className="mt-1 block text-xs text-ink/60">
                        ご相談・お問合せ
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 font-bold text-primary">
                      送迎
                    </dt>
                    <dd className="text-ink/80">
                      行き：JR東京駅（八重洲中央口）まで無料お迎え（11時30分集合・出発）
                      <br />
                      帰り：JR八街駅までお送りします（東京駅まで直通）
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {/* 申込CTA */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-2xl bg-primary p-6 text-center text-white shadow-card md:p-10">
                <p className="font-display text-[13px] font-semibold tracking-[0.35em] text-tan">
                  ENTRY
                </p>
                <h3 className="mt-3 font-mincho text-2xl leading-snug tracking-wide">
                  まずは、お気軽に
                  <br />
                  お申込み・ご相談を。
                </h3>
                <p className="mx-auto mt-5 max-w-md text-sm leading-loose text-white/80">
                  資料請求をいただいた方には、学校案内とあわせてオープンキャンパスのご案内も同封しています。参加日程に迷ったら、お電話でのご相談も歓迎です。
                </p>
                <div className="mt-8 flex flex-col items-center gap-4">
                  <Link
                    href="/contact?type=opencampus"
                    className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark"
                  >
                    体験入学フォームへ
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <a
                    href={`tel:${SCHOOL.tel}`}
                    className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    <span className="font-display tracking-wider">
                      {SCHOOL.tel}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <Link
                    href="/admission"
                    className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-2 border-white/70 px-8 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent"
                  >
                    募集要項
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
