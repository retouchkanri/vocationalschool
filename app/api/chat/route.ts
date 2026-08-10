import { NextResponse } from "next/server";
import OpenAI from "openai";
import { answerFromKnowledge, knowledgeAsTrainingText } from "@/lib/chat-knowledge";
import { SCHOOL } from "@/lib/site";

export const runtime = "nodejs";

type ChatBody = {
  message?: string;
};

function systemPrompt() {
  return `あなたは${SCHOOL.name}（${SCHOOL.nameShort}）公式サイトのAIチャットアシスタントです。
下の「学校情報」を読み、来訪者の質問に日本語で3〜5文程度、具体的かつ丁寧に答えてください。

ルール：
1. 質問に関係する記述が「学校情報」内にあれば、そこに書かれている数値・事実を省略せずそのまま使って具体的に答える。
   例）質問「学費はいくらですか？」→ 学校情報の【学費】に記載された金額をそのまま答える。
   「わかりかねます」で済ませず、必ず該当箇所の数値を答えに含めること。
2. 「学校情報」のどこにも関係する記述がない場合のみ、「わかりかねます」と伝え、
   お電話（${SCHOOL.tel}）またはお問合せフォーム（/contact）を案内する。
3. 「学校情報」に存在しない数値・実績・制度をでっち上げない。

# 学校情報
${knowledgeAsTrainingText()}`;
}

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

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

  const fallback = answerFromKnowledge(message);
  const client = getClient();

  if (!client) {
    return NextResponse.json({
      reply: fallback.answer,
      relatedHref: fallback.relatedHref ?? null,
      topic: fallback.matchedTopic ?? null,
    });
  }

  try {
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt() },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) throw new Error("Empty completion from OpenAI");

    return NextResponse.json({
      reply,
      relatedHref: fallback.relatedHref ?? null,
      topic: fallback.matchedTopic ?? null,
    });
  } catch (err) {
    console.error("OpenAI chat completion failed, falling back to knowledge base", err);
    return NextResponse.json({
      reply: fallback.answer,
      relatedHref: fallback.relatedHref ?? null,
      topic: fallback.matchedTopic ?? null,
    });
  }
}
