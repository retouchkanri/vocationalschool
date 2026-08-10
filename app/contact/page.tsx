import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import ContactPageContent from "@/components/pages/ContactPageContent";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

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

      <section className="border-t border-ink/5 bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <p className="text-center font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
              BEFORE YOU ASK
            </p>
            <h2 className="mt-3 text-center font-mincho text-xl text-ink md:text-2xl">
              よくあるご質問もご確認ください
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ink/70">
              入学条件、学費、JRA厩務員、見学方法など、多くのご質問への回答をまとめています。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/faq"
                className="rounded-full border border-primary/30 bg-white px-6 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                よくある質問を見る
              </Link>
              <Link
                href="/admission"
                className="rounded-full border border-ink/15 bg-white px-6 py-2.5 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                募集要項
              </Link>
              <Link
                href="/opencampus"
                className="rounded-full border border-ink/15 bg-white px-6 py-2.5 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                学校見学・OC
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
