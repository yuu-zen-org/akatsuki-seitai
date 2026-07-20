import type { NavItem } from "@/types";

export const headerNav: NavItem[] = [
  { label: "初めての方へ", href: "/first" },
  { label: "施術について", href: "/#treatment" },
  { label: "料金案内", href: "/#price" },
  { label: "スタッフ紹介", href: "/about" },
  { label: "患者様の声", href: "/voice" },
  { label: "アクセス", href: "/access" },
];

export const footerNav: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "初めての方へ", href: "/first" },
  { label: "お客様の声", href: "/voice" },
  { label: "院長紹介", href: "/about" },
  { label: "アクセス", href: "/access" },
  { label: "よくある質問", href: "/faq" },
  { label: "対応症状", href: "/symptoms" },
  { label: "お知らせ", href: "/news" },
  { label: "ご予約・お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export const ctaNav: NavItem = {
  label: "ご予約はこちら",
  href: "/contact",
};
