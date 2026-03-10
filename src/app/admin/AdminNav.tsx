"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Contacts", href: "/admin/contacts" },
  { label: "Reservations", href: "/admin/reservations" },
  { label: "Newsletter", href: "/admin/newsletter" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-almond flex flex-col h-full">
      {/* Brand */}
      <div className="px-6 py-5 border-b border-almond">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Iconix Admin
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-almond text-deep-berry"
                  : "text-charcoal hover:bg-almond/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-almond">
        <button
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:bg-almond/50 hover:text-charcoal transition-colors duration-150"
          onClick={() => {
            // logout logic will go here
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
