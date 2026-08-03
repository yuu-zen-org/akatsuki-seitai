"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { voices, youtubeVoices } from "@/data/voices";
import type { Voice } from "@/types";

const VIDEO_PER_PAGE = 6;
const TEXT_PER_PAGE = 12;

type Tab = "video" | "text";

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating}点`} className="flex gap-0.5 text-primary text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

function VoiceCard({ v }: { v: Voice }) {
  const label = [v.age, v.gender, v.initials].filter(Boolean).join("・");
  return (
    <article className="card-glass flex h-full flex-col rounded-2xl p-7">
      <div className="mb-4 flex items-center gap-4">
        {v.imagePath ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#f0e8df]">
            <Image src={v.imagePath} alt="" fill className="object-cover" sizes="56px" />
          </div>
        ) : (
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f0e8df]">
            <span className="font-mincho text-lg text-[#c4956a]">
              {v.gender === "女性" ? "女" : v.gender === "男性" ? "男" : "?"}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-bold">{label || "患者様"}</p>
          <p className="mt-0.5 text-xs text-text-muted">{v.symptom}</p>
          <Stars rating={v.rating} />
        </div>
      </div>
      <h3 className="mb-3 font-bold leading-[1.5]">{v.title}</h3>
      <p className="flex-1 text-sm leading-[1.9] text-text-light">{v.content}</p>
    </article>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  if (total <= 1) return null;
  return (
    <div className="mt-10 flex items-center justify-center gap-1.5">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-sm text-text-light transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
        aria-label="前のページ"
      >
        ‹
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={[
            "flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors",
            p === current
              ? "border-primary bg-primary text-white"
              : "border-border-light text-text-light hover:border-primary hover:text-primary",
          ].join(" ")}
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-sm text-text-light transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
        aria-label="次のページ"
      >
        ›
      </button>
    </div>
  );
}

export function VoiceTabs() {
  const [tab, setTab] = useState<Tab>("video");
  const [videoPage, setVideoPage] = useState(1);
  const [textPage, setTextPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const videoTotal = Math.ceil(youtubeVoices.length / VIDEO_PER_PAGE);
  const textTotal = Math.ceil(voices.length / TEXT_PER_PAGE);

  const pagedVideos = youtubeVoices.slice(
    (videoPage - 1) * VIDEO_PER_PAGE,
    videoPage * VIDEO_PER_PAGE
  );
  const pagedTexts = voices.slice(
    (textPage - 1) * TEXT_PER_PAGE,
    textPage * TEXT_PER_PAGE
  );

  function scrollToTop() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleVideoPage(p: number) {
    setVideoPage(p);
    scrollToTop();
  }

  function handleTextPage(p: number) {
    setTextPage(p);
    scrollToTop();
  }

  function handleTab(t: Tab) {
    setTab(t);
    scrollToTop();
  }

  return (
    <div ref={sectionRef}>
      {/* タブ */}
      <div className="mb-10 flex gap-0 overflow-hidden rounded-xl border border-border-light bg-white/60">
        {(
          [
            { key: "video", label: "動画インタビュー", count: youtubeVoices.length },
            { key: "text",  label: "患者様のご感想",   count: voices.length },
          ] as const
        ).map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => handleTab(key)}
            className={[
              "flex flex-1 items-center justify-center gap-2 py-4 text-sm font-bold transition-colors",
              tab === key
                ? "bg-primary text-white"
                : "text-text-light hover:text-primary",
            ].join(" ")}
          >
            {label}
            <span
              className={[
                "rounded-full px-2 py-0.5 text-[11px]",
                tab === key ? "bg-white/20 text-white" : "bg-primary-light text-primary-dark",
              ].join(" ")}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* 動画タブ */}
      {tab === "video" && (
        <>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagedVideos.map((v) => (
              <li key={v.id}>
                <article className="card-glass flex h-full flex-col overflow-hidden rounded-2xl">
                  <YouTubePlayer youtubeId={v.youtubeId!} title={v.title} />
                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary-light px-3 py-0.5 text-[11px] font-bold text-primary-dark">
                        {v.symptom}
                      </span>
                      <Stars rating={v.rating} />
                    </div>
                    <p className="mb-1 text-sm font-bold leading-[1.6]">{v.title}</p>
                    {v.content && (
                      <p className="mt-2 text-xs leading-[1.9] text-text-light">{v.content}</p>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <Pagination current={videoPage} total={videoTotal} onChange={handleVideoPage} />
        </>
      )}

      {/* テキストタブ */}
      {tab === "text" && (
        <>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagedTexts.map((v) => (
              <li key={v.id}>
                <VoiceCard v={v} />
              </li>
            ))}
          </ul>
          <Pagination current={textPage} total={textTotal} onChange={handleTextPage} />
          <p className="mt-8 text-center text-xs text-text-muted">
            ※個人の感想であり、施術の成果や効果を保証するものではありません。
          </p>
        </>
      )}
    </div>
  );
}
