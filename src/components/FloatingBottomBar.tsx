"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import { MessageSquare, Phone, Calculator } from "lucide-react";

export default function FloatingBottomBar() {
  const { language } = useLanguage();

  const whatsappMsg = encodeURIComponent(
    language === "hi"
      ? "नमस्ते! मुझे लखनऊ में रूफटॉप सोलर और ₹78,000 सरकारी सब्सिडी की जानकारी चाहिए।"
      : "Hello! I would like details regarding rooftop solar installation and ₹78,000 PM Surya Ghar subsidy in Lucknow."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-emerald-500/30 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-800 text-white border border-slate-700 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-bold">
            {language === "hi" ? "कॉल करें" : "Call"}
          </span>
        </a>

        {/* Calculator Scroll Button */}
        <a
          href="#calculator"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-400 text-slate-950 font-black active:scale-95 transition-transform shadow-sm"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span className="text-xs font-extrabold">
            {language === "hi" ? "कैलकुलेटर" : "Calculator"}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold active:scale-95 transition-transform shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
