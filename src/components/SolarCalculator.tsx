"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { calculateSolar, SolarCalculationResult } from "@/lib/solar-calc";
import { LUCKNOW_AREAS, CONTACT_INFO } from "@/lib/constants";
import {
  Home,
  Gift,
  Copy,
  Check,
  MessageSquare,
  IndianRupee,
  User,
  Phone,
  MapPin,
  Lock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  Zap
} from "lucide-react";

export default function SolarCalculator() {
  const { language, t } = useLanguage();

  // Step state (1: Questionnaire, 2: Estimated Specs & Brand, 3: Lead Form, 4: Coupon Voucher)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form selections
  const [billRange, setBillRange] = useState<string>("₹1,500 - ₹2,500");
  const [billNumeric, setBillNumeric] = useState<number>(2000);
  const [selectedKw, setSelectedKw] = useState<number>(2);
  const [propertyType, setPropertyType] = useState<string>("Independent House");
  const [hasRooftop, setHasRooftop] = useState<string>("Yes");
  const [selectedBrand, setSelectedBrand] = useState<string>("Tata Power Solar");

  // Lead capture fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Gomti Nagar");
  const [isOwner, setIsOwner] = useState<string>("Yes");
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Output results
  const [calcResult, setCalcResult] = useState<SolarCalculationResult>(() => calculateSolar(2000, 2));
  const [generatedCoupon, setGeneratedCoupon] = useState<string>("SOLAR-8F3K2Q");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState("");

  const billOptions = [
    { label: "₹800 - ₹1,500", value: 1200, size: "1 kW", subsidy: "No subsidy provided", kw: 1 },
    { label: "₹1,500 - ₹2,500", value: 2000, size: "2 kW", subsidy: "₹90,000 Subsidy", kw: 2 },
    { label: "₹2,500 - ₹4,000", value: 3200, size: "3 kW", subsidy: "₹1,08,000 Subsidy", kw: 3 },
    { label: "₹4,000+", value: 5500, size: ">3 kW", subsidy: "₹1,08,000 Max", kw: 4 }
  ];

  const handleBillSelect = (label: string, numeric: number) => {
    setBillRange(label);
    setBillNumeric(numeric);
    const foundOpt = billOptions.find((o) => o.label === label || o.value === numeric);
    const targetKw = foundOpt ? foundOpt.kw : (numeric <= 1500 ? 1 : numeric <= 2500 ? 2 : numeric <= 4000 ? 3 : 4);
    setSelectedKw(targetKw);
    const result = calculateSolar(numeric, targetKw);
    setCalcResult(result);
  };

  const handleKwChange = (kw: number) => {
    setSelectedKw(kw);
    const result = calculateSolar(billNumeric, kw);
    setCalcResult(result);
  };

  const handleCalculateStep1 = () => {
    const foundOpt = billOptions.find((o) => o.label === billRange || o.value === billNumeric);
    const targetKw = foundOpt ? foundOpt.kw : (selectedKw || 2);
    const result = calculateSolar(billNumeric, targetKw);
    setCalcResult(result);
    setStep(2);
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleProceedToForm = () => {
    setStep(3);
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim()) {
      setFormError(language === "hi" ? "कृपया अपना नाम दर्ज करें।" : "Please enter your name.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setFormError(
        language === "hi"
          ? "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।"
          : "Please enter a valid 10-digit phone number."
      );
      return;
    }

    if (!agreeTerms) {
      setFormError(
        language === "hi"
          ? "कृपया आगे बढ़ने के लिए नियम व शर्तों पर टिक करें।"
          : "Please agree to the terms to proceed."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: cleanPhone,
          area: area || "Lucknow",
          systemSize: `${calcResult.recommendedKw} kW`,
          monthlyBill: billRange,
          propertyType,
          hasRooftop,
          preferredBrand: selectedBrand,
          source: "Website Calculator",
          estimatedCost: calcResult.costMax,
          netCost: calcResult.netCostMax,
          subsidy: calcResult.totalSubsidy
        })
      });

      const data = await response.json();
      if (data.success && data.couponCode) {
        setGeneratedCoupon(data.couponCode);
      }

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log("Confetti trigger:", err);
      }

      setStep(4);
      const el = document.getElementById("calculator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      console.error("Lead submission error:", err);
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(generatedCoupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const whatsappLeadMessage = encodeURIComponent(
    language === "hi"
      ? `मैंने BigIdeaSolar वेबसाइट पर ₹${billNumeric}/महीने बिल के लिए ${calcResult.recommendedKw}kW सोलर का एस्टीमेट निकाला है।\n\nसब्सिडी स्थिति: ${
          calcResult.totalSubsidy > 0
            ? `कुल सब्सिडी ₹${calcResult.totalSubsidy.toLocaleString("en-IN")} (केंद्रीय: ₹${calcResult.centralSubsidy.toLocaleString("en-IN")} + यूपी: ₹${calcResult.stateSubsidy.toLocaleString("en-IN")})`
            : "No subsidy provided (1 kW)"
      }\nमेरा कूपन कोड: ${generatedCoupon} (2% छूट)\nनाम: ${fullName || "ग्राहक"}\nइलाका: ${area}\nपसंदीदा ब्रांड: ${selectedBrand}\n\nकृपया मुझे फाइनल Pricing भेजें।`
      : `Hello! I generated an estimate on BigIdeaSolar for a ${calcResult.recommendedKw}kW Solar System (${billRange} Bill).\n\nSubsidy Status: ${
          calcResult.totalSubsidy > 0
            ? `Total Subsidy ₹${calcResult.totalSubsidy.toLocaleString("en-IN")} (Central: ₹${calcResult.centralSubsidy.toLocaleString("en-IN")} + UP State: ₹${calcResult.stateSubsidy.toLocaleString("en-IN")})`
            : "No subsidy provided (1 kW)"
        }\nMy Coupon: ${generatedCoupon} (2% Off)\nName: ${fullName || "Customer"}\nArea: ${area}\nBrand: ${selectedBrand}\n\nPlease send my official quotation with equipment specifications.`
  );

  // Subsidy Slab matrix data with 1 kW explicitly marked "No subsidy provided"
  const subsidyTableRows = [
    { size: "1 kW", central: "No subsidy provided", state: "No subsidy provided", total: "No subsidy provided", kw: 1 },
    { size: "2 kW", central: "₹60,000", state: "₹30,000", total: "₹90,000", kw: 2 },
    { size: "3 kW", central: "₹78,000", state: "₹30,000*", total: "₹1,08,000", kw: 3 },
    { size: ">3 kW", central: "₹78,000", state: "₹30,000*", total: "₹1,08,000", kw: 4 }
  ];

  return (
    <section id="calculator" className="py-1 sm:py-4 bg-slate-50 relative">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        {/* 🎁 Exclusive 2% Discount Notice Box above Calculator */}
        <div className="mb-3.5 p-3 sm:p-3.5 bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border-2 border-amber-400/90 rounded-2xl flex items-center justify-center gap-2.5 shadow-xs text-center">
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 animate-bounce" />
          <p className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-snug">
            {language === "hi"
              ? "🎁 अपना 2% डिस्काउंट कूपन पाने के लिए नीचे फॉर्म भरें!"
              : "🎁 Fill the form below to get your 2% Instant Discount Coupon!"}
          </p>
        </div>

        {/* Step Container Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          {/* Card Top Title Bar */}
          <div className="bg-white border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep((prev) => ((prev - 1) as 1 | 2 | 3))}
                  className="p-1 -ml-1 text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  {step === 1 && (language === "hi" ? "☀️ सोलर कॉस्ट कैलकुलेटर और 2% डिस्काउंट फॉर्म" : "☀️ Solar Cost Calculator & 2% Discount Form")}
                  {step === 2 && (language === "hi" ? "आपका सोलर बजट व सब्सिडी विवरण" : "Your Solar Budget & Subsidy Breakdown")}
                  {step === 3 && (language === "hi" ? "फ्री साइट विजिट और 2% कूपन" : "Get Free Site Visit & 2% Coupon")}
                  {step === 4 && (language === "hi" ? "बधाई हो! आपका डिस्काउंट कूपन" : "Congratulations!")}
                </h2>
                <p className="text-[11px] text-slate-500">
                  {step === 1 && (language === "hi" ? "1 kW से 10 kW तक बजट निकालें, सरकारी सब्सिडी जानें व 2% कूपन पाएं" : "Calculate accurate 1 kW to 10 kW budget, UP + Central subsidies & unlock your 2% discount coupon")}
                  {step === 2 && (language === "hi" ? "अनुशंसित क्षमता और ब्रांड चयन" : "Recommended capacity, subsidy slabs & brand selection")}
                  {step === 3 && (language === "hi" ? "कूपन कोड तुरंत पाने के लिए फॉर्म भरें" : "Fill details & get your unique coupon code instantly")}
                  {step === 4 && (language === "hi" ? "आपका सोलर डिस्काउंट कूपन एक्टिव है" : "Your Solar Discount Coupon is ready")}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
              Step {step}/4
            </span>
          </div>

          <div className="p-4 sm:p-6 space-y-5">
            {/* ======================================================== */}
            {/* STEP 1: Questionnaire with 1 kW Support + Subsidy Slab Matrix */}
            {/* ======================================================== */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* 1. Monthly Electricity Bill */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-extrabold text-slate-800 block">
                      {language === "hi" ? "1. आपका मासिक बिजली बिल (औसत)?" : "1. What is your average monthly electricity bill?"}
                    </label>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      1 kW = No subsidy provided
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {billOptions.map((opt) => {
                      const isSelected = billRange === opt.label;
                      const isNoSubsidy = opt.size === "1 kW";
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => handleBillSelect(opt.label, opt.value)}
                          className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition-all text-left flex flex-col justify-between cursor-pointer ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="font-extrabold">{opt.label}</span>
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : isNoSubsidy
                                ? "bg-slate-200 text-slate-700"
                                : "bg-emerald-100 text-emerald-800"
                            }`}>
                              {opt.size}
                            </span>
                          </div>
                          <span className={`text-[10px] font-semibold mt-1 ${
                            isSelected
                              ? "text-emerald-100"
                              : isNoSubsidy
                              ? "text-rose-600 font-bold"
                              : "text-slate-500"
                          }`}>
                            {opt.subsidy}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Property Type */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-800 block">
                    {language === "hi" ? "2. आप किस प्रकार की प्रॉपर्टी में रहते हैं?" : "2. What type of property is this?"}
                  </label>
                  <div className="space-y-1.5">
                    {[
                      { val: "Independent House", label: "Independent House / Kothi (स्वयं का मकान)" },
                      { val: "Apartment", label: "Apartment / Flat (फ्लैट)" },
                      { val: "Commercial", label: "Shop / Commercial (दुकान / कमर्शियल)" }
                    ].map((p) => {
                      const isSelected = propertyType === p.val;
                      return (
                        <button
                          key={p.val}
                          type="button"
                          onClick={() => setPropertyType(p.val)}
                          className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50/80 border-emerald-500 text-emerald-950 font-bold"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <span>{p.label}</span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Rooftop Availability */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-800 block">
                    {language === "hi" ? "3. क्या आपके पास अपनी खुली छत (rooftop) है?" : "3. Do you have your own open roof?"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: "Yes", label: "Yes (खुली छत है)" },
                      { val: "No", label: "No" },
                      { val: "Not Sure", label: "Not Sure (सर्वे चाहिए)" }
                    ].map((r) => {
                      const isSelected = hasRooftop === r.val;
                      return (
                        <button
                          key={r.val}
                          type="button"
                          onClick={() => setHasRooftop(r.val)}
                          className={`py-2 px-2 rounded-xl font-bold text-xs border transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          <span className="text-[11px]">{r.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ======================================================== */}
                {/* OFFICIAL SUBSIDY SLABS TABLE (Exact match to uploaded image) */}
                {/* ======================================================== */}
                <div className="bg-black text-white rounded-2xl p-4 sm:p-4.5 border border-slate-800 space-y-2.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-black text-white tracking-wide uppercase">
                        {language === "hi" ? "सरकारी सब्सिडी स्लैब (UPNEDA + केंद्र)" : "Official Solar Subsidy Slabs (UP + Central)"}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      100% DBT Bank Transfer
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-bold text-[11px]">
                          <th className="py-2 px-2">Solar Size</th>
                          <th className="py-2 px-2">Central Subsidy</th>
                          <th className="py-2 px-2">UP State Subsidy</th>
                          <th className="py-2 px-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-xs">
                        {subsidyTableRows.map((row) => {
                          const isHighlighted =
                            (row.kw === 1 && calcResult.recommendedKw === 1) ||
                            (row.kw === 2 && calcResult.recommendedKw === 2) ||
                            (row.kw === 3 && calcResult.recommendedKw === 3) ||
                            (row.kw === 4 && calcResult.recommendedKw > 3);

                          return (
                            <tr
                              key={row.size}
                              className={`transition-colors ${
                                isHighlighted
                                  ? "bg-emerald-500/20 text-emerald-300 font-black"
                                  : "text-slate-200"
                              }`}
                            >
                              <td className="py-2.5 px-2 font-bold flex items-center gap-1.5">
                                {isHighlighted && <span className="text-[10px] text-amber-300">★</span>}
                                <span>{row.size}</span>
                              </td>
                              <td className="py-2.5 px-2 font-mono">
                                {row.central === "No subsidy provided" ? (
                                  <span className="text-slate-400 italic text-[11px]">No subsidy provided</span>
                                ) : (
                                  row.central
                                )}
                              </td>
                              <td className="py-2.5 px-2 font-mono">
                                {row.state === "No subsidy provided" ? (
                                  <span className="text-slate-400 italic text-[11px]">No subsidy provided</span>
                                ) : (
                                  row.state
                                )}
                              </td>
                              <td className="py-2.5 px-2 text-right font-mono font-black">
                                {row.total === "No subsidy provided" ? (
                                  <span className="text-slate-400 italic font-normal text-[11px]">No subsidy provided</span>
                                ) : (
                                  <span className="text-amber-300">{row.total}</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-tight pt-1 border-t border-slate-800/80">
                    *Subsidy is applicable for 2 kW and above systems under PM Surya Ghar & UPNEDA schemes. 1 kW system has no subsidy provided.
                  </p>
                </div>

                {/* Calculate CTA Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleCalculateStep1}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.calculator.calcAction}</span>
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* STEP 2: Estimated Budget & Subsidy Breakdown */}
            {/* ======================================================== */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Interactive Solar Size Selector Tabs */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1">
                    <label className="text-xs font-black text-slate-800 uppercase tracking-wide">
                      {language === "hi" ? "सोलर क्षमता चुनें / बदलें:" : "Solar System Size:"}
                    </label>
                    <span className="text-[10px] text-slate-500 font-semibold truncate">
                      {billRange}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {[
                      { kw: 1, label: "1 kW", sub: "No Subsidy" },
                      { kw: 2, label: "2 kW", sub: "₹90k Sub." },
                      { kw: 3, label: "3 kW", sub: "₹1.08L Sub." },
                      { kw: 4, label: ">3 kW", sub: "₹1.08L Sub." }
                    ].map((tab) => {
                      const isSelected = calcResult.recommendedKw === tab.kw || (tab.kw === 4 && calcResult.recommendedKw >= 4);
                      return (
                        <button
                          key={tab.kw}
                          type="button"
                          onClick={() => handleKwChange(tab.kw)}
                          className={`py-2 px-1 rounded-xl border text-center font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20 font-black"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-extrabold">{tab.label}</div>
                          <div
                            className={`text-[9px] sm:text-[10px] mt-0.5 leading-tight ${
                              isSelected
                                ? "text-emerald-100"
                                : tab.kw === 1
                                ? "text-amber-700 font-semibold"
                                : "text-emerald-700 font-semibold"
                            }`}
                          >
                            {tab.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Result Specs Box */}
                <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 p-3.5 sm:p-4.5 space-y-3.5">
                  {/* Recommended Size & Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Home className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wide block truncate">
                          {t.calculator.recommendedSize}
                        </span>
                        <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                          {calcResult.recommendedKw >= 4 ? ">3 kW" : `${calcResult.recommendedKw} kW`} Rooftop Solar
                        </p>
                      </div>
                    </div>
                    <div className="self-start sm:self-center">
                      <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs inline-block ${
                        calcResult.totalSubsidy > 0
                          ? "text-white bg-emerald-700"
                          : "text-amber-900 bg-amber-100 border border-amber-300"
                      }`}>
                        {calcResult.totalSubsidy > 0
                          ? `₹${calcResult.totalSubsidy.toLocaleString("en-IN")} Total Subsidy`
                          : "No subsidy provided"}
                      </span>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="border-t border-emerald-200/70 pt-3 space-y-2 text-xs">
                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-600">
                      <span className="font-medium">Indicative System Cost (Market Price):</span>
                      <span className="font-bold text-slate-800 shrink-0 font-mono">
                        ₹{calcResult.costMin.toLocaleString("en-IN")} - ₹{calcResult.costMax.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-700">
                      <span>Central Govt Subsidy (PM Surya Ghar):</span>
                      <span className={`font-bold font-mono shrink-0 ${calcResult.centralSubsidy > 0 ? "text-emerald-700" : "text-amber-800 text-[11px]"}`}>
                        {calcResult.centralSubsidy > 0 ? `- ₹${calcResult.centralSubsidy.toLocaleString("en-IN")}` : "No subsidy provided"}
                      </span>
                    </div>

                    <div className="flex items-start sm:items-center justify-between gap-2 text-slate-700">
                      <span>UP State Govt Subsidy (UPNEDA):</span>
                      <span className={`font-bold font-mono shrink-0 ${calcResult.stateSubsidy > 0 ? "text-emerald-700" : "text-amber-800 text-[11px]"}`}>
                        {calcResult.stateSubsidy > 0 ? `- ₹${calcResult.stateSubsidy.toLocaleString("en-IN")}` : "No subsidy provided"}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-emerald-600/10 p-2.5 rounded-xl border border-emerald-500/30 gap-1">
                      <span className="text-emerald-950 font-black text-xs">
                        {calcResult.totalSubsidy > 0 ? "Net Cost After Both Subsidies*:" : "Estimated System Price (No Subsidy):"}
                      </span>
                      <span className="font-black text-emerald-800 text-sm sm:text-base font-mono">
                        ₹{calcResult.netCostMin.toLocaleString("en-IN")} - ₹{calcResult.netCostMax.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600 pt-0.5">
                      <span>Expected Monthly Bill Savings:</span>
                      <span className="font-extrabold text-slate-900 font-mono">
                        ₹{calcResult.monthlySavings.toLocaleString("en-IN")}/month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Exact Subsidy Table in Step 2 */}
                <div className="bg-black text-white rounded-2xl p-3.5 sm:p-4 border border-slate-800 space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black uppercase tracking-wide text-white">
                      Official Subsidy Breakdown Table
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      ★ Active: {calcResult.recommendedKw >= 4 ? ">3 kW" : `${calcResult.recommendedKw} kW`}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[300px]">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-bold text-[10px] sm:text-[11px]">
                          <th className="py-2 px-2">Solar Size</th>
                          <th className="py-2 px-2">Central Subsidy</th>
                          <th className="py-2 px-2">UP State Subsidy</th>
                          <th className="py-2 px-2 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-xs">
                        {subsidyTableRows.map((row) => {
                          const isHighlighted =
                            (row.kw === 1 && calcResult.recommendedKw === 1) ||
                            (row.kw === 2 && calcResult.recommendedKw === 2) ||
                            (row.kw === 3 && calcResult.recommendedKw === 3) ||
                            (row.kw === 4 && calcResult.recommendedKw >= 4);

                          return (
                            <tr
                              key={row.size}
                              onClick={() => handleKwChange(row.kw)}
                              className={`transition-colors cursor-pointer ${
                                isHighlighted
                                  ? "bg-emerald-500/20 text-emerald-300 font-black"
                                  : "text-slate-200 hover:bg-slate-900"
                              }`}
                            >
                              <td className="py-2 px-2 font-bold whitespace-nowrap">
                                <span className="flex items-center gap-1.5">
                                  {isHighlighted && <span className="text-[10px] text-amber-300">★</span>}
                                  <span>{row.size}</span>
                                </span>
                              </td>
                              <td className="py-2.5 px-2 font-mono text-[11px]">
                                {row.central === "No subsidy provided" ? (
                                  <span className="text-amber-400/80 text-[10px]">No subsidy provided</span>
                                ) : (
                                  row.central
                                )}
                              </td>
                              <td className="py-2.5 px-2 font-mono text-[11px]">
                                {row.state === "No subsidy provided" ? (
                                  <span className="text-amber-400/80 text-[10px]">No subsidy provided</span>
                                ) : (
                                  row.state
                                )}
                              </td>
                              <td className="py-2.5 px-2 text-right font-mono font-black text-[11px]">
                                {row.total === "No subsidy provided" ? (
                                  <span className="text-amber-400/80 font-bold text-[10px]">No subsidy provided</span>
                                ) : (
                                  <span className="text-amber-300">{row.total}</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Brand Selector 2x2 Grid */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-extrabold text-slate-800 block">
                    {language === "hi" ? "पसंदीदा सोलर ब्रांड चुनें" : "Select Preferred Brand"}
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "tata", name: "TATA POWER SOLAR" },
                      { id: "waaree", name: "Waaree Solar" },
                      { id: "adani", name: "Adani Solar" },
                      { id: "vikram", name: "Vikram Solar" },
                      { id: "other", name: "Other / Let Expert Suggest" }
                    ].map((b) => {
                      const isSelected = selectedBrand === b.name;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedBrand(b.name)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-500"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          } ${b.id === "other" ? "col-span-2" : ""}`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-300"
                            }`}
                          >
                            {isSelected && <div className="w-1 h-1 rounded-full bg-white" />}
                          </div>
                          <span className="break-words leading-tight">{b.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Proceed Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleProceedToForm}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.calculator.proceedDiscount}</span>
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* STEP 3: Lead Form & Coupon Request */}
            {/* ======================================================== */}
            {step === 3 && (
              <form onSubmit={handleSubmitLead} className="space-y-3.5 animate-in fade-in duration-200">
                {/* Gift Header Box */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                  <Gift className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-xs font-bold leading-tight">
                    {language === "hi"
                      ? `विवरण भरें और ${calcResult.recommendedKw}kW सोलर पर अपना 2% डिस्काउंट कूपन तुरंत पाएं`
                      : `Fill in your details to activate your 2% extra discount coupon on ${calcResult.recommendedKw}kW solar.`}
                  </p>
                </div>

                {formError && (
                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                    {formError}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    {t.calculator.fullName} *
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-slate-400 absolute left-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Yadav"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium outline-none focus:border-emerald-600 text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    {t.calculator.phone} *
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="10 digit mobile number"
                      className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium outline-none focus:border-emerald-600 text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* Lucknow Area / Pincode */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    {t.calculator.area} *
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium outline-none focus:border-emerald-600 text-slate-900 bg-white appearance-none cursor-pointer"
                    >
                      {LUCKNOW_AREAS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Do you own the house? */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    Do you own the house?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOwner("Yes")}
                      className={`py-2 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                        isOwner === "Yes"
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      Yes (Owner)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOwner("No")}
                      className={`py-2 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                        isOwner === "No"
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      No (Rented)
                    </button>
                  </div>
                </div>

                {/* Agree Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent-calc"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 text-emerald-600 rounded"
                  />
                  <label htmlFor="consent-calc" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
                    I agree to receive my solar quotation & free survey details on WhatsApp / Call.
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Generating Coupon...</span>
                    ) : (
                      <>
                        <Gift className="w-4 h-4" />
                        <span>Get My 2% Discount Coupon →</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Your information is secure and will only be used for your solar enquiry.</span>
                </p>
              </form>
            )}

            {/* ======================================================== */}
            {/* STEP 4: Coupon Success Voucher */}
            {/* ======================================================== */}
            {step === 4 && (
              <div className="space-y-4 text-center animate-in zoom-in-95 duration-200">
                {/* Gift illustration icon */}
                <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md">
                  <Gift className="w-6 h-6 animate-bounce" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    Congratulations!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Your Solar Discount Coupon is ready
                  </p>
                </div>

                {/* Green Coupon Code Pill */}
                <div className="rounded-2xl bg-emerald-600 text-white p-4 space-y-1.5 shadow-md">
                  <div className="bg-white/15 backdrop-blur-xs rounded-xl py-2 px-3 font-mono font-black text-xl tracking-wider text-amber-300">
                    {generatedCoupon}
                  </div>
                  <p className="text-xs font-black uppercase text-white">
                    2% FLAT OFF • {calcResult.recommendedKw} kW System
                  </p>
                  <p className="text-[10px] text-emerald-100">
                    {calcResult.totalSubsidy > 0
                      ? `Total Subsidy: ₹${calcResult.totalSubsidy.toLocaleString("en-IN")} (Central ₹${calcResult.centralSubsidy.toLocaleString("en-IN")} + UP State ₹${calcResult.stateSubsidy.toLocaleString("en-IN")})`
                      : "1 kW Standard System (No subsidy provided)"}
                  </p>
                </div>

                {/* Copy Coupon Button */}
                <button
                  type="button"
                  onClick={copyCouponCode}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Coupon Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Coupon Code</span>
                    </>
                  )}
                </button>

                {/* WhatsApp Direct Action */}
                <div className="space-y-2 pt-1">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappLeadMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Share Your Coupon on WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-slate-500">
                    Our solar expert will assist you with free rooftop survey and equipment quotation.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline pt-1 block mx-auto cursor-pointer"
                  >
                    Back to Calculator
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
