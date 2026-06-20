// components/tools/ToolCard.js — listing card for /tools (server component)
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ToolIcon from "./ToolIcon";

export default function ToolCard({ tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex flex-col rounded-2xl border border-rule bg-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule bg-bg text-accent transition-colors duration-300 group-hover:border-accent/40">
          <ToolIcon name={tool.icon} className="h-6 w-6" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2 line-clamp-2">
        {tool.tagline}
      </p>

      <span className="mt-4 inline-flex w-fit items-center rounded-md border border-rule bg-bg px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
        {tool.category}
      </span>
    </Link>
  );
}
