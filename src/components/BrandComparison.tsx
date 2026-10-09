"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SOLAR_BRANDS } from "@/lib/constants";
import { ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BrandComparison() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="brands" className="py-2 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
          {/* Header (Matching Screen 8 Mockup) */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {language === "hi" ? "आपके लिए कौन सा ब्रांड सही है?" : "Which Solar Brand Is Right for You?"}
            </h2>
            <p className="text-xs text-slate-500">
              {language === "hi"
                ? "क्वालिटी, वारंटी और कीमत के आधार पर टॉप ब्रांड्स की तुलना करें।"
                : "Compare top brands based on quality, warranty and price range."}
            </p>
          </div>

          {/* 4 Brand Comparison Rows (Matching Screen 8) */}
          <div className="space-y-2 pt-1">
            {SOLAR_BRANDS.map((brand) => {
              const isExpanded = expandedId === brand.id;
              return (
                <div
                  key={brand.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-emerald-300 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpand(brand.id)}
                    className="w-full p-3.5 flex items-center justify-between text-left gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-white shrink-0 shadow-xs ${
                          brand.id === "tata"
                            ? "bg-sky-600"
                            : brand.id === "waaree"
                            ? "bg-emerald-600"
                            : brand.id === "adani"
                            ? "bg-blue-600"
                            : "bg-amber-600"
                        }`}
                      >
                        {brand.name.slice(0, 2).toUpperCase()}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 break-words">
                            {brand.name}
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug break-words">
                          {language === "hi" ? brand.tagline.hi : brand.tagline.en}
                        </p>
                        <p className="text-[11px] font-bold text-emerald-700 mt-0.5">
                          {brand.priceRange}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500 shrink-0">
                      <span className="text-[11px] font-bold text-slate-600">
                        {brand.warrantyYears} yrs
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-90 text-emerald-600" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded detail box */}
                  {isExpanded && (
                    <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/70 space-y-2 animate-in fade-in duration-150">
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="font-bold text-slate-500 text-[10px] block">EFFICIENCY:</span>
                          <span className="font-extrabold text-slate-900">{brand.efficiency}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-500 text-[10px] block">CELL TECH:</span>
                          <span className="font-extrabold text-slate-900 break-words block">{brand.cellType}</span>
                        </div>
                      </div>

                      <div className="space-y-1 pt-1">
                        {(language === "hi" ? brand.features.hi : brand.features.en).map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <a
                          href="#calculator"
                          className="w-full py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1 shadow-xs"
                        >
                          <span>Get Quote for {brand.name}</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-slate-500 leading-tight pt-1">
            *Indicative price range. Final cost depends on system size, installation and additional factors.
          </p>
        </div>
      </div>
    </section>
  );
}
