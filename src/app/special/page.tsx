import type { Metadata } from "next";
import CountdownTimer from "@/components/CountdownTimer";
import SectionLabel from "@/components/SectionLabel";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Soft Opening Special — Lumière Nails",
  description: "Reserve your spot for our exclusive soft opening offer. Limited to 50 guests.",
};

const TARGET_DATE = new Date("2026-04-15T23:59:59");

export default function SpecialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-charcoal to-deep-berry flex flex-col items-center justify-start pt-32 pb-24 px-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Limited Time</span>
      </div>

      {/* Heading */}
      <h1 className="font-display text-5xl md:text-7xl text-white font-semibold text-center mb-4 leading-tight">
        Soft Opening<br />Special
      </h1>
      <p className="text-white/60 text-center max-w-lg leading-relaxed mb-12">
        We&apos;re rolling out the red carpet for our very first guests. Reserve your spot today and enjoy exclusive early-access pricing — available for a limited time only.
      </p>

      {/* Perks */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {["20% off all services", "Complimentary hand mask", "Priority booking"].map((perk) => (
          <span
            key={perk}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm"
          >
            ✦ {perk}
          </span>
        ))}
      </div>

      {/* Countdown */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 text-center mb-5">Offer ends in</p>
        <CountdownTimer targetDate={TARGET_DATE} />
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="font-display text-2xl text-white font-semibold mb-1">Reserve My Spot</h2>
        <p className="text-white/40 text-sm mb-6">Only 50 spots available</p>

        <SignupForm />
      </div>
    </div>
  );
}
