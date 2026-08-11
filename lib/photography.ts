/**
 * Curated photography sets for the Premium Documentary visual direction.
 * Images are grouped by editorial role — swap paths when new shoots are available.
 */

export type PhotoAspect = "hero" | "card" | "story" | "gallery" | "cta" | "portrait";

export type CuratedPhoto = {
  src: string;
  alt: string;
  caption?: string;
  /** CSS object-position when cropped (e.g. "70% center") */
  objectPosition?: string;
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
    // Subject sits far right in the source — strong right bias to center horse & rider
    objectPosition: "92% 40%",
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
    // Bias hard left so the horse stays in frame; person shifts right in the crop
    objectPosition: "0% 38%",
  },
];

/**
 * Campus & environment gallery — current facility photos only.
 */
export const CAMPUS_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/facilities/kosha-gaikan.jpg",
    alt: "校舎外観",
    caption: "校舎外観",
  },
  {
    src: "/images/facilities/baba.jpg",
    alt: "馬場",
    caption: "馬場",
  },
  {
    src: "/images/facilities/kyusha.jpg",
    alt: "厩舎",
    caption: "厩舎",
  },
  {
    src: "/images/facilities/shinrindo.jpg",
    alt: "新林道",
    caption: "新林道",
  },
  {
    src: "/images/facilities/mori-shisetsu.jpg",
    alt: "森施設",
    caption: "森施設",
  },
  {
    src: "/images/facilities/taiikukan.jpg",
    alt: "体育館",
    caption: "体育館",
  },
  {
    src: "/images/facilities/training-room.jpg",
    alt: "トレーニングルーム",
    caption: "トレーニングルーム",
  },
  {
    src: "/images/facilities/kyoshitsu.jpg",
    alt: "教室",
    caption: "教室",
  },
  {
    src: "/images/facilities/kogishitsu.jpg",
    alt: "講義室",
    caption: "講義室",
  },
  {
    src: "/images/facilities/kyukeishitsu.jpg",
    alt: "休憩室",
    caption: "休憩室",
  },
  {
    src: "/images/facilities/cafeteria.jpg",
    alt: "食堂",
    caption: "食堂",
  },
  {
    src: "/images/facilities/kitchen.jpg",
    alt: "厨房",
    caption: "厨房",
  },
  {
    src: "/images/facilities/mendanshitsu-sanbu.jpg",
    alt: "面談室／山武",
    caption: "面談室／山武",
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

/** Documentary gallery strip — current campus life (uploads f1–f8) */
export const GALLERY_PHOTOS: CuratedPhoto[] = [
  { src: "/images/uploads/f1.JPG", alt: "木馬トレーニングに取り組む学生たち" },
  { src: "/images/uploads/f2.JPG", alt: "レースのゼッケンを囲む学生たち" },
  { src: "/images/uploads/f3.JPG", alt: "授業で学ぶ学生の日常" },
  { src: "/images/uploads/f4.JPG", alt: "担当馬と向き合う学生" },
  { src: "/images/uploads/f5.JPG", alt: "笑顔で馬と並ぶ学生" },
  { src: "/images/uploads/f6.JPG", alt: "馬とともに過ごすバジガクの日常" },
  { src: "/images/uploads/f7.JPG", alt: "キャンパスで学ぶ学生のひとコマ" },
  { src: "/images/uploads/f8.JPG", alt: "馬とふれあう学生たち" },
];

export const CTA_PHOTO = {
  src: "/images/theme/003/gallery-34.jpg",
  alt: "白い柵に囲まれた放牧場と青空の下で過ごす馬たち",
} as const;
