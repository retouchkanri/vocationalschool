"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { NewsCategory } from "@/components/pages/NewsSection";

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return supabase;
}

function revalidatePublic() {
  revalidatePath("/");
  revalidatePath("/faq");
  revalidatePath("/admin");
  revalidatePath("/admin/announcements");
  revalidatePath("/admin/faqs");
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }
  redirect("/admin");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createAnnouncement(formData: FormData) {
  const supabase = await requireUser();
  const { error } = await supabase.from("announcements").insert({
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "announce") as NewsCategory,
    href: String(formData.get("href") ?? "#").trim() || "#",
    external: formData.get("external") === "on",
    published_at: String(formData.get("published_at") ?? "").slice(0, 10),
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  });
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/announcements");
}

export async function updateAnnouncement(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  const { error } = await supabase
    .from("announcements")
    .update({
      title: String(formData.get("title") ?? "").trim(),
      category: String(formData.get("category") ?? "announce") as NewsCategory,
      href: String(formData.get("href") ?? "#").trim() || "#",
      external: formData.get("external") === "on",
      published_at: String(formData.get("published_at") ?? "").slice(0, 10),
      published: formData.get("published") === "on",
      sort_order: Number(formData.get("sort_order") ?? 0) || 0,
    })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/announcements");
}

export async function deleteAnnouncement(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  const { error } = await supabase.from("announcements").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/announcements");
}

export async function createFaq(formData: FormData) {
  const supabase = await requireUser();
  const { error } = await supabase.from("faqs").insert({
    category: String(formData.get("category") ?? "").trim(),
    question: String(formData.get("question") ?? "").trim(),
    answer: String(formData.get("answer") ?? "").trim(),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
    published: formData.get("published") === "on",
  });
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/faqs");
}

export async function updateFaq(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  const { error } = await supabase
    .from("faqs")
    .update({
      category: String(formData.get("category") ?? "").trim(),
      question: String(formData.get("question") ?? "").trim(),
      answer: String(formData.get("answer") ?? "").trim(),
      sort_order: Number(formData.get("sort_order") ?? 0) || 0,
      published: formData.get("published") === "on",
    })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/faqs");
}

export async function deleteFaq(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  const { error } = await supabase.from("faqs").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublic();
  redirect("/admin/faqs");
}
