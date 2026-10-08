"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Sun,
  Phone,
  MessageSquare,
  Menu,
  X,
  Globe,
  Sparkles,
  MapPin,
  Calculator,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  useEffect(() => {
    // Show gentle prompt popup on initial arrival if language is English
    const hasSeenPrompt = sessionStorage.getItem("seen_lang_prompt");
    if (!hasSeenPrompt && language === "en") {
      setShowLanguagePopup(true);
      // Auto-dismiss after 7 seconds
      const timer = setTimeout(() => {
        setShowLanguagePopup(false);
        sessionStorage.setItem("seen_lang_prompt", "true");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [language]);

  const handleToggle = () => {
    setShowLanguagePopup(false);
    sessionStorage.setItem("seen_lang_prompt", "true");
    toggleLanguage();
  };

  const navLinks = [
    { name: t.nav.process, href: "#process", icon: Zap },
    { name: t.nav.calculator, href: "#calculator", icon: Calculator },
    { name: t.nav.whySolar, href: "#why-solar", icon: Sun },
    { name: t.nav.brands, href: "#brands", icon: ShieldCheck },
    { name: t.nav.areas, href: "#areas", icon: MapPin },
    { name: t.nav.dealerProgram, href: "#dealer", icon: ShieldCheck },
    { name: t.nav.faq, href: "#faq", icon: MessageSquare }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Announcement Bar: Subsidy + All Lucknow Service Guarantee */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white text-[11px] py-1.5 px-3 font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left / Center announcement badge */}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded shrink-0">
              PM SURYA GHAR
            </span>
            <span className="text-slate-100 font-medium text-[11px] leading-tight break-words">
              {language === "hi"
                ? "📍₹108,000 सब्सिडी चालू"
                : "📍₹108,000 PM Subsidy Active"}
            </span>
          </div>

          {/* Right quick call link */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="shrink-0 text-amber-300 font-bold text-[10px] sm:text-[11px] hover:underline flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full"
            title="Call Solar Helpline"
          >
            <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="hidden xs:inline">{CONTACT_INFO.phone}</span>
            <span className="xs:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/40 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 group-hover:border-amber-400/60 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.45)] transition-all overflow-hidden">
              {/* Pulsating solar corona aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/25 via-emerald-500/15 to-transparent rounded-xl pointer-events-none" />
              <div className="absolute w-5 h-5 rounded-full bg-amber-400/25 blur-xs solar-corona-pulse pointer-events-none" />

              {/* Realistic rotating sun with solar rays */}
              <div className="relative flex items-center justify-center solar-spin-slow">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 solar-flare-pulse" strokeWidth={2.2} />
              </div>

              {/* Glowing solar photon core */}
              <span className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_#fbbf24] pointer-events-none" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
                  BigIdea<span className="text-emerald-600">Solar</span>
                </span>
                <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded leading-none hidden sm:inline-block">
                  LUCKNOW
                </span>
              </div>
              <p className="text-[10px] text-emerald-700 font-bold leading-tight mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="whitespace-nowrap">
                  {language === "hi" ? "पूरे लखनऊ में सेवा उपलब्ध" : "All Lucknow Service"}
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* 1-Click Language Switcher with Mobile-Safe Popup */}
            <div className="relative">
              <button
                onClick={handleToggle}
                type="button"
                className={`flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border text-[11px] sm:text-xs font-black transition-all active:scale-95 shadow-2xs shrink-0 ${
                  language === "en"
                    ? "bg-amber-50 hover:bg-amber-100 border-amber-300 text-slate-900 ring-2 ring-amber-400/30"
                    : "bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-950"
                }`}
                title="भाषा बदलें / Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="sm:hidden">{t.nav.langShort}</span>
                <span className="hidden sm:inline">{t.nav.langLong}</span>
              </button>

              {/* Language Switcher Prompt: Compact floating tooltip on mobile & desktop */}
              {showLanguagePopup && language === "en" && (
                <div className="fixed top-20 left-3 right-3 sm:absolute sm:top-full sm:right-0 sm:left-auto sm:mt-2 sm:w-80 z-[100] max-w-sm mx-auto sm:mx-0 p-2.5 sm:p-3 bg-slate-950/98 text-white rounded-2xl shadow-2xl border-2 border-amber-400 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Little speech arrow pointing up to the language button */}
                  <div className="absolute -top-2 right-28 sm:right-6 w-3.5 h-3.5 bg-slate-950 border-t-2 border-l-2 border-amber-400 rotate-45" />

                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-lg shrink-0">🇮🇳</span>
                      <div className="min-w-0">
                        <p className="text-xs font-black text-amber-300 leading-tight truncate">
                          हिंदी में पढ़ना चाहते हैं?
                        </p>
                        <p className="text-[10px] text-slate-300 leading-tight mt-0.5 truncate">
                          1-क्लिक में पूरी वेबसाइट हिंदी करें
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={handleToggle}
                        className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 text-[11px] font-black rounded-xl transition-all shadow-xs active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-0.5"
                      >
                        <span>बदलें</span>
                        <span>→</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowLanguagePopup(false);
                          sessionStorage.setItem("seen_lang_prompt", "true");
                        }}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                        aria-label="Close prompt"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Calculator Action */}
            <a
              href="#calculator"
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-black px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xs transition-all active:scale-95 shrink-0"
            >
              <span className="sm:hidden">{t.nav.quoteShort}</span>
              <span className="hidden sm:inline">{t.nav.getQuote}</span>
              <span className="text-amber-300 text-xs">⚡</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 shrink-0"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          {/* All Lucknow Service Trust Banner */}
          <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-4 h-4 text-amber-300" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs font-black text-emerald-950">
                {language === "hi" ? "📍 पूरे लखनऊ में हमारी सर्विस उपलब्ध है" : "📍 All Lucknow We Provide Service"}
              </p>
              <p className="text-[10px] text-emerald-800 font-medium leading-tight mt-0.5 break-words">
                {language === "hi"
                  ? "गोमती नगर, अलीगंज, इंदिरानगर, कल्यानपुर, आशियाना, चिनहट व सभी 110+ वार्डों में 0 रुपया विज़िट चार्ज पर रूफटॉप सर्वे।"
                  : "Gomti Nagar, Aliganj, Indiranagar, Kalyanpur, Ashiyana, Chinhat & all 110+ wards with 100% Free Doorstep Survey."}
              </p>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 text-xs font-bold transition-colors border border-slate-100 min-h-[44px]"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="break-words leading-tight">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Direct Contact Buttons */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-xs transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-xs min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
