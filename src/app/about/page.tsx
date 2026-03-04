import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Lumière Nails",
  description: "Learn about Lumière Nails — our philosophy, our team, and what makes our salon different.",
};

const team = [
  { name: "Sophia Chen", role: "Founder & Lead Nail Artist", bio: "With 12 years of experience in luxury nail care, Sophia founded Lumière to bring a spa-level experience to every client, every visit." },
  { name: "Maya Williams", role: "Senior Nail Technician", bio: "Maya specializes in intricate nail art and gel extensions. Her work has been featured in local beauty editorials." },
  { name: "Priya Patel", role: "Nail Technician & Educator", bio: "Priya brings warmth and precision to every service. She also leads our junior technician training program." },
  { name: "Jade Torres", role: "Nail Technician", bio: "Jade's specialty is minimalist nail art and long-lasting dip powder manicures. Clients love her calming chair-side manner." },
];

const values = [
  { icon: "💎", title: "Premium Products", description: "We use only high-grade, salon-trusted brands — products we'd put on our own nails." },
  { icon: "🌿", title: "Clean & Safe", description: "Hospital-grade sterilization, single-use files, and a fully sanitized environment. Always." },
  { icon: "🤍", title: "Relaxing Atmosphere", description: "Soft music, warm lighting, and a calm pace — because this time is yours." },
  { icon: "✨", title: "Expert Technicians", description: "Every member of our team is trained, certified, and genuinely passionate about nail artistry." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-cream pt-32 pb-24">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-20">
        <SectionLabel text="Our Story" />
        <h1 className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 max-w-2xl">
          Beauty Rooted in Care
        </h1>
      </div>

      {/* Brand Story */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl bg-almond aspect-[4/5] flex items-center justify-center">
            <p className="text-muted text-sm uppercase tracking-widest">Salon Photo</p>
          </div>
          <div>
            <p className="text-charcoal/80 leading-relaxed mb-5">
              Lumière Nails was born from a simple belief: that every person deserves to feel pampered, polished, and perfectly at ease. We created a space that blends luxury with warmth — where the details matter and the experience lingers long after you leave.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-5">
              Our salon is designed to feel like a retreat. The moment you walk in, the hustle outside fades. Soft lighting, curated scents, and a team that genuinely cares about your wellbeing — that's what Lumière is about.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              We believe nail care is self-care. Whether you come in for a quick refresh or a full spa treatment, you leave feeling like the best version of yourself. That's our promise.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-almond py-20 px-6 md:px-12 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel text="What We Stand For" />
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mt-2">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-almond p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <SectionLabel text="The People Behind the Magic" />
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-semibold mt-2">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="rounded-2xl bg-blush/40 aspect-square mb-4 flex items-center justify-center">
                <span className="text-4xl">🌸</span>
              </div>
              <h3 className="font-semibold text-charcoal">{member.name}</h3>
              <p className="text-xs text-gold uppercase tracking-[0.1em] mt-1 mb-2">{member.role}</p>
              <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center px-6">
        <p className="text-muted mb-5">Ready to experience Lumière for yourself?</p>
        <Link
          href="/special"
          className="inline-block px-10 py-4 rounded-full bg-deep-berry text-white font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:bg-deep-berry/90 transition-all duration-200 shadow-md"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
