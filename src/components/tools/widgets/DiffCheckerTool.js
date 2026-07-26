"use client";
import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeftRight,
  Check,
  Download,
  FileText,
  Trash2,
  UploadCloud,
} from "lucide-react";
import {
  CheckOption,
  CopyButton,
  GhostButton,
  Metric,
  Segmented,
  downloadText,
  readTextFile,
  useDropZone,
} from "../ui";

const CONTEXT_LINES = 3;
// Guard on the O(m×n) LCS table so a huge paste can't lock the tab up.
const LCS_CELL_LIMIT = 4_000_000;

const SAMPLE_LEFT = `function greet(name) {
  const greeting = "Hello, " + name;
  console.log(greeting);
  return greeting;
}

export default greet;`;

const SAMPLE_RIGHT = `function greet(name, greeting = "Hello") {
  const message = \`\${greeting}, \${name}!\`;
  console.log(message);
  return message;
}

export default greet;`;

function lcsMatches(a, b, eq) {
  const m = a.length;
  const n = b.length;
  if (!m || !n) return [];
  if (m * n > LCS_CELL_LIMIT) return null;

  const dp = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = eq(a[i - 1], b[j - 1])
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const matches = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (eq(a[i - 1], b[j - 1])) {
      matches.push([i - 1, j - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return matches.reverse();
}

function diffSequences(a, b, eq = (x, y) => x === y) {
  let start = 0;
  const shortest = Math.min(a.length, b.length);
  while (start < shortest && eq(a[start], b[start])) start++;

  let endA = a.length;
  let endB = b.length;
  while (endA > start && endB > start && eq(a[endA - 1], b[endB - 1])) {
    endA--;
    endB--;
  }

  const ops = [];
  for (let i = 0; i < start; i++) ops.push({ type: "equal", a: i, b: i });

  const midA = a.slice(start, endA);
  const midB = b.slice(start, endB);
  const matches = lcsMatches(midA, midB, eq);

  if (matches === null) {
    for (let i = 0; i < midA.length; i++) ops.push({ type: "del", a: start + i });
    for (let j = 0; j < midB.length; j++) ops.push({ type: "add", b: start + j });
    ops.truncated = true;
  } else {
    let ai = 0;
    let bi = 0;
    for (const [mi, mj] of matches) {
      while (ai < mi) ops.push({ type: "del", a: start + ai++ });
      while (bi < mj) ops.push({ type: "add", b: start + bi++ });
      ops.push({ type: "equal", a: start + mi, b: start + mj });
      ai = mi + 1;
      bi = mj + 1;
    }
    while (ai < midA.length) ops.push({ type: "del", a: start + ai++ });
    while (bi < midB.length) ops.push({ type: "add", b: start + bi++ });
  }

  for (let k = 0; k < a.length - endA; k++) {
    ops.push({ type: "equal", a: endA + k, b: endB + k });
  }
  return ops;
}

function intraLineDiff(left, right, granularity) {
  const split =
    granularity === "chars"
      ? (s) => Array.from(s)
      : (s) => s.match(/\s+|[^\s]+/g) || [];
  const a = split(left);
  const b = split(right);
  const ops = diffSequences(a, b);

  const parts = [];
  for (const op of ops) {
    const value = op.type === "add" ? b[op.b] : a[op.a];
    const last = parts[parts.length - 1];
    if (last && last.type === op.type) last.value += value;
    else parts.push({ type: op.type, value });
  }
  return parts;
}

const splitLines = (text) => (text === "" ? [] : text.split(/\r\n|\r|\n/));

/** Lines carry their original 1-based number so filters don't shift the gutter. */
function toLines(text, ignoreBlank) {
  const lines = splitLines(text).map((value, index) => ({
    text: value,
    no: index + 1,
  }));
  return ignoreBlank ? lines.filter((line) => line.text.trim() !== "") : lines;
}

function buildRows(ops, aLines, bLines, granularity) {
  const rows = [];
  let i = 0;
  while (i < ops.length) {
    if (ops[i].type === "equal") {
      rows.push({
        kind: "equal",
        left: aLines[ops[i].a],
        right: bLines[ops[i].b],
      });
      i++;
      continue;
    }

    const removed = [];
    while (i < ops.length && ops[i].type === "del") removed.push(aLines[ops[i++].a]);
    const added = [];
    while (i < ops.length && ops[i].type === "add") added.push(bLines[ops[i++].b]);

    const paired = Math.min(removed.length, added.length);
    for (let k = 0; k < paired; k++) {
      rows.push({
        kind: "changed",
        left: removed[k],
        right: added[k],
        parts: intraLineDiff(removed[k].text, added[k].text, granularity),
      });
    }
    for (let k = paired; k < removed.length; k++) {
      rows.push({ kind: "del", left: removed[k], right: null });
    }
    for (let k = paired; k < added.length; k++) {
      rows.push({ kind: "add", left: null, right: added[k] });
    }
  }
  return rows;
}

function buildUnifiedPatch(rows) {
  const lines = [];
  for (const row of rows) {
    if (row.kind === "equal") {
      lines.push({ sign: " ", text: row.left.text, aNo: row.left.no, bNo: row.right.no });
    } else if (row.kind === "changed") {
      lines.push({ sign: "-", text: row.left.text, aNo: row.left.no });
      lines.push({ sign: "+", text: row.right.text, bNo: row.right.no });
    } else if (row.kind === "del") {
      lines.push({ sign: "-", text: row.left.text, aNo: row.left.no });
    } else {
      lines.push({ sign: "+", text: row.right.text, bNo: row.right.no });
    }
  }

  const isChange = lines.map((line) => line.sign !== " ");
  const out = ["--- original", "+++ modified"];
  let i = 0;

  while (i < lines.length) {
    if (!isChange[i]) {
      i++;
      continue;
    }
    const start = Math.max(0, i - CONTEXT_LINES);
    let last = i;
    let j = i + 1;
    while (j < lines.length) {
      if (isChange[j]) {
        last = j;
        j++;
      } else {
        let k = j;
        while (k < lines.length && !isChange[k] && k - last <= CONTEXT_LINES * 2) k++;
        if (k < lines.length && isChange[k]) j = k;
        else break;
      }
    }
    const end = Math.min(lines.length - 1, last + CONTEXT_LINES);
    const slice = lines.slice(start, end + 1);

    const aCount = slice.filter((l) => l.sign !== "+").length;
    const bCount = slice.filter((l) => l.sign !== "-").length;
    const aStart = slice.find((l) => l.aNo !== undefined)?.aNo ?? 0;
    const bStart = slice.find((l) => l.bNo !== undefined)?.bNo ?? 0;

    out.push(`@@ -${aStart},${aCount} +${bStart},${bCount} @@`);
    for (const line of slice) out.push(line.sign + line.text);
    i = end + 1;
  }

  return out.length > 2 ? out.join("\n") + "\n" : "";
}

function collapseRows(rows) {
  const output = [];
  let i = 0;
  while (i < rows.length) {
    if (rows[i].kind !== "equal") {
      output.push(rows[i]);
      i++;
      continue;
    }
    let end = i;
    while (end < rows.length && rows[end].kind === "equal") end++;
    const run = end - i;
    if (run > CONTEXT_LINES * 2 + 1) {
      const head = i === 0 ? 0 : CONTEXT_LINES;
      const tail = end === rows.length ? 0 : CONTEXT_LINES;
      for (let k = i; k < i + head; k++) output.push(rows[k]);
      output.push({ kind: "skip", count: run - head - tail });
      for (let k = end - tail; k < end; k++) output.push(rows[k]);
    } else {
      for (let k = i; k < end; k++) output.push(rows[k]);
    }
    i = end;
  }
  return output;
}

const MARK = {
  del: "rounded-sm bg-[#ff7a7a]/25 text-[#ffbcbc]",
  add: "rounded-sm bg-good/25 text-good",
};

function LineContent({ row, side }) {
  const line = side === "del" ? row.left : row.right;
  if (!line) return null;
  if (row.kind !== "changed") return line.text || " ";

  const visible = row.parts.filter(
    (part) => part.type === "equal" || part.type === side,
  );
  return visible.map((part, index) => (
    <span key={index} className={part.type === "equal" ? "" : MARK[side]}>
      {part.value}
    </span>
  ));
}

const ROW_TINT = {
  equal: "",
  changed: "bg-accent/[0.04]",
  del: "bg-[#ff7a7a]/[0.07]",
  add: "bg-good/[0.07]",
};

function Gutter({ no, tone }) {
  return (
    <div
      className={`select-none border-r border-rule px-2 py-0.5 text-right font-mono text-[10px] leading-relaxed ${
        tone || "text-ink-3"
      }`}
    >
      {no ?? ""}
    </div>
  );
}

function SkipRow({ count, span }) {
  return (
    <div
      className="border-y border-rule bg-bg-2 px-3 py-1 text-center font-mono text-[10px] text-ink-3"
      style={{ gridColumn: `span ${span}` }}
    >
      ⋯ {count.toLocaleString()} unchanged {count === 1 ? "line" : "lines"} ⋯
    </div>
  );
}

function EditorPane({ label, value, onChange, accentClass, onFile, fileName }) {
  const inputRef = useRef(null);
  const { dragging, dropHandlers } = useDropZone(async ([file]) => {
    if (!file) return;
    onFile(file.name, await readTextFile(file));
  });

  const lineCount = value === "" ? 0 : splitLines(value).length;

  return (
    <div
      {...dropHandlers}
      className={`relative rounded-xl border p-3 transition ${
        dragging ? "border-accent bg-accent/5" : "border-rule bg-bg"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
          {label}
        </span>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-1 rounded-md border border-rule px-2 py-0.5 text-[11px] text-ink-2 transition hover:border-accent/40 hover:text-ink"
        >
          <UploadCloud className="h-3 w-3" /> File
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".txt,.md,.json,.csv,.js,.jsx,.ts,.tsx,.css,.html,.xml,.yml,.yaml,.log,text/*"
          className="hidden"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) onFile(file.name, await readTextFile(file));
            e.target.value = "";
          }}
        />
        {fileName && (
          <span className="inline-flex max-w-[45%] items-center gap-1 truncate rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] text-ink-2">
            <FileText className="h-3 w-3 shrink-0 text-accent" />
            <span className="truncate">{fileName}</span>
          </span>
        )}
        <span className="ml-auto text-[11px] text-ink-3">
          {lineCount.toLocaleString()} {lineCount === 1 ? "line" : "lines"}
        </span>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        rows={12}
        placeholder="Paste text here, or drop a file anywhere in this box…"
        className={`w-full resize-y rounded-lg border border-rule bg-bg-2 p-4 font-mono text-sm leading-relaxed text-ink placeholder:text-ink-3 focus:outline-none ${accentClass}`}
      />

      {dragging && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-accent bg-bg/90">
          <UploadCloud className="h-7 w-7 text-accent" />
          <p className="mt-2 text-sm font-medium text-ink">Drop to load</p>
        </div>
      )}
    </div>
  );
}

export default function DiffCheckerTool() {
  const [original, setOriginal] = useState(SAMPLE_LEFT);
  const [modified, setModified] = useState(SAMPLE_RIGHT);
  const [names, setNames] = useState({ left: null, right: null });
  const [view, setView] = useState("split");
  const [granularity, setGranularity] = useState("words");
  const [opts, setOpts] = useState({
    ignoreCase: false,
    ignoreWhitespace: false,
    ignoreBlankLines: false,
    hideUnchanged: false,
  });

  const setOpt = (key) => (value) =>
    setOpts((prev) => ({ ...prev, [key]: value }));

  const diff = useMemo(() => {
    const aLines = toLines(original, opts.ignoreBlankLines);
    const bLines = toLines(modified, opts.ignoreBlankLines);

    const normalise = (line) => {
      let text = line.text;
      if (opts.ignoreWhitespace) text = text.replace(/\s+/g, " ").trim();
      if (opts.ignoreCase) text = text.toLowerCase();
      return text;
    };
    const cacheA = aLines.map(normalise);
    const cacheB = bLines.map(normalise);

    const ops = diffSequences(
      aLines.map((_, i) => i),
      bLines.map((_, i) => i),
      (i, j) => cacheA[i] === cacheB[j],
    );
    const rows = buildRows(ops, aLines, bLines, granularity);

    let added = 0;
    let removed = 0;
    let unchanged = 0;
    let equalChars = 0;
    for (const row of rows) {
      if (row.kind === "equal") {
        unchanged++;
        equalChars += row.left.text.length;
      } else if (row.kind === "changed") {
        added++;
        removed++;
        for (const part of row.parts) {
          if (part.type === "equal") equalChars += part.value.length;
        }
      } else if (row.kind === "add") {
        added++;
      } else {
        removed++;
      }
    }

    const totalChars = original.length + modified.length;
    const similarity =
      totalChars === 0
        ? 100
        : Math.max(0, Math.min(100, Math.round((equalChars * 2 * 100) / totalChars)));

    return {
      rows,
      added,
      removed,
      unchanged,
      similarity,
      truncated: Boolean(ops.truncated),
      identical: added === 0 && removed === 0,
    };
  }, [original, modified, granularity, opts]);

  const visibleRows = useMemo(
    () => (opts.hideUnchanged ? collapseRows(diff.rows) : diff.rows),
    [diff.rows, opts.hideUnchanged],
  );

  const patch = useMemo(() => buildUnifiedPatch(diff.rows), [diff.rows]);

  const swap = () => {
    setOriginal(modified);
    setModified(original);
    setNames((prev) => ({ left: prev.right, right: prev.left }));
  };

  const clear = () => {
    setOriginal("");
    setModified("");
    setNames({ left: null, right: null });
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-2">
        <EditorPane
          label="Original"
          value={original}
          onChange={setOriginal}
          accentClass="focus:border-[#ff7a7a]/50"
          fileName={names.left}
          onFile={(name, text) => {
            setNames((prev) => ({ ...prev, left: name }));
            setOriginal(text);
          }}
        />
        <EditorPane
          label="Modified"
          value={modified}
          onChange={setModified}
          accentClass="focus:border-good/50"
          fileName={names.right}
          onFile={(name, text) => {
            setNames((prev) => ({ ...prev, right: name }));
            setModified(text);
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <GhostButton onClick={swap} className="px-3 py-2 text-xs">
          <ArrowLeftRight className="h-3.5 w-3.5" /> Swap sides
        </GhostButton>
        <GhostButton
          onClick={clear}
          disabled={!original && !modified}
          className="px-3 py-2 text-xs"
        >
          <Trash2 className="h-3.5 w-3.5" /> Clear both
        </GhostButton>
      </div>

      <div className="space-y-4 rounded-xl border border-rule bg-bg p-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              View
            </span>
            <Segmented
              options={[
                { value: "split", label: "Side by side" },
                { value: "unified", label: "Unified" },
                { value: "inline", label: "Inline" },
              ]}
              value={view}
              onChange={setView}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              Detail
            </span>
            <Segmented
              options={[
                { value: "words", label: "Word" },
                { value: "chars", label: "Character" },
              ]}
              value={granularity}
              onChange={setGranularity}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-rule pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <CheckOption
            checked={opts.ignoreCase}
            onChange={setOpt("ignoreCase")}
            label="Ignore case"
            hint="Treat Name and name as equal"
          />
          <CheckOption
            checked={opts.ignoreWhitespace}
            onChange={setOpt("ignoreWhitespace")}
            label="Ignore whitespace"
            hint="Collapse runs of spaces and tabs"
          />
          <CheckOption
            checked={opts.ignoreBlankLines}
            onChange={setOpt("ignoreBlankLines")}
            label="Ignore blank lines"
            hint="Skip empty lines on both sides"
          />
          <CheckOption
            checked={opts.hideUnchanged}
            onChange={setOpt("hideUnchanged")}
            label="Collapse unchanged"
            hint={`Keep ${CONTEXT_LINES} lines of context`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Added" value={`+${diff.added}`} tone="good" />
        <Metric label="Removed" value={`−${diff.removed}`} tone="bad" />
        <Metric label="Unchanged" value={diff.unchanged} />
        <Metric label="Similarity" value={`${diff.similarity}%`} tone="accent" />
      </div>

      {diff.truncated && (
        <p className="flex items-start gap-2 text-xs text-[#ff7a7a]">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          These texts are too large to align line by line, so the changed region
          is shown as a full rewrite. Try comparing a smaller section.
        </p>
      )}

      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Differences
          </span>
          <span className="flex items-center gap-3 text-[11px] text-ink-3">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-good/60" /> added
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-[#ff7a7a]/60" /> removed
            </span>
          </span>
          <div className="ml-auto flex gap-2">
            <CopyButton value={patch} label="Copy patch" disabled={!patch} />
            <button
              type="button"
              disabled={!patch}
              onClick={() => downloadText(patch, "changes.diff", "text/x-diff")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-on-accent transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download className="h-3.5 w-3.5" /> .diff
            </button>
          </div>
        </div>

        {diff.identical ? (
          <div className="flex items-center gap-2 rounded-xl border border-good/25 bg-good/5 p-5 text-sm text-good">
            <Check className="h-4 w-4" />
            {original || modified
              ? "The two texts are identical."
              : "Paste or drop two texts to compare them."}
          </div>
        ) : view === "split" ? (
          <SplitView rows={visibleRows} />
        ) : view === "unified" ? (
          <UnifiedView rows={visibleRows} />
        ) : (
          <InlineView rows={visibleRows} />
        )}
      </div>
    </div>
  );
}

function SplitView({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-rule bg-bg">
      <div className="grid min-w-[640px] grid-cols-[3rem_1fr_3rem_1fr] font-mono text-[13px]">
        {rows.map((row, index) =>
          row.kind === "skip" ? (
            <SkipRow key={index} count={row.count} span={4} />
          ) : (
            <div key={index} className="contents">
              <Gutter no={row.left?.no} />
              <div
                className={`whitespace-pre-wrap break-words border-r border-rule px-3 py-0.5 leading-relaxed ${
                  row.left ? ROW_TINT[row.kind] : "bg-white/[0.02]"
                }`}
              >
                <LineContent row={row} side="del" />
              </div>
              <Gutter no={row.right?.no} />
              <div
                className={`whitespace-pre-wrap break-words px-3 py-0.5 leading-relaxed ${
                  row.right ? ROW_TINT[row.kind] : "bg-white/[0.02]"
                }`}
              >
                <LineContent row={row} side="add" />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function UnifiedView({ rows }) {
  const lines = [];
  rows.forEach((row, index) => {
    if (row.kind === "skip") {
      lines.push({ key: `s${index}`, kind: "skip", count: row.count });
    } else if (row.kind === "equal") {
      lines.push({ key: `e${index}`, kind: "equal", row, side: "del", sign: " " });
    } else if (row.kind === "changed") {
      lines.push({ key: `c${index}-`, kind: "del", row, side: "del", sign: "−" });
      lines.push({ key: `c${index}+`, kind: "add", row, side: "add", sign: "+" });
    } else if (row.kind === "del") {
      lines.push({ key: `d${index}`, kind: "del", row, side: "del", sign: "−" });
    } else {
      lines.push({ key: `a${index}`, kind: "add", row, side: "add", sign: "+" });
    }
  });

  return (
    <div className="overflow-x-auto rounded-xl border border-rule bg-bg">
      <div className="grid grid-cols-[3rem_3rem_1.25rem_1fr] font-mono text-[13px]">
        {lines.map((line) =>
          line.kind === "skip" ? (
            <SkipRow key={line.key} count={line.count} span={4} />
          ) : (
            <div key={line.key} className="contents">
              <Gutter no={line.side === "add" ? undefined : line.row.left?.no} />
              <Gutter no={line.side === "del" && line.kind === "del" ? undefined : line.row.right?.no} />
              <div
                className={`select-none py-0.5 text-center ${ROW_TINT[line.kind]} ${
                  line.kind === "add"
                    ? "text-good"
                    : line.kind === "del"
                      ? "text-[#ff7a7a]"
                      : "text-ink-3"
                }`}
              >
                {line.sign}
              </div>
              <div
                className={`whitespace-pre-wrap break-words px-3 py-0.5 leading-relaxed ${ROW_TINT[line.kind]}`}
              >
                <LineContent row={line.row} side={line.side} />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function InlineView({ rows }) {
  return (
    <div className="whitespace-pre-wrap break-words rounded-xl border border-rule bg-bg p-5 font-mono text-[13px] leading-relaxed text-ink">
      {rows.map((row, index) => {
        if (row.kind === "skip") {
          return (
            <div key={index} className="my-1 text-[11px] text-ink-3">
              ⋯ {row.count.toLocaleString()} unchanged{" "}
              {row.count === 1 ? "line" : "lines"} ⋯
            </div>
          );
        }
        if (row.kind === "equal") {
          return <div key={index}>{row.left.text || " "}</div>;
        }
        if (row.kind === "changed") {
          return (
            <div key={index}>
              {row.parts.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className={part.type === "equal" ? "" : MARK[part.type]}
                >
                  {part.value}
                </span>
              ))}
            </div>
          );
        }
        const side = row.kind === "del" ? "del" : "add";
        return (
          <div key={index}>
            <span className={MARK[side]}>
              {(side === "del" ? row.left.text : row.right.text) || " "}
            </span>
          </div>
        );
      })}
    </div>
  );
}
