import type { Metadata } from "next";
import Image from "next/image";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";
import { flowSteps } from "@/data/flow";

export const metadata: Metadata = {
  title: "初めての方へ",
  description:
    "楓月整体院が初めての方へ。施術の流れ・院の特徴・他院との違いをご紹介します。仙台市泉区で腰痛・肩こり・首の痛みにお悩みの方はお気軽にご相談ください。",
  alternates: { canonical: "/first/" },
};

const relatedPages: RelatedPage[] = [
  {
    href: "/price",
    en: "PRICE",
    ja: "料金",
    desc: "初回限定3,278円（税込）。明確な料金体系で安心してお越しいただけます。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20l3-8 3 5 2-3 3 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/staff",
    en: "STAFF",
    ja: "スタッフ紹介",
    desc: "施術を担当するスタッフの経歴・資格・想いをご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/voice",
    en: "VOICE",
    ja: "患者様の声",
    desc: "実際にご来院された患者様の体験談・動画インタビューをご覧いただけます。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 8h22v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 8l11 9 11-9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/recommend",
    en: "RECOMMEND",
    ja: "推薦の声",
    desc: "医療・介護・施術・地域など各分野の専門家から寄せられた推薦をご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 5l2.764 8.51H27l-7.118 5.17 2.764 8.51L16 22.01l-6.646 5.18 2.764-8.51L6 13.51h8.236L16 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/access",
    en: "ACCESS",
    ja: "院情報・アクセス",
    desc: "仙台市泉区泉中央。泉中央駅より徒歩6分。無料駐車場あり。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C11.582 3 8 6.582 8 11c0 7 8 18 8 18s8-11 8-18c0-4.418-3.582-8-8-8Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

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

        {/* タイトル下・施術写真3枚 */}
        <section className="pb-16">
          <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
            <p className="mb-8 text-center text-[11px] font-bold tracking-[.22em] text-text-muted">
              TREATMENT
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/top/sejutsu-02.jpg"
                  alt="施術の様子"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                <Image
                  src="/images/top/sejutsu-03.jpg"
                  alt="施術の様子"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/top/sejutsu-04.jpg"
                  alt="施術の様子"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
              </div>
            </div>
          </div>
        </section>

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
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <Image
              src="/images/first/reason-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1a0f08]/70" />
          </div>
          <div className="relative mx-auto w-[min(calc(100%-2rem),1260px)]">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary/90">WHY CHOOSE US</p>
              <h2 className="font-mincho text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.45] tracking-[.14em] text-white">
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
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/first/approach.jpg"
                  alt="カウンセリング・施術の様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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

        {/* 関連ページ */}
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)] pt-16">
          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
