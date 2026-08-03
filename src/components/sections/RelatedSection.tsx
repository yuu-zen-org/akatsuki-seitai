import Link from "next/link";
import type { ReactNode } from "react";
import { CtaSection } from "./CtaSection";

export interface RelatedPage {
  href: string;
  en: string;
  ja: string;
  desc: string;
  icon: ReactNode;
}

export function RelatedSection({ pages }: { pages: RelatedPage[] }) {
  return (
    <>
      <section className="pb-10">
        <p className="mb-6 text-center text-[13px] font-bold tracking-[.18em] text-text-muted">
          RELATED INFORMATION
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex flex-col gap-3 rounded-2xl p-6 transition-shadow hover:shadow-md"
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(86,68,53,0.10)",
                boxShadow: "0 4px 20px rgba(76,55,39,0.05)",
              }}
            >
              <span className="text-primary/70 transition-colors group-hover:text-primary">
                {page.icon}
              </span>
              <span className="text-[10px] font-bold tracking-[.2em] text-text-muted">{page.en}</span>
              <span className="font-mincho text-[16px] tracking-[.06em]">{page.ja}</span>
              <span className="text-[12px] leading-[1.8] text-text-muted">{page.desc}</span>
              <span className="mt-auto text-[11px] font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
