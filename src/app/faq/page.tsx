import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faq";
import { generateFAQPageJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "楓月整体院のよくある質問。予約方法・施術内容・料金・服装など、初めての方が気になるポイントをまとめました。",
};

const categories = ["予約", "施術", "来院", "アクセス", "料金"] as const;

export default function FAQPage() {
  return (
    <main className="page-bg">
      <JsonLd data={generateFAQPageJsonLd(faqs)} />
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="FAQ"
            ja="よくあるご質問"
            description="初めての方からよくいただくご質問をまとめました。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "よくあるご質問", href: "/faq" },
            ]}
          />
        </div>

        <div className="mx-auto w-[min(calc(100%-2rem),61rem)] pb-24">
          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} className="mb-12">
                <h2 className="mb-5 flex items-center gap-3 font-mincho text-xl tracking-[.1em]">
                  <span className="h-px flex-1 bg-border" />
                  {cat}
                  <span className="h-px flex-1 bg-border" />
                </h2>
                <FAQAccordion faqs={items} />
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
