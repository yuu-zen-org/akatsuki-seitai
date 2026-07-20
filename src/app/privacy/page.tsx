import type { Metadata } from "next";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "楓月整体院のプライバシーポリシー。個人情報の取り扱いについて。",
};

const sections = [
  {
    title: "個人情報の収集について",
    body: "当院では、お問い合わせ・ご予約の際に、お名前・電話番号・メールアドレス・症状等の個人情報をお預かりする場合があります。",
  },
  {
    title: "個人情報の利用目的",
    body: "お預かりした個人情報は、ご予約・ご相談への対応、施術に必要な情報の管理、および当院からのご案内の送付に利用いたします。上記以外の目的には利用いたしません。",
  },
  {
    title: "個人情報の第三者提供",
    body: "当院は、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。",
  },
  {
    title: "個人情報の管理",
    body: "当院は、個人情報の漏洩・紛失・改ざんを防止するため、適切なセキュリティ管理措置を講じます。",
  },
  {
    title: "個人情報の開示・訂正・削除",
    body: "ご本人から個人情報の開示・訂正・削除のご要望があった場合は、速やかに対応いたします。お問い合わせ先までご連絡ください。",
  },
  {
    title: "Cookieの使用について",
    body: "当サイトでは、利用状況の分析のためGoogle Analyticsを使用する場合があります。Google Analyticsはトラフィックデータの収集のためCookieを使用しますが、このデータは匿名で収集されており、個人を特定するものではありません。",
  },
  {
    title: "プライバシーポリシーの変更",
    body: "当院は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは当サイトに掲載した時点で効力を生じるものとします。",
  },
  {
    title: "お問い合わせ",
    body: `個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\n${siteConfig.name} ${siteConfig.branch}\n電話：${siteConfig.contact.phone}\nメール：${siteConfig.contact.email}`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="page-bg">
      <BackgroundBlurs />
      <div className="relative z-[2]">
        <div className="mx-auto w-[min(calc(100%-2rem),1260px)]">
          <PageHeader
            en="PRIVACY POLICY"
            ja="プライバシーポリシー"
            breadcrumbs={[
              { name: "ホーム", href: "/" },
              { name: "プライバシーポリシー", href: "/privacy" },
            ]}
          />

          <div className="mx-auto max-w-3xl pb-24">
            <p className="mb-10 text-sm leading-[2] text-text-light">
              {siteConfig.name}（以下「当院」）は、お客様の個人情報の保護を重要と考え、以下の方針に従って適切に取り扱います。
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <section key={s.title}>
                  <h2 className="mb-3 flex items-center gap-3 font-bold">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-light text-sm text-primary">
                      {i + 1}
                    </span>
                    {s.title}
                  </h2>
                  <p className="text-sm leading-[2] text-text-light whitespace-pre-line pl-10">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-12 text-right text-xs text-text-muted">
              制定日：2024年1月1日
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
