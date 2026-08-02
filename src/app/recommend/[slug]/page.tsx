import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { CtaSection } from "@/components/sections/CtaSection";
import { recommends } from "@/data/recommends";
import { siteConfig } from "@/lib/site-config";
import type { RecommendCategory } from "@/types";

const CATEGORY_BADGE: Record<RecommendCategory, { bg: string; text: string }> = {
  "医師・大学関係者":               { bg: "#e8f0f5", text: "#2c5f7a" },
  "理学療法士・柔道整復師・鍼灸師": { bg: "#e5f0e8", text: "#2d5c35" },
  "整体院・施術院経営者":           { bg: "#fef5e4", text: "#8a5200" },
  "スポーツ・美容・介護関係者":     { bg: "#f2eaf8", text: "#5c3070" },
  "地域事業者・利用者":             { bg: "#f0ece5", text: "#5c4e40" },
};

export async function generateStaticParams() {
  return recommends.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rec = recommends.find((r) => r.slug === slug);
  if (!rec) return {};
  return {
    title: `${rec.name}様 推薦の声`,
    description: rec.summary,
    alternates: { canonical: `${siteConfig.url}/recommend/${slug}/` },
  };
}

export default async function RecommendDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rec = recommends.find((r) => r.slug === slug);
  if (!rec) notFound();

  const badge = CATEGORY_BADGE[rec.category];
  const initials = rec.name.replace(/\s/g, "").slice(0, 2);

  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">

          {/* パンくず */}
          <nav aria-label="パンくずリスト" className="pt-8 pb-10 text-xs text-text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">ホーム</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li><Link href="/recommend" className="hover:text-primary">推薦の声</Link></li>
              <li aria-hidden="true" className="text-border">›</li>
              <li className="text-text-light">{rec.name}</li>
            </ol>
          </nav>

          {/* ── 2カラムレイアウト ── */}
          <div className="mb-20 flex gap-10 max-md:flex-col md:items-start md:gap-14">

            {/* 左カラム：プロフィール */}
            <aside className="md:sticky md:top-8 md:w-[260px] md:flex-shrink-0">
              <div
                className="rounded-[1.75rem] p-8 text-center"
                style={{
                  background: "rgba(255, 248, 235, 0.78)",
                  border: "1px solid rgba(86, 68, 53, 0.10)",
                  boxShadow: "0 8px 32px rgba(76, 55, 39, 0.06)",
                }}
              >
                {/* 写真 */}
                <div className="mx-auto mb-5 h-[160px] w-[160px]">
                  {rec.image ? (
                    <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full shadow-[0_4px_24px_rgba(160,120,80,0.2)] ring-[4px] ring-white/90">
                      <Image
                        src={rec.image}
                        alt={rec.name}
                        fill
                        className="object-cover object-top"
                        sizes="160px"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="grid h-[160px] w-[160px] place-items-center rounded-full bg-[#f0e8df] shadow-[0_4px_24px_rgba(160,120,80,0.2)] ring-[4px] ring-white/90">
                      <span className="font-mincho text-4xl text-[#c4956a]">{initials}</span>
                    </div>
                  )}
                </div>

                {/* カテゴリー */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-[11px] font-bold"
                  style={{ background: badge.bg, color: badge.text }}
                >
                  {rec.category}
                </span>

                {/* 所属・氏名・読み・役職 */}
                {rec.organization && (
                  <p className="mt-4 text-[12px] leading-[1.7] text-text-muted">{rec.organization}</p>
                )}
                <p className="mt-2 font-mincho text-[22px] tracking-[.08em]">{rec.name} 様</p>
                <p className="mt-1 text-[11px] tracking-[.15em] text-text-muted">{rec.nameKana}</p>

                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border-light" />
                  <span className="text-[9px] text-primary/30">✦</span>
                  <div className="h-px flex-1 bg-border-light" />
                </div>

                <p className="text-[12px] text-text-light">{rec.role}</p>
              </div>
            </aside>

            {/* 右カラム：推薦内容 */}
            <div className="min-w-0 flex-1">
              {/* RECOMMENDATIONラベル + タイトル */}
              <p
                className="mb-4 font-mincho text-[11px] font-bold tracking-[.2em] text-text-muted"
                aria-hidden="true"
              >
                RECOMMENDATION
              </p>
              <p className="mb-8 font-mincho text-[24px] leading-[1.75] tracking-[.06em] text-primary-dark md:text-[26px]">
                「{rec.title}」
              </p>

              {/* 推薦内容ボックス */}
              <div
                className="mb-5 rounded-[1.5rem] p-8 md:p-10"
                style={{
                  background: "rgba(255, 248, 235, 0.78)",
                  border: "1px solid rgba(86, 68, 53, 0.10)",
                  boxShadow: "0 8px 32px rgba(76, 55, 39, 0.06)",
                }}
              >
                <p
                  className="mb-4 font-mincho text-[64px] leading-none text-primary/10 select-none"
                  aria-hidden="true"
                >
                  「
                </p>
                <p className="text-[14px] leading-[2.2] text-text-light">{rec.summary}</p>

                {rec.fullText && (
                  <>
                    <div className="my-8 flex items-center gap-4">
                      <div className="h-px flex-1 bg-border-light" />
                      <span className="text-[10px] text-primary/30">✦</span>
                      <div className="h-px flex-1 bg-border-light" />
                    </div>
                    <p className="mb-4 text-[11px] font-bold tracking-[.15em] text-text-muted">
                      推薦文（原文）
                    </p>
                    <blockquote className="text-[14px] leading-[2.2] text-text-light">
                      {rec.fullText}
                    </blockquote>
                  </>
                )}
              </div>

              {/* 免責 */}
              <p className="text-[11px] leading-[1.9] text-text-muted">
                ※掲載内容はご本人から寄せられた推薦文をもとに、内容を損なわない範囲で読みやすく編集・要約しています。個人の感想であり、施術の結果や効果を保証するものではありません。
              </p>
            </div>
          </div>

          {/* 一覧へ戻る */}
          <div className="mb-6 border-t border-border-light pt-8">
            <Link
              href="/recommend"
              className="text-sm font-bold text-text-light transition-opacity hover:opacity-60"
            >
              ← 推薦一覧へ戻る
            </Link>
          </div>

          <CtaSection />
        </div>
      </div>
    </main>
  );
}
