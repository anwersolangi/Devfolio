//app/reels/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { reelsData } from "@/data/reels";
import { Github, Youtube, Instagram, Play, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return reelsData.map((reel) => ({
    slug: reel.slug,
  }));
}

export function generateMetadata({ params }) {
  const reel = reelsData.find((r) => r.slug === params.slug);
  if (!reel) return { title: "Listing Not Found" };

  return {
    title: `${reel.title} | Anwer Solangi`,
    description: reel.description,
  };
}

export default function ReelDetailPage({ params }) {
  const reel = reelsData.find((r) => r.slug === params.slug);

  if (!reel) {
    notFound();
  }

  // A simple markdown to HTML parser for rendering the `content` block
  // This is a minimal implementation, for advanced usage, consider `react-markdown`.
  const renderContent = (markdown) => {
    if (!markdown) return null;

    return markdown.split("\n").map((line, i) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={i} className="text-3xl font-light text-gray-900 mt-8 mb-4">
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-light text-gray-900 mt-6 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-gray-600 font-light ml-4 list-disc">
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.trim() === "") {
        return <br key={i} />;
      } else {
        // Wrap inline code block formatting backticks
        const parts = line.split(/(`[^`]+`)/g);
        return (
          <p key={i} className="text-gray-600 font-light mb-4 leading-relaxed">
            {parts.map((part, index) => {
              if (part.startsWith("`") && part.endsWith("`")) {
                return (
                  <code
                    key={index}
                    className="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800"
                  >
                    {part.slice(1, -1)}
                  </code>
                );
              }
              return part;
            })}
          </p>
        );
      }
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/reels"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Reels
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider rounded-full font-medium">
              {reel.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 mb-4">
            {reel.title}
          </h1>
          <p className="text-xl text-gray-500 font-light">{reel.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          {reel.links?.youtube && (
            <a
              href={reel.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm transition-colors"
            >
              <Youtube className="w-4 h-4" /> Wait on YouTube
            </a>
          )}
          {reel.links?.instagram && (
            <a
              href={reel.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 hover:bg-pink-100 rounded-lg text-sm transition-colors"
            >
              <Instagram className="w-4 h-4" /> View on Instagram
            </a>
          )}
          {reel.links?.github && (
            <a
              href={reel.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm transition-colors"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <div className="sticky top-24 space-y-8">
              {reel.videoUrl && reel.videoUrl.includes("youtube.com/embed") ? (
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black border border-gray-100">
                  <iframe
                    src={reel.videoUrl}
                    title={reel.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  {/* Fallback to cover image if not a youtube embed */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${reel.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                    <Play className="w-12 h-12 mb-4 opacity-80" />
                    <p className="text-sm font-light opacity-80">
                      Video preview not available
                    </p>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Technologies Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {reel.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-light border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 order-1 md:order-2">
            <div className="prose prose-gray prose-lg max-w-none">
              {renderContent(reel.content)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
