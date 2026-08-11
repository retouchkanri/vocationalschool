import Link from "next/link";
import { createFaq, deleteFaq, updateFaq } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";
import { FAQ_CATEGORIES, type FaqRow } from "@/lib/content-types";
import { StatusBadge } from "@/components/admin/Badge";

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.7 12.1a2 2 0 0 1-2 1.9H8.7a2 2 0 0 1-2-1.9L6 7h12Z" />
    </svg>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 font-normal text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";

export default async function AdminFaqsPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const { edit } = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .order("sort_order", { ascending: true });

  const rows = (data ?? []) as FaqRow[];
  const editing = edit ? rows.find((r) => r.id === edit) : undefined;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
            FAQ
          </p>
          <h1 className="mt-1 font-mincho text-2xl font-bold text-ink">FAQ 管理</h1>
          <p className="mt-1 text-sm text-ink/60">質問と回答を編集できます。</p>
        </div>
        <Link
          href="/admin"
          className="flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-accent"
        >
          <BackIcon />
          ダッシュボード
        </Link>
      </div>

      {error ? (
        <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-dark">
          読み込みエラー: {error.message}
          （テーブル未作成の場合は supabase/schema.sql を実行してください）
        </p>
      ) : null}

      <section className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card">
        <div className="border-b border-ink/8 bg-cream/60 px-6 py-4 md:px-8">
          <h2 className="font-mincho text-lg font-bold text-ink">
            {editing ? "FAQ を編集" : "FAQ を追加"}
          </h2>
        </div>
        <form
          action={editing ? updateFaq : createFaq}
          className="grid gap-5 px-6 py-6 md:px-8"
        >
          {editing ? <input type="hidden" name="id" value={editing.id} /> : null}
          <label className="block text-sm">
            <span className="font-bold text-ink">カテゴリ</span>
            <select
              name="category"
              defaultValue={editing?.category ?? FAQ_CATEGORIES[0]}
              className={inputClass}
            >
              {FAQ_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="font-bold text-ink">質問</span>
            <input
              name="question"
              required
              defaultValue={editing?.question ?? ""}
              className={inputClass}
            />
          </label>
          <label className="block text-sm">
            <span className="font-bold text-ink">回答</span>
            <textarea
              name="answer"
              required
              rows={5}
              defaultValue={editing?.answer ?? ""}
              className={`${inputClass} resize-y`}
            />
          </label>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl bg-cream/50 px-4 py-4 text-sm">
            <label className="inline-flex items-center gap-2 font-bold text-ink">
              <input
                type="checkbox"
                name="published"
                defaultChecked={editing?.published ?? true}
                className="h-4 w-4 rounded border-ink/30 text-primary focus:ring-primary/30"
              />
              公開する
            </label>
            <label className="inline-flex items-center gap-2 font-bold text-ink">
              表示順
              <input
                type="number"
                name="sort_order"
                defaultValue={editing?.sort_order ?? rows.length}
                className="w-20 rounded-lg border border-ink/20 px-2.5 py-1.5 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              {editing ? "更新する" : "追加する"}
            </button>
            {editing ? (
              <Link
                href="/admin/faqs"
                className="rounded-full border border-ink/20 px-6 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:border-ink/40"
              >
                キャンセル
              </Link>
            ) : null}
          </div>
        </form>
      </section>

      <section className="space-y-3">
        {rows.length === 0 ? (
          <p className="rounded-2xl border border-ink/8 bg-white px-4 py-14 text-center text-ink/40 shadow-card">
            まだ FAQ がありません
          </p>
        ) : (
          rows.map((row) => (
            <article
              key={row.id}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary">
                      {row.category}
                    </span>
                    <StatusBadge published={row.published} />
                    <span className="text-[11px] text-ink/35">順 {row.sort_order}</span>
                  </div>
                  <h3 className="mt-2.5 font-mincho font-bold text-ink">
                    Q. {row.question}
                  </h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/70">
                    {row.answer}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Link
                    href={`/admin/faqs?edit=${row.id}`}
                    className="flex items-center gap-1 rounded-full border border-primary/25 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
                  >
                    <EditIcon />
                    編集
                  </Link>
                  <form action={deleteFaq}>
                    <input type="hidden" name="id" value={row.id} />
                    <button
                      type="submit"
                      className="flex items-center gap-1 rounded-full border border-alert/25 px-3 py-1.5 text-xs font-bold text-alert transition-colors hover:bg-alert/10"
                    >
                      <TrashIcon />
                      削除
                    </button>
                  </form>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
