"use client";

export default function SignupForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="full-name" className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2">
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label htmlFor="sp-email" className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2">
          Email Address
        </label>
        <input
          id="sp-email"
          type="email"
          placeholder="jane@email.com"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label htmlFor="sp-phone" className="block text-xs uppercase tracking-[0.1em] text-white/50 font-semibold mb-2">
          Phone Number <span className="text-white/30 normal-case">(optional)</span>
        </label>
        <input
          id="sp-phone"
          type="tel"
          placeholder="(555) 000-0000"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200 text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 rounded-full bg-gold text-charcoal font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:brightness-105 transition-all duration-200 mt-2 shadow-md"
      >
        Reserve My Spot
      </button>
      <p className="text-center text-white/30 text-xs">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
