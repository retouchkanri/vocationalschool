import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "お問合せ・資料請求",
  description:
    "東関東馬事専門学院（バジガク）へのお問合せ・資料請求。入学・学費・オープンキャンパスなど、お電話またはフォームからご相談ください。クリアーファイル無料プレゼント中。",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="CONTACT"
        title="お問合せ・資料請求"
        lead="入学や学費、オープンキャンパスなど、気になることがあればお気軽にご相談ください。お電話または下記フォームから受け付けています。"
        image="/images/theme/img_cmn_img_group_a3.jpg"
        breadcrumb="お問合せ"
      />

      <ContactPageContent />

      <CtaSection />
    </div>
  );
}
