import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { SCHOOL } from "@/lib/site";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.name}｜JRA厩務員・馬の仕事を目指す馬の専門学校`,
    template: `%s｜${SCHOOL.name}`,
  },
  description:
    "馬の学校 東関東馬事専門学院（馬事学院／バジガク）。約120頭の馬と国内最大級4つの教育施設で、未経験からJRA厩務員・牧場・乗馬クラブへの就職を目指せる馬の専門学校です。",
  icons: { icon: "/images/theme/favicon.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LiveChatWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
