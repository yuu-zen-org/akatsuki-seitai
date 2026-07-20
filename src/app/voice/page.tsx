import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { voices } from "@/data/voices";

export const metadata: Metadata = {
  title: "患者様の声",
  description:
    "楓月整体院に通われた患者様の声をご紹介します。腰痛・肩こり・首の痛みなど、さまざまな症状で改善を実感された方の体験談です。",
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

          <div className="pb-24">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {voices.map((v) => (
                <li key={v.id}>
                  <article className="card-glass flex h-full flex-col rounded-2xl p-7">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#f0e8df]">
                        <Image
                          src={v.imagePath}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
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

            <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center">
              <p className="font-mincho text-xl leading-[1.8]">
                あなたも、根本改善を体験してみませんか？
              </p>
              <p className="mt-3 text-sm text-text-light">
                初回限定コースで、まずはお気軽にご体験ください。
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-white"
              >
                ご予約・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
