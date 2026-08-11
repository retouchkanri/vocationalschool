"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h6V4H4v9Zm10 7h6v-9h-6v9ZM4 20h6v-4H4v4Zm10-11h6V4h-6v5Z" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h13a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-3 2-3-2V5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h7M8 12.5h7M8 16h4" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.1 9a3 3 0 1 1 4.4 2.6c-.9.5-1.5 1-1.5 2.1" />
      <path strokeLinecap="round" d="M12 17.5h.01" />
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5l-8 8M8 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" />
    </svg>
  );
}

const LINKS: NavLink[] = [
  { href: "/admin", label: "ダッシュボード", icon: <DashboardIcon /> },
  { href: "/admin/announcements", label: "お知らせ", icon: <NewsIcon /> },
  { href: "/admin/faqs", label: "FAQ", icon: <FaqIcon /> },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-1.5">
      {LINKS.map((link) => {
        const active =
          link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-bold tracking-wide transition-colors duration-200 md:px-4 ${
              active
                ? "bg-white text-primary-deep shadow-sm"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/"
        target="_blank"
        className="ml-1 flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-2 text-[13px] font-bold tracking-wide text-white/75 transition-colors duration-200 hover:border-white/50 hover:text-white md:px-4"
      >
        サイトを見る
        <ExternalIcon />
      </Link>
    </nav>
  );
}
