"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  const actionItems = [
    {
      label: "GitHub",
      href: "https://github.com/anwersolangi",
      external: true,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const allMobileItems = [...menuItems, ...actionItems];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="group relative font-light text-xl md:text-2xl tracking-tighter text-black transition-all duration-300 hover:scale-105"
            >
              Anwer Solangi
              <span className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300">
                .
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></span>
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-sm uppercase font-light tracking-widest text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {actionItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl text-sm font-light tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl text-sm font-light tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                  </Link>
                )
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 text-black focus:outline-none group z-[60]"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    menuOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    menuOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[60] lg:hidden transform transition-transform duration-500 ease-out shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
            <span className="font-light text-xl tracking-tighter text-black">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-light text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {actionItems.map((item, index) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl text-sm font-light tracking-wide hover:shadow-lg transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      animationDelay: `${(menuItems.length + index) * 50}ms`,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl text-sm font-light tracking-wide hover:shadow-lg transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      animationDelay: `${(menuItems.length + index) * 50}ms`,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </nav>

          <div className="px-6 py-6 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
