import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  IconVisa, IconMastercard, IconJcb, IconAmex,
  IconRakutenpay, IconPaypay, IconDbarai, IconAupay,
} from "@/components/ui/PaymentIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "料金",
  description:
    "楓月整体院の料金案内。初回限定キャンペーン3,278円（税込）。仙台市泉区で腰痛・肩こり・首の痛みにお悩みの方はお気軽にご相談ください。",
  alternates: { canonical: "/price/" },
};

const relatedPages: RelatedPage[] = [
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
    href: "/access",
    en: "ACCESS",
    ja: "アクセス",
    desc: "仙台市泉区泉中央。泉中央駅より徒歩6分。無料駐車場あり。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C11.582 3 8 6.582 8 11c0 7 8 18 8 18s8-11 8-18c0-4.418-3.582-8-8-8Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function PricePage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="PRICE"
            ja="料金"
            description="明確な料金体系で、安心してお越しいただけます。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "料金", href: "/price" },
            ]}
          />
        </div>

        {/* ── 初回キャンペーン ── 左：テキスト 右：写真 */}
        <section className="py-10 md:py-16 pb-16 md:pb-24">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="inline-block rounded-full bg-primary px-4 py-1 text-[11px] font-bold tracking-[.18em] text-white">
                  FIRST VISIT CAMPAIGN
                </span>
                <p className="mt-5 font-mincho text-[15px] tracking-[.06em] text-text-muted">
                  初回限定キャンペーン
                </p>
                <div className="mt-2 flex items-end gap-3 flex-wrap">
                  <p className="font-mincho text-[clamp(64px,10vw,96px)] leading-none tracking-tight text-primary-dark">
                    3,278
                  </p>
                  <p className="mb-3 font-mincho text-2xl text-text-light">円</p>
                  <p className="mb-3 text-sm text-text-muted">税込</p>
                  <span className="mb-3 inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                    52% OFF
                  </span>
                </div>

                <div className="mt-6 space-y-3 border-t border-border-light pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">初診料（カウンセリング・検査含む）</span>
                    <span className="font-bold">2,000円</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light">施術料（通常価格）</span>
                    <span className="font-bold">6,900円</span>
                  </div>
                  <div className="flex justify-between border-t border-border-light pt-3 text-sm">
                    <span className="font-bold text-primary">初回キャンペーン合計</span>
                    <span className="font-bold text-primary">3,278円（税込）</span>
                  </div>
                </div>

                <p className="mt-4 text-[12px] text-text-muted">
                  ※ 初めてご来院の方のみ。1日2名様限定。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center rounded-[13px] bg-[#06C755] px-6 font-bold text-white"
                  >
                    LINE予約
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-[13px] bg-gradient-to-br from-[#f39a3e] to-[#e77a22] px-6 font-bold text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4H16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.25V2.75A.75.75 0 0 1 5.75 2ZM4 7.5h12v8.5H4V7.5Z" clipRule="evenodd" />
                    </svg>
                    WEBご予約はこちら
                  </Link>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-[13px] border border-border-light bg-white/80 px-6 font-bold text-primary-dark"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.02 13.02 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                    </svg>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* 写真 1 — スマホ非表示 */}
              <div className="hidden lg:block relative h-[420px] overflow-hidden rounded-[2rem] lg:h-[520px]">
                <Image
                  src="/images/top/sejutsu-01.jpg"
                  alt="施術の様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 通常料金 ── フルワイド背景 + テキスト */}
        <section className="relative py-24 overflow-hidden">
          {/* 写真 2：背景 */}
          <div className="absolute inset-0">
            <Image
              src="/images/price/normal-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#2a1e14]/60" />
          </div>

          <div className="relative mx-auto w-[min(calc(100%-2rem),1260px)]">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold tracking-[.22em] text-primary/80">2回目以降 通常料金</p>
              <div className="mt-3 flex items-end gap-2">
                <p className="font-mincho text-[clamp(56px,8vw,80px)] leading-none text-white">
                  6,900
                </p>
                <p className="mb-2 font-mincho text-2xl text-white/70">円</p>
                <p className="mb-2 text-sm text-white/50">税込</p>
              </div>
              <div className="mt-6 border-t border-white/20 pt-6 space-y-2">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-primary">›</span>初回（カウンセリング含む）：約60分
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-primary">›</span>2回目以降：約30〜40分
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-primary">›</span>完全予約制・プライベート個室
                </div>
              </div>
            </div>
          </div>
        </section>

{/* ── お支払い ── */}
        <section className="py-12 md:pb-20">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <div className="border-t border-border-light pt-10 md:pt-14">
              <p className="mb-10 text-[11px] font-bold tracking-[.22em] text-text-muted">PAYMENT</p>

              <div className="grid gap-10 sm:grid-cols-3">
                {/* 現金 */}
                <div>
                  <p className="mb-4 text-sm font-bold">現金</p>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
                      <rect width="56" height="36" rx="5" fill="#4a4a4a" />
                      <rect x="8" y="10" width="40" height="16" rx="2" fill="#6b6b6b" />
                      <rect x="14" y="14" width="10" height="8" rx="1" fill="#f5d76e" />
                      <circle cx="38" cy="18" r="5" fill="none" stroke="#f5d76e" strokeWidth="1.5" />
                    </svg>
                    <p className="text-[12px] text-text-muted">お釣りのご用意あり</p>
                  </div>
                </div>

                {/* クレジットカード */}
                <div>
                  <p className="mb-4 text-sm font-bold">クレジットカード</p>
                  <div className="flex flex-wrap gap-2">
                    <IconVisa />
                    <IconMastercard />
                    <IconJcb />
                    <IconAmex />
                  </div>
                </div>

                {/* 電子マネー・QR */}
                <div>
                  <p className="mb-4 text-sm font-bold">電子マネー・QR決済</p>
                  <div className="flex flex-wrap gap-2">
                    <IconRakutenpay />
                    <IconPaypay />
                    <IconDbarai />
                    <IconAupay />
                  </div>
                </div>
              </div>

              <p className="mt-10 text-[12px] text-text-muted">
                ※ 対応決済方法は予告なく変更になる場合があります。詳しくはお問い合わせください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連ページ ── */}
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
