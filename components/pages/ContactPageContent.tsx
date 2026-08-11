"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import ContactForm, { type ContactFormType } from "@/components/ContactForm";
import InquiryHighlights from "@/components/pages/InquiryHighlights";

const TABS: { type: ContactFormType; label: string; icon: string }[] = [
  { type: "document", label: "資料請求フォーム", icon: "📋" },
  { type: "opencampus", label: "体験入学フォーム", icon: "🏇" },
  { type: "general", label: "お問い合わせフォーム", icon: "💬" },
];

function isFormType(value: string | null): value is ContactFormType {
  return value === "document" || value === "opencampus" || value === "general";
}

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<ContactFormType>("general");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (isFormType(typeParam)) {
      setFormType(typeParam);
    }
  }, [searchParams]);

  const handleSelect = (type: ContactFormType, subj?: string) => {
    setFormType(type);
    setSubject(subj ?? "");
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          eyebrow="INQUIRY"
          title="東関東馬事専門学院へのお問合せ"
          lead="ご用件に合わせて、資料請求・体験入学・お問い合わせの3つのフォームからお選びいただけます。"
        />

        <InquiryHighlights onSelect={handleSelect} />

        <div id="contact-form" className="mx-auto mt-16 max-w-5xl scroll-mt-24">
          <div className="flex flex-wrap justify-center gap-3">
            {TABS.map((tab) => {
              const active = formType === tab.type;
              return (
                <button
                  key={tab.type}
                  type="button"
                  onClick={() => {
                    setFormType(tab.type);
                    setSubject("");
                  }}
                  aria-pressed={active}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "border-primary bg-primary text-white shadow-md"
                      : "border-ink/15 bg-white text-ink/70 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span aria-hidden>{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          <ContactForm formType={formType} initialSubject={subject} />
        </div>
      </div>
    </section>
  );
}
