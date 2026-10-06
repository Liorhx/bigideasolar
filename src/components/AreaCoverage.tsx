"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LUCKNOW_AREAS } from "@/lib/constants";
import { MapPin, CheckCircle2 } from "lucide-react";

export default function AreaCoverage() {
  const { language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<string>("Gomti Nagar");
  const [showStatus, setShowStatus] = useState(false);

  const displayAreas = [
    "Gomti Nagar",
    "Indira Nagar",
    "Aliganj",
    "Mahanagar",
    "Jankipuram",
    "Chinhat",
    "Faizabad Road",
    "Sultanpur Road",
    "Ashiyana",
    "Alambagh",
    "Vrindavan Yojana",
    "Rajajipuram",
    "Lucknow Cantonment",
    "Bakshi Ka Talab"
  ];

  const handleCheckArea = () => {
    setShowStatus(true);
  };

  return (
    <section id="areas" className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-emerald-600" />
              <span>{language === "hi" ? "100% लखनऊ कवरेज" : "100% Lucknow Coverage"}</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {language === "hi" ? "पूरे लखनऊ में हमारी सर्विस उपलब्ध है" : "All Lucknow We Provide Service"}
            </h2>
            <p className="text-xs text-slate-600">
              {language === "hi"
                ? "गोमती नगर, अलीगंज, इंदिरानगर, कल्यानपुर, आशियाना समेत लखनऊ के सभी 110+ वार्डों और इलाकों में 0 रुपया विज़िट चार्ज पर रूफटॉप सोलर सर्वे उपलब्ध है।"
                : "Free doorstep rooftop solar survey and prompt installation across all 110+ wards and localities in Lucknow."}
            </p>
          </div>

          {/* 2-Column Grid of Areas (Matching Screen 9 Mockup) */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {displayAreas.map((areaName) => {
              const isSelected = selectedArea === areaName;
              return (
                <button
                  key={areaName}
                  type="button"
                  onClick={() => {
                    setSelectedArea(areaName);
                    setShowStatus(true);
                  }}
                  className={`py-2.5 px-2 sm:px-3 rounded-xl border text-xs font-semibold text-center transition-all break-words leading-tight flex items-center justify-center min-h-[44px] ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span>{areaName}</span>
                </button>
              );
            })}
          </div>

          {showStatus && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-between gap-2 animate-in fade-in duration-150">
              <div className="flex items-center gap-1.5 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="break-words">Active service & free survey in {selectedArea}</span>
              </div>
              <a href="#calculator" className="text-emerald-700 underline text-xs font-extrabold shrink-0 ml-2 whitespace-nowrap">
                Book Survey
              </a>
            </div>
          )}

          {/* Big Green CTA Button (Matching Screen 9) */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleCheckArea}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
            >
              <span>{language === "hi" ? "मेरे क्षेत्र में उपलब्धता जांचें →" : "Check Availability in My Area →"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
