import type { Metadata } from "next";
import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";
import AdminNav from "@/components/admin/AdminNav";
import { SCHOOL } from "@/lib/site";

export const metadata: Metadata = {
  title: "管理画面 | 東関東馬事専門学院",
  robots: { index: false, follow: false },
};

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div className="min-h-screen bg-[#f4f5f2]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#f4f5f2]">
      <header className="sticky top-0 z-40 bg-gradient-to-r from-primary-deep via-primary-dark to-primary shadow-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 md:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 font-mincho text-base font-bold text-white">
              馬
            </span>
            <div className="leading-tight">
              <p className="font-mincho text-[15px] font-bold text-white">管理画面</p>
              <p className="hidden text-[11px] tracking-wide text-white/60 sm:block">
                {SCHOOL.nameShort} CMS
              </p>
            </div>
          </div>

          <AdminNav />

          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-2 text-[13px] font-bold text-white/85 transition-colors duration-200 hover:border-alert/60 hover:bg-alert/20 hover:text-white"
            >
              <LogoutIcon />
              ログアウト
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">{children}</main>
      <footer className="border-t border-ink/8 py-6 text-center text-xs text-ink/40">
        <Link href="/" className="hover:text-ink/60">
          {SCHOOL.name}
        </Link>{" "}
        管理画面
      </footer>
    </div>
  );
}
