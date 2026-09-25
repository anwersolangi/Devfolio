export const appIconSizes = {
  slug: "app-icon-sizes-ios-android-web",
  title: "Every App Icon Size You Actually Need in 2026",
  description:
    "The complete icon size list for iOS, Android and the web, plus the two rules that decide whether your icon survives being shrunk to 48 pixels: the Android safe zone, and designing for the smallest size first.",
  metaDescription:
    "Every app icon size for iOS, Android and the web in 2026, with the Android safe zone explained and a free generator that exports the whole set.",
  category: "Guides",
  tags: [
    "app icon sizes",
    "ios app icon sizes",
    "android launcher icon size",
    "adaptive icon safe zone",
    "play store icon 512",
    "favicon sizes",
    "app icon generator",
  ],
  publishedAt: "2026-09-16",
  cover: "/blog/app-icon-sizes-cover.svg",
  coverAlt:
    "App icon sizes for iOS, Android and the web, shown as a row of rounded squares shrinking from 1024 to 16 pixels",
  content: [
    {
      type: "p",
      text: "Every app I ship ends the same way. The build is green, the store listing is written, and then I spend an evening exporting the icon into twenty different sizes because iOS wants one set, Android wants another, and the web wants six more. It is the least interesting hour of the whole project, and getting one file wrong means an upload rejection at the worst possible moment.",
    },
    {
      type: "p",
      text: "So here is the full list, the reason each size exists, and the two design rules that decide whether your icon still reads at 48 pixels. I built a [free app icon generator](/tools/app-icon-generator) that exports this entire set from one square image — it runs in your browser and never uploads your artwork — but you should still know what it's producing and why.",
    },
    { type: "h2", text: "Start at 1024×1024, in a vector tool" },
    {
      type: "p",
      text: "Design the icon once, square, at 1024×1024, and design it in something vector-based. Every size below is a downscale of that master file. If you start from a 512-pixel raster, the App Store's 1024 slot will look soft, and soft is the one thing reviewers and users both notice instantly.",
    },
    {
      type: "p",
      text: "Do not round the corners yourself, and do not add a drop shadow. Both platforms mask the icon to their own shape — iOS to its superellipse, Android to whatever shape the launcher prefers — so a pre-rounded icon gets rounded twice and ends up with pale corner fringes. Export a full-bleed square.",
    },
    {
      type: "callout",
      title: "The 48-pixel test",
      text: "Before exporting anything, drop your 1024 icon into a design tool and scale it to 48 pixels. That is roughly how big it is on a phone's home screen. If the wordmark turns to mush, or three elements merge into one grey blob, the icon is too detailed. I have thrown away icons I liked at this step, including two for MemorIQ.",
    },
    { type: "h2", text: "iOS icon sizes" },
    {
      type: "p",
      text: "Since Xcode 14, you can technically ship a single 1024×1024 asset and let Xcode generate the rest. It works, and for a fresh Expo project it is what happens under the hood. But the React Native template still ships a full asset catalogue, plenty of older projects still carry one, and if you are handing files to a client's iOS team they will expect the set. Here it is, in points and the pixels those points resolve to.",
    },
    {
      type: "table",
      head: ["Pixels", "Point size", "Where it shows up"],
      rows: [
        ["40 × 40", "20pt @2x", "Notifications"],
        ["60 × 60", "20pt @3x", "Notifications"],
        ["58 × 58", "29pt @2x", "Settings"],
        ["87 × 87", "29pt @3x", "Settings"],
        ["80 × 80", "40pt @2x", "Spotlight search"],
        ["120 × 120", "60pt @2x", "Home screen, iPhone"],
        ["180 × 180", "60pt @3x", "Home screen, iPhone"],
        ["76 × 76", "76pt @1x", "Home screen, iPad"],
        ["152 × 152", "76pt @2x", "Home screen, iPad"],
        ["167 × 167", "83.5pt @2x", "Home screen, iPad Pro"],
        ["1024 × 1024", "App Store", "The listing itself"],
      ],
    },
    {
      type: "p",
      text: "Two rules Apple enforces on that last one. The 1024 App Store icon must be fully opaque — no alpha channel, no transparency — and it must not contain rounded corners of your own. An icon with an alpha channel is the single most common reason a first-time upload bounces back from App Store Connect.",
    },
    {
      type: "p",
      text: "Newer iOS versions also let people switch their home screen to dark or tinted icons. You can supply variants for that, and it is a genuinely nice detail on a consumer app, but it is optional — the system derives something reasonable from your default icon if you skip it.",
    },
    { type: "h2", text: "Android icon sizes, and the safe zone that trips everyone" },
    {
      type: "p",
      text: "Android is where icons go wrong, because Android does not just resize your icon — it masks it. Since adaptive icons landed, a launcher icon is two layers, a foreground and a background, on a 108 × 108dp canvas. Only the middle 72 × 72dp is guaranteed to be visible. The outer ring exists so the system can move the layers for parallax and shape effects.",
    },
    {
      type: "list",
      items: [
        "**108 × 108dp** — the full canvas you export.",
        "**72 × 72dp** — the area the launcher actually shows.",
        "**~66dp circle** — the safest zone. If a mask crops to a circle, everything outside this disappears.",
      ],
    },
    {
      type: "p",
      text: "In practice: put your mark inside the centre two-thirds and let the background layer bleed to the edges. I learned this the annoying way on an early build of Velocity Track, where the speedometer needle looked perfect in Android Studio's preview and got its tip sliced off on a Samsung launcher that masks to a squircle.",
    },
    {
      type: "p",
      text: "The raster sizes, one per density bucket, all named `ic_launcher.png` inside their own `mipmap` folder:",
    },
    {
      type: "table",
      head: ["Pixels", "Density bucket", "Folder"],
      rows: [
        ["48 × 48", "mdpi (baseline)", "mipmap-mdpi"],
        ["72 × 72", "hdpi", "mipmap-hdpi"],
        ["96 × 96", "xhdpi", "mipmap-xhdpi"],
        ["144 × 144", "xxhdpi", "mipmap-xxhdpi"],
        ["192 × 192", "xxxhdpi", "mipmap-xxxhdpi"],
        ["512 × 512", "Play Store listing", "Uploaded in Play Console"],
      ],
    },
    {
      type: "p",
      text: "The 512 is different from the rest: it is not bundled in the app, it is uploaded to Play Console as part of the store listing, and unlike Apple's it is a 32-bit PNG that may carry transparency. While you are in there, you will also need a **1024 × 500 feature graphic** — the banner at the top of your listing. It is not an icon, but it is the other asset everybody forgets until upload day.",
    },
    {
      type: "p",
      text: "One more layer worth adding: a monochrome version. Android's themed icons tint a single-colour version of your mark to match the user's wallpaper. Supply a flat silhouette and your app stops being the odd one out on a themed home screen.",
    },
    { type: "h2", text: "Web, PWA and favicon sizes" },
    {
      type: "p",
      text: "If your app has a marketing site — and it should — the same artwork has a third life in the browser. This is the set I ship on every project, including this site:",
    },
    {
      type: "table",
      head: ["Pixels", "Purpose"],
      rows: [
        ["16 × 16", "Browser tab favicon"],
        ["32 × 32", "Retina tab, bookmark bar"],
        ["48 × 48", "Desktop shortcuts, older Windows"],
        ["180 × 180", "apple-touch-icon, iOS home screen"],
        ["192 × 192", "PWA manifest, Android home screen"],
        ["512 × 512", "PWA manifest, splash screen"],
      ],
    },
    {
      type: "p",
      text: "A detail worth knowing: at 16 pixels your logo is about the width of this letter. Most brand marks do not survive that. The usual fix is a separate, simplified favicon — one letter, one shape — rather than a shrunken version of the full lockup. A modern trick is to ship an SVG favicon and let the browser scale it, with a 32-pixel PNG as fallback for the ones that do not support it.",
    },
    { type: "h2", text: "Where the files go in a React Native project" },
    {
      type: "p",
      text: "If you are on Expo — and in 2026 you probably should be, for [reasons I have written about](/blog/react-native-in-2026) — you do not manage the folders yourself. You point the config at three files and let the build generate the rest:",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "expo": {
    "icon": "./assets/icon.png",
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0d6b4b"
      }
    },
    "web": { "favicon": "./assets/favicon.png" }
  }
}`,
    },
    {
      type: "p",
      text: "`icon` is your 1024 square. `adaptiveIcon.foregroundImage` is the 1024 foreground with the safe zone respected — transparent around the mark, not a full-bleed square. The background colour fills everything behind it. On a bare React Native project you are placing files into `ios/<App>/Images.xcassets/AppIcon.appiconset` and the five `android/app/src/main/res/mipmap-*` folders by hand, which is exactly the job worth automating.",
    },
    { type: "h2", text: "The fastest way to produce all of it" },
    {
      type: "p",
      text: "This is the part where I point at the tool I built because I was tired of doing it manually. Drop a 1024 × 1024 square into the [app icon generator](/tools/app-icon-generator), pick the platforms you need, and it renders every size above with the canvas API and hands you a ZIP with the correct filenames and folder structure. Nothing leaves your browser — there is no upload, because the resizing happens on your machine.",
    },
    {
      type: "list",
      items: [
        "iOS: the eleven sizes above, named the way an asset catalogue expects.",
        "Android: five `mipmap` folders plus the 512 Play Store icon.",
        "Web: favicons, apple-touch-icon, and the two PWA manifest sizes.",
      ],
    },
    {
      type: "p",
      text: "It does not design the icon for you, and it will not save an icon that fails the 48-pixel test. But it turns the last boring hour of a project into about forty seconds, which is the entire reason it exists. The rest of my [free browser tools](/tools) came from the same impulse.",
    },
    { type: "h2", text: "A short checklist before you upload" },
    {
      type: "list",
      ordered: true,
      items: [
        "Master file is square, 1024 × 1024, vector-derived.",
        "No rounded corners and no drop shadow baked into the artwork.",
        "App Store 1024 is fully opaque, with no alpha channel.",
        "Android foreground keeps its mark inside the centre 66dp circle.",
        "Play Console has both the 512 icon and the 1024 × 500 feature graphic.",
        "The icon still reads as one thing at 48 pixels.",
      ],
    },
    {
      type: "p",
      text: "Get those six right and you will never think about icon sizes again, which is the goal. If you would rather hand the whole pipeline to someone who has done it fifty times, [that is what I do for a living](/hire-react-native-developer-karachi).",
    },
  ],
};
