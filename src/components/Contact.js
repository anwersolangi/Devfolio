import Link from "next/link";
import { Section } from "@/components/Section";

const socials = [
  ["GitHub", "https://github.com/anwersolangi"],
  ["LinkedIn", "https://www.linkedin.com/in/anwersolangi"],
  ["X", "https://x.com/anwersolangidev"],
  ["YouTube", "https://www.youtube.com/@anwersolangidev"],
  ["Medium", "https://medium.com/@anwersolangy"],
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] font-semibold tracking-[-0.025em] leading-[1.1] text-ink max-w-2xl text-balance">
        Have an app to build? Tell me about it.
      </p>
      <p className="mt-5 text-[17px] text-ink-2 leading-[1.6] max-w-prose">
        Available for freelance and contract work — new builds, rescues and
        ongoing product work. I usually reply within a day.{" "}
        <Link href="/hire-react-native-developer-karachi" className="link">
          How hiring a React Native developer in Karachi works
        </Link>
        .
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href="mailto:me@anwersolangi.com" className="btn-primary">
          me@anwersolangi.com
        </a>
        <a
          href="/anwer-solangi-resume.pdf"
          download
          className="btn-secondary"
        >
          Résumé (PDF) ↓
        </a>
      </div>

      <ul className="mt-10 pt-6 border-t border-rule flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-2 list-none m-0 p-0">
        {socials.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer me"
              className="hover:text-ink transition-colors"
            >
              {label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
