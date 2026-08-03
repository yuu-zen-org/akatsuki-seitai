"use client";

const circles = [
  { size: 700,  x: "50%",  top: -100, opacity: 0.80, dur: 25, delay: 0   },
  { size: 400,  x: "75%",  top: 60,   opacity: 0.45, dur: 18, delay: -4  },
  { size: 500,  x: "-8%",  top: 300,  opacity: 0.60, dur: 22, delay: -7  },
  { size: 350,  x: "35%",  top: 500,  opacity: 0.40, dur: 16, delay: -3  },
  { size: 600,  x: "60%",  top: 800,  opacity: 0.55, dur: 20, delay: -9  },
  { size: 450,  x: "10%",  top: 1100, opacity: 0.50, dur: 19, delay: -6  },
  { size: 300,  x: "45%",  top: 1400, opacity: 0.35, dur: 14, delay: -5  },
];

export function BackgroundBlurs() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      aria-hidden="true"
      style={{ height: "1800px", zIndex: 0 }}
    >
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: c.size,
            height: c.size,
            left: c.x,
            top: c.top,
            background: `radial-gradient(circle, rgba(244,161,61,${c.opacity}) 0%, rgba(244,161,61,0) 70%)`,
            filter: `blur(${Math.round(c.size * 0.14)}px)`,
            animation: `blob-drift-${i % 6} ${c.dur}s ease-in-out ${c.delay}s infinite`,
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
        <filter id="page-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#page-noise)" />
      </svg>
    </div>
  );
}
