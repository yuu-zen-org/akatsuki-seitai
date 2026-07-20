import Image from "next/image";
import Link from "next/link";
import { recommends } from "@/data/recommend";

export function RecommendSection() {
  return (
    <section className="py-[100px] max-md:py-[72px]" id="recommend">
      <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <header className="ak-section-head">
          <div className="mx-auto mb-3 h-[96px] w-[96px]">
            <Image
              src="/images/top/recommendation.png"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h2 className="font-mincho text-[clamp(38px,4vw,58px)] font-normal leading-[1.45] tracking-[.14em]">
            大学教授・全国の同業者が
            <br />
            当院を推薦しています
          </h2>
          <span className="ak-head-line" />
          <p className="text-base leading-8 text-text-light">
            専門的な知見を持つ方々から、当院の施術方針と取り組みに推薦の声をいただいています。
          </p>
        </header>

        <div className="grid gap-[18px] lg:grid-cols-5 max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1">
          {recommends.map((rec) => (
            <article key={rec.id} className="ak-recommend-card">
              <div className="relative mx-auto h-[160px] w-[160px] overflow-hidden rounded-full bg-[#f2e8df]">
                <Image
                  src={rec.imagePath}
                  alt={rec.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <p className="mt-4 whitespace-pre-line text-center text-[11px] leading-[1.6] text-text-light">
                {rec.title}
              </p>
              <h3 className="mt-[6px] text-center font-mincho text-lg">{rec.name}</h3>
              <blockquote className="mt-3 text-xs leading-[1.9] text-text-light">
                {rec.quote}
              </blockquote>
              <p className="mt-3 text-[10px] text-text-light/60">
                ※個人の感想であり、成果や成功を保証するものではありません
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="/recommend"
            className="inline-flex min-h-[58px] items-center rounded-[13px] border border-border-light bg-white/70 px-7 font-bold"
          >
            推薦者一覧を見る　›
          </Link>
        </div>
      </div>
    </section>
  );
}
