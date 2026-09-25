// This record is the single home for the extension. The former standalone
// page at /extensions/youtube-fullscreen-focus was a near-duplicate of this
// one (86% word overlap) with no internal links, so it now 301s here and its
// unique content — smart activation, YouTube Kids support, the default
// shortcuts — was merged in below. The privacy policy it linked to stays at
// its own URL because the Chrome Web Store listing points there.
export const youtubeFullscreenFocus = {
  slug: "youtube-fullscreen-focus",
  name: "YouTube Focus",
  icon: "/youtube-fullscreen-focus_icon.png",
  layout: 3,
  category: "Chrome extension",
  subcategory: "Free",
  subtitle: "Fullscreen Protection for YouTube and YouTube Kids",
  description:
    "A free Chrome extension that blocks accidental keystrokes while YouTube is fullscreen, so a stray keypress can't pause, skip or exit the video.",
  fullDescription:
    "YouTube Focus locks YouTube into a distraction-free fullscreen. While fullscreen is active it blocks the keystrokes that normally pause, seek, mute or exit the video, so a hand on the keyboard — or a toddler on the sofa — can't derail what's playing. It activates only in fullscreen, works on YouTube and YouTube Kids, and needs no configuration after install. Built for parents and families, and free and open source on GitHub.",
  features: [
    "Smart activation — only runs in YouTube fullscreen, and stays out of the way everywhere else",
    "YouTube Kids support — same protection on youtube.com and youtubekids.com",
    "Instant protection — no setup, it works the moment it's installed",
    "Visual feedback — a subtle notification shows when a keystroke was blocked",
    "Escape still works — one deliberate key always exits fullscreen",
    "Customisable allowed keys — pick what stays live from the extension popup",
  ],
  builtWith: [
    {
      title: "Core",
      items: ["Chrome Extension APIs", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Behaviour",
      items: [
        "Fullscreen state detection",
        "Keyboard event interception",
        "Per-site activation rules",
      ],
    },
    {
      title: "Distribution",
      items: ["Chrome Web Store", "Open source on GitHub"],
    },
  ],
  sections: [
    {
      title: "How it works",
      content:
        "The extension watches for YouTube entering fullscreen and only then starts intercepting keyboard events. Outside fullscreen it does nothing at all, so normal browsing and YouTube's own shortcuts are untouched.",
      items: [
        "Install it from the Chrome Web Store",
        "Open any video on YouTube or YouTube Kids",
        "Enter fullscreen with the player button or the F key",
        "Stray keystrokes are blocked until you press Escape",
      ],
    },
    {
      title: "Default controls",
      content:
        "Everything is chosen so there is exactly one deliberate way out and no accidental ones.",
      items: [
        "Escape — exits fullscreen",
        "Extension icon — toggles protection on or off",
        "Extension popup — customises which keys stay allowed",
      ],
    },
    {
      title: "Who it's for",
      content:
        "It started as a fix for a specific annoyance: handing a phone or laptop to a child and having the video stop every thirty seconds because a key got pressed.",
      items: [
        "Parents handing a device to a child",
        "Families watching on a shared laptop",
        "Classrooms and waiting rooms",
        "Anyone who types near a playing video",
      ],
    },
  ],
  faqs: [
    {
      question: "Is this extension free?",
      answer:
        "Yes. YouTube Focus is completely free and open source. You can install it from the Chrome Web Store or build it yourself from the GitHub repository.",
    },
    {
      question: "Does it work on YouTube Kids?",
      answer:
        "Yes. The protection applies on both youtube.com and youtubekids.com, which is the case it was originally built for.",
    },
    {
      question: "How do I exit fullscreen if keys are blocked?",
      answer:
        "Escape always works. It is deliberately the one key that is never intercepted, so there is always a predictable way out.",
    },
    {
      question: "Does it collect any data?",
      answer:
        "No. The extension collects no personal data and sends nothing to a server. The full privacy policy is published at /extensions/youtube-fullscreen-focus/privacy-policy.",
    },
    {
      question: "Does it work with YouTube Premium?",
      answer:
        "Yes, the extension works with both free YouTube and YouTube Premium accounts.",
    },
    {
      question: "Can I contribute to the project?",
      answer:
        "Absolutely. The project is open source on GitHub — issues, feature requests and pull requests are all welcome.",
    },
  ],
  links: {
    github: "https://github.com/anwersolangi/youtube-fullscreen-focus",
    chromeStore:
      "https://chromewebstore.google.com/detail/youtube-fullscreen-focus/cgkahhgcnekfpkbmpggblgojbjapjdom",
  },
  ctaTitle: "Enhance Your YouTube Experience",
  ctaDescription: "Install the extension and enjoy distraction-free viewing",
};
