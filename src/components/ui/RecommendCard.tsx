import Image from "next/image";
import Link from "next/link";
import type { Recommend, RecommendCategory } from "@/types";

const CATEGORY_BADGE: Record<RecommendCategory, { bg: string; text: string }> = {
  "医師・大学関係者":               { bg: "#e8f0f5", text: "#2c5f7a" },
  "理学療法士・柔道整復師・鍼灸師": { bg: "#e5f0e8", text: "#2d5c35" },
  "整体院・施術院経営者":           { bg: "#fef5e4", text: "#8a5200" },
  "スポーツ・美容・介護関係者":     { bg: "#f2eaf8", text: "#5c3070" },
  "地域事業者・利用者":             { bg: "#f0ece5", text: "#5c4e40" },
};

function Photo({ rec }: { rec: Recommend }) {
  const initials = rec.name.replace(/\s/g, "").slice(0, 2);
  return (
    <div className="mx-auto h-[132px] w-[132px]">
      {rec.image ? (
        <div className="relative h-[132px] w-[132px] overflow-hidden rounded-full shadow-[0_2px_12px_rgba(160,120,80,0.18)] ring-[3px] ring-white/90">
          <Image
            src={rec.image}
            alt={rec.name}
            fill
            className="object-cover object-top"
            sizes="132px"
          />
        </div>
      ) : (
        <div className="grid h-[132px] w-[132px] place-items-center rounded-full bg-[#f0e8df] shadow-[0_2px_12px_rgba(160,120,80,0.18)] ring-[3px] ring-white/90">
          <span className="font-mincho text-xl text-[#c4956a]">{initials}</span>
        </div>
      )}
    </div>
  );
}

export function RecommendCard({ rec }: { rec: Recommend }) {
  const badge = CATEGORY_BADGE[rec.category];

  return (
    <article
      className="flex h-full flex-col rounded-[1.75rem] p-7"
      style={{
        background: "rgba(255, 248, 235, 0.78)",
        border: "1px solid rgba(86, 68, 53, 0.10)",
        boxShadow: "0 8px 32px rgba(76, 55, 39, 0.06)",
      }}
    >
      <Photo rec={rec} />

      {/* 氏名・所属 */}
      <div className="mt-5 text-center">
        <p className="font-mincho text-[18px] tracking-[.08em]">{rec.name}</p>
        {rec.organization && (
          <p className="mt-1 text-[11px] text-text-muted">{rec.organization}</p>
        )}
        <p className="mt-0.5 text-[11px] text-text-light">{rec.role}</p>
      </div>

      {/* 装飾区切り */}
      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border-light" />
        <span className="text-[10px] text-primary/40">✦</span>
        <div className="h-px flex-1 bg-border-light" />
      </div>

      {/* タイトル */}
      <p className="mb-3 text-center font-mincho text-[12px] italic leading-[1.75] text-primary-dark">
        「{rec.title}」
      </p>

      {/* 要約 */}
      <p className="line-clamp-4 flex-1 text-[12px] leading-[1.95] text-text-light">
        {rec.summary}
      </p>

      {/* フッター */}
      <div className="mt-5 flex items-center justify-between">
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-bold"
          style={{ background: badge.bg, color: badge.text }}
        >
          {rec.category}
        </span>
        <Link
          href={`/recommend/${rec.slug}`}
          className="text-[11px] font-bold text-primary-dark transition-opacity hover:opacity-60"
        >
          詳しく見る →
        </Link>
      </div>
    </article>
  );
}
