"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import MobileFooterBar from "@/components/MobileFooterBar";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pb-14 md:pb-0">{children}</main>
      <Footer />
      <MobileFooterBar />
      <LiveChatWidget />
      <ScrollToTop />
      <ThemeSwitcher />
    </>
  );
}
