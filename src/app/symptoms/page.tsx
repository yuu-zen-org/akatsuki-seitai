import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "対応症状一覧",
  description:
    "楓月整体院が対応する症状一覧。腰痛・首の痛み・肩こり・膝の痛み・股関節痛など、根本から改善を目指します。",
};

const symptomDetail: Record<string, { detail: string[] }> = {
  lumbago: {
    detail: ["慢性的な腰の重だるさ", "ぎっくり腰を繰り返す", "椎間板ヘルニアによる痛み", "長時間座ると腰が痛い"],
  },
  neck: {
    detail: ["ストレートネックによる首の痛み", "寝違えが治らない", "首を動かすと痛みがある", "頭痛・めまいを伴う"],
  },
  shoulder: {
    detail: ["デスクワークによる慢性的な肩こり", "四十肩・五十肩で腕が上がらない", "首から肩にかけての張り", "スマートフォン使用による不調"],
  },
  knee: {
    detail: ["歩行時の膝の痛み", "階段の上り下りがつらい", "変形性膝関節症による不調", "膝が腫れる・熱を持つ"],
  },
  "hip-joint": {
    detail: ["股関節の痛みや違和感", "歩き方が左右非対称", "可動域が制限される", "長時間歩くと股関節が痛い"],
  },
};

export default function SymptomsPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="SYMPTOMS"
            ja="対応症状一覧"
            description="こんなお悩み、ありませんか？原因を見極め、根本から改善します。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "対応症状一覧", href: "/symptoms" },
            ]}
          />

          <div className="pb-24">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map((s) => {
                const extra = symptomDetail[s.slug];
                return (
                  <li key={s.id}>
                    <div className="card-glass flex h-full flex-col rounded-2xl p-7">
                      <h2 className="mb-3 font-mincho text-2xl tracking-[.08em] text-primary">
                        {s.name}
                      </h2>
                      <p className="mb-4 text-sm leading-[1.9] text-text-light">
                        {s.description}
                      </p>
                      {extra && (
                        <ul className="mt-auto space-y-1.5 border-t border-border-light pt-4">
                          {extra.detail.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-text-light">
                              <span className="mt-[3px] shrink-0 text-primary">✓</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center">
              <p className="font-mincho text-xl leading-[1.8]">
                上記以外のお悩みもお気軽にご相談ください。
                <br />
                まずはカウンセリングで、お身体の状態を丁寧に確認します。
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-white"
              >
                無料相談・ご予約はこちら
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
