/**
 * Curated photography sets for the Premium Documentary visual direction.
 * Images are grouped by editorial role — swap paths when new shoots are available.
 */

export type PhotoAspect = "hero" | "card" | "story" | "gallery" | "cta" | "portrait";

export type CuratedPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

/** Cinematic hero — client designed banners from /images/theme/000 */
export const HERO_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/000/uma1.jpg",
    alt: "馬を愛すること。その気持ちは、きっと伝わります。",
  },
  {
    src: "/images/theme/000/uma2.jpg",
    alt: "馬の目線でいること。考えていることも理解できます。",
  },
  {
    src: "/images/theme/000/uma3.jpg",
    alt: "馬に委ねること。一心同体こそが通じ合う第一歩です。",
  },
  {
    src: "/images/theme/000/uma4.jpg",
    alt: "馬を信じること。信じあえば、強い味方になります。",
  },
  {
    src: "/images/theme/000/uma5.jpg",
    alt: "馬を褒めること。褒めて伸びるのは、人だけではありません。",
  },
  {
    src: "/images/theme/000/uma6.jpg",
    alt: "馬と話すこと。心はきっと通じ合います。",
  },
  {
    src: "/images/theme/000/uma7.jpg",
    alt: "馬をたたえること。期待はいつか現実になります。",
  },
  {
    src: "/images/theme/000/uma8.jpg",
    alt: "馬と未来を見つめること。どんなことでも乗り越えていけるように。",
  },
];

/** Alias for features / shared banner slideshows */
export const THEME_000_BANNERS = HERO_PHOTOS;

/** Training in action — client photos from /images/theme/001 (portrait cards) */
export const TRAINING_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/001/train-01.jpg",
    alt: "放牧地で学生を見つめる約118頭の馬たち",
    caption: "約118頭の馬たち",
  },
  {
    src: "/images/theme/001/train-02.jpg",
    alt: "屋外コースでの騎乗トレーニング",
    caption: "騎乗トレーニング",
  },
  {
    src: "/images/theme/001/train-03.jpg",
    alt: "競走馬のパドックで学ぶ実践",
    caption: "競走馬との実践",
  },
  {
    src: "/images/theme/001/train-04.jpg",
    alt: "馬術競技・ジャンプ練習の様子",
    caption: "ジャンプ練習",
  },
  {
    src: "/images/theme/001/train-05.jpg",
    alt: "乗馬レッスンに笑顔で取り組む学生",
    caption: "乗馬レッスン",
  },
  {
    src: "/images/theme/001/train-06.jpg",
    alt: "馬と向き合い絆を深める学生",
    caption: "馬とのふれあい",
  },
];

/**
 * Campus & environment gallery.
 * Captions and order match https://bajigaku.site/kankyo/ (img_002 → img_003 → img_004).
 */
export const CAMPUS_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_kankyo_img_002_1.jpg",
    alt: "練習運動場の様子です",
    caption: "練習運動場の様子です",
  },
  {
    src: "/images/theme/img_kankyo_img_002_2.jpg",
    alt: "1周150ⅿの走路トラック",
    caption: "1周150ⅿの走路トラック",
  },
  {
    src: "/images/theme/img_kankyo_img_002_3.jpg",
    alt: "ひろ～い運動場（馬場）です",
    caption: "ひろ～い運動場（馬場）です",
  },
  {
    src: "/images/theme/img_kankyo_img_002_4.jpg",
    alt: "馬たちのお部屋（厩舎風景）",
    caption: "馬たちのお部屋（厩舎風景）",
  },
  {
    src: "/images/theme/img_kankyo_img_002_5.jpg",
    alt: "教室や事務所のクラブハウス",
    caption: "教室や事務所のクラブハウス",
  },
  {
    src: "/images/theme/img_kankyo_img_002_6.jpg",
    alt: "馬たちが快適に過ごします",
    caption: "馬たちが快適に過ごします",
  },
  {
    src: "/images/theme/img_kankyo_img_002_7.jpg",
    alt: "のんびりした環境にあります",
    caption: "のんびりした環境にあります",
  },
  {
    src: "/images/theme/img_kankyo_img_002_8.jpg",
    alt: "バジガクの風景の一コマ",
    caption: "バジガクの風景の一コマ",
  },
  {
    src: "/images/theme/img_kankyo_img_002_9.jpg",
    alt: "ミニパドック（放牧場）",
    caption: "ミニパドック（放牧場）",
  },
  {
    src: "/images/theme/img_kankyo_img_002_10.jpg",
    alt: "馬たちが過ごす厩舎がたくさんあります",
    caption: "馬たちが過ごす厩舎がたくさんあります",
  },
  {
    src: "/images/theme/img_kankyo_img_002_11.jpg",
    alt: "円形の丸馬場で馬をトレーニングします",
    caption: "円形の丸馬場で馬をトレーニングします",
  },
  {
    src: "/images/theme/img_kankyo_img_002_12.jpg",
    alt: "馬で坂道での散歩もできます",
    caption: "馬で坂道での散歩もできます",
  },
  {
    src: "/images/theme/img_kankyo_img_003_1.jpg",
    alt: "学生寮の外観",
    caption: "学生寮の外観",
  },
  {
    src: "/images/theme/img_kankyo_img_003_2.jpg",
    alt: "学生寮の個室",
    caption: "学生寮の個室",
  },
  {
    src: "/images/theme/img_kankyo_img_004_1.jpg",
    alt: "毎日、食事が用意されます",
    caption: "毎日、食事が用意されます",
  },
  {
    src: "/images/theme/img_kankyo_img_004_2.jpg",
    alt: "洗面所・選択スペース",
    caption: "洗面所・選択スペース",
  },
  {
    src: "/images/theme/img_kankyo_img_004_3.jpg",
    alt: "食堂の風景です",
    caption: "食堂の風景です",
  },
  {
    src: "/images/theme/img_kankyo_img_004_4.jpg",
    alt: "男子風呂の様子です",
    caption: "男子風呂の様子です",
  },
  {
    src: "/images/theme/img_kankyo_img_004_5.jpg",
    alt: "管理室で荷物も受け取り出来ます",
    caption: "管理室で荷物も受け取り出来ます",
  },
  {
    src: "/images/theme/img_kankyo_img_004_6.jpg",
    alt: "寮には掲示物がたくさんあります",
    caption: "寮には掲示物がたくさんあります",
  },
];

/** Student lifestyle — client photos from /images/theme/005 (uniform 1:1) */
export const LIFESTYLE_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/005/life-01.jpg",
    alt: "学校生活の明るいひととき",
    caption: "学校の雰囲気",
  },
  {
    src: "/images/theme/005/life-02.jpg",
    alt: "仲間と過ごすキャンパスの日常",
    caption: "仲間との時間",
  },
  {
    src: "/images/theme/005/life-03.jpg",
    alt: "笑顔で騎乗する学生たち",
    caption: "騎乗の毎日",
  },
  {
    src: "/images/theme/005/life-04.jpg",
    alt: "コースで実践練習に励む学生",
    caption: "実践のひとコマ",
  },
];

/** Horse portraits — client photos from /images/theme/004 (uniform 3:4) */
export const HORSE_PORTRAITS: CuratedPhoto[] = Array.from({ length: 62 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/theme/004/portrait-${n}.jpg`,
    alt: `本校で暮らす馬のポートレート ${i + 1}`,
  };
});

/** Documentary gallery strip (3:2) */
export const GALLERY_PHOTOS: CuratedPhoto[] = [
  { src: "/images/theme/img_tokucho_img_002_4.jpg", alt: "放牧地の馬たち" },
  { src: "/images/theme/img_taiken_img_002_1.jpg", alt: "体験入学の様子" },
  { src: "/images/theme/img_taiken_img_002_2.jpg", alt: "馬とのふれあい" },
  { src: "/images/theme/img_kankyo_img_002_3.jpg", alt: "キャンパス風景" },
  { src: "/images/theme/img_curriculum_img_002_1.jpg", alt: "授業風景" },
  { src: "/images/theme/img_kankyo_img_002_5.jpg", alt: "施設での実習" },
  { src: "/images/theme/img_tokucho_img_002_6.jpg", alt: "馬のケア" },
  { src: "/images/theme/img_cmn_img_group_b3.jpg", alt: "バジガクの日常" },
];

export const CTA_PHOTO = {
  src: "/images/theme/003/gallery-34.jpg",
  alt: "白い柵に囲まれた放牧場と青空の下で過ごす馬たち",
} as const;
