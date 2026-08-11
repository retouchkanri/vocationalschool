/**
 * One-time Supabase bootstrap:
 * - Ensures admin auth user exists
 * - Seeds announcements + faqs when tables are empty
 *
 * Prerequisite: run supabase/schema.sql in the Supabase SQL Editor.
 * Usage: npm run setup:supabase
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve } from "path";

function loadEnvLocal() {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      let val = m[2];
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (!process.env[m[1]]) process.env[m[1]] = val;
    }
  } catch {
    // ignore
  }
}

loadEnvLocal();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}
if (!adminEmail || !adminPassword) {
  console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const announcements = [
  {
    title:
      "【関西】大阪府河内長野市にある「馬の学校　東関東馬事専門学院」の研修施設＂ホースレスト＂研修・合宿などで活用（大阪府河内長野市にある馬事学院の施設です）",
    category: "facility",
    href: "https://bajigaku.site/2024/0325/167964/",
    external: true,
    published_at: "2024-03-25",
    published: true,
    sort_order: 0,
  },
  {
    title:
      "【施設】千葉県八街市に緑あふれる広大な施設。バジガクでのJRA競馬学校の厩務員受験希望者に対する受験対策。競走馬の育成、馬の養老牧場を兼ねた総合施設など",
    category: "facility",
    href: "https://bajigaku.site/2024/0325/167961/",
    external: true,
    published_at: "2024-03-25",
    published: true,
    sort_order: 1,
  },
  {
    title:
      "【更新】厩務員になるには？未経験の入学から最短１年6ヶ月でJRA競馬学校の厩務員合格実績【未経験からのJRA厩務員合格】令和7年4月生 30名のみ新規募集へ",
    category: "admission",
    href: "https://bajigaku.site/2024/0310/842/",
    external: true,
    published_at: "2024-03-10",
    published: true,
    sort_order: 2,
  },
  {
    title:
      "◆無料YouTube配信◆日本中が泣いた！？「ＮＨＫ番組／目撃にっぽん」バジガクモミジと踏み出す小さな1歩（NHK番組）",
    category: "achievement",
    href: "https://bajigaku.site/2024/0310/862/",
    external: true,
    published_at: "2024-03-10",
    published: true,
    sort_order: 3,
  },
  {
    title:
      "【メディア】JRA厩務員を目指せる馬の学校。各種新聞記事公開。NHK番組「目撃にっぽん」NHK番組「ジューダイ」でも取り上げられました。各種メディア掲載",
    category: "achievement",
    href: "https://bajigaku.site/2024/0310/881/",
    external: true,
    published_at: "2024-03-10",
    published: true,
    sort_order: 4,
  },
  {
    title:
      "高校3年次に2回のJRA競馬学校受験。高校生現役JRA厩務員課程合格へ／厩務員を目指せる高校　東関東馬事高等学院",
    category: "admission",
    href: "https://bajigaku.site/2023/0326/167999/",
    external: true,
    published_at: "2023-03-26",
    published: true,
    sort_order: 5,
  },
  {
    title: "【ブログ移転のお知らせ】これからはアメブロで学校の様子をお届けします！",
    category: "announce",
    href: "https://bajigaku.site/2025/0103/178788/",
    external: true,
    published_at: "2025-01-03",
    published: true,
    sort_order: 6,
  },
  {
    title: "馬の学校の大晦日の過ごし方！／バジガク・専門学校",
    category: "announce",
    href: "https://bajigaku.site/2024/1231/178662/",
    external: true,
    published_at: "2024-12-31",
    published: true,
    sort_order: 7,
  },
  {
    title: "今年はどんな年になりましたか？PART3／東関東馬事専門学院",
    category: "announce",
    href: "https://bajigaku.site/2024/1230/178635/",
    external: true,
    published_at: "2024-12-30",
    published: true,
    sort_order: 8,
  },
  {
    title: "今年の1年はどんな年になりましたか？PART2／東関東馬事専門学院",
    category: "announce",
    href: "https://bajigaku.site/2024/1229/178606/",
    external: true,
    published_at: "2024-12-29",
    published: true,
    sort_order: 9,
  },
  {
    title: "今年の1年はどんな年になりましたか？／東関東馬事専門学院",
    category: "announce",
    href: "https://bajigaku.site/2024/1228/178583/",
    external: true,
    published_at: "2024-12-28",
    published: true,
    sort_order: 10,
  },
  {
    title: "引退馬の森、寒さに負けず騎乗！／馬の専門学校",
    category: "announce",
    href: "https://bajigaku.site/2024/1227/178513/",
    external: true,
    published_at: "2024-12-27",
    published: true,
    sort_order: 11,
  },
];

const faqs = [
  ["入学・出願", "馬に触れたことがない未経験者でも入学できますか？", "はい、入学できます。入学者の約7割はまったくの初心者です。未経験の方が基礎から段階的に学べるカリキュラムを整えていますので、経験の有無を心配せずに一歩を踏み出してください。"],
  ["入学・出願", "入学者の男女比はどのくらいですか？女子でも大丈夫でしょうか？", "年度により変動しますが、おおむね男子5割・女子5割です。女性が馬の仕事・就職へ結び付けられるカリキュラムを用意しており、女子学生も安心して学べる環境です。"],
  ["就職・JRA", "もし就職が決まらなかった場合はどうなりますか？", "基本的にほぼ全員が在学中に就職内定を得ています。万が一在学中に決まらなかった場合でも、追加の授業費をいただくことなく、就職が決定するまで学校がサポートを続けますのでご安心ください。"],
  ["学費", "学費の分割払いはできますか？", "はい、可能です。国の教育ローン（日本政策金融公庫）を活用できるほか、保証会社を利用した独自審査により、授業費を最小12回から最大48回まで分割納入できる本校独自の制度もあります（諸経費は対象外）。詳しくは募集要項をご確認ください。"],
  ["授業・生活", "寮の食事は土日や祝日も提供されますか？", "研修期間中などを除き、土日祝日を含む365日・1日3食の提供を前提としています。平日のみ提供という学校が多いなか、休日もしっかり食事がとれるのは本校の特長です。"],
  ["授業・生活", "在学中に自動車免許は取得できますか？", "馬業界への就職には自動車免許がほぼ必須です。ご希望の方には八街市内の八街自動車教習所をご紹介しています。教習所から学生寮までの送迎もあり、学びと両立しながら取得を目指せます。"],
  ["見学", "他校と比べたときの本校の特長は何ですか？", "体験入学に参加された方から「雰囲気が良い」「先生と生徒の距離が近い」「在校生が明るい」という感想を多くいただいています。学校の様子は毎日ブログで発信しており、保護者の方にも安心いただけます。アンケートでは、他校との比較のために見学に来られた方のほぼ全員が本校に出願しています（選考があるため、全員が入学となるわけではありません）。"],
  ["入学・出願", "応募できる年齢や条件を教えてください。", "入学時点で高校卒業以上26歳までの方が対象です。あわせて、入学時点で体重68kg以下であること、馬の管理・騎乗に支障のない健康状態であることが条件となります。中学卒業後すぐの入学を希望される方には、系列の東関東馬事高等学院をご案内しています。"],
  ["入学・出願", "出願はどのように行いますか？", "インターネットの入学出願フォームからお申込みいただきます。選考は先着順で、定員になり次第受付を終了します。合格内定後に、入校申込書・健康診断書・住民票（発行3ヶ月以内で家族構成のわかるもの）の3点をご提出いただきます。"],
  ["学費", "学費はいくらかかりますか？免除制度はありますか？", "令和9年4月生の場合、2年間で入学申込金48万円と授業費が必要です。通常授業費330万円のうち30%相当をあらかじめ免除し、納付いただく授業費は231万円です。さらに在学中の研修に応じた還付（見込額70万円）があり、実質の授業費は150万円となる見込みです。年度により内容が異なるため、最新の募集要項をご確認ください。"],
  ["学費", "在学中にお金が戻る制度があると聞きました。本当ですか？", "はい。提携する牧場・乗馬クラブでの研修に対して「学校運営協力金」を研修回数などに応じて学生に還付する、報酬型のインターン制度があります。在学中の取り組みにより最大70万円が戻る見込みで、働きながら学べる仕組みです。"],
  ["授業・生活", "インターン研修はどこで行うのですか？", "全国の乗馬クラブや競走馬育成牧場などと連携し、在学中に最大6ヶ所の現場で研修を受けられます。大阪府河内長野市には関西研修施設「ホースレスト」があり、研修や合宿で活用しています。"],
  ["就職・JRA", "在学中にJRA厩務員試験を受験できますか？", "技術レベルや経験により本校が認めた場合、在学中に最大2回、JRA競馬学校厩務員課程を受験できます。在学中・卒業生から多数の合格者を輩出しており、在学中に合格した場合は奨励金10万円を諸経費の還付として支給します。"],
  ["就職・JRA", "卒業後はどんな進路・就職先がありますか？", "JRA厩務員をはじめ、競走馬の生産・育成牧場、乗馬クラブ、観光牧場、養老牧場など幅広い進路があります。生産牧場・育成牧場からの求人依頼も多数寄せされています。"],
  ["見学", "学校見学・オープンキャンパスでは何ができますか？", "授業内容や馬業界の動向のご説明に加え、乗馬体験、馬のお手入れ体験、在校生と直接話せる時間があります。参加された方には在校生から記念品のプレゼントもあります。他校を検討中の方のご参加も歓迎です。"],
  ["見学", "遠方からでも見学に参加できますか？出願前の見学は必要ですか？", "JR東京駅（八重洲中央口）から無料送迎を行っており、お帰りは最寄りのJR八街駅までお送りします。出願は原則としてオープンキャンパス参加後にお願いしていますので、参加が難しい場合は事務局までご相談ください。"],
].map(([category, question, answer], i) => ({
  category,
  question,
  answer,
  sort_order: i,
  published: true,
}));

async function ensureAdmin() {
  const { data: list, error: listError } = await supabase.auth.admin.listUsers({
    perPage: 200,
  });
  if (listError) throw listError;
  const existing = list.users.find(
    (u) => u.email?.toLowerCase() === adminEmail.toLowerCase(),
  );
  if (existing) {
    console.log("Admin user already exists:", existing.id);
    return;
  }
  const { data, error } = await supabase.auth.admin.createUser({
    email: adminEmail,
    password: adminPassword,
    email_confirm: true,
  });
  if (error) throw error;
  console.log("Created admin user:", data.user?.id);
}

async function seedIfEmpty() {
  const { count: annCount, error: annErr } = await supabase
    .from("announcements")
    .select("*", { count: "exact", head: true });
  if (annErr) {
    console.error("\n❌ announcements table missing:");
    console.error("   ", annErr.message);
    console.error(
      "\n→ Open https://supabase.com/dashboard/project/ajiowryfakueykqrdchc/sql/new",
    );
    console.error("→ Paste and run the contents of supabase/schema.sql");
    console.error("→ Then run: npm run setup:supabase\n");
    return false;
  }
  if ((annCount ?? 0) === 0) {
    const { error } = await supabase.from("announcements").insert(announcements);
    if (error) throw error;
    console.log(`Seeded ${announcements.length} announcements`);
  } else {
    console.log(`announcements already has ${annCount} rows`);
  }

  const { count: faqCount, error: faqErr } = await supabase
    .from("faqs")
    .select("*", { count: "exact", head: true });
  if (faqErr) {
    console.error("faqs table error:", faqErr.message);
    return false;
  }
  if ((faqCount ?? 0) === 0) {
    const { error } = await supabase.from("faqs").insert(faqs);
    if (error) throw error;
    console.log(`Seeded ${faqs.length} faqs`);
  } else {
    console.log(`faqs already has ${faqCount} rows`);
  }
  return true;
}

async function main() {
  console.log("Supabase URL:", url);
  await ensureAdmin();
  const ok = await seedIfEmpty();
  console.log(ok ? "Done." : "Schema step required.");
  process.exit(ok ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
