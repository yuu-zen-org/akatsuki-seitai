import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "楓月整体院からのお知らせ。休診情報・キャンペーン・新着情報をお届けします。",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "お知らせ", href: "/news" },
        ]}
      />
      <h1 className="text-2xl font-bold">お知らせ</h1>
    </main>
  );
}
