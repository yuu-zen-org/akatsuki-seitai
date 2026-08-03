"use client";

import { useState } from "react";
import { RecommendCard } from "@/components/ui/RecommendCard";
import { recommends } from "@/data/recommends";
import { RECOMMEND_CATEGORIES } from "@/types";

const ALL = "すべて";
const ALL_CATEGORIES = [ALL, ...RECOMMEND_CATEGORIES] as const;

export function RecommendGrid() {
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL ? recommends : recommends.filter((r) => r.category === active);

  const counts = ALL_CATEGORIES.map((cat) => ({
    label: cat,
    count: cat === ALL ? recommends.length : recommends.filter((r) => r.category === cat).length,
  }));

  return (
    <div className="flex gap-10 max-md:flex-col">
      {/* サイドバー */}
      <aside className="md:sticky md:top-24 md:h-fit md:w-[200px] md:flex-shrink-0">
        <p className="mb-3 text-[10px] font-bold tracking-[.2em] text-text-muted">CATEGORY</p>
        <ul className="border-t border-border-light">
          {counts.map((c) => (
            <li key={c.label} className="border-b border-border-light">
              <button
                onClick={() => setActive(c.label)}
                className="flex w-full items-center justify-between py-3.5 text-left transition-colors hover:text-primary"
              >
                <span
                  className={[
                    "text-sm",
                    active === c.label
                      ? "font-bold text-primary-dark underline underline-offset-4"
                      : "text-text-light",
                  ].join(" ")}
                >
                  {c.label}
                </span>
                <span className="text-[11px] text-text-muted">{c.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* グリッド */}
      <div className="min-w-0 flex-1">
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((rec) => (
            <li key={rec.id} className="flex">
              <RecommendCard rec={rec} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-text-muted">
          ※掲載内容はご本人から寄せられた推薦文をもとに、内容を損なわない範囲で読みやすく編集・要約しています。
          個人の感想であり、施術の結果や効果を保証するものではありません。
        </p>
      </div>
    </div>
  );
}
