import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { faqs } from "@/data/faq";
import { generateFAQPageJsonLd } from "@/lib/json-ld";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "楓月整体院のよくある質問。予約方法・施術内容・料金・服装など、初めての方が気になるポイントをまとめました。",
  alternates: { canonical: "/faq/" },
};

const categories = ["予約", "施術", "来院", "アクセス", "料金"] as const;

const relatedPages: RelatedPage[] = [
  {
    href: "/first",
    en: "FLOW",
    ja: "初めての方へ",
    desc: "施術の流れ・当院の特徴・他院との違いをご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16h10M17 12l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/price",
    en: "PRICE",
    ja: "料金",
    desc: "初回限定3,278円（税込）。明確な料金体系で安心してお越しいただけます。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20l3-8 3 5 2-3 3 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/voice",
    en: "VOICE",
    ja: "患者様の声",
    desc: "実際にご来院された患者様の体験談・動画インタビューをご覧いただけます。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 8h22v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 8l11 9 11-9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/staff",
    en: "STAFF",
    ja: "スタッフ紹介",
    desc: "施術を担当するスタッフの経歴・資格・想いをご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/access",
    en: "ACCESS",
    ja: "院情報・アクセス",
    desc: "仙台市泉区泉中央。泉中央駅より徒歩6分。無料駐車場あり。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C11.582 3 8 6.582 8 11c0 7 8 18 8 18s8-11 8-18c0-4.418-3.582-8-8-8Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

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

        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
