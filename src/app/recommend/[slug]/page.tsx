import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
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
              <p className="mb-4 font-mincho text-[11px] font-bold tracking-[.2em] text-text-muted" aria-hidden="true">
                RECOMMENDATION
              </p>
              <p className="mb-8 font-mincho text-[24px] leading-[1.75] tracking-[.06em] text-primary-dark md:text-[26px]">
                「{rec.title}」
              </p>

              <div
                className="relative mb-5 overflow-hidden rounded-[1.5rem] p-8 md:p-10"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(86, 68, 53, 0.10)",
                  boxShadow: "0 8px 32px rgba(76, 55, 39, 0.06)",
                }}
              >
                <p className="absolute top-4 left-5 font-mincho text-[72px] leading-none text-primary/10 select-none" aria-hidden="true">「</p>
                <p className="absolute right-5 bottom-4 font-mincho text-[72px] leading-none text-primary/10 select-none" aria-hidden="true">」</p>

                <div className="relative px-4 py-8">
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
              </div>

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

          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
