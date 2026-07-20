import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { faqs } from "@/data/faq";
import { generateFAQPageJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "楓月整体院のよくある質問。予約方法・施術内容・料金・服装など、初めての方が気になるポイントをまとめました。",
};

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <JsonLd data={generateFAQPageJsonLd(faqs)} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "よくある質問", href: "/faq" },
        ]}
      />
      <h1 className="text-2xl font-bold">よくある質問</h1>
    </main>
  );
}
