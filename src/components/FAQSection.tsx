"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import { ChevronDown, MessageSquare, Sun } from "lucide-react";

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappFaqMsg = encodeURIComponent(
    language === "hi"
      ? "नमस्ते! मुझे सोलर सब्सिडी और इंस्टालेशन के बारे में कुछ सवाल पूछने हैं।"
      : "Hello! I have questions regarding PM Surya Ghar solar subsidy and installation."
  );

  return (
    <section id="faq" className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
          {/* Header (Matching Screen 10 Mockup) */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {language === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
            </h2>
            <p className="text-xs text-slate-500">
              {language === "hi"
                ? "सोलर, सब्सिडी और नेट मीटरिंग से जुड़े सभी जवाब।"
                : "Everything you need to know about rooftop solar in Lucknow."}
            </p>
          </div>

          {/* FAQ Accordion List (Matching Screen 10 Mockup) */}
          <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
            {t.faq.items.slice(0, 6).map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-2.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-extrabold text-slate-800 hover:text-emerald-700 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Sun Support Card (Matching Screen 10 Mockup) */}
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                <Sun className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-xs text-slate-900 break-words">
                  {language === "hi" ? "कोई अन्य सवाल है?" : "Still have questions?"}
                </h4>
                <p className="text-[10px] text-slate-600 leading-snug break-words">
                  {language === "hi"
                    ? "हमारे सोलर लोन व टेक्निकल एक्सपर्ट से व्हाट्सएप पर तुरंत बात करें।"
                    : "Chat with our solar expert on WhatsApp."}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappFaqMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat Now →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
