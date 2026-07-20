import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="overflow-hidden" id="top">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1260px)] gap-8 py-10 lg:min-h-[760px] lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-14">
        {/* スマホ: 縦長画像＋バッジをオーバーレイ */}
        <div className="order-first -mb-36 lg:hidden">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image
              src="/images/top/fv.jpg"
              alt="整体施術の様子"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            {/* 上部グラデーション */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 to-transparent" />
            {/* バッジ */}
            <div className="absolute top-5 left-4 right-4 z-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary px-5 py-3 text-base font-bold text-white">
                {siteConfig.business.access}
              </span>
              <span className="font-bold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                仙台市泉区で根本改善を目指す整体院
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 order-2 lg:order-1">
          {/* バッジ: PCのみ */}
          <div className="mb-8 hidden lg:flex flex-wrap items-center gap-5">
            <span className="rounded-full bg-primary px-6 py-4 text-xl font-bold text-white md:text-2xl">
              {siteConfig.business.access}
            </span>
            <span className="font-bold">仙台市泉区で根本改善を目指す整体院</span>
          </div>

          <p
            className="mb-7 text-[clamp(64px,8.33vw,120px)] font-bold leading-[.92] tracking-[.13em] text-white"
            aria-hidden="true"
          >
            SEITAIIN
            <br />
            AKATSUKI
          </p>

          <h1 className="font-mincho text-[clamp(40px,4.44vw,64px)] leading-[1.1] tracking-[.08em]">
            その痛みを、
            <br />
            <span className="text-primary">&ldquo;その場しのぎ&rdquo;</span>で
            <br />
            終わらせない。
          </h1>

          <p className="mt-7 hidden text-base leading-8 text-text-muted lg:block">
            痛みの原因を丁寧に見極め、
            <br />
            根本から整えることで、再発しにくい身体づくりをサポートします。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" id="reservation">
            <Link
              href="/contact"
              className="flex min-h-16 items-center justify-center gap-3 rounded-full bg-primary px-8 font-bold text-white"
            >
              <svg
                aria-hidden="true"
                className="size-7"
                fill="none"
                viewBox="0 0 32 32"
              >
                <rect
                  height="20"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="22"
                  x="5"
                  y="7"
                />
                <path
                  d="M10 4v6M22 4v6M5 12h22M10 17h3M16 17h3M22 17h1M10 22h3M16 22h3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
              WEBご予約はこちら
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="flex min-h-16 items-center justify-center gap-3 rounded-full bg-white/85 px-8 font-bold text-primary-dark"
            >
              <svg
                aria-hidden="true"
                className="size-7"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  d="M9 5 5 9c1 9 9 17 18 18l4-4-6-6-4 3c-3-1-5-3-6-6l3-4-5-5Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span>
                電話予約はこちら
                <br />
                <b>{siteConfig.contact.phone}</b>
              </span>
            </a>
          </div>
        </div>

        {/* デスクトップ: 右カラムに画像 */}
        <div className="hidden items-center justify-center lg:order-2 lg:flex lg:min-h-[680px]">
          <div className="hero-ellipse relative h-[520px] w-full max-w-[650px] shadow-2xl lg:h-[650px]">
            <Image
              src="/images/top/fv.jpg"
              alt="整体施術の様子"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
