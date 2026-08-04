import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="overflow-hidden" id="top">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1260px)] gap-6 py-6 lg:min-h-[min(760px,calc(100svh-72px))] lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-8">
        {/* スマホ: FV画像 + テキスト全オーバーレイ */}
        <div className="order-first lg:hidden">
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
              <span className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white">
                {siteConfig.business.access}
              </span>
              <span className="text-sm font-bold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                仙台市泉区で根本改善を目指す整体院
              </span>
            </div>
            {/* 下部黒グラデ + テキストオーバーレイ */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-6 pb-7 pt-14" aria-hidden="true">
              <p className="text-[26px] font-bold leading-[.92] tracking-[.13em] text-white">
                SEITAIIN
                <br />
                AKATSUKI
              </p>
              <p className="mt-3 font-mincho text-[22px] leading-[1.5] tracking-[.06em] text-white">
                その痛みを、
                <br />
                <span className="text-[#FFD580]">&ldquo;その場しのぎ&rdquo;</span>で
                <br />
                終わらせない。
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 order-2 lg:order-1">
          {/* バッジ: PCのみ */}
          <div className="mb-5 hidden lg:flex flex-wrap items-center gap-4 anim-hero-1">
            <span className="rounded-full bg-primary px-6 py-4 text-xl font-bold text-white md:text-2xl">
              {siteConfig.business.access}
            </span>
            <span className="font-bold">仙台市泉区で根本改善を目指す整体院</span>
          </div>

          <p
            className="mb-4 hidden lg:block text-[clamp(52px,6.8vw,100px)] font-bold leading-[.92] tracking-[.13em] text-white anim-hero-2"
            aria-hidden="true"
          >
            SEITAIIN
            <br />
            AKATSUKI
          </p>

          <h1 className="hidden lg:block font-mincho text-[clamp(36px,3.9vw,58px)] leading-[1.1] tracking-[.08em] anim-hero-3">
            その痛みを、
            <br />
            <span className="text-primary">&ldquo;その場しのぎ&rdquo;</span>で
            <br />
            終わらせない。
          </h1>
          {/* スマホ用SEOテキスト（非表示） */}
          <h1 className="sr-only lg:hidden">
            楓月整体院 ― その痛みを、その場しのぎで終わらせない。
          </h1>

          <p className="mt-4 hidden text-base leading-8 text-text-muted lg:block anim-hero-4">
            痛みの原因を丁寧に見極め、
            <br />
            根本から整えることで、再発しにくい身体づくりをサポートします。
          </p>

          <div className="mt-5 hidden sm:flex sm:flex-row gap-2 lg:gap-3 anim-hero-5" id="reservation">
            <Link
              href="/contact"
              className="flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 text-sm font-bold text-white lg:min-h-16 lg:gap-3 lg:px-8 lg:text-base"
            >
              <svg
                aria-hidden="true"
                className="size-5 shrink-0 lg:size-7"
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
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center whitespace-nowrap rounded-full bg-[#06C755] px-5 text-sm font-bold text-white lg:min-h-16 lg:px-8 lg:text-base"
            >
              LINE予約
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/85 px-5 text-sm font-bold text-primary-dark lg:min-h-16 lg:gap-3 lg:px-8 lg:text-base"
            >
              <svg
                aria-hidden="true"
                className="size-5 shrink-0 lg:size-7"
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
              <span>電話予約　{siteConfig.contact.phone}</span>
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
