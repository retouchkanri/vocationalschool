import { NextResponse } from "next/server";
import { knowledgeAsTrainingText } from "@/lib/chat-knowledge";

/**
 * Returns the full training corpus as plain text.
 * Upload this (or crawl site URLs) into LiveChat Knowledge Hub / AI sources.
 */
export async function GET() {
  const text = knowledgeAsTrainingText();
  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'inline; filename="bajigaku-livechat-knowledge.txt"',
    },
  });
}
