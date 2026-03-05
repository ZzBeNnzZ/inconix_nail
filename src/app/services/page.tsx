"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { services, categories, type ServiceCategory } from "@/lib/services-data";
import SectionLabel from "@/components/SectionLabel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceCategory>("Manicures");
  const filtered = services.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-warm-cream pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel text="Full Menu" />
            <h1 className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 mb-4">
              Our Services
            </h1>
            <p className="text-muted leading-relaxed max-w-lg">
              Every service is performed with premium products, careful technique, and genuine attention to detail.
            </p>
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-200 ${
                active === cat
                  ? "bg-deep-berry text-white shadow-sm"
                  : "bg-white text-muted border border-almond hover:border-rose hover:text-deep-berry"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service List */}
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="bg-white rounded-2xl border border-almond shadow-sm overflow-hidden"
        >
          {filtered.map((service, i) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              className={`px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 ${
                i < filtered.length - 1 ? "border-b border-almond" : ""
              }`}
            >
              {/* Left: name + description */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-charcoal">{service.name}</p>
                <p className="text-sm text-muted mt-0.5 leading-relaxed">{service.description}</p>
              </div>
              {/* Right: duration + price */}
              <div className="flex items-center gap-5 shrink-0">
                <span className="text-xs text-muted/70 uppercase tracking-[0.1em]">{service.duration}</span>
                <span className="font-display text-deep-berry text-xl font-semibold">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">Ready to treat yourself?</p>
          <a
            href="/special"
            className="inline-block px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-200 shadow-sm"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </div>
  );
}
