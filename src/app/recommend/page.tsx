import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaSection } from "@/components/sections/CtaSection";
import { RecommendGrid } from "@/components/sections/RecommendGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "推薦の声",
  description:
    "医師・理学療法士・同業施術家・地域事業者など、さまざまな分野の方から寄せられた楓月整体院への推薦をご紹介します。",
  alternates: {
    canonical: `${siteConfig.url}/recommend/`,
  },
};

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

          <CtaSection />
        </div>
      </div>
    </main>
  );
}
