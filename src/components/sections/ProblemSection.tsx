import Image from "next/image";
import { problems } from "@/data/problems";
import { reasons } from "@/data/reasons";

export function ProblemSection() {
  return (
    <section className="pt-[40px] pb-20" id="reasons">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <div className="mb-10 flex items-center gap-4 before:h-px before:flex-1 before:bg-black/10 after:h-px after:flex-1 after:bg-black/10">
          <p className="flex items-center gap-3 text-center font-mincho tracking-[.12em]">
            <svg
              aria-hidden="true"
              className="size-5 text-[#c8bba8]"
              fill="none"
              viewBox="0 0 64 64"
            >
              <path
                d="M31 54C22 43 18 31 19 13c11 7 18 18 18 31"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M31 54c7-14 13-26 25-35-1 15-8 27-25 35Z"
                fill="currentColor"
              />
            </svg>
            このようなお悩みはありませんか？
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {problems.map((problem) => (
            <article
              key={problem.id}
              className="border-r border-dashed border-black/10 px-3 text-center last:border-r-0"
            >
              <div className="mx-auto mb-3 flex size-20 items-end justify-center overflow-hidden">
                <Image
                  src={problem.imagePath}
                  alt={problem.text.replace("\n", "")}
                  width={80}
                  height={80}
                  className="h-auto max-h-20 w-auto max-w-20 object-contain"
                />
              </div>
              <p className="whitespace-pre-line font-mincho text-sm leading-6">{problem.text}</p>
            </article>
          ))}
        </div>

        <h2 className="mx-auto mb-12 w-fit rounded-full bg-white/80 px-9 py-3 font-mincho text-xl tracking-[.08em] shadow-sm">
          楓月が選ばれる{" "}
          <b className="px-2 text-4xl font-normal text-primary">3</b> つの理由
        </h2>

        <div className="grid gap-10 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="grid grid-cols-[160px_1fr] items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="relative h-[180px] w-[160px]">
                <Image
                  src={reason.imagePath}
                  alt={reason.title.replace("\n", "")}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div>
                <h3 className="mb-3 font-mincho text-sm leading-7 lg:text-lg">
                  {reason.title.replace("\n", "")}
                </h3>
                <p className="text-xs leading-7 text-text-muted lg:text-sm">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
