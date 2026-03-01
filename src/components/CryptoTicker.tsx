"use client";

import { motion } from "motion/react";

const coins = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,842.50", change: "+2.34%", up: true, icon: "₿", color: "#f7931a" },
  { symbol: "ETH", name: "Ethereum", price: "$3,456.20", change: "+1.87%", up: true, icon: "Ξ", color: "#627eea" },
  { symbol: "SOL", name: "Solana", price: "$178.45", change: "+5.21%", up: true, icon: "◎", color: "#9945ff" },
  { symbol: "BNB", name: "BNB", price: "$612.30", change: "-0.45%", up: false, icon: "◆", color: "#f3ba2f" },
  { symbol: "XRP", name: "Ripple", price: "$0.6234", change: "+0.92%", up: true, icon: "✕", color: "#00aae4" },
  { symbol: "ADA", name: "Cardano", price: "$0.5812", change: "-1.23%", up: false, icon: "♦", color: "#0033ad" },
  { symbol: "DOGE", name: "Dogecoin", price: "$0.1245", change: "+8.45%", up: true, icon: "Ð", color: "#c3a634" },
  { symbol: "DOT", name: "Polkadot", price: "$7.89", change: "+3.11%", up: true, icon: "●", color: "#e6007a" },
];

export function CryptoTicker() {
  const doubled = [...coins, ...coins];

  return (
    <section className="relative py-5 border-y border-[#e2e8f0] bg-[#f8fafc] overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((coin, i) => (
          <div key={`${coin.symbol}-${i}`} className="flex items-center gap-3 px-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${coin.color}15` }}
            >
              <span style={{ color: coin.color }} className="text-sm font-bold">{coin.icon}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0f172a] text-sm font-semibold">{coin.symbol}</span>
              <span className="text-[#64748b] text-[13px]">{coin.price}</span>
              <span
                className="text-[13px] font-medium"
                style={{ color: coin.up ? "#22c55e" : "#ef4444" }}
              >
                {coin.change}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
