import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";

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
            <p>{siteConfig.address.prefecture}{siteConfig.address.city}</p>
            <p>{siteConfig.address.street}</p>
            <p>泉中央駅より徒歩6分</p>
            <p>10:00〜19:00（不定休・土日祝も営業）</p>
          </div>

          {/* SNS・予約ボタン */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-85"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                <path d="M10 2C5.582 2 2 5.134 2 9c0 2.458 1.27 4.641 3.25 6.092-.115.415-.406 1.509-.47 1.749-.077.295.11.29.231.212.095-.062 1.508-1.021 2.118-1.434.489.07.993.106 1.871.106 4.418 0 8-3.134 8-7s-3.582-7-8-7Z" />
              </svg>
              LINE予約
            </a>
          </div>
        </div>

        <nav aria-label="フッターナビゲーション">
          <h2 className="mb-5 text-sm font-bold tracking-[.14em]">MENU</h2>
          <ul className="grid grid-cols-2 gap-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
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
          <Link href="/privacy" className="hover:text-white/80 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
