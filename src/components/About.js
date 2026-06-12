import Reveal from "@/components/Reveal";

const stats = [
  ["50+", "Projects delivered"],
  ["100K+", "App downloads"],
  ["5.0★", "Client rating"],
  ["5+", "Years of RN"],
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Reveal className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="eyebrow">04 · ABOUT</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Building things people use every day.
            </h2>
          </div>
          <div>
            <p className="text-lg text-ink-2 leading-[1.6]">
              I started writing React Native because I wanted to ship the kinds
              of apps I keep on my own home screen. Five years and fifty-plus
              projects later, I’m still here — based in Karachi, working with
              founders and product teams worldwide on apps that have to feel{" "}
              <em className="text-ink not-italic font-italic-serif">fast</em>{" "}
              and{" "}
              <em className="text-ink not-italic font-italic-serif">obvious</em>
              .
            </p>
            <p className="text-lg text-ink-2 leading-[1.6] mt-5">
              My sweet spot is taking an early-stage idea and walking it through
              architecture, motion, Firebase wiring, payments, and submission.
              I’m fluent in the boring parts (CodePush, Fastlane, TestFlight,
              Play Console) so you don’t have to be.
            </p>

            <div className="mt-7 p-5 rounded-xl bg-bg-3 text-sm text-ink-2 leading-[1.6]">
              <span className="font-mono text-[11px] tracking-[0.08em] text-accent-2">
                NOTE ·{" "}
              </span>
              I’m <strong className="text-ink font-semibold">Anwer</strong>{" "}
              Solangi (with an ‘e’), the React Native developer. Different
              person from <em className="font-italic-serif">Anwar</em> Solangi
              (with an ‘a’), the late Pakistani TV actor (1944–2008).
            </div>
          </div>
        </Reveal>

        {/* Stats banner */}
        <div className="mt-14 lg:mt-20 border-t border-b border-rule py-10 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map(([v, l], i) => (
              <Reveal
                key={l}
                delay={i * 100}
                className={`px-4 md:px-8 ${
                  i === 0 ? "" : "md:border-l md:border-rule"
                }`}
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-extrabold tracking-[-0.04em] leading-[1] text-accent">
                  {v}
                </div>
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-2 mt-3">
                  {l}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
