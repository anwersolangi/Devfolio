"use client";
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
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

// Resolve the worker that ships with the installed pdfjs-dist version so it
// always matches the library and works offline (no CDN dependency).
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfToImageTool() {
  const [fileName, setFileName] = useState("");
  const [format, setFormat] = useState("image/png");
  const [scale, setScale] = useState(2);
  const [quality, setQuality] = useState(0.92);
  const [pages, setPages] = useState([]); // { num, url, blob }
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [buffer, setBuffer] = useState(null);

  const reset = () => {
    pages.forEach((p) => URL.revokeObjectURL(p.url));
    setPages([]);
  };

  const onFiles = async ([file]) => {
    if (!file || file.type !== "application/pdf") {
      setError("Please choose a PDF file.");
      return;
    }
    setError("");
    reset();
    const buf = await file.arrayBuffer();
    setBuffer(buf);
    setFileName(file.name.replace(/\.pdf$/i, ""));
  };

  const convert = async () => {
    if (!buffer) return;
    setBusy(true);
    setError("");
    reset();
    try {
      // pdf.js can detach the ArrayBuffer, so hand it a copy each run.
      const pdf = await pdfjsLib.getDocument({ data: buffer.slice(0) }).promise;
      const ext = format === "image/png" ? "png" : "jpg";
      const out = [];
      for (let n = 1; n <= pdf.numPages; n++) {
        const page = await pdf.getPage(n);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;
        const blob = await new Promise((res) =>
          canvas.toBlob((b) => res(b), format, quality),
        );
        out.push({
          num: n,
          url: URL.createObjectURL(blob),
          blob,
          name: `${fileName || "page"}-${n}.${ext}`,
        });
        page.cleanup();
      }
      setPages(out);
    } catch (e) {
      setError(e?.message || "Could not read that PDF.");
    } finally {
      setBusy(false);
    }
  };

  const downloadAll = async () => {
    if (!pages.length) return;
    const zip = new JSZip();
    pages.forEach((p) => zip.file(p.name, p.blob));
    const content = await zip.generateAsync({ type: "blob" });
    downloadBlob(content, `${fileName || "pdf"}-images.zip`);
  };

  if (!buffer) {
    return (
      <>
        <FileDrop
          accept="application/pdf"
          onFiles={onFiles}
          label="Drop a PDF here"
          hint="Converted locally — never uploaded"
        />
        {error && <p className="mt-3 text-sm text-accent">{error}</p>}
      </>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-5">
        <Field label="Format">
          <Segmented
            options={[
              { value: "image/png", label: "PNG" },
              { value: "image/jpeg", label: "JPG" },
            ]}
            value={format}
            onChange={setFormat}
          />
        </Field>
        <Field label={`Resolution — ${scale}×`}>
          <input
            type="range"
            min={1}
            max={4}
            step={0.5}
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="w-40 accent-[#ff6a3d]"
          />
        </Field>
        {format === "image/jpeg" && (
          <Field label={`JPG quality — ${Math.round(quality * 100)}%`}>
            <input
              type="range"
              min={0.4}
              max={1}
              step={0.01}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-40 accent-[#ff6a3d]"
            />
          </Field>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton onClick={convert} disabled={busy}>
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Rendering…
            </>
          ) : (
            <>Convert{fileName ? ` “${fileName}.pdf”` : ""}</>
          )}
        </PrimaryButton>
        {pages.length > 0 && (
          <GhostButton onClick={downloadAll}>
            <Download className="h-4 w-4" /> Download all (.zip)
          </GhostButton>
        )}
        <GhostButton
          onClick={() => {
            reset();
            setBuffer(null);
            setFileName("");
          }}
        >
          <RefreshCw className="h-4 w-4" /> New PDF
        </GhostButton>
      </div>

      {error && <p className="text-sm text-accent">{error}</p>}

      {pages.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {pages.map((p) => (
            <div
              key={p.num}
              className="overflow-hidden rounded-xl border border-rule bg-bg"
            >
              <div className="flex aspect-[3/4] items-center justify-center bg-white p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.url}
                  alt={`Page ${p.num}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-3 py-2">
                <span className="font-mono text-[11px] text-ink-3">
                  p{p.num} · {formatBytes(p.blob.size)}
                </span>
                <button
                  type="button"
                  onClick={() => downloadBlob(p.blob, p.name)}
                  className="text-ink-2 transition hover:text-accent"
                  aria-label={`Download page ${p.num}`}
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
