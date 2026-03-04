"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-[0.1em] text-charcoal/70 font-semibold mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl border border-almond bg-warm-cream text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.1em] text-charcoal/70 font-semibold mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@email.com"
            className="w-full px-4 py-3 rounded-xl border border-almond bg-warm-cream text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-[0.1em] text-charcoal/70 font-semibold mb-2">
          Phone Number <span className="text-muted/50 normal-case">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(555) 000-0000"
          className="w-full px-4 py-3 rounded-xl border border-almond bg-warm-cream text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.1em] text-charcoal/70 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-3 rounded-xl border border-almond bg-warm-cream text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-deep-berry text-white font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:bg-deep-berry/90 transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
