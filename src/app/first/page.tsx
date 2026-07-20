import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "初めての方へ",
  description:
    "楓月整体院が初めての方へ。施術の流れや院の特徴、他院との違いをご紹介します。仙台市泉区で腰痛・肩こり・首の痛みにお悩みの方はお気軽にご相談ください。",
};

export default function FirstPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "初めての方へ", href: "/first" },
        ]}
      />
      <h1 className="text-2xl font-bold">初めての方へ</h1>
    </main>
  );
}
