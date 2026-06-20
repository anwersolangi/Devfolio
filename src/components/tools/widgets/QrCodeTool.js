"use client";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import {
  Field,
  Segmented,
  PrimaryButton,
  GhostButton,
  downloadBlob,
  downloadUrl,
} from "../ui";

const TYPES = [
  { value: "url", label: "URL" },
  { value: "text", label: "Text" },
  { value: "wifi", label: "Wi-Fi" },
  { value: "email", label: "Email" },
];

function buildPayload(type, fields) {
  switch (type) {
    case "wifi": {
      const esc = (s = "") => s.replace(/([\\;,:"])/g, "\\$1");
      if (!fields.ssid) return "";
      return `WIFI:T:${fields.encryption};S:${esc(fields.ssid)};P:${esc(
        fields.password,
      )};;`;
    }
    case "email": {
      if (!fields.email) return "";
      const params = new URLSearchParams();
      if (fields.subject) params.set("subject", fields.subject);
      if (fields.body) params.set("body", fields.body);
      const q = params.toString();
      return `mailto:${fields.email}${q ? `?${q}` : ""}`;
    }
    default:
      return fields.value || "";
  }
}

export default function QrCodeTool() {
  const [type, setType] = useState("url");
  const [value, setValue] = useState("https://anwersolangi.com");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [size, setSize] = useState(512);
  const [margin, setMargin] = useState(2);
  const [dark, setDark] = useState("#0d0c0b");
  const [light, setLight] = useState("#ffffff");
  const [ecLevel, setEcLevel] = useState("M");

  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");

  const payload = useMemo(
    () =>
      buildPayload(type, {
        value,
        ssid,
        password,
        encryption,
        email,
        subject,
        body,
      }),
    [type, value, ssid, password, encryption, email, subject, body],
  );

  useEffect(() => {
    let cancelled = false;
    if (!payload) {
      setDataUrl("");
      setError("");
      return;
    }
    QRCode.toDataURL(payload, {
      width: size,
      margin,
      errorCorrectionLevel: ecLevel,
      color: { dark, light },
    })
      .then((url) => {
        if (!cancelled) {
          setDataUrl(url);
          setError("");
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e.message || "Could not generate QR code");
      });
    return () => {
      cancelled = true;
    };
  }, [payload, size, margin, ecLevel, dark, light]);

  const downloadPng = () => {
    if (dataUrl) downloadUrl(dataUrl, "qr-code.png");
  };

  const downloadSvg = async () => {
    if (!payload) return;
    const svg = await QRCode.toString(payload, {
      type: "svg",
      margin,
      errorCorrectionLevel: ecLevel,
      color: { dark, light },
    });
    downloadBlob(new Blob([svg], { type: "image/svg+xml" }), "qr-code.svg");
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_auto]">
      {/* Controls */}
      <div className="space-y-5">
        <Segmented options={TYPES} value={type} onChange={setType} />

        {type === "wifi" ? (
          <div className="space-y-4">
            <Field label="Network name (SSID)">
              <input
                className={inputCls}
                value={ssid}
                onChange={(e) => setSsid(e.target.value)}
                placeholder="MyWiFi"
              />
            </Field>
            <Field label="Password">
              <input
                className={inputCls}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </Field>
            <Field label="Encryption">
              <Segmented
                options={["WPA", "WEP", "nopass"]}
                value={encryption}
                onChange={setEncryption}
              />
            </Field>
          </div>
        ) : type === "email" ? (
          <div className="space-y-4">
            <Field label="Email address">
              <input
                className={inputCls}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
              />
            </Field>
            <Field label="Subject (optional)">
              <input
                className={inputCls}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Field>
            <Field label="Message (optional)">
              <textarea
                className={`${inputCls} h-20 resize-none`}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Field>
          </div>
        ) : (
          <Field label={type === "url" ? "URL" : "Text"}>
            <textarea
              className={`${inputCls} h-24 resize-none`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={
                type === "url" ? "https://example.com" : "Anything you like"
              }
            />
          </Field>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Field label="Foreground">
            <ColorInput value={dark} onChange={setDark} />
          </Field>
          <Field label="Background">
            <ColorInput value={light} onChange={setLight} />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label={`Size — ${size}px`}>
            <input
              type="range"
              min={128}
              max={1024}
              step={32}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-[#ff6a3d]"
            />
          </Field>
          <Field label={`Quiet margin — ${margin}`}>
            <input
              type="range"
              min={0}
              max={8}
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-[#ff6a3d]"
            />
          </Field>
        </div>

        <Field label="Error correction" hint="Higher = more resilient, denser code">
          <Segmented
            options={[
              { value: "L", label: "Low" },
              { value: "M", label: "Medium" },
              { value: "Q", label: "Quartile" },
              { value: "H", label: "High" },
            ]}
            value={ecLevel}
            onChange={setEcLevel}
          />
        </Field>
      </div>

      {/* Preview */}
      <div className="flex flex-col items-center gap-4 md:w-64">
        <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-rule bg-white p-4">
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={dataUrl}
              alt="QR code preview"
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="px-4 text-center text-xs text-neutral-400">
              {error || "Enter content to preview"}
            </span>
          )}
        </div>
        <div className="flex w-full gap-2">
          <PrimaryButton
            className="flex-1"
            onClick={downloadPng}
            disabled={!dataUrl}
          >
            <Download className="h-4 w-4" /> PNG
          </PrimaryButton>
          <GhostButton className="flex-1" onClick={downloadSvg} disabled={!payload}>
            <Download className="h-4 w-4" /> SVG
          </GhostButton>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none";

function ColorInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-rule bg-bg px-2 py-1.5">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-7 w-7 cursor-pointer rounded border-none bg-transparent p-0"
        aria-label="Pick colour"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent font-mono text-xs text-ink focus:outline-none"
      />
    </div>
  );
}
