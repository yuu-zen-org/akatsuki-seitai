import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "院情報・アクセス",
  description:
    "整体院楓月-Akatsuki- 泉中央院へのアクセス・地図・営業時間のご案内。仙台市泉区、駐車場完備。泉中央駅より徒歩6分。",
  alternates: { canonical: "/access/" },
};

const staffPhotos = [
  {
    src: "/images/access/staff-01.jpg",
    alt: "整体院 楓月-Akatsuki-の院内",
    caption: "施術スペースは常に清潔を心がけ、感染対策も徹底しています。",
  },
  {
    src: "/images/access/staff-02.jpg",
    alt: "整体院 楓月-Akatsuki-の施術",
    caption: "患部だけでなく、身体全体をみて丁寧に検査していきます。",
  },
  {
    src: "/images/access/staff-03.jpg",
    alt: "整体院 楓月-Akatsuki-の施術",
    caption: "保険よりもより効果を高めた自費施術を行います。",
  },
  {
    src: "/images/access/staff-04.jpg",
    alt: "整体院 楓月-Akatsuki-のカウンセリングの様子",
    caption: "腰以外にも、膝、股関節、首、肩、頭など各部位の痛みや痺れに対応しています。",
  },
];

export default function AccessPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="ACCESS"
            ja="院情報・アクセス"
            description="泉中央駅から徒歩6分。無料駐車場もございます。"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "院情報・アクセス", href: "/access" },
            ]}
          />

          {/* ── 院情報 ── */}
          <section className="pb-16">
            <h2 className="mb-8 font-mincho text-2xl tracking-[.1em]">院情報</h2>
            <div className="card-glass grid gap-8 rounded-[2rem] p-6 md:p-9 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <dl className="divide-y divide-black/10 border-y border-black/10">
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">院名</dt>
                    <dd className="text-text-light">整体院 楓月-Akatsuki- 泉中央院</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">代表者</dt>
                    <dd className="text-text-light">福田 孝裕</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">住所</dt>
                    <dd className="text-text-light">
                      〒{siteConfig.address.postalCode}{" "}
                      {siteConfig.address.prefecture}{siteConfig.address.city}
                      <br />
                      {siteConfig.address.street}
                    </dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">電話番号</dt>
                    <dd className="text-text-light">
                      <a href={siteConfig.contact.phoneHref} className="hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">営業時間</dt>
                    <dd className="text-text-light">10:00〜19:00</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">定休日</dt>
                    <dd className="text-text-light">不定休</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">価格帯</dt>
                    <dd className="text-text-light">平均3,278円〜6,900円前後</dd>
                  </div>
                  <div className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-bold">URL</dt>
                    <dd className="text-text-light">
                      <a href="http://akatsuki-seitai.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors break-all">
                        http://akatsuki-seitai.jp/
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.2085477812293!2d140.88529359999998!3d38.3210012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f89819233ea5735%3A0x4202747f79f6a083!2z5pW05L2T6Zmi5qWT5pyILUFrYXRzdWtpLSDms4nkuK3lpK7pmaI!5e0!3m2!1sja!2sjp!4v1784552544007!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="整体院 楓月 泉中央院の地図"
                />
              </div>
            </div>
          </section>

          {/* ── アクセス ── */}
          <section className="pb-16">
            <h2 className="mb-8 font-mincho text-2xl tracking-[.1em]">アクセス</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {/* 電車 */}
              <div className="card-glass rounded-2xl p-7">
                <p className="mb-4 text-[11px] font-bold tracking-[.2em] text-primary">TRAIN</p>
                <h3 className="mb-5 font-bold">電車でお越しの場合</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm leading-[1.8] text-text-light">
                      地下鉄南北線「<strong className="text-text">泉中央駅</strong>」より徒歩6分
                    </p>
                    <Link
                      href="https://maps.app.goo.gl/aEXQSV2QKzGPXnEP7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      泉中央駅からの道のり（Google Mapで確認）
                      <svg className="size-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 2h8v8M10 2 2 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                      </svg>
                    </Link>
                  </div>
                  <div className="border-t border-border-light pt-5">
                    <p className="text-sm leading-[1.8] text-text-light">
                      地下鉄南北線「<strong className="text-text">八乙女駅</strong>」より徒歩15分
                    </p>
                    <Link
                      href="https://maps.app.goo.gl/985f3SunG19Tq4jx7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      八乙女駅からの道のり（Google Mapで確認）
                      <svg className="size-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 2h8v8M10 2 2 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 車 */}
              <div className="card-glass rounded-2xl p-7">
                <p className="mb-4 text-[11px] font-bold tracking-[.2em] text-primary">CAR</p>
                <h3 className="mb-5 font-bold">お車でお越しの場合</h3>
                <p className="text-sm leading-[1.8] text-text-light">
                  無料駐車場がございます。
                </p>
              </div>
            </div>
          </section>

          {/* ── 院内風景・スタッフの様子 ── */}
          <section className="pb-16">
            <h2 className="mb-8 font-mincho text-2xl tracking-[.1em]">院内風景・スタッフの様子</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {staffPhotos.map((photo) => (
                <div key={photo.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="mt-2 text-xs leading-[1.7] text-text-muted">{photo.caption}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
