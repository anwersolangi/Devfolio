"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/SmoothScroll";
import ShimmerButton from "@/components/ui/ShimmerButton";

function NavLink({ href, className, onClick, children }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    // Lenis owns the page scroll when it's running; body overflow alone won't
    // stop its rAF loop from scrolling underneath the open menu.
    if (lenis) {
      if (menuOpen) lenis.stop();
      else lenis.start();
      return () => lenis.start();
    }
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, lenis]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const logoHref = "/";
  const hireHref = "/hire-react-native-developer-karachi";

  const links = [
    { label: "Reels", href: "/reels" },
    { label: "Apps", href: "/apps" },
    { label: "Tools", href: "/tools" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-bg/90 backdrop-blur-lg border-b border-rule"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-screen mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <NavLink href={logoHref} className="group inline-flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-accent-deep text-on-accent font-bold text-sm flex items-center justify-center">
                A
              </span>
              <span className="font-medium text-[15px] tracking-tight text-ink">
                Anwer Solangi
              </span>
              <span className="hidden sm:inline font-mono text-[10px] tracking-[0.08em] text-ink-3 ml-1">
                / react native dev
              </span>
            </NavLink>

            <div className="hidden lg:flex items-center gap-7 text-sm text-ink-2">
              {links.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  className="hover:text-ink transition-colors duration-200"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/anwersolangi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-ink-2 hover:text-ink transition-colors"
              >
                github ↗
              </a>
              <ShimmerButton
                as={Link}
                href={hireHref}
                className="px-4 py-2 text-xs font-semibold text-on-accent"
              >
                Hire me
              </ShimmerButton>
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative w-10 h-10 text-ink"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block absolute left-1/2 top-1/2 -translate-x-1/2 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`block absolute left-1/2 top-1/2 -translate-x-1/2 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block absolute left-1/2 top-1/2 -translate-x-1/2 h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[105] lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-bg-2 z-[110] lg:hidden transform transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 py-6 border-b border-rule">
            <span className="font-medium text-lg text-ink">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-ink-2 hover:text-ink rounded-md hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav
            data-lenis-prevent
            className="flex-1 overflow-y-auto px-6 py-6 space-y-1"
          >
            {links.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-light text-ink/80 hover:text-ink hover:bg-white/5 rounded-md transition-all"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-6 space-y-2">
              <a
                href="https://github.com/anwersolangi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-mono text-ink-2 border border-rule rounded-md hover:text-ink transition-colors"
              >
                github ↗
              </a>
              <ShimmerButton
                as={Link}
                href={hireHref}
                onClick={() => setMenuOpen(false)}
                borderRadius="0.375rem"
                className="w-full px-4 py-3 text-sm font-semibold text-on-accent"
              >
                Hire me
              </ShimmerButton>
            </div>
          </nav>
          <div className="px-6 py-5 border-t border-rule font-mono text-[11px] text-ink-3 tracking-[0.06em]">
            KARACHI, PK · 24.86°N 67.00°E
          </div>
        </div>
      </div>
    </>
  );
}
