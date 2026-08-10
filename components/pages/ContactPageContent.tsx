"use client";

import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPageContent() {
  return (
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
  );
}
