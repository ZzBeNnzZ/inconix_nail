import Link from "next/link";
import Image from "next/image";
import {
  SALON_NAME,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  PHONE,
  EMAIL,
  HOURS_SHORT,
  SOCIALS,
} from "@/lib/config";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Soft Opening Special", href: "/special" },
];

const contactInfo = [
  { icon: "📍", text: `${ADDRESS_LINE1}\n${ADDRESS_LINE2}` },
  { icon: "📞", text: PHONE },
  { icon: "✉️", text: EMAIL },
  { icon: "🕐", text: HOURS_SHORT },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Brand + Quick Links */}
        <div>
          <Image
            src="/images/logo/transparent/logo_iconix_new-02.png"
            alt={SALON_NAME}
            width={1080}
            height={1130}
            className="h-20 w-auto mb-3"
          />
          <p className="text-sm text-white/50 mb-6 leading-relaxed">
            Premium nail care in a warm, welcoming space. Every visit is a
            moment of luxury.
          </p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Contact Info */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-6">
            Contact
          </h3>
          <ul className="space-y-4">
            {contactInfo.map((item) => (
              <li
                key={item.icon}
                className="flex gap-3 text-sm leading-relaxed"
              >
                <span>{item.icon}</span>
                <span className="whitespace-pre-line">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Social Media */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-6">
            Follow Us
          </h3>
          <ul className="space-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="flex items-center gap-3 text-sm hover:text-gold transition-colors duration-200"
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xs text-white/40 mb-3">Stay in the loop</p>
            <Link
              href="/special"
              className="inline-block px-5 py-2.5 rounded-full bg-gold text-charcoal text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-200"
            >
              Join Mailing List
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
          </p>
          <p>Designed with care ✨</p>
        </div>
      </div>
    </footer>
  );
}
