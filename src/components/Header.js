"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Reels", href: "/reels" },
  { label: "Apps", href: "/apps" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
];

const HIRE_HREF = "/hire-react-native-developer-karachi";

// Route links light up on their own section; hash links never do.
const isActive = (pathname, href) =>
  !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the mobile menu on navigation. Adjusting state during render (not in
  // an effect) avoids a second paint with the menu still open.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled || open ? "border-rule" : "border-transparent"
      }`}
    >
      <nav
        className="max-w-screen mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.01em] text-ink"
        >
          Anwer Solangi
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-[15px] text-ink-2 list-none m-0 p-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`transition-colors duration-150 hover:text-ink ${
                  isActive(pathname, l.href) ? "text-ink font-medium" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 md:gap-3">
          <ThemeToggle />

          <Link
            href={HIRE_HREF}
            className="hidden md:inline-flex btn-primary btn-sm"
          >
            Hire me
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 -mr-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-current transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-current transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Phone menu: a panel under the bar, not a takeover. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-rule bg-bg-2"
      >
        <ul className="max-w-screen mx-auto px-5 sm:px-8 py-3 list-none m-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] text-ink border-b border-rule last:border-b-0"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Link
              href={HIRE_HREF}
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
