"use client";

import Link from "next/link";
import { useState } from "react";
import type { Symptom, SymptomCategory } from "@/types";

const CATEGORIES: { id: SymptomCategory | "all"; label: string }[] = [
  { id: "all",   label: "すべて" },
  { id: "back",  label: "腰・背中" },
  { id: "neck",  label: "首・肩" },
  { id: "lower", label: "膝・足・股関節" },
  { id: "hand",  label: "手・指" },
  { id: "other", label: "全身・その他" },
];

export function SymptomsGrid({ symptoms }: { symptoms: Symptom[] }) {
  const [active, setActive] = useState<SymptomCategory | "all">("all");

  const filtered = active === "all" ? symptoms : symptoms.filter((s) => s.category === active);
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: c.id === "all" ? symptoms.length : symptoms.filter((s) => s.category === c.id).length,
  }));

  return (
    <div className="flex gap-10 pb-16 max-md:flex-col">
      {/* サイドバー */}
      <aside className="md:sticky md:top-24 md:h-fit md:w-[200px] md:flex-shrink-0">
        <ul className="border-t border-border-light">
          {counts.map((c) => (
            <li key={c.id} className="border-b border-border-light">
              <button
                onClick={() => setActive(c.id)}
                className="flex w-full items-center justify-between py-3.5 text-left transition-colors hover:text-primary"
              >
                <span
                  className={[
                    "text-sm",
                    active === c.id ? "font-bold text-primary-dark underline underline-offset-4" : "text-text-light",
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
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <li key={s.id}>
              <Link
                href={`/symptoms/${s.slug}`}
                className="group flex h-full flex-col rounded-[14px] bg-white/80 p-5 ring-1 ring-border-light transition-shadow hover:shadow-md"
              >
                <h2 className="mb-2 font-mincho text-[17px] tracking-[.06em] text-primary">
                  {s.name}
                </h2>
                <p className="flex-1 text-[12px] leading-[1.8] text-text-muted line-clamp-2">
                  {s.description}
                </p>
                <span className="mt-3 text-[11px] font-bold text-primary/50 transition-colors group-hover:text-primary">
                  詳しく見る →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-text-muted">該当する症状が見つかりません</p>
        )}
      </div>
    </div>
  );
}
