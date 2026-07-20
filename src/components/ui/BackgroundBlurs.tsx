"use client";

import { useEffect, useRef } from "react";

interface BlurCircle {
  size: number;
  x: string;
  y: string;
  opacity: number;
  animDuration: number;
  animDelay: number;
}

// fixed配置なのでビューポート基準で配置
const circles: BlurCircle[] = [
  // FV右上 — 主役・大きく明るく
  { size: 700,  x: "52%",   y: "-10vh", opacity: 0.85, animDuration: 25, animDelay: 0   },
  { size: 350,  x: "72%",   y: "8vh",   opacity: 0.4,  animDuration: 18, animDelay: -4  },
  // 左下エリア
  { size: 750,  x: "-15%",  y: "55vh",  opacity: 0.75, animDuration: 22, animDelay: -7  },
  { size: 450,  x: "5%",    y: "30vh",  opacity: 0.55, animDuration: 16, animDelay: -3  },
  // 右下エリア（控えめに）
  { size: 500,  x: "62%",   y: "65vh",  opacity: 0.45, animDuration: 20, animDelay: -9  },
  // 中央アクセント
  { size: 500,  x: "30%",   y: "45vh",  opacity: 0.45, animDuration: 19, animDelay: -6  },
  { size: 350,  x: "48%",   y: "78vh",  opacity: 0.4,  animDuration: 14, animDelay: -11 },
  // 小さいアクセント
  { size: 240,  x: "15%",   y: "70vh",  opacity: 0.45, animDuration: 13, animDelay: -8  },
  { size: 300,  x: "38%",   y: "20vh",  opacity: 0.4,  animDuration: 11, animDelay: -5  },
];

export function BackgroundBlurs() {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {circles.map((c, i) => (
        <div
          key={i}
          ref={(el) => { circleRefs.current[i] = el; }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: c.size,
            height: c.size,
            left: c.x,
            top: c.y,
            background: `radial-gradient(circle, rgba(244, 161, 61, ${c.opacity}) 0%, rgba(244, 161, 61, 0) 70%)`,
            filter: `blur(${Math.round(c.size * 0.14)}px)`,
            animation: `blob-drift-${i % 6} ${c.animDuration}s ease-in-out ${c.animDelay}s infinite`,
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-[0.05]">
        <filter id="page-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#page-noise)" />
      </svg>
    </div>
  );
}
