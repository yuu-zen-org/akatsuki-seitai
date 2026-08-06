import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { generateMedicalWebPageJsonLd } from "@/lib/json-ld";
import { symptoms } from "@/data/symptoms";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = symptoms.find((s) => s.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name}の改善`,
    description: `${s.description}仙台市泉区の整体院楓月-Akatsuki- 泉中央院にお任せください。`,
    alternates: { canonical: `${siteConfig.url}/symptoms/${slug}/` },
  };
}

const relatedPages: RelatedPage[] = [
  {
    href: "/price",
    en: "PRICE",
    ja: "料金",
    desc: "初回限定キャンペーン2,980円。料金・施術時間の詳細はこちら。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 9v2m0 10v2M11 16h10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M13 13a3 3 0 1 1 6 0c0 2-3 3-3 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/first",
    en: "FLOW",
    ja: "施術の流れ",
    desc: "初回カウンセリングから施術・アフターケアまで、来院の流れをご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16h10M17 12l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
    href: "/recommend",
    en: "RECOMMEND",
    ja: "推薦の声",
    desc: "医師・理学療法士など専門家からの推薦をご紹介しています。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/contact",
    en: "CONTACT",
    ja: "ご予約・お問い合わせ",
    desc: "WEBフォームまたはお電話にてご予約いただけます。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect height="20" rx="2" stroke="currentColor" strokeWidth="1.5" width="22" x="5" y="7" />
        <path d="M5 12l11 8 11-8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default async function SymptomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = symptoms.find((s) => s.slug === slug);
  if (!s) notFound();

  return (
    <main className="page-bg">
      <JsonLd data={generateMedicalWebPageJsonLd(s)} />
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="SYMPTOMS"
            ja={s.name}
            description={s.description}
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "対応症状", href: "/symptoms" },
              { name: s.name, href: `/symptoms/${s.slug}` },
            ]}
          />

          {/* ── ヒーロー: 左チェックリスト・右画像 ── */}
          <section className="pb-20">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-5 text-[11px] font-bold tracking-[.22em] text-primary">
                  DOES THIS SOUND FAMILIAR?
                </p>
                <h2 className="mb-7 font-mincho text-[clamp(22px,2.8vw,32px)] leading-[1.5] tracking-[.06em]">
                  こんなお悩み、<br />ありませんか？
                </h2>
                <ul className="space-y-3">
                  {s.checks?.map((check) => (
                    <li key={check} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">✓</span>
                      <span className="text-sm leading-[1.9] text-text-light">{check}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-[13px] bg-gradient-to-br from-[#f39a3e] to-[#e77a22] px-7 font-bold text-white"
                  >
                    まずはご相談ください
                  </Link>
                </div>
              </div>

              {/* 写真1 */}
              {s.heroImage && (
                <div className="relative h-[400px] overflow-hidden rounded-[2rem] lg:h-[480px]">
                  <Image
                    src={s.heroImage}
                    alt={`${s.name}の施術`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>
          </section>

          {/* ── 当院のアプローチ: 左画像・右テキスト ── */}
          <section className="pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

              {/* 写真2 */}
              {s.subImage && (
                <div className="relative h-[340px] overflow-hidden rounded-[2rem] lg:order-first lg:h-[420px]">
                  <Image
                    src={s.subImage}
                    alt="施術の様子"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              <div>
                <p className="mb-4 text-[11px] font-bold tracking-[.22em] text-primary">OUR APPROACH</p>
                <h2 className="mb-6 font-mincho text-[clamp(20px,2.5vw,30px)] leading-[1.55] tracking-[.06em]">
                  整体院楓月-Akatsuki- 泉中央院の<br />アプローチ
                </h2>
                <p className="text-[14px] leading-[2.2] text-text-light">{s.approach}</p>

                <div className="mt-8 border-t border-border-light pt-7 space-y-3">
                  {[
                    "バキバキしない、やさしい手技",
                    "原因を特定する丁寧なカウンセリング",
                    "再発を防ぐセルフケア指導",
                    "完全予約制・個室でプライベートに",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-text-light">
                      <span className="h-px w-4 shrink-0 bg-primary/50" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 関連ページ ── */}
          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
