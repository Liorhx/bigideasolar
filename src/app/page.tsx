"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import TrustBanner from "@/components/TrustBanner";
import HeroSection from "@/components/HeroSection";
import SolarCalculator from "@/components/SolarCalculator";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhySolarSection from "@/components/WhySolarSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";
import BrandComparison from "@/components/BrandComparison";
import AreaCoverage from "@/components/AreaCoverage";
import TestimonialsSection from "@/components/TestimonialsSection";
import DealerPartnerSection from "@/components/DealerPartnerSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingBottomBar from "@/components/FloatingBottomBar";

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <TrustBanner />
        <main className="flex-1">
          <HeroSection />
          <SolarCalculator />
          <TestimonialsSection />
          <WhatsAppCTA />
          <WhySolarSection />
          <InstallationProcessSection />
          <BrandComparison />
          <AreaCoverage />

          <FAQSection />
        </main>
        <Footer />
        <FloatingBottomBar />
      </div>
    </LanguageProvider>
  );
}
