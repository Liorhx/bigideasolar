"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Zap,
  Building2,
  FileCheck2,
  BadgeCheck,
  Camera,
  Banknote,
  PiggyBank,
  CheckCircle2,
  Clock,
  ArrowRight,
  PhoneCall,
  Sparkles,
  ShieldAlert,
  CreditCard,
  FileText,
  Home,
  Check
} from "lucide-react";

export default function InstallationProcessSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"loan" | "cash">("loan");

  const p = t.processSection;

  return (
    <section id="process" className="py-8 sm:py-14 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>{p.badge}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {p.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* Tab Switcher: Cash vs Bank Loan */}
        <div className="flex p-1.5 bg-slate-200/80 backdrop-blur-md rounded-2xl max-w-xl mx-auto mb-8 shadow-inner border border-slate-300/60">
          <button
            type="button"
            onClick={() => setActiveTab("loan")}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === "loan"
                ? "bg-white text-emerald-950 shadow-md ring-1 ring-slate-900/5 scale-[1.01]"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            <Building2 className={`w-4 h-4 ${activeTab === "loan" ? "text-emerald-600" : "text-slate-400"}`} />
            <span className="break-words">{p.loanTabTitle}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cash")}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === "cash"
                ? "bg-white text-emerald-950 shadow-md ring-1 ring-slate-900/5 scale-[1.01]"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            <Zap className={`w-4 h-4 ${activeTab === "cash" ? "text-amber-500" : "text-slate-400"}`} />
            <span className="break-words">{p.cashTabTitle}</span>
          </button>
        </div>

        {/* TAB 1: BANK LOAN + SUBSIDY (Detailed 5-Step Assisted Pathway) */}
        {activeTab === "loan" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Overview Banner */}
            <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white rounded-3xl p-4 sm:p-6 border border-emerald-500/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {p.loanTabBadge}
                    </span>
                    <span className="text-emerald-300 text-xs font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {p.loanTimeline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {p.loanIntro}
                  </p>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="shrink-0 w-full sm:w-auto py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{p.callExpertButton}</span>
                </a>
              </div>
            </div>

            {/* 5 Step Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* STEP 1: Document Collection & Bank Assistance */}
              <div className="md:col-span-2 bg-white rounded-3xl border-2 border-emerald-500/40 p-4 sm:p-6 shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                    1
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                        {p.step1Title}
                      </h3>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {p.step1Sub}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.step1Desc}
                    </p>
                  </div>
                </div>

                {/* 4 Required Documents Checklist Cards */}
                <div className="pt-2">
                  <h4 className="text-xs font-black text-slate-800 mb-2.5 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>{p.docsRequiredTitle}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-slate-900 leading-tight">{p.doc1}</p>
                        <p className="text-[10px] text-slate-500">ID & Address Proof</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Banknote className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-slate-900 leading-tight">{p.doc2}</p>
                        <p className="text-[10px] text-slate-500">For Subsidy & Loan</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Home className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-slate-900 leading-tight">{p.doc3}</p>
                        <p className="text-[10px] text-slate-500">Roof Ownership Proof</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-slate-900 leading-tight">{p.doc4}</p>
                        <p className="text-[10px] text-slate-500">Current Discom Bill</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{p.step1Assistance}</span>
                  </div>
                </div>
              </div>

              {/* STEP 2: Loan Approval in 1-2 Weeks */}
              <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2 relative">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      {p.step2Title}
                    </h3>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full inline-block">
                      {p.step2Sub}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {p.step2Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3: Installation & Geotagged Photo */}
              <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2 relative">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      {p.step3Title}
                    </h3>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-block">
                      {p.step3Sub}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {p.step3Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 4: ₹78,000 Subsidy in Bank */}
              <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2 relative">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      {p.step4Title}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-block">
                      {p.step4Sub}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {p.step4Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 5: Slash Loan + Saved Bills Pay Remaining EMI */}
              <div className="bg-white rounded-3xl border-2 border-amber-400 p-4 sm:p-5 shadow-xs space-y-2 relative bg-amber-50/20">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-amber-500 to-emerald-600 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      {p.step5Title}
                    </h3>
                    <span className="text-[10px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full inline-block">
                      {p.step5Sub}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed pt-1 font-medium">
                      {p.step5Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Example Breakdown: How Solar Pays For Itself */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-7 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-black text-amber-300 flex items-center gap-1.5">
                  <PiggyBank className="w-4 h-4 text-emerald-400" />
                  <span>{p.financeGraphicTitle}</span>
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {p.financeGraphicDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <p className="text-[11px] text-slate-400 font-semibold">{p.prevBillLabel}</p>
                  <p className="text-lg font-black text-rose-400">₹3,500 <span className="text-xs font-normal text-slate-400">/ माह</span></p>
                  <p className="text-[10px] text-slate-400">Paid to electricity board</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <p className="text-[11px] text-slate-400 font-semibold">{p.subsidySlashLabel}</p>
                  <p className="text-lg font-black text-emerald-400">+₹108,000</p>
                  <p className="text-[10px] text-emerald-300">Directly into your bank</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <p className="text-[11px] text-slate-400 font-semibold">{p.monthlyEmiLabel}</p>
                  <p className="text-lg font-black text-amber-300">~₹2,800 <span className="text-xs font-normal text-slate-400">/ माह</span></p>
                  <p className="text-[10px] text-amber-200/80">Covered by bill savings</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-900/80 to-teal-900/80 border border-emerald-400/50 space-y-1">
                  <p className="text-[11px] text-emerald-200 font-semibold">{p.netBenefitLabel}</p>
                  <p className="text-lg font-black text-white">+₹700 <span className="text-xs font-normal text-emerald-200">/ माह बचत</span></p>
                  <p className="text-[10px] text-emerald-300 font-bold">+ 25 Yr Free Solar Asset!</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-medium leading-relaxed">
                {p.zeroBurdenNote}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CASH PAYMENT FAST TRACK (2-3 Days Installation) */}
        {activeTab === "cash" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Cash Overview Banner */}
            <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-4 sm:p-6 border border-amber-500/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {p.cashTabBadge}
                    </span>
                    <span className="text-amber-300 text-xs font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {p.cashTimeline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {language === "hi"
                      ? "यदि आप एकमुश्त भुगतान करके तुरंत सोलर लगाना चाहते हैं, तो हमारी टीम 48 से 72 घंटे के अंदर आपके घर पर सोलर पैनल चालू कर देती है!"
                      : "For upfront payment customers, our verified technicians complete rooftop survey, structure mounting and inverter wiring within 48-72 hours!"}
                  </p>
                </div>

                <a
                  href="#calculator"
                  className="shrink-0 w-full sm:w-auto py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs text-center transition-colors shadow-md flex items-center justify-center gap-1"
                >
                  <span>{language === "hi" ? "कैश डिस्काउंट कैलकुलेट करें →" : "Calculate Cash Discount →"}</span>
                </a>
              </div>
            </div>

            {/* 3 Step Cash Pathway */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-xs">
                  1
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  {p.cashStep1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.cashStep1Desc}
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                  2
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  {p.cashStep2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.cashStep2Desc}
                </p>
              </div>

              <div className="bg-white rounded-3xl border-2 border-emerald-500 p-5 shadow-xs space-y-3 bg-emerald-50/30">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                  3
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  {p.cashStep3Title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {p.cashStep3Desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section Bottom Call to Action Card */}
        <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm sm:text-base font-black text-emerald-950">
              {p.ctaTitle}
            </h4>
            <p className="text-xs text-emerald-800 font-medium">
              {language === "hi"
                ? "हमारे सोलर लोन व सब्सिडी कंसलटेंट से मुफ्त सलाह पाने के लिए अभी फॉर्म भरें या कॉल करें।"
                : "Talk to our Lucknow solar loan and subsidy specialists with zero commitment."}
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="#calculator"
              className="flex-1 sm:flex-initial py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl text-center shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>{p.ctaButton}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
