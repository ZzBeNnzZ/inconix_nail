"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdSpa } from "react-icons/md";

const STORAGE_KEY = "iconix_popup_dismissed";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
            className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[61] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-8 relative pointer-events-auto">
              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className="absolute top-4 right-4 text-muted hover:text-charcoal transition-colors duration-200 text-xl leading-none"
              >
                ×
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <MdSpa className="text-4xl text-gold" />
              </div>

              {/* Copy */}
              <h2 className="font-display text-2xl text-charcoal font-semibold text-center mb-2">
                Get 10% Off Your First Visit
              </h2>
              <p className="text-muted text-sm text-center leading-relaxed mb-6">
                Join our mailing list and receive an exclusive welcome discount, plus early access to new services and seasonal offers.
              </p>

              {/* Form */}
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  dismiss();
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-almond bg-warm-cream text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-200 text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-deep-berry text-white font-semibold text-sm uppercase tracking-widest hover:scale-105 hover:bg-deep-berry/90 transition-all duration-200"
                >
                  Claim My Discount
                </button>
              </form>

              <p className="text-center text-muted/60 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
