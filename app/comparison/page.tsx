import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "他校との比較",
  description:
    "馬の学校選びで確認したい比較ポイント（馬の頭数・施設規模・現場研修・JRA合格実績・就職率・学費サポート）と、東関東馬事専門学院の答えをわかりやすくまとめました。",
};

/** 比較チェックポイント table rows. */
const CHECKPOINTS = [
  {
    point: "馬の頭数と種類",
    reason:
      "毎日どれだけ多くの馬に触れられるかが、実習量と経験の幅をそのまま決めます。乗用馬だけでなく競走馬にも接することができるかも確認したいところです。",
    answer:
      "おとなしい乗用馬から引退競走馬・馬術競技馬・現役競走馬まで、約120頭を学生自身が管理。入学すると担当馬を持ち、日々の管理を通して学びます。",
  },
  {
    point: "施設規模",
    reason:
      "厩舎や馬場などの施設の規模と数は、そこで実施できる授業内容の幅につながります。実際の教育環境を数字で確かめておきましょう。",
    answer:
      "千葉県と大阪府に拠点を持ち、国内最大級の4つの教育施設を展開。乗馬と競走馬の両方を同時に学べる環境です。",
  },
  {
    point: "実践・現場研修",
    reason:
      "就職前にどれだけ現場を経験できるかは、卒業後の成長スピードを大きく左右します。学外研修の回数や行き先を確認しましょう。",
    answer:
      "全国の乗馬クラブ・競走馬育成牧場等との連携により、在学中に最大6ヶ所の現場でインターン研修が可能。働きながら学べる実践型教育です。",
  },
  {
    point: "JRA合格実績",
    reason:
      "JRA競馬学校「厩務員課程」を目指すなら、受験対策の中身と継続的な合格実績が指導力を測る目安になります。",
    answer:
      "JRA競馬学校「厩務員課程」の合格実績を10年連続で達成。在学中の受験にも対応し、未経験の入学から最短1年6ヶ月で合格した実績もあります。",
  },
  {
    point: "就職率・就職先",
    reason:
      "学校選びは卒業後の進路に直結します。就職率の数字だけでなく、どんな職場へ就職しているかまで確認することが大切です。",
    answer:
      "令和7年度には牧場や乗馬クラブへの就職率100%を記録。競走馬の生産牧場・育成牧場、乗馬クラブ、観光牧場、JRA厩務員など幅広い進路を目指せます。",
  },
  {
    point: "学費サポート",
    reason:
      "学費は表面の金額だけでなく、免除・還付・分割などの支援制度まで含めた実質負担で比べることが重要です。",
    answer:
      "令和9年4月生には授業費30%（90万円相当）の納付免除制度を用意。在学中の取り組みにより最大70万円が戻る報酬型インターン制度や、最大5年間の分割払いにも対応します。",
  },
  {
    point: "拠点・アクセス",
    reason:
      "学びの拠点がどこにあり、研修先や寮とどうつながっているかは、2年間の生活のしやすさに関わります。",
    answer:
      "本校は千葉県山武市が本拠地。千葉・大阪の4施設に加え、関西研修施設「ホースレスト」（大阪府河内長野市）を研修・合宿などで活用しています。",
  },
] as const;

/** 選び方ガイド cards. */
const GUIDE = [
  {
    step: "01",
    title: "見学で馬と施設を実際に見る",
    body: "パンフレットだけでは、馬の頭数や施設の規模は実感できません。学校見学・オープンキャンパスに足を運び、馬たちの様子や授業の雰囲気をご自身の目で確かめましょう。",
    image: "/images/theme/img_taiken_img_001_1.jpg",
    alt: "学校見学で施設を案内する様子",
  },
  {
    step: "02",
    title: "卒業後の進路実績を聞く",
    body: "学校選びは在学中だけでなく、卒業後の進路に直結します。就職率の数字に加えて、どのような牧場・乗馬クラブへ就職しているのか、具体的な実績を質問してみましょう。",
    image: "/images/theme/img_6_005_img_002_2.jpg",
    alt: "一人ひとりに向き合う就職カウンセリング",
  },
  {
    step: "03",
    title: "学費の総額と支援制度を確認する",
    body: "入学金・授業費の総額とあわせて、免除・還付・分割払いなどの支援制度の有無を確認しましょう。実質的な負担額で比較することが、納得のいく選択につながります。",
    image: "/images/theme/img_top_toku_img_005.jpg",
    alt: "学費支援制度の案内",
  },
  {
    step: "04",
    title: "在校生の雰囲気に触れる",
    body: "2年間を共に過ごす仲間や先生との距離感も大切な判断材料です。見学の際は在校生と話す機会を活かし、自分がここで学ぶ姿を具体的にイメージしてみてください。",
    image: "/images/theme/img_taiken_img_002_3.jpg",
    alt: "オープンキャンパスで在校生と交流する様子",
  },
] as const;

/** 結論 link cards. */
const LINKS = [
  {
    href: "/features",
    en: "FEATURES",
    title: "本校の特徴",
    body: "約120頭・4施設の教育環境と、実践型カリキュラムの全体像をご紹介します。",
    image: "/images/theme/img_tokucho_img_002_2.jpg",
    alt: "担当馬と過ごす学生たち",
  },
  {
    href: "/admission",
    en: "ADMISSION",
    title: "募集要項・学費",
    body: "出願方法や学費の詳細、授業費免除・分割払いなどの支援制度をご確認いただけます。",
    image: "/images/theme/img_tokucho_img_002_3.jpg",
    alt: "授業に取り組む学生たち",
  },
  {
    href: "/opencampus",
    en: "OPEN CAMPUS",
    title: "学校見学・オープンキャンパス",
    body: "乗馬体験や在校生との交流を通して、本校の学びを実際にご体感ください。",
    image: "/images/theme/img_taiken_img_002_1.jpg",
    alt: "オープンキャンパスでの乗馬体験",
  },
] as const;

export default function ComparisonPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPARISON"
        title="他校との比較"
        lead="馬の学校選びで大切なのは、学費の安さだけではありません。比較のためのチェックポイントと、本校の答えをご紹介します。"
        image="/images/theme/img_tokucho_img_001_1.jpg"
        breadcrumb="他校との比較"
      />

      {/* 1. Intro — 学校選びの考え方 */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="HOW TO CHOOSE"
            title="学校選びは、夢の実現に直結します"
            lead="どの学校で学ぶかによって、在学中に積める経験も、卒業後に進める道も大きく変わります。だからこそ、じっくり比較して選んでいただきたいのです。"
          />
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal x={-20} y={0}>
              <div className="img-zoom overflow-hidden rounded-2xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/theme/img_tokucho_img_002_5.jpg"
                    alt="学生の教材となる約120頭の馬たち"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal x={20} y={0}>
              <h3 className="font-mincho text-2xl leading-relaxed text-ink md:text-3xl">
                学費の安さだけで
                <br />
                選んでいませんか？
              </h3>
              <p className="mt-6 text-[15px] leading-loose text-ink/75 md:text-base">
                馬の学校は、学費・授業内容・就職率など多角的に比較・検討することが大切です。金額の高い・安いだけで判断するのではなく、そこで「何を学べるのか」、その学びが「どんな進路につながるのか」まで見比べることで、自分に合った一校が見えてきます。
              </p>
              <p className="mt-4 text-[15px] leading-loose text-ink/75 md:text-base">
                本校では、比較の視点として次の4つをおすすめしています。
              </p>
              <RevealGroup className="mt-6 grid grid-cols-2 gap-3">
                {["何を学ぶか", "費用", "カリキュラム", "就職先"].map(
                  (label, i) => (
                    <RevealItem key={label}>
                      <div className="flex items-center gap-3 rounded-xl border border-tan/40 bg-cream/60 px-4 py-3">
                        <span className="font-display text-sm font-semibold tracking-wider text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mincho text-sm text-ink md:text-base">
                          {label}
                        </span>
                      </div>
                    </RevealItem>
                  ),
                )}
              </RevealGroup>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. 比較チェックポイント table */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="CHECK POINTS"
            title="馬の学校を比較するときのチェックポイント"
            lead="どの学校を検討する場合にも役立つ7つの視点と、それぞれに対する本校の答えをまとめました。学校選びのものさしとしてご活用ください。"
          />
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th
                        scope="col"
                        className="w-[18%] px-5 py-4 font-mincho text-sm font-normal tracking-wider md:text-base"
                      >
                        比較ポイント
                      </th>
                      <th
                        scope="col"
                        className="w-[38%] px-5 py-4 font-mincho text-sm font-normal tracking-wider md:text-base"
                      >
                        チェックすべき理由
                      </th>
                      <th
                        scope="col"
                        className="w-[44%] px-5 py-4 font-mincho text-sm font-normal tracking-wider md:text-base"
                      >
                        本校の場合
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHECKPOINTS.map((row, i) => (
                      <tr
                        key={row.point}
                        className="border-t border-tan/30 align-top odd:bg-cream/60"
                      >
                        <th
                          scope="row"
                          className="px-5 py-5 font-mincho text-sm font-normal leading-relaxed text-primary md:text-base"
                        >
                          <span className="font-display mr-2 text-xs tracking-wider text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {row.point}
                        </th>
                        <td className="px-5 py-5 text-[13px] leading-relaxed text-ink/70 md:text-sm">
                          {row.reason}
                        </td>
                        <td className="px-5 py-5 text-[13px] leading-relaxed text-ink md:text-sm">
                          {row.answer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-center text-xs leading-relaxed text-ink/55 md:text-sm">
              ※ 学費支援制度は令和9年4月生を対象とした内容です。詳細は
              <Link
                href="/admission"
                className="mx-1 text-accent underline underline-offset-4 transition-colors hover:text-accent-dark"
              >
                募集要項
              </Link>
              をご確認ください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. 数字で見るバジガク — dark impact band */}
      <section className="relative overflow-hidden bg-primary-deep py-16 md:py-24">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-tan/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="BY THE NUMBERS"
            title="数字で見るバジガク"
            lead="比較のものさしになる本校の教育環境と実績を、数字でご紹介します。"
            light
          />
          <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-tan/40 hover:bg-white/10 md:py-10">
                  <p className="font-display text-4xl font-semibold tracking-wide text-tan md:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.suffix === "頭" ? "約" : ""}
                    />
                    <span className="ml-1 text-lg text-white/80 md:text-xl">
                      {stat.suffix}
                    </span>
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-white/70 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. 選び方ガイド */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="GUIDE"
            title="後悔しない学校選び、4つのステップ"
            lead="どの学校を選ぶにしても共通して役立つ、比較・検討の進め方をご紹介します。"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GUIDE.map((item) => (
              <RevealItem key={item.step} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="font-display absolute left-4 top-4 rounded-full bg-primary-deep/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-tan">
                      STEP {item.step}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-mincho text-lg leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-ink/70 md:text-sm">
                      {item.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 5. 結論 + link cards */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="CONCLUSION"
            title="比べたその先に、本校の学びがあります"
            lead="約120頭の馬と4つの教育施設、10年連続のJRA厩務員課程合格実績、そして令和7年度就職率100%。比較していただくほどに伝わる本校の学びを、ぜひ実際にお確かめください。"
          />
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {LINKS.map((item) => (
              <RevealItem key={item.href} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card shadow-card-hover"
                >
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-accent">
                      {item.en}
                    </p>
                    <h3 className="mt-2 font-mincho text-lg leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/70 md:text-sm">
                      {item.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-accent">
                      詳しく見る
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
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
