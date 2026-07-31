import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "院長紹介",
  description:
    "楓月整体院の院長・福田孝裕のご紹介。業界経験10年以上、累計2万件超の施術実績。仙台市泉区で根本改善を目指す整体院です。",
};

const career = [
  "整体院・マッサージ院にて研鑽を積む",
  "業界経験10年以上",
  "累計施術件数 2万件超え",
  "整体院 楓月-Akatsuki- 泉中央院 開院",
];

const philosophy = [
  {
    title: "痛みの場所に原因があるとは限らない",
    body: "腰が痛いから腰だけを診る、肩が凝るから肩だけを揉む——そのアプローチでは根本解決になりません。お身体全体を総合的に検査し、症状の真の原因を見つけることを大切にしています。",
  },
  {
    title: "「その場しのぎ」ではなく「根本改善」へ",
    body: "痛みを一時的に和らげるだけでなく、再発しない身体をつくることがゴールです。施術とセルフケア指導を組み合わせ、日常生活の質を根本から高めるサポートをします。",
  },
  {
    title: "一人ひとりに向き合う丁寧な施術",
    body: "流れ作業の施術は行いません。カウンセリングから施術後のケアまで、お一人おひとりの状態と目標に合わせて、全力でサポートします。",
  },
];

export default function AboutPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="ABOUT"
            ja="院長紹介"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "院長紹介", href: "/about" },
            ]}
          />

          {/* プロフィール */}
          <section className="pb-20">
            <div className="card-glass grid gap-8 rounded-[2rem] p-6 md:p-10 lg:grid-cols-[280px_1fr] lg:items-start">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-[#f0e8df] shadow-lg lg:h-64 lg:w-64">
                  <Image
                    src="/images/top/fv.jpg"
                    alt="院長 福田孝裕"
                    fill
                    className="object-cover object-top"
                    sizes="256px"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-text-muted">{siteConfig.name} {siteConfig.branch}</p>
                  <p className="mt-1 font-mincho text-2xl tracking-[.1em]">福田 孝裕</p>
                  <p className="mt-1 text-xs text-text-muted">Takahiro Fukuda</p>
                </div>
              </div>

              <div>
                <h2 className="mb-5 font-mincho text-xl tracking-[.08em]">プロフィール</h2>
                <dl className="divide-y divide-border-light border-y border-border-light">
                  <div className="grid gap-2 py-3 sm:grid-cols-[8rem_1fr]">
                    <dt className="text-sm font-bold">経歴</dt>
                    <dd>
                      <ul className="space-y-1">
                        {career.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="mt-1 shrink-0 text-primary">›</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="grid gap-2 py-3 sm:grid-cols-[8rem_1fr]">
                    <dt className="text-sm font-bold">得意分野</dt>
                    <dd className="text-sm leading-[1.9] text-text-light">
                      腰痛・椎間板ヘルニア・膝痛・股関節痛・肩こり・首の痛み・自律神経の乱れ など
                    </dd>
                  </div>
                  <div className="grid gap-2 py-3 sm:grid-cols-[8rem_1fr]">
                    <dt className="text-sm font-bold">施術実績</dt>
                    <dd className="text-sm text-text-light">累計 <span className="font-bold text-primary">2万件</span> 超え</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* 院長メッセージ */}
          <section className="pb-20">
            <div className="mx-auto max-w-3xl">
              <header className="ak-section-head">
                <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">MESSAGE</p>
                <h2 className="font-mincho text-[clamp(26px,3vw,40px)] font-normal leading-[1.45] tracking-[.14em]">
                  院長からのメッセージ
                </h2>
                <span className="ak-head-line" />
              </header>

              <div className="card-glass space-y-5 rounded-2xl p-7 text-sm leading-[2.1] text-text-light md:p-10">
                <p>
                  「病院や整骨院、マッサージに通い続けているのに、いつまで経っても良くならない——」
                  そんな悩みを抱えたまま、痛みを我慢しながら毎日を過ごしている方がたくさんいます。
                </p>
                <p>
                  私がこれまで向き合ってきた2万件以上のお身体から学んだことは、「痛みのある場所に根本原因があるとは限らない」ということです。腰が痛いから腰だけを、肩が凝るから肩だけを——そのアプローチでは、その場しのぎにしかなりません。
                </p>
                <p>
                  当院では、骨格・筋肉・姿勢・神経・生活習慣まで、お身体全体を総合的に診ることで、症状の本当の原因を見つけます。そして、施術だけで終わらず、再発しない身体づくりのためのセルフケア指導まで責任を持って行います。
                </p>
                <p>
                  どこに行っても良くならなかった方、諦めかけている方こそ、ぜひ一度ご相談ください。あなたが踏み出した一歩を、全力で受け止めます。
                </p>
                <p className="text-right font-mincho text-base text-text">
                  整体院 楓月 泉中央院　院長　福田 孝裕
                </p>
              </div>
            </div>
          </section>

          {/* 施術理念 */}
          <section className="pb-24">
            <header className="ak-section-head">
              <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">PHILOSOPHY</p>
              <h2 className="font-mincho text-[clamp(26px,3vw,40px)] font-normal leading-[1.45] tracking-[.14em]">
                施術への想い
              </h2>
              <span className="ak-head-line" />
            </header>
            <div className="grid gap-5 md:grid-cols-3">
              {philosophy.map((p, i) => (
                <div key={p.title} className="card-glass rounded-2xl p-6">
                  <p className="mb-3 font-bold text-primary/30 text-5xl leading-none font-mincho">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 font-bold leading-[1.5]">{p.title}</h3>
                  <p className="text-sm leading-[1.9] text-text-light">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-8 text-center">
              <p className="font-mincho text-xl leading-[1.8]">
                まずはお気軽にご相談ください。
              </p>
              <p className="mt-2 text-sm text-text-light">初回限定コースで体験いただけます。</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </section>
        </div>
      </div>
    </main>
  );
}
