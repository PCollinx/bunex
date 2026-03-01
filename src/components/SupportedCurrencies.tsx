"use client";

import { motion } from "motion/react";

const currencies = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿", color: "#f7931a", bg: "#f7931a" },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ", color: "#627eea", bg: "#627eea" },
  { symbol: "SOL", name: "Solana", icon: "◎", color: "#9945ff", bg: "#9945ff" },
  { symbol: "BNB", name: "BNB Chain", icon: "◆", color: "#f3ba2f", bg: "#f3ba2f" },
  { symbol: "XRP", name: "Ripple", icon: "✕", color: "#00aae4", bg: "#00aae4" },
  { symbol: "ADA", name: "Cardano", icon: "♦", color: "#0033ad", bg: "#0033ad" },
  { symbol: "DOGE", name: "Dogecoin", icon: "Ð", color: "#c3a634", bg: "#c3a634" },
  { symbol: "DOT", name: "Polkadot", icon: "●", color: "#e6007a", bg: "#e6007a" },
  { symbol: "AVAX", name: "Avalanche", icon: "▲", color: "#e84142", bg: "#e84142" },
  { symbol: "MATIC", name: "Polygon", icon: "⬡", color: "#8247e5", bg: "#8247e5" },
  { symbol: "LINK", name: "Chainlink", icon: "⬡", color: "#2a5ada", bg: "#2a5ada" },
  { symbol: "UNI", name: "Uniswap", icon: "🦄", color: "#ff007a", bg: "#ff007a" },
];

export function SupportedCurrencies() {
  return (
    <section className="py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block text-[#2563eb] mb-4 px-4 py-1.5 bg-[#2563eb]/5 rounded-full border border-[#2563eb]/10 text-[13px] font-medium">
            200+ Assets
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
            Supported Currencies
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto text-base leading-relaxed">
            Trade the world&apos;s most popular digital assets — from blue chips to emerging tokens.
          </p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="mt-14 space-y-4">
          {/* Row 1 — scrolls left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...currencies, ...currencies].map((c, i) => (
                <CurrencyPill key={`r1-${c.symbol}-${i}`} currency={c} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...currencies.slice(6), ...currencies.slice(0, 6), ...currencies.slice(6), ...currencies.slice(0, 6)].map(
                (c, i) => (
                  <CurrencyPill key={`r2-${c.symbol}-${i}`} currency={c} />
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#94a3b8] text-sm">
            And <span className="text-[#2563eb] font-semibold">190+ more</span> tokens
            available for trading
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CurrencyPill({
  currency,
}: {
  currency: (typeof currencies)[0];
}) {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-md hover:border-[#cbd5e1] transition-all duration-300 shrink-0 cursor-pointer group">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${currency.bg}12` }}
      >
        <span style={{ color: currency.color }} className="text-[15px] font-bold">
          {currency.icon}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#0f172a] text-sm font-semibold">
          {currency.symbol}
        </span>
        <span className="text-[#94a3b8] text-[11px]">
          {currency.name}
        </span>
      </div>
    </div>
  );
}
