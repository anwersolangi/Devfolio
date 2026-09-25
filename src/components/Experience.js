import { Section } from "@/components/Section";

const experiences = [
  {
    years: "2019 — now",
    role: "Senior React Native Developer",
    org: "Freelance · remote from Karachi, Pakistan",
    via: "Direct clients, Fiverr, CodeCanyon",
    bullets: [
      "Completed 50+ mobile app projects for international clients",
      "Built and sold React Native templates on CodeCanyon with active sales",
      "Shipped a location-based social app with 10K+ Play Store downloads",
      "Five-star ratings across Fiverr, CodeCanyon and direct client work",
      "Deep Firebase integration, real-time features and GPS work",
    ],
  },
  {
    years: "2018 — now",
    role: "Independent Mobile Developer",
    org: "Self-directed products",
    via: "Play Store, Chrome Web Store, GitHub",
    bullets: [
      "Published multiple React Native templates on the CodeCanyon marketplace",
      "Open-source contributions across React Native and the JavaScript ecosystem",
      "Built messaging apps, location services and video platforms",
      "Play Store deployment and ongoing maintenance for production apps",
      "Weekly UI reels and tutorials for the React Native community",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Five-plus years of shipping React Native apps, mostly solo."
    >
      <div className="border-t border-rule">
        {experiences.map((x) => (
          <article
            key={x.role}
            className="grid gap-3 py-8 border-b border-rule md:grid-cols-[140px_1fr] md:gap-8"
          >
            <p className="text-[14px] text-ink-3 tabular-nums md:pt-1">
              {x.years}
            </p>
            <div className="min-w-0">
              <h3 className="text-[19px] font-semibold tracking-[-0.015em] text-ink leading-tight">
                {x.role}
              </h3>
              <p className="mt-1 text-[14px] text-ink-2">
                {x.org} <span className="text-ink-3">· via {x.via}</span>
              </p>
              <ul className="mt-4 space-y-1.5 text-[15px] text-ink-2 leading-[1.55] list-disc pl-5 marker:text-ink-3">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
