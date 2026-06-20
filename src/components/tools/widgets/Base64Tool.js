"use client";
import { useMemo, useState } from "react";
import { CopyButton, Segmented, FileDrop } from "../ui";

function encodeB64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

function decodeB64(b64) {
  const bin = atob(b64.trim());
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

const MODES = [
  { value: "encode", label: "Text → Base64" },
  { value: "decode", label: "Base64 → Text" },
  { value: "file", label: "File → Base64" },
];

export default function Base64Tool() {
  const [mode, setMode] = useState("encode");
  const [input, setInput] = useState("");
  const [fileResult, setFileResult] = useState(null); // { dataUrl, name }

  const { output, error } = useMemo(() => {
    if (mode === "file" || !input) return { output: "", error: "" };
    try {
      return {
        output: mode === "encode" ? encodeB64(input) : decodeB64(input),
        error: "",
      };
    } catch {
      return { output: "", error: "That doesn't look like valid Base64." };
    }
  }, [mode, input]);

  const onFiles = ([file]) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setFileResult({ dataUrl: reader.result, name: file.name });
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-5">
      <Segmented options={MODES} value={mode} onChange={setMode} />

      {mode === "file" ? (
        <div className="space-y-4">
          <FileDrop
            onFiles={onFiles}
            label="Drop any file"
            hint="Generates a Base64 data URL"
          />
          {fileResult && (
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-medium text-ink-2">
                  {fileResult.name}
                </span>
                <CopyButton value={fileResult.dataUrl} label="Copy data URL" />
              </div>
              <textarea
                readOnly
                value={fileResult.dataUrl}
                rows={8}
                className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-xs text-ink focus:outline-none"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-medium text-ink-2">
              {mode === "encode" ? "Plain text" : "Base64"}
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              rows={10}
              placeholder={
                mode === "encode" ? "Type text to encode…" : "Paste Base64…"
              }
              className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
            />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-ink-2">
                {mode === "encode" ? "Base64" : "Plain text"}
              </span>
              <CopyButton value={output} label="Copy" />
            </div>
            <textarea
              value={error || output}
              readOnly
              spellCheck={false}
              rows={10}
              className={`w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm focus:outline-none ${
                error ? "text-[#ff7a7a]" : "text-ink"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
