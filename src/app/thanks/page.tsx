import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせを受け付けました",
  robots: { index: false },
};

export default function ThanksPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2] flex min-h-[70vh] items-center">
        <div className="mx-auto w-[min(calc(100%-2rem),600px)] py-20 text-center">
          <p className="font-mincho text-5xl text-primary/30" aria-hidden="true">✦</p>

          <h1 className="mt-6 font-mincho text-[clamp(24px,3vw,36px)] font-normal leading-[1.5] tracking-[.1em]">
            お問い合わせを<br />受け付けました
          </h1>

          <div className="my-8 mx-auto h-px w-12 bg-primary" />

          <p className="text-sm leading-[2.2] text-text-light">
            この度はお問い合わせいただきありがとうございます。<br />
            確認メールをお送りしましたのでご確認ください。<br />
            内容を確認の上、2営業日以内にご連絡いたします。
          </p>

          <div className="mt-4 rounded-xl bg-[#f7f3ee] px-6 py-4 text-[12px] text-text-muted">
            お急ぎの場合はお電話にてご連絡ください。
            <a href={siteConfig.contact.phoneHref} className="ml-2 font-bold text-primary-dark">
              {siteConfig.contact.phone}
            </a>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex min-h-[52px] items-center gap-2 rounded-[13px] border border-border-light bg-white/80 px-8 font-bold text-primary-dark transition-opacity hover:opacity-70"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
