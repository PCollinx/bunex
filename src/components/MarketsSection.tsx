"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

const categories = ["Popular", "Top Gainers", "New Listings", "DeFi"];

const marketData = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,842.50", change: 2.34, mcap: "$1.33T", volume: "$28.4B", color: "#f7931a", icon: "₿", sparkline: [30, 35, 33, 40, 38, 42, 45, 43, 48, 50] },
  { symbol: "ETH", name: "Ethereum", price: "$3,456.20", change: 1.87, mcap: "$415B", volume: "$14.2B", color: "#627eea", icon: "Ξ", sparkline: [25, 28, 30, 27, 32, 35, 33, 38, 36, 40] },
  { symbol: "SOL", name: "Solana", price: "$178.45", change: 5.21, mcap: "$78.5B", volume: "$3.8B", color: "#9945ff", icon: "◎", sparkline: [20, 25, 30, 28, 35, 40, 38, 45, 42, 50] },
  { symbol: "BNB", name: "BNB", price: "$612.30", change: -0.45, mcap: "$94.2B", volume: "$1.2B", color: "#f3ba2f", icon: "◆", sparkline: [40, 38, 35, 37, 33, 30, 32, 28, 30, 27] },
  { symbol: "XRP", name: "Ripple", price: "$0.6234", change: 0.92, mcap: "$34.1B", volume: "$1.8B", color: "#00aae4", icon: "✕", sparkline: [30, 32, 31, 34, 33, 36, 35, 38, 37, 39] },
  { symbol: "DOGE", name: "Dogecoin", price: "$0.1245", change: 8.45, mcap: "$17.8B", volume: "$2.1B", color: "#c3a634", icon: "Ð", sparkline: [15, 20, 18, 25, 30, 28, 35, 40, 38, 50] },
];

function MiniSparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const height = 32;
  const width = 80;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height}`)
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MarketsSection() {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <section id="markets" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#2563eb] mb-4 px-4 py-1.5 bg-[#2563eb]/5 rounded-full border border-[#2563eb]/10 text-[13px] font-medium">
            Live Markets
          </span>
          <h2
            className="text-[#0f172a] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.15 }}
          >
            Explore the Market
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto text-base leading-relaxed">
            Track real-time prices and market trends for hundreds of cryptocurrencies.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl whitespace-nowrap transition-all text-[13px] font-medium ${
                activeTab === cat
                  ? "bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/20"
                  : "bg-[#f1f5f9] text-[#64748b] hover:text-[#0f172a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Table header */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_100px_80px] gap-4 px-6 py-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
            {["Asset", "Price", "24h Change", "Market Cap", "Chart", ""].map((h) => (
              <div key={h} className="text-[#94a3b8] text-xs font-medium">
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {marketData.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_100px_80px] gap-4 px-6 py-5 border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors cursor-pointer items-center"
            >
              {/* Asset */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${coin.color}12` }}
                >
                  <span style={{ color: coin.color }} className="text-base font-bold">{coin.icon}</span>
                </div>
                <div>
                  <div className="text-[#0f172a] text-sm font-semibold">{coin.name}</div>
                  <div className="text-[#94a3b8] text-xs">{coin.symbol}</div>
                </div>
              </div>

              {/* Price */}
              <div className="text-[#0f172a] text-right md:text-left text-sm font-semibold font-[family-name:var(--font-space-grotesk)]">
                {coin.price}
              </div>

              {/* Change */}
              <div className={`hidden md:flex items-center gap-1 text-sm font-medium ${coin.change >= 0 ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
                {coin.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {coin.change >= 0 ? "+" : ""}{coin.change}%
              </div>

              {/* Market Cap */}
              <div className="hidden md:block text-[#64748b] text-sm">{coin.mcap}</div>

              {/* Sparkline */}
              <div className="hidden md:block">
                <MiniSparkline data={coin.sparkline} positive={coin.change >= 0} />
              </div>

              {/* Trade button */}
              <div className="hidden md:flex justify-end">
                <button className="p-2 rounded-lg bg-[#f1f5f9] hover:bg-[#2563eb]/10 transition-colors text-[#64748b] hover:text-[#2563eb]">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 border border-[#e2e8f0] text-[#0f172a] rounded-xl hover:border-[#2563eb]/30 hover:text-[#2563eb] transition-all text-sm font-medium">
            View All Markets
          </button>
        </div>
      </div>
    </section>
  );
}
