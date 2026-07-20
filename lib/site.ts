export const SCHOOL = {
  name: "東関東馬事専門学院",
  nameShort: "バジガク",
  nameEn: "East Kanto Equine Vocational Academy",
  operator: "株式会社 馬事学院（バジガク）",
  zip: "〒289-1213",
  address: "千葉県山武市雨坪10番地",
  tel: "050-6875-3336",
  logo: "/images/theme/images_logo.png",
  sns: {
    youtube: "https://www.youtube.com/user/umastable",
    instagram: "https://www.instagram.com/bajigakuin/",
    x: "https://twitter.com/bajigakuin",
    blog: "https://ameblo.jp/shool-blog/",
  },
  related: {
    highSchool: "http://bajigakuin.com",
    corporate: "http://bajigaku.com",
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  labelEn: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "ホーム", labelEn: "TOP" },
  { href: "/features", label: "本校の特徴", labelEn: "FEATURES" },
  { href: "/curriculum", label: "授業・カリキュラム", labelEn: "CURRICULUM" },
  { href: "/admission", label: "募集要項", labelEn: "ADMISSION" },
  { href: "/opencampus", label: "学校見学・オープンキャンパス", labelEn: "OPEN CAMPUS" },
  { href: "/about", label: "学校概要", labelEn: "ABOUT" },
  { href: "/jra", label: "JRA厩務員を目指す方へ", labelEn: "JRA" },
  { href: "/comparison", label: "他校との比較", labelEn: "COMPARISON" },
  { href: "/faq", label: "よくある質問", labelEn: "Q&A" },
];

/** Key statistics used across the site (source: bajigaku.site, 2025). */
export const STATS = [
  { value: 120, suffix: "頭", label: "学生が管理する馬の数" },
  { value: 4, suffix: "施設", label: "千葉・大阪の教育拠点" },
  { value: 10, suffix: "年連続", label: "JRA厩務員課程 合格実績" },
  { value: 100, suffix: "%", label: "令和7年度 牧場・乗馬クラブ就職率" },
] as const;
