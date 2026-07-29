import { SCHOOL, STATS } from "@/lib/site";

export type KnowledgeEntry = {
  id: string;
  topic: string;
  keywords: string[];
  answer: string;
  relatedHref?: string;
};

/**
 * Knowledge corpus for the LiveChat AI assistant.
 * Covers every public page, including the inquiry (/contact) flow.
 */
export const CHAT_KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "school-overview",
    topic: "学校概要",
    keywords: [
      "学校",
      "概要",
      "バジガク",
      "馬事学院",
      "どこ",
      "住所",
      "所在地",
      "運営",
      "どんな学校",
    ],
    answer: `${SCHOOL.name}（${SCHOOL.nameShort}）は、${SCHOOL.operator}が運営する馬の専門学校です。所在地は${SCHOOL.zip} ${SCHOOL.address}。本校で管理する馬匹は${STATS[0].value}頭、職場実習連携施設は${STATS[1].value}施設。未経験からJRA厩務員・牧場・乗馬クラブへの就職を目指せます。お電話は ${SCHOOL.tel} です。`,
    relatedHref: "/about",
  },
  {
    id: "contact-inquiry",
    topic: "お問合せ・資料請求",
    keywords: [
      "お問合せ",
      "問い合わせ",
      "問合せ",
      "相談",
      "資料請求",
      "連絡",
      "メール",
      "フォーム",
      "電話",
      "クリアーファイル",
    ],
    answer: `ご相談・お問合せはお電話（${SCHOOL.tel}）またはお問合せフォームから受け付けています。フォームではお名前・フリガナ・メールアドレス・件名・お問合せ内容をご記入ください。資料請求では学校案内に加えオープンキャンパスのご案内をお届けし、クリアーファイルの無料プレゼントも実施中です。`,
    relatedHref: "/contact",
  },
  {
    id: "features",
    topic: "本校の特徴",
    keywords: ["特徴", "特長", "強み", "優位", "なぜ", "選ばれる", "違い"],
    answer:
      "本校の特長は、約118頭の馬とともに現場で学べること、千葉・大阪など国内最大級4つの教育拠点、未経験者向けの段階的カリキュラム、JRA厩務員課程への高い合格実績、そして先生と生徒の距離が近い雰囲気です。他校比較のために見学された方の多くが出願を検討されています。",
    relatedHref: "/features",
  },
  {
    id: "curriculum",
    topic: "授業・カリキュラム",
    keywords: [
      "授業",
      "カリキュラム",
      "学べる",
      "学習",
      "内容",
      "実習",
      "インターン",
      "研修",
    ],
    answer:
      "授業では馬の飼養管理・騎乗・現場実習を中心に、未経験から段階的に学べます。全国の乗馬クラブや競走馬育成牧場と連携し、在学中に最大6ヶ所でインターン研修を受けられます。大阪府河内長野市の関西研修施設「ホースレスト」も活用しています。",
    relatedHref: "/curriculum",
  },
  {
    id: "admission-period",
    topic: "出願期間・選考",
    keywords: [
      "出願",
      "募集",
      "応募",
      "期間",
      "選考",
      "定員",
      "申し込み",
      "申込",
      "入学",
    ],
    answer:
      "令和9年4月生の出願期間は令和8年5月1日（金）〜10月28日（水）です。インターネットの入学出願フォームからお申し込みいただき、先着順で随時選考します。定員になり次第終了するため、お早めの出願をおすすめします。合格内定後に入校申込書・健康診断書・住民票（発行3ヶ月以内・家族構成がわかるもの）をご提出いただきます。",
    relatedHref: "/admission",
  },
  {
    id: "admission-requirements",
    topic: "応募条件",
    keywords: ["条件", "年齢", "体重", "健康", "資格", "対象", "誰でも"],
    answer:
      "応募条件は、入学時点で高校卒業以上26歳まで、体重68kg以下、馬の管理・騎乗に支障のない健康状態であることです。中学卒業後すぐの入学を希望される方には、系列の東関東馬事高等学院をご案内しています。",
    relatedHref: "/admission",
  },
  {
    id: "tuition",
    topic: "学費",
    keywords: [
      "学費",
      "費用",
      "お金",
      "授業料",
      "料金",
      "いくら",
      "分割",
      "ローン",
      "免除",
      "還付",
    ],
    answer:
      "令和9年4月生の場合、入学申込金48万円と授業費が必要です。通常授業費330万円のうち30%相当をあらかじめ免除し、納付授業費は231万円。在学中の研修に応じた還付（見込額70万円）があり、実質授業費は約150万円となる見込みです。国の教育ローンや、保証会社審査による分割払い（最小12回〜最大48回／在学中2年〜最大5年）にも対応しています。年度により異なるため、最新の募集要項もご確認ください。",
    relatedHref: "/admission",
  },
  {
    id: "opencampus",
    topic: "学校見学・オープンキャンパス",
    keywords: [
      "見学",
      "オープンキャンパス",
      "体験",
      "体験入学",
      "来校",
      "送迎",
      "東京駅",
    ],
    answer:
      "オープンキャンパスでは授業・業界説明に加え、乗馬体験、馬のお手入れ体験、在校生との交流があります。JR東京駅（八重洲中央口）から無料送迎があり、お帰りはJR八街駅までお送りします。原則として出願前のご参加をお願いしています。参加が難しい場合は事務局までご相談ください。",
    relatedHref: "/opencampus",
  },
  {
    id: "jra",
    topic: "JRA厩務員",
    keywords: [
      "jra",
      "JRA",
      "厩務員",
      "競馬学校",
      "試験",
      "合格",
      "受験",
      "奨励金",
    ],
    answer:
      "技術レベルや経験により本校が認めた場合、在学中に最大2回、JRA競馬学校厩務員課程を受験できます。在学中・卒業生から多数の合格者を輩出しており、在学中合格時は奨励金10万円を諸経費の還付として支給します。JRA厩務員課程は72名の合格実績もあります。",
    relatedHref: "/jra",
  },
  {
    id: "careers",
    topic: "就職・進路",
    keywords: ["就職", "進路", "就職先", "牧場", "乗馬クラブ", "内定", "求人"],
    answer:
      "卒業後の進路は、JRA厩務員、競走馬の生産・育成牧場、乗馬クラブ、観光牧場、養老牧場などです。基本的にほぼ全員が在学中に就職内定を得ており、万が一決まらない場合も追加授業費なく就職決定までサポートします。令和7年度は牧場・乗馬クラブ就職率73%です。",
    relatedHref: "/jra",
  },
  {
    id: "beginner",
    topic: "未経験者",
    keywords: ["未経験", "初心者", "初めて", "馬に触れたことがない", "素人"],
    answer:
      "はい、未経験でも入学できます。入学者の約7割はまったくの初心者です。基礎から段階的に学べるカリキュラムを整えているので、経験の有無を心配せずに一歩を踏み出してください。",
    relatedHref: "/faq",
  },
  {
    id: "gender",
    topic: "女子学生",
    keywords: ["女子", "女性", "男女", "女の子", "男子"],
    answer:
      "年度により変動しますが、おおむね男子5割・女子5割です。女性が馬の仕事・就職へ結び付けられるカリキュラムを用意しており、女子学生も安心して学べる環境です。",
    relatedHref: "/faq",
  },
  {
    id: "dorm",
    topic: "学生寮・生活",
    keywords: ["寮", "学生寮", "食事", "生活", "住む", "宿泊", "365"],
    answer:
      "学生寮があり、研修期間中などを除き土日祝日を含む365日・1日3食の食事提供を前提としています。平日のみ提供の学校が多いなか、休日もしっかり食事がとれるのが本校の特長です。",
    relatedHref: "/features",
  },
  {
    id: "license",
    topic: "自動車免許",
    keywords: ["免許", "自動車", "車", "運転免許", "教習所"],
    answer:
      "馬業界への就職には自動車免許がほぼ必須です。ご希望の方には八街市内の八街自動車教習所をご紹介しており、教習所から学生寮までの送迎もあるため、学びと両立しながら取得を目指せます。",
    relatedHref: "/faq",
  },
  {
    id: "comparison",
    topic: "他校との比較",
    keywords: ["他校", "比較", "違う", "どちら", "おすすめ"],
    answer:
      "体験入学参加者からは「雰囲気が良い」「先生と生徒の距離が近い」「在校生が明るい」といった感想が多く寄せられています。学校の様子は毎日ブログでも発信しています。詳細は他校との比較ページもご参照ください。",
    relatedHref: "/comparison",
  },
  {
    id: "hours-tel",
    topic: "電話での相談",
    keywords: ["電話番号", "tel", "コール", "事務局"],
    answer: `馬事学院事務局へのお電話は ${SCHOOL.tel} です。進路や学費のことなど、スタッフが直接お答えします。お気軽にご相談ください。`,
    relatedHref: "/contact",
  },
];

function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60),
    )
    .replace(/\s+/g, "");
}

export type ChatMatch = {
  entry: KnowledgeEntry;
  score: number;
};

/** Rank knowledge entries against a user question. */
export function rankKnowledge(question: string): ChatMatch[] {
  const q = normalize(question);
  if (!q) return [];

  return CHAT_KNOWLEDGE.map((entry) => {
    let score = 0;
    const haystack = normalize(
      [entry.topic, entry.answer, ...entry.keywords].join(" "),
    );

    for (const kw of entry.keywords) {
      const nkw = normalize(kw);
      if (nkw && q.includes(nkw)) score += 4;
      if (nkw && haystack.includes(nkw) && q.length >= 2) {
        // partial credit when question tokens overlap topic words
      }
    }

    // Character n-gram overlap for Japanese short queries
    const grams = new Set<string>();
    for (let i = 0; i < q.length - 1; i++) grams.add(q.slice(i, i + 2));
    for (const g of grams) {
      if (haystack.includes(g)) score += 1;
    }

    if (haystack.includes(q)) score += 8;
    return { entry, score };
  })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function answerFromKnowledge(question: string): {
  answer: string;
  relatedHref?: string;
  matchedTopic?: string;
} {
  const ranked = rankKnowledge(question);
  const best = ranked[0];

  if (!best || best.score < 3) {
    return {
      answer: `ご質問ありがとうございます。内容を正確にお伝えするため、お電話（${SCHOOL.tel}）またはお問合せフォームからご連絡ください。学費・出願・見学・JRAなど、よくあるご質問は「よくある質問」ページでもご覧いただけます。`,
      relatedHref: "/contact",
      matchedTopic: undefined,
    };
  }

  return {
    answer: best.entry.answer,
    relatedHref: best.entry.relatedHref,
    matchedTopic: best.entry.topic,
  };
}

/** Plain-text export for LiveChat Knowledge Hub uploads. */
export function knowledgeAsTrainingText(): string {
  return CHAT_KNOWLEDGE.map(
    (e) =>
      `【${e.topic}】\nキーワード: ${e.keywords.join("、")}\n${e.answer}${
        e.relatedHref ? `\n関連ページ: ${e.relatedHref}` : ""
      }`,
  ).join("\n\n---\n\n");
}
