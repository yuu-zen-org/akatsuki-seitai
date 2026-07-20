import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "楓月整体院へのアクセス・地図・営業時間のご案内。仙台市泉区、駐車場完備。",
};

export default function AccessPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "アクセス", href: "/access" },
        ]}
      />
      <h1 className="text-2xl font-bold">アクセス</h1>
    </main>
  );
}
