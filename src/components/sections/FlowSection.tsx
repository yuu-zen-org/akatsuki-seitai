import Image from "next/image";
import { flowSteps } from "@/data/flow";
import { FlowCarousel } from "./FlowCarousel";
import { CtaSection } from "./CtaSection";

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

        <CtaSection />
      </div>
    </section>
  );
}
