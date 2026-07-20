import Image from "next/image";
import Link from "next/link";
import { VoiceCarousel } from "./VoiceCarousel";

export function VoiceSection() {
  return (
    <section className="py-[100px] max-md:py-[72px]" id="voice">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <header className="ak-section-head">
          <div className="mx-auto mb-3 h-[96px] w-[96px]">
            <Image
              src="/images/top/voice.png"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h2 className="font-mincho text-[clamp(38px,4vw,58px)] font-normal leading-[1.45] tracking-[.14em]">
            患者様の声
          </h2>
          <span className="ak-head-line" />
          <p className="text-base leading-8 text-text-light">
            実際に施術を受けられた方から、嬉しいお声をいただいています。
            <br />
            一人ひとりのお悩みに寄り添い、丁寧にサポートいたします。
          </p>
        </header>

        <VoiceCarousel />

        <div className="mt-7 text-center">
          <Link
            href="/voice"
            className="inline-flex min-h-[58px] items-center rounded-[13px] border border-border-light bg-white/70 px-7 font-bold"
          >
            患者様の声一覧を見る　›
          </Link>
        </div>
      </div>
    </section>
  );
}
