import Reveal from "@/components/Reveal";

const experiences = [
  {
    years: "2019 — Now",
    role: "Senior React Native Developer",
    org: "Freelance · Remote · Karachi, Pakistan",
    chips: ["Fiverr", "CodeCanyon", "Direct clients"],
    bullets: [
      "Completed 50+ successful mobile app projects for international clients",
      "Built and sold React Native templates on CodeCanyon with active sales",
      "Shipped location-based social app with 10K+ Play Store downloads",
      "5★ ratings across Fiverr, CodeCanyon and direct client work",
      "Deep Firebase integration, real-time features, and GPS technology",
    ],
  },
  {
    years: "2018 — Now",
    role: "Independent Mobile Developer",
    org: "Self-directed projects",
    chips: ["CodeCanyon", "GitHub", "Play Store"],
    bullets: [
      "Published multiple React Native templates on the CodeCanyon marketplace",
      "Active open-source contributor across React Native and the JS ecosystem",
      "Built messaging apps, location services, and video platforms",
      "Play Store deployment and ongoing maintenance for production apps",
      "Sharing reels and tutorials with the broader React Native community",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 lg:py-32 px-6 lg:px-16 bg-bg-2"
    >
      <div className="max-w-screen mx-auto">
        <Reveal className="mb-10 lg:mb-12">
          <div className="eyebrow">07 · EXPERIENCE</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight mt-3 text-ink">
            The track record.
          </h2>
        </Reveal>

        {experiences.map((x, i) => (
          <Reveal key={x.role} delay={i * 150}>
            <article className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 py-8 lg:py-10 border-t border-rule">
              <div className="font-mono text-[12px] tracking-[0.1em] text-accent-2 pt-1">
                {x.years}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-ink">
                  {x.role}
                </h3>
                <div className="font-mono text-[12px] tracking-[0.04em] text-ink-3 mt-1.5">
                  {x.org}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {x.chips.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-rule text-ink-2"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mt-5 list-none p-0">
                  {x.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm text-ink-2 leading-[1.5]"
                    >
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent"
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
