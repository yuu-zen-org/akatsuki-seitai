import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { SymptomsGrid } from "@/components/sections/SymptomsGrid";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "対応症状一覧",
  description:
    "楓月整体院が対応する症状一覧。腰痛・首の痛み・肩こり・膝の痛み・股関節痛など、根本から改善を目指します。",
  alternates: { canonical: "/symptoms/" },
};

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

          <div className="mb-24 rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center">
            <p className="font-mincho text-xl leading-[1.8]">
              上記以外のお悩みもお気軽にご相談ください。<br />
              まずはカウンセリングで、お身体の状態を丁寧に確認します。
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-white"
            >
              無料相談・ご予約はこちら
            </Link>
          </div>

          <CtaSection />
        </div>
      </div>
    </main>
  );
}
