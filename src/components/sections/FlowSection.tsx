import Image from "next/image";
import Link from "next/link";
import { flowSteps } from "@/data/flow";
import { FlowCarousel } from "./FlowCarousel";

export function FlowSection() {
  return (
    <section className="py-[100px] max-md:py-[72px]" id="flow">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <header className="ak-section-head">
          <div className="mx-auto mb-3 h-[96px] w-[96px]">
            <Image
              src="/images/top/nagare.png"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h2 className="font-mincho text-[clamp(38px,4vw,58px)] font-normal leading-[1.45] tracking-[.14em]">
            施術の流れ
          </h2>
          <span className="ak-head-line" />
          <p className="text-base leading-8 text-text-light">
            初めての方でも安心して受けていただけるよう、丁寧にご案内いたします。
          </p>
        </header>

        {/* デスクトップ: グリッド表示 */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-5">
          {flowSteps.map((step) => (
            <article key={step.step} className="ak-flow-card">
              <span className="absolute left-4 top-4 z-10 grid h-[34px] w-[34px] place-items-center rounded-full bg-[#f4d2af] font-mincho text-lg text-[#d9741f]">
                {step.step}
              </span>
              <div className="relative h-[140px] overflow-hidden rounded-[10px]">
                <Image
                  src={step.imagePath}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <h3 className="mt-3 font-mincho text-lg leading-[1.6]">{step.title}</h3>
              <p className="mt-3 text-xs leading-8 text-text-light">{step.description}</p>
            </article>
          ))}
        </div>

        {/* モバイル/タブレット: 横スクロール */}
        <div className="lg:hidden">
          <FlowCarousel />
        </div>

        <p className="my-[26px] text-center text-[13px] text-text-light">
          ※ 所要時間は初回で約60分、2回目以降は約30〜40分です。
        </p>

        <div className="grid overflow-hidden rounded-[15px] border border-border-light bg-gradient-to-r from-[#f7eee5] to-[#f1e4d8] lg:grid-cols-[58%_42%] max-[720px]:grid-cols-1">
          <div className="flex items-center gap-[26px] p-8 lg:p-[32px_38px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:p-[28px_20px]">
            <div className="grid h-[94px] w-[94px] flex-shrink-0 place-items-center rounded-full bg-white text-[42px] text-primary max-[720px]:h-[72px] max-[720px]:w-[72px]">
              ♡
            </div>
            <div>
              <h3 className="font-mincho text-[27px] font-normal">痛みのない、快適な毎日へ</h3>
              <span className="mt-[13px] mb-[18px] block h-px w-14 bg-primary" />
              <p className="text-[13px] leading-8 text-text-light">
                一人ひとりのお悩みに寄り添い、根本改善を目指します。
                <br />
                どんな小さな不調でも、お気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="mt-[18px] inline-flex min-h-[58px] items-center gap-3 rounded-[13px] bg-gradient-to-br from-[#f39a3e] to-[#e77a22] px-[30px] font-bold text-white"
              >
                <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 32 32">
                  <rect height="20" rx="2" stroke="currentColor" strokeWidth="2" width="22" x="5" y="7" />
                  <path d="M10 4v6M22 4v6M5 12h22M10 17h3M16 17h3M22 17h1M10 22h3M16 22h3" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                </svg>
                ご予約・お問い合わせはこちら　›
              </Link>
            </div>
          </div>
          <div
            className="min-h-[250px] bg-cover bg-center max-[720px]:min-h-[210px]"
            role="img"
            aria-label="明るく清潔な施術室"
            style={{ backgroundImage: "url(/images/top/flow-cta.jpg)" }}
          />
        </div>
      </div>
    </section>
  );
}
