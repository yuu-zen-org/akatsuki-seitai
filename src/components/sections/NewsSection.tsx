"use client";

import Link from "next/link";
import { news } from "@/data/news";

const CATEGORY_COLOR: Record<string, string> = {
  "お知らせ":    "bg-blue-50 text-blue-700",
  "キャンペーン": "bg-primary-light text-primary-dark",
  "休診情報":    "bg-red-50 text-red-700",
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}.${m.padStart(2, "0")}.${d.padStart(2, "0")}`;
}

function NewsItem({ item }: { item: (typeof news)[number] }) {
  return (
    <span className="inline-flex items-center gap-3">
      <time className="shrink-0 text-[11px] tabular-nums text-text-muted">
        {formatDate(item.date)}
      </time>
      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${CATEGORY_COLOR[item.category] ?? "bg-gray-100 text-gray-600"}`}>
        {item.category}
      </span>
      <span className="text-sm">{item.title}</span>
    </span>
  );
}

export function NewsSection() {
  if (news.length === 0) return null;

  return (
    <section className="border-b border-border-light bg-white/60">
      <div className="mx-auto flex w-[min(calc(100%-2rem),1260px)] items-center gap-4 py-3">
        <span className="shrink-0 text-[10px] font-bold tracking-[.2em] text-text-muted">NEWS</span>

        {/* PC: 固定表示 */}
        <div className="hidden lg:flex min-w-0 flex-1 items-center gap-8">
          {news.slice(0, 3).map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>

        {/* スマホ: マーキー */}
        <div className="lg:hidden min-w-0 flex-1 overflow-hidden">
          <div className="animate-marquee flex">
            <span className="flex min-w-[100vw] items-center pr-16">
              {news.map((item) => (
                <span key={item.id} className="mr-16">
                  <NewsItem item={item} />
                </span>
              ))}
            </span>
            <span className="flex min-w-[100vw] items-center pr-16">
              {news.map((item) => (
                <span key={item.id} className="mr-16">
                  <NewsItem item={item} />
                </span>
              ))}
            </span>
          </div>
        </div>

        <Link href="/news" className="shrink-0 text-[11px] font-bold text-primary hover:underline">
          一覧を見る →
        </Link>
      </div>
    </section>
  );
}
