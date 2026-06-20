"use client";
import { useMemo, useState } from "react";
import { Field, CopyButton } from "../ui";

function b64urlToJson(part) {
  let str = part.replace(/-/g, "+").replace(/_/g, "/");
  const pad = str.length % 4;
  if (pad) str += "=".repeat(4 - pad);
  const bin = atob(str);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

const TIME_CLAIMS = { exp: "Expires", iat: "Issued at", nbf: "Not before" };

export default function JwtDecoderTool() {
  const [token, setToken] = useState("");

  const result = useMemo(() => {
    const t = token.trim();
    if (!t) return null;
    const parts = t.split(".");
    if (parts.length < 2) return { error: "A JWT has at least two dot-separated parts." };
    try {
      const header = b64urlToJson(parts[0]);
      const payload = b64urlToJson(parts[1]);
      let expired = null;
      if (typeof payload.exp === "number") {
        expired = payload.exp * 1000 < Date.now();
      }
      return { header, payload, expired };
    } catch {
      return { error: "Couldn't decode that token — is it a valid JWT?" };
    }
  }, [token]);

  return (
    <div className="space-y-5">
      <Field label="JSON Web Token">
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          spellCheck={false}
          rows={4}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0..."
          className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-xs text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
        />
      </Field>

      {result?.error && <p className="text-sm text-[#ff7a7a]">{result.error}</p>}

      {result && !result.error && (
        <>
          {result.expired !== null && (
            <div
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold ${
                result.expired
                  ? "border-[#ff7a7a]/40 bg-[#ff7a7a]/10 text-[#ff7a7a]"
                  : "border-good/40 bg-good/10 text-good"
              }`}
            >
              {result.expired ? "● Expired" : "● Not expired"}
            </div>
          )}

          <div className="grid gap-4 lg:grid-cols-2">
            <JsonBlock title="Header" data={result.header} />
            <JsonBlock title="Payload" data={result.payload} />
          </div>

          {Object.keys(TIME_CLAIMS).some((k) => k in result.payload) && (
            <div className="rounded-xl border border-rule bg-bg p-4">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                Readable timestamps
              </div>
              <ul className="space-y-1 p-0">
                {Object.entries(TIME_CLAIMS).map(([key, label]) =>
                  typeof result.payload[key] === "number" ? (
                    <li
                      key={key}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-ink-2">
                        {label} <code className="text-ink-3">({key})</code>
                      </span>
                      <span className="font-mono text-xs text-ink">
                        {new Date(result.payload[key] * 1000).toUTCString()}
                      </span>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function JsonBlock({ title, data }) {
  const text = JSON.stringify(data, null, 2);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium text-ink-2">{title}</span>
        <CopyButton value={text} label="Copy" />
      </div>
      <pre className="max-h-72 overflow-auto rounded-xl border border-rule bg-bg p-4 font-mono text-xs text-ink">
        {text}
      </pre>
    </div>
  );
}
