"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FaGem, FaLeaf, FaHeart, FaStar, FaUser } from "react-icons/fa6";
import SectionLabel from "@/components/SectionLabel";
import { SALON_NAME } from "@/lib/config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const team = [
  { name: "Sophia Chen", role: "Founder & Lead Nail Artist", bio: `With 12 years of experience in luxury nail care, Sophia founded ${SALON_NAME} to bring a spa-level experience to every client, every visit.` },
  { name: "Maya Williams", role: "Senior Nail Technician", bio: "Maya specializes in intricate nail art and gel extensions. Her work has been featured in local beauty editorials." },
  { name: "Priya Patel", role: "Nail Technician & Educator", bio: "Priya brings warmth and precision to every service. She also leads our junior technician training program." },
  { name: "Jade Torres", role: "Nail Technician", bio: "Jade's specialty is minimalist nail art and long-lasting dip powder manicures. Clients love her calming chair-side manner." },
];

const values = [
  { icon: <FaGem className="w-7 h-7 text-gold" />, title: "Premium Products", description: "We use only high-grade, salon-trusted brands — products we'd put on our own nails." },
  { icon: <FaLeaf className="w-7 h-7 text-gold" />, title: "Clean & Safe", description: "Hospital-grade sterilization, single-use files, and a fully sanitized environment. Always." },
  { icon: <FaHeart className="w-7 h-7 text-gold" />, title: "Relaxing Atmosphere", description: "Soft music, warm lighting, and a calm pace — because this time is yours." },
  { icon: <FaStar className="w-7 h-7 text-gold" />, title: "Expert Technicians", description: "Every member of our team is trained, certified, and genuinely passionate about nail artistry." },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-warm-cream pt-40 pb-24">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="px-6 md:px-12 max-w-6xl mx-auto mb-20"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel text="Our Story" />
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 max-w-2xl">
          Beauty Rooted in Care
        </motion.h1>
      </motion.div>

      {/* Brand Story */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="rounded-2xl bg-almond aspect-[4/5] flex items-center justify-center">
            <p className="text-muted text-sm uppercase tracking-widest">Salon Photo</p>
          </motion.div>
          <div>
            <motion.p variants={fadeUp} className="text-charcoal/80 leading-relaxed mb-5">
              {SALON_NAME} was born from a simple belief: that every person deserves to feel pampered, polished, and perfectly at ease. We created a space that blends luxury with warmth — where the details matter and the experience lingers long after you leave.
            </motion.p>
            <motion.p variants={fadeUp} className="text-charcoal/80 leading-relaxed mb-5">
              Our salon is designed to feel like a retreat. The moment you walk in, the hustle outside fades. Soft lighting, curated scents, and a team that genuinely cares about your wellbeing — that&apos;s what {SALON_NAME} is about.
            </motion.p>
            <motion.p variants={fadeUp} className="text-charcoal/80 leading-relaxed">
              We believe nail care is self-care. Whether you come in for a quick refresh or a full spa treatment, you leave feeling like the best version of yourself. That&apos;s our promise.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-almond py-20 px-6 md:px-12 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <SectionLabel text="What We Stand For" />
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mt-2">
                Our Values
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl border border-almond p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="mb-4 block">{v.icon}</span>
                  <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel text="The People Behind the Magic" />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mt-2">
              Meet Our Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="text-center">
                <div className="rounded-2xl bg-blush/40 aspect-square mb-4 flex items-center justify-center">
                  <FaUser className="w-10 h-10 text-rose" />
                </div>
                <h3 className="font-semibold text-charcoal">{member.name}</h3>
                <p className="text-xs text-gold uppercase tracking-[0.1em] mt-1 mb-2">{member.role}</p>
                <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center px-6"
      >
        <p className="text-muted mb-5">Ready to experience {SALON_NAME} for yourself?</p>
        <Link
          href="/special"
          className="inline-block px-10 py-4 rounded-full bg-deep-berry text-white font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:bg-deep-berry/90 transition-all duration-200 shadow-md"
        >
          Book an Appointment
        </Link>
      </motion.div>
    </div>
  );
}
