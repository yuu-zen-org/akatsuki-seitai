import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "楓月整体院のプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "プライバシーポリシー", href: "/privacy" },
        ]}
      />
      <h1 className="text-2xl font-bold">プライバシーポリシー</h1>
    </main>
  );
}
