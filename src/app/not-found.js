import Link from "next/link";
import { PageShell } from "@/components/PageHeader";

export const metadata = {
  title: "Page not found | Anwer Solangi",
  description:
    "This page doesn't exist. Browse Anwer Solangi's React Native apps, free browser tools, UI reels and blog instead.",
  robots: { index: false, follow: true },
};

const PLACES = [
  ["Apps", "/apps", "React Native apps and Chrome extensions I've shipped."],
  ["Free tools", "/tools", "Browser utilities that never upload your files."],
  ["Reels", "/reels", "Screen-recorded React Native UI builds, with source."],
  ["Blog", "/blog", "Notes from building mobile apps for a living."],
];

export default function NotFound() {
  return (
    <PageShell width="max-w-3xl">
      <p className="text-[13px] font-medium text-ink-3 tabular-nums">404</p>
      <h1 className="mt-3 text-display font-semibold text-ink">
        This page doesn’t exist.
      </h1>
      <p className="mt-5 text-[17px] md:text-lg text-ink-2 leading-[1.6] max-w-2xl">
        The link may be old, or the page may have moved when the site was
        reorganised. App pages now live under <code className="rounded-md border border-rule bg-bg-3 px-1.5 py-0.5 font-mono text-[0.85em] text-ink">/apps</code>.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Go to the homepage
        </Link>
        <Link href="/#contact" className="btn-secondary">
          Get in touch
        </Link>
      </div>

      <ul className="mt-14 border-t border-rule list-none m-0 p-0">
        {PLACES.map(([label, href, blurb]) => (
          <li key={href} className="border-b border-rule">
            <Link href={href} className="group block py-4">
              <span className="block text-[17px] font-medium text-ink group-hover:text-accent transition-colors duration-150">
                {label}
              </span>
              <span className="block mt-0.5 text-[14px] text-ink-2">
                {blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
