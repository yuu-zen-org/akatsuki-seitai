import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "ご予約・お問い合わせ",
  description:
    "楓月整体院のご予約・お問い合わせページ。お電話・LINE・フォームからご予約いただけます。仙台市泉区。",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "ご予約・お問い合わせ", href: "/contact" },
        ]}
      />
      <h1 className="text-2xl font-bold">ご予約・お問い合わせ</h1>
    </main>
  );
}
