export const publishReactNativeAppPlayStore = {
  slug: "publish-react-native-app-play-store",
  title: "Publishing a React Native App to the Play Store, Start to Finish",
  description:
    "The full path from a working Expo build to a live Play Store listing: signing, the AAB, store assets, the privacy policy Google now requires from everyone, the data safety form, and the closed test that catches first-time developers off guard.",
  metaDescription:
    "From an Expo build to a live Play Store listing: signing, the AAB, store assets, the data safety form, and the closed test that catches people out.",
  category: "Guides",
  tags: [
    "publish react native app play store",
    "expo eas build android",
    "android app bundle",
    "play console data safety",
    "play store closed testing",
    "react native android release",
  ],
  publishedAt: "2026-09-18",
  cover: "/blog/play-store-cover.svg",
  coverAlt:
    "A phone with an upward arrow representing a React Native app being uploaded to the Play Store",
  content: [
    {
      type: "p",
      text: "The code is the easy part. I have watched more than one perfectly good app sit finished on a developer's laptop for a month because the last mile — signing, store assets, policy forms, a review queue — looked like a wall of unfamiliar paperwork. It is not hard. It is just long, and almost none of it is React Native specific.",
    },
    {
      type: "p",
      text: "This is the sequence I run for every Android release, in order, with the parts that bite first-timers called out. It assumes you have an app that runs on a real device and a Google Play developer account.",
    },
    { type: "h2", text: "1. Decide who owns the signing key" },
    {
      type: "p",
      text: "Android apps are signed, and the key is your app's identity forever. Lose it, and you cannot ship an update to your own listing — you ship a new listing, with zero installs and zero reviews. This is the one irreversible decision in the whole process.",
    },
    {
      type: "p",
      text: "Use Play App Signing. Google holds the final signing key, you hold an upload key, and if the upload key is ever lost you can reset it with support. If you are on EAS, the key lives in your Expo account and `eas credentials` shows you exactly what it holds. Whichever route you take, back up the keystore and its passwords somewhere that survives your laptop dying.",
    },
    {
      type: "callout",
      title: "If you are building for a client",
      text: "The account should be the client's, created with the client's email, with you added as a user. I have seen handovers where the app lived in a freelancer's personal account and the transfer took weeks. Sort out ownership before the first upload, not after launch.",
    },
    { type: "h2", text: "2. Build an AAB, not an APK" },
    {
      type: "p",
      text: "Google has required the Android App Bundle for new apps for years now. You upload one `.aab` and Google generates the per-device APKs, which is why install sizes dropped noticeably when the format landed. APKs are still fine for handing a build to a tester over WhatsApp; they are not what you upload.",
    },
    {
      type: "code",
      language: "bash",
      code: `# Expo / EAS
eas build --platform android --profile production

# Bare React Native
cd android && ./gradlew bundleRelease`,
    },
    {
      type: "p",
      text: "Two fields decide whether the upload is accepted. `versionCode` is an integer that must increase with every single upload, including the ones you immediately regret. `versionName` is the human string users see. Expo can bump the code for you with `autoIncrement`, and letting it do that has saved me more failed uploads than any other setting.",
    },
    {
      type: "p",
      text: "Also check your target API level before you build. Google raises the minimum target level every year and refuses new uploads below it, so an app that shipped fine last autumn may be rejected this autumn. Play Console tells you the current requirement, and Expo's SDK upgrades track it.",
    },
    { type: "h2", text: "3. Get the store assets ready" },
    {
      type: "p",
      text: "You cannot submit without these, and they are the reason most launch days slip by an evening:",
    },
    {
      type: "list",
      items: [
        "**App icon** — 512 × 512 PNG, uploaded in Play Console rather than bundled in the app.",
        "**Feature graphic** — 1024 × 500. It sits at the top of your listing and appears in Play's promotional slots.",
        "**Phone screenshots** — at least two, though the listing looks thin with fewer than four.",
        "**Short description** — 80 characters, and it is the line people actually read.",
        "**Full description** — 4000 characters, and the one place your keywords matter for Play search.",
      ],
    },
    {
      type: "p",
      text: "For the icon set, I use the [free app icon generator](/tools/app-icon-generator) I built — one square image in, every platform size out, including that 512 — and I wrote up [every size you need](/blog/app-icon-sizes-ios-android-web) if you would rather do it by hand. For screenshots, take them on a real device at a real resolution and lead with the screen that shows what the app does, not your splash screen.",
    },
    { type: "h2", text: "4. Host a privacy policy, even for a tiny app" },
    {
      type: "p",
      text: "Google now expects a reachable privacy policy URL from every app on the store, whether or not it collects anything. It has to be a public page, it has to stay reachable, and \"I will add it later\" is a rejection.",
    },
    {
      type: "p",
      text: "I host one per app on this site — [here is the one for Nearby](/apps/nearby/privacy) — because a URL you control is a URL you can keep alive. Plenty of people use a free generator and a Notion page instead; that works until the page moves. What matters is that the link in Play Console resolves five years from now.",
    },
    {
      type: "p",
      text: "If your app is aimed at or appeals to children, there is a second document: the child safety standards policy. It is a separate requirement with its own form, and it is not optional for that category.",
    },
    { type: "h2", text: "5. Fill in the data safety form honestly" },
    {
      type: "p",
      text: "The data safety section becomes the \"Data safety\" card users see on your listing. You declare what you collect, whether it leaves the device, whether it is encrypted in transit, and whether users can request deletion.",
    },
    {
      type: "p",
      text: "The trap is that third-party SDKs collect things on your behalf. An analytics SDK, a crash reporter, an ads library — each one adds declarations you are responsible for. Before filling this in, list every SDK in your `package.json` that talks to a server and check its documentation. Declaring nothing while shipping an ads SDK is how apps get pulled.",
    },
    {
      type: "p",
      text: "There is an upside to being boring here. DocuLensAI runs its OCR entirely on the device, so its data safety card is almost empty, and \"nothing leaves your phone\" turned out to be the most persuasive line in the listing.",
    },
    { type: "h2", text: "6. Content rating, audience, and the rest of the forms" },
    {
      type: "list",
      items: [
        "**Content rating** — a questionnaire that produces official ratings. Answer it accurately; misrating is a policy violation, not a rounding error.",
        "**Target audience** — if you include under-13s, a stricter set of rules applies.",
        "**Ads declaration** — whether the app contains ads. It shows as a badge on your listing.",
        "**App access** — if anything sits behind a login, provide working demo credentials or the reviewer sees a wall and rejects.",
      ],
    },
    {
      type: "p",
      text: "That last one is worth repeating. A reviewer with no way past your sign-in screen will reject the build, and the rejection message is generic enough that people waste days guessing.",
    },
    { type: "h2", text: "7. The closed test that surprises everyone" },
    {
      type: "p",
      text: "If your developer account is a personal one rather than an organisation, Google requires a closed test before it will let you apply for production access: a set of real testers opted in, running the app for a continuous stretch of days, with the rules on tester count and duration published in Play Console.",
    },
    {
      type: "p",
      text: "Budget for it. You need real people with real Google accounts who actually install the thing, and \"a continuous period\" means the clock restarts if your tester count drops. Line up the testers while you are still writing the listing, not after you click submit. Organisation accounts skip this, which is one more reason to get the account type right at the start.",
    },
    { type: "h2", text: "8. Submit, then watch the first 48 hours" },
    {
      type: "p",
      text: "Roll out to production, and expect the first review of a brand-new app to take noticeably longer than later updates. Use a staged rollout — start at a small percentage — so a crash on some Android 12 device you have never owned does not reach everyone before you notice.",
    },
    {
      type: "p",
      text: "Then watch Android vitals. Crash rate and ANR rate are the two numbers Google measures you against, and a bad ANR rate quietly suppresses your listing in Play search. It is the closest thing the store has to a health score.",
    },
    {
      type: "callout",
      title: "Updates are the easy part",
      text: "Bump the version code, build, upload, roll out. And if the fix is pure JavaScript, over-the-air updates let you ship it without a store review at all — as long as you are not changing native code or smuggling in features the review never saw.",
    },
    { type: "h2", text: "The short version" },
    {
      type: "list",
      ordered: true,
      items: [
        "Sort out account ownership and signing before anything else.",
        "Ship an AAB with an incrementing version code and a current target API level.",
        "Prepare icon, feature graphic and screenshots up front.",
        "Host a privacy policy on a URL you control.",
        "Declare data collection honestly, including what your SDKs do.",
        "Run the closed test early if you are on a personal account.",
        "Roll out in stages and watch crashes and ANRs.",
      ],
    },
    {
      type: "p",
      text: "None of this is difficult, but the first time through it takes a week of evenings, and the failure modes are unhelpfully vague. If you want the whole thing handled — build, listing, forms, rollout — [that is the part of the job I do most often](/hire-react-native-developer-karachi). You can see [what I have shipped](/apps) to judge whether that is the right call.",
    },
  ],
};
