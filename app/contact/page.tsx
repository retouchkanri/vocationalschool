import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "お問合せ・資料請求・体験入学",
  description:
    "東関東馬事専門学院（バジガク）への資料請求・体験入学・お問合せ。入学・学費・オープンキャンパスなど、お電話または3つの専用フォームからご相談ください。クリアーファイル無料プレゼント中。",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="CONTACT"
        title="お問合せ・資料請求・体験入学"
        lead="入学や学費、オープンキャンパスなど、気になることがあればお気軽にご相談ください。お電話または下記フォームから受け付けています。"
        image="/images/theme/img_cmn_img_group_a3.jpg"
        breadcrumb="お問合せ"
      />

      <Suspense fallback={null}>
        <ContactPageContent />
      </Suspense>

      <CtaSection />
    </div>
  );
}
