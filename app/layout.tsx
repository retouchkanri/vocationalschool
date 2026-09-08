import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { SCHOOL } from "@/lib/site";

/** Keep in sync with THEMES in components/ThemeSwitcher.tsx */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('site-theme-color');var m={green:['#00913a','#007830','#024d1f'],navy:['#1b4f7a','#163f61','#0f2b44'],burgundy:['#8a1f34','#6f1929','#4a0f1b'],brown:['#8a5a2b','#6e4620','#4a2f16'],teal:['#0f766e','#0c5d56','#083f3a']};var v=m[t];if(v){var s=document.documentElement.style;s.setProperty('--color-primary',v[0]);s.setProperty('--color-primary-dark',v[1]);s.setProperty('--color-primary-deep',v[2]);}}catch(e){}})();`;

const DEFAULT_TITLE = `${SCHOOL.name}｜JRA厩務員・馬の仕事を目指す馬の専門学校`;
const DEFAULT_DESCRIPTION =
  "馬の学校 東関東馬事専門学院（馬事学院／バジガク）。約118頭の馬と国内最大級4つの教育施設で、未経験からJRA厩務員・牧場・乗馬クラブへの就職を目指せる馬の専門学校です。";

export const metadata: Metadata = {
  metadataBase: new URL(SCHOOL.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s｜${SCHOOL.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "JRA厩務員",
    "JRA厩務員 学校",
    "厩務員 学校",
    "厩務員 専門学校",
    "厩務員になるには",
    "競馬 専門学校",
    "競走馬 専門学校",
    "バジガク",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SCHOOL.name,
    url: SCHOOL.url,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/images/theme/img_top_toku_img_001.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/theme/img_top_toku_img_001.jpg"],
  },
  icons: {
    icon: "/images/theme/favicon.png",
    shortcut: "/images/theme/favicon.png",
    apple: "/images/theme/favicon.png",
  },
};

/** JSON-LD structured data (schema.org EducationalOrganization) for rich results. */
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SCHOOL.name,
  alternateName: [SCHOOL.nameShort, SCHOOL.nameEn],
  url: SCHOOL.url,
  logo: `${SCHOOL.url}${SCHOOL.logo}`,
  image: `${SCHOOL.url}${SCHOOL.logo}`,
  telephone: SCHOOL.tel,
  address: {
    "@type": "PostalAddress",
    postalCode: SCHOOL.zip.replace("〒", ""),
    addressRegion: "千葉県",
    streetAddress: SCHOOL.address,
    addressCountry: "JP",
  },
  sameAs: Object.values(SCHOOL.sns),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
