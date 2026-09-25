// Renders scripts/resume/resume.html to public/anwer-solangi-resume.pdf with
// headless Chrome, so the PDF keeps real, selectable text and clickable links
// (what applicant-tracking systems read). Run: npm run resume
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = CHROME_PATHS.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
  process.exit(1);
}

const src = path.resolve("scripts/resume/resume.html");
const out = path.resolve("public/anwer-solangi-resume.pdf");

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=5000",
  `--print-to-pdf=${out}`,
  pathToFileURL(src).href,
], { stdio: "inherit" });

console.log(`Wrote ${path.relative(process.cwd(), out)} (${(statSync(out).size / 1024).toFixed(0)} KB)`);
