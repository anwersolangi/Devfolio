"use client";

import { useRef } from "react";
import AnimatedBeam from "@/components/ui/AnimatedBeam";
import { BRAND_LOGOS, BrandLogo } from "@/components/ui/BrandLogos";

const LEFT = ["react", "typescript", "expo", "graphql"];
const RIGHT = ["firebase", "nodedotjs", "stripe", "figma"];

function Node({ nodeRef, title, children, className = "" }) {
  return (
    <div
      ref={nodeRef}
      title={title}
      className={`z-10 flex items-center justify-center rounded-full border border-rule bg-bg-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-accent/40 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * The stack wired into the logo mark — outer nodes are the tools, and a beam
 * runs from each one into the centre.
 */
export default function PoweredBy() {
  const container = useRef(null);
  const centre = useRef(null);
  // Built once so each beam gets a stable ref object; rebuilding these inline
  // would hand AnimatedBeam a new identity every render and re-fire its effect.
  const leftRefs = useRef(LEFT.map(() => ({ current: null })));
  const rightRefs = useRef(RIGHT.map(() => ({ current: null })));

  return (
    <div className="w-full">
      <p className="text-center font-mono text-[11px] tracking-[0.14em] text-ink-3 uppercase">
        Powered by
      </p>

      <div
        ref={container}
        className="relative w-full max-w-3xl mx-auto overflow-hidden px-2 py-10 sm:py-14"
      >
        <div className="flex items-stretch justify-between gap-6 sm:gap-10">
          <div className="flex flex-col justify-between gap-6 sm:gap-9">
            {LEFT.map((slug, i) => (
              <Node
                key={slug}
                nodeRef={leftRefs.current[i]}
                title={BRAND_LOGOS[slug].label}
                className="size-11 sm:size-12 text-ink-2"
              >
                <BrandLogo slug={slug} className="size-5 sm:size-[22px]" />
              </Node>
            ))}
          </div>

          <div className="flex items-center">
            <Node
              nodeRef={centre}
              title="Anwer Solangi"
              className="size-20 sm:size-24 border-accent/40 bg-bg-3"
            >
              {/* Same mark as src/app/icon.svg, in accent rather than white. */}
              <svg
                viewBox="0 0 256 256"
                className="size-10 sm:size-12 text-accent"
                fill="currentColor"
                role="img"
                aria-label="Anwer Solangi"
              >
                <path d="M108.3 42h30L84 211.5H50zM117.7 42h29L206 211.5h-34zM97 142.5h62v28H97z" />
              </svg>
            </Node>
          </div>

          <div className="flex flex-col justify-between gap-6 sm:gap-9">
            {RIGHT.map((slug, i) => (
              <Node
                key={slug}
                nodeRef={rightRefs.current[i]}
                title={BRAND_LOGOS[slug].label}
                className="size-11 sm:size-12 text-ink-2"
              >
                <BrandLogo slug={slug} className="size-5 sm:size-[22px]" />
              </Node>
            ))}
          </div>
        </div>

        {/* Curvature flips sign across the midpoint so the beams bow away from
            the centre line instead of stacking on top of one another. */}
        {LEFT.map((slug, i) => (
          <AnimatedBeam
            key={`l-${slug}`}
            containerRef={container}
            fromRef={leftRefs.current[i]}
            toRef={centre}
            curvature={(i - (LEFT.length - 1) / 2) * -34}
            duration={3.6 + i * 0.25}
            delay={i * 0.45}
          />
        ))}
        {RIGHT.map((slug, i) => (
          <AnimatedBeam
            key={`r-${slug}`}
            containerRef={container}
            fromRef={rightRefs.current[i]}
            toRef={centre}
            curvature={(i - (RIGHT.length - 1) / 2) * -34}
            duration={3.6 + i * 0.25}
            delay={0.22 + i * 0.45}
            reverse
          />
        ))}
      </div>

      <p className="text-center font-mono text-[11px] tracking-[0.1em] text-ink-3">
        {[...LEFT, ...RIGHT].map((s) => BRAND_LOGOS[s].label).join(" · ")}
      </p>
    </div>
  );
}
