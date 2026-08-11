import Link from "next/link";
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";
import {
  NEWS_CATEGORIES,
  type AnnouncementRow,
} from "@/lib/content-types";
import { CategoryBadge, StatusBadge } from "@/components/admin/Badge";

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

export default async function AdminAnnouncementsPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  const { edit } = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .order("published_at", { ascending: false });

  const rows = (data ?? []) as AnnouncementRow[];
  const editing = edit ? rows.find((r) => r.id === edit) : undefined;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
            NEWS
          </p>
          <h1 className="mt-1 font-mincho text-2xl font-bold text-ink">お知らせ管理</h1>
          <p className="mt-1 text-sm text-ink/60">追加・編集・削除ができます。</p>
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
            {editing ? "お知らせを編集" : "お知らせを追加"}
          </h2>
        </div>
        <form
          action={editing ? updateAnnouncement : createAnnouncement}
          className="grid gap-5 px-6 py-6 md:px-8"
        >
          {editing ? <input type="hidden" name="id" value={editing.id} /> : null}
          <label className="block text-sm">
            <span className="font-bold text-ink">タイトル</span>
            <input
              name="title"
              required
              defaultValue={editing?.title ?? ""}
              className={inputClass}
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-bold text-ink">カテゴリ</span>
              <select
                name="category"
                defaultValue={editing?.category ?? "announce"}
                className={inputClass}
              >
                {NEWS_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-bold text-ink">公開日</span>
              <input
                type="date"
                name="published_at"
                required
                defaultValue={
                  editing?.published_at?.slice(0, 10) ??
                  new Date().toISOString().slice(0, 10)
                }
                className={inputClass}
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="font-bold text-ink">リンク URL</span>
            <input
              name="href"
              defaultValue={editing?.href ?? "#"}
              className={inputClass}
            />
          </label>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl bg-cream/50 px-4 py-4 text-sm">
            <label className="inline-flex items-center gap-2 font-bold text-ink">
              <input
                type="checkbox"
                name="external"
                defaultChecked={editing?.external ?? true}
                className="h-4 w-4 rounded border-ink/30 text-primary focus:ring-primary/30"
              />
              外部リンク
            </label>
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
                defaultValue={editing?.sort_order ?? 0}
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
                href="/admin/announcements"
                className="rounded-full border border-ink/20 px-6 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:border-ink/40"
              >
                キャンセル
              </Link>
            ) : null}
          </div>
        </form>
      </section>

      <section className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink/8 bg-cream/60 text-xs font-bold uppercase tracking-wider text-ink/50">
                <th className="px-5 py-3.5">日付</th>
                <th className="px-5 py-3.5">カテゴリ</th>
                <th className="px-5 py-3.5">タイトル</th>
                <th className="px-5 py-3.5">状態</th>
                <th className="px-5 py-3.5 text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-14 text-center text-ink/40">
                    まだお知らせがありません
                  </td>
                </tr>
              ) : (
                rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`border-t border-ink/6 transition-colors hover:bg-cream/40 ${
                      i % 2 === 1 ? "bg-paper/60" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 text-ink/70">
                      {row.published_at?.slice(0, 10)}
                    </td>
                    <td className="px-5 py-3.5">
                      <CategoryBadge
                        value={row.category}
                        label={
                          NEWS_CATEGORIES.find((c) => c.value === row.category)?.label ??
                          row.category
                        }
                      />
                    </td>
                    <td className="max-w-xs truncate px-5 py-3.5 font-bold text-ink">
                      {row.title}
                    </td>
                    <td className="px-5 py-3.5">
                      <StatusBadge published={row.published} />
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex flex-wrap justify-end gap-2">
                        <Link
                          href={`/admin/announcements?edit=${row.id}`}
                          className="flex items-center gap-1 rounded-full border border-primary/25 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
                        >
                          <EditIcon />
                          編集
                        </Link>
                        <form action={deleteAnnouncement}>
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
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
