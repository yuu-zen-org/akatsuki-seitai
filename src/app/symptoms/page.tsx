import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "対応症状一覧",
  description:
    "楓月整体院で対応している症状一覧。腰痛・首の痛み・肩こり・膝の痛み・股関節痛など。仙台市泉区。",
};

export default function SymptomsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "対応症状一覧", href: "/symptoms" },
        ]}
      />
      <h1 className="text-2xl font-bold">対応症状一覧</h1>
    </main>
  );
}
