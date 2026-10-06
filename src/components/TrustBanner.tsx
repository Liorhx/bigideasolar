"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Zap, Banknote, Building, Award, CheckCircle2 } from "lucide-react";

export default function TrustBanner() {
  const { language, t } = useLanguage();
  const tb = t.trustBanner;

  const trustItems = [
    {
      title: tb.upneda,
      sub: language === "hi" ? "उत्तर प्रदेश सरकार मान्यता प्राप्त" : "Official Govt Empanelled",
      icon: Building,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/30"
    },
    {
      title: tb.uppcl,
      sub: language === "hi" ? "स्मार्ट 2-तरफा सोलर मीटर" : "Madhyanchal MVVNL Approved",
      icon: Zap,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30"
    },
    {
      title: tb.dbt,
      sub: language === "hi" ? "सीधा बैंक खाता ट्रांसफर" : "Guaranteed Portal Filing",
      icon: Banknote,
      color: "text-teal-400 bg-teal-400/10 border-teal-400/30"
    },
    {
      title: tb.homes,
      sub: language === "hi" ? "कल्याणपुर, गोमती नगर व सभी वार्ड" : "Across Lucknow Localities",
      icon: Award,
      color: "text-sky-400 bg-sky-400/10 border-sky-400/30"
    }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-2.5 px-3 sm:px-6 relative overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${item.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-black text-white leading-tight break-words flex items-center gap-1">
                    <span>{item.title}</span>
                  </p>
                  <p className="text-[9px] text-slate-400 font-medium leading-tight truncate mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
