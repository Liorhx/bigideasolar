"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Banknote,
  Landmark,
  ShieldCheck,
  Wrench,
  TrendingDown,
  Sun
} from "lucide-react";

export default function WhySolarSection() {
  const { language, t } = useLanguage();

  const benefits = [
    {
      icon: Banknote,
      color: "bg-emerald-600 text-white",
      title: language === "hi" ? "बिजली बिल में भारी कमी" : "Lower Electricity Costs",
      desc:
        language === "hi"
          ? "अपनी खुद की बिजली बनाएं और मासिक बिजली बिल को शून्य करें।"
          : "Generate your own electricity and reduce your monthly bill."
    },
    {
      icon: Landmark,
      color: "bg-sky-600 text-white",
      title: language === "hi" ? "सरकारी सब्सिडी (DBT)" : "Government Subsidy",
      desc:
        language === "hi"
          ? "पीएम सूर्य घर योजना के तहत ₹108,000 तक सीधी बैंक सब्सिडी पाएं।"
          : "Eligible residential customers may receive subsidy under PM Surya Ghar."
    },
    {
      icon: Sun,
      color: "bg-amber-500 text-white",
      title: language === "hi" ? "25+ साल का लंबा जीवन" : "25+ Years Life",
      desc:
        language === "hi"
          ? "उच्च गुणवत्ता के टियर-1 पैनल्स 25 साल की वारंटी के साथ आते हैं।"
          : "Quality solar panels are designed for long-term operation."
    },
    {
      icon: ShieldCheck,
      color: "bg-teal-600 text-white",
      title: language === "hi" ? "कंपनी द्वारा संपूर्ण इंस्टालेशन" : "Professional Installation",
      desc:
        language === "hi"
          ? "सर्टिफाइड इंजीनियरों द्वारा रूफटॉप साइट सर्वे और इंस्टालेशन।"
          : "Get connected with trusted installation partners for site survey and installation."
    }
  ];

  return (
    <section id="why-solar" className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
          {/* Section Header (Matching Screen 7) */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {language === "hi" ? "सोलर क्यों लगवाएं?" : "Why Solar?"}
            </h2>
            <p className="text-xs text-slate-500">
              {language === "hi"
                ? "आपके घर और पर्यावरण के लिए एक समझदारी भरा निवेश।"
                : "A smart investment for your home and the environment."}
            </p>
          </div>

          {/* 4 Cards (Matching Screen 7 Mockup list layout) */}
          <div className="space-y-3 pt-1">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 p-3.5 bg-slate-50/60 flex items-start gap-3 transition-colors hover:bg-emerald-50/40 hover:border-emerald-200"
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-xs mt-0.5`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
