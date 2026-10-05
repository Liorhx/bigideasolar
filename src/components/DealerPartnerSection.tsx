"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  TrendingUp,
  CheckCircle2,
  Send,
  Users,
  Award
} from "lucide-react";

export default function DealerPartnerSection() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    city: "Lucknow",
    experience: "1-3 Years",
    expectedVolume: "20-40 kW"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.phone) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/dealer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="dealer" className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl border border-emerald-500/30 p-4 sm:p-6 shadow-md space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full mb-1">
              <TrendingUp className="w-3 h-3" /> DEALER PROGRAM
            </div>
            <h2 className="text-base sm:text-lg font-black text-white leading-tight">
              {language === "hi"
                ? "सोलर पार्टनर / डीलर बनें (कमाएं ₹50,000+)"
                : "Become an Authorized Solar Partner"}
            </h2>
            <p className="text-xs text-slate-300">
              {language === "hi"
                ? "प्रति माह ₹15,000 से ₹50,000+ कमाएं। पूरा टेक्निकल व डिस्कॉम सपोर्ट।"
                : "Earn ₹15,000 to ₹50,000+ per installation with complete DISCOM support."}
            </p>
          </div>

          {/* Value points */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Wholesale Rates</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Local Lead Dispatch</span>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-center space-y-1 animate-in zoom-in-95">
              <p className="text-xs font-black text-emerald-300">
                Application Received!
              </p>
              <p className="text-[11px] text-slate-300">
                Our Channel Manager will contact you with wholesale pricing within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
              {errorMsg && (
                <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-400 text-rose-200 text-xs font-bold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name *"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number *"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Business Name"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500"
                />
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="City (UP)"
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Partner Application →</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
