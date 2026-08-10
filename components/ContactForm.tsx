"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/site";

type FormState = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL: FormState = {
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  email: "",
  subject: "",
  message: "",
};

type ContactFormProps = {
  initialSubject?: string;
};

export default function ContactForm({ initialSubject = "" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({ ...INITIAL, subject: initialSubject });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setForm((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <div className="rounded-2xl bg-cream px-6 py-8 md:px-8">
          <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
            PHONE
          </p>
          <h3 className="mt-2 font-mincho text-xl text-ink">お電話でのご相談</h3>
          <a
            href={`tel:${SCHOOL.tel}`}
            className="mt-4 inline-block font-display text-3xl font-semibold tracking-wider text-primary transition-colors hover:text-accent"
          >
            {SCHOOL.tel}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            進路・学費・見学日程など、事務局スタッフが直接お答えします。
          </p>

          <div className="mt-8 border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/75">
            <p className="font-bold text-ink">{SCHOOL.name}</p>
            <p className="mt-2">
              {SCHOOL.zip}
              <br />
              {SCHOOL.address}
            </p>
            <p className="mt-2">運営：{SCHOOL.operator}</p>
          </div>

          <Link
            href="/opencampus"
            className="mt-8 inline-flex text-sm font-bold text-primary transition-colors hover:text-accent"
          >
            学校見学・オープンキャンパス →
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {submitted ? (
          <div className="rounded-2xl border border-meadow bg-white px-6 py-12 text-center shadow-card md:px-10">
            <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
              THANK YOU
            </p>
            <h3 className="mt-3 font-mincho text-2xl text-ink">
              お問合せ内容を受け付けました
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
              ご入力内容を確認のうえ、事務局よりご連絡いたします。お急ぎの場合は{" "}
              <a
                href={`tel:${SCHOOL.tel}`}
                className="font-bold text-primary hover:text-accent"
              >
                {SCHOOL.tel}
              </a>{" "}
              までお電話ください。
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(INITIAL);
              }}
              className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-dark"
            >
              別の内容を送る
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-ink/8 bg-white px-6 py-8 shadow-card md:px-8"
          >
            <p className="text-xs text-ink/55">※ すべて必須項目です</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-bold text-ink">お名前（姓）</span>
                <input
                  required
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">お名前（名）</span>
                <input
                  required
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">フリガナ（セイ）</span>
                <input
                  required
                  value={form.lastNameKana}
                  onChange={onChange("lastNameKana")}
                  pattern="[ァ-ヶー\s]+"
                  title="カタカナでご入力ください"
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">フリガナ（メイ）</span>
                <input
                  required
                  value={form.firstNameKana}
                  onChange={onChange("firstNameKana")}
                  pattern="[ァ-ヶー\s]+"
                  title="カタカナでご入力ください"
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="font-bold text-ink">メールアドレス</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
              />
            </label>

            <label className="mt-4 block text-sm">
              <span className="font-bold text-ink">件名</span>
              <input
                required
                value={form.subject}
                onChange={onChange("subject")}
                placeholder="例：資料請求希望／見学日程の相談"
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
              />
            </label>

            <label className="mt-4 block text-sm">
              <span className="font-bold text-ink">お問合せ内容</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={onChange("message")}
                className="mt-1.5 w-full resize-y rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
              />
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-dark"
              >
                確認画面へ
              </button>
              <button
                type="reset"
                onClick={() => setForm(INITIAL)}
                className="rounded-full border border-ink/20 px-7 py-3 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                リセット
              </button>
            </div>
          </form>
        )}
      </Reveal>
    </div>
  );
}
