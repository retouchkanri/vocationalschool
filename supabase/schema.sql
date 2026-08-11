-- Announcements (お知らせ) + FAQs for bajigaku admin CMS
-- Run in Supabase SQL Editor, or via scripts/setup-supabase.mjs

create extension if not exists "pgcrypto";

-- —— Announcements ————————————————————————————————
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null
    check (category in ('announce', 'facility', 'achievement', 'admission')),
  href text not null default '#',
  external boolean not null default false,
  published_at date not null default current_date,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists announcements_published_at_idx
  on public.announcements (published_at desc);

-- —— FAQs ————————————————————————————————————————
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists faqs_sort_order_idx
  on public.faqs (sort_order asc);

-- —— updated_at trigger ————————————————————————————
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists announcements_set_updated_at on public.announcements;
create trigger announcements_set_updated_at
  before update on public.announcements
  for each row execute function public.set_updated_at();

drop trigger if exists faqs_set_updated_at on public.faqs;
create trigger faqs_set_updated_at
  before update on public.faqs
  for each row execute function public.set_updated_at();

-- —— RLS ——————————————————————————————————————————
alter table public.announcements enable row level security;
alter table public.faqs enable row level security;

drop policy if exists "Public read published announcements" on public.announcements;
create policy "Public read published announcements"
  on public.announcements for select
  using (published = true);

drop policy if exists "Auth manage announcements" on public.announcements;
create policy "Auth manage announcements"
  on public.announcements for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Public read published faqs" on public.faqs;
create policy "Public read published faqs"
  on public.faqs for select
  using (published = true);

drop policy if exists "Auth manage faqs" on public.faqs;
create policy "Auth manage faqs"
  on public.faqs for all
  to authenticated
  using (true)
  with check (true);

-- Service role bypasses RLS automatically.
