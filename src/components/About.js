import { Section } from "@/components/Section";

const facts = [
  ["Based in", "Karachi, Sindh, Pakistan (UTC+5)"],
  ["Working with", "Founders and product teams, remotely worldwide"],
  ["Focus", "React Native and Expo · iOS and Android"],
  ["Also", "Swift and Kotlin native modules, Chrome extensions, free web tools"],
  ["Languages", "English, Urdu, Sindhi"],
  ["Availability", "Freelance and contract work"],
  ["Email", <a key="mail" href="mailto:me@anwersolangi.com" className="link">me@anwersolangi.com</a>],
];

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Building things people keep on their home screen."
    >
      <div className="max-w-prose text-[17px] text-ink-2 leading-[1.65] space-y-5">
        <p>
          I started writing React Native because I wanted to ship the kinds
          of apps I keep on my own home screen. Five years and fifty-plus
          projects later I’m still here — based in Karachi, working with
          founders and product teams worldwide on apps that have to feel fast
          and obvious.
        </p>
        <p>
          My sweet spot is taking an early-stage idea and walking it through
          architecture, motion, Firebase wiring, payments and store
          submission. I’m fluent in the boring parts — CodePush, Fastlane,
          TestFlight, Play Console — so you don’t have to be.
        </p>
      </div>

      <dl className="mt-10 border-t border-rule">
        {facts.map(([term, value]) => (
          <div
            key={term}
            className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 py-3 border-b border-rule text-[15px]"
          >
            <dt className="text-ink-3">{term}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-[14px] text-ink-2 leading-[1.6] max-w-prose">
        <span className="font-medium text-ink">A note on the name.</span> I’m{" "}
        <strong className="font-medium text-ink">Anwer</strong> Solangi, with
        an ‘e’ — the React Native developer. <em>Anwar</em> Solangi, with an
        ‘a’, was a Pakistani television actor (1944–2008). Different person.
      </p>
    </Section>
  );
}
