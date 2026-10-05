"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const { language } = useLanguage();

  const reviews = [
    {
      name: language === "hi" ? "राजेश श्रीवास्तव" : "Rajesh Srivastava",
      area: "Gomti Nagar, Lucknow",
      system: "3 kW Tata Solar",
      billBefore: "₹3,800",
      billAfter: "₹120",
      subsidy: "₹78,000",
      text:
        language === "hi"
          ? "गोमती नगर में हमारी छत पर 3kW का सिस्टम लगाया गया। बिल ₹3800 से घटकर सिर्फ ₹120 रह गया और ₹78,000 की सब्सिडी 24 दिनों में बैंक खाते में आ गई।"
          : "Installed a 3kW Tata Solar system in Gomti Nagar. Summer bill reduced from ₹3,800 to ₹120. ₹78,000 subsidy credited in 24 days!"
    },
    {
      name: language === "hi" ? "अमित त्रिवेदी" : "Amit Trivedi",
      area: "Aliganj, Lucknow",
      system: "5 kW Waaree Solar",
      billBefore: "₹6,400",
      billAfter: "₹240",
      subsidy: "₹78,000",
      text:
        language === "hi"
          ? "हमारी छत पर 3 एसी दिन भर सोलर से चलते हैं। टीम ने मध्यांचल विद्युत से नेट मीटरिंग का सारा काम खुद करवाया। बेस्ट सोलर सर्विस!"
          : "We run 3 ACs entirely on solar power during daytime. Lucknow Solar team handled all DISCOM net-metering approvals seamlessly."
    }
  ];

  return (
    <section className="py-6 sm:py-10 bg-slate-50">
      <div className="max-w-xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {language === "hi" ? "सत्यापित ग्राहक अनुभव" : "Verified Customer Savings"}
            </h2>
            <p className="text-xs text-slate-500">
              {language === "hi" ? "देखें बिजली बिल में कितनी कमी आई।" : "Real before vs after electricity bills in Lucknow."}
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-50/70 p-3.5 border border-slate-200/80 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    {rev.system} • {rev.subsidy} DBT
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2 rounded-lg border border-slate-200">
                  <span className="text-slate-500">
                    Before: <span className="line-through text-rose-600 font-bold">{rev.billBefore}</span>
                  </span>
                  <span className="text-emerald-700 font-black">
                    Now: {rev.billAfter}/mo
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-snug italic">
                  &quot;{rev.text}&quot;
                </p>

                <div className="pt-1 text-[11px] font-bold text-slate-800">
                  {rev.name} — <span className="text-slate-500 font-normal">{rev.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
