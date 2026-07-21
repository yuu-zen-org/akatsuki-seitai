"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // ページ切り替え時に即座にトップへ（smooth を一時無効化）
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });

    // ハッシュリンクのスムーススクロールをJS側で制御
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // 同一ページ内のハッシュリンク（例: #top, #price）
      const hash = href.startsWith("#")
        ? href
        : href.startsWith("/#")
        ? href.slice(1)
        : null;
      if (!hash) return;

      const section = document.querySelector(hash);
      if (!section) return;

      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleHashClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", handleHashClick);
    };
  }, [pathname]);

  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
}
