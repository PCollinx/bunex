"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const partners = [
  "Coinbase Ventures",
  "Binance Labs",
  "a16z Crypto",
  "Sequoia Capital",
  "Paradigm",
  "Pantera Capital",
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Professional Trader",
    text: "Bunex's execution speed is unmatched. I've tried every major exchange and nothing comes close to their matching engine.",
    rating: 5,
    bg: "#2563eb",
    rotate: -5,
  },
  {
    name: "Sarah Williams",
    role: "DeFi Investor",
    text: "The best UI/UX I've seen in crypto. Everything is intuitive and the advanced charts are incredible. Love the mobile app too.",
    rating: 5,
    bg: "#8b5cf6",
    rotate: 3,
  },
  {
    name: "Michael Obi",
    role: "Crypto Enthusiast",
    text: "Finally an exchange that actually cares about security AND user experience. Withdrew funds seamlessly within minutes.",
    rating: 5,
    bg: "#06b6d4",
    rotate: -3,
  },
  {
    name: "Priya Sharma",
    role: "Portfolio Manager",
    text: "The analytics dashboard is a game-changer. Real-time insights and pro charting tools make my job so much easier every day.",
    rating: 5,
    bg: "#f59e0b",
    rotate: 4,
  },
  {
    name: "James Okoro",
    role: "Day Trader",
    text: "Zero downtime during high-volatility moments. Bunex handles volume like no other platform I've used. Absolutely reliable.",
    rating: 5,
    bg: "#ec4899",
    rotate: -4,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group cursor-pointer"
    >
      <div
        ref={cardRef}
        className="rounded-2xl p-7 shadow-lg relative overflow-hidden transition-all duration-500"
        style={{
          backgroundColor: t.bg,
          transform: `rotate(${t.rotate}deg)`,
        }}
        onMouseEnter={() => {
          if (cardRef.current) {
            cardRef.current.style.transform = "rotate(0deg) scale(1.04)";
            cardRef.current.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.25)";
          }
        }}
        onMouseLeave={() => {
          if (cardRef.current) {
            cardRef.current.style.transform = `rotate(${t.rotate}deg) scale(1)`;
            cardRef.current.style.boxShadow = "";
          }
        }}
      >
        {/* Decorative quote */}
        <Quote
          size={40}
          className="absolute top-4 right-4 text-white/10"
          style={{ transform: "scaleX(-1)" }}
        />

        {/* Stars */}
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-white/80 text-white/80" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white/90 mb-7 relative text-sm leading-relaxed">
          &ldquo;{t.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-sm font-bold">
              {t.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="text-white text-sm font-semibold">
              {t.name}
            </div>
            <div className="text-white/60 text-xs">
              {t.role}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 5);

  return (
    <section className="py-20 lg:py-28 relative bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#94a3b8] mb-8 text-[13px] font-medium tracking-widest uppercase">
            Backed by the best in the industry
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-[#cbd5e1] hover:text-[#64748b] transition-colors text-base font-semibold font-[family-name:var(--font-space-grotesk)]"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] mb-4 px-4 py-1.5 bg-[#f59e0b]/5 rounded-full border border-[#f59e0b]/15 text-[13px] font-medium">
            Testimonials
          </span>
          <h2
            className="text-[#0f172a]"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.15,
            }}
          >
            Trusted by Millions
          </h2>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {topRow.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-3xl mx-auto">
          {bottomRow.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
