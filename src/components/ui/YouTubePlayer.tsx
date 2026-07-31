"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  youtubeId: string;
  title: string;
}

export function YouTubePlayer({ youtubeId, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full rounded-xl"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="group relative block w-full overflow-hidden rounded-xl"
      style={{ paddingBottom: "56.25%" }}
      onClick={() => setPlaying(true)}
      aria-label={`${title}を再生`}
    >
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />
      {/* 再生ボタン */}
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-200 group-hover:bg-black/35">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 translate-x-0.5 text-primary"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
