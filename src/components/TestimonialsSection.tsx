"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Banknote,
  Quote,
  Sparkles
} from "lucide-react";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const installations = [
    {
      id: 1,
      image: "/images/solar1.jpg",
      name: language === "hi" ? "राजेश श्रीवास्तव" : "Rajesh Srivastava",
      area: language === "hi" ? "गोमती नगर विस्तार, लखनऊ" : "Gomti Nagar Extension, Lucknow",
      system: language === "hi" ? "3 kW टाटा सोलर बाईफेशियल" : "3 kW Tata Solar Bifacial",
      brand: "Tata Solar",
      billBefore: "₹4,200",
      billAfter: "₹110",
      savingsPercent: "97%",
      subsidy: "₹108,000",
      subsidyDays: language === "hi" ? "24 दिनों में प्राप्त" : "Received in 24 Days",
      text:
        language === "hi"
          ? "गोमती नगर में हमारी छत पर 3kW का टाटा सोलर सिस्टम लगाया गया। गर्मी का बिजली बिल ₹4,200 से घटकर सिर्फ ₹110 रह गया और ₹108,000 की सरकारी सब्सिडी 24 दिनों में सीधे बैंक खाते में आ गई।"
          : "Installed a 3kW Tata Solar system in Gomti Nagar. Summer bill reduced from ₹4,200 to just ₹110/month. ₹108,000 Central + UP State subsidy was credited to my bank account in 24 days!"
    },
    {
      id: 2,
      image: "/images/solar2.jpg",
      name: language === "hi" ? "अनिता त्रिवेदी" : "Anita Trivedi",
      area: language === "hi" ? "सेक्टर-डी, अलीगंज, लखनऊ" : "Sector D, Aliganj, Lucknow",
      system: language === "hi" ? "5 kW वारी मोनो PERC" : "5 kW Waaree Mono PERC",
      brand: "Waaree Solar",
      billBefore: "₹7,500",
      billAfter: "₹280",
      savingsPercent: "96%",
      subsidy: "₹108,000",
      subsidyDays: language === "hi" ? "100% DBT ट्रांसफर" : "100% DBT Transfer",
      text:
        language === "hi"
          ? "दिन भर हमारे घर के 3 एसी सीधे सोलर से चलते हैं। बिग आइडिया सोलर टीम ने मध्यांचल विद्युत से नेट-मीटरिंग और सब्सिडी का सारा काम खुद करवाया। कोई झंझट नहीं, बेहतरीन काम!"
          : "We run 3 inverter ACs all day on solar power. BigIdeaSolar handled all DISCOM net-metering approvals and paperwork seamlessly. Zero tension, huge savings!"
    },
    {
      id: 3,
      image: "/images/solar3.jpg",
      name: language === "hi" ? "डॉ. वंदना मिश्रा" : "Dr. Vandana Mishra",
      area: language === "hi" ? "सेक्टर-14, इंदिरानगर, लखनऊ" : "Sector 14, Indira Nagar, Lucknow",
      system: language === "hi" ? "3.3 kW अडानी हाई-एफिशिएंसी" : "3.3 kW Adani Solar High-Efficiency",
      brand: "Adani Solar",
      billBefore: "₹4,800",
      billAfter: "₹140",
      savingsPercent: "97%",
      subsidy: "₹108,000",
      subsidyDays: language === "hi" ? "डीबीटी बैंक खाता जमा" : "Direct Bank Credit",
      text:
        language === "hi"
          ? "सोलर स्ट्रक्चर की क्वालिटी बहुत मजबूत है जो तेज आंधी-तूफान आसानी से झेल सकती है। मात्र 48 घंटे में पूरा इंस्टालेशन हो गया और मोबाइल ऐप पर रोज़ की बिजली बचत देखने में बहुत आसानी रहती है।"
          : "Galvanized heavy-duty structure withstands high winds easily. Rapid installation in just 48 hours and live mobile app monitoring allows daily generation tracking."
    },
    {
      id: 4,
      image: "/images/solar4.jpg",
      name: language === "hi" ? "सुरेश अग्रवाल" : "Suresh Agarwal",
      area: language === "hi" ? "आशियाना, एलडीए कॉलोनी, लखनऊ" : "Ashiyana, LDA Colony, Lucknow",
      system: language === "hi" ? "3 kW टाटा पावर सोलर" : "3 kW Tata Power Solar",
      brand: "Tata Solar",
      billBefore: "₹3,900",
      billAfter: "₹120",
      savingsPercent: "97%",
      subsidy: "₹108,000",
      subsidyDays: language === "hi" ? "बैंक लोन + सब्सिडी" : "Bank Loan + Subsidy",
      text:
        language === "hi"
          ? "बिग आइडिया सोलर की मदद से आशियाना में हमारी छत पर 3kW का सोलर सिस्टम लगा। आसान बैंक लोन सहायता मिली और बिजली बिल की बचत से ही लोन की किस्त आसानी से निकल जाती है। ₹108,000 की सब्सिडी भी समय पर बैंक में आ गई!"
          : "Got a 3kW Tata Solar system installed on our Ashiyana rooftop. BigIdeaSolar helped with a low-interest solar bank loan where electricity bill savings easily cover the EMI. Truly zero out-of-pocket investment!"
    },
    {
      id: 5,
      image: "/images/solar5.jpg",
      name: language === "hi" ? "इंजीनियर प्रदीप वर्मा" : "Er. Pradeep Verma",
      area: language === "hi" ? "कल्याणपुर, रिंग रोड, लखनऊ" : "Kalyanpur, Ring Road, Lucknow",
      system: language === "hi" ? "4 kW वारी मोनो PERC" : "4 kW Waaree Mono PERC",
      brand: "Waaree Solar",
      billBefore: "₹5,800",
      billAfter: "₹160",
      savingsPercent: "97%",
      subsidy: "₹108,000",
      subsidyDays: language === "hi" ? "यूपीपीसीएल नेट-मीटरिंग" : "UPPCL Net-Meter Approved",
      text:
        language === "hi"
          ? "कल्याणपुर में हमारे घर पर 4kW का सोलर सिस्टम लगवाया। गर्मी में ₹5,800 आने वाला बिजली का बिल घटकर सिर्फ ₹160 रह गया। यूपीपीसीएल नेट-मीटरिंग और ₹108,000 सरकारी सब्सिडी की प्रक्रिया बहुत तेज और पारदर्शी रही!"
          : "Installed a 4kW Waaree Solar system at our Kalyanpur residence. Summer bill dropped from ₹5,800 to just ₹160/month. The UPPCL net-metering and ₹108,000 DBT subsidy process was completed swiftly and transparently!"
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % installations.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, installations.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % installations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + installations.length) % installations.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const current = installations[currentIndex];

  return (
    <section className="py-2 sm:py-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-black shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {language === "hi"
                ? "📍 पूरे लखनऊ में 100+ सत्यापित सोलर इंस्टालेशन"
                : "📍 100+ Verified Lucknow Rooftop Installations"}
            </span>
          </div>
          {/* <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {language === "hi"
              ? "लखनऊ के घरों का असली अनुभव और बिजली बिल बचत"
              : "Real Lucknow Homes • Real Zero Electricity Bills"}
          </h2> */}
          {/* <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            {language === "hi"
              ? "देखें गोमती नगर, अलीगंज, इंदिरानगर, आशियाना व कल्याणपुर में ₹108,000 सब्सिडी और शून्य बिजली बिल के परिणाम।"
              : "Explore verified before & after bills, ₹108,000 DBT subsidies, and high-efficiency solar systems installed across Lucknow."}
          </p> */}
        </div>

        {/* Carousel Showcase Card */}
        <div
          className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Image Showcase Column (55% width on desktop) */}
            <div className="md:col-span-7 relative min-h-[260px] sm:min-h-[340px] md:min-h-[420px] bg-slate-950 overflow-hidden group">
              <Image
                key={current.image}
                src={current.image}
                alt={`${current.name} - ${current.area} Solar Installation`}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 550px"
              />
              {/* Image Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/40 hidden md:block" />

              {/* Floating Verified Badge (Top-Left) */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                <span className="bg-slate-950/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full border border-emerald-400/40 flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{language === "hi" ? "सत्यापित छत इंस्टालेशन" : "Verified Lucknow Rooftop"}</span>
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 text-slate-950" />
                  <span>{current.brand}</span>
                </span>
              </div>

              {/* Floating Photo Counter (Top-Right) */}
              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-slate-200 text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/10 z-10">
                {currentIndex + 1} / {installations.length}
              </div>

              {/* Image Bottom Overlay Info (Location & System size) */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 z-10">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{current.area}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-black text-white leading-tight">
                    {current.system}
                  </span>
                  <span className="text-[10px] sm:text-xs font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-md shrink-0">
                    {current.subsidyDays}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Review & Savings Column (45% width on desktop) */}
            <div className="md:col-span-5 p-4 sm:p-6 md:p-7 flex flex-col justify-between space-y-4 bg-white">
              <div className="space-y-3.5">
                {/* 5-Star Rating and Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    5.0 ★ Verified Customer
                  </span>
                </div>

                {/* Before vs After Electricity Bill Box */}
                <div className="p-3 bg-gradient-to-r from-slate-50 to-emerald-50/50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-extrabold text-slate-700 border-b border-slate-200/80 pb-1.5">
                    <span>{language === "hi" ? "मासिक बिजली बिल" : "Monthly Power Bill"}</span>
                    <span className="text-emerald-700 bg-emerald-100/80 text-[10px] px-1.5 py-0.2 rounded font-black">
                      {current.savingsPercent} {language === "hi" ? "बचत" : "Saved"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white p-2 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] text-slate-500 font-bold block">
                        {language === "hi" ? "सोलर से पहले" : "Before Solar"}
                      </span>
                      <span className="text-sm sm:text-base font-black text-rose-600 line-through">
                        {current.billBefore}
                      </span>
                    </div>
                    <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-xs">
                      <span className="text-[10px] text-emerald-100 font-bold block">
                        {language === "hi" ? "अब सिर्फ" : "Now Only"}
                      </span>
                      <span className="text-sm sm:text-base font-black text-white">
                        {current.billAfter}/mo
                      </span>
                    </div>
                  </div>
                </div>

                {/* DBT Govt Subsidy Banner */}
                <div className="flex items-center justify-between px-3 py-2 bg-amber-50/80 border border-amber-300 rounded-xl text-xs font-bold text-slate-900">
                  <div className="flex items-center gap-1.5">
                    <Banknote className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{language === "hi" ? "सरकारी सब्सिडी जमा:" : "Govt DBT Subsidy:"}</span>
                  </div>
                  <span className="text-emerald-800 font-black text-sm">{current.subsidy}</span>
                </div>

                {/* Customer Review Quote */}
                <div className="relative pt-1">
                  <Quote className="w-5 h-5 text-emerald-200 absolute -top-1.5 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic pl-3 border-l-2 border-emerald-400">
                    &quot;{current.text}&quot;
                  </p>
                </div>
              </div>

              {/* Customer Signature & Navigation Arrows */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight truncate">
                    {current.name}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {current.area}
                  </p>
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handlePrev}
                    type="button"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip (All 5 Real Solar Photos) */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {installations.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer group ${isActive
                  ? "border-emerald-500 ring-2 ring-emerald-400/40 shadow-md scale-[1.03]"
                  : "border-slate-200 opacity-65 hover:opacity-100 hover:border-emerald-300"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 20vw, 150px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-1 left-1 right-1 text-[9px] sm:text-[10px] font-black text-white truncate text-center block">
                  {item.brand.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {installations.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex ? "w-6 bg-emerald-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
