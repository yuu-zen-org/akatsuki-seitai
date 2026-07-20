import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "お客様の声",
  description:
    "楓月整体院に通われたお客様の声をご紹介します。腰痛・肩こり・首の痛みなど、さまざまな症状で改善を実感された方の体験談です。",
};

export default function VoicePage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "お客様の声", href: "/voice" },
        ]}
      />
      <h1 className="text-2xl font-bold">お客様の声</h1>
    </main>
  );
}
