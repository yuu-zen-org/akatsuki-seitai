import Image from "next/image";

export function PhilosophySection() {
  return (
    <section className="py-8 md:py-20 lg:py-28" id="philosophy">
      <div data-reveal className="mx-auto grid w-[min(calc(100%-2rem),1260px)] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">

        {/* タイトル部分 — スマホ・PC共通で最初 */}
        <div className="order-1">
          <p className="mb-6 flex items-center gap-3 font-bold">
            <svg
              aria-hidden="true"
              className="size-7 text-primary"
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
            整体院 楓月が大切にしていること
          </p>

          <h2 className="font-mincho text-[28px] leading-[1.55] tracking-[.06em] md:text-4xl lg:text-5xl">
            あなたの体と、
            <br />
            まっすぐ向き合う時間を。
          </h2>

          {/* テキスト — PCのみここで表示 */}
          <div className="mt-7 hidden space-y-2 text-sm leading-8 lg:block">
            <p>その場だけ楽になるのではなく、</p>
            <p>不調の原因を一緒に見つけ、根本から整えていくこと。</p>
            <p>一人ひとりの体の状態や生活に寄り添い、</p>
            <p>丁寧に施術を行います。</p>
            <p>「ここに来ると安心する」と思っていただけるように、</p>
            <p>誠実に、まっすぐに、あなたの体と向き合います。</p>
          </div>
        </div>

        {/* 画像 — スマホ: 2番目、PC: 右カラム */}
        <div className="relative order-2 pb-20">
          <div className="relative h-[380px] overflow-hidden rounded-[4rem] shadow-xl md:h-[460px]">
            <Image
              src="/images/top/philosophy.jpg"
              alt="整体院楓月-Akatsuki- 泉中央院の施術風景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <aside className="absolute right-4 bottom-0 rounded-[45%_45%_1rem_1rem] bg-[#fff9f1] px-8 py-7 text-center shadow-lg">
            <strong className="text-primary">完全予約制</strong>
            <p className="mt-3 text-sm leading-6">
              お待たせしない
              <br />
              あなただけの時間を
              <br />
              大切にしています。
            </p>
          </aside>
        </div>

        {/* テキスト — スマホのみ画像の下に表示（非表示） */}
        <div className="order-3 space-y-1 text-sm leading-6 hidden">
          <p>その場だけ楽になるのではなく、</p>
          <p>不調の原因を一緒に見つけ、根本から整えていくこと。</p>
          <p>一人ひとりの体の状態や生活に寄り添い、</p>
          <p>丁寧に施術を行います。</p>
          <p>「ここに来ると安心する」と思っていただけるように、</p>
          <p>誠実に、まっすぐに、あなたの体と向き合います。</p>
        </div>

      </div>
    </section>
  );
}
