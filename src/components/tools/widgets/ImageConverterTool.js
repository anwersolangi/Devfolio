"use client";
import { useState } from "react";
import JSZip from "jszip";
import { Download, Loader2, RefreshCw } from "lucide-react";
import {
  FileDrop,
  Field,
  Segmented,
  PrimaryButton,
  GhostButton,
  downloadBlob,
  formatBytes,
} from "../ui";

const FORMATS = [
  { value: "image/png", label: "PNG", ext: "png" },
  { value: "image/jpeg", label: "JPG", ext: "jpg" },
  { value: "image/webp", label: "WebP", ext: "webp" },
];

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve({ img, url });
    img.onerror = reject;
    img.src = url;
  });
}

function convert(img, format, quality) {
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (format === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), format, quality),
  );
}

export default function ImageConverterTool() {
  const [files, setFiles] = useState([]); // raw File[]
  const [format, setFormat] = useState("image/webp");
  const [quality, setQuality] = useState(0.9);
  const [results, setResults] = useState([]); // { name, blob, url, originalSize }
  const [busy, setBusy] = useState(false);

  const meta = FORMATS.find((f) => f.value === format);

  const onFiles = (incoming) => {
    setResults([]);
    setFiles((prev) => [...prev, ...incoming]);
  };

  const run = async () => {
    setBusy(true);
    results.forEach((r) => URL.revokeObjectURL(r.url));
    try {
      const out = [];
      for (const file of files) {
        const { img, url } = await loadImage(file);
        const blob = await convert(img, format, quality);
        URL.revokeObjectURL(url);
        if (blob) {
          out.push({
            name: file.name.replace(/\.[^.]+$/, "") + `.${meta.ext}`,
            blob,
            url: URL.createObjectURL(blob),
            originalSize: file.size,
          });
        }
      }
      setResults(out);
    } finally {
      setBusy(false);
    }
  };

  const downloadAll = async () => {
    const zip = new JSZip();
    results.forEach((r) => zip.file(r.name, r.blob));
    const content = await zip.generateAsync({ type: "blob" });
    downloadBlob(content, `converted-${meta.ext}.zip`);
  };

  if (files.length === 0) {
    return (
      <FileDrop
        accept="image/png,image/jpeg,image/webp"
        multiple
        onFiles={onFiles}
        label="Drop images to convert"
        hint="Add one or many — PNG, JPG or WebP"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-5">
        <Field label="Convert to">
          <Segmented options={FORMATS} value={format} onChange={setFormat} />
        </Field>
        {format !== "image/png" && (
          <Field label={`Quality — ${Math.round(quality * 100)}%`}>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.01}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-44 accent-[#ff6a3d]"
            />
          </Field>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton onClick={run} disabled={busy}>
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Converting…
            </>
          ) : (
            <>Convert {files.length} image{files.length > 1 ? "s" : ""}</>
          )}
        </PrimaryButton>
        {results.length > 1 && (
          <GhostButton onClick={downloadAll}>
            <Download className="h-4 w-4" /> Download all (.zip)
          </GhostButton>
        )}
        <GhostButton
          onClick={() => {
            results.forEach((r) => URL.revokeObjectURL(r.url));
            setFiles([]);
            setResults([]);
          }}
        >
          <RefreshCw className="h-4 w-4" /> Clear
        </GhostButton>
      </div>

      <ul className="space-y-2 p-0">
        {(results.length ? results : files).map((item, i) => {
          const isResult = results.length > 0;
          return (
            <li
              key={i}
              className="flex items-center justify-between gap-4 rounded-xl border border-rule bg-bg px-4 py-3"
            >
              <span className="min-w-0 truncate text-sm text-ink">
                {isResult ? item.name : item.name}
              </span>
              <span className="flex shrink-0 items-center gap-3 font-mono text-[11px] text-ink-3">
                {isResult ? (
                  <>
                    {formatBytes(item.originalSize)} → {formatBytes(item.blob.size)}
                    <button
                      type="button"
                      onClick={() => downloadBlob(item.blob, item.name)}
                      className="text-ink-2 transition hover:text-accent"
                      aria-label={`Download ${item.name}`}
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  formatBytes(item.size)
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
