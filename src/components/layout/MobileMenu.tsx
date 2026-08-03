"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { headerNav } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* ハンバーガーボタン */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex size-10 items-center justify-center rounded-md text-text"
        aria-expanded={isOpen}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <div className="flex w-6 flex-col gap-1.5">
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </div>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={close} aria-hidden="true" />
      )}

      {/* ドロワー */}
      <nav
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-bg-white pt-20 shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="モバイルナビゲーション"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-1 px-6">
          <Link
            href="/"
            onClick={close}
            className="block rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-primary-light transition-colors"
          >
            ホーム
          </Link>
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-primary-light transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/symptoms"
            onClick={close}
            className="block rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-primary-light transition-colors"
          >
            対応症状
          </Link>
          <Link
            href="/faq"
            onClick={close}
            className="block rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-primary-light transition-colors"
          >
            よくある質問
          </Link>
        </div>
      </nav>
    </div>
  );
}
