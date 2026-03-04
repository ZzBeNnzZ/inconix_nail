import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lumière Nails",
  description: "Get in touch with Lumière Nails. Find our location, hours, and send us a message.",
};

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <SectionLabel text="Get In Touch" />
          <h1 className="font-display text-5xl md:text-6xl text-charcoal font-semibold mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-muted leading-relaxed max-w-lg">
            Questions, bookings, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Info + Map Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-charcoal mb-3 text-sm uppercase tracking-[0.1em]">Location</h2>
              <p className="text-muted leading-relaxed">
                123 Blossom Avenue, Suite 101<br />
                Your City, ST 00000
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-charcoal mb-3 text-sm uppercase tracking-[0.1em]">Phone & Email</h2>
              <p className="text-muted">(555) 123-4567</p>
              <p className="text-muted">hello@lumierenails.com</p>
            </div>
            <div>
              <h2 className="font-semibold text-charcoal mb-3 text-sm uppercase tracking-[0.1em]">Hours</h2>
              <ul className="space-y-1.5">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm gap-8">
                    <span className="text-charcoal/80">{h.day}</span>
                    <span className="text-muted">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-charcoal mb-3 text-sm uppercase tracking-[0.1em]">Follow Us</h2>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "TikTok"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-sm text-muted hover:text-deep-berry transition-colors duration-200 border-b border-muted/30 pb-0.5"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl bg-almond border border-almond/60 flex items-center justify-center min-h-64 md:min-h-auto">
            <div className="text-center">
              <span className="text-4xl mb-3 block">📍</span>
              <p className="text-muted text-sm uppercase tracking-[0.1em]">Map Placeholder</p>
              <p className="text-muted/60 text-xs mt-1">Google Maps embed goes here</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-almond shadow-sm p-8 md:p-10 max-w-2xl">
          <h2 className="font-display text-2xl text-charcoal font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
