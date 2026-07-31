import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { recommends } from "@/data/recommends";
import { siteConfig } from "@/lib/site-config";
import { RECOMMEND_CATEGORIES } from "@/types";
import type { RecommendCategory } from "@/types";

const CATEGORY_ACCENT: Record<RecommendCategory, string> = {
  "医師・大学関係者":               "#4a90b8",
  "理学療法士・柔道整復師・鍼灸師": "#4a9b6f",
  "整体院・施術院経営者":           "#E08A2A",
  "スポーツ・美容・介護関係者":     "#8B6BA8",
  "地域事業者・利用者":             "#9B8A7A",
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

  const accent = CATEGORY_ACCENT[rec.category];

  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">

          {/* パンくず */}
          <nav aria-label="パンくずリスト" className="pt-8 pb-4 text-xs text-text-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-primary">ホーム</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/recommend" className="hover:text-primary">推薦の声</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-text-light">{rec.name}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl pb-24">

            {/* カテゴリーストライプ */}
            <div className="mb-8 h-1 w-16 rounded-full" style={{ background: accent }} />

            {/* プロフィール */}
            <div className="card-glass mb-8 flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-start md:p-10">
              {/* 写真 */}
              <div className="shrink-0">
                {rec.image ? (
                  <div className="relative h-32 w-32 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
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
                  <div
                    className="grid h-32 w-32 place-items-center rounded-2xl sm:h-40 sm:w-40"
                    style={{ background: "#f0e8df" }}
                  >
                    <span className="font-mincho text-2xl text-[#c4956a]">
                      {rec.name.replace(/\s/g, "").slice(0, 2)}
                    </span>
                  </div>
                )}
              </div>

              {/* 情報 */}
              <div>
                <span
                  className="inline-block rounded-full px-3 py-0.5 text-xs font-bold"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  {rec.category}
                </span>
                {rec.organization && (
                  <p className="mt-2 text-sm text-text-muted">{rec.organization}</p>
                )}
                <p className="mt-1 font-mincho text-2xl tracking-[.08em]">{rec.name}</p>
                <p className="mt-0.5 text-xs text-text-muted">{rec.nameKana}</p>
                <p className="mt-2 text-sm text-text-light">{rec.role}</p>
              </div>
            </div>

            {/* 推薦タイトル */}
            <div
              className="mb-6 rounded-2xl p-6"
              style={{ background: `${accent}10`, borderLeft: `4px solid ${accent}` }}
            >
              <p className="font-mincho text-lg leading-[1.7] text-text" style={{ color: accent }}>
                「{rec.title}」
              </p>
            </div>

            {/* 要約 */}
            <div className="card-glass mb-8 rounded-2xl p-7 md:p-10">
              <h2 className="mb-4 text-sm font-bold tracking-[.1em] text-text-muted">推薦内容</h2>
              <p className="text-sm leading-[2.1] text-text-light">{rec.summary}</p>

              {rec.fullText && (
                <>
                  <div className="my-6 border-t border-border-light" />
                  <h2 className="mb-4 text-sm font-bold tracking-[.1em] text-text-muted">推薦文（原文）</h2>
                  <blockquote className="text-sm leading-[2.1] text-text-light">
                    {rec.fullText}
                  </blockquote>
                </>
              )}
            </div>

            {/* 免責 */}
            <p className="mb-10 text-xs leading-[1.9] text-text-muted">
              ※掲載内容はご本人から寄せられた推薦文をもとに、内容を損なわない範囲で読みやすく編集・要約しています。
              個人の感想であり、施術の結果や効果を保証するものではありません。
            </p>

            {/* ナビゲーション */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Link
                href="/recommend"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:opacity-70"
              >
                ← 推薦一覧へ戻る
              </Link>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-bold text-white"
                >
                  WEBご予約はこちら
                </Link>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-light bg-white/80 px-7 text-sm font-bold text-primary-dark"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
