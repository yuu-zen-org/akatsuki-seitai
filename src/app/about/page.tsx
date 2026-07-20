import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "院長紹介",
  description:
    "楓月整体院の院長紹介。経歴・資格・施術への想いをお伝えします。仙台市泉区で丁寧な施術を心がけています。",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "院長紹介", href: "/about" },
        ]}
      />
      <h1 className="text-2xl font-bold">院長紹介</h1>
    </main>
  );
}
