/**
 * Curated photography sets for the Premium Documentary visual direction.
 * Images are grouped by editorial role — swap paths when new shoots are available.
 */

export type PhotoAspect = "hero" | "card" | "story" | "gallery" | "cta";

export type CuratedPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

/** Cinematic hero — wide landscape, golden-hour feel (16:9 / 21:9) */
export const HERO_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_cmn_img_group_a1.jpg",
    alt: "夕暮れの牧場で馬と向き合う学生",
  },
  {
    src: "/images/theme/img_cmn_img_group_a2.jpg",
    alt: "広い緑の放牧地を走る馬たち",
  },
  {
    src: "/images/theme/img_cmn_img_group_a3.jpg",
    alt: "厩舎で馬のお世話をする学生",
  },
  {
    src: "/images/theme/img_taiken_img_001_1.jpg",
    alt: "オープンキャンパスでの乗馬体験",
  },
  {
    src: "/images/theme/img_tokucho_img_002_1.jpg",
    alt: "馬とともに学ぶ日常の一コマ",
  },
  {
    src: "/images/theme/img_kankyo_img_002_1.jpg",
    alt: "キャンパスの広大な緑と馬房",
  },
];

/** Training in action — riding, grooming, stable work (4:3 / 3:2) */
export const TRAINING_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_curriculum_img_002_2.jpg",
    alt: "乗馬レッスンの様子",
    caption: "乗馬レッスン",
  },
  {
    src: "/images/theme/img_curriculum_img_002_3.jpg",
    alt: "馬のお手入れ・グルーミング",
    caption: "馬のお手入れ",
  },
  {
    src: "/images/theme/img_curriculum_img_002_4.jpg",
    alt: "厩務・馬房作業",
    caption: "厩務実習",
  },
  {
    src: "/images/theme/img_curriculum_img_002_5.jpg",
    alt: "指導員による実技指導",
    caption: "実技指導",
  },
  {
    src: "/images/theme/img_curriculum_img_002_6.jpg",
    alt: "学生同士の協力",
    caption: "チームワーク",
  },
  {
    src: "/images/theme/img_taiken_img_002_3.jpg",
    alt: "ジャンプ練習",
    caption: "ジャンプ練習",
  },
];

/** Campus & environment — fields, facilities, sunrise/sunset (16:9 / 3:2) */
export const CAMPUS_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_kankyo_img_002_2.jpg",
    alt: "広い放牧地と青空",
    caption: "放牧地",
  },
  {
    src: "/images/theme/img_kankyo_img_002_4.jpg",
    alt: "馬房と施設",
    caption: "教育施設",
  },
  {
    src: "/images/theme/img_kankyo_img_002_6.jpg",
    alt: "アリーナでの調教",
    caption: "アリーナ",
  },
  {
    src: "/images/theme/img_kankyo_img_004_1.jpg",
    alt: "学生寮の外観",
    caption: "学生寮",
  },
  {
    src: "/images/theme/img_kankyo_img_004_3.jpg",
    alt: "キャンパスの夕景",
    caption: "キャンパス",
  },
];

/** Student lifestyle — friendships, meals, dorm life (1:1) */
export const LIFESTYLE_PHOTOS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_kankyo_img_003_1.jpg",
    alt: "寮生活のひととき",
    caption: "寮生活",
  },
  {
    src: "/images/theme/img_kankyo_img_003_2.jpg",
    alt: "仲間と笑い合う学生",
    caption: "仲間との時間",
  },
  {
    src: "/images/theme/img_taiken_img_002_4.jpg",
    alt: "馬の世話をともにする学生",
    caption: "馬とともに",
  },
  {
    src: "/images/theme/img_taiken_img_002_5.jpg",
    alt: "オープンキャンパスでの交流",
    caption: "キャンパス交流",
  },
];

/** Horse portraits — front-facing, warm light, clean background (3:2 / 4:3) */
export const HORSE_PORTRAITS: CuratedPhoto[] = [
  {
    src: "/images/theme/img_tokucho_img_002_2.jpg",
    alt: "カメラを見つめる馬のポートレート",
    caption: "担当馬との出会い",
  },
  {
    src: "/images/theme/img_tokucho_img_002_3.jpg",
    alt: "たてがみの美しい馬",
    caption: "約120頭の仲間",
  },
  {
    src: "/images/theme/img_tokucho_img_002_5.jpg",
    alt: "穏やかな表情の馬",
    caption: "毎日のパートナー",
  },
  {
    src: "/images/theme/img_top_toku_img_001.jpg",
    alt: "馬のクローズアップ",
    caption: "馬との絆",
  },
];

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
  src: "/images/theme/img_cmn_img_group_b2.jpg",
  alt: "夕暮れのキャンパスと馬",
} as const;
