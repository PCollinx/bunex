"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-[#f0f5ff] via-white to-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/15 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-[13px] font-medium">
                Live Trading — 24/7 Markets
              </span>
            </motion.div>

            <h1
              className="text-[#0f172a] mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.05,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Trade Crypto
              <br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">
                Without Limits
              </span>
            </h1>

            <p className="text-[#64748b] max-w-lg mb-10 text-[17px] leading-relaxed">
              Buy, sell, and trade 200+ cryptocurrencies with industry-leading security, low fees, and lightning-fast execution. Your gateway to the future of finance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#0f172a] text-white rounded-2xl hover:bg-[#1e293b] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#0f172a]/20 text-[15px] font-semibold">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M1.21 0.522C0.907 0.837 0.73 1.338 0.73 1.998V20.002C0.73 20.662 0.907 21.163 1.21 21.478L1.283 21.548L11.458 11.373V11.227V11.081L1.283 0.906L1.21 0.522Z" fill="currentColor"/>
                  <path d="M14.85 14.765L11.458 11.373V11.227V11.081L14.85 7.689L14.94 7.74L18.96 10.037C20.11 10.695 20.11 11.759 18.96 12.417L14.94 14.714L14.85 14.765Z" fill="currentColor"/>
                  <path d="M14.94 14.714L11.458 11.227L1.21 21.478C1.61 21.898 2.26 21.95 2.99 21.534L14.94 14.714Z" fill="currentColor"/>
                  <path d="M14.94 7.74L2.99 0.92C2.26 0.504 1.61 0.556 1.21 0.976L11.458 11.227L14.94 7.74Z" fill="currentColor"/>
                </svg>
                Google Play
              </button>
              <button className="group px-8 py-4 border border-[#e2e8f0] text-[#0f172a] rounded-2xl hover:border-[#0f172a]/30 transition-all flex items-center justify-center gap-3 bg-white text-[15px] font-semibold">
                <svg width="18" height="22" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-74.3-19.7C63.1 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                App Store
              </button>
            </div>
          </motion.div>

          {/* Right side - Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-8 bg-[#2563eb]/8 rounded-3xl blur-3xl opacity-50" />

              {/* Main trading card */}
              <div className="relative bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-xl shadow-[#0f172a]/5">
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7931a]/10 flex items-center justify-center">
                      <span className="text-[#f7931a] text-base font-bold">₿</span>
                    </div>
                    <div>
                      <div className="text-[#0f172a] text-[15px] font-semibold">Bitcoin</div>
                      <div className="text-[#94a3b8] text-xs">BTC/USD</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#0f172a] text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                      $67,842.50
                    </div>
                    <div className="text-[#22c55e] text-[13px] font-medium">+2.34%</div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="mb-6 h-32 flex items-end gap-[2px]">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 70, 90, 85, 95, 88, 100, 92, 98, 105, 100, 110, 105, 115, 108, 120, 115, 125, 118, 130, 128].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-[#2563eb]/10 to-[#2563eb]/40"
                      style={{ height: `${(h / 130) * 100}%` }}
                    />
                  ))}
                </div>

                {/* Buy/Sell buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3.5 rounded-xl bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors text-sm font-semibold">
                    Buy BTC
                  </button>
                  <button className="py-3.5 rounded-xl bg-[#ef4444]/5 text-[#ef4444] border border-[#ef4444]/15 hover:bg-[#ef4444]/10 transition-colors text-sm font-semibold">
                    Sell BTC
                  </button>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-8 bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-lg shadow-[#0f172a]/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                    <span className="text-[#22c55e] text-sm">↑</span>
                  </div>
                  <div>
                    <div className="text-[#0f172a] text-xs font-medium">ETH just hit $3,450</div>
                    <div className="text-[#94a3b8] text-[11px]">2 min ago</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-16 bg-white border border-[#e2e8f0] rounded-2xl p-4 shadow-lg shadow-[#0f172a]/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                    <span className="text-[#2563eb] text-sm">🔒</span>
                  </div>
                  <div>
                    <div className="text-[#0f172a] text-xs font-medium">256-bit Encrypted</div>
                    <div className="text-[#94a3b8] text-[11px]">Bank-grade security</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
