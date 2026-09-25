import Link from "next/link";

const socials = [
  ["GitHub", "https://github.com/anwersolangi"],
  ["LinkedIn", "https://www.linkedin.com/in/anwersolangi"],
  ["X", "https://x.com/anwersolangidev"],
  ["Instagram", "https://www.instagram.com/anwersolangidev"],
  ["YouTube", "https://www.youtube.com/@anwersolangidev"],
  ["TikTok", "https://www.tiktok.com/@anwersolangidev"],
  ["Pinterest", "https://www.pinterest.com/anwersolangidev"],
  ["Facebook", "https://www.facebook.com/anwersolangidev"],
  ["Medium", "https://medium.com/@anwersolangy"],
];

const explore = [
  ["Hire me", "/hire-react-native-developer-karachi"],
  ["Selected work", "/#work"],
  ["Reels", "/reels"],
  ["Apps", "/apps"],
  ["Free tools", "/tools"],
  ["Blog", "/blog"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-bg-2">
      <div className="max-w-screen mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <p className="text-[15px] font-semibold text-ink">Anwer Solangi</p>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-2">
              Senior React Native developer in Karachi, Pakistan, building
              iOS and Android apps for founders and product teams worldwide.
            </p>
          </div>

          <FooterList title="Explore">
            {explore.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-ink transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </FooterList>

          <FooterList title="Elsewhere">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="hover:text-ink transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </FooterList>

          <FooterList title="Contact">
            <li>
              <a
                href="mailto:me@anwersolangi.com"
                className="hover:text-ink transition-colors"
              >
                me@anwersolangi.com
              </a>
            </li>
            <li>
              <a
                href="/anwer-solangi-resume.pdf"
                download
                className="hover:text-ink transition-colors"
              >
                Résumé (PDF)
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-ink transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-ink transition-colors">
                Terms
              </Link>
            </li>
          </FooterList>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-ink-3">
          <span>© {year} Anwer Solangi. Karachi, Pakistan.</span>
          <span>Anwer, with an ‘e’.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, children }) {
  return (
    <div>
      <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 mb-3">
        {title}
      </p>
      <ul className="space-y-2 text-[14px] text-ink-2 list-none m-0 p-0">
        {children}
      </ul>
    </div>
  );
}
