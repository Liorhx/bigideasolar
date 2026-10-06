"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { calculateSolar, SolarCalculationResult } from "@/lib/solar-calc";
import { SOLAR_BRANDS, LUCKNOW_AREAS, CONTACT_INFO } from "@/lib/constants";
import {
  Zap,
  Home,
  Building2,
  Building,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Gift,
  Copy,
  Check,
  MessageSquare,
  ShieldCheck,
  Sun,
  IndianRupee,
  User,
  Phone,
  MapPin,
  Lock
} from "lucide-react";

export default function SolarCalculator() {
  const { language, t } = useLanguage();

  // Step state (1: Questionnaire, 2: Estimated Specs & Brand, 3: Lead Form, 4: Coupon Voucher)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form selections
  const [billRange, setBillRange] = useState<string>("₹2,000 - ₹3,000");
  const [billNumeric, setBillNumeric] = useState<number>(2500);
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
  const [calcResult, setCalcResult] = useState<SolarCalculationResult>(() => calculateSolar(2500));
  const [generatedCoupon, setGeneratedCoupon] = useState<string>("SOLAR-8F3K2Q");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState("");

  const billOptions = [
    { label: "₹1,000 - ₹2,000", value: 1500 },
    { label: "₹2,000 - ₹3,000", value: 2500 },
    { label: "₹3,000 - ₹5,000", value: 4000 },
    { label: "₹5,000+", value: 6500 }
  ];

  const handleBillSelect = (label: string, numeric: number) => {
    setBillRange(label);
    setBillNumeric(numeric);
  };

  const handleCalculateStep1 = () => {
    const result = calculateSolar(billNumeric);
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
          source: "Website",
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
      ? `नमस्ते! मैंने BigIdeaSolar (बिग आइडिया सोलर) वेबसाइट पर ₹${billNumeric}/महीने बिल के लिए ${calcResult.recommendedKw}kW सोलर का एस्टीमेट निकाला है।\n\nमेरा कूपन कोड: ${generatedCoupon} (2% छूट)\nनाम: ${fullName || "ग्राहक"}\nइलाका: ${area}\nपसंदीदा ब्रांड: ${selectedBrand}\n\nकृपया मुझे पीएम सूर्य घर सब्सिडी का कोटेशन भेजें।`
      : `Hello! I generated an estimate on BigIdeaSolar for a ${calcResult.recommendedKw}kW Solar System (${billRange} Bill).\n\nMy Coupon: ${generatedCoupon} (2% Off)\nName: ${fullName || "Customer"}\nArea: ${area}\nBrand: ${selectedBrand}\n\nPlease send my quotation with PM Surya Ghar subsidy details.`
  );

  return (
    <section id="calculator" className="py-6 sm:py-12 bg-slate-50 relative">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        {/* Step Container Card (Matching Screens 2, 3, 4, 5) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          {/* Card Top Title Bar */}
          <div className="bg-white border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep((prev) => ((prev - 1) as 1 | 2 | 3))}
                  className="p-1 -ml-1 text-slate-600 hover:text-slate-900 rounded-lg"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  {step === 1 && (language === "hi" ? "सोलर कॉस्ट कैलकुलेटर" : "Solar Cost Calculator")}
                  {step === 2 && (language === "hi" ? "आपका अनुमानित सोलर बजट" : "Your Estimated Solar Specs")}
                  {step === 3 && (language === "hi" ? "फ्री सोलर कोटेशन और 2% कूपन" : "Get Free Quote & 2% Coupon")}
                  {step === 4 && (language === "hi" ? "बधाई हो! आपका डिस्काउंट कूपन" : "Congratulations!")}
                </h2>
                <p className="text-[11px] text-slate-500">
                  {step === 1 && (language === "hi" ? "पता करें आपके घर के लिए approximate solar budget" : "Pata karein aapke ghar ke liye approximate solar budget")}
                  {step === 2 && (language === "hi" ? "अनुशंसित क्षमता और ब्रांड चयन" : "Recommended size & preferred brand")}
                  {step === 3 && (language === "hi" ? "कूपन कोड तुरंत पाने के लिए फॉर्म भरें" : "Fill details & get a unique coupon code instantly")}
                  {step === 4 && (language === "hi" ? "आपका सोलर डिस्काउंट कूपन एक्टिव है" : "Your Solar Discount Coupon is ready")}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
              Step {step}/4
            </span>
          </div>

          <div className="p-4 sm:p-6">
            {/* ======================================================== */}
            {/* SCREEN 2: Questionnaire (Matching Screen 2 of Mockup) */}
            {/* ======================================================== */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* 1. Monthly Electricity Bill */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-800 block">
                    {language === "hi" ? "1. आपका मासिक बिजली बिल (औसत)?" : "1. Aapka monthly electricity bill (average)"}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {billOptions.map((opt) => {
                      const isSelected = billRange === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => handleBillSelect(opt.label, opt.value)}
                          className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition-all text-center ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Property Type */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-800 block">
                    {language === "hi" ? "2. आप किस प्रकार की प्रॉपर्टी में रहते हैं?" : "2. Aap kis type ke property mein rehte hain?"}
                  </label>
                  <div className="space-y-1.5">
                    {[
                      { val: "Independent House", label: "Independent House" },
                      { val: "Apartment", label: "Apartment" },
                      { val: "Commercial", label: "Commercial" }
                    ].map((p) => {
                      const isSelected = propertyType === p.val;
                      return (
                        <button
                          key={p.val}
                          type="button"
                          onClick={() => setPropertyType(p.val)}
                          className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                            isSelected
                              ? "bg-emerald-50/70 border-emerald-500 text-emerald-950 font-bold"
                              : "bg-white border-slate-200 text-slate-700"
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
                    {language === "hi" ? "3. क्या आपके पास अपनी छत (rooftop) है?" : "3. Kya aapke paas apni chhat (rooftop) hai?"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: "Yes", label: "Yes" },
                      { val: "No", label: "No" },
                      { val: "Not Sure", label: "Not Sure" }
                    ].map((r) => {
                      const isSelected = hasRooftop === r.val;
                      return (
                        <button
                          key={r.val}
                          type="button"
                          onClick={() => setHasRooftop(r.val)}
                          className={`py-2 px-2 rounded-xl font-bold text-xs border transition-all text-center flex items-center justify-center gap-1 ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          <span>{r.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Calculate CTA Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCalculateStep1}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{t.calculator.calcAction}</span>
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* SCREEN 3: Estimated Budget & Brand (Screen 3 Mockup) */}
            {/* ======================================================== */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Result Specs Box (Matching Screen 3 Green Framed Box) */}
                <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/40 p-4 space-y-3">
                  {/* Recommended Size with House Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wide block">
                        {t.calculator.recommendedSize}
                      </span>
                      <p className="text-xl font-black text-slate-900 leading-tight">
                        {calcResult.recommendedKw} kW
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-emerald-200/60 pt-2.5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 font-medium">Indicative System Cost:</span>
                      <span className="font-extrabold text-slate-900">
                        ₹{calcResult.costMin.toLocaleString("en-IN")} - ₹{calcResult.costMax.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-emerald-800 font-bold">After Estimated Subsidy*:</span>
                      <span className="font-black text-emerald-700 text-sm">
                        ₹{calcResult.netCostMin.toLocaleString("en-IN")} - ₹{calcResult.netCostMax.toLocaleString("en-IN")}*
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-tight pt-1 border-t border-emerald-200/60">
                    *Subsidy is subject to government scheme eligibility, approved equipment and installation requirements.
                  </p>
                </div>

                {/* Brand Selector 2x2 Grid (Matching Screen 3 Mockup) */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-800 block">
                    {language === "hi" ? "पसंदीदा ब्रांड चुनें" : "Select Preferred Brand"}
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "tata", name: "TATA POWER SOLAR", color: "text-sky-700" },
                      { id: "waaree", name: "Waaree", color: "text-emerald-700" },
                      { id: "adani", name: "Adani Solar", color: "text-blue-700" },
                      { id: "vikram", name: "Vikram Solar", color: "text-amber-700" },
                      { id: "other", name: "Other", color: "text-slate-700" }
                    ].map((b) => {
                      const isSelected = selectedBrand === b.name;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedBrand(b.name)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? "bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-500"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          } ${b.id === "other" ? "col-span-2" : ""}`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
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
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{t.calculator.proceedDiscount}</span>
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* SCREEN 4: Lead Form & Coupon (Screen 4 Mockup) */}
            {/* ======================================================== */}
            {step === 3 && (
              <form onSubmit={handleSubmitLead} className="space-y-3.5 animate-in fade-in duration-200">
                {/* Gift Header Box */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                  <Gift className="w-5 h-5 text-amber-600 shrink-0" />
                  <p className="text-xs font-bold leading-tight">
                    {language === "hi"
                      ? "विवरण भरें और अपना 2% डिस्काउंट कूपन तुरंत पाएं"
                      : "Fill in your details and get a unique coupon code instantly."}
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
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium outline-none focus:border-emerald-600 text-slate-900 bg-white appearance-none"
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
                      className={`py-2 rounded-xl font-bold text-xs border transition-all ${
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
                      className={`py-2 rounded-xl font-bold text-xs border transition-all ${
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
                    I agree to the Terms & Conditions and Privacy Policy
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Generating Coupon...</span>
                    ) : (
                      <>
                        <Gift className="w-4 h-4" />
                        <span>Get My Free Coupon →</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Your information is secure and will only be used for your enquiry.</span>
                </p>
              </form>
            )}

            {/* ======================================================== */}
            {/* SCREEN 5: Coupon Success Voucher (Screen 5 Mockup) */}
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

                {/* Green Coupon Code Pill (Matching Screen 5 Mockup) */}
                <div className="rounded-2xl bg-emerald-600 text-white p-4 space-y-1.5 shadow-md">
                  <div className="bg-white/15 backdrop-blur-xs rounded-xl py-2 px-3 font-mono font-black text-xl tracking-wider text-amber-300">
                    {generatedCoupon}
                  </div>
                  <p className="text-xs font-black uppercase text-white">
                    2% OFF
                  </p>
                  <p className="text-[10px] text-emerald-100">
                    Valid for your solar installation quotation
                  </p>
                </div>

                {/* Copy Coupon Button */}
                <button
                  type="button"
                  onClick={copyCouponCode}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
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

                {/* WhatsApp Direct Action (Matching Screen 5 Mockup) */}
                <div className="space-y-2 pt-1">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappLeadMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Get Instant Quote on WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-slate-500">
                    Our solar expert will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline pt-1 block mx-auto"
                  >
                    Back to Home
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
