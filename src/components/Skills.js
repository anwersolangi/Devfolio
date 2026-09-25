import { Section } from "@/components/Section";

const categories = [
  {
    title: "Mobile engineering",
    items: [
      ["React Native & Expo", "5+ years, 50+ shipped apps"],
      ["TypeScript & modern JavaScript", "typed, maintainable codebases"],
      ["Reanimated & Gesture Handler", "the 60fps motion behind the reels"],
      ["React Navigation & deep linking", "auth flows, tabs, universal links"],
      ["Native modules", "Swift / Kotlin bridges when JS isn’t enough"],
    ],
  },
  {
    title: "Backend & realtime",
    items: [
      ["Firebase", "Auth, Firestore, FCM, Cloud Functions"],
      ["Node.js & REST APIs", "pragmatic backends for mobile products"],
      ["GraphQL & Socket.io", "live data, chat, presence"],
      ["MongoDB", "document modelling for app data"],
      ["Stripe & payments", "subscriptions and checkout flows"],
    ],
  },
  {
    title: "Shipping & tooling",
    items: [
      ["Fastlane · TestFlight · Play Console", "automated release pipelines"],
      ["CodePush", "over-the-air updates, no resubmission"],
      ["Git, GitHub & CI", "reviews, branching, automated checks"],
      ["Jest & Detox", "unit and end-to-end testing"],
      ["Figma", "design handoff and motion specs"],
    ],
  },
];

const also = [
  "Redux / MobX",
  "Lottie",
  "Push notifications",
  "Async Storage",
  "Styled Components",
  "React Native Paper",
  "Chrome Extension APIs",
  "Xcode",
  "Android Studio",
  "Webpack",
  "Babel",
  "Postman",
];

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Stack"
      title="What I reach for, organised by what it’s actually used for."
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-8 border-t border-rule pt-8">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-[15px] font-semibold text-ink">{cat.title}</h3>
            <ul className="mt-4 space-y-3.5 list-none m-0 p-0">
              {cat.items.map(([name, detail]) => (
                <li key={name}>
                  <div className="text-[15px] text-ink leading-snug">{name}</div>
                  <div className="text-[13px] text-ink-3 leading-snug mt-0.5">
                    {detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 pt-6 border-t border-rule text-[14px] text-ink-2 leading-[1.7]">
        <span className="text-ink-3">Also: </span>
        {also.join(", ")}.
      </p>
    </Section>
  );
}
