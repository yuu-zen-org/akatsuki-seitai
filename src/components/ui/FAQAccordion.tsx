"use client";

import { useState } from "react";
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
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "500px" : "0" }}
            >
              <p className="px-6 pb-6 leading-8 text-text-light md:pl-[4.5rem]">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
