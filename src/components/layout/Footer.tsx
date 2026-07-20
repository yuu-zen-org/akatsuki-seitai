import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerNav = [
  { label: "ホーム", href: "/" },
  { label: "楓月について", href: "/about" },
  { label: "施術について", href: "/first" },
  { label: "料金", href: "/price" },
  { label: "患者様の声", href: "/voice" },
  { label: "施術の流れ", href: "/flow" },
  { label: "よくあるご質問", href: "/faq" },
  { label: "アクセス", href: "/access" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(236,123,45,.12),transparent_30%),linear-gradient(180deg,#40342c,#342a23)] text-[#fffaf4]">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1260px)] gap-12 py-16 md:grid-cols-2">
        <div>
          <Link href="/" className="font-mincho text-3xl tracking-[.08em]">
            整体院 楓月
            <span className="ml-2 text-lg">泉中央院</span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-8 text-white/70">
            その場しのぎではなく、不調の原因を一緒に見つけ、根本から整えていく整体院です。
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <p>
              {siteConfig.address.prefecture}
              {siteConfig.address.city}
            </p>
            <p>泉中央駅より徒歩6分</p>
            <p>10:00〜19:00</p>
          </div>
        </div>

        <nav>
          <h2 className="mb-5 text-sm font-bold tracking-[.14em]">MENU</h2>
          <ul className="grid grid-cols-2 gap-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  › {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-20 w-[min(calc(100%-2rem),1260px)] flex-col justify-center gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 整体院 楓月. All Rights Reserved.</p>
          <p>
            <Link href="/privacy">プライバシーポリシー</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
