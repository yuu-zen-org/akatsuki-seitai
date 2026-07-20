"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faq";

const topFaqs = faqs.slice(0, 3);

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-bg-faq py-[100px] max-md:py-[72px]" id="faq">
      <div className="mx-auto w-[min(calc(100%-2rem),61rem)]">
        <header className="ak-section-head">
          <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">
            Q&A
          </p>
          <h2 className="font-mincho text-[clamp(38px,4vw,58px)] font-normal leading-[1.45] tracking-[.14em]">
            よくあるご質問
          </h2>
          <span className="ak-head-line" />
        </header>

        <div className="space-y-4">
          {topFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="card-glass rounded-2xl">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-bold"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <b className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-light text-primary">
                      Q
                    </b>
                    {faq.question}
                  </span>
                  <span
                    className="text-2xl text-primary transition-transform duration-300"
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

        <div className="mt-7 text-center">
          <Link
            href="/faq"
            className="inline-flex min-h-[58px] items-center rounded-[13px] border border-border-light bg-white/70 px-7 font-bold"
          >
            Q&Aをもっと見る　›
          </Link>
        </div>
      </div>
    </section>
  );
}
