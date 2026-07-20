"use client";

import Image from "next/image";
import { flowSteps } from "@/data/flow";

export function FlowCarousel() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
      <div className="flex w-max gap-5">
        {flowSteps.map((step) => (
          <article
            key={step.step}
            className="ak-flow-card w-[260px] flex-shrink-0"
          >
            <span className="absolute left-4 top-4 z-10 grid h-[34px] w-[34px] place-items-center rounded-full bg-[#f4d2af] font-mincho text-lg text-[#d9741f]">
              {step.step}
            </span>
            <div className="relative h-[160px] overflow-hidden rounded-[10px]">
              <Image
                src={step.imagePath}
                alt={step.title}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
            <h3 className="mt-3 font-mincho text-lg leading-[1.6]">{step.title}</h3>
            <p className="mt-3 text-xs leading-8 text-text-light">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
