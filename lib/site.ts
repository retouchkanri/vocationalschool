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
  { href: "/", label: "TOP", labelEn: "TOP" },
  { href: "/features", label: "学校の特長", labelEn: "FEATURES" },
  { href: "/curriculum", label: "学び・コース", labelEn: "CURRICULUM" },
  { href: "/admission", label: "入学案内", labelEn: "ADMISSION" },
  { href: "/opencampus", label: "オープンキャンパス", labelEn: "OPEN CAMPUS" },
  { href: "/about", label: "学校案内", labelEn: "ABOUT" },
  { href: "/jra", label: "JRA厩務員", labelEn: "JRA" },
  { href: "/comparison", label: "選ばれる理由", labelEn: "COMPARISON" },
  { href: "/faq", label: "FAQ", labelEn: "Q&A" },
];

export const INQUIRY = {
  href: "/contact",
  label: "お問い合わせ",
  labelEn: "CONTACT",
} as const;

export function getNavLabel(href: string): string {
  return NAV.find((item) => item.href === href)?.label ?? href;
}

/** Key statistics used across the site (client-specified figures). */
export const STATS = [
  { value: 118, suffix: "頭", label: "本校で管理する馬匹の数" },
  { value: 8, suffix: "施設", label: "本校の職場実習連携施設" },
  {
    value: 72,
    suffix: "名",
    label: "ＪＲＡ厩務員の合格者数",
    note: "※平成２８年度以降",
  },
  {
    value: 73,
    suffix: "%",
    label: "未経験・初心者の入学率",
    note: "※令和3年以降実績",
  },
] as const;
