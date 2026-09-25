"use client";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, BookOpen, Info, Sparkles } from "lucide-react";
import { CopyButton, Metric, Segmented } from "../ui";

const MATCH_LIMIT = 5000;

const FLAGS = [
  { key: "g", name: "global", desc: "Find every match, not just the first one" },
  { key: "i", name: "ignore case", desc: "Treat A and a as the same character" },
  { key: "m", name: "multiline", desc: "^ and $ also match at every line break" },
  { key: "s", name: "dotAll", desc: ". also matches line breaks" },
  { key: "u", name: "unicode", desc: "Enable full Unicode escapes like \\p{L}" },
  { key: "y", name: "sticky", desc: "Match only at lastIndex — never skip ahead" },
];

const PRESETS = [
  {
    label: "Email",
    pattern: "[\\w.+-]+@[\\w-]+\\.[\\w.]{2,}",
    flags: "gi",
    sample: "Reach me at hello@anwersolangi.com or support@example.co.uk — not at plain-text.",
  },
  {
    label: "URL",
    pattern: "https?://[^\\s]+",
    flags: "gi",
    sample: "Docs live at https://anwersolangi.com/tools and http://example.com/page?q=1",
  },
  {
    label: "IPv4",
    pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b",
    flags: "g",
    sample: "Allowed hosts: 192.168.1.1, 10.0.0.254 and 8.8.8.8 (skip 999.1 though).",
  },
  {
    label: "Date (YYYY-MM-DD)",
    pattern: "(\\d{4})-(\\d{2})-(\\d{2})",
    flags: "g",
    sample: "Invoices dated 2024-03-15 and 2025-11-02 are still unpaid.",
  },
  {
    label: "Hex colour",
    pattern: "#(?:[0-9a-fA-F]{3}){1,2}\\b",
    flags: "g",
    sample: "Palette: #ff6a3d, #0d0c0b, #fff and the invalid #12345.",
  },
  {
    label: "PK mobile",
    pattern: "\\b03\\d{2}[-\\s]?\\d{7}\\b",
    flags: "g",
    sample: "Call 0300-1234567 or 03211234567 between 9am and 5pm.",
  },
  {
    label: "CNIC",
    pattern: "\\b\\d{5}-\\d{7}-\\d\\b",
    flags: "g",
    sample: "CNIC 42101-1234567-8 was submitted with form 35202-7654321-1.",
  },
  {
    label: "Duplicate word",
    pattern: "\\b(\\w+)\\s+\\1\\b",
    flags: "gi",
    sample: "This is is a common typo, and and it hides in long paragraphs.",
  },
  {
    label: "HTML tag",
    pattern: "</?([a-z][a-z0-9]*)\\b[^>]*>",
    flags: "gi",
    sample: '<div class="card"><p>Hello</p></div>',
  },
];

const CHEATSHEET = [
  {
    group: "Characters",
    items: [
      [".", "Any character except a line break"],
      ["\\d", "A digit, 0–9"],
      ["\\w", "A letter, digit or underscore"],
      ["\\s", "Whitespace — space, tab or newline"],
      ["\\D \\W \\S", "The opposite of each of the above"],
      ["\\.", "A literal dot (escape any special character)"],
    ],
  },
  {
    group: "Sets & ranges",
    items: [
      ["[abc]", "One of a, b or c"],
      ["[^abc]", "Any character that is not a, b or c"],
      ["[a-z0-9]", "One character in either range"],
      ["a|b", "Either a or b"],
    ],
  },
  {
    group: "How many",
    items: [
      ["*", "Zero or more"],
      ["+", "One or more"],
      ["?", "Zero or one (optional)"],
      ["{3}", "Exactly three"],
      ["{2,}", "Two or more"],
      ["{2,5}", "Between two and five"],
      ["+?", "Add ? to any quantifier to make it lazy"],
    ],
  },
  {
    group: "Position & grouping",
    items: [
      ["^ $", "Start and end of the string"],
      ["\\b", "A word boundary"],
      ["(abc)", "Capture group — remembered as $1"],
      ["(?:abc)", "Group without capturing"],
      ["(?<year>\\d{4})", "Named capture group"],
      ["(?=abc)", "Lookahead — must be followed by abc"],
      ["(?<=abc)", "Lookbehind — must be preceded by abc"],
    ],
  },
];

const ESCAPES = {
  d: "any digit, 0–9",
  D: "any character that is not a digit",
  w: "any word character — a letter, digit or underscore",
  W: "any character that is not a letter, digit or underscore",
  s: "any whitespace — a space, tab or line break",
  S: "any character that is not whitespace",
  b: "a word boundary — the edge between a word character and anything else",
  B: "a position that is not a word boundary",
  n: "a line feed (newline)",
  r: "a carriage return",
  t: "a tab",
  f: "a form feed",
  v: "a vertical tab",
  0: "a NUL character",
};

function readQuantifier(pattern, i) {
  let token = null;
  let desc = null;
  let next = i;

  if (pattern[i] === "*") {
    token = "*";
    desc = "zero or more times";
    next = i + 1;
  } else if (pattern[i] === "+") {
    token = "+";
    desc = "one or more times";
    next = i + 1;
  } else if (pattern[i] === "?") {
    token = "?";
    desc = "zero or one time — it is optional";
    next = i + 1;
  } else if (pattern[i] === "{") {
    const match = /^\{(\d+)(,(\d*))?\}/.exec(pattern.slice(i));
    if (match) {
      token = match[0];
      if (!match[2]) desc = `exactly ${match[1]} times`;
      else if (match[3] === "") desc = `${match[1]} or more times`;
      else desc = `between ${match[1]} and ${match[3]} times`;
      next = i + match[0].length;
    }
  }

  if (!token) return null;
  if (pattern[next] === "?") {
    token += "?";
    desc += ", matching as few as possible (lazy)";
    next += 1;
  }
  return { token, desc, next };
}

function readCharClass(pattern, i) {
  let j = i + 1;
  const negated = pattern[j] === "^";
  if (negated) j += 1;

  let body = "";
  if (pattern[j] === "]") {
    body += "]";
    j += 1;
  }
  while (j < pattern.length && pattern[j] !== "]") {
    if (pattern[j] === "\\") {
      body += pattern.slice(j, j + 2);
      j += 2;
    } else {
      body += pattern[j];
      j += 1;
    }
  }
  if (pattern[j] === "]") j += 1;

  return { token: pattern.slice(i, j), body, negated, next: j };
}

function describeClassBody(body) {
  const items = [];
  let i = 0;
  while (i < body.length) {
    if (body[i] === "\\") {
      const char = body[i + 1];
      items.push(ESCAPES[char] || `“${char}”`);
      i += 2;
    } else if (body[i + 1] === "-" && i + 2 < body.length) {
      items.push(`${body[i]} to ${body[i + 2]}`);
      i += 3;
    } else {
      items.push(`“${body[i]}”`);
      i += 1;
    }
  }
  return items;
}

function readGroupOpen(pattern, i, groupNumber) {
  const rest = pattern.slice(i);
  const simple = [
    ["(?:", "start of a group that does not capture — it groups without storing the result"],
    ["(?=", "start of a positive lookahead — the text after must match this, but is not consumed"],
    ["(?!", "start of a negative lookahead — the text after must NOT match this"],
    ["(?<=", "start of a positive lookbehind — the text before must match this"],
    ["(?<!", "start of a negative lookbehind — the text before must NOT match this"],
  ];
  // Lookbehind is checked before the named-group pattern, which cannot start
  // with = or ! anyway.
  for (const [token, desc] of simple.sort((a, b) => b[0].length - a[0].length)) {
    if (rest.startsWith(token)) {
      return { token, desc, next: i + token.length, capture: false };
    }
  }

  const named = /^\(\?<([A-Za-z_$][\w$]*)>/.exec(rest);
  if (named) {
    return {
      token: named[0],
      desc: `start of capture group ${groupNumber}, named “${named[1]}”`,
      next: i + named[0].length,
      capture: true,
    };
  }

  return {
    token: "(",
    desc: `start of capture group ${groupNumber} — whatever it matches is remembered as $${groupNumber}`,
    next: i + 1,
    capture: true,
  };
}

function explainPattern(pattern) {
  const nodes = [];
  let depth = 0;
  let groupNumber = 0;
  let i = 0;

  while (i < pattern.length) {
    const char = pattern[i];

    if (char === "(") {
      const group = readGroupOpen(pattern, i, groupNumber + 1);
      if (group.capture) groupNumber += 1;
      nodes.push({ depth, token: group.token, desc: group.desc, kind: "group" });
      depth += 1;
      i = group.next;
      continue;
    }

    if (char === ")") {
      depth = Math.max(0, depth - 1);
      i += 1;
      const quantifier = readQuantifier(pattern, i);
      nodes.push({
        depth,
        token: ")" + (quantifier ? quantifier.token : ""),
        desc: quantifier
          ? `end of the group — the whole group repeats ${quantifier.desc}`
          : "end of the group",
        kind: "group",
      });
      if (quantifier) i = quantifier.next;
      continue;
    }

    if (char === "|") {
      nodes.push({
        depth,
        token: "|",
        desc: "OR — match either the expression before this or the one after it",
        kind: "alt",
      });
      i += 1;
      continue;
    }

    if (char === "^" || char === "$") {
      nodes.push({
        depth,
        token: char,
        desc:
          char === "^"
            ? "the start of the string — or the start of any line with the m flag"
            : "the end of the string — or the end of any line with the m flag",
        kind: "anchor",
      });
      i += 1;
      continue;
    }

    let node;
    if (char === "[") {
      const cls = readCharClass(pattern, i);
      const items = describeClassBody(cls.body);
      node = {
        token: cls.token,
        desc: cls.negated
          ? `any single character EXCEPT ${items.join(", ")}`
          : `any single character from: ${items.join(", ")}`,
        kind: "class",
      };
      i = cls.next;
    } else if (char === ".") {
      node = {
        token: ".",
        desc: "any single character except a line break — with the s flag, line breaks too",
        kind: "any",
      };
      i += 1;
    } else if (char === "\\") {
      const next = pattern[i + 1];
      const rest = pattern.slice(i);
      const backref = /^\\(\d+)/.exec(rest);
      const namedRef = /^\\k<([^>]+)>/.exec(rest);
      const codePoint = /^\\u\{[0-9a-fA-F]+\}|^\\u[0-9a-fA-F]{4}|^\\x[0-9a-fA-F]{2}/.exec(rest);
      const unicodeProp = /^\\[pP]\{[^}]+\}/.exec(rest);

      if (next === undefined) {
        node = { token: "\\", desc: "a stray backslash — this is not valid on its own", kind: "escape" };
        i += 1;
      } else if (backref && next !== "0") {
        node = {
          token: backref[0],
          desc: `a back-reference — the text that capture group ${backref[1]} matched must appear again here`,
          kind: "escape",
        };
        i += backref[0].length;
      } else if (namedRef) {
        node = {
          token: namedRef[0],
          desc: `a back-reference to the group named “${namedRef[1]}” — its text must appear again here`,
          kind: "escape",
        };
        i += namedRef[0].length;
      } else if (codePoint) {
        node = {
          token: codePoint[0],
          desc: `the character with the code ${codePoint[0].slice(2).replace(/[{}]/g, "")}`,
          kind: "escape",
        };
        i += codePoint[0].length;
      } else if (unicodeProp) {
        node = {
          token: unicodeProp[0],
          desc: `${unicodeProp[0][1] === "p" ? "any" : "any character that is NOT a"} character with the Unicode property ${unicodeProp[0].slice(3, -1)} (needs the u flag)`,
          kind: "escape",
        };
        i += unicodeProp[0].length;
      } else if (ESCAPES[next]) {
        node = {
          token: "\\" + next,
          desc: ESCAPES[next],
          kind: next === "b" || next === "B" ? "anchor" : "escape",
        };
        i += 2;
      } else {
        node = { token: "\\" + next, literal: next, kind: "literal" };
        i += 2;
      }
    } else {
      node = { token: char, literal: char, kind: "literal" };
      i += 1;
    }

    const quantifier = readQuantifier(pattern, i);
    if (quantifier) {
      const base = node.desc || `the character “${node.literal}”`;
      node = {
        token: node.token + quantifier.token,
        desc: `${base} — repeated ${quantifier.desc}`,
        kind: "quantified",
      };
      i = quantifier.next;
    }
    nodes.push({ depth, ...node });
  }

  const merged = [];
  for (const node of nodes) {
    const last = merged[merged.length - 1];
    if (node.kind === "literal" && last?.kind === "literal" && last.depth === node.depth) {
      last.token += node.token;
      last.literal += node.literal;
    } else {
      merged.push({ ...node });
    }
  }

  return merged.map((node) =>
    node.kind === "literal"
      ? {
          ...node,
          desc:
            node.literal.length === 1
              ? `the character “${node.literal}”`
              : `the exact text “${node.literal}”`,
        }
      : node,
  );
}

// /(a+)+$/ against 30 characters backtracks for ~98s. A running regex can't be
// interrupted and a timer between calls doesn't help — the first exec() is what
// hangs. So it runs off-thread in something we can terminate.
const WORKER_SOURCE = `
self.onmessage = function (e) {
  var d = e.data;
  try {
    var iterFlags = (d.flags.indexOf("g") > -1 || d.flags.indexOf("y") > -1)
      ? d.flags : d.flags + "g";
    var regex = new RegExp(d.pattern, iterFlags);
    var matches = [];
    var match;
    while ((match = regex.exec(d.testString)) !== null) {
      matches.push({
        index: match.index,
        text: match[0],
        groups: Array.prototype.slice.call(match, 1),
        named: match.groups ? Object.assign({}, match.groups) : null
      });
      if (match.index === regex.lastIndex) regex.lastIndex += 1;
      if (d.flags.indexOf("g") === -1 && d.flags.indexOf("y") === -1) break;
      if (matches.length >= ${MATCH_LIMIT}) break;
    }
    var replaced = "";
    try {
      replaced = d.testString.replace(new RegExp(d.pattern, d.flags), d.replacement);
    } catch (ignored) {}
    self.postMessage({ ok: true, matches: matches, replaced: replaced });
  } catch (err) {
    self.postMessage({ ok: false, error: err.message });
  }
};
`;

const RUN_TIMEOUT_MS = 1500;

let workerUrl = null;
function getWorkerUrl() {
  if (typeof window === "undefined" || typeof Worker === "undefined") return null;
  if (!workerUrl) {
    workerUrl = URL.createObjectURL(
      new Blob([WORKER_SOURCE], { type: "text/javascript" }),
    );
  }
  return workerUrl;
}

function runRegex(payload) {
  return new Promise((resolve) => {
    const url = getWorkerUrl();
    if (!url) return resolve({ unavailable: true });

    let worker;
    try {
      worker = new Worker(url);
    } catch {
      return resolve({ unavailable: true });
    }

    const timer = setTimeout(() => {
      worker.terminate();
      resolve({ ok: false, timedOut: true });
    }, RUN_TIMEOUT_MS);

    const finish = (value) => {
      clearTimeout(timer);
      worker.terminate();
      resolve(value);
    };
    worker.onmessage = (e) => finish(e.data);
    worker.onerror = () => finish({ unavailable: true });
    worker.postMessage(payload);
  });
}

function runRegexSync({ pattern, flags, testString, replacement }) {
  try {
    const iterFlags =
      flags.includes("g") || flags.includes("y") ? flags : flags + "g";
    const regex = new RegExp(pattern, iterFlags);
    const matches = [];
    let match;
    while ((match = regex.exec(testString)) !== null) {
      matches.push({
        index: match.index,
        text: match[0],
        groups: match.slice(1),
        named: match.groups ? { ...match.groups } : null,
      });
      if (match.index === regex.lastIndex) regex.lastIndex += 1;
      if (!flags.includes("g") && !flags.includes("y")) break;
      if (matches.length >= MATCH_LIMIT) break;
    }
    let replaced = "";
    try {
      replaced = testString.replace(new RegExp(pattern, flags), replacement);
    } catch {
    }
    return { ok: true, matches, replaced };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

const KIND_COLOR = {
  group: "text-[#c9a0ff]",
  anchor: "text-[#7ad3f0]",
  class: "text-accent-2",
  quantified: "text-accent",
  escape: "text-good",
  alt: "text-[#ffd479]",
  any: "text-[#7ad3f0]",
  literal: "text-ink",
};

const IDLE_ENGINE = {
  key: null,
  matches: [],
  replaced: "",
  timedOut: false,
};

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("(\\w+)@([\\w.-]+)\\.([a-z]{2,})");
  const [flags, setFlags] = useState("gi");
  const [testString, setTestString] = useState(
    "Email hello@anwersolangi.com for work, or ping support@example.co.uk.\nInvalid: just-text@ and @nodomain.com",
  );
  const [replacement, setReplacement] = useState("<$1 at $2>");
  const [tab, setTab] = useState("explain");

  const toggleFlag = (key) =>
    setFlags((prev) =>
      prev.includes(key) ? prev.replace(key, "") : prev + key,
    );

  // Compiling a regex never backtracks, so syntax errors can be reported
  // instantly on the main thread. Only *running* it is dangerous.
  const error = useMemo(() => {
    if (!pattern) return null;
    try {
      new RegExp(pattern, flags);
      return null;
    } catch (err) {
      return err.message;
    }
  }, [pattern, flags]);

  const [engine, setEngine] = useState(IDLE_ENGINE);
  const idle = !pattern || Boolean(error);

  // Results are tagged with the inputs that produced them, so "running" is
  // simply "the latest result is for different inputs".
  const inputKey = JSON.stringify([pattern, flags, testString, replacement]);

  useEffect(() => {
    if (idle) return;
    let cancelled = false;

    const debounce = setTimeout(async () => {
      const payload = { pattern, flags, testString, replacement };
      let result = await runRegex(payload);
      if (result.unavailable) result = runRegexSync(payload);
      if (cancelled) return;
      setEngine({
        key: JSON.stringify([pattern, flags, testString, replacement]),
        matches: result.ok ? result.matches : [],
        replaced: result.ok ? result.replaced : "",
        timedOut: Boolean(result.timedOut),
      });
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(debounce);
    };
  }, [pattern, flags, testString, replacement, idle]);

  // With no valid pattern the last result is stale, so show the idle state.
  const { matches, replaced, timedOut } = idle ? IDLE_ENGINE : engine;
  const running = !idle && engine.key !== inputKey;

  const highlighted = useMemo(() => {
    if (error || matches.length === 0) return [testString];
    const nodes = [];
    let cursor = 0;
    matches.forEach((match, index) => {
      if (match.index > cursor) nodes.push(testString.slice(cursor, match.index));
      if (match.text.length > 0) {
        nodes.push(
          <mark
            key={`m${index}`}
            className={`rounded-sm px-0.5 ${
              index % 2 === 0
                ? "bg-accent-deep text-on-accent"
                : "bg-accent-2 text-on-accent"
            }`}
          >
            {match.text}
          </mark>,
        );
        cursor = match.index + match.text.length;
      }
    });
    if (cursor < testString.length) nodes.push(testString.slice(cursor));
    return nodes;
  }, [matches, testString, error]);

  const explanation = useMemo(
    () => (pattern && !error ? explainPattern(pattern) : []),
    [pattern, error],
  );

  const applyPreset = (preset) => {
    setPattern(preset.pattern);
    setFlags(preset.flags);
    setTestString(preset.sample);
  };

  const groupCount = matches.reduce(
    (max, match) => Math.max(max, match.groups.length),
    0,
  );

  return (
    <div className="space-y-5">
      <div className="space-y-3 rounded-xl border border-rule bg-bg p-4">
        <div className="flex items-center gap-2">
          <span className="select-none font-mono text-lg text-ink-3">/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            spellCheck={false}
            placeholder="[a-z]+"
            aria-label="Regular expression"
            className="min-w-0 flex-1 rounded-lg border border-rule bg-bg-2 px-3 py-2.5 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
          />
          <span className="select-none font-mono text-lg text-ink-3">/</span>
          <span className="w-16 shrink-0 rounded-lg border border-rule bg-bg-2 px-2 py-2.5 text-center font-mono text-sm text-accent">
            {flags || "—"}
          </span>
          <CopyButton
            value={`/${pattern}/${flags}`}
            label="Copy"
            className="shrink-0"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {FLAGS.map((flag) => {
            const active = flags.includes(flag.key);
            return (
              <button
                key={flag.key}
                type="button"
                onClick={() => toggleFlag(flag.key)}
                aria-pressed={active}
                title={flag.desc}
                className={`rounded-lg border px-2.5 py-1.5 text-left transition ${
                  active
                    ? "border-accent/50 bg-accent/10"
                    : "border-rule bg-bg-2 hover:border-accent/30"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    active ? "text-accent" : "text-ink-2"
                  }`}
                >
                  {flag.key}
                </span>
                <span className="ml-1.5 text-[11px] text-ink-3">
                  {flag.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-rule pt-3">
          <span className="inline-flex items-center gap-1.5 label-sm">
            <Sparkles className="h-3 w-3 text-accent" /> Try
          </span>
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => applyPreset(preset)}
              className="rounded-full border border-rule bg-bg-2 px-2.5 py-1 text-[11px] text-ink-2 transition hover:border-accent/40 hover:text-ink"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-[#ff7a7a]/25 bg-[#ff7a7a]/5 p-3 text-sm text-bad">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="font-mono text-xs">{error}</span>
        </div>
      )}

      {timedOut && (
        <div className="flex items-start gap-2 rounded-xl border border-[#ffd479]/30 bg-[#ffd479]/5 p-3 text-[#ffd479]">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div className="text-xs leading-relaxed">
            <p className="font-semibold">
              Stopped — this pattern is too slow to run safely.
            </p>
            <p className="mt-1 text-ink-2">
              It ran for over {RUN_TIMEOUT_MS / 1000} seconds against your test
              string, so it was cancelled. Nested quantifiers like{" "}
              <code className="font-mono text-[#ffd479]">(a+)+</code> or{" "}
              <code className="font-mono text-[#ffd479]">(.*)*</code> can take
              exponentially long on text that nearly matches — known as
              catastrophic backtracking. Flattening the nesting or anchoring the
              pattern usually makes it instant.
            </p>
          </div>
        </div>
      )}

      <div>
        <div className="mb-2 label-sm">
          Test string
        </div>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          spellCheck={false}
          rows={6}
          placeholder="Enter the text you want to match against…"
          className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm leading-relaxed text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric
          label="Matches"
          value={timedOut ? "—" : matches.length}
          tone="accent"
        />
        <Metric label="Capture groups" value={groupCount} />
        <Metric
          label="Characters matched"
          value={matches.reduce((sum, m) => sum + m.text.length, 0)}
        />
        <Metric label="Test length" value={testString.length} />
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2 label">
          Highlighted result
          {running && (
            <span className="normal-case tracking-normal text-ink-3">
              matching…
            </span>
          )}
        </div>
        <div className="min-h-[80px] whitespace-pre-wrap break-words rounded-xl border border-rule bg-bg p-4 font-mono text-sm leading-relaxed text-ink">
          {testString ? highlighted : (
            <span className="text-ink-3">Nothing to test yet.</span>
          )}
        </div>
        {!flags.includes("g") && !flags.includes("y") && matches.length > 0 && (
          <p className="mt-2 flex items-start gap-1.5 text-[11px] text-ink-3">
            <Info className="mt-px h-3 w-3 shrink-0 text-accent" />
            Without the <code className="font-mono text-accent">g</code> flag
            only the first match is returned — turn on <strong>global</strong> to
            find them all.
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Segmented
          options={[
            { value: "explain", label: "Explanation" },
            { value: "matches", label: `Matches (${matches.length})` },
            { value: "replace", label: "Replace" },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>

      {tab === "explain" && (
        <div className="rounded-xl border border-rule bg-bg p-4">
          {explanation.length === 0 ? (
            <p className="text-sm text-ink-3">
              Type a pattern above and every piece of it will be explained here,
              line by line.
            </p>
          ) : (
            <>
              <p className="mb-3 text-xs text-ink-2">
                Reading{" "}
                <code className="font-mono text-accent">
                  /{pattern}/{flags}
                </code>{" "}
                from left to right:
              </p>
              <ol className="space-y-1.5">
                {explanation.map((node, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-2 border-rule py-1 pl-3 text-sm"
                    style={{ marginLeft: `${node.depth * 14}px` }}
                  >
                    <code
                      className={`shrink-0 rounded bg-bg-2 px-1.5 py-0.5 font-mono text-xs ${
                        KIND_COLOR[node.kind] || "text-ink"
                      }`}
                    >
                      {node.token}
                    </code>
                    <span className="text-ink-2">{node.desc}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}

      {tab === "matches" && (
        <div className="rounded-xl border border-rule bg-bg">
          {matches.length === 0 ? (
            <p className="p-4 text-sm text-ink-3">
              No matches yet. Check the pattern, or add the{" "}
              <code className="font-mono text-accent">i</code> flag if case is
              the problem.
            </p>
          ) : (
            <div className="divide-y divide-rule">
              {matches.slice(0, 200).map((match, index) => (
                <div key={index} className="p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-ink-3">
                      #{index + 1}
                    </span>
                    <code className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-xs text-accent">
                      {match.text || "(empty match)"}
                    </code>
                    <span className="font-mono text-[10px] text-ink-3">
                      at index {match.index}
                    </span>
                  </div>
                  {match.groups.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 pl-6">
                      {match.groups.map((group, groupIndex) => (
                        <span
                          key={groupIndex}
                          className="text-[13px] text-ink-3"
                        >
                          ${groupIndex + 1}:{" "}
                          <span className="text-ink-2">
                            {group === undefined ? "—" : `"${group}"`}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                  {match.named && Object.keys(match.named).length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 pl-6">
                      {Object.entries(match.named).map(([name, value]) => (
                        <span
                          key={name}
                          className="text-[13px] text-ink-3"
                        >
                          {name}:{" "}
                          <span className="text-ink-2">
                            {value === undefined ? "—" : `"${value}"`}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {matches.length > 200 && (
                <p className="p-3 text-xs text-ink-3">
                  Showing the first 200 of {matches.length.toLocaleString()}{" "}
                  matches.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {tab === "replace" && (
        <div className="space-y-3 rounded-xl border border-rule bg-bg p-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-2">
              Replace matches with
            </label>
            <input
              type="text"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              spellCheck={false}
              placeholder="$1"
              className="w-full rounded-lg border border-rule bg-bg-2 px-3 py-2.5 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
            />
            <p className="mt-1.5 text-[11px] text-ink-3">
              Use <code className="font-mono text-accent">$1</code>,{" "}
              <code className="font-mono text-accent">$2</code> … for capture
              groups, <code className="font-mono text-accent">$&lt;name&gt;</code>{" "}
              for named groups, and{" "}
              <code className="font-mono text-accent">$&amp;</code> for the whole
              match.
            </p>
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-ink-2">Result</span>
              <CopyButton value={replaced} />
            </div>
            <div className="min-h-[80px] whitespace-pre-wrap break-words rounded-lg border border-accent/20 bg-accent/5 p-4 font-mono text-sm leading-relaxed text-ink">
              {replaced || (
                <span className="text-ink-3">
                  The rewritten text will appear here.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <details className="group rounded-xl border border-rule bg-bg">
        <summary className="flex cursor-pointer list-none items-center gap-2 p-4 text-xs font-semibold text-ink-2 marker:hidden hover:text-ink">
          <BookOpen className="h-4 w-4 text-accent" />
          Regex cheat sheet
          <span className="ml-auto font-mono text-ink-3 transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="grid gap-6 border-t border-rule p-4 sm:grid-cols-2">
          {CHEATSHEET.map((section) => (
            <div key={section.group}>
              <h3 className="mb-2 label">
                {section.group}
              </h3>
              <dl className="space-y-1.5">
                {section.items.map(([token, meaning]) => (
                  <div key={token} className="flex items-baseline gap-3">
                    <dt className="w-28 shrink-0">
                      <code className="rounded bg-bg-2 px-1.5 py-0.5 font-mono text-[11px] text-ink">
                        {token}
                      </code>
                    </dt>
                    <dd className="text-xs text-ink-2">{meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
