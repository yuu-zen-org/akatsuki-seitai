import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { VoiceTabs } from "@/components/sections/VoiceTabs";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";

export const metadata: Metadata = {
  title: "患者様の声",
  description:
    "整体院楓月-Akatsuki- 泉中央院に通われた患者様の声をご紹介します。腰痛・膝痛・頭痛・歩行困難など、さまざまな症状で根本改善を実感された方の動画インタビューと体験談を掲載しています。",
  alternates: { canonical: "/voice/" },
};

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
    href: "/recommend",
    en: "RECOMMEND",
    ja: "推薦の声",
    desc: "医療・介護・施術・地域など各分野の専門家から寄せられた推薦をご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 5l2.764 8.51H27l-7.118 5.17 2.764 8.51L16 22.01l-6.646 5.18 2.764-8.51L6 13.51h8.236L16 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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

export default function VoicePage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="VOICE"
            ja="患者様の声"
            description="根本改善を実感されたお客様からのリアルな声をご紹介します。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "患者様の声", href: "/voice" },
            ]}
          />

          <section className="pb-20">
            <VoiceTabs />
          </section>

          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
