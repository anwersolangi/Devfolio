"use client";
import { useMemo, useState } from "react";

const STOP = new Set(
  "the a an and or but of to in on at for with is are was were be been it this that these those as by from your you our we i he she they them his her its their".split(
    " ",
  ),
);

function readTime(words, wpm) {
  const mins = words / wpm;
  if (words === 0) return "0 sec";
  if (mins < 1) return `${Math.max(1, Math.round(mins * 60))} sec`;
  return `${Math.round(mins)} min`;
}

export default function WordCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const sentences = trimmed
      ? trimmed.split(/[.!?]+(?:\s|$)/).filter((s) => s.trim()).length
      : 0;
    const paragraphs = trimmed
      ? trimmed.split(/\n{1,}/).filter((p) => p.trim()).length
      : 0;

    const freq = {};
    for (const raw of words) {
      const w = raw.toLowerCase().replace(/[^a-z0-9'-]/g, "");
      if (w.length < 3 || STOP.has(w)) continue;
      freq[w] = (freq[w] || 0) + 1;
    }
    const keywords = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    return {
      words: words.length,
      chars: text.length,
      charsNoSpace: text.replace(/\s/g, "").length,
      sentences,
      paragraphs,
      reading: readTime(words.length, 225),
      speaking: readTime(words.length, 130),
      keywords,
    };
  }, [text]);

  const cards = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "No spaces", value: stats.charsNoSpace },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading", value: stats.reading },
    { label: "Speaking", value: stats.speaking },
  ];

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={12}
        placeholder="Start typing or paste your text…"
        className="w-full resize-y rounded-xl border border-rule bg-bg p-4 text-sm leading-relaxed text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-xl border border-rule bg-bg p-3 text-center"
          >
            <div className="text-xl font-bold tabular-nums text-ink">
              {c.value}
            </div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {stats.keywords.length > 0 && (
        <div>
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
            Top keywords
          </div>
          <div className="flex flex-wrap gap-2">
            {stats.keywords.map(([word, count]) => (
              <span
                key={word}
                className="inline-flex items-center gap-1.5 rounded-lg border border-rule bg-bg px-2.5 py-1 text-xs text-ink-2"
              >
                {word}
                <span className="font-mono text-[10px] text-accent">{count}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
