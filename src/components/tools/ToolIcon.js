// components/tools/ToolIcon.js
// Maps a tool's `icon` string (see src/data/tools.js) to a lucide icon.
// Server-safe: lucide icons render fine inside React Server Components.
import {
  QrCode,
  Smartphone,
  Fingerprint,
  KeyRound,
  FileImage,
  Shrink,
  Images,
  Braces,
  Binary,
  Palette,
  Type,
  CaseSensitive,
  Scaling,
  ImageDown,
  Pilcrow,
  Hash,
  Link,
  KeySquare,
  Clock,
  Blend,
  Wrench,
} from "lucide-react";

const ICONS = {
  QrCode,
  Smartphone,
  Fingerprint,
  KeyRound,
  FileImage,
  Shrink,
  Images,
  Braces,
  Binary,
  Palette,
  Type,
  CaseSensitive,
  Scaling,
  ImageDown,
  Pilcrow,
  Hash,
  Link,
  KeySquare,
  Clock,
  Blend,
};

export default function ToolIcon({ name, className }) {
  const Icon = ICONS[name] ?? Wrench;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
