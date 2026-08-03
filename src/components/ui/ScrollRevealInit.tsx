"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // ページ遷移後に新しい[data-reveal]要素を再収集して監視
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay ?? "0";
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // JS読み込み遅延のフォールバック: 2秒後に未表示要素を強制表示
    const fallback = setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
