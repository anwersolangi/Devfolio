"use client";
import { useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Segmented, Field, CopyButton, PrimaryButton } from "../ui";

const WORDS =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(
    " ",
  );

const rand = (n) => Math.floor(Math.random() * n);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function makeSentence() {
  const len = 8 + rand(8);
  const words = Array.from({ length: len }, () => WORDS[rand(WORDS.length)]);
  let s = words.join(" ");
  // sprinkle a comma
  if (len > 9) {
    const c = 3 + rand(len - 6);
    words[c] = words[c] + ",";
    s = words.join(" ");
  }
  return cap(s) + ".";
}

function makeParagraph() {
  const count = 3 + rand(4);
  return Array.from({ length: count }, makeSentence).join(" ");
}

export default function LoremIpsumTool() {
  const [unit, setUnit] = useState("paragraphs");
  const [count, setCount] = useState(3);
  const [startClassic, setStartClassic] = useState(true);
  const [seed, setSeed] = useState(0); // bump to regenerate

  const text = useMemo(() => {
    const n = Math.min(100, Math.max(1, count || 1));
    let out;
    if (unit === "words") {
      out = Array.from({ length: n }, () => WORDS[rand(WORDS.length)]).join(" ");
      out = cap(out) + ".";
    } else if (unit === "sentences") {
      out = Array.from({ length: n }, makeSentence).join(" ");
    } else {
      out = Array.from({ length: n }, makeParagraph).join("\n\n");
    }
    if (startClassic) {
      out = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        out.replace(/^[^]*?\. /, "");
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, count, startClassic, seed]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-5">
        <Field label="Generate">
          <Segmented
            options={[
              { value: "paragraphs", label: "Paragraphs" },
              { value: "sentences", label: "Sentences" },
              { value: "words", label: "Words" },
            ]}
            value={unit}
            onChange={setUnit}
          />
        </Field>
        <Field label="Amount">
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-24 rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <button
          type="button"
          onClick={() => setStartClassic((v) => !v)}
          className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition ${
            startClassic
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-rule text-ink-2 hover:text-ink"
          }`}
        >
          Start with “Lorem ipsum…”
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton onClick={() => setSeed((s) => s + 1)}>
          <RefreshCw className="h-4 w-4" /> Regenerate
        </PrimaryButton>
        <CopyButton value={text} label="Copy text" />
      </div>

      <textarea
        readOnly
        value={text}
        rows={12}
        className="w-full resize-y rounded-xl border border-rule bg-bg p-4 text-sm leading-relaxed text-ink focus:outline-none"
      />
    </div>
  );
}
