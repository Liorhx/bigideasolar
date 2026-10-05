"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/lib/constants";
import { MessageSquare, Phone, Sun } from "lucide-react";

export default function WhatsAppCTA() {
  const { language } = useLanguage();

  const whatsappDirectMsg = encodeURIComponent(
    language === "hi"
      ? "नमस्ते! मुझे लखनऊ में अपने घर के लिए सोलर कोटेशन और पीएम सूर्य घर सब्सिडी की जानकारी चाहिए।"
      : "Hello! I would like to get a solar quotation and subsidy guidance for my home in Lucknow."
  );

  return (
    <section className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        {/* Card Frame (Matching Screen 6 Mockup) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Top Header */}
          <div className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-700">
              <MessageSquare className="w-5 h-5 fill-emerald-600 text-white" />
              <h2 className="font-extrabold text-sm sm:text-base text-slate-900">
                {language === "hi" ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}
              </h2>
            </div>

            <p className="text-xs text-slate-600">
              {language === "hi"
                ? "अपना पर्सनलाइज्ड सोलर कोटेशन और एक्सपर्ट सलाह पाएं।"
                : "Get your personalized solar quotation and expert guidance."}
            </p>

            {/* Primary WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${whatsappDirectMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
            >
              <span>{language === "hi" ? "व्हाट्सएप पर जारी रखें →" : "Continue on WhatsApp →"}</span>
            </a>

            {/* Direct Call Link */}
            <div className="text-center pt-1">
              <p className="text-[11px] text-slate-500">
                {language === "hi" ? "या हमें सीधे कॉल करें:" : "Or call us directly"}
              </p>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1 mt-0.5"
              >
                <Phone className="w-3 h-3" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Bottom Clean Energy Imagery Banner (Matching Screen 6 Visual) */}
          <div className="relative aspect-[21/9] w-full bg-slate-900 overflow-hidden">
            <Image
              src="/images/solar_hero.jpg"
              alt="Clean Energy Brighter Tomorrow"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3 sm:p-4">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-black">
                <Sun className="w-3.5 h-3.5" />
                <span>Clean Energy • Brighter Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
