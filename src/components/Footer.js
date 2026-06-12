const socials = [
  ["GitHub", "https://github.com/anwersolangi"],
  ["LinkedIn", "https://linkedin.com/in/anwersolangi"],
  ["Twitter", "https://twitter.com/anwerxolangi"],
  ["Medium", "https://medium.com/@anwersolangi"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="max-w-screen mx-auto px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-accent text-[#1a0a02] font-bold text-sm flex items-center justify-center">
                A
              </span>
              <span className="font-medium text-[15px] tracking-tight text-ink">
                Anwer Solangi
              </span>
            </div>
            <p className="text-sm text-ink-3 leading-relaxed mt-3">
              Senior React Native developer in Karachi, building mobile apps
              for founders and product teams worldwide.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 mb-3">
                Connect
              </div>
              <ul className="space-y-2 list-none p-0">
                {socials.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-2 hover:text-ink transition-colors"
                    >
                      {label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3 mb-3">
                Contact
              </div>
              <ul className="space-y-2 list-none p-0">
                <li>
                  <a
                    href="mailto:me@anwersolangi.com"
                    className="text-sm text-ink-2 hover:text-ink transition-colors"
                  >
                    me@anwersolangi.com
                  </a>
                </li>
                <li>
                  <a
                    href="/anwer-solangi-resume.pdf"
                    download
                    className="text-sm text-ink-2 hover:text-ink transition-colors"
                  >
                    Résumé (PDF) ↓
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] tracking-[0.06em] text-ink-3">
          <span>© {year} ANWER SOLANGI · KARACHI, PK · 24.86°N 67.00°E</span>
          <span>BUILT WITH REACT NATIVE ENERGY</span>
        </div>
      </div>
    </footer>
  );
}
