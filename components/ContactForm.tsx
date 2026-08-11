"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/site";

export type ContactFormType = "document" | "opencampus" | "general";

type FormState = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phone: string;
  email: string;
  // 資料請求
  zip: string;
  address: string;
  schoolInfo: string;
  // 体験入学
  preferredDate: string;
  participants: string;
  pickupTokyo: boolean;
  // お問い合わせ
  subject: string;
  message: string;
};

const INITIAL: FormState = {
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  phone: "",
  email: "",
  zip: "",
  address: "",
  schoolInfo: "",
  preferredDate: "",
  participants: "1",
  pickupTokyo: false,
  subject: "",
  message: "",
};

const OPEN_CAMPUS_DATE_OPTIONS = [
  "9/19（土）",
  "10/12（祝・月）",
  "日程未定・要相談",
] as const;

const FORM_META: Record<
  ContactFormType,
  {
    eyebrow: string;
    title: string;
    lead: string;
    submitLabel: string;
    thankYouTitle: string;
    thankYouBody: string;
  }
> = {
  document: {
    eyebrow: "DOCUMENT REQUEST",
    title: "資料請求フォーム",
    lead: "学校案内・募集要項・オープンキャンパスのご案内をお届けします。ただいまクリアーファイルを無料プレゼント中です。",
    submitLabel: "資料を請求する",
    thankYouTitle: "資料請求を受け付けました",
    thankYouBody: "ご入力いただいたご住所宛に、学校案内・募集要項を発送いたします。",
  },
  opencampus: {
    eyebrow: "TRIAL ENROLLMENT",
    title: "体験入学フォーム",
    lead: "学校見学・オープンキャンパスのお申込みはこちらから。乗馬体験や在校生との交流をご用意してお待ちしています。",
    submitLabel: "体験入学に申し込む",
    thankYouTitle: "体験入学のお申込みを受け付けました",
    thankYouBody: "内容を確認のうえ、事務局よりご連絡いたします。",
  },
  general: {
    eyebrow: "INQUIRY",
    title: "お問い合わせフォーム",
    lead: "入学・学費・寮生活のことなど、気になることをお気軽にご相談ください。",
    submitLabel: "送信する",
    thankYouTitle: "お問合せ内容を受け付けました",
    thankYouBody: "ご入力内容を確認のうえ、事務局よりご連絡いたします。",
  },
};

function RequiredBadge() {
  return (
    <span className="ml-2 rounded bg-alert/10 px-1.5 py-0.5 text-[10px] font-bold text-alert">
      必須
    </span>
  );
}

function OptionalBadge() {
  return (
    <span className="ml-2 rounded bg-ink/8 px-1.5 py-0.5 text-[10px] font-bold text-ink/50">
      任意
    </span>
  );
}

type ContactFormProps = {
  formType?: ContactFormType;
  initialSubject?: string;
};

export default function ContactForm({
  formType = "general",
  initialSubject = "",
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({ ...INITIAL, subject: initialSubject });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const meta = FORM_META[formType];

  // Reset the form (but keep type) whenever the active form type changes.
  useEffect(() => {
    setForm({ ...INITIAL, subject: initialSubject });
    setSubmitted(false);
    setError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formType]);

  useEffect(() => {
    if (initialSubject) {
      setForm((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onToggle = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.checked }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setError(
          data.error ?? "送信に失敗しました。お手数ですが時間をおいて再度お試しください。",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError("通信エラーが発生しました。お手数ですが時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
              {meta.thankYouTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
              {meta.thankYouBody} お急ぎの場合は{" "}
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
                setForm({ ...INITIAL, subject: initialSubject });
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
            <p className="font-display text-[12px] font-semibold tracking-[0.3em] text-primary">
              {meta.eyebrow}
            </p>
            <h3 className="mt-2 font-mincho text-xl text-ink">{meta.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{meta.lead}</p>
            <p className="mt-4 text-xs text-ink/55">
              ※「必須」の項目は必ずご入力ください
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-bold text-ink">
                  お名前（姓）
                  <RequiredBadge />
                </span>
                <input
                  required
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">
                  お名前（名）
                  <RequiredBadge />
                </span>
                <input
                  required
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">
                  フリガナ（セイ）
                  <OptionalBadge />
                </span>
                <input
                  value={form.lastNameKana}
                  onChange={onChange("lastNameKana")}
                  pattern="[ァ-ヶー\s]*"
                  title="カタカナでご入力ください"
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold text-ink">
                  フリガナ（メイ）
                  <OptionalBadge />
                </span>
                <input
                  value={form.firstNameKana}
                  onChange={onChange("firstNameKana")}
                  pattern="[ァ-ヶー\s]*"
                  title="カタカナでご入力ください"
                  className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="font-bold text-ink">
                メールアドレス
                <RequiredBadge />
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
              />
            </label>

            <label className="mt-4 block text-sm">
              <span className="font-bold text-ink">
                電話番号
                {formType === "opencampus" ? <RequiredBadge /> : <OptionalBadge />}
              </span>
              <input
                type="tel"
                required={formType === "opencampus"}
                value={form.phone}
                onChange={onChange("phone")}
                pattern="[0-9\-()+ ]*"
                title="電話番号は数字とハイフンでご入力ください"
                placeholder="例：090-1234-5678"
                className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
              />
            </label>

            {/* ===== 資料請求フォーム専用項目 ===== */}
            {formType === "document" && (
              <>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    郵便番号
                    <OptionalBadge />
                  </span>
                  <input
                    value={form.zip}
                    onChange={onChange("zip")}
                    placeholder="例：123-4567"
                    pattern="[0-9\-]*"
                    className="mt-1.5 w-full max-w-[12rem] rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご住所（資料送付先）
                    <RequiredBadge />
                  </span>
                  <input
                    required
                    value={form.address}
                    onChange={onChange("address")}
                    placeholder="例：千葉県山武市〇〇1-2-3"
                    className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご出身校・学年など
                    <OptionalBadge />
                  </span>
                  <input
                    value={form.schoolInfo}
                    onChange={onChange("schoolInfo")}
                    placeholder="例：〇〇高校 3年生"
                    className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご要望・ご質問
                    <OptionalBadge />
                  </span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={onChange("message")}
                    className="mt-1.5 w-full resize-y rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
              </>
            )}

            {/* ===== 体験入学フォーム専用項目 ===== */}
            {formType === "opencampus" && (
              <>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご参加希望日
                    <RequiredBadge />
                  </span>
                  <select
                    required
                    value={form.preferredDate}
                    onChange={onChange("preferredDate")}
                    className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  >
                    <option value="" disabled>
                      選択してください
                    </option>
                    {OPEN_CAMPUS_DATE_OPTIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご参加人数
                    <OptionalBadge />
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={form.participants}
                    onChange={onChange("participants")}
                    className="mt-1.5 w-full max-w-[8rem] rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
                <label className="mt-4 flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.pickupTokyo}
                    onChange={onToggle("pickupTokyo")}
                    className="mt-0.5 h-4 w-4 rounded border-ink/30 text-primary focus:ring-accent/40"
                  />
                  <span className="text-ink/85">
                    JR東京駅（八重洲中央口）からの無料送迎を希望する
                  </span>
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    ご質問・備考
                    <OptionalBadge />
                  </span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={onChange("message")}
                    className="mt-1.5 w-full resize-y rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
              </>
            )}

            {/* ===== お問い合わせフォーム専用項目 ===== */}
            {formType === "general" && (
              <>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    件名
                    <RequiredBadge />
                  </span>
                  <input
                    required
                    value={form.subject}
                    onChange={onChange("subject")}
                    placeholder="例：入学・学費についての相談"
                    className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
                <label className="mt-4 block text-sm">
                  <span className="font-bold text-ink">
                    お問合せ内容
                    <RequiredBadge />
                  </span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={onChange("message")}
                    className="mt-1.5 w-full resize-y rounded-lg border border-ink/15 bg-paper px-3 py-2.5 outline-none ring-accent/30 focus:ring-2"
                  />
                </label>
              </>
            )}

            {error && (
              <p className="mt-4 rounded-lg bg-alert/10 px-4 py-3 text-sm font-bold text-alert">
                {error}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-accent-dark disabled:opacity-50"
              >
                {submitting ? "送信中…" : meta.submitLabel}
              </button>
              <button
                type="reset"
                onClick={() => {
                  setForm({ ...INITIAL, subject: initialSubject });
                  setError("");
                }}
                disabled={submitting}
                className="rounded-full border border-ink/20 px-7 py-3 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
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
