const CATEGORY_STYLES: Record<string, string> = {
  announce: "bg-primary/10 text-primary",
  facility: "bg-accent/10 text-accent-dark",
  achievement: "bg-[#b8860b]/10 text-[#8a6400]",
  admission: "bg-alert/10 text-alert",
};

export function CategoryBadge({ value, label }: { value: string; label: string }) {
  const style = CATEGORY_STYLES[value] ?? "bg-ink/8 text-ink/70";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${style}`}
    >
      {label}
    </span>
  );
}

export function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${
        published ? "bg-primary/10 text-primary" : "bg-ink/8 text-ink/50"
      }`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${published ? "bg-primary" : "bg-ink/40"}`}
      />
      {published ? "公開中" : "下書き"}
    </span>
  );
}
