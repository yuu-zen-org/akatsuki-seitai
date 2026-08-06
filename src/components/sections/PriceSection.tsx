import Image from "next/image";
import { priceCourses, priceNotes } from "@/data/prices";

export function PriceSection() {
  const firstCourse = priceCourses.find((c) => c.id === "first")!;
  const otherCourses = priceCourses.filter((c) => c.id !== "first");

  return (
    <section className="py-[100px] max-md:py-[72px]" id="price">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <header className="ak-section-head">
          <div className="mx-auto mb-3 h-[96px] w-[96px]">
            <Image
              src="/images/top/ryokin.png"
              alt=""
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h2 className="font-mincho text-[clamp(38px,4vw,58px)] font-normal leading-[1.45] tracking-[.14em]">
            料金について
          </h2>
          <span className="ak-head-line" />
          <p className="text-base leading-8 text-text-light">
            症状やお悩みに合わせて、丁寧に施術を行います。
            <br />
            初めての方も安心してご利用いただける料金設定です。
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-[14px] lg:grid-cols-[1.2fr_1fr]">
          {/* 左: 初回限定コース */}
          <article className="ak-price-card flex flex-col border-2 border-primary/30 bg-gradient-to-b from-[#fdf5ec] to-[#f9edd9] !p-4">
            <h3 className="rounded bg-primary/20 px-2 py-2 text-center font-mincho text-[22px]">
              {firstCourse.name}
            </h3>
            <p className="border-b border-primary/15 py-1.5 text-center text-sm leading-[1.6] text-text-light">
              {firstCourse.description}
            </p>
            <div className="flex flex-1 flex-col items-center justify-evenly py-2 text-center">
              <div>
                <p className="mb-0.5 text-sm">当院の施術を</p>
                <p className="font-bold text-primary">＼ はじめて受ける方に限り ／</p>
              </div>
              <div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-mincho text-lg text-primary">初回限定</span>
                  <strong className="font-mincho text-[48px] font-normal leading-none text-primary">
                    {firstCourse.price}
                  </strong>
                  <small className="text-sm font-bold text-primary">円(税込)</small>
                </div>
                <p className="mt-1 text-xs text-text-light">（{firstCourse.note}）</p>
                <p className="text-xs text-text-light">※2回目以降は通常施術料12,300円</p>
              </div>
              <p className="inline-block rounded-full bg-primary/20 px-5 py-1.5 text-sm font-bold text-primary">
                1日2名様限定
              </p>
            </div>
          </article>

          {/* 右: 通常コース・プリペードカード（2段） */}
          <div className="grid grid-cols-1 gap-[14px]">
            {otherCourses.map((course) =>
              course.id === "ticket" ? (
                <article key={course.id} className="ak-price-card !p-4">
                  <h3 className="rounded bg-[#f2e8df] px-2 py-2 font-mincho text-[22px]">
                    {course.name}
                  </h3>
                  <p className="border-b border-border-light py-1.5 text-sm leading-[1.6] text-text-light">
                    {course.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { label: "Suica",      bg: "#00b050", color: "#fff" },
                      { label: "PASMO",      bg: "#e2007a", color: "#fff" },
                      { label: "nanaco",     bg: "#f5a800", color: "#fff" },
                      { label: "WAON",       bg: "#00a0b0", color: "#fff" },
                      { label: "楽天Edy",    bg: "#bf0000", color: "#fff" },
                      { label: "iD",         bg: "#1a1a6e", color: "#fff" },
                      { label: "QUICPay",    bg: "#e07000", color: "#fff" },
                    ].map(({ label, bg, color }) => (
                      <span
                        key={label}
                        className="rounded px-3 py-1.5 text-[13px] font-bold tracking-wide"
                        style={{ background: bg, color }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </article>
              ) : (
                <article key={course.id} className="ak-price-card !p-4">
                  <h3 className="rounded bg-[#f2e8df] px-2 py-2 font-mincho text-[22px]">
                    {course.name}
                  </h3>
                  <p className="whitespace-pre-line border-b border-border-light py-1.5 text-sm leading-[1.6] text-text-light">
                    {course.description}
                  </p>
                  <div className="ak-price-main">
                    <strong className="font-mincho text-[42px] font-normal leading-none">
                      {course.price}
                    </strong>
                    <small className="text-xs">円（税込）</small>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        <div className="mt-6 hidden overflow-hidden rounded-xl border border-border-light bg-gradient-to-r from-[#f4ece3] to-[#eee2d7] p-[22px] md:grid md:grid-cols-1 lg:grid-cols-3">
          <div className="flex items-center gap-6 px-4 pb-5 max-[720px]:flex-col max-[720px]:text-center lg:border-r lg:border-border-light lg:px-6 lg:pb-0">
            <div className="grid h-[104px] w-[104px] flex-shrink-0 place-items-center rounded-full bg-white font-mincho">
              初めての方へ
            </div>
            <p className="text-xs leading-[1.9]">
              丁寧なカウンセリングと検査で、お体の状態を
              しっかりと確認させていただきます。
            </p>
          </div>
          <div className="flex items-center gap-4 border-t border-border-light px-4 py-5 lg:border-t-0 lg:border-r lg:border-border-light lg:px-6 lg:py-0">
            <div className="flex-shrink-0 text-primary">
              <svg aria-hidden="true" className="size-10" fill="none" viewBox="0 0 32 32">
                <rect height="20" rx="2" stroke="currentColor" strokeWidth="2" width="22" x="5" y="7" />
                <path d="M10 4v6M22 4v6M5 12h22M10 17h3M16 17h3M22 17h1M10 22h3M16 22h3" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-mincho text-lg">完全予約制</h3>
              <p className="text-xs leading-[1.9]">
                お一人おひとりにしっかりと
                時間を確保します。
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t border-border-light px-4 pt-5 lg:border-t-0 lg:px-6 lg:pt-0">
            <div className="text-[38px] text-primary">♡</div>
            <div>
              <h3 className="font-mincho text-lg">安心のサポート</h3>
              <p className="text-xs leading-[1.9]">
                施術後のアドバイスや
                セルフケアもお伝えします。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 text-xs text-text-light md:mt-6 md:flex-row md:flex-wrap md:justify-center md:gap-[30px]">
          {priceNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
