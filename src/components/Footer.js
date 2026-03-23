"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/anwersolangi" },
    { label: "LinkedIn", href: "https://linkedin.com/in/anwersolangi" },
    { label: "Twitter", href: "https://twitter.com/anwerxolangi" },
    { label: "Medium", href: "https://medium.com/@anwersolangi" },
    { label: "Fiverr", href: "https://fiverr.com/anwer_solangi" },
  ];

  const projects = [
    {
      label: "YouTube Fullscreen Focus",
      href: "/extensions/youtube-fullscreen-focus",
    },
    { label: "Nearby App", href: "https://github.com/anwersolangi/nearby" },
    { label: "ReactTube", href: "https://github.com/anwersolangi/reacttube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-16 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-extralight tracking-tight text-gray-900 mb-2">
                Anwer Solangi<span className="text-blue-500">.</span>
              </h3>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                React Native Developer
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Senior React Native Developer based in Karachi, Pakistan. Crafting
              exceptional mobile experiences with clean, maintainable code.
              Specializing in cross-platform apps, browser extensions, and
              innovative solutions that delight users worldwide.
            </p>

            <div className="flex items-start gap-3 text-sm">
              <svg
                className="w-5 h-5 text-gray-400 mt-0.5"
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
              <div>
                <p className="text-gray-700 font-light">
                  Karachi, Sindh, Pakistan
                </p>
                <p className="text-gray-500 text-xs">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-900 mb-6 font-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-900 mb-6 font-light">
              Featured Work
            </h4>
            <ul className="space-y-3 mb-8">
              {projects.map((project) => (
                <li key={project.label}>
                  <a
                    href={project.href}
                    target={
                      project.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-light"
                  >
                    {project.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-900 mb-6 font-light">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-200">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Note:</strong> I am{" "}
              <strong>Anwer Solangi</strong> (spelled with &apos;e&apos;), a
              React Native developer. I am a different person from{" "}
              <em>Anwar Solangi</em> (spelled with &apos;a&apos;), who was a
              Pakistani television actor (1944-2008).
            </p>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Anwer Solangi. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="hover:text-gray-900 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <p>Built with Next.js & React</p>
              <span className="text-gray-300">•</span>
              <p>Deployed on Vercel</p>
            </div>
          </div>
        </div>

        <div className="pb-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
          >
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
