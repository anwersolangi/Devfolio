import Reveal from "@/components/Reveal";

/**
 * Capability-first stack section. No skill percentages — each category
 * leads with what the tool is actually used for in shipped work.
 */
const categories = [
  {
    title: "Mobile Engineering",
    items: [
      ["React Native & Expo", "5+ years, 50+ shipped apps"],
      ["TypeScript & modern JavaScript", "typed, maintainable codebases"],
      ["Reanimated & Gesture Handler", "the 60fps motion behind the reels"],
      ["React Navigation & deep linking", "auth flows, tabs, universal links"],
      ["Native modules", "Swift / Kotlin bridges when JS isn't enough"],
    ],
  },
  {
    title: "Backend & Realtime",
    items: [
      ["Firebase", "Auth, Firestore, FCM, Cloud Functions"],
      ["Node.js & REST APIs", "pragmatic backends for mobile products"],
      ["GraphQL & Socket.io", "live data, chat, presence"],
      ["MongoDB", "document modeling for app data"],
      ["Stripe & payments", "subscriptions and checkout flows"],
    ],
  },
  {
    title: "Shipping & Tooling",
    items: [
      ["Fastlane · TestFlight · Play Console", "automated release pipelines"],
      ["CodePush", "over-the-air updates, no resubmission"],
      ["Git, GitHub & CI", "reviews, branching, automated checks"],
      ["Jest & Detox", "unit and end-to-end testing"],
      ["Figma", "design handoff and motion specs"],
    ],
  },
];

const additional = [
  "Redux / MobX",
  "Lottie",
  "Push Notifications",
  "Async Storage",
  "Styled Components",
  "RN Paper",
  "Chrome Extension APIs",
  "Xcode",
  "Android Studio",
  "Webpack",
  "Babel",
  "Postman",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Reveal className="mb-10 lg:mb-12">
          <div className="eyebrow">06 · STACK</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight mt-3 text-ink">
            Tools I reach for.
          </h2>
          <p className="text-base md:text-lg text-ink-2 leading-relaxed mt-5 max-w-2xl">
            The stack behind everything in the sections above — organized by
            what it’s actually used for, not by buzzword count.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 120} className="h-full">
              <div className="h-full p-6 lg:p-7 rounded-2xl bg-bg-2 border border-rule hover:border-accent/30 transition-colors duration-300">
                <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase mb-5 pb-4 border-b border-rule">
                  {cat.title}
                </div>
                <ul className="space-y-4 list-none p-0">
                  {cat.items.map(([name, detail]) => (
                    <li key={name}>
                      <div className="text-[15px] font-semibold tracking-[-0.01em] text-ink leading-snug">
                        {name}
                      </div>
                      <div className="text-[13px] text-ink-3 leading-snug mt-0.5">
                        {detail}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={300}
          className="mt-5 lg:mt-6 p-6 rounded-2xl bg-bg-2 border border-rule flex flex-wrap items-center gap-2"
        >
          <div className="font-mono text-[11px] tracking-[0.1em] text-ink-3 mr-2">
            +ALSO:
          </div>
          {additional.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-2.5 py-1.5 border border-rule rounded-md text-ink-2"
            >
              {s}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
