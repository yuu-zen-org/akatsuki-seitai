import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "楓月整体院からのお知らせ。休診情報・キャンペーン・新着情報をお届けします。",
};

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
            <div className="card-glass rounded-2xl p-10 text-center text-text-muted">
              <p className="font-mincho text-lg">現在、お知らせはありません。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
