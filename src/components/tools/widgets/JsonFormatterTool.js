"use client";
import { useState } from "react";
import { Check, AlertTriangle } from "lucide-react";
import { Segmented, CopyButton, PrimaryButton, GhostButton } from "../ui";

const SAMPLE = `{"name":"Anwer Solangi","role":"developer","skills":["React Native","Next.js"],"remote":true}`;

const INDENTS = [
  { value: "2", label: "2 spaces" },
  { value: "4", label: "4 spaces" },
  { value: "tab", label: "Tabs" },
];

export default function JsonFormatterTool() {
  const [input, setInput] = useState(SAMPLE);
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState("2");
  const [status, setStatus] = useState(null); // { ok, message }

  const parse = () => {
    try {
      const parsed = JSON.parse(input);
      setStatus({ ok: true, message: "Valid JSON" });
      return parsed;
    } catch (e) {
      setStatus({ ok: false, message: e.message });
      return undefined;
    }
  };

  const beautify = () => {
    const parsed = parse();
    if (parsed === undefined) return;
    const space = indent === "tab" ? "\t" : Number(indent);
    setOutput(JSON.stringify(parsed, null, space));
  };

  const minify = () => {
    const parsed = parse();
    if (parsed === undefined) return;
    setOutput(JSON.stringify(parsed));
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Segmented options={INDENTS} value={indent} onChange={setIndent} />
        <div className="flex gap-2">
          <PrimaryButton onClick={beautify}>Beautify</PrimaryButton>
          <GhostButton onClick={minify}>Minify</GhostButton>
        </div>
        {status && (
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium ${
              status.ok ? "text-good" : "text-[#ff7a7a]"
            }`}
          >
            {status.ok ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <AlertTriangle className="h-3.5 w-3.5" />
            )}
            {status.message}
          </span>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-1.5 text-xs font-medium text-ink-2">Input</div>
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setStatus(null);
            }}
            spellCheck={false}
            rows={14}
            placeholder="Paste your JSON here…"
            className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs font-medium text-ink-2">Output</span>
            <CopyButton value={output} label="Copy" />
          </div>
          <textarea
            value={output}
            readOnly
            spellCheck={false}
            rows={14}
            placeholder="Formatted JSON appears here…"
            className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink placeholder:text-ink-3 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
