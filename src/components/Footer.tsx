import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Soft Opening Special", href: "/special" },
];

const contactInfo = [
  { icon: "📍", text: "123 Blossom Avenue, Suite 101\nYour City, ST 00000" },
  { icon: "📞", text: "(555) 123-4567" },
  { icon: "✉️", text: "hello@lumierenails.com" },
  { icon: "🕐", text: "Mon–Sat: 9am – 7pm\nSunday: 10am – 5pm" },
];

const socials = [
  { label: "Instagram", href: "#", icon: "📸" },
  { label: "Facebook", href: "#", icon: "👤" },
  { label: "TikTok", href: "#", icon: "🎵" },
  { label: "Pinterest", href: "#", icon: "📌" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Brand + Quick Links */}
        <div>
          <p className="font-display text-2xl text-gold font-semibold mb-3">Lumière Nails</p>
          <p className="text-sm text-white/50 mb-6 leading-relaxed">
            Premium nail care in a warm, welcoming space. Every visit is a moment of luxury.
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
          <h3 className="text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-6">Contact</h3>
          <ul className="space-y-4">
            {contactInfo.map((item) => (
              <li key={item.icon} className="flex gap-3 text-sm leading-relaxed">
                <span>{item.icon}</span>
                <span className="whitespace-pre-line">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Social Media */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-6">Follow Us</h3>
          <ul className="space-y-3">
            {socials.map((s) => (
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
          <p>© {new Date().getFullYear()} Lumière Nails. All rights reserved.</p>
          <p>Designed with care ✨</p>
        </div>
      </div>
    </footer>
  );
}
