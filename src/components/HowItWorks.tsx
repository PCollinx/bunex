"use client";

import { motion } from "motion/react";
import { UserPlus, CreditCard, TrendingUp, Banknote } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your email. Complete KYC verification for full access.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Fund Your Wallet",
    description: "Deposit via bank transfer, card, or crypto. Zero fees on your first deposit.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Start Trading",
    description: "Buy, sell, or swap 200+ cryptocurrencies with real-time market data.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Withdraw Anytime",
    description: "Cash out your profits instantly to your bank or external wallet.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2563eb] mb-4 px-4 py-1.5 bg-[#2563eb]/5 rounded-full border border-[#2563eb]/10 text-[13px] font-medium">
            Getting Started
          </span>
          <h2
            className="text-[#0f172a] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.15 }}
          >
            How It Works
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto text-base leading-relaxed">
            Get started in minutes. Trade like a pro from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#2563eb]/20 via-[#3b82f6]/20 to-[#2563eb]/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f1f5f9] border border-[#e2e8f0] mb-6">
                <step.icon size={24} className="text-[#2563eb]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center shadow-md shadow-[#2563eb]/25">
                  <span className="text-white text-[10px] font-bold">{step.step}</span>
                </div>
              </div>

              <h3 className="text-[#0f172a] mb-2 text-[17px] font-semibold font-[family-name:var(--font-space-grotesk)]">
                {step.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
