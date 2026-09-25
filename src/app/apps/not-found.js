import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/PageHeader";
import { APPS_LIST } from "@/data/apps";

// Shown for /apps/<unknown-slug>. Lists the real apps so a visitor arriving
// from an old store link or a typo can still find what they came for.
export default function AppNotFound() {
  return (
    <PageShell width="max-w-3xl">
      <p className="text-[13px] font-medium text-ink-3 tabular-nums">404</p>
      <h1 className="mt-3 text-display font-semibold text-ink">
        That app isn’t here.
      </h1>
      <p className="mt-5 text-[17px] md:text-lg text-ink-2 leading-[1.6] max-w-2xl">
        The link may be old or mistyped. Here’s everything I’ve shipped.
      </p>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-rule list-none m-0 p-0">
        {APPS_LIST.map((app) => (
          <li key={app.slug} className="border-b border-rule">
            <Link
              href={`/apps/${app.slug}`}
              className="group flex items-center gap-3 py-3.5"
            >
              {app.icon?.startsWith("/") ? (
                <Image
                  src={app.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-[10px] border border-rule"
                />
              ) : (
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-rule bg-bg-2 text-xl"
                  aria-hidden
                >
                  {app.icon}
                </span>
              )}
              <span className="min-w-0">
                <span className="block text-[17px] font-medium text-ink group-hover:text-accent transition-colors duration-150">
                  {app.name}
                </span>
                <span className="block truncate text-[13px] text-ink-3">
                  {app.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/apps" className="btn-primary">
          All apps
        </Link>
        <Link href="/" className="btn-secondary">
          Homepage
        </Link>
      </div>
    </PageShell>
  );
}
