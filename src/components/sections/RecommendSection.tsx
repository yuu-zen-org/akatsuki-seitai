import Image from "next/image";
import Link from "next/link";
import { recommends } from "@/data/recommends";

const featured = recommends.filter((r) => r.featured).slice(0, 5);

export function RecommendSection() {
  return (
    <section className="py-[100px] max-md:py-[72px]" id="recommend">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
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

        {/* モバイル: CSS横スクロール */}
        <div className="lg:hidden -mx-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
          <div className="flex w-max gap-4">
            {featured.map((rec) => (
              <article key={rec.id} className="ak-recommend-card w-[220px] flex-shrink-0">
                <div className="relative mx-auto h-[120px] w-[120px] overflow-hidden rounded-full bg-[#f2e8df]">
                  {rec.image ? (
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-mincho text-2xl text-[#c4956a]">
                      {rec.name.replace(/\s/g, "").slice(0, 2)}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-center text-[11px] leading-[1.6] text-text-light">
                  {rec.organization && <span className="block">{rec.organization}</span>}
                  {rec.role}
                </p>
                <h3 className="mt-[6px] text-center font-mincho text-base">{rec.name} 様</h3>
                <blockquote className="mt-3 line-clamp-4 text-xs leading-[1.9] text-text-light">
                  {rec.summary}
                </blockquote>
                <p className="mt-3 text-[10px] text-text-light/60">
                  ※個人の感想であり、成果や成功を保証するものではありません
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* デスクトップ: グリッド */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-[18px]">
          {featured.map((rec) => (
            <article key={rec.id} className="ak-recommend-card">
              <div className="relative mx-auto h-[160px] w-[160px] overflow-hidden rounded-full bg-[#f2e8df]">
                {rec.image ? (
                  <Image
                    src={rec.image}
                    alt={rec.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-mincho text-2xl text-[#c4956a]">
                    {rec.name.replace(/\s/g, "").slice(0, 2)}
                  </span>
                )}
              </div>
              <p className="mt-4 text-center text-[11px] leading-[1.6] text-text-light">
                {rec.organization && <span className="block">{rec.organization}</span>}
                {rec.role}
              </p>
              <h3 className="mt-[6px] text-center font-mincho text-lg">{rec.name} 様</h3>
              <blockquote className="mt-3 line-clamp-4 text-xs leading-[1.9] text-text-light">
                {rec.summary}
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
