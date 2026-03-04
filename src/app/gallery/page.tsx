import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Gallery — Lumière Nails",
  description: "Browse our nail art gallery. From classic elegance to bold nail art — see what we create.",
};

const placeholders = [
  { bg: "bg-blush", h: "h-64" },
  { bg: "bg-rose/40", h: "h-48" },
  { bg: "bg-almond", h: "h-72" },
  { bg: "bg-blush/70", h: "h-56" },
  { bg: "bg-rose/30", h: "h-80" },
  { bg: "bg-almond/80", h: "h-48" },
  { bg: "bg-blush/50", h: "h-60" },
  { bg: "bg-rose/50", h: "h-44" },
  { bg: "bg-almond/60", h: "h-68" },
  { bg: "bg-blush/80", h: "h-52" },
  { bg: "bg-rose/60", h: "h-64" },
  { bg: "bg-almond/90", h: "h-40" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-warm-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="Our Work" />
          <h1 className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 mb-4">
            Nail Art Gallery
          </h1>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            A curated look at the art we create — from quiet elegance to bold expression. Each set is one of a kind.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-2xl ${item.bg} ${item.h} w-full flex items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity duration-200`}
            >
              <span className="text-xs uppercase tracking-[0.15em] text-charcoal/30 group-hover:text-charcoal/50 transition-colors duration-200">
                Photo {i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted/60 text-sm mt-12">
          Real photos coming soon — follow us on Instagram for the latest looks.
        </p>
      </div>
    </div>
  );
}
