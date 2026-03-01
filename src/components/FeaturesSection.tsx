"use client";

import { motion } from "motion/react";
import { Shield, Zap, BarChart3, Wallet, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Multi-layer protection with 256-bit encryption, cold storage, and 2FA to keep your assets safe.",
    iconBg: "bg-[#2563eb]/10",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: Zap,
    title: "Lightning Fast Trades",
    description: "Execute trades in milliseconds with our high-performance matching engine. No lag, no delays.",
    iconBg: "bg-[#8b5cf6]/10",
    iconColor: "text-[#8b5cf6]",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Professional charting tools, real-time data feeds, and AI-powered insights at your fingertips.",
    iconBg: "bg-[#06b6d4]/10",
    iconColor: "text-[#06b6d4]",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Connect your favorite wallets seamlessly. Support for MetaMask, Trust Wallet, and 50+ more.",
    iconBg: "bg-[#f59e0b]/10",
    iconColor: "text-[#f59e0b]",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world. Available in 180+ countries with localized support.",
    iconBg: "bg-[#22c55e]/10",
    iconColor: "text-[#22c55e]",
  },
  {
    icon: Lock,
    title: "Regulated & Compliant",
    description: "Fully licensed and regulated. Your funds are protected by industry-leading insurance coverage.",
    iconBg: "bg-[#3b82f6]/10",
    iconColor: "text-[#3b82f6]",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 relative bg-[#f8fafc]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2563eb] mb-4 px-4 py-1.5 bg-[#2563eb]/5 rounded-full border border-[#2563eb]/10 text-[13px] font-medium">
            Why Bunex
          </span>
          <h2
            className="text-[#0f172a] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.15 }}
          >
            Built for Serious Traders
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto text-base leading-relaxed">
            Every feature is designed to give you an edge in the market.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-white border border-[#e2e8f0] rounded-2xl p-7 hover:border-[#2563eb]/20 hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all duration-300"
            >
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                  <feature.icon size={22} className={feature.iconColor} />
                </div>

                <h3 className="text-[#0f172a] mb-3 text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
                  {feature.title}
                </h3>

                <p className="text-[#64748b] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
