export const reactNativeAnimationExamples = {
  slug: "react-native-animation-examples",
  title: "React Native Animation Examples: 5 Screens and How They Work",
  description:
    "Five animated screens I built and recorded this year — gesture-driven onboarding, a flipping card form, a Skia game, a blurred music player and a live delivery map — with the technique behind each one and the reason it runs at full frame rate.",
  metaDescription:
    "Five animated React Native screens with video and the technique behind each: Reanimated gestures, interpolation, Skia drawing and layout animation.",
  category: "React Native",
  tags: [
    "react native animation examples",
    "react native reanimated",
    "gesture handler",
    "react native skia",
    "react native ui animation",
    "reanimated worklets",
  ],
  publishedAt: "2026-09-20",
  cover: "/blog/animation-examples-cover.svg",
  coverAlt:
    "A motion trail arcing across the frame, representing React Native animation examples",
  content: [
    {
      type: "p",
      text: "I post a short screen recording most weeks — a single screen, built and animated, usually in one file. People ask how specific ones work far more often than they ask anything else, so here are five of them with the technique explained, the video, and a link to the full write-up for each.",
    },
    {
      type: "p",
      text: "They all share one rule. Animation in React Native is only smooth when the movement never touches the JavaScript thread while it is running. Reanimated does that by compiling small functions — worklets — that execute on the UI thread. Your JavaScript sets up the animation; the UI thread runs it, frame by frame, even while JavaScript is busy parsing a response.",
    },
    {
      type: "code",
      language: "tsx",
      code: `const offset = useSharedValue(0);

// Runs on the UI thread, not the JS thread.
const style = useAnimatedStyle(() => ({
  transform: [{ translateX: offset.value }],
}));

const pan = Gesture.Pan()
  .onChange((e) => {
    offset.value += e.changeX;
  })
  .onEnd(() => {
    offset.value = withSpring(0);
  });`,
    },
    {
      type: "p",
      text: "That is the whole model. A shared value holds a number both threads can see, `useAnimatedStyle` turns it into style, and the gesture updates it directly. Everything below is a variation on those three pieces.",
    },
    { type: "h2", text: "1. Onboarding that follows your thumb" },
    {
      type: "p",
      text: "Most onboarding carousels move in discrete pages: you swipe, it snaps. This one treats the swipe as a continuous input, so the background colour, the shape mask and the text all move as a function of finger position. Let go early and it springs back; pass the threshold and it completes.",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/W4o1mQ_lmhI",
      watchUrl: "https://www.youtube.com/shorts/W4o1mQ_lmhI",
      title: "Liquid swipe onboarding built with React Native Reanimated",
      caption:
        "Liquid swipe onboarding. The gesture drives every layer at once, so nothing waits for the swipe to end.",
      aspect: "vertical",
    },
    {
      type: "p",
      text: "The technique to steal: interpolate several properties from one shared value. `interpolate` maps the drag distance onto a colour, a scale and an opacity at the same time, which is what makes the screen feel like one object rather than four animated pieces. Full build: [smooth liquid swipe onboarding](/reels/smooth-liquid-swipe-onboarding-with-react-native-reanimated).",
    },
    { type: "h2", text: "2. A card form that previews itself" },
    {
      type: "p",
      text: "Payment forms are where users are most nervous, so feedback matters more than decoration. Here the card above the form fills in as you type, and flips when focus moves to the security code — the same trick every bank app uses, for the same reason: it tells you the app understood what you typed.",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/SCj2Ie2jagc",
      watchUrl: "https://www.youtube.com/shorts/SCj2Ie2jagc",
      title: "Card input screen with real-time preview in React Native",
      caption:
        "The card flips on focus and fills as you type. Two `rotateY` values and a backface toggle.",
      aspect: "vertical",
    },
    {
      type: "p",
      text: "The flip is one shared value driven to 0 or 180 with `withTiming`, applied as `rotateY` on two stacked faces, with the back face rotated 180 degrees to start. Add perspective to the transform or it reads as a flat squash instead of a rotation. Full build: [card input with real-time preview](/reels/card-input-screen-with-real-time-preview-in-react-native).",
    },
    { type: "h2", text: "3. A game loop, drawn on the GPU with Skia" },
    {
      type: "p",
      text: "This one is the clearest demonstration of how far the ceiling has moved. Flappy Bird, rebuilt from scratch: gravity, collision detection, infinite scrolling pipes, all drawn with React Native Skia straight to the GPU rather than composed from views.",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/YmkfJ06UT4U",
      watchUrl: "https://www.youtube.com/shorts/YmkfJ06UT4U",
      title: "Flappy Bird built from scratch in React Native with Skia",
      caption:
        "A full game loop at 60fps. Skia draws the frame; no component tree is being re-rendered.",
      aspect: "vertical",
    },
    {
      type: "p",
      text: "The lesson is not that you should build games in React Native. It is that when a design calls for something the view system cannot express — a custom curve, a shader, particles, anything drawn per frame — Skia is the escape hatch, and it does not cost you the frame rate. Full build: [Flappy Bird from scratch](/reels/built-flappy-bird-from-scratch-in-react-native).",
    },
    { type: "h2", text: "4. Blur, rotation and a very small amount of restraint" },
    {
      type: "p",
      text: "A music player where the album art bleeds into the background through a heavy blur, the vinyl disc rotates while playing, and pulse rings track the beat. It is the most decorative screen in this list, and the one where the discipline matters most: every element moves slowly, so nothing competes.",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/4zRMy2c_mOI",
      watchUrl: "https://www.youtube.com/shorts/4zRMy2c_mOI",
      title: "Liquid glass music player inspired by Apple Music",
      caption:
        "Album art blurred behind the controls, a rotating disc, and pulse rings on the beat.",
      aspect: "vertical",
    },
    {
      type: "p",
      text: "Watch the cost here. Heavy blur is the one effect that will hurt you on mid-range Android — blurring a large view every frame is expensive, so blur a static image once and animate cheap properties over it. The rotation itself is a single `withRepeat(withTiming(360, { duration, easing: Easing.linear }), -1)`. Full build: [liquid glass music player](/reels/liquid-glass-music-player-inspired-by-apple-music).",
    },
    { type: "h2", text: "5. A delivery map that tells a story" },
    {
      type: "p",
      text: "The one closest to real client work. A driver moves along a route, the car rotates to face its direction of travel, the ETA counts down, and the sheet below expands as the state changes. Every food delivery and ride-hailing app on your phone is doing a version of this.",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/V03GBRyA3GY",
      watchUrl: "https://www.youtube.com/shorts/V03GBRyA3GY",
      title: "Uber-style delivery tracker with a real-time map in React Native",
      caption:
        "The car follows the route and rotates to face its heading, which is the detail that sells it.",
      aspect: "vertical",
    },
    {
      type: "p",
      text: "The detail that makes it convincing is the rotation: compute the bearing between the previous point and the next one and animate the marker to it, rather than sliding a static icon along a line. Interpolate position along the path instead of snapping between GPS points, and a once-a-second update looks continuous. Full build: [Uber-style delivery tracker](/reels/uber-style-delivery-tracker-with-real-time-map-in-react-nati).",
    },
    { type: "h2", text: "Four rules I apply to all of them" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Animate transform and opacity first.** They are handled by the compositor. Animating width, height or margin forces layout every frame, which is where dropped frames come from.",
        "**Springs for anything a finger touched**, timing for everything else. A gesture that ends with a linear fade feels mechanical; a menu that springs open feels unserious.",
        "**Test on the cheapest Android phone you can find.** Everything is smooth on an iPhone. My rule is that if it holds up on a mid-range Android, it is done.",
        "**Respect reduced motion.** Read the system setting and cut the movement when it is on. It takes ten minutes and some people genuinely need it.",
      ],
    },
    {
      type: "p",
      text: "The source for these lives in [rn-interface-kit](https://github.com/anwersolangi/rn-interface-kit), and there are [forty-odd more screens](/reels) where these came from — a new one most weeks. If you want this level of motion in a product rather than a demo, [that is the work I take on](/hire-react-native-developer-karachi).",
    },
  ],
};
