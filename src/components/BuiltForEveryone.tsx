"use client";

import { motion } from "motion/react";
import { Smartphone, LineChart, Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const personas = [
  {
    title: "Beginners",
    description:
      "Simple, guided experience to buy your first crypto in minutes. No jargon, no confusion — just easy onboarding.",
    icon: Smartphone,
    color: "#2563eb",
    tag: "Easy Start",
    image:
      "https://images.unsplash.com/photo-1634386708556-f1a553527aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFkZXIlMjBzbWFydHBob25lJTIwY3J5cHRvfGVufDF8fHx8MTc3MjIwNzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Active Traders",
    description:
      "Advanced charting, real-time order books, and lightning-fast execution built for professionals who demand the best.",
    icon: LineChart,
    color: "#8b5cf6",
    tag: "Pro Tools",
    image:
      "https://images.unsplash.com/photo-1632647895256-3f75c1865a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJ1c2luZXNzJTIwd29tYW4lMjBsYXB0b3AlMjBmaW5hbmNlfGVufDF8fHx8MTc3MjIwNzgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Businesses",
    description:
      "Enterprise APIs, team accounts, and compliance tools to power crypto operations at any scale.",
    icon: Users,
    color: "#06b6d4",
    tag: "Enterprise",
    image:
      "https://images.unsplash.com/photo-1733826544831-ad71d05c8423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG9mZmljZSUyMHRlY2hub2xvZ3klMjBzdGFydHVwfGVufDF8fHx8MTc3MjIwNzgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const highlights = [
  { icon: Shield, label: "Bank-grade security", color: "#2563eb" },
  { icon: Sparkles, label: "AI-powered insights", color: "#8b5cf6" },
  { icon: Smartphone, label: "Mobile-first design", color: "#06b6d4" },
  { icon: Users, label: "24/7 live support", color: "#f59e0b" },
];

export function BuiltForEveryone() {
  return (
    <section className="py-20 lg:py-28 relative bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#8b5cf6] mb-4 px-4 py-1.5 bg-[#8b5cf6]/5 rounded-full border border-[#8b5cf6]/10 text-[13px] font-medium">
            For Everyone
          </span>
          <h2
            className="text-[#0f172a] mb-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.15,
            }}
          >
            Built for Everyone
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-base leading-relaxed">
            Whether you&apos;re buying your first Bitcoin or managing a portfolio worth millions, Bunex adapts to your needs.
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 mb-16">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#0f172a]/5 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide"
                  style={{ backgroundColor: persona.color }}
                >
                  {persona.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 pt-3">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${persona.color}10` }}
                  >
                    <persona.icon size={20} style={{ color: persona.color }} />
                  </div>
                  <h3 className="text-[#0f172a] text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    {persona.title}
                  </h3>
                </div>

                <p className="text-[#64748b] mb-5 text-sm leading-relaxed">
                  {persona.description}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 transition-colors duration-300 group-hover:gap-2.5 text-sm font-medium"
                  style={{ color: persona.color }}
                >
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#e2e8f0] rounded-2xl p-6 lg:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${h.color}08` }}
                >
                  <h.icon size={20} style={{ color: h.color }} />
                </div>
                <span className="text-[#0f172a] text-sm font-medium">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
