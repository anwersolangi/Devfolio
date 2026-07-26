"use client";

import { useRef } from "react";
import { useScrollSignal } from "@/components/SmoothScroll";

/**
 * Hairline read-out of how far down the page you are, driven by the same
 * scroll signal as everything else so it glides instead of stepping.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useScrollSignal(({ progress, limit }) => {
    const bar = barRef.current;
    if (!bar) return;
    // Short pages have nothing to report — stay invisible rather than pinned.
    const p = limit > 1 ? Math.min(Math.max(progress, 0), 1) : 0;
    bar.style.transform = `scaleX(${p})`;
    bar.style.opacity = p > 0.002 ? "1" : "0";
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[101] h-[2px] pointer-events-none"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 opacity-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, var(--accent), var(--accent-2))",
          boxShadow: "0 0 12px rgba(255, 106, 61, 0.45)",
        }}
      />
    </div>
  );
}
