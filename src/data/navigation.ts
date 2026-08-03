import type { NavItem } from "@/types";

export const headerNav: NavItem[] = [
  { label: "初めての方へ", href: "/first" },
  { label: "料金", href: "/price" },
  { label: "スタッフ紹介", href: "/staff" },
  { label: "患者様の声", href: "/voice" },
  { label: "院情報・アクセス", href: "/access" },
];

export const footerNav: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "初めての方へ", href: "/first" },
  { label: "対応症状", href: "/symptoms" },
  { label: "料金", href: "/price" },
  { label: "スタッフ紹介", href: "/staff" },
  { label: "推薦の声", href: "/recommend" },
  { label: "患者様の声", href: "/voice" },
  { label: "よくある質問", href: "/faq" },
  { label: "院情報・アクセス", href: "/access" },
  { label: "お知らせ", href: "/news" },
  { label: "ご予約・お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export const ctaNav: NavItem = {
  label: "ご予約はこちら",
  href: "/contact",
};
