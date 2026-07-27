"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SCHOOL } from "@/lib/site";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  relatedHref?: string | null;
};

const SUGGESTIONS = [
  "未経験でも入学できますか？",
  "学費はいくらですか？",
  "オープンキャンパスについて",
  "資料請求・お問合せ方法は？",
];

declare global {
  interface Window {
    __lc?: {
      license: number | string;
      integration_name?: string;
      product_name?: string;
      params?: unknown[];
      asyncInit?: boolean;
    };
    LiveChatWidget?: {
      init: () => void;
      call: (...args: unknown[]) => void;
      on: (...args: unknown[]) => void;
    };
  }
}

function loadLiveChatScript(licenseId: string) {
  if (typeof window === "undefined") return;
  if (document.getElementById("livechat-tracking-script")) return;

  window.__lc = window.__lc || { license: licenseId };
  window.__lc.license = Number.isFinite(Number(licenseId))
    ? Number(licenseId)
    : licenseId;
  window.__lc.integration_name = "manual_onboarding";
  window.__lc.product_name = "livechat";

  const stub = {
    _q: [] as unknown[][],
    _h: null as null | ((args: unknown[]) => unknown),
    _v: "2.0",
    on(...args: unknown[]) {
      this._q.push(["on", ...args]);
    },
    once(...args: unknown[]) {
      this._q.push(["once", ...args]);
    },
    off(...args: unknown[]) {
      this._q.push(["off", ...args]);
    },
    get(...args: unknown[]) {
      this._q.push(["get", ...args]);
    },
    call(...args: unknown[]) {
      this._q.push(["call", ...args]);
    },
    init() {
      const s = document.createElement("script");
      s.id = "livechat-tracking-script";
      s.async = true;
      s.type = "text/javascript";
      s.src = "https://cdn.livechatinc.com/tracking.js";
      document.head.appendChild(s);
    },
  };

  window.LiveChatWidget = window.LiveChatWidget || (stub as never);
  if (!window.__lc.asyncInit) stub.init();
}

/**
 * Lower-left LiveChat AI assistant trained on site knowledge.
 * When NEXT_PUBLIC_LIVECHAT_LICENSE_ID is set, also loads the official LiveChat widget.
 */
export default function LiveChatWidget() {
  const licenseId = process.env.NEXT_PUBLIC_LIVECHAT_LICENSE_ID?.trim();
  const useOfficialLiveChat = Boolean(licenseId);
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: `こんにちは。${SCHOOL.nameShort}のAIアシスタントです。入学・学費・見学・お問合せなど、サイトの内容をもとにご案内します。何でもお聞きください。`,
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (licenseId) loadLiveChatScript(licenseId);
  }, [licenseId]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, pending]);

  // Official LiveChat covers the launcher when a license is configured.
  if (useOfficialLiveChat) return null;

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as {
        reply?: string;
        relatedHref?: string | null;
        error?: string;
      };
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text:
            data.reply ??
            `申し訳ありません。お手数ですが ${SCHOOL.tel} までお電話ください。`,
          relatedHref: data.relatedHref,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: `通信エラーが発生しました。お手数ですが ${SCHOOL.tel} までお電話ください。`,
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-4 z-[60] flex flex-col items-start gap-3 md:bottom-6 md:left-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="AIチャット"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[0_18px_48px_-16px_rgb(31_45_35/0.35)]"
          >
            <div className="flex items-center justify-between bg-primary-deep px-4 py-3 text-white">
              <div>
                <p className="font-display text-[10px] font-semibold tracking-[0.3em] text-tan">
                  LIVE CHAT AI
                </p>
                <p className="mt-0.5 text-sm font-bold">{SCHOOL.nameShort} サポート</p>
              </div>
              <button
                type="button"
                aria-label="チャットを閉じる"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg leading-none transition-colors hover:bg-white/20"
              >
                ×
              </button>
            </div>

            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-md bg-accent text-white"
                        : "rounded-bl-md bg-cream text-ink"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.text}</p>
                    {m.relatedHref && (
                      <Link
                        href={m.relatedHref}
                        className="mt-2 inline-flex text-xs font-bold text-primary underline-offset-2 hover:underline"
                        onClick={() => setOpen(false)}
                      >
                        詳しく見る →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {pending && (
                <p className="text-xs text-ink/50">回答を作成しています…</p>
              )}
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 border-t border-ink/5 px-3 py-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void send(s)}
                    className="rounded-full border border-tan/60 bg-white px-3 py-1 text-[11px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              className="flex gap-2 border-t border-ink/10 bg-white p-3"
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="質問を入力…"
                maxLength={500}
                className="min-w-0 flex-1 rounded-full border border-ink/10 bg-paper px-4 py-2.5 text-sm outline-none ring-accent/40 placeholder:text-ink/40 focus:ring-2"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                className="rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-dark disabled:opacity-40"
              >
                送信
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="AIチャットを開く"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_32px_-8px_rgb(240_131_0/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8M8 14h5M21 12a9 9 0 1 1-3.2-6.9L21 3v9z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
