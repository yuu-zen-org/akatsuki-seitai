import Image from "next/image";
import Link from "next/link";
import { headerNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/common/logo.png"
            alt={siteConfig.name}
            width={140}
            height={50}
            priority
            className="h-10 w-auto lg:h-12"
          />
          <span className="font-mincho text-sm text-text lg:text-base tracking-widest">
            泉中央院
          </span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* デスクトップCTAボタン */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Instagram */}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon />
          </a>

          {/* LINE予約 */}
          <a
            href={siteConfig.contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#06C755] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            LINE予約
          </a>

          {/* WEB予約 */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            <CalendarIcon />
            WEB予約
          </Link>

          {/* 電話 */}
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary-light"
          >
            <PhoneIcon />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-normal">電話予約はこちら</span>
              <span>{siteConfig.contact.phone}</span>
            </span>
          </a>
        </div>

        {/* モバイルメニューボタン + ドロワー */}
        <MobileMenu />
      </div>
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4H16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.25V2.75A.75.75 0 0 1 5.75 2ZM4 7.5h12v8.5H4V7.5Z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.02 13.02 0 0 1 2 5V3.5Z" clipRule="evenodd" />
    </svg>
  );
}
