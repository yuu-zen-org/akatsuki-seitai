import Link from "next/link";
import { news } from "@/data/news";

const CATEGORY_COLOR: Record<string, string> = {
  "お知らせ":   "bg-blue-50 text-blue-700",
  "キャンペーン": "bg-primary-light text-primary-dark",
  "休診情報":   "bg-red-50 text-red-700",
};

export function NewsSection() {
  return (
    <section className="border-b border-border-light bg-white/60 py-4">
      <div className="mx-auto flex w-[min(calc(100%-2rem),1260px)] items-start gap-6 sm:items-center">
        <span className="shrink-0 text-[10px] font-bold tracking-[.2em] text-text-muted">NEWS</span>

        {news.length === 0 ? (
          <p className="text-sm text-text-muted">現在、お知らせはありません。</p>
        ) : (
          <ul className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1">
            {news.slice(0, 3).map((item) => (
              <li key={item.id} className="flex min-w-0 items-center gap-3">
                <time className="shrink-0 text-[11px] text-text-muted">{item.date}</time>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${CATEGORY_COLOR[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {item.category}
                </span>
                <span className="truncate text-sm">{item.title}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/news"
          className="ml-auto shrink-0 text-[11px] font-bold text-primary hover:underline"
        >
          一覧を見る →
        </Link>
      </div>
    </section>
  );
}
