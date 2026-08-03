import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ご予約・お問い合わせ",
  description:
    "楓月整体院のご予約・お問い合わせ。WEBフォームまたはお電話にてご予約いただけます。仙台市泉区。",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="CONTACT"
            ja="ご予約・お問い合わせ"
            description="お気軽にご連絡ください。2営業日以内にご返信いたします。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "ご予約・お問い合わせ", href: "/contact" },
            ]}
          />

          <div className="pb-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

              {/* フォーム */}
              <div>
                <p className="mb-8 text-[11px] font-bold tracking-[.2em] text-text-muted">WEB FORM</p>
                <ContactForm />
              </div>

              {/* サイドバー：電話・アクセス */}
              <aside className="space-y-6 lg:sticky lg:top-24">
                {/* 予約方法 */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    border: "1px solid rgba(86,68,53,0.10)",
                    boxShadow: "0 4px 20px rgba(76,55,39,0.05)",
                  }}
                >
                  <p className="mb-4 text-[11px] font-bold tracking-[.2em] text-text-muted">RESERVATION</p>

                  {/* 電話 */}
                  <p className="mb-1 text-[11px] font-bold text-text-muted">お電話</p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="block font-mincho text-[26px] tracking-[.04em] text-primary-dark hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <div className="mt-1 space-y-0.5 text-[12px] text-text-muted">
                    <p>受付時間：10:00〜19:00</p>
                    <p>不定休・土日祝も営業</p>
                  </div>

                  <div className="my-5 h-px bg-border-light" />

                  {/* LINE */}
                  <p className="mb-3 text-[11px] font-bold text-text-muted">LINE</p>
                  <a
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 font-bold text-white transition-opacity hover:opacity-85"
                    style={{ background: "#06C755" }}
                  >
                    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    LINEで予約・お問い合わせ
                  </a>
                  <p className="mt-2 text-[11px] text-text-muted">
                    ID：{siteConfig.contact.lineId}
                  </p>
                </div>

                {/* アクセス */}
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    border: "1px solid rgba(86,68,53,0.10)",
                    boxShadow: "0 4px 20px rgba(76,55,39,0.05)",
                  }}
                >
                  {/* Google Maps */}
                  <div className="relative h-[220px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.312!2d140.8808!3d38.3325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a27b4e2fa1a3f%3A0x0!2z5a6H5Y-k5Zut5pW05LqM5Lit5LmM5Yy655Sw5rOo!5e0!3m2!1sja!2sjp!4v1700000000000"
                      className="h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="楓月整体院 泉中央院 地図"
                    />
                  </div>

                  <div
                    className="p-7"
                    style={{ background: "rgba(255,255,255,0.82)" }}
                  >
                    <p className="mb-3 text-[11px] font-bold tracking-[.2em] text-text-muted">ACCESS</p>
                    <p className="text-sm leading-[1.9] text-text-light">
                      {siteConfig.address.full}
                    </p>
                    <div className="mt-3 space-y-1 text-[12px] text-text-muted">
                      <p>泉中央駅より徒歩6分</p>
                      <p>八乙女駅より徒歩15分</p>
                      <p>無料駐車場あり</p>
                    </div>
                  </div>
                </div>

                {/* 注意事項 */}
                <p className="text-[11px] leading-[1.9] text-text-muted">
                  ※ WEBフォームからのご予約は予約確定ではありません。
                  内容確認後、当院よりご連絡いたします。<br />
                  ※ 当日のご予約はお電話にて承ります。
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
