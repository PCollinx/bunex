export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
                <span className="text-white text-sm font-extrabold">B</span>
              </div>
              <span className="text-[#0f172a] text-lg font-bold">
                Bunex
              </span>
            </div>
            <p className="text-[#64748b] text-[13px] text-center md:text-left max-w-sm">
              The next generation cryptocurrency exchange. Trade with confidence.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-[13px]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#64748b] hover:text-[#2563eb] transition-colors text-[13px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#e2e8f0] text-center">
          <p className="text-[#94a3b8] text-xs">
            &copy; 2026 Bunex Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
