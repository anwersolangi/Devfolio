// data/tools.js
// Metadata + SEO copy for the free browser tools at /tools.
// This file is server-safe (no JSX, no browser APIs) so it can power the
// listing page, per-tool metadata, JSON-LD, and the sitemap.
//
// Each tool's interactive widget lives in src/components/tools/widgets and is
// wired by `slug` in src/components/tools/ToolRunner.js.

export const TOOLS = [
  // ───────────────────────────── Generators ─────────────────────────────
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    tagline: "Create free, high-resolution QR codes in seconds",
    category: "Generators",
    icon: "QrCode",
    description:
      "Free online QR code generator. Turn any link, text, Wi-Fi network or email into a high-resolution QR code and download it as PNG or SVG — no sign-up.",
    keywords: [
      "qr code generator",
      "free qr code",
      "qr code maker",
      "wifi qr code",
      "qr code png svg",
      "url to qr code",
    ],
    intro:
      "Generate a crisp, scannable QR code for any URL, plain text, Wi-Fi network or email address. Pick your colours and error-correction level, then download it as a transparent-ready PNG or an infinitely-scalable SVG. Everything runs in your browser, so your data never leaves your device.",
    features: [
      "URL, text, Wi-Fi and email presets",
      "Custom foreground & background colours",
      "Adjustable size and error-correction",
      "Download as PNG or vector SVG",
    ],
    howTo: [
      { title: "Pick a type", text: "Choose URL, text, Wi-Fi or email." },
      { title: "Enter your content", text: "Type or paste what the code should point to." },
      { title: "Style it", text: "Set the size, colours and error-correction level." },
      { title: "Download", text: "Save your QR code as a PNG or SVG file." },
    ],
    faqs: [
      {
        question: "Are these QR codes free for commercial use?",
        answer:
          "Yes. Codes you generate here are static and yours to use anywhere — flyers, packaging, business cards, presentations — with no licensing fees or attribution required.",
      },
      {
        question: "Do the QR codes expire?",
        answer:
          "No. These are static QR codes that encode your content directly, so they keep working forever and never expire or stop tracking.",
      },
      {
        question: "Should I use PNG or SVG?",
        answer:
          "Use PNG for the web, apps and most printing. Choose SVG when you need to scale the code to a large format (banners, posters) without any loss of quality.",
      },
    ],
    related: ["app-icon-generator", "color-converter", "base64-encoder"],
  },
  {
    slug: "app-icon-generator",
    name: "App Icon Generator",
    tagline: "One image → every iOS, Android & web icon size",
    category: "Generators",
    icon: "Smartphone",
    description:
      "Upload one square image and instantly generate every iOS, Android, favicon and PWA icon size. Download the whole set as a ZIP — all in your browser.",
    keywords: [
      "app icon generator",
      "ios app icon sizes",
      "android icon generator",
      "favicon generator",
      "pwa icon generator",
      "appicon",
    ],
    intro:
      "Drop in a single square image (1024×1024 works best) and get a complete, correctly-named set of app icons for iOS, Android, the web favicon and PWA manifests. Every size is rendered locally with the canvas API and bundled into one ZIP — your artwork is never uploaded to a server.",
    features: [
      "Full iOS & Android icon size sets",
      "Favicon and PWA / web manifest icons",
      "Optional rounded-corner preview",
      "Everything bundled into a single ZIP",
    ],
    howTo: [
      { title: "Upload artwork", text: "Drop in a square PNG or JPG, ideally 1024×1024." },
      { title: "Choose platforms", text: "Pick iOS, Android, web favicon or all of them." },
      { title: "Generate", text: "Every size is rendered locally in your browser." },
      { title: "Download ZIP", text: "Grab the full, organised icon set in one file." },
    ],
    faqs: [
      {
        question: "What size image should I upload?",
        answer:
          "A 1024×1024 px square PNG gives the best results because every smaller icon is downscaled from it. Larger is fine too — just keep it square so nothing gets stretched.",
      },
      {
        question: "Is my image uploaded anywhere?",
        answer:
          "No. All resizing happens in your browser using the canvas API. Your artwork never touches a server, which makes this safe for unreleased or confidential designs.",
      },
      {
        question: "Which platforms are covered?",
        answer:
          "You get the standard iOS app icon set, Android mipmap densities, the classic favicon sizes, and PWA / web-manifest icons (192px and 512px).",
      },
    ],
    related: ["image-converter", "image-compressor", "qr-code-generator"],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    tagline: "Bulk-generate RFC-compliant UUID v4 identifiers",
    category: "Generators",
    icon: "Fingerprint",
    description:
      "Generate cryptographically-random UUID v4 values in bulk. Copy a single ID or thousands at once — fast, free and entirely in your browser.",
    keywords: [
      "uuid generator",
      "guid generator",
      "uuid v4",
      "random uuid",
      "bulk uuid",
      "unique id generator",
    ],
    intro:
      "Generate version-4 UUIDs (GUIDs) backed by the browser's cryptographically-secure random number generator. Create one at a time or thousands in bulk, toggle uppercase or hyphens, and copy the whole list with a click — perfect for database keys, test fixtures and API stubs.",
    features: [
      "Cryptographically-secure UUID v4",
      "Generate 1–1,000 at once",
      "Uppercase and no-hyphen options",
      "One-click copy of the full list",
    ],
    howTo: [
      { title: "Set the count", text: "Choose how many UUIDs you need." },
      { title: "Pick a format", text: "Toggle uppercase or strip the hyphens." },
      { title: "Generate", text: "A fresh batch is created instantly." },
      { title: "Copy", text: "Copy a single value or the entire list." },
    ],
    faqs: [
      {
        question: "Are these UUIDs truly random?",
        answer:
          "Yes. They use the Web Crypto API (crypto.randomUUID), the same cryptographically-secure source browsers use for security-sensitive work, so collisions are astronomically unlikely.",
      },
      {
        question: "What version of UUID is this?",
        answer:
          "These are RFC 4122 version-4 UUIDs — the random variant used by most databases, APIs and programming languages by default.",
      },
    ],
    related: ["password-generator", "base64-encoder", "json-formatter"],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    tagline: "Strong, random passwords that never leave your browser",
    category: "Generators",
    icon: "KeyRound",
    description:
      "Generate strong, random passwords with custom length and character sets. Cryptographically secure and 100% in-browser — nothing is sent or stored.",
    keywords: [
      "password generator",
      "strong password generator",
      "random password",
      "secure password",
      "passphrase generator",
    ],
    intro:
      "Create strong, unguessable passwords using the browser's cryptographically-secure randomness. Dial in the length, mix in symbols and numbers, exclude look-alike characters, and watch the live strength meter. No password is ever transmitted, logged or stored.",
    features: [
      "Cryptographically-secure randomness",
      "Adjustable length (8–64)",
      "Toggle symbols, numbers & similar characters",
      "Live strength meter and one-click copy",
    ],
    howTo: [
      { title: "Set the length", text: "Drag the slider to your required length." },
      { title: "Choose characters", text: "Enable symbols, numbers or uppercase as needed." },
      { title: "Generate", text: "A new secure password appears instantly." },
      { title: "Copy", text: "Copy it straight into your password manager." },
    ],
    faqs: [
      {
        question: "Is it safe to generate passwords here?",
        answer:
          "Yes. Generation happens entirely on your device using the Web Crypto API. Nothing is sent over the network, so the password only ever exists in your browser until you copy it.",
      },
      {
        question: "What makes a password strong?",
        answer:
          "Length matters most — aim for 16 characters or more — combined with a mix of upper- and lower-case letters, numbers and symbols. The strength meter updates as you adjust the options.",
      },
    ],
    related: ["uuid-generator", "base64-encoder", "qr-code-generator"],
  },

  // ───────────────────────────── Image & PDF ─────────────────────────────
  {
    slug: "pdf-to-image",
    name: "PDF to Image",
    tagline: "Convert PDF pages to PNG or JPG, page by page",
    category: "Image & PDF",
    icon: "FileImage",
    description:
      "Convert any PDF to high-quality PNG or JPG images right in your browser. Pick the resolution, export single pages or all of them — no uploads, fully private.",
    keywords: [
      "pdf to image",
      "pdf to png",
      "pdf to jpg",
      "convert pdf to image",
      "pdf converter",
      "extract pages from pdf",
    ],
    intro:
      "Turn the pages of a PDF into sharp PNG or JPG images. Each page is rendered locally with PDF.js at the resolution you choose, so you can export a single page or download every page at once. Your document is processed entirely in the browser and never uploaded.",
    features: [
      "Render every page as PNG or JPG",
      "Adjustable resolution / quality",
      "Per-page preview and download",
      "100% local — no file uploads",
    ],
    howTo: [
      { title: "Choose a PDF", text: "Drop in or select the PDF you want to convert." },
      { title: "Set the options", text: "Pick PNG or JPG and the output resolution." },
      { title: "Render", text: "Pages are rasterised locally with PDF.js." },
      { title: "Download", text: "Save individual pages or all of them at once." },
    ],
    faqs: [
      {
        question: "Is my PDF uploaded to a server?",
        answer:
          "No. The PDF is read and rendered entirely inside your browser with PDF.js. Nothing is uploaded, which makes this safe for contracts, invoices and other private documents.",
      },
      {
        question: "PNG or JPG — which should I pick?",
        answer:
          "Choose PNG for text-heavy pages, diagrams and screenshots where you want crisp edges. Choose JPG for photo-heavy pages where a smaller file size matters more than perfect sharpness.",
      },
      {
        question: "Can I increase the image quality?",
        answer:
          "Yes. Raise the resolution (scale) before rendering for sharper output — useful for printing or zooming — at the cost of a larger file.",
      },
    ],
    related: ["image-compressor", "image-converter", "app-icon-generator"],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    tagline: "Shrink JPG, PNG & WebP files without the bloat",
    category: "Image & PDF",
    icon: "Shrink",
    description:
      "Compress JPG, PNG and WebP images in your browser. Adjust quality, see the size savings live, and download — no uploads, no watermarks, no limits.",
    keywords: [
      "image compressor",
      "compress jpg",
      "compress png",
      "reduce image size",
      "optimize images",
      "compress webp",
    ],
    intro:
      "Reduce the file size of your JPG, PNG and WebP images without sending them anywhere. Drag the quality slider and instantly see the before/after size and savings, then download the optimised file. Great for faster-loading websites, smaller email attachments and lighter app bundles.",
    features: [
      "Compress JPG, PNG & WebP",
      "Live before / after size comparison",
      "Quality slider with instant preview",
      "No watermarks, no upload limits",
    ],
    howTo: [
      { title: "Add an image", text: "Drop in or select a JPG, PNG or WebP file." },
      { title: "Adjust quality", text: "Drag the slider to balance size and clarity." },
      { title: "Compare", text: "See the original vs compressed size live." },
      { title: "Download", text: "Save the smaller, optimised image." },
    ],
    faqs: [
      {
        question: "Will compression ruin my image quality?",
        answer:
          "You're in control. The live preview shows exactly how the image looks at each quality level, so you can squeeze out file size while keeping it visually identical.",
      },
      {
        question: "Are my images uploaded?",
        answer:
          "No. Compression happens locally in your browser using the canvas API, so even large or private images never leave your device.",
      },
    ],
    related: ["image-converter", "pdf-to-image", "app-icon-generator"],
  },
  {
    slug: "image-converter",
    name: "Image Converter",
    tagline: "Convert between PNG, JPG and WebP instantly",
    category: "Image & PDF",
    icon: "Images",
    description:
      "Convert images between PNG, JPG and WebP in your browser. Batch-convert multiple files, set JPG/WebP quality, and download — private and free.",
    keywords: [
      "image converter",
      "png to jpg",
      "jpg to png",
      "convert to webp",
      "webp converter",
      "image format converter",
    ],
    intro:
      "Convert images between PNG, JPG and WebP without installing anything. Drop in one file or a whole batch, choose the target format and quality, and download the results. Conversion runs on the canvas API inside your browser, so nothing is uploaded.",
    features: [
      "PNG ⇄ JPG ⇄ WebP conversion",
      "Batch-convert multiple files",
      "Quality control for JPG & WebP",
      "Local processing — no uploads",
    ],
    howTo: [
      { title: "Add images", text: "Drop in one or more PNG, JPG or WebP files." },
      { title: "Pick a format", text: "Choose PNG, JPG or WebP as the output." },
      { title: "Set quality", text: "For JPG/WebP, tune the quality slider." },
      { title: "Download", text: "Save each converted image to your device." },
    ],
    faqs: [
      {
        question: "Why convert to WebP?",
        answer:
          "WebP files are typically 25–35% smaller than equivalent PNG or JPG images at the same visual quality, which means faster-loading pages and lower bandwidth.",
      },
      {
        question: "Does converting PNG to JPG remove transparency?",
        answer:
          "Yes — JPG doesn't support transparency, so transparent areas are filled with a background colour. Keep PNG or WebP if you need to preserve transparency.",
      },
    ],
    related: ["image-compressor", "app-icon-generator", "pdf-to-image"],
  },

  // ───────────────────────────── Text & Code ─────────────────────────────
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    tagline: "Beautify, minify and validate JSON instantly",
    category: "Text & Code",
    icon: "Braces",
    description:
      "Format, validate and minify JSON online. Pretty-print with custom indentation, catch syntax errors with line numbers, and copy the result — free.",
    keywords: [
      "json formatter",
      "json validator",
      "json beautifier",
      "json minifier",
      "format json online",
      "json pretty print",
    ],
    intro:
      "Paste messy or minified JSON and instantly pretty-print it with the indentation you prefer, or minify it back down for production. Invalid JSON is flagged with a clear error message so you can fix it fast. Everything runs locally — your data is never sent anywhere.",
    features: [
      "Beautify with 2 / 4 / tab indentation",
      "Minify to a single line",
      "Clear validation errors",
      "One-click copy of the result",
    ],
    howTo: [
      { title: "Paste JSON", text: "Drop your JSON into the input area." },
      { title: "Choose an action", text: "Beautify with your indent, or minify it." },
      { title: "Check validity", text: "Errors are highlighted with a message." },
      { title: "Copy", text: "Copy the cleaned-up JSON to your clipboard." },
    ],
    faqs: [
      {
        question: "Is my JSON sent to a server?",
        answer:
          "No. Parsing and formatting happen entirely in your browser, so you can safely paste configuration, API responses or other sensitive data.",
      },
      {
        question: "What does minify do?",
        answer:
          "Minifying strips all whitespace and line breaks to produce the smallest valid JSON, which is ideal for embedding in code or shrinking API payloads.",
      },
    ],
    related: ["base64-encoder", "uuid-generator", "case-converter"],
  },
  {
    slug: "base64-encoder",
    name: "Base64 Encoder / Decoder",
    tagline: "Encode and decode Base64 text and files",
    category: "Text & Code",
    icon: "Binary",
    description:
      "Encode text to Base64 or decode it back, and convert files to Base64 data URLs. Unicode-safe and fully in-browser — nothing is uploaded.",
    keywords: [
      "base64 encode",
      "base64 decode",
      "base64 converter",
      "text to base64",
      "file to base64",
      "data url generator",
    ],
    intro:
      "Encode any text to Base64 or decode Base64 back to readable text, with full Unicode/emoji support. You can also drop in a file to generate a ready-to-use Base64 data URL for embedding in CSS, HTML or JSON. All processing is local to your browser.",
    features: [
      "Encode & decode in real time",
      "Unicode and emoji safe",
      "File → Base64 data URL",
      "One-click copy",
    ],
    howTo: [
      { title: "Choose a mode", text: "Encode text, decode Base64, or convert a file." },
      { title: "Enter your input", text: "Type, paste, or drop in a file." },
      { title: "Get the result", text: "The output updates instantly." },
      { title: "Copy", text: "Copy the encoded or decoded result." },
    ],
    faqs: [
      {
        question: "Does this handle emojis and accents?",
        answer:
          "Yes. The encoder is Unicode-safe (UTF-8), so emojis, accented characters and non-Latin scripts encode and decode correctly without mangling.",
      },
      {
        question: "What's a Base64 data URL good for?",
        answer:
          "A data URL embeds a small image or font directly into your HTML, CSS or JSON, saving an HTTP request. It's handy for tiny icons, email signatures and inline assets.",
      },
    ],
    related: ["json-formatter", "uuid-generator", "qr-code-generator"],
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    tagline: "Convert between HEX, RGB and HSL with a live preview",
    category: "Text & Code",
    icon: "Palette",
    description:
      "Convert colours between HEX, RGB and HSL instantly with a live swatch and colour picker. Copy ready-to-paste CSS values — free and in-browser.",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hex to hsl",
      "color picker",
      "css color converter",
    ],
    intro:
      "Pick a colour or type a HEX, RGB or HSL value and instantly see it converted into the other formats, complete with a live preview swatch. Every value is formatted as ready-to-paste CSS, so you can move between design tools and code without doing the maths.",
    features: [
      "HEX ⇄ RGB ⇄ HSL conversion",
      "Visual colour picker",
      "Live preview swatch",
      "Copy CSS-ready values",
    ],
    howTo: [
      { title: "Pick or type", text: "Use the picker or enter a HEX/RGB/HSL value." },
      { title: "See conversions", text: "All formats update together instantly." },
      { title: "Preview", text: "Check the colour on the live swatch." },
      { title: "Copy", text: "Copy any format straight into your CSS." },
    ],
    faqs: [
      {
        question: "Which colour format should I use in CSS?",
        answer:
          "All three are valid. HEX is the most common and compact, RGB is handy when you need an alpha channel, and HSL makes it intuitive to lighten, darken or shift the hue.",
      },
      {
        question: "Does it support shorthand HEX like #f00?",
        answer:
          "Yes. Three-digit shorthand HEX is expanded automatically and converted to its full six-digit form alongside the RGB and HSL equivalents.",
      },
    ],
    related: ["qr-code-generator", "image-converter", "word-counter"],
  },
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    tagline: "Count words, characters, sentences and reading time",
    category: "Text & Code",
    icon: "Type",
    description:
      "Count words, characters, sentences and paragraphs as you type, with reading-time and keyword-density stats. Free, instant and fully in-browser.",
    keywords: [
      "word counter",
      "character counter",
      "count words online",
      "reading time calculator",
      "keyword density",
      "letter count",
    ],
    intro:
      "Paste or type your text and get a live count of words, characters (with and without spaces), sentences and paragraphs, plus an estimated reading time and the most-used keywords. Ideal for essays, meta descriptions, tweets and SEO copy that has to hit a length.",
    features: [
      "Words, characters, sentences & paragraphs",
      "Estimated reading & speaking time",
      "Top keyword density",
      "Updates live as you type",
    ],
    howTo: [
      { title: "Add your text", text: "Type or paste into the editor." },
      { title: "Watch the stats", text: "Counts update live as you write." },
      { title: "Check the limits", text: "Track characters against platform limits." },
      { title: "Refine", text: "Edit until the length and density feel right." },
    ],
    faqs: [
      {
        question: "How is reading time calculated?",
        answer:
          "Reading time is estimated at around 200–230 words per minute, the average adult reading speed, so it's a reliable guide for blog posts and scripts.",
      },
      {
        question: "Is my text stored anywhere?",
        answer:
          "No. Everything is counted in your browser as you type — nothing is sent to a server or saved, so drafts and private notes stay private.",
      },
    ],
    related: ["case-converter", "json-formatter", "color-converter"],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    tagline: "Switch text between every case and slug format",
    category: "Text & Code",
    icon: "CaseSensitive",
    description:
      "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and URL slugs instantly. Free and entirely in-browser.",
    keywords: [
      "case converter",
      "uppercase lowercase converter",
      "title case",
      "camelcase converter",
      "snake case",
      "slug generator",
    ],
    intro:
      "Transform text between UPPERCASE, lowercase, Sentence case, Title Case, camelCase, PascalCase, snake_case, kebab-case and clean URL slugs. Paste once and copy whichever variant you need — perfect for renaming variables, tidying headings and building SEO-friendly URLs.",
    features: [
      "UPPER, lower, Sentence & Title case",
      "camelCase, PascalCase & CONSTANT_CASE",
      "snake_case, kebab-case & slugs",
      "Copy any variant with one click",
    ],
    howTo: [
      { title: "Paste text", text: "Drop in the text you want to transform." },
      { title: "See every case", text: "All variants are generated at once." },
      { title: "Pick one", text: "Find the format you need." },
      { title: "Copy", text: "Copy that variant to your clipboard." },
    ],
    faqs: [
      {
        question: "What's the difference between a slug and kebab-case?",
        answer:
          "They're closely related — both use lowercase words joined by hyphens. A slug also strips accents and punctuation so the result is safe to drop straight into a URL.",
      },
      {
        question: "Can it convert to camelCase for code?",
        answer:
          "Yes. It produces camelCase, PascalCase, snake_case and CONSTANT_CASE, so you can quickly reformat variable and identifier names between languages and conventions.",
      },
    ],
    related: ["word-counter", "json-formatter", "base64-encoder"],
  },

  // ───────────────────────── Generators (more) ─────────────────────────
  {
    slug: "css-gradient-generator",
    name: "CSS Gradient Generator",
    tagline: "Design linear & radial gradients and copy the CSS",
    category: "Generators",
    icon: "Blend",
    description:
      "Create beautiful linear and radial CSS gradients with a live preview. Adjust colours and angle, then copy production-ready CSS. Free, no sign-up.",
    keywords: [
      "css gradient generator",
      "linear gradient",
      "radial gradient",
      "background gradient css",
      "gradient maker",
      "color gradient",
    ],
    intro:
      "Build smooth linear and radial gradients with a live preview, then copy the exact CSS to paste into your stylesheet. Tweak the two colours and the angle and watch the result update instantly — perfect for hero sections, buttons and backgrounds.",
    features: [
      "Linear & radial gradients",
      "Adjustable angle and colour stops",
      "Live, full-size preview",
      "Copy ready-to-use CSS",
    ],
    howTo: [
      { title: "Pick colours", text: "Choose your start and end colours." },
      { title: "Set direction", text: "Pick linear/radial and tune the angle." },
      { title: "Preview", text: "See the gradient render live." },
      { title: "Copy CSS", text: "Paste the generated CSS into your project." },
    ],
    faqs: [
      {
        question: "Which browsers support these gradients?",
        answer:
          "CSS linear and radial gradients are supported in every modern browser — Chrome, Safari, Firefox and Edge — with no prefixes needed.",
      },
      {
        question: "Can I use these gradients commercially?",
        answer:
          "Absolutely. The CSS you copy is plain code you own — use it in client work, products or personal projects with no restrictions.",
      },
    ],
    related: ["color-converter", "qr-code-generator", "image-converter"],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    tagline: "Generate placeholder text by words, sentences or paragraphs",
    category: "Generators",
    icon: "Pilcrow",
    description:
      "Generate classic Lorem Ipsum placeholder text by paragraphs, sentences or words. Copy instantly for mockups, wireframes and design comps — free.",
    keywords: [
      "lorem ipsum generator",
      "placeholder text",
      "dummy text generator",
      "filler text",
      "lipsum",
      "lorem ipsum copy paste",
    ],
    intro:
      "Generate as much Lorem Ipsum placeholder text as you need — by paragraphs, sentences or words — for design mockups, wireframes, templates and content layouts. Choose whether to start with the classic “Lorem ipsum dolor sit amet…”, then copy it with one click.",
    features: [
      "Generate by paragraph, sentence or word",
      "Classic “Lorem ipsum…” start option",
      "Any amount you need",
      "One-click copy",
    ],
    howTo: [
      { title: "Pick a unit", text: "Choose paragraphs, sentences or words." },
      { title: "Set the amount", text: "Enter how much text you want." },
      { title: "Generate", text: "Placeholder text is created instantly." },
      { title: "Copy", text: "Drop it straight into your design." },
    ],
    faqs: [
      {
        question: "What is Lorem Ipsum?",
        answer:
          "Lorem Ipsum is scrambled Latin-like placeholder text used since the 1500s by printers and designers to show how a layout looks with content, without the distraction of readable copy.",
      },
      {
        question: "Why use placeholder text instead of real copy?",
        answer:
          "It lets you focus on layout, spacing and typography before the final content is ready, and keeps reviewers commenting on the design rather than the wording.",
      },
    ],
    related: ["word-counter", "case-converter", "css-gradient-generator"],
  },

  // ───────────────────────── Image & PDF (more) ─────────────────────────
  {
    slug: "image-resizer",
    name: "Image Resizer",
    tagline: "Resize images to exact dimensions in your browser",
    category: "Image & PDF",
    icon: "Scaling",
    description:
      "Resize JPG, PNG and WebP images to exact pixel dimensions or by percentage, with optional aspect-ratio lock. Private, instant and 100% in-browser.",
    keywords: [
      "image resizer",
      "resize image online",
      "resize jpg",
      "resize png",
      "change image dimensions",
      "scale image",
    ],
    intro:
      "Resize any JPG, PNG or WebP image to exact pixel dimensions, with an optional aspect-ratio lock so it never looks stretched. Everything runs locally with the canvas API, so your images are resized instantly and never uploaded to a server.",
    features: [
      "Resize by pixels with aspect-ratio lock",
      "Works with JPG, PNG & WebP",
      "Pick the output format & quality",
      "Local processing — no uploads",
    ],
    howTo: [
      { title: "Add an image", text: "Drop in a JPG, PNG or WebP file." },
      { title: "Set dimensions", text: "Enter a width or height (ratio locks by default)." },
      { title: "Choose format", text: "Keep the format or convert it." },
      { title: "Download", text: "Save the resized image to your device." },
    ],
    faqs: [
      {
        question: "Will resizing reduce image quality?",
        answer:
          "Downscaling stays sharp because the browser resamples the pixels. Upscaling beyond the original size can look soft — for best results, resize down rather than up.",
      },
      {
        question: "Are my images uploaded?",
        answer:
          "No. Resizing happens entirely in your browser with the canvas API, so even large or private images never leave your device.",
      },
    ],
    related: ["image-compressor", "image-converter", "app-icon-generator"],
  },
  {
    slug: "youtube-thumbnail-downloader",
    name: "YouTube Thumbnail Downloader",
    tagline: "Grab any YouTube video thumbnail in full resolution",
    category: "Image & PDF",
    icon: "ImageDown",
    description:
      "Download YouTube video thumbnails in HD, SD and all available sizes. Paste a video URL or ID and save the cover image in one click — free.",
    keywords: [
      "youtube thumbnail downloader",
      "download youtube thumbnail",
      "youtube thumbnail grabber",
      "youtube cover image",
      "hd youtube thumbnail",
      "save youtube thumbnail",
    ],
    intro:
      "Paste any YouTube video link or ID and instantly preview every available thumbnail size — from full-resolution HD down to the small default. Download the one you need in a single click. Handy for creators, editors, researchers and anyone making content about videos.",
    features: [
      "All sizes: HD, SD, HQ, MQ & default",
      "Works with any YouTube URL or video ID",
      "One-click download",
      "No login, no watermark",
    ],
    howTo: [
      { title: "Paste a link", text: "Drop in a YouTube URL or the 11-character ID." },
      { title: "Preview sizes", text: "See every thumbnail resolution available." },
      { title: "Pick one", text: "Choose the resolution you need." },
      { title: "Download", text: "Save the thumbnail image instantly." },
    ],
    faqs: [
      {
        question: "Which thumbnail sizes can I download?",
        answer:
          "You can grab the max-resolution (1280×720), standard (640×480), high (480×360), medium (320×180) and default (120×90) thumbnails — whichever the video has available.",
      },
      {
        question: "Why is the HD thumbnail sometimes missing?",
        answer:
          "Not every video has a max-resolution thumbnail, especially older or lower-quality uploads. When it isn't available, that option is hidden and you can use the next size down.",
      },
      {
        question: "Can I use downloaded thumbnails freely?",
        answer:
          "Thumbnails are owned by their uploader and protected by copyright. Use them for reference, commentary, education or fair-use contexts — not to re-upload as your own.",
      },
    ],
    related: ["image-resizer", "image-converter", "qr-code-generator"],
  },

  // ───────────────────────── Text & Code (more) ─────────────────────────
  {
    slug: "hash-generator",
    name: "Hash Generator",
    tagline: "SHA-1, SHA-256, SHA-384 & SHA-512 checksums",
    category: "Text & Code",
    icon: "Hash",
    description:
      "Generate SHA-1, SHA-256, SHA-384 and SHA-512 hashes from text in your browser using the Web Crypto API. Fast, free and fully private.",
    keywords: [
      "hash generator",
      "sha256 generator",
      "sha512 hash",
      "sha1 hash",
      "checksum generator",
      "online hash",
    ],
    intro:
      "Generate secure cryptographic hashes (SHA-1, SHA-256, SHA-384 and SHA-512) from any text. Hashing is done locally with the browser's built-in Web Crypto API, so your input never leaves your device — ideal for checksums, integrity checks and quick fingerprints.",
    features: [
      "SHA-1, SHA-256, SHA-384 & SHA-512",
      "Real-time hashing as you type",
      "Lowercase hex output",
      "One-click copy",
    ],
    howTo: [
      { title: "Enter text", text: "Type or paste the content to hash." },
      { title: "See the hashes", text: "Every algorithm updates instantly." },
      { title: "Pick one", text: "Choose the algorithm you need." },
      { title: "Copy", text: "Copy the hex digest to your clipboard." },
    ],
    faqs: [
      {
        question: "Is my input sent anywhere?",
        answer:
          "No. Hashing uses the browser's native SubtleCrypto API and runs entirely on your device — nothing is transmitted or stored.",
      },
      {
        question: "Why isn't MD5 included?",
        answer:
          "Browsers' Web Crypto API doesn't support MD5 because it's cryptographically broken. SHA-256 or stronger is recommended for anything security-related.",
      },
    ],
    related: ["base64-encoder", "uuid-generator", "password-generator"],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    tagline: "Percent-encode and decode URLs and query strings",
    category: "Text & Code",
    icon: "Link",
    description:
      "Encode or decode URLs and query-string parameters (percent-encoding) instantly. Unicode-safe, free and entirely in your browser.",
    keywords: [
      "url encoder",
      "url decoder",
      "percent encoding",
      "encode url online",
      "uri encode",
      "query string encoder",
    ],
    intro:
      "Safely percent-encode text for use in URLs and query strings, or decode an encoded URL back to readable text. Handles spaces, symbols and Unicode correctly, so links, API parameters and redirects always work as expected. Runs locally in your browser.",
    features: [
      "Encode & decode in real time",
      "Component and full-URI modes",
      "Unicode safe",
      "One-click copy",
    ],
    howTo: [
      { title: "Choose a mode", text: "Encode or decode, component or whole URI." },
      { title: "Paste your text", text: "Drop in the URL or string." },
      { title: "Get the result", text: "The output updates instantly." },
      { title: "Copy", text: "Copy the encoded or decoded value." },
    ],
    faqs: [
      {
        question: "What's the difference between the two encode modes?",
        answer:
          "“Component” encodes everything including / ? & = (use it for query values). “Full URI” preserves URL structure characters, which is right when encoding an entire address.",
      },
      {
        question: "Why do spaces become %20?",
        answer:
          "Spaces and other special characters aren't allowed in URLs, so they're replaced with a percent-encoded equivalent — %20 for a space — to keep the link valid.",
      },
    ],
    related: ["base64-encoder", "json-formatter", "jwt-decoder"],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    tagline: "Decode and inspect JSON Web Token claims",
    category: "Text & Code",
    icon: "KeySquare",
    description:
      "Decode a JSON Web Token (JWT) to inspect its header and payload claims, with human-readable expiry times. Runs locally — your token stays private.",
    keywords: [
      "jwt decoder",
      "decode jwt",
      "json web token",
      "jwt parser",
      "jwt debugger",
      "inspect jwt",
    ],
    intro:
      "Paste a JSON Web Token and instantly decode its header and payload into readable JSON, with timestamp claims like exp and iat translated into human dates. Decoding happens entirely in your browser — your token is never sent anywhere, so it's safe for real tokens.",
    features: [
      "Decoded header & payload JSON",
      "Human-readable exp / iat / nbf",
      "Token expiry status",
      "100% local — token never uploaded",
    ],
    howTo: [
      { title: "Paste a token", text: "Drop in your JWT (header.payload.signature)." },
      { title: "Inspect claims", text: "Read the decoded header and payload." },
      { title: "Check expiry", text: "See whether the token is still valid." },
      { title: "Copy", text: "Copy the decoded JSON if you need it." },
    ],
    faqs: [
      {
        question: "Does this verify the token's signature?",
        answer:
          "No. This tool decodes the token so you can read its claims; it does not verify the signature, which requires the secret or public key. Never trust a decoded token's contents without verifying it server-side.",
      },
      {
        question: "Is it safe to paste a real token here?",
        answer:
          "Yes. Decoding runs entirely in your browser with no network requests, so your token never leaves your device. That said, treat live tokens carefully and avoid sharing your screen.",
      },
    ],
    related: ["base64-encoder", "url-encoder", "json-formatter"],
  },
  {
    slug: "timestamp-converter",
    name: "Unix Timestamp Converter",
    tagline: "Convert epoch timestamps to dates and back",
    category: "Text & Code",
    icon: "Clock",
    description:
      "Convert Unix/epoch timestamps to human-readable dates and back, in your local time and UTC. Supports seconds and milliseconds. Free and instant.",
    keywords: [
      "unix timestamp converter",
      "epoch converter",
      "timestamp to date",
      "date to timestamp",
      "epoch time",
      "unix time",
    ],
    intro:
      "Convert a Unix timestamp (epoch) into a readable date — in both your local time zone and UTC — or turn a date back into a timestamp. Supports both seconds and milliseconds and shows the current epoch live, making it a quick reference for developers working with logs and APIs.",
    features: [
      "Timestamp → local, UTC & ISO date",
      "Date → Unix timestamp",
      "Seconds & milliseconds",
      "Live current epoch",
    ],
    howTo: [
      { title: "Enter a value", text: "Type a timestamp or pick a date." },
      { title: "See conversions", text: "Local, UTC and ISO formats appear." },
      { title: "Switch units", text: "Toggle between seconds and milliseconds." },
      { title: "Copy", text: "Copy the value you need." },
    ],
    faqs: [
      {
        question: "What is a Unix timestamp?",
        answer:
          "It's the number of seconds (or milliseconds) elapsed since 00:00:00 UTC on 1 January 1970, known as the Unix epoch. It's a compact, time-zone-independent way to represent a moment in time.",
      },
      {
        question: "Seconds or milliseconds — how do I tell?",
        answer:
          "A 10-digit timestamp is usually seconds; a 13-digit one is milliseconds. This tool lets you switch between the two so the converted date comes out right.",
      },
    ],
    related: ["uuid-generator", "hash-generator", "json-formatter"],
  },
];

export const TOOLS_BY_SLUG = Object.fromEntries(
  TOOLS.map((tool) => [tool.slug, tool]),
);

// Tools surfaced on the homepage, ordered by search demand. app-icon-generator
// leads because it already pulls organic impressions in Search Console; the rest
// are the highest-volume utilities. Featuring them on the homepage gives the
// individual tool pages a direct internal link from the site's strongest page,
// which is what gets them crawled and indexed (instead of "crawled — currently
// not indexed") and lifts their ranking.
export const FEATURED_TOOL_SLUGS = [
  "app-icon-generator",
  "qr-code-generator",
  "pdf-to-image",
  "image-compressor",
  "youtube-thumbnail-downloader",
  "json-formatter",
  "password-generator",
  "css-gradient-generator",
];

export const FEATURED_TOOLS = FEATURED_TOOL_SLUGS.map(
  (slug) => TOOLS_BY_SLUG[slug],
).filter(Boolean);

// Category groups in display order, derived from the tool list.
export const TOOL_CATEGORIES = TOOLS.reduce((groups, tool) => {
  const group = groups.find((g) => g.name === tool.category);
  if (group) {
    group.tools.push(tool);
  } else {
    groups.push({ name: tool.category, tools: [tool] });
  }
  return groups;
}, []);

export function getTool(slug) {
  return TOOLS_BY_SLUG[slug] ?? null;
}

export function getRelatedTools(slug) {
  const tool = TOOLS_BY_SLUG[slug];
  if (!tool?.related) return [];
  return tool.related.map((s) => TOOLS_BY_SLUG[s]).filter(Boolean);
}
