import type { Metadata } from "next";
import Image from "next/image";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { RelatedSection, type RelatedPage } from "@/components/sections/RelatedSection";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description:
    "楓月整体院のスタッフ紹介。代表・福田孝裕、院長・岡本千奈津、整体師・清水陸矢。業界経験10年以上・累計2万件超の実績を持つスタッフが丁寧に施術いたします。",
  alternates: { canonical: "/staff/" },
};

const relatedPages: RelatedPage[] = [
  {
    href: "/first",
    en: "FLOW",
    ja: "初めての方へ",
    desc: "施術の流れ・当院の特徴・他院との違いをご紹介します。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16h10M17 12l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
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
    href: "/faq",
    en: "FAQ",
    ja: "よくある質問",
    desc: "料金・施術内容・予約方法など、よく寄せられる疑問にお答えします。",
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13a3 3 0 1 1 3.5 2.958C15.672 16.28 15 17.066 15 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <circle cx="16" cy="22" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const staff = [
  {
    role: "代表",
    name: "福田 孝裕",
    nameKana: "ふくだ たかひろ",
    image: "/images/staff/fukuda.jpg",
    credentials: [
      "整体師歴10年以上",
      "累計2万件超の施術実績",
    ],
    message:
      "もし慢性的な痛み・痺れなどの症状をもたれており、その原因が何なのかわからず「もうこの症状とは一生付き合っていくもの」と諦めている方は、ぜひ当院でその原因を取り除かせていただければと思います。",
    messageExtra:
      "整体院やマッサージ店での勤務を経て、業界10年以上・累計2万件を超える実績の中で「痛みの根本原因にアプローチすることの大切さ」を学んできました。どんな症状でもまずは一度ご相談ください。",
  },
  {
    role: "院長",
    name: "岡本 千奈津",
    nameKana: "おかもと ちなつ",
    image: "/images/staff/okamoto.jpg",
    credentials: [
      "整体師",
      "パーソナルインストラクター",
      "国際脳内ヒーリング認定講師",
      "AEA上級認定エステティシャン",
      "女性の美と健康に15年",
    ],
    message:
      "根本的な改善ができる技術や理論をもっと学び、皆さんのお役に立ちたいという思いから整体の道に進みました。",
    messageExtra:
      "15年間、女性の美と健康に携わった経験を活かし、身体の外側と内側の両面からアプローチします。女性特有のお悩みや、産後のお身体のケアにも丁寧に対応いたします。",
  },
  {
    role: "整体師",
    name: "清水 陸矢",
    nameKana: "しみず りくや",
    image: "/images/staff/shimizu.jpg",
    credentials: [
      "整体師",
      "プロスポーツトレーナー",
      "介護初任者研修 受講済",
      "柔道二段",
    ],
    message:
      "はじめまして。整体院楓月-Akatsuki-の清水陸矢です。私はスポーツトレーナーを通してケガと向き合う中で、「痛みを取るだけでなく、その人の生活やパフォーマンスまで変える施術」に魅力を感じ、この道を志しました。",
    messageExtra:
      "身体の不調・痛みを改善することはもちろんのこと、「再発しない身体づくり」へと導くことで痛みがない日常生活をおくれるようになり、さらにはスポーツされている方の痛み・スポーツ障害や競技のパフォーマンスも高めていきます。自身の経験を活かし、一般の方からアスリートまで、それぞれの目標や身体の状態に合わせた施術を提供できるのが強みです。現在は整体師として、肩こり・腰痛・膝痛といった日常的なお悩みを中心に、一時的なものではなく「なぜ痛みが出ているのか」を明確かつわかりやすくお伝えし、再発しない身体づくりまで二人三脚で一緒に考え、施術してサポートいたします。どんなお悩みでも、お気軽にご相談ください！",
  },
] as const;

function StaffProfile({
  member,
  reverse,
}: {
  member: (typeof staff)[number];
  reverse?: boolean;
}) {
  return (
    <section className="py-20 first:pt-4">
      <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* 写真 */}
          <div className="w-full lg:w-[400px] lg:flex-shrink-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#f0e8df]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[.22em] text-primary">{member.role}</p>

            <div className="mt-3">
              <p className="font-mincho text-[clamp(32px,4vw,48px)] leading-[1.3] tracking-[.08em]">
                {member.name}
              </p>
              <p className="mt-1 text-sm tracking-[.15em] text-text-muted">{member.nameKana}</p>
            </div>

            <div className="my-7 h-px w-12 bg-primary" />

            <ul className="mb-8 space-y-2">
              {member.credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-text-light">
                  <span className="h-px w-4 flex-shrink-0 bg-primary/40" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <p className="text-[14px] leading-[2.2] text-text-light">{member.message}</p>
              <p className="text-[14px] leading-[2.2] text-text-light">{member.messageExtra}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StaffPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="STAFF"
            ja="スタッフ紹介"
            description="患者様おひとりおひとりに真剣に向き合うスタッフをご紹介します。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "スタッフ紹介", href: "/staff" },
            ]}
          />
        </div>

        <div className="divide-y divide-border-light">
          {staff.map((member, i) => (
            <StaffProfile key={member.name} member={member} reverse={i % 2 !== 0} />
          ))}
        </div>

        <div className="mx-auto w-[min(calc(100%-2rem),1260px)] pt-4">
          <RelatedSection pages={relatedPages} />
        </div>
      </div>
    </main>
  );
}
