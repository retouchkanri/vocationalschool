import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SCHOOL } from "@/lib/site";

export const runtime = "nodejs";

type ContactBody = {
  lastName?: string;
  firstName?: string;
  lastNameKana?: string;
  firstNameKana?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const REQUIRED_FIELDS: (keyof ContactBody)[] = [
  "lastName",
  "firstName",
  "email",
  "subject",
  "message",
];

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

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]?.trim()) {
      return NextResponse.json(
        { error: "必須項目が未入力です" },
        { status: 400 },
      );
    }
  }

  const {
    lastName,
    firstName,
    lastNameKana = "",
    firstNameKana = "",
    phone = "",
    email,
    subject,
    message,
  } = body as Required<Pick<ContactBody, "lastName" | "firstName" | "email" | "subject" | "message">> &
    ContactBody;

  if (!EMAIL_PATTERN.test(email!)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません" },
      { status: 400 },
    );
  }

  const transporter = getTransporter();
  if (!transporter) {
    console.error("Contact form submitted but SMTP is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS).");
    return NextResponse.json(
      { error: "現在お問合せフォームをご利用いただけません。お手数ですがお電話にてご連絡ください。" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const nameLine = [lastName, firstName].join(" ");
  const kanaLine = [lastNameKana, firstNameKana].filter(Boolean).join(" ");

  try {
    await transporter.sendMail({
      from: `"${SCHOOL.name} お問合せフォーム" <${process.env.SMTP_USER}>`,
      to,
      replyTo: `"${nameLine}" <${email}>`,
      subject: `【サイトお問合せ】${subject}`,
      text: [
        `${SCHOOL.name} 公式サイトのお問合せフォームより送信されました。`,
        "",
        `お名前：${nameLine}${kanaLine ? `（${kanaLine}）` : ""}`,
        `電話番号：${phone || "（未入力）"}`,
        `メールアドレス：${email}`,
        `件名：${subject}`,
        "",
        "お問合せ内容：",
        message,
      ].join("\n"),
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
