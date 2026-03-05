"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import { SALON_NAME } from "@/lib/config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const featuredServices = [
  {
    name: "Gel Manicure",
    description:
      "Long-lasting gel polish with a mirror-shine finish. Chip-free for up to 3 weeks.",
    price: "$50",
    duration: "45 min",
  },
  {
    name: "Luxury Spa Manicure",
    description:
      "Indulge in a full treatment: soak, exfoliation, mask, massage, and polish of your choice.",
    price: "$65",
    duration: "60 min",
  },
  {
    name: "Gel-X Extensions",
    description:
      "Soft gel extensions for natural-looking length. Lightweight and flexible.",
    price: "$80",
    duration: "60 min",
  },
  {
    name: "Luxury Spa Pedicure",
    description:
      "A full foot treatment with hot stone massage, mask, and your choice of polish.",
    price: "$75",
    duration: "60 min",
  },
];

const testimonials = [
  {
    quote:
      "Absolutely the best nail experience I've ever had. The atmosphere is so calming and the results were stunning.",
    name: "Sarah M.",
    stars: 5,
  },
  {
    quote:
      "The gel manicure lasted almost a month with zero chipping. I won't go anywhere else.",
    name: "Jessica T.",
    stars: 5,
  },
  {
    quote:
      "Professional, hygienic, and genuinely relaxing. The spa pedicure was heaven.",
    name: "Alyssa R.",
    stars: 5,
  },
];

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setGalleryImages);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/gallery_imgs/5.jpg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/70" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6"
          >
            Now Open in Your City
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-6"
          >
            Elegance at Your
            <br />
            Fingertips
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/special"
              className="px-8 py-3.5 rounded-full bg-gold text-charcoal font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-200"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-white/80 text-gold font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-200"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gold/80 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 px-6 md:px-12 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel text="What We Offer" />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mb-12">
                Our Services
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {featuredServices.map((s) => (
                <motion.div key={s.name} variants={fadeUp}>
                  <ServiceCard {...s} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <Link
                href="/services"
                className="text-sm text-deep-berry font-semibold uppercase tracking-[0.15em] hover:text-gold transition-colors duration-200 border-b border-deep-berry/30 pb-0.5"
              >
                View All Services →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-almond aspect-[4/5] w-full flex items-center justify-center"
          >
            <p className="text-muted text-sm uppercase tracking-widest">
              Photo Coming Soon
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel text="Our Story" />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mb-6">
                Beauty Rooted in Care
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-muted leading-relaxed mb-4"
            >
              {SALON_NAME} was born from a simple belief: that every person
              deserves to feel pampered, polished, and perfectly at ease. We
              created a space that blends luxury with warmth — where the details
              matter and the experience lingers long after you leave.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted leading-relaxed mb-8"
            >
              Our team of skilled technicians uses only premium, salon-grade
              products to ensure results that are as beautiful as they are
              lasting. From a quick polish refresh to a full spa treatment, we
              bring the same level of care to every service.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="text-sm text-deep-berry font-semibold uppercase tracking-[0.15em] hover:text-gold transition-colors duration-200 border-b border-deep-berry/30 pb-0.5"
              >
                Learn More About Us →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-24 px-6 md:px-12 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel text="Our Work" />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold">
                Nail Art Gallery
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {galleryImages.slice(0, 6).map((src, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl overflow-hidden relative h-56"
                >
                  <Image
                    src={src}
                    alt={`Nail art ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <Link
                href="/gallery"
                className="text-sm text-deep-berry font-semibold uppercase tracking-[0.15em] hover:text-gold transition-colors duration-200 border-b border-deep-berry/30 pb-0.5"
              >
                View Full Gallery →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6 md:px-12 bg-almond">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel text="Client Love" />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold">
                What Our Clients Say
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-almond p-7 shadow-sm"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-gold text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic">
                    "{t.quote}"
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold">
                    {t.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 md:px-12 bg-gradient-to-br from-blush/40 via-warm-cream to-almond">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel text="Ready When You Are" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl text-charcoal font-semibold mb-5"
          >
            Ready for Your Next Appointment?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted mb-10 leading-relaxed"
          >
            Treat yourself to a moment of luxury. Our team is ready to make you
            feel your absolute best.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/special"
              className="inline-block px-10 py-4 rounded-full bg-deep-berry text-white font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:bg-deep-berry/90 transition-all duration-200 shadow-md"
            >
              Book Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
