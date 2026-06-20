"use client";
import { useMemo, useState } from "react";
import { CopyButton, Segmented, Field } from "../ui";

export default function UrlEncoderTool() {
  const [mode, setMode] = useState("encode");
  const [scope, setScope] = useState("component");
  const [input, setInput] = useState("");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    try {
      if (mode === "encode") {
        return {
          output:
            scope === "component"
              ? encodeURIComponent(input)
              : encodeURI(input),
          error: "",
        };
      }
      return {
        output:
          scope === "component" ? decodeURIComponent(input) : decodeURI(input),
        error: "",
      };
    } catch {
      return { output: "", error: "That string can't be decoded — check for stray % signs." };
    }
  }, [mode, scope, input]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-5">
        <Field label="Mode">
          <Segmented
            options={[
              { value: "encode", label: "Encode" },
              { value: "decode", label: "Decode" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </Field>
        <Field label="Scope" hint="Component encodes / ? & = ; Full URI keeps them">
          <Segmented
            options={[
              { value: "component", label: "Component" },
              { value: "uri", label: "Full URI" },
            ]}
            value={scope}
            onChange={setScope}
          />
        </Field>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-1.5 text-xs font-medium text-ink-2">Input</div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            rows={8}
            placeholder={
              mode === "encode"
                ? "https://example.com/search?q=hello world"
                : "https%3A%2F%2Fexample.com"
            }
            className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
          />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs font-medium text-ink-2">Output</span>
            <CopyButton value={output} label="Copy" />
          </div>
          <textarea
            value={error || output}
            readOnly
            spellCheck={false}
            rows={8}
            className={`w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm focus:outline-none ${
              error ? "text-[#ff7a7a]" : "text-ink"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
