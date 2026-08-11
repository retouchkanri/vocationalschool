import Image from "next/image";
import { loginAction } from "@/app/admin/actions";
import { SCHOOL } from "@/lib/site";

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a1.5 1.5 0 0 0 1.3 2.2h17.8a1.5 1.5 0 0 0 1.3-2.2L13.7 3.9a1.5 1.5 0 0 0-2.6 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px] text-ink/40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5 12 13l9-6.5M4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 5h-15A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px] text-ink/40">
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" />
    </svg>
  );
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary-dark to-primary" />
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="relative block h-12 w-56 brightness-0 invert">
            <Image
              src={SCHOOL.logo}
              alt={SCHOOL.name}
              fill
              sizes="224px"
              className="object-contain"
              priority
            />
          </span>
          <p className="mt-4 font-display text-[11px] font-semibold tracking-[0.35em] text-white/70">
            ADMIN CONSOLE
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl md:p-10">
          <h1 className="font-mincho text-2xl font-bold text-ink">管理者ログイン</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            お知らせ・FAQ の編集にはログインが必要です。
          </p>

          {error ? (
            <p className="mt-5 flex items-start gap-2 rounded-xl bg-alert/10 px-4 py-3 text-sm font-semibold text-alert">
              <AlertIcon />
              {error}
            </p>
          ) : null}

          <form action={loginAction} className="mt-7 space-y-5">
            <label className="block text-sm">
              <span className="font-bold text-ink">メールアドレス</span>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <MailIcon />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="username"
                  className="w-full bg-transparent font-normal text-ink outline-none"
                />
              </div>
            </label>
            <label className="block text-sm">
              <span className="font-bold text-ink">パスワード</span>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink/15 bg-paper px-3.5 py-2.5 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <LockIcon />
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="w-full bg-transparent font-normal text-ink outline-none"
                />
              </div>
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
            >
              ログイン
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          {SCHOOL.name} 内部管理システム
        </p>
      </div>
    </div>
  );
}
