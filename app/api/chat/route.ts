import { NextResponse } from "next/server";
import { answerFromKnowledge } from "@/lib/chat-knowledge";

export const runtime = "nodejs";

type ChatBody = {
  message?: string;
};

export async function POST(request: Request) {
  let body: ChatBody;
  try {
    body = (await request.json()) as ChatBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = body.message?.trim() ?? "";
  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }
  if (message.length > 500) {
    return NextResponse.json(
      { error: "message is too long" },
      { status: 400 },
    );
  }

  const result = answerFromKnowledge(message);
  return NextResponse.json({
    reply: result.answer,
    relatedHref: result.relatedHref ?? null,
    topic: result.matchedTopic ?? null,
  });
}
