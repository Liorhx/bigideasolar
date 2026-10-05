"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO, LUCKNOW_AREAS } from "@/lib/constants";
import { Sun, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-8 pb-20 sm:pb-10 border-t border-slate-800">
      <div className="max-w-xl sm:max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 pb-6 border-b border-slate-800 text-center sm:text-left">
          {/* Brand Info */}
          <div className="space-y-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs">
                <Sun className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                BigIdea<span className="text-emerald-400">Solar</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>UPNEDA & PM Surya Ghar Registered Channel Partner</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400 pt-2 text-left">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-[11px] leading-snug">{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-4 text-center space-y-1 text-[11px] text-slate-500">
          <p>© 2026 BigIdeaSolar. All Rights Reserved.</p>
          <p className="text-[10px] text-slate-600">
            *Subsidy is subject to MNRE portal verification & UPPCL net meter installation.
          </p>
        </div>
      </div>
    </footer>
  );
}
