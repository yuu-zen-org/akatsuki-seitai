import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { flowSteps } from "@/data/flow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "初めての方へ",
  description:
    "楓月整体院が初めての方へ。施術の流れ・院の特徴・他院との違いをご紹介します。仙台市泉区で腰痛・肩こり・首の痛みにお悩みの方はお気軽にご相談ください。",
};

const concerns = [
  "病院でレントゲン・MRIを撮ったが「様子をみましょう」と言われるだけ",
  "腰痛や膝の痛みで、ゴルフや旅行を諦めてしまっている",
  "薬や湿布、マッサージで痛みをごまかし続けている",
  "「歳のせい」「変形しているから仕方ない」と言われ諦めている",
  "足の痺れで長距離が歩けず、日常生活に支障が出ている",
  "他の整体・整骨院に通っても症状が改善しない",
  "痛みで家族や職場に迷惑をかけることが不安",
];

const features = [
  {
    num: "01",
    title: "業界10年以上の経験と2万件超の実績",
    body: "施術歴10年以上、累計2万件を超える臨床実績があります。慢性腰痛から膝・股関節痛まで、幅広い症状に対応してきました。",
  },
  {
    num: "02",
    title: "原因を特定する丁寧な検査・カウンセリング",
    body: "「痛みのある場所に根本原因があるとは限らない」という考えのもと、姿勢・骨格・筋肉を総合的に検査し、真の原因を特定します。",
  },
  {
    num: "03",
    title: "再発しないためのセルフケア指導",
    body: "施術後も症状が戻らないよう、自宅で続けられるストレッチや生活習慣のアドバイスを個別にご提案します。LINEでの相談も受け付けています。",
  },
  {
    num: "04",
    title: "プライベート空間で安心して受けられる",
    body: "個室での施術のため、他の患者さんを気にせず、プライベートな悩みも遠慮なくお話しいただけます。",
  },
  {
    num: "05",
    title: "完全予約制で待ち時間ゼロ",
    body: "完全予約制のため、来院してからお待たせすることがありません。ご自身のペースで無理なく通院いただけます。",
  },
];

const approaches = [
  "骨盤のゆがみを整える",
  "姿勢のゆがみを整える",
  "重心のズレを整える",
  "関節のズレ・ゆがみを整える",
  "筋肉の緊張を整える",
  "背骨のゆがみを整える",
  "自律神経の乱れを整える",
  "内臓の不調を整える",
];

export default function FirstPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="FOR FIRST TIME"
            ja="初めての方へ"
            description="初めての整体院は不安がいっぱい。当院のこと、まずはここから知ってください。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "初めての方へ", href: "/first" },
            ]}
          />
        </div>

        {/* こんなお悩みありませんか */}
        <section className="pb-20">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <h2 className="mb-8 text-center font-mincho text-2xl tracking-[.1em] md:text-3xl">
              こんなお悩み、ありませんか？
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {concerns.map((c) => (
                <li key={c} className="card-glass flex items-start gap-3 rounded-xl p-4">
                  <span className="mt-0.5 shrink-0 text-lg text-primary">✓</span>
                  <span className="text-sm leading-[1.8]">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-6 text-center font-mincho text-lg leading-[1.8] md:text-xl">
              そのお悩み、当院にお任せください。<br />
              <span className="text-primary">他院で改善しなかった方も、まずはご相談を。</span>
            </p>
          </div>
        </section>

        {/* 選ばれる理由 */}
        <section className="py-20 bg-bg-faq">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">WHY CHOOSE US</p>
              <h2 className="font-mincho text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.45] tracking-[.14em]">
                楓月が選ばれる理由
              </h2>
              <span className="ak-head-line" />
            </header>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.num} className="card-glass rounded-2xl p-6">
                  <p className="mb-2 font-bold text-primary/40 text-4xl leading-none font-mincho">{f.num}</p>
                  <h3 className="mb-3 font-bold leading-[1.5] text-[15px]">{f.title}</h3>
                  <p className="text-sm leading-[1.9] text-text-light">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 総合的なアプローチ */}
        <section className="py-20">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="mb-2 text-[13px] font-bold tracking-[.18em] text-primary">OUR APPROACH</p>
                <h2 className="mb-6 font-mincho text-[clamp(26px,3vw,40px)] leading-[1.4] tracking-[.08em]">
                  身体を総合的にみて、<br />根本改善へ導きます
                </h2>
                <p className="mb-6 text-sm leading-[2] text-text-light">
                  お身体の状態はお一人おひとり異なり、痛みの原因も様々です。当院では骨盤・姿勢・筋肉・神経など多角的な視点から検査し、症状の根本原因にアプローチします。
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {approaches.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-text-light">
                      <span className="shrink-0 text-primary">›</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-2xl p-6 md:p-8">
                <p className="mb-4 text-[13px] font-bold tracking-[.18em] text-primary">COUNSELING & CARE</p>
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-2 font-bold">カウンセリング・検査</h3>
                    <p className="text-sm leading-[1.9] text-text-light">
                      初回は時間をかけてカウンセリングと検査を行います。症状の経緯・生活習慣・食事など多角的にヒアリングし、痛みの本当の原因を特定します。
                    </p>
                  </div>
                  <div className="border-t border-border-light pt-5">
                    <h3 className="mb-2 font-bold">アフターケア・セルフケア指導</h3>
                    <p className="text-sm leading-[1.9] text-text-light">
                      施術効果を長続きさせるため、自宅で続けられるストレッチや日常生活の改善点をご提案します。LINEでのご相談もいつでも受け付けています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 施術の流れ */}
        <section className="py-20 bg-bg-faq">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">FLOW</p>
              <h2 className="font-mincho text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.45] tracking-[.14em]">
                施術の流れ
              </h2>
              <span className="ak-head-line" />
              <p className="text-sm leading-8 text-text-light">
                初めての方も安心してお越しいただけるよう、丁寧にサポートします。
              </p>
            </header>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {flowSteps.map((step) => (
                <div key={step.step} className="card-glass rounded-2xl overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src={step.imagePath}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-bold">{step.title}</h3>
                    <p className="text-sm leading-[1.8] text-text-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <div className="rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center md:p-12">
              <p className="font-mincho text-xl leading-[1.8] md:text-2xl">
                まずは、お気軽にご相談ください。
              </p>
              <p className="mt-3 text-sm text-text-light">
                初回限定コースで、当院の施術をお試しいただけます。
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
        </section>
      </div>
    </main>
  );
}
