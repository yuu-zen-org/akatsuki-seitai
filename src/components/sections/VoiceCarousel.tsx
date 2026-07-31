"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { voices } from "@/data/voices";

const textVoices = voices.filter((v) => !v.youtubeId && v.imagePath);

export function VoiceCarousel() {
  const [index, setIndex] = useState(0);

  const getVisible = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }, []);

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getVisible]);

  const maxIndex = Math.max(0, textVoices.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const currentIndex = Math.min(index, maxIndex);

  return (
    <div className="relative">
      <button
        type="button"
        className="ak-carousel-arrow prev"
        aria-label="前へ"
        onClick={prev}
        style={{ opacity: currentIndex === 0 ? 0.35 : 1 }}
      >
        ‹
      </button>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-400 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visible + 20 / visible)}%)`,
          }}
        >
          {textVoices.map((voice) => (
            <article key={voice.id} className="ak-voice-card">
              <div className="relative mb-4 h-[180px] overflow-hidden rounded-[10px]">
                <Image
                  src={voice.imagePath!}
                  alt={`${voice.age ? voice.age + "・" : ""}${voice.gender}の患者様`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="font-mincho text-lg">
                  {voice.age ? `${voice.age}・` : ""}{voice.gender}
                </p>
                <span className="rounded-full bg-[#f2e8df] px-[10px] py-[3px] text-[11px]">
                  {voice.symptom}
                </span>
              </div>
              <b className="mt-[7px] block text-xl tracking-[.08em] text-primary">
                {"★".repeat(voice.rating)}
              </b>
              <h3 className="mt-4 mb-3 border-b border-dashed border-border-light pb-3 font-mincho text-[19px]">
                {voice.title}
              </h3>
              <p className="text-[13px] leading-8 text-text-light">{voice.content}</p>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="ak-carousel-arrow next"
        aria-label="次へ"
        onClick={next}
        style={{ opacity: currentIndex >= maxIndex ? 0.35 : 1 }}
      >
        ›
      </button>

      <div className="ak-carousel-dots">
        {Array.from({ length: Math.max(1, maxIndex + 1) }, (_, i) => (
          <button
            key={i}
            type="button"
            className={i === currentIndex ? "active" : ""}
            aria-label={`${i + 1}ページ目`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
