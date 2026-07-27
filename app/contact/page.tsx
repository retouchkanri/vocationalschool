import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";

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

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="INQUIRY"
            title="東関東馬事専門学院へのお問合せ"
            lead="資料請求では学校案内とオープンキャンパスのご案内をお届けします。ただいまクリアーファイルを無料プレゼント中です。"
          />
          <ContactForm />
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
