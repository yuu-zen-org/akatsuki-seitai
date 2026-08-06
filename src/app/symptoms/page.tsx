import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { SymptomsGrid } from "@/components/sections/SymptomsGrid";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "対応症状一覧",
  description:
    "整体院楓月-Akatsuki- 泉中央院が対応する症状一覧。腰痛・首の痛み・肩こり・膝の痛み・股関節痛など、根本から改善を目指します。",
  alternates: { canonical: "/symptoms/" },
};

const relatedPages: RelatedPage[] = [
  {
    href: "/first",
    en: "FIRST VISIT",
    ja: "初めての方へ",
    desc: "初めてご来院の方へ。施術の流れや院の特徴をご紹介します。",
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
    desc: "初回限定2,980円（税込）。明確な料金体系で安心してお越しいただけます。",
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
    href: "/faq",
    en: "FAQ",
    ja: "よくある質問",
    desc: "料金・施術内容・予約方法など、よく寄せられる疑問にお答えします。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13a3 3 0 1 1 3.5 2.958C15.672 16.28 15 17.066 15 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <circle cx="16" cy="22" r="1" fill="currentColor" />
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

export default function SymptomsPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="SYMPTOMS"
            ja="対応症状一覧"
            description="こんなお悩み、ありませんか？原因を見極め、根本から改善します。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "対応症状一覧", href: "/symptoms" },
            ]}
          />

          <SymptomsGrid symptoms={symptoms} />

          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
