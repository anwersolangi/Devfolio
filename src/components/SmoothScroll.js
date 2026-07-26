"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LenisContext = createContext({ lenis: null, reducedMotion: false });

/** The live Lenis instance, or `null` when smooth scroll is off. */
export function useLenis() {
  return useContext(LenisContext).lenis;
}

export function useReducedMotion() {
  return useContext(LenisContext).reducedMotion;
}

/**
 * Run `callback({ scroll, limit, progress, velocity, direction })` on every
 * scroll frame. Falls back to a native scroll listener when Lenis is off, so
 * scroll-driven UI keeps working under `prefers-reduced-motion`.
 */
export function useScrollSignal(callback) {
  const lenis = useLenis();
  const cb = useRef(callback);
  cb.current = callback;

  useEffect(() => {
    if (lenis) {
      const onScroll = (i) =>
        cb.current({
          scroll: i.scroll,
          limit: i.limit,
          progress: i.progress,
          velocity: i.velocity,
          direction: i.direction,
        });
      onScroll(lenis);
      return lenis.on("scroll", onScroll);
    }

    let last = window.scrollY;
    const onScroll = () => {
      const scroll = window.scrollY;
      const limit =
        document.documentElement.scrollHeight - window.innerHeight;
      cb.current({
        scroll,
        limit,
        progress: limit > 0 ? scroll / limit : 0,
        velocity: scroll - last,
        direction: Math.sign(scroll - last),
      });
      last = scroll;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);
}

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let instance = null;
    let rafId = 0;

    const start = () => {
      if (instance) return;
      instance = new Lenis({
        // Lerp is the fraction of the remaining distance covered each frame,
        // so higher = catches up faster = less floaty. 0.09 read as sluggish;
        // 0.16 keeps the smoothing but tracks the wheel much more closely.
        lerp: 0.16,
        wheelMultiplier: 1.15,
        touchMultiplier: 1.8,
        smoothWheel: true,
        // Leave touch to the OS — native momentum still beats a JS copy of it.
        syncTouch: false,
        // Let <pre>, the mobile menu, and the reels rail scroll on their own.
        allowNestedScroll: true,
        // Kill inertia the moment an internal link is clicked, so the next
        // page doesn't inherit a glide that's still in flight.
        stopInertiaOnNavigate: true,
        autoRaf: false,
      });

      const raf = (time) => {
        instance.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      setLenis(instance);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      instance?.destroy();
      instance = null;
      setLenis(null);
    };

    const sync = () => {
      setReducedMotion(media.matches);
      if (media.matches) stop();
      else start();
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      stop();
    };
  }, []);

  // Anchor links (#contact, #reels …). Lenis owns the animation so in-page
  // jumps ease exactly like the rest of the page. It reads `scroll-padding-top`
  // off <html> itself, so the fixed-header offset stays in globals.css.
  useEffect(() => {
    if (!lenis) return;

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      )
        return;

      const id = decodeURIComponent(url.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();
      window.history.pushState(null, "", url.hash);
      // Wait a frame: a nav link inside the mobile menu also closes it, and
      // that unlocks Lenis with a reset() that would cancel a scroll started
      // here and now. `force` covers the case where it never unlocks.
      requestAnimationFrame(() =>
        lenis.scrollTo(target, { duration: 0.85, force: true }),
      );
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  const value = useMemo(() => ({ lenis, reducedMotion }), [lenis, reducedMotion]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
