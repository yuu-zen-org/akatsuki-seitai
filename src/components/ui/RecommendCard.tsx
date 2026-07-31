import Image from "next/image";
import Link from "next/link";
import type { Recommend, RecommendCategory } from "@/types";

const CATEGORY_STYLE: Record<RecommendCategory, { accent: string; bg: string; text: string }> = {
  "医師・大学関係者":               { accent: "#4a90b8", bg: "#e8f0f5", text: "#2c5f7a" },
  "理学療法士・柔道整復師・鍼灸師": { accent: "#4a9b6f", bg: "#e5f0e8", text: "#2d5c35" },
  "整体院・施術院経営者":           { accent: "#E08A2A", bg: "#fef5e4", text: "#8a5200" },
  "スポーツ・美容・介護関係者":     { accent: "#8B6BA8", bg: "#f2eaf8", text: "#5c3070" },
  "地域事業者・利用者":             { accent: "#9B8A7A", bg: "#f0ece5", text: "#5c4e40" },
};

function Initials({ name }: { name: string }) {
  const chars = name.replace(/\s/g, "").slice(0, 2);
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-[#f0e8df] font-mincho text-lg text-[#c4956a]">
      {chars}
    </div>
  );
}

export function RecommendCard({ rec }: { rec: Recommend }) {
  const style = CATEGORY_STYLE[rec.category];

  return (
    <article className="card-glass flex h-full flex-col overflow-hidden rounded-2xl">
      <div style={{ height: 4, background: style.accent }} />

      <div className="flex gap-4 p-5">
        <div className="shrink-0">
          {rec.image ? (
            <div className="relative h-20 w-20 overflow-hidden rounded-xl">
              <Image
                src={rec.image}
                alt={rec.name}
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </div>
          ) : (
            <Initials name={rec.name} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{ background: style.bg, color: style.text }}
          >
            {rec.category}
          </span>
          {rec.organization && (
            <p className="mt-1 truncate text-[11px] text-text-muted">{rec.organization}</p>
          )}
          <p className="mt-0.5 font-mincho text-base font-bold leading-tight">{rec.name}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-text-light">{rec.role}</p>
        </div>
      </div>

      <div className="mx-5 border-t border-border-light" />

      <div className="flex flex-1 flex-col p-5 pt-4">
        <p className="text-[13px] font-bold leading-[1.6] text-primary-dark">{rec.title}</p>
        <p className="mt-2 line-clamp-4 flex-1 text-xs leading-[1.9] text-text-light">
          {rec.summary}
        </p>
        <div className="mt-4 flex justify-end">
          <Link
            href={`/recommend/${rec.slug}`}
            className="text-xs font-bold text-primary-dark transition-opacity hover:opacity-70"
          >
            詳しく見る →
          </Link>
        </div>
      </div>
    </article>
  );
}
