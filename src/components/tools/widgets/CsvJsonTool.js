"use client";
import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Download,
  FileText,
  Table2,
  Trash2,
  UploadCloud,
  Wand2,
  X,
} from "lucide-react";
import {
  CheckOption,
  CopyButton,
  GhostButton,
  Metric,
  Segmented,
  downloadText,
  formatBytes,
  readTextFile,
  useDropZone,
} from "../ui";

const MAX_FILE_BYTES = 15 * 1024 * 1024;
const PREVIEW_ROWS = 25;

const SAMPLE_CSV = `id,name,email,city,active,joined
1,John Doe,john@example.com,Karachi,true,2024-01-15
2,"Smith, Jane",jane@example.com,Lahore,false,2024-03-02
3,Ali Raza,ali@example.com,"Islamabad, ICT",true,2024-06-21`;

const SAMPLE_JSON = `[
  { "id": 1, "name": "John Doe", "address": { "city": "Karachi" }, "active": true },
  { "id": 2, "name": "Smith, Jane", "address": { "city": "Lahore" }, "active": false }
]`;

const DELIMITERS = [
  { value: "auto", label: "Auto" },
  { value: ",", label: "Comma" },
  { value: ";", label: "Semicolon" },
  { value: "\t", label: "Tab" },
  { value: "|", label: "Pipe" },
];

const DELIMITER_NAMES = {
  ",": "comma",
  ";": "semicolon",
  "\t": "tab",
  "|": "pipe",
};

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/).find((l) => l.trim()) || "";
  let best = ",";
  let bestCount = 0;
  for (const candidate of [",", ";", "\t", "|"]) {
    let count = 0;
    let inQuotes = false;
    for (const ch of firstLine) {
      if (ch === '"') inQuotes = !inQuotes;
      else if (!inQuotes && ch === candidate) count++;
    }
    if (count > bestCount) {
      bestCount = count;
      best = candidate;
    }
  }
  return best;
}

function parseDelimited(str, delimiter) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;

  const endRow = () => {
    row.push(field);
    rows.push(row);
    row = [];
    field = "";
  };

  while (i < str.length) {
    const ch = str[i];

    if (inQuotes) {
      if (ch === '"') {
        if (str[i + 1] === '"') {
          field += '"';
          i += 2;
        } else {
          inQuotes = false;
          i += 1;
        }
      } else {
        field += ch;
        i += 1;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      i += 1;
    } else if (ch === delimiter) {
      row.push(field);
      field = "";
      i += 1;
    } else if (ch === "\r") {
      endRow();
      i += str[i + 1] === "\n" ? 2 : 1;
    } else if (ch === "\n") {
      endRow();
      i += 1;
    } else {
      field += ch;
      i += 1;
    }
  }

  if (field !== "" || row.length > 0) endRow();
  return rows;
}

const isBlankRow = (row) => row.every((cell) => cell.trim() === "");

/**
 * Numbers keep their string form when converting would lose information —
 * "007", "0300123456" and 20-digit IDs stay text rather than silently changing.
 */
function looksNumeric(value) {
  if (!/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(value)) return false;
  if (/^-?0\d/.test(value)) return false;
  return String(Number(value)) === value;
}

function coerce(raw, opts) {
  const value = opts.trim ? raw.trim() : raw;
  if (value === "") return opts.emptyAsNull ? null : "";
  if (opts.parseBooleans) {
    const lower = value.toLowerCase();
    if (lower === "true") return true;
    if (lower === "false") return false;
    if (lower === "null") return null;
  }
  if (opts.parseNumbers && looksNumeric(value)) return Number(value);
  return value;
}

function normaliseHeaders(raw) {
  const seen = new Map();
  return raw.map((name, index) => {
    let header = (name || "").trim() || `column_${index + 1}`;
    if (seen.has(header)) {
      const next = seen.get(header) + 1;
      seen.set(header, next);
      header = `${header}_${next}`;
    } else {
      seen.set(header, 1);
    }
    return header;
  });
}

function flattenValue(value, prefix, out) {
  if (value === null || typeof value !== "object") {
    out[prefix] = value;
    return out;
  }
  const entries = Array.isArray(value)
    ? value.map((v, i) => [String(i), v])
    : Object.entries(value);
  if (entries.length === 0) {
    out[prefix] = "";
    return out;
  }
  for (const [key, child] of entries) {
    flattenValue(child, prefix ? `${prefix}.${key}` : key, out);
  }
  return out;
}

function toCsvField(value, delimiter) {
  if (value === null || value === undefined) return "";
  const text =
    typeof value === "object" ? JSON.stringify(value) : String(value);
  const mustQuote =
    text.includes(delimiter) ||
    text.includes('"') ||
    text.includes("\n") ||
    text.includes("\r") ||
    text !== text.trim();
  return mustQuote ? `"${text.replace(/"/g, '""')}"` : text;
}

function csvToJson(input, delimiter, opts) {
  const matrix = parseDelimited(input, delimiter).filter(
    (row) => !opts.skipEmpty || !isBlankRow(row),
  );
  if (matrix.length === 0) return { output: "[]", headers: [], rows: [] };

  let headers;
  let dataRows;
  if (opts.headerRow) {
    headers = normaliseHeaders(matrix[0]);
    dataRows = matrix.slice(1);
  } else {
    const width = matrix.reduce((max, row) => Math.max(max, row.length), 0);
    headers = Array.from({ length: width }, (_, i) => `column_${i + 1}`);
    dataRows = matrix;
  }

  const records = dataRows.map((row) => {
    // Null-prototype: a column literally named "__proto__" would otherwise hit
    // the prototype setter, silently dropping that column from the output.
    const record = Object.create(null);
    headers.forEach((header, index) => {
      record[header] = coerce(row[index] ?? "", opts);
    });
    return record;
  });

  return {
    output: opts.minify
      ? JSON.stringify(records)
      : JSON.stringify(records, null, 2),
    headers,
    rows: dataRows.map((row) => headers.map((_, i) => row[i] ?? "")),
  };
}

function jsonToCsv(input, delimiter, opts) {
  const parsed = JSON.parse(input);
  const list = Array.isArray(parsed) ? parsed : [parsed];
  if (list.length === 0) return { output: "", headers: [], rows: [] };

  const records = list.map((item) => {
    if (item === null || typeof item !== "object") return { value: item };
    if (!opts.flatten) {
      const shallow = Object.create(null);
      for (const [key, value] of Object.entries(item)) {
        shallow[key] =
          value !== null && typeof value === "object"
            ? JSON.stringify(value)
            : value;
      }
      return shallow;
    }
    return flattenValue(item, "", Object.create(null));
  });

  const headers = [];
  for (const record of records) {
    for (const key of Object.keys(record)) {
      if (!headers.includes(key)) headers.push(key);
    }
  }

  const rows = records.map((record) =>
    headers.map((header) => {
      const value = record[header];
      return value === null || value === undefined ? "" : String(value);
    }),
  );

  const lines = [
    opts.headerRow ? headers.map((h) => toCsvField(h, delimiter)).join(delimiter) : null,
    ...records.map((record) =>
      headers
        .map((header) => toCsvField(record[header], delimiter))
        .join(delimiter),
    ),
  ].filter((line) => line !== null);

  return { output: lines.join("\n"), headers, rows };
}

export default function CsvJsonTool() {
  const [mode, setMode] = useState("csv-to-json");
  const [input, setInput] = useState(SAMPLE_CSV);
  const [delimiter, setDelimiter] = useState("auto");
  const [fileName, setFileName] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [opts, setOpts] = useState({
    headerRow: true,
    parseNumbers: true,
    parseBooleans: true,
    trim: true,
    skipEmpty: true,
    emptyAsNull: false,
    flatten: true,
    minify: false,
  });
  const inputRef = useRef(null);

  const setOpt = (key) => (value) =>
    setOpts((prev) => ({ ...prev, [key]: value }));

  const isCsvSource = mode === "csv-to-json";

  const loadFiles = async ([file]) => {
    if (!file) return;
    setFileError(null);
    if (file.size > MAX_FILE_BYTES) {
      setFileError(
        `That file is ${formatBytes(file.size)}. Please keep it under ${formatBytes(MAX_FILE_BYTES)}.`,
      );
      return;
    }
    try {
      const text = await readTextFile(file);
      const looksJson = /^\s*[[{]/.test(text) || /\.json$/i.test(file.name);
      setMode(looksJson ? "json-to-csv" : "csv-to-json");
      if (/\.tsv$/i.test(file.name)) setDelimiter("\t");
      setInput(text);
      setFileName(file.name);
    } catch (err) {
      setFileError(err.message || "Could not read that file.");
    }
  };

  const { dragging, dropHandlers } = useDropZone(loadFiles);

  const activeDelimiter =
    delimiter === "auto"
      ? isCsvSource
        ? detectDelimiter(input)
        : ","
      : delimiter;

  const result = useMemo(() => {
    if (!input.trim()) {
      return { output: "", error: null, headers: [], rows: [] };
    }
    try {
      const converted = isCsvSource
        ? csvToJson(input, activeDelimiter, opts)
        : jsonToCsv(input, activeDelimiter, opts);
      return { ...converted, error: null };
    } catch (err) {
      return { output: "", error: err.message, headers: [], rows: [] };
    }
  }, [input, isCsvSource, activeDelimiter, opts]);

  const { output, error, headers, rows } = result;

  const outExt = isCsvSource ? "json" : "csv";
  const outMime = isCsvSource ? "application/json" : "text/csv";
  const baseName = fileName ? fileName.replace(/\.[^.]+$/, "") : "converted";
  const outputBytes = useMemo(
    () => new Blob([output]).size,
    [output],
  );

  const reset = () => {
    setInput("");
    setFileName(null);
    setFileError(null);
  };

  const loadSample = () => {
    setInput(isCsvSource ? SAMPLE_CSV : SAMPLE_JSON);
    setFileName(null);
    setFileError(null);
  };

  const switchMode = (next) => {
    setMode(next);
    if (output && !error) {
      setInput(output);
      setFileName(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Segmented
          options={[
            { value: "csv-to-json", label: "CSV → JSON" },
            { value: "json-to-csv", label: "JSON → CSV" },
          ]}
          value={mode}
          onChange={switchMode}
        />
        <div className="ml-auto flex flex-wrap gap-2">
          <GhostButton onClick={loadSample} className="px-3 py-2 text-xs">
            <Wand2 className="h-3.5 w-3.5" /> Sample
          </GhostButton>
          <GhostButton
            onClick={reset}
            disabled={!input}
            className="px-3 py-2 text-xs"
          >
            <Trash2 className="h-3.5 w-3.5" /> Clear
          </GhostButton>
        </div>
      </div>

      <div
        {...dropHandlers}
        className={`relative rounded-xl border p-3 transition ${
          dragging ? "border-accent bg-accent/5" : "border-rule bg-bg"
        }`}
      >
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="label-sm">
            Input · {isCsvSource ? "CSV" : "JSON"}
          </span>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-1.5 rounded-md border border-rule px-2 py-1 text-[11px] font-medium text-ink-2 transition hover:border-accent/40 hover:text-ink"
          >
            <UploadCloud className="h-3 w-3" />
            Drop a file or browse
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".csv,.tsv,.txt,.json,text/csv,application/json,text/plain"
            className="hidden"
            onChange={(e) => {
              loadFiles(Array.from(e.target.files || []));
              e.target.value = "";
            }}
          />
          {fileName && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-[11px] text-ink-2">
              <FileText className="h-3 w-3 text-accent" />
              {fileName}
              <button
                type="button"
                onClick={() => setFileName(null)}
                aria-label="Forget file name"
                className="text-ink-3 hover:text-ink"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          <span className="ml-auto text-[11px] text-ink-3">
            {formatBytes(new Blob([input]).size)}
          </span>
        </div>

        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setFileError(null);
          }}
          spellCheck={false}
          rows={11}
          placeholder={
            isCsvSource
              ? "Paste CSV, or drag a .csv / .tsv file anywhere in this box…"
              : 'Paste JSON, or drag a .json file anywhere in this box…'
          }
          className="w-full resize-y rounded-lg border border-rule bg-bg-2 p-4 font-mono text-sm leading-relaxed text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
        />

        {dragging && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-accent bg-bg/90">
            <UploadCloud className="h-8 w-8 text-accent" />
            <p className="mt-2 text-sm font-medium text-ink">
              Drop your file to convert it
            </p>
            <p className="mt-0.5 text-xs text-ink-3">
              CSV, TSV, TXT or JSON — parsed right here, never uploaded
            </p>
          </div>
        )}
      </div>

      {fileError && (
        <p className="flex items-center gap-2 text-xs text-bad">
          <AlertTriangle className="h-3.5 w-3.5" /> {fileError}
        </p>
      )}

      <div className="space-y-4 rounded-xl border border-rule bg-bg p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-sm">
            Delimiter
          </span>
          <Segmented
            options={DELIMITERS}
            value={delimiter}
            onChange={setDelimiter}
          />
          {delimiter === "auto" && isCsvSource && input.trim() && (
            <span className="text-[11px] text-ink-3">
              detected: {DELIMITER_NAMES[activeDelimiter]}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-rule pt-4 sm:grid-cols-2 lg:grid-cols-3">
          <CheckOption
            checked={opts.headerRow}
            onChange={setOpt("headerRow")}
            label="First row is a header"
            hint={
              isCsvSource
                ? "Off: columns become column_1, column_2…"
                : "Off: omit the header line from the CSV"
            }
          />
          {isCsvSource ? (
            <>
              <CheckOption
                checked={opts.parseNumbers}
                onChange={setOpt("parseNumbers")}
                label="Convert numbers"
                hint="Leading zeros stay text (0300…, 007)"
              />
              <CheckOption
                checked={opts.parseBooleans}
                onChange={setOpt("parseBooleans")}
                label="Convert true / false / null"
                hint="Otherwise kept as strings"
              />
              <CheckOption
                checked={opts.trim}
                onChange={setOpt("trim")}
                label="Trim whitespace"
                hint="Strip spaces around each value"
              />
              <CheckOption
                checked={opts.skipEmpty}
                onChange={setOpt("skipEmpty")}
                label="Skip empty rows"
                hint="Ignore blank lines in the file"
              />
              <CheckOption
                checked={opts.emptyAsNull}
                onChange={setOpt("emptyAsNull")}
                label="Empty cells as null"
                hint={'Otherwise ""'}
              />
              <CheckOption
                checked={opts.minify}
                onChange={setOpt("minify")}
                label="Minify JSON"
                hint="One line, no indentation"
              />
            </>
          ) : (
            <CheckOption
              checked={opts.flatten}
              onChange={setOpt("flatten")}
              label="Flatten nested objects"
              hint="address.city instead of raw JSON in a cell"
            />
          )}
        </div>
      </div>

      {!error && output && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric label="Rows" value={rows.length.toLocaleString()} />
          <Metric label="Columns" value={headers.length.toLocaleString()} />
          <Metric label="Output" value={formatBytes(outputBytes)} tone="accent" />
          <Metric
            label="Format"
            value={
              isCsvSource
                ? opts.minify
                  ? "JSON (min)"
                  : "JSON"
                : `CSV (${DELIMITER_NAMES[activeDelimiter]})`
            }
          />
        </div>
      )}

      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="label">
            Output · {isCsvSource ? "JSON" : "CSV"}
          </span>
          <div className="ml-auto flex gap-2">
            <CopyButton value={output} disabled={!!error} />
            <button
              type="button"
              disabled={!output || !!error}
              onClick={() =>
                downloadText(output, `${baseName}.${outExt}`, outMime)
              }
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-on-accent transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download className="h-3.5 w-3.5" />
              Download .{outExt}
            </button>
          </div>
        </div>

        {error ? (
          <div className="flex items-start gap-2 rounded-xl border border-[#ff7a7a]/25 bg-[#ff7a7a]/5 p-4 font-mono text-sm text-bad">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        ) : (
          <textarea
            value={output}
            readOnly
            spellCheck={false}
            rows={14}
            placeholder="Converted output appears here…"
            className="w-full resize-y rounded-xl border border-accent/20 bg-accent/5 p-4 font-mono text-sm leading-relaxed text-ink placeholder:text-ink-3 focus:outline-none"
          />
        )}
      </div>

      {!error && rows.length > 0 && (
        <details className="group rounded-xl border border-rule bg-bg">
          <summary className="flex cursor-pointer list-none items-center gap-2 p-4 text-xs font-semibold text-ink-2 marker:hidden hover:text-ink">
            <Table2 className="h-4 w-4 text-accent" />
            Table preview
            <span className="font-normal text-ink-3">
              ({Math.min(rows.length, PREVIEW_ROWS)} of{" "}
              {rows.length.toLocaleString()} rows)
            </span>
            <span className="ml-auto font-mono text-ink-3 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="overflow-x-auto border-t border-rule">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-bg-2">
                  <th className="border-b border-rule px-3 py-2 font-mono text-[10px] text-ink-3">
                    #
                  </th>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="whitespace-nowrap border-b border-rule px-3 py-2 font-semibold text-ink"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(0, PREVIEW_ROWS).map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-white/[0.02]">
                    <td className="border-b border-rule px-3 py-2 font-mono text-[10px] text-ink-3">
                      {rowIndex + 1}
                    </td>
                    {headers.map((header, colIndex) => (
                      <td
                        key={header}
                        className="max-w-[240px] truncate border-b border-rule px-3 py-2 font-mono text-ink-2"
                        title={row[colIndex]}
                      >
                        {row[colIndex] || (
                          <span className="text-ink-3">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </div>
  );
}
