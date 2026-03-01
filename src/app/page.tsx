import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CryptoTicker } from "@/components/CryptoTicker";
import { SupportedCurrencies } from "@/components/SupportedCurrencies";
import { MarketsSection } from "@/components/MarketsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BuiltForEveryone } from "@/components/BuiltForEveryone";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CryptoTicker />
      <SupportedCurrencies />
      <MarketsSection />
      <FeaturesSection />
      <BuiltForEveryone />
      <HowItWorks />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}

