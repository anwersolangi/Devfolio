"use client";
import { useEffect, useState } from "react";
import { CopyButton } from "../ui";

const ALGOS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];

async function digest(algo, text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest(algo, data);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function HashTool() {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(ALGOS.map((a) => digest(a, text))).then((results) => {
      if (cancelled) return;
      const next = {};
      ALGOS.forEach((a, i) => (next[a] = results[i]));
      setHashes(next);
    });
    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-1.5 text-xs font-medium text-ink-2">Input text</div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Type or paste text to hash…"
          className="w-full resize-y rounded-xl border border-rule bg-bg p-4 text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
        />
      </div>

      <div className="space-y-3">
        {ALGOS.map((algo) => (
          <div key={algo} className="rounded-xl border border-rule bg-bg p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-accent">
                {algo}
              </span>
              <CopyButton value={hashes[algo] || ""} label="Copy" />
            </div>
            <code className="block break-all font-mono text-xs text-ink-2">
              {hashes[algo] || (
                <span className="text-ink-3">— enter text above —</span>
              )}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
