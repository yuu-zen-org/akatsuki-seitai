import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "楓月整体院からのお知らせ。休診情報・キャンペーン・新着情報をお届けします。",
};

const CATEGORY_COLOR: Record<string, { bg: string; text: string }> = {
  お知らせ:     { bg: "#eef2ff", text: "#3730a3" },
  キャンペーン: { bg: "#fef3c7", text: "#92400e" },
  休診情報:     { bg: "#fee2e2", text: "#991b1b" },
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export default function NewsPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="NEWS"
            ja="お知らせ"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "お知らせ", href: "/news" },
            ]}
          />

          <div className="pb-24">
            {news.length === 0 ? (
              <div className="card-glass rounded-2xl p-10 text-center text-text-muted">
                <p className="font-mincho text-lg">現在、お知らせはありません。</p>
              </div>
            ) : (
              <ul className="divide-y divide-border-light">
                {news.map((item) => {
                  const color = CATEGORY_COLOR[item.category] ?? { bg: "#f3f4f6", text: "#374151" };
                  return (
                    <li key={item.id} className="flex flex-wrap items-start gap-4 py-5 sm:items-center">
                      <time className="w-32 shrink-0 text-sm text-text-muted" dateTime={item.date}>
                        {formatDate(item.date)}
                      </time>
                      <span
                        className="rounded-full px-3 py-0.5 text-[11px] font-bold"
                        style={{ background: color.bg, color: color.text }}
                      >
                        {item.category}
                      </span>
                      <p className="flex-1 text-sm leading-[1.8]">{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
