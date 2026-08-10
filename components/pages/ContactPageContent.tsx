"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import InquiryHighlights from "@/components/pages/InquiryHighlights";

export default function ContactPageContent() {
  const [subject, setSubject] = useState("");

  const handleSelectSubject = (value: string) => {
    setSubject(value);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="INQUIRY"
            title="東関東馬事専門学院へのお問合せ"
            lead="資料請求では学校案内とオープンキャンパスのご案内をお届けします。ただいまクリアーファイルを無料プレゼント中です。"
          />
          <InquiryHighlights onSelectSubject={handleSelectSubject} />
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FORM"
            title="お問合せフォーム"
            lead="下記フォームに必要事項をご記入のうえ送信してください。2〜3営業日以内に事務局よりご連絡いたします。"
          />
          <ContactForm initialSubject={subject} />
        </div>
      </section>
    </>
  );
}
