import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { voices, youtubeVoices } from "@/data/voices";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "患者様の声",
  description:
    "楓月整体院に通われた患者様の声をご紹介します。腰痛・膝痛・頭痛・歩行困難など、さまざまな症状で根本改善を実感された方の動画インタビューと体験談を掲載しています。",
};

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating}点`} className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

export default function VoicePage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="VOICE"
            ja="患者様の声"
            description="根本改善を実感されたお客様からのリアルな声をご紹介します。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "患者様の声", href: "/voice" },
            ]}
          />

          {/* 動画インタビュー */}
          <section className="pb-20">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">VIDEO INTERVIEW</p>
              <h2 className="font-mincho text-[clamp(24px,2.8vw,38px)] font-normal leading-[1.45] tracking-[.14em]">
                動画インタビュー
              </h2>
              <span className="ak-head-line" />
              <p className="text-sm leading-8 text-text-light">
                実際に通われた患者様のリアルな声をご覧ください。
              </p>
            </header>

            <ul className="grid gap-6 sm:grid-cols-2">
              {youtubeVoices.map((v) => (
                <li key={v.id}>
                  <article className="card-glass flex flex-col rounded-2xl overflow-hidden">
                    <YouTubePlayer youtubeId={v.youtubeId!} title={v.title} />
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2 flex-wrap">
                        <span className="rounded-full bg-primary-light px-3 py-0.5 text-[11px] font-bold text-primary-dark">
                          {v.symptom}
                        </span>
                        <Stars rating={v.rating} />
                      </div>
                      <h3 className="text-sm font-bold leading-[1.6] text-text">
                        {v.title}
                      </h3>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {/* テキストでのご感想 */}
          <section className="pb-16">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">WRITTEN REVIEWS</p>
              <h2 className="font-mincho text-[clamp(24px,2.8vw,38px)] font-normal leading-[1.45] tracking-[.14em]">
                テキストでのご感想
              </h2>
              <span className="ak-head-line" />
            </header>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {voices.map((v) => (
                <li key={v.id}>
                  <article className="card-glass flex h-full flex-col rounded-2xl p-7">
                    <div className="mb-4 flex items-center gap-4">
                      {v.imagePath && (
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#f0e8df]">
                          <Image
                            src={v.imagePath}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold">
                          {[v.age, v.gender].filter(Boolean).join("・")}
                        </p>
                        <p className="mt-0.5 text-xs text-text-muted">{v.symptom}</p>
                        <Stars rating={v.rating} />
                      </div>
                    </div>
                    <h2 className="mb-3 font-bold leading-[1.5]">{v.title}</h2>
                    <p className="flex-1 text-sm leading-[1.9] text-text-light">
                      {v.content}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="pb-24">
            <div className="rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center md:p-12">
              <p className="font-mincho text-xl leading-[1.8] md:text-2xl">
                あなたも、根本改善を体験してみませんか？
              </p>
              <p className="mt-3 text-sm text-text-light">
                初回限定コースで、まずはお気軽にご体験ください。
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-white"
                >
                  WEBご予約はこちら
                </Link>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-border-light bg-white/80 px-8 font-bold text-primary-dark"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
