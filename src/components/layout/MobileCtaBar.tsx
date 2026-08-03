import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden">
      {/* LINE予約 */}
      <a
        href={siteConfig.contact.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-[#06C755] py-3 text-white"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M10 2C5.582 2 2 5.134 2 9c0 2.458 1.27 4.641 3.25 6.092-.115.415-.406 1.509-.47 1.749-.077.295.11.29.231.212.095-.062 1.508-1.021 2.118-1.434.489.07.993.106 1.871.106 4.418 0 8-3.134 8-7s-3.582-7-8-7Z" />
        </svg>
        <span className="text-[11px] font-bold">LINE予約</span>
      </a>

      {/* WEB予約 */}
      <Link
        href="/contact"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-primary py-3 text-white"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">
          <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4H16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.25V2.75A.75.75 0 0 1 5.75 2ZM4 7.5h12v8.5H4V7.5Z" clipRule="evenodd" />
        </svg>
        <span className="text-[11px] font-bold">WEB予約</span>
      </Link>

      {/* 電話 */}
      <a
        href={siteConfig.contact.phoneHref}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-white py-3 text-primary-dark"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">
          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.02 13.02 0 0 1 2 5V3.5Z" clipRule="evenodd" />
        </svg>
        <span className="text-[11px] font-bold">電話予約</span>
      </a>
    </div>
  );
}
