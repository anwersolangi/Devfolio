"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// The theme lives on <html data-theme>, set before paint by the script in
// layout.js. This component only reads it and asks that script to change it.
const read = () =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function switchTheme(next, origin) {
  const root = document.documentElement;
  const set = () => window.__setTheme?.(next);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Suppress per-element colour transitions for the switch itself. Removal
  // doesn't wait on requestAnimationFrame, which background tabs throttle.
  root.classList.add("theme-switching");
  const done = () => root.classList.remove("theme-switching");

  if (!document.startViewTransition || reduced || !origin) {
    set();
    void window.getComputedStyle(root).color; // flush styles with transitions off
    done();
    return;
  }

  // The new theme grows as a circle from the button (see globals.css).
  const { x, y } = origin;
  const r = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );
  root.style.setProperty("--theme-x", `${x}px`);
  root.style.setProperty("--theme-y", `${y}px`);
  root.style.setProperty("--theme-r", `${r}px`);
  const transition = document.startViewTransition(set);
  transition.finished.finally(done);
  setTimeout(done, 1000); // in case the transition is skipped or never settles
}

export default function ThemeToggle({ className = "" }) {
  // null during SSR and hydration, so server and client markup match; the
  // real value arrives on the next render.
  const theme = useSyncExternalStore(subscribe, read, () => null);
  const next = theme === "dark" ? "light" : "dark";
  const label = theme ? `Switch to ${next} mode` : "Switch colour theme";

  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        switchTheme(next, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }}
      aria-label={label}
      title={label}
      className={`theme-toggle relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-2 transition-colors duration-150 hover:bg-bg-3 hover:text-ink ${className}`}
    >
      <Moon className="theme-icon-moon h-[18px] w-[18px]" aria-hidden />
      <Sun className="theme-icon-sun h-[18px] w-[18px]" aria-hidden />
    </button>
  );
}
