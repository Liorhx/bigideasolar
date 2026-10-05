"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolarCalculator from "@/components/SolarCalculator";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhySolarSection from "@/components/WhySolarSection";
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
        <main className="flex-1">
          <HeroSection />
          <SolarCalculator />
          <WhatsAppCTA />
          <WhySolarSection />
          <BrandComparison />
          <AreaCoverage />
          <TestimonialsSection />
          <DealerPartnerSection />
          <FAQSection />
        </main>
        <Footer />
        <FloatingBottomBar />
      </div>
    </LanguageProvider>
  );
}
