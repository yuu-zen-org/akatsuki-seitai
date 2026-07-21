"use client";

import { useState } from "react";
import Link from "next/link";
import type { FAQ } from "@/types";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="card-glass rounded-2xl">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-bold"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <b className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-light text-primary">
                  Q
                </b>
                {faq.question}
              </span>
              <span
                className="shrink-0 text-2xl text-primary transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                ＋
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? "600px" : "0" }}
            >
              <div className="px-6 pb-6 md:pl-[4.5rem]">
                <p className="leading-8 text-text-light">{faq.answer}</p>
                {faq.cta && faq.cta.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {faq.cta.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={
                          c.variant === "primary"
                            ? "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white"
                            : "inline-flex min-h-11 items-center justify-center rounded-full border border-border-light bg-white/80 px-6 text-sm font-bold text-primary-dark"
                        }
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
