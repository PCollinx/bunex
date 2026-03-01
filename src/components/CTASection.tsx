"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#3b82f6]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-white mb-4 max-w-2xl mx-auto"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}
              >
                Ready to Start Your
                <br />
                Crypto Journey?
              </h2>

              <p className="text-white/70 max-w-md mx-auto mb-10 text-base leading-relaxed">
                Join 4 million+ traders worldwide. Create your free account and get $25 in bonus crypto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 sm:w-72 px-5 py-4 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm text-sm"
                  />
                  <button className="px-6 py-4 bg-white text-[#2563eb] rounded-r-xl hover:bg-white/95 transition-opacity flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <p className="text-white/40 mt-4 text-xs">
                No credit card required. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
