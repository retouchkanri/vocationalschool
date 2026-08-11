import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SCHOOL } from "@/lib/site";

export const runtime = "nodejs";

type ContactFormType = "document" | "opencampus" | "general";

type ContactBody = {
  formType?: ContactFormType;
  lastName?: string;
  firstName?: string;
  lastNameKana?: string;
  firstNameKana?: string;
  phone?: string;
  email?: string;
  // document
  zip?: string;
  address?: string;
  schoolInfo?: string;
  // opencampus
  preferredDate?: string;
  participants?: string;
  pickupTokyo?: boolean;
  // general
  subject?: string;
  message?: string;
};

const REQUIRED_FIELDS_BY_TYPE: Record<ContactFormType, (keyof ContactBody)[]> = {
  document: ["lastName", "firstName", "email", "address"],
  opencampus: ["lastName", "firstName", "email", "phone", "preferredDate"],
  general: ["lastName", "firstName", "email", "subject", "message"],
};

const FORM_LABELS: Record<ContactFormType, string> = {
  document: "資料請求フォーム",
  opencampus: "体験入学フォーム",
  general: "お問い合わせフォーム",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587 (STARTTLS)
    auth: { user, pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });
}

function buildEmailBody(formType: ContactFormType, body: ContactBody, nameLine: string, kanaLine: string): string {
  const lines: string[] = [
    `${SCHOOL.name} 公式サイトの${FORM_LABELS[formType]}より送信されました。`,
    "",
    `お名前：${nameLine}${kanaLine ? `（${kanaLine}）` : ""}`,
    `電話番号：${body.phone || "（未入力）"}`,
    `メールアドレス：${body.email}`,
    "",
  ];

  if (formType === "document") {
    lines.push(
      `郵便番号：${body.zip || "（未入力）"}`,
      `ご住所：${body.address}`,
      `ご出身校・学年など：${body.schoolInfo || "（未入力）"}`,
      "",
      "ご要望・ご質問：",
      body.message || "（なし）",
    );
  } else if (formType === "opencampus") {
    lines.push(
      `ご参加希望日：${body.preferredDate}`,
      `ご参加人数：${body.participants || "1"}名`,
      `東京駅からの送迎希望：${body.pickupTokyo ? "希望する" : "希望しない"}`,
      "",
      "ご質問・備考：",
      body.message || "（なし）",
    );
  } else {
    lines.push(`件名：${body.subject}`, "", "お問合せ内容：", body.message || "");
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const formType: ContactFormType =
    body.formType === "document" || body.formType === "opencampus"
      ? body.formType
      : "general";

  const requiredFields = REQUIRED_FIELDS_BY_TYPE[formType];
  for (const field of requiredFields) {
    const value = body[field];
    if (typeof value === "boolean") continue;
    if (!value?.toString().trim()) {
      return NextResponse.json(
        { error: "必須項目が未入力です" },
        { status: 400 },
      );
    }
  }

  const { lastName, firstName, lastNameKana = "", firstNameKana = "", email } = body;

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません" },
      { status: 400 },
    );
  }

  const transporter = getTransporter();
  if (!transporter) {
    console.error("Contact form submitted but SMTP is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS).");
    return NextResponse.json(
      { error: "現在フォームをご利用いただけません。お手数ですがお電話にてご連絡ください。" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const nameLine = [lastName, firstName].join(" ");
  const kanaLine = [lastNameKana, firstNameKana].filter(Boolean).join(" ");

  const subjectLine =
    formType === "general"
      ? `【サイトお問合せ】${body.subject}`
      : `【${FORM_LABELS[formType]}】${nameLine} 様`;

  try {
    await transporter.sendMail({
      from: `"${SCHOOL.name} ${FORM_LABELS[formType]}" <${process.env.SMTP_USER}>`,
      to,
      replyTo: `"${nameLine}" <${email}>`,
      subject: subjectLine,
      text: buildEmailBody(formType, body, nameLine, kanaLine),
    });
  } catch (err) {
    const code = (err as { code?: string })?.code;
    const errMessage = err instanceof Error ? err.message : String(err);
    console.error("Failed to send contact email", { code, message: errMessage });
    return NextResponse.json(
      { error: "送信に失敗しました。お手数ですが時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
