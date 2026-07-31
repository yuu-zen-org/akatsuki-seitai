"use client";

import { useState } from "react";
import { RecommendCard } from "@/components/ui/RecommendCard";
import { recommends } from "@/data/recommends";
import { RECOMMEND_CATEGORIES } from "@/types";

const ALL = "すべて";

export function RecommendGrid() {
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL ? recommends : recommends.filter((r) => r.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {[ALL, ...RECOMMEND_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              active === cat
                ? "bg-primary text-white"
                : "border border-border-light bg-white/60 text-text-light hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
