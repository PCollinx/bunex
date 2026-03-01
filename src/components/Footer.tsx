export function Footer() {
  const footerLinks = {
    Product: ["Spot Trading", "Futures", "Margin Trading", "Staking", "NFT Marketplace"],
    Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
    Resources: ["Help Center", "API Docs", "Fees", "Status", "Bug Bounty"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "AML Policy", "Risk Disclosure"],
  };

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
                <span className="text-white text-sm font-extrabold">B</span>
              </div>
              <span className="text-[#0f172a] text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                Bunex
              </span>
            </div>
            <p className="text-[#64748b] mb-6 text-[13px] leading-relaxed">
              The next generation cryptocurrency exchange for everyone.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "📱", "💬"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] hover:text-[#2563eb] hover:border-[#2563eb]/20 transition-all text-[13px]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#0f172a] mb-4 text-[13px] font-semibold tracking-wide uppercase">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#64748b] hover:text-[#2563eb] transition-colors text-[13px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#e2e8f0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94a3b8] text-xs">
            &copy; 2026 Bunex Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#94a3b8] text-xs">
              🌍 English (US)
            </span>
            <span className="text-[#94a3b8] text-xs">
              💲 USD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
