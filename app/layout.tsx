import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import MobileFooterBar from "@/components/MobileFooterBar";
import ScrollToTop from "@/components/ScrollToTop";
import { SCHOOL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.name}｜JRA厩務員・馬の仕事を目指す馬の専門学校`,
    template: `%s｜${SCHOOL.name}`,
  },
  description:
    "馬の学校 東関東馬事専門学院（馬事学院／バジガク）。約118頭の馬と国内最大級4つの教育施設で、未経験からJRA厩務員・牧場・乗馬クラブへの就職を目指せる馬の専門学校です。",
  icons: { icon: "/images/theme/favicon.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700;900&family=Roboto:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pb-14 md:pb-0">{children}</main>
        <Footer />
        <MobileFooterBar />
        <LiveChatWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
