import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="pb-24">
      <div className="relative overflow-hidden rounded-[15px] bg-white shadow-[0_8px_40px_rgba(76,55,39,0.12)]">
        <div className="grid lg:grid-cols-[58%_42%]">
          {/* 左: テキスト + ボタン */}
          <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12">
            <h3 className="font-mincho text-[clamp(22px,2.8vw,32px)] leading-[1.55]">
              あなたの痛み、
              <br />
              一人で我慢しないでください。
            </h3>
            <span className="mt-4 mb-5 block h-px w-12 bg-primary" />
            <p className="mb-7 text-[13px] leading-[1.9] text-text-light">
              根本改善を目指し、あなたに合った施術をご提案します。
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#06C755] px-5 font-bold text-white"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0" aria-hidden="true">
                  <path d="M10 2C5.582 2 2 5.134 2 9c0 2.458 1.27 4.641 3.25 6.092-.115.415-.406 1.509-.47 1.749-.077.295.11.29.231.212.095-.062 1.508-1.021 2.118-1.434.489.07.993.106 1.871.106 4.418 0 8-3.134 8-7s-3.582-7-8-7Z" />
                </svg>
                LINEで予約
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gradient-to-br from-[#f39a3e] to-[#e77a22] px-5 font-bold text-white"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4H16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.25V2.75A.75.75 0 0 1 5.75 2ZM4 7.5h12v8.5H4V7.5Z" clipRule="evenodd" />
                </svg>
                WEBで予約
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-border-light bg-white/80 px-5 font-bold text-primary-dark"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.02 13.02 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* 右: 画像パネル（白グラデ透過） */}
          <div className="relative hidden lg:block min-h-[260px]">
            <Image
              src="/images/top/flow-cta.jpg"
              alt=""
              fill
              className="object-cover object-left"
              sizes="42vw"
              aria-hidden="true"
            />
            {/* 左端から白にフェード */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
