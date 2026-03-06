"use client";

import { useState } from "react";

export default function SignupForm() {
  const [fields, setFields] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "full" | "duplicate">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("success");
    } else if (data.error === "spots_full") {
      setStatus("full");
    } else if (data.error === "already_registered") {
      setStatus("duplicate");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <p className="font-display text-2xl text-white font-semibold mb-2">You're on the list!</p>
        <p className="text-white/60 text-sm">We'll be in touch soon with all the details.</p>
      </div>
    );
  }

  if (status === "full") {
    return (
      <div className="text-center py-6">
        <p className="font-display text-2xl text-white font-semibold mb-2">All spots are taken!</p>
        <p className="text-white/60 text-sm">Follow us on Instagram for future updates.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="full-name"
          className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2"
        >
          Full Name
        </label>
        <input
          id="full-name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          required
          value={fields.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="sp-email"
          className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2"
        >
          Email Address
        </label>
        <input
          id="sp-email"
          name="email"
          type="email"
          placeholder="jane@email.com"
          required
          value={fields.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="sp-phone"
          className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2"
        >
          Phone Number
        </label>
        <input
          id="sp-phone"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
          required
          value={fields.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      {status === "duplicate" && (
        <p className="text-gold text-xs text-center">This email is already registered.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:brightness-105 transition-all duration-200 mt-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Reserve My Spot"}
      </button>
      <p className="text-center text-white/30 text-xs">Unsubscribe anytime.</p>
    </form>
  );
}
