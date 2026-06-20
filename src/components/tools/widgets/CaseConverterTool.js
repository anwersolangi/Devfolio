"use client";
import { useMemo, useState } from "react";
import { CopyButton } from "../ui";

const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();

function tokenize(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CaseConverterTool() {
  const [input, setInput] = useState("The quick brown fox");

  const variants = useMemo(() => {
    const t = tokenize(input);
    return [
      { label: "UPPERCASE", value: input.toUpperCase() },
      { label: "lowercase", value: input.toLowerCase() },
      {
        label: "Sentence case",
        value: input
          .toLowerCase()
          .replace(/(^\s*\p{L}|[.!?]\s+\p{L})/gu, (c) => c.toUpperCase()),
      },
      {
        label: "Title Case",
        value: input
          .toLowerCase()
          .replace(/\b\p{L}/gu, (c) => c.toUpperCase()),
      },
      {
        label: "camelCase",
        value: t.map((w, i) => (i === 0 ? w.toLowerCase() : cap(w))).join(""),
      },
      { label: "PascalCase", value: t.map(cap).join("") },
      { label: "snake_case", value: t.map((w) => w.toLowerCase()).join("_") },
      { label: "kebab-case", value: t.map((w) => w.toLowerCase()).join("-") },
      { label: "CONSTANT_CASE", value: t.map((w) => w.toUpperCase()).join("_") },
      { label: "url-slug", value: slugify(input) },
    ];
  }, [input]);

  return (
    <div className="space-y-5">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        placeholder="Type or paste text to convert…"
        className="w-full resize-y rounded-xl border border-rule bg-bg p-4 text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
      />

      <div className="divide-y divide-rule rounded-xl border border-rule bg-bg">
        {variants.map((v) => (
          <div
            key={v.label}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                {v.label}
              </div>
              <div className="mt-0.5 truncate text-sm text-ink">
                {v.value || <span className="text-ink-3">—</span>}
              </div>
            </div>
            <CopyButton value={v.value} label="" className="shrink-0 px-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
