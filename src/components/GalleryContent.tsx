"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
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

export default function GalleryContent() {
  return (
    <div className="min-h-screen bg-warm-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel text="Our Work" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 mb-4">
            Nail Art Gallery
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted max-w-lg mx-auto leading-relaxed">
            A curated look at the art we create — from quiet elegance to bold expression. Each set is one of a kind.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } } }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`break-inside-avoid rounded-2xl ${item.bg} ${item.h} w-full flex items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity duration-200`}
            >
              <span className="text-xs uppercase tracking-[0.15em] text-charcoal/30 group-hover:text-charcoal/50 transition-colors duration-200">
                Photo {i + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-muted/60 text-sm mt-12"
        >
          Real photos coming soon — follow us on Instagram for the latest looks.
        </motion.p>
      </div>
    </div>
  );
}
