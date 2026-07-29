"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { SCHOOL } from "@/lib/site";

const CATEGORIES = [
  "入学・出願",
  "学費",
  "授業・生活",
  "就職・JRA",
  "見学",
] as const;

type Category = (typeof CATEGORIES)[number];

const FAQ_ITEMS: (FaqItem & { category: Category })[] = [
  {
    category: "入学・出願",
    q: "馬に触れたことがない未経験者でも入学できますか？",
    a: "はい、入学できます。入学者の約7割はまったくの初心者です。未経験の方が基礎から段階的に学べるカリキュラムを整えていますので、経験の有無を心配せずに一歩を踏み出してください。",
  },
  {
    category: "入学・出願",
    q: "入学者の男女比はどのくらいですか？女子でも大丈夫でしょうか？",
    a: "年度により変動しますが、おおむね男子5割・女子5割です。女性が馬の仕事・就職へ結び付けられるカリキュラムを用意しており、女子学生も安心して学べる環境です。",
  },
  {
    category: "就職・JRA",
    q: "もし就職が決まらなかった場合はどうなりますか？",
    a: "基本的にほぼ全員が在学中に就職内定を得ています。万が一在学中に決まらなかった場合でも、追加の授業費をいただくことなく、就職が決定するまで学校がサポートを続けますのでご安心ください。",
  },
  {
    category: "学費",
    q: "学費の分割払いはできますか？",
    a: "はい、可能です。国の教育ローン（日本政策金融公庫）を活用できるほか、保証会社を利用した独自審査により、授業費を最小12回から最大48回まで分割納入できる本校独自の制度もあります（諸経費は対象外）。詳しくは募集要項をご確認ください。",
  },
  {
    category: "授業・生活",
    q: "寮の食事は土日や祝日も提供されますか？",
    a: "研修期間中などを除き、土日祝日を含む365日・1日3食の提供を前提としています。平日のみ提供という学校が多いなか、休日もしっかり食事がとれるのは本校の特長です。",
  },
  {
    category: "授業・生活",
    q: "在学中に自動車免許は取得できますか？",
    a: "馬業界への就職には自動車免許がほぼ必須です。ご希望の方には八街市内の八街自動車教習所をご紹介しています。教習所から学生寮までの送迎もあり、学びと両立しながら取得を目指せます。",
  },
  {
    category: "見学",
    q: "他校と比べたときの本校の特長は何ですか？",
    a: "体験入学に参加された方から「雰囲気が良い」「先生と生徒の距離が近い」「在校生が明るい」という感想を多くいただいています。学校の様子は毎日ブログで発信しており、保護者の方にも安心いただけます。アンケートでは、他校との比較のために見学に来られた方のほぼ全員が本校に出願しています（選考があるため、全員が入学となるわけではありません）。",
  },
  {
    category: "入学・出願",
    q: "応募できる年齢や条件を教えてください。",
    a: "入学時点で高校卒業以上26歳までの方が対象です。あわせて、入学時点で体重68kg以下であること、馬の管理・騎乗に支障のない健康状態であることが条件となります。中学卒業後すぐの入学を希望される方には、系列の東関東馬事高等学院をご案内しています。",
  },
  {
    category: "入学・出願",
    q: "出願はどのように行いますか？",
    a: "インターネットの入学出願フォームからお申込みいただきます。選考は先着順で、定員になり次第受付を終了します。合格内定後に、入校申込書・健康診断書・住民票（発行3ヶ月以内で家族構成のわかるもの）の3点をご提出いただきます。",
  },
  {
    category: "学費",
    q: "学費はいくらかかりますか？免除制度はありますか？",
    a: "令和9年4月生の場合、2年間で入学申込金48万円と授業費が必要です。通常授業費330万円のうち30%相当をあらかじめ免除し、納付いただく授業費は231万円です。さらに在学中の研修に応じた還付（見込額70万円）があり、実質の授業費は150万円となる見込みです。年度により内容が異なるため、最新の募集要項をご確認ください。",
  },
  {
    category: "学費",
    q: "在学中にお金が戻る制度があると聞きました。本当ですか？",
    a: "はい。提携する牧場・乗馬クラブでの研修に対して「学校運営協力金」を研修回数などに応じて学生に還付する、報酬型のインターン制度があります。在学中の取り組みにより最大70万円が戻る見込みで、働きながら学べる仕組みです。",
  },
  {
    category: "授業・生活",
    q: "インターン研修はどこで行うのですか？",
    a: "全国の乗馬クラブや競走馬育成牧場などと連携し、在学中に最大6ヶ所の現場で研修を受けられます。大阪府河内長野市には関西研修施設「ホースレスト」があり、研修や合宿で活用しています。",
  },
  {
    category: "就職・JRA",
    q: "在学中にJRA厩務員試験を受験できますか？",
    a: "技術レベルや経験により本校が認めた場合、在学中に最大2回、JRA競馬学校厩務員課程を受験できます。在学中・卒業生から多数の合格者を輩出しており、在学中に合格した場合は奨励金10万円を諸経費の還付として支給します。",
  },
  {
    category: "就職・JRA",
    q: "卒業後はどんな進路・就職先がありますか？",
    a: "JRA厩務員をはじめ、競走馬の生産・育成牧場、乗馬クラブ、観光牧場、養老牧場など幅広い進路があります。生産牧場・育成牧場からの求人依頼も多数寄せられています。",
  },
  {
    category: "見学",
    q: "学校見学・オープンキャンパスでは何ができますか？",
    a: "授業内容や馬業界の動向のご説明に加え、乗馬体験、馬のお手入れ体験、在校生と直接話せる時間があります。参加された方には在校生から記念品のプレゼントもあります。他校を検討中の方のご参加も歓迎です。",
  },
  {
    category: "見学",
    q: "遠方からでも見学に参加できますか？出願前の見学は必要ですか？",
    a: "JR東京駅（八重洲中央口）から無料送迎を行っており、お帰りは最寄りのJR八街駅までお送りします。出願は原則としてオープンキャンパス参加後にお願いしていますので、参加が難しい場合は事務局までご相談ください。",
  },
];

const SUGGEST_KEYWORDS = [
  "未経験",
  "学費",
  "寮",
  "JRA",
  "分割払い",
  "女子",
  "食事",
  "東京駅",
];

/** かな・カナ・全半角・大文字小文字を吸収した検索用正規化。 */
function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60),
    )
    .replace(/\s+/g, "");
}

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"すべて" | Category>("すべて");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of FAQ_ITEMS) {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const nq = normalize(query);
    return FAQ_ITEMS.filter(
      (item) =>
        (category === "すべて" || item.category === category) &&
        (nq === "" || normalize(item.q + item.a).includes(nq)),
    );
  }, [query, category]);

  const reset = () => {
    setQuery("");
    setCategory("すべて");
  };

  return (
    <div>
      {/* 検索ボックス */}
      <div role="search" className="mx-auto max-w-2xl">
        <label htmlFor="faq-search" className="sr-only">
          質問をキーワードで検索
        </label>
        <div className="relative">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="faq-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="気になるキーワードを入力（例：学費、寮、JRA）"
            className="shadow-card w-full rounded-full border-2 border-tan/60 bg-white py-4 pl-[3.25rem] pr-12 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent md:text-base"
          />
          {query !== "" && (
            <button
              onClick={() => setQuery("")}
              aria-label="検索キーワードをクリア"
              className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink/50 transition-colors hover:bg-accent hover:text-white"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="h-3.5 w-3.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-ink/50">
          入力と同時に、関連する質問がすぐに絞り込まれます。
        </p>
      </div>

      {/* よく検索されるキーワード */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-accent"
          >
            <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
            <path d="M19 15l.9 3.1L23 19l-3.1.9L19 23l-.9-3.1L15 19l3.1-.9L19 15z" />
          </svg>
          よく検索されるキーワード
        </span>
        {SUGGEST_KEYWORDS.map((kw) => (
          <motion.button
            key={kw}
            whileTap={{ scale: 0.94 }}
            onClick={() => setQuery(kw)}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              query === kw
                ? "border-accent bg-accent text-white"
                : "border-tan/70 bg-white text-primary hover:border-accent hover:text-accent"
            }`}
          >
            {kw}
          </motion.button>
        ))}
      </div>

      {/* カテゴリフィルタ */}
      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="カテゴリで絞り込み"
      >
        {(["すべて", ...CATEGORIES] as const).map((cat) => {
          const active = category === cat;
          const count =
            cat === "すべて" ? FAQ_ITEMS.length : (counts.get(cat) ?? 0);
          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(cat)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                active
                  ? "bg-primary text-white shadow-lg"
                  : "border border-tan/70 bg-white text-ink/70 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
              <span
                className={`font-display rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wider ${
                  active ? "bg-white/20 text-tan" : "bg-cream text-primary/70"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* 件数表示 */}
      <p aria-live="polite" className="mt-8 text-center text-xs text-ink/50">
        該当する質問：
        <span className="font-display mx-1 text-base font-semibold tracking-wider text-accent">
          {filtered.length}
        </span>
        件
      </p>

      {/* 絞り込み結果 */}
      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          {filtered.length > 0 ? (
            <motion.div
              key={`list-${category}-${normalize(query)}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaqAccordion items={filtered} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shadow-card rounded-2xl border border-tan/40 bg-white px-6 py-12 text-center md:px-10"
            >
              <p className="font-mincho text-lg text-ink md:text-xl">
                ご質問が見つかりませんでした
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-loose text-ink/60">
                キーワードを変えてお試しいただくか、事務局までお気軽にお問合せください。
                資料請求では学校案内とオープンキャンパスの案内をお届けしています。
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${SCHOOL.tel}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  電話相談
                  <span className="font-display tracking-wider">
                    {SCHOOL.tel}
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  資料請求・問合せ
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <button
                onClick={reset}
                className="mt-6 text-xs font-bold text-primary underline decoration-tan underline-offset-4 transition-colors hover:text-accent"
              >
                検索条件をクリアして全件表示に戻す
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
