"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Sparkles,
  Gift,
  ArrowRight,
  SunMedium,
  Zap,
  Banknote,
  PhoneCall,
  Home
} from "lucide-react";

export default function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-4 pb-8 sm:py-12">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Mobile-First Hero Card */}
        <div className="space-y-4 sm:space-y-6">
          {/* Hero Image Showcase (Matching Screen 1 Mockup) */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-500/30 shadow-xl bg-slate-900 aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src="/images/solar_hero.jpg"
              alt="Lucknow Rooftop Solar Residential Home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

            {/* "All Lucknow Service" pill badge */}
            <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-emerald-400/40 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300">
                {language === "hi" ? "📍 पूरे लखनऊ में हमारी सर्विस उपलब्ध है (0 विजिट चार्ज)" : "📍 All Lucknow Service Available (Free Visit)"}
              </span>
            </div>

            {/* Overlay Title on Mobile & Desktop */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 space-y-1">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                {language === "hi" ? (
                  <>
                    लखनऊ में घर पर <span className="text-emerald-400">रूफटॉप सोलर लगवाएं</span>
                  </>
                ) : (
                  <>
                    Lucknow Mein Ghar Par <span className="text-emerald-400">Rooftop Solar Lagwayein</span>
                  </>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl drop-shadow-xs font-medium">
                {language === "hi"
                  ? "अपने बिजली बिल को शून्य करें और PM Surya Ghar Yojana के तहत ₹78,000 सरकारी सब्सिडी पात्रता चेक करें।"
                  : "Apne bijli bill ko kam karein aur PM Surya Ghar Yojana ke tehat subsidy eligibility check karein."}
              </p>
            </div>
          </div>

          {/* Primary CTA Buttons (Matching Screen 1) */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <a
              href="#calculator"
              className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base text-center shadow-lg shadow-emerald-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <span>{language === "hi" ? "सोलर लागत कैलकुलेटर →" : "Solar Cost Calculator →"}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm text-center border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === "hi" ? `एक्सपर्ट कॉल: ${CONTACT_INFO.phone}` : `Call: ${CONTACT_INFO.phone}`}</span>
            </a>
          </div>

          {/* 3 Pillar Trust Cards (Matching Screen 1: Free Consultation, Site Survey, Subsidy Guidance) */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 text-center">
              <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-1">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] font-bold text-white leading-tight">
                {language === "hi" ? "फ्री कंसल्टेशन" : "Free Consultation"}
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 text-center">
              <div className="w-7 h-7 mx-auto rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-400 mb-1">
                <Home className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] font-bold text-white leading-tight">
                {language === "hi" ? "साइट सर्वे" : "Site Survey"}
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 text-center">
              <div className="w-7 h-7 mx-auto rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 mb-1">
                <Banknote className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] font-bold text-white leading-tight">
                {language === "hi" ? "सब्सिडी सहायता" : "Subsidy Guidance"}
              </p>
            </div>
          </div>

          {/* Exclusive 2% Discount Coupon Banner (Screen 1 Bottom Banner) */}
          <a
            href="#calculator"
            className="block rounded-2xl bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-teal-500/15 border border-amber-400/40 p-3 sm:p-4 backdrop-blur-xs hover:border-amber-400/70 transition-all active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-400 text-slate-950 shrink-0 shadow-xs">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-xs sm:text-sm font-extrabold text-amber-300 truncate">
                    {language === "hi" ? "तुरंत 2% सोलर डिस्काउंट कूपन पाएं" : "Get Instant 2% Solar Discount Coupon"}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5 truncate">
                  {language === "hi"
                    ? "फॉर्म भरें और अपना यूनिक कूपन कोड तुरंत पाएं।"
                    : "Form fill karein aur apna unique coupon code turant paayein."}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
