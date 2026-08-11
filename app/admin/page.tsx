import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

function NewsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h13a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-3 2-3-2V5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h7M8 12.5h7M8 16h4" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.1 9a3 3 0 1 1 4.4 2.6c-.9.5-1.5 1-1.5 2.1" />
      <path strokeLinecap="round" d="M12 17.5h.01" />
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default async function AdminHomePage() {
  const supabase = await createClient();
  const [{ count: annCount }, { count: faqCount }, { count: publishedAnnCount }] =
    await Promise.all([
      supabase.from("announcements").select("*", { count: "exact", head: true }),
      supabase.from("faqs").select("*", { count: "exact", head: true }),
      supabase
        .from("announcements")
        .select("*", { count: "exact", head: true })
        .eq("published", true),
    ]);

  const cards = [
    {
      href: "/admin/announcements",
      icon: <NewsIcon />,
      eyebrow: "NEWS",
      title: "お知らせ",
      count: annCount ?? 0,
      sub: `うち公開中 ${publishedAnnCount ?? 0}件`,
      accent: "from-primary to-primary-dark",
    },
    {
      href: "/admin/faqs",
      icon: <FaqIcon />,
      eyebrow: "FAQ",
      title: "よくある質問",
      count: faqCount ?? 0,
      sub: "件を管理",
      accent: "from-accent to-accent-dark",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
          DASHBOARD
        </p>
        <h1 className="mt-2 font-mincho text-3xl font-bold text-ink">ダッシュボード</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
          お知らせと FAQ をデータベースから編集できます。保存すると公開サイトへ即座に反映されます。
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span
              aria-hidden
              className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${card.accent}`}
            />
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {card.icon}
              </span>
              <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-ink/35">
                {card.eyebrow}
              </span>
            </div>
            <h2 className="mt-5 font-mincho text-xl font-bold text-ink">{card.title}</h2>
            <p className="mt-4 font-display text-4xl font-bold tabular-nums text-ink">
              {card.count}
              <span className="ml-1 text-base font-semibold text-ink/40">件</span>
            </p>
            <p className="mt-1 text-sm text-ink/50">{card.sub}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              管理する
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-ink/8 bg-white p-7 shadow-card">
        <h2 className="font-mincho text-lg font-bold text-ink">クイックリンク</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/admin/announcements?new=1"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            + お知らせを追加
          </Link>
          <Link
            href="/admin/faqs?new=1"
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:border-primary/40 hover:text-primary"
          >
            + FAQ を追加
          </Link>
          <Link
            href="/"
            target="_blank"
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:border-primary/40 hover:text-primary"
          >
            公開サイトを見る ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
