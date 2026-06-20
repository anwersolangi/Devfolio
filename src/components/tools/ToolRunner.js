"use client";
// components/tools/ToolRunner.js
// Client boundary that lazy-loads the right interactive widget by slug.
// Using next/dynamic with ssr:false keeps browser-only tools out of the
// server render and code-splits each widget into its own chunk.
// Note: next/dynamic requires its options to be inline object literals.
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center gap-2 py-16 text-sm text-ink-3">
      <Loader2 className="h-4 w-4 animate-spin" />
      Loading tool…
    </div>
  );
}

const REGISTRY = {
  "qr-code-generator": dynamic(() => import("./widgets/QrCodeTool"), {
    ssr: false,
    loading: Loading,
  }),
  "app-icon-generator": dynamic(() => import("./widgets/AppIconTool"), {
    ssr: false,
    loading: Loading,
  }),
  "uuid-generator": dynamic(() => import("./widgets/UuidTool"), {
    ssr: false,
    loading: Loading,
  }),
  "password-generator": dynamic(() => import("./widgets/PasswordTool"), {
    ssr: false,
    loading: Loading,
  }),
  "pdf-to-image": dynamic(() => import("./widgets/PdfToImageTool"), {
    ssr: false,
    loading: Loading,
  }),
  "image-compressor": dynamic(() => import("./widgets/ImageCompressorTool"), {
    ssr: false,
    loading: Loading,
  }),
  "image-converter": dynamic(() => import("./widgets/ImageConverterTool"), {
    ssr: false,
    loading: Loading,
  }),
  "json-formatter": dynamic(() => import("./widgets/JsonFormatterTool"), {
    ssr: false,
    loading: Loading,
  }),
  "base64-encoder": dynamic(() => import("./widgets/Base64Tool"), {
    ssr: false,
    loading: Loading,
  }),
  "color-converter": dynamic(() => import("./widgets/ColorConverterTool"), {
    ssr: false,
    loading: Loading,
  }),
  "word-counter": dynamic(() => import("./widgets/WordCounterTool"), {
    ssr: false,
    loading: Loading,
  }),
  "case-converter": dynamic(() => import("./widgets/CaseConverterTool"), {
    ssr: false,
    loading: Loading,
  }),
  "css-gradient-generator": dynamic(
    () => import("./widgets/CssGradientTool"),
    { ssr: false, loading: Loading },
  ),
  "lorem-ipsum-generator": dynamic(() => import("./widgets/LoremIpsumTool"), {
    ssr: false,
    loading: Loading,
  }),
  "image-resizer": dynamic(() => import("./widgets/ImageResizerTool"), {
    ssr: false,
    loading: Loading,
  }),
  "youtube-thumbnail-downloader": dynamic(
    () => import("./widgets/YoutubeThumbnailTool"),
    { ssr: false, loading: Loading },
  ),
  "hash-generator": dynamic(() => import("./widgets/HashTool"), {
    ssr: false,
    loading: Loading,
  }),
  "url-encoder": dynamic(() => import("./widgets/UrlEncoderTool"), {
    ssr: false,
    loading: Loading,
  }),
  "jwt-decoder": dynamic(() => import("./widgets/JwtDecoderTool"), {
    ssr: false,
    loading: Loading,
  }),
  "timestamp-converter": dynamic(() => import("./widgets/TimestampTool"), {
    ssr: false,
    loading: Loading,
  }),
};

export default function ToolRunner({ slug }) {
  const Tool = REGISTRY[slug];
  if (!Tool) {
    return (
      <p className="py-12 text-center text-sm text-ink-3">
        This tool is coming soon.
      </p>
    );
  }
  return <Tool />;
}
