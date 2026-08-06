import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { RecommendGrid } from "@/components/sections/RecommendGrid";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "推薦の声",
  description:
    "医師・理学療法士・同業施術家・地域事業者など、さまざまな分野の方から寄せられた整体院楓月-Akatsuki- 泉中央院への推薦をご紹介します。",
  alternates: {
    canonical: `${siteConfig.url}/recommend/`,
  },
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

export default function RecommendPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="RECOMMENDATION"
            ja="推薦の声"
            description="整体院 楓月では、一人ひとりのお悩みに丁寧に耳を傾け、身体の状態や生活背景を確認したうえで施術方針をご提案しています。こうした姿勢や日々の取り組みに対して、医療・介護・施術・スポーツ・美容など、さまざまな分野で活動する方々から推薦の言葉をいただきました。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "推薦の声", href: "/recommend" },
            ]}
          />

          <section className="pb-24">
            <RecommendGrid />
          </section>

          {/* 院としてのメッセージ */}
          <section className="pb-20">
            <div className="mx-auto max-w-3xl">
              <header className="ak-section-head">
                <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">MESSAGE</p>
                <h2 className="font-mincho text-[clamp(24px,2.8vw,38px)] font-normal leading-[1.45] tracking-[.14em]">
                  推薦の言葉を、日々の施術に生かしていきます
                </h2>
                <span className="ak-head-line" />
              </header>
              <div className="card-glass rounded-2xl p-7 text-sm leading-[2.1] text-text-light md:p-10">
                <p>
                  多くの方からいただいた言葉を励みに、これからも一人ひとりのお悩みに誠実に向き合い、分かりやすい説明と丁寧な施術を積み重ねてまいります。
                </p>
                <p className="mt-4">
                  推薦の言葉は施術結果を保証するものではありませんが、当院の考え方や人柄を知っていただく一つの参考としてご覧ください。
                </p>
              </div>
            </div>
          </section>

          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
