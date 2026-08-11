import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { SCHOOL } from "@/lib/site";

/** Keep in sync with THEMES in components/ThemeSwitcher.tsx */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('site-theme-color');var m={green:['#00913a','#007830','#024d1f'],navy:['#1b4f7a','#163f61','#0f2b44'],burgundy:['#8a1f34','#6f1929','#4a0f1b'],brown:['#8a5a2b','#6e4620','#4a2f16'],teal:['#0f766e','#0c5d56','#083f3a']};var v=m[t];if(v){var s=document.documentElement.style;s.setProperty('--color-primary',v[0]);s.setProperty('--color-primary-dark',v[1]);s.setProperty('--color-primary-deep',v[2]);}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.name}｜JRA厩務員・馬の仕事を目指す馬の専門学校`,
    template: `%s｜${SCHOOL.name}`,
  },
  description:
    "馬の学校 東関東馬事専門学院（馬事学院／バジガク）。約118頭の馬と国内最大級4つの教育施設で、未経験からJRA厩務員・牧場・乗馬クラブへの就職を目指せる馬の専門学校です。",
  icons: {
    icon: "/images/theme/favicon.png",
    shortcut: "/images/theme/favicon.png",
    apple: "/images/theme/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
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
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
