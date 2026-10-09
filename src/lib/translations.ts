export type Language = "en" | "hi";

export interface Translations {
  nav: {
    brandName: string;
    brandTagline: string;
    allLucknowNotice: string;
    allLucknowBadge: string;
    calculator: string;
    whySolar: string;
    brands: string;
    areas: string;
    dealerProgram: string;
    faq: string;
    process: string;
    callNow: string;
    getQuote: string;
    quoteShort: string;
    langShort: string;
    langLong: string;
    switchPrompt: string;
  };
  processSection: {
    badge: string;
    title: string;
    subtitle: string;
    cashTabTitle: string;
    cashTabBadge: string;
    cashTimeline: string;
    cashStep1Title: string;
    cashStep1Desc: string;
    cashStep2Title: string;
    cashStep2Desc: string;
    cashStep3Title: string;
    cashStep3Desc: string;
    loanTabTitle: string;
    loanTabBadge: string;
    loanTimeline: string;
    loanIntro: string;
    step1Title: string;
    step1Sub: string;
    step1Desc: string;
    docsRequiredTitle: string;
    doc1: string;
    doc2: string;
    doc3: string;
    doc4: string;
    step1Assistance: string;
    step2Title: string;
    step2Sub: string;
    step2Desc: string;
    step3Title: string;
    step3Sub: string;
    step3Desc: string;
    step4Title: string;
    step4Sub: string;
    step4Desc: string;
    step5Title: string;
    step5Sub: string;
    step5Desc: string;
    financeGraphicTitle: string;
    financeGraphicDesc: string;
    prevBillLabel: string;
    newBillLabel: string;
    subsidySlashLabel: string;
    monthlyEmiLabel: string;
    netBenefitLabel: string;
    zeroBurdenNote: string;
    ctaTitle: string;
    ctaButton: string;
    callExpertButton: string;
  };
  trustBanner: {
    upneda: string;
    uppcl: string;
    dbt: string;
    homes: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    calcButton: string;
    whatsappButton: string;
    benefitSurvey: string;
    benefitSurveySub: string;
    benefitSubsidy: string;
    benefitSubsidySub: string;
    benefitWarranty: string;
    benefitWarrantySub: string;
    couponBannerTitle: string;
    couponBannerDesc: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    step1Title: string;
    q1Bill: string;
    bill1: string;
    bill2: string;
    bill3: string;
    bill4: string;
    q2Property: string;
    propIndependent: string;
    propApartment: string;
    propCommercial: string;
    q3Roof: string;
    roofYes: string;
    roofNo: string;
    roofNotSure: string;
    calcAction: string;
    step2Title: string;
    recommendedSize: string;
    indicativeCost: string;
    afterSubsidy: string;
    subsidyDisclaimer: string;
    selectBrand: string;
    otherBrand: string;
    proceedDiscount: string;
    monthlyBillShort: string;
    step3Title: string;
    step3Subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    area: string;
    areaPlaceholder: string;
    ownHouse: string;
    yes: string;
    no: string;
    monthlyBillSelect: string;
    agreeTerms: string;
    getCouponAction: string;
    securityNote: string;
    step4Title: string;
    step4Subtitle: string;
    couponOff: string;
    couponValidity: string;
    copyCoupon: string;
    copied: string;
    getQuoteWhatsapp: string;
    whatsappExpertText: string;
    backHome: string;
  };
  whySolar: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  brandsSection: {
    badge: string;
    title: string;
    subtitle: string;
    estPrice: string;
    efficiency: string;
    warranty: string;
    cellType: string;
  };
  areasSection: {
    badge: string;
    title: string;
    subtitle: string;
    checkButton: string;
    availableBadge: string;
  };
  dealerSection: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    phoneLabel: string;
    companyLabel: string;
    cityLabel: string;
    submitDealer: string;
    dealerSuccess: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    chatWithExpert: string;
    chatDesc: string;
    chatBtn: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    popularAreas: string;
    contactUs: string;
    copyright: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      brandName: "BigIdeaSolar",
      brandTagline: "Clean Energy • All Lucknow Service",
      allLucknowNotice: "📍 All Lucknow Service Available (Free Doorstep Visit)",
      allLucknowBadge: "All Lucknow Service",
      calculator: "Calculator",
      whySolar: "Why Solar",
      brands: "Brands",
      areas: "Areas",
      dealerProgram: "Partner",
      faq: "FAQ",
      process: "How It Works",
      callNow: "Call Solar Expert",
      getQuote: "Calculate Subsidy",
      quoteShort: "Subsidy",
      langShort: "🇮🇳 हिंदी",
      langLong: "🇮🇳 हिंदी में पढ़ें",
      switchPrompt: "हिंदी में पढ़ने के लिए यहाँ क्लिक करें 👉"
    },
    processSection: {
      badge: "⚡ Complete Solar Installation & Subsidy Roadmap",
      title: "How Solar Installation Works in Lucknow",
      subtitle: "Choose between 48-Hour Instant Cash Installation or Easy Bank Loan + ₹108,000 Govt Subsidy where electricity bill savings pay your EMI!",
      cashTabTitle: "⚡ Option 2: Fast-Track Cash Payment",
      cashTabBadge: "Ready in 2–3 Days",
      cashTimeline: "Total Time: Just 2 to 3 Days",
      cashStep1Title: "1. Call Us & Decide System Size",
      cashStep1Desc: "Call our Lucknow helpline or calculate online. Our solar engineer surveys your rooftop for free and finalizes the kW capacity.",
      cashStep2Title: "2. Choose Top Brand (Tata / Waaree / Adani)",
      cashStep2Desc: "Pick your preferred Tier-1 brand panels & inverter suited to your budget and power load.",
      cashStep3Title: "3. Rapid Installation in 48-72 Hours",
      cashStep3Desc: "Certified engineers complete full panel installation, structure mounting, and wiring in 2-3 days. Start saving on electricity immediately!",
      loanTabTitle: "🏦 Option 1: Easy Bank Loan + ₹108,000 Subsidy (Most Popular)",
      loanTabBadge: "Zero Out-of-Pocket Burden • 1 to 1.5 Months",
      loanTimeline: "Total Timeline: ~1 to 1.5 Months (100% BigIdeaSolar Handholding)",
      loanIntro: "No need to spend lump-sum cash! We personally guide you to the bank, get your solar loan sanctioned, and secure your ₹108,000 PM Surya Ghar subsidy.",
      step1Title: "Step 1: Document Collection & Bank Visit Assistance",
      step1Sub: "Only 4 simple documents needed • We accompany you to the bank",
      step1Desc: "Our BigIdeaSolar team personally helps you fill and submit the solar loan application at leading partner banks (SBI, PNB, Canara Bank, Bank of Baroda).",
      docsRequiredTitle: "📋 Only 4 Documents Required:",
      doc1: "Aadhar Card (आधार कार्ड)",
      doc2: "Bank Passbook / Cancelled Cheque (बैंक पासबुक)",
      doc3: "House Registry / Property Ownership Papers (मकान की रजिस्ट्री)",
      doc4: "Latest Electricity Bill (नवीनतम बिजली का बिल)",
      step1Assistance: "✨ No running between bank counters — our executives assist you in person from start to finish!",
      step2Title: "Step 2: Bank Loan Approval & Account Credit",
      step2Sub: "Sanctioned within 1 to 2 weeks",
      step2Desc: "The bank reviews your documents and sanctions the low-interest solar loan. The sanctioned amount is credited directly into your bank account.",
      step3Title: "Step 3: Rapid Rooftop Installation & PM Portal Photo",
      step3Sub: "Solar panels mounted & geotagged verification",
      step3Desc: "Using the credited funds, our certified technicians install high-efficiency solar panels on your roof. Once installed, an official verified photo of the homeowner with the installed rooftop solar system is taken for PM Surya Ghar portal submission.",
      step4Title: "Step 4: Up to ₹108,000 Govt Subsidy Credited in Your Bank",
      step4Sub: "Direct DBT subsidy received in 1 to 2 months",
      step4Desc: "BigIdeaSolar submits your verified photo and DISCOM inspection report on the National Portal. The Government of India credits up to ₹108,000 subsidy directly into your bank account (in installments / within 1-2 months).",
      step5Title: "Step 5: Deposit Subsidy to Reduce Loan + Saved Bills Pay Remaining EMI !",
      step5Sub: "Solar literally pays for itself with ₹0 burden on your family income",
      step5Desc: "Deposit your ₹108,000 subsidy into the bank loan account to drastically slash the principal loan balance. Then, use the ₹3,000 to ₹5,000 you save every month on electricity bills to easily pay the small remaining monthly EMI! Once the loan is cleared, enjoy 20+ years of 100% FREE electricity!",
      financeGraphicTitle: "💡 Real Financial Example: How Solar Pays For Itself Every Month",
      financeGraphicDesc: "Why 90%+ families in Lucknow choose the Bank Loan + Subsidy path:",
      prevBillLabel: "Old Monthly Electricity Bill (Before Solar):",
      newBillLabel: "New Monthly Electricity Bill (With Solar):",
      subsidySlashLabel: "PM Surya Ghar Govt Subsidy (Direct to Bank):",
      monthlyEmiLabel: "Small Monthly Loan EMI (After Subsidy Slash):",
      netBenefitLabel: "Net Cash in Hand Saved Every Month from Day 1:",
      zeroBurdenNote: "🛡️ 100% Zero Pocket Burden: The money you were already paying to the electricity board now pays off your solar asset. Once paid, you get 20+ years of free power!",
      ctaTitle: "Want Zero-Hassle Solar with Bank Loan & Subsidy Assistance?",
      ctaButton: "Apply for Solar Loan & Free Survey →",
      callExpertButton: "Speak with Loan Specialist"
    },
    trustBanner: {
      upneda: "🏛️ UPNEDA Registered Channel Partner",
      uppcl: "⚡ 100% UPPCL (MVVNL) Net-Metering Approved",
      dbt: "💰 ₹108,000 Direct DBT Bank Subsidy",
      homes: "🏠 100+ Lucknow Homes Powered"
    },
    hero: {
      badge: "🏛️ PM Surya Ghar Muft Bijli Yojana • ₹108,000 Direct DBT Subsidy Active",
      titleStart: "Install Solar on Your Roof.",
      titleHighlight: "Make Your Electricity Bill ₹0!",
      titleEnd: "Claim Up to ₹108,000 Govt Subsidy Directly in Your Bank Account",
      subtitle: "Free site survey across all Lucknow localities with guaranteed ₹108,000 DBT subsidy filing. Reduce your UPPCL electricity bill to ₹0 with certified Tata, Waaree & Adani solar panels and 25 years warranty.",
      calcButton: "Calculate Budget & Claim 2% Discount Form →",
      whatsappButton: "Chat with Solar Engineer",
      benefitSurvey: "Free Roof Survey",
      benefitSurveySub: "Zero visit charges across Lucknow",
      benefitSubsidy: "₹108,000 Subsidy",
      benefitSubsidySub: "Direct DBT bank transfer",
      benefitWarranty: "25 Years Life",
      benefitWarrantySub: "Long-term peace of mind",
      couponBannerTitle: "Get 2% Extra Discount Coupon",
      couponBannerDesc: "Answer 3 quick questions below to unlock your verified discount coupon!"
    },
    calculator: {
      title: "☀️ Solar Cost Calculator & 2% Discount Form",
      subtitle: "Find out your exact solar system size, UPPCL net-metering savings, and guaranteed ₹108,000 govt subsidy.",
      step1Title: "Step 1: Your UPPCL Monthly Bill",
      q1Bill: "1. What is your average monthly electricity bill?",
      bill1: "₹1,000 - ₹2,000",
      bill2: "₹2,000 - ₹3,000",
      bill3: "₹3,000 - ₹5,000",
      bill4: "₹5,000+",
      q2Property: "2. Which type of house or building is this?",
      propIndependent: "Independent House / Kothi",
      propApartment: "Flat / Apartment",
      propCommercial: "Shop / Commercial",
      q3Roof: "3. Do you have your own open roof for solar?",
      roofYes: "Yes, I have open roof",
      roofNo: "No",
      roofNotSure: "Not Sure, need engineer visit",
      calcAction: "Calculate Budget & Claim 2% Discount Form →",
      step2Title: "Step 2: Your Solar Setup & Subsidy",
      recommendedSize: "Recommended Solar Size",
      indicativeCost: "Approx Total Market Price",
      afterSubsidy: "Your Final Price After Govt Subsidy*",
      subsidyDisclaimer: "*₹108,000 Govt subsidy is credited directly to your bank account via PM Surya Ghar portal once the net-meter is installed.",
      selectBrand: "Choose Your Preferred Brand",
      otherBrand: "Other / Let Expert Suggest",
      proceedDiscount: "Proceed to Claim 2% Discount Coupon →",
      monthlyBillShort: "Monthly Bill",
      step3Title: "Get Free Solar Quote & 2% Discount Coupon",
      step3Subtitle: "Fill your details below to activate your discount coupon instantly.",
      fullName: "Your Full Name",
      fullNamePlaceholder: "e.g. Rahul Sharma",
      phone: "Mobile Number (WhatsApp Number)",
      phonePlaceholder: "10 digit mobile number",
      area: "Area in Lucknow / Pincode",
      areaPlaceholder: "e.g. Kalyanpur, Gomti Nagar, 226020",
      ownHouse: "Do you own this house?",
      yes: "Yes (I am Owner)",
      no: "No (Rented)",
      monthlyBillSelect: "Selected Monthly Bill",
      agreeTerms: "I agree to receive my solar quotation & free survey details on WhatsApp / Call.",
      getCouponAction: "Get My 2% Discount Coupon Now →",
      securityNote: "100% Safe & Private. No spam, only certified solar engineers.",
      step4Title: "Congratulations! Your 2% Discount Coupon is Ready",
      step4Subtitle: "Your coupon code is active. Our solar expert will assist you on WhatsApp.",
      couponOff: "2% FLAT DISCOUNT",
      couponValidity: "Valid on your complete rooftop solar installation quotation.",
      copyCoupon: "Copy Coupon Code",
      copied: "Copied to Clipboard!",
      getQuoteWhatsapp: "Get Instant Quote on WhatsApp",
      whatsappExpertText: "Our solar engineer is online now for Kalyanpur, Gomti Nagar & Lucknow areas.",
      backHome: "Calculate Again"
    },
    whySolar: {
      badge: "Best Investment for Your Home",
      title: "Why Solar is the Smartest Choice for Every Home",
      subtitle: "Solar gives you free electricity for 25+ years and protects your family from rising electricity rates.",
      card1Title: "Zero or Very Low Electricity Bills",
      card1Desc: "Your panels make free electricity from the sun all day long. Extra power goes back to the grid to reduce your bill to ₹0.",
      card2Title: "Direct Government Subsidy (₹108,000)",
      card2Desc: "Under PM Surya Ghar Yojana, the government deposits up to ₹108,000 straight into your bank account.",
      card3Title: "25+ Years Long Life",
      card3Desc: "Tier-1 solar panels come with 25 years warranty and easily recover their full cost in just 2 to 3 years.",
      card4Title: "Complete Installation Done by Us",
      card4Desc: "Our team handles everything — roof survey, structure, wiring, electricity department approval & subsidy papers."
    },
    brandsSection: {
      badge: "100% Original Tier-1 Brands",
      title: "Which Solar Brand is Best for Your House?",
      subtitle: "Compare top Indian brands based on warranty, quality and price per kW.",
      estPrice: "Price Range",
      efficiency: "Solar Efficiency",
      warranty: "Warranty",
      cellType: "Technology"
    },
    areasSection: {
      badge: "Local Service in Lucknow",
      title: "Areas We Serve in Lucknow",
      subtitle: "Our local solar engineers provide free home visits across all Lucknow localities.",
      checkButton: "Check Availability in My Area →",
      availableBadge: "✓ Free Same-Day Site Survey Available"
    },
    dealerSection: {
      badge: "Earn with Us",
      title: "Become a Solar Partner / Dealer (Earn ₹50,000+ / mo)",
      subtitle: "Join BigIdeaSolar partner network in UP. Get wholesale component prices and hot customer leads in your area.",
      formTitle: "Register as a Solar Partner",
      nameLabel: "Your Name",
      phoneLabel: "Phone Number",
      companyLabel: "Shop / Firm Name",
      cityLabel: "City / District",
      submitDealer: "Submit Partner Form →",
      dealerSuccess: "Application Received! Our team will call you within 2 hours."
    },
    faq: {
      badge: "Got Questions?",
      title: "Frequently Asked Questions (FAQ)",
      subtitle: "Simple answers to everything you want to know about solar panels, subsidy & savings.",
      chatWithExpert: "Still have questions?",
      chatDesc: "Chat directly with our senior engineer on WhatsApp for quick help.",
      chatBtn: "Chat on WhatsApp Now",
      items: [
        {
          q: "How much government subsidy will I get on solar?",
          a: "For residential homes in Lucknow & UP, you get up to ₹108,000 Central Govt Subsidy under PM Surya Ghar Yojana. The money is transferred directly to your bank account within 30 days of net-meter installation."
        },
        {
          q: "How much will a 3 kW solar system cost me after subsidy?",
          a: "A 3 kW complete system costs around ₹1,70,000 - ₹2,10,000 before subsidy. After the ₹108,000 government subsidy, your actual out-of-pocket expense is only around ₹62,000 - ₹1,02,000."
        },
        {
          q: "Will solar panels work on cloudy or rainy days?",
          a: "Yes! Modern Tier-1 panels generate power even in cloudy weather (around 30% of normal capacity). Throughout the year, Lucknow gets more than 300 days of bright sunshine."
        },
        {
          q: "How does Net-Metering make my bill ₹0?",
          a: "The electricity department puts a smart 2-way meter. During the day, your extra solar power goes into the city grid (meter spins backwards). At night you use grid power. You only pay for what extra you used, which is usually zero!"
        },
        {
          q: "Are easy monthly EMI / Loan options available?",
          a: "Yes! Solar loans from SBI, PNB and leading banks start at just 7% interest with EMIs as low as ₹1,499/month. Your monthly electricity savings easily pay for the EMI."
        },
        {
          q: "Who takes care of installation and approvals?",
          a: "BigIdeaSolar handles everything! From free roof survey, panel setup, wiring, electricity department net-metering to government subsidy filing."
        }
      ]
    },
    footer: {
      aboutText: "BigIdeaSolar is Uttar Pradesh's trusted rooftop solar installation company located at Kalyanpur, Lucknow. We provide original Tata, Waaree, Adani and Vikram solar systems with 100% government subsidy guarantee.",
      quickLinks: "Quick Links",
      popularAreas: "Popular Areas",
      contactUs: "Contact & Office",
      copyright: "© 2026 BigIdeaSolar. All Rights Reserved. Clean Energy • Brighter Tomorrow.",
      disclaimer: "*Subsidy is directly credited by Govt of India into homeowner's bank account upon DISCOM net-meter verification."
    }
  },
  hi: {
    nav: {
      brandName: "बिग आइडिया सोलर",
      brandTagline: "पूरे लखनऊ में सेवा उपलब्ध • 0 रुपया विज़िट",
      allLucknowNotice: "📍 पूरे लखनऊ में हमारी सर्विस उपलब्ध है (0 रुपया विज़िट चार्ज)",
      allLucknowBadge: "पूरे लखनऊ में सेवा उपलब्ध",
      calculator: "कैलकुलेटर",
      whySolar: "सोलर फायदे",
      brands: "ब्रांड्स",
      areas: "इलाके",
      dealerProgram: "पार्टनर",
      faq: "FAQ",
      process: "प्रक्रिया",
      callNow: "सोलर एक्सपर्ट को कॉल करें",
      getQuote: "सब्सिडी जानें",
      quoteShort: "सब्सिडी",
      langShort: "🇬🇧 EN",
      langLong: "🇬🇧 English",
      switchPrompt: "Read in English 👉"
    },
    processSection: {
      badge: "⚡ सोलर इंस्टालेशन व सब्सिडी का पूरा आसान रास्ता",
      title: "लखनऊ में सोलर लगाने की पूरी प्रक्रिया",
      subtitle: "चाहे आप 2 से 3 दिन में कैश पर लगवाएं या बैंक लोन + ₹108,000 सरकारी सब्सिडी पर — हम हर कदम पर आपके साथ रहेंगे!",
      cashTabTitle: "⚡ विकल्प 1: फुल कैश फास्ट-ट्रैक",
      cashTabBadge: "मात्र 2 से 3 दिन में इंस्टालेशन",
      cashTimeline: "कुल समय: सिर्फ 2 से 3 दिन",
      cashStep1Title: "1. कॉल करें और छत का मुफ्त सर्वे कराएं",
      cashStep1Desc: "हमारे लखनऊ नंबर 9044914653 पर कॉल करें या ऑनलाइन फॉर्म भरें। हमारे इंजीनियर आपके घर आकर छत का सही माप और सोलर साइज तय करेंगे।",
      cashStep2Title: "2. पसंदीदा ब्रांड (टाटा / वारी / अडानी) चुनें",
      cashStep2Desc: "अपने बजट और बिजली लोड के अनुसार सबसे बेहतरीन टियर-1 सोलर पैनल्स और इन्वर्टर का चयन करें।",
      cashStep3Title: "3. 48 से 72 घंटे में सोलर चालू",
      cashStep3Desc: "हमारी सर्टिफाइड टीम मात्र 2-3 दिन में पूरा पैनल, स्ट्रक्चर और वायरिंग लगाकर सिस्टम चालू कर देती है। उसी दिन से आपका बिजली बिल ₹0 होना शुरू!",
      loanTabTitle: "🏦 विकल्प 2: आसान बैंक लोन + ₹108,000 सब्सिडी (सबसे लोकप्रिय)",
      loanTabBadge: "जेब से ₹0 अतिरिक्त भार • 1 से 1.5 महीना",
      loanTimeline: "कुल समय: ~1 से 1.5 महीना (बिग आइडिया सोलर की 100% हैंडहोल्डिंग सहायता)",
      loanIntro: "एक साथ मोटी रकम देने की जरूरत नहीं! हम खुद आपको बैंक ले जाकर आसान सोलर लोन पास कराते हैं और ₹108,000 सब्सिडी आपके खाते में मंगवाते हैं।",
      step1Title: "स्टेप 1: जरूरी कागजात और बैंक लोन अप्लाई में मदद",
      step1Sub: "सिर्फ 4 आसान कागजात चाहिए • हम खुद आपके साथ बैंक चलेंगे",
      step1Desc: "आपको सरकारी दफ्तरों या बैंकों के चक्कर नहीं काटने होंगे। बिग आइडिया सोलर की टीम एसबीआई, पीएनबी, केनरा बैंक या बैंक ऑफ बड़ौदा में लोन फॉर्म भरवाने में पूरी मदद करती है।",
      docsRequiredTitle: "📋 लोन के लिए सिर्फ ये 4 कागजात चाहिए:",
      doc1: "आधार कार्ड (Aadhar Card)",
      doc2: "बैंक पासबुक / कैंसिल्ड चेक (Bank Passbook)",
      doc3: "मकान की रजिस्ट्री / स्वामित्व प्रमाण (House Registry)",
      doc4: "नवीनतम बिजली का बिल (Electricity Bill)",
      step1Assistance: "✨ किसी काउंटर पर भटकना नहीं पड़ेगा — हमारे एग्जीक्यूटिव खुद साथ रहकर पूरा प्रोसेस करवाते हैं!",
      step2Title: "स्टेप 2: 1 से 2 हफ्ते में बैंक लोन पास व खाते में ट्रांसफर",
      step2Sub: "1 से 2 हफ्तों में लोन अप्रूवल",
      step2Desc: "बैंक आपके कागजात वेरीफाई करके सस्ती ब्याज दर वाला सोलर लोन पास करता है। स्वीकृत राशि सीधे आपके बैंक खाते में क्रेडिट हो जाती है।",
      step3Title: "स्टेप 3: घर पर सोलर इंस्टालेशन व सरकारी पोर्टल फोटो",
      step3Sub: "छत पर सोलर पैनल फिटिंग व फोटो वेरिफिकेशन",
      step3Desc: "लोन की राशि से हमारी सर्टिफाइड टीम आपकी छत पर बेहतरीन सोलर पैनल लगा देती है। सोलर लगने के बाद मकान मालिक के साथ सोलर पैनल की वेरिफाइड फोटो खींची जाती है जो पीएम सूर्य घर पोर्टल पर अपलोड होती है।",
      step4Title: "स्टेप 4: ₹108,000 सरकारी सब्सिडी सीधे आपके बैंक खाते में",
      step4Sub: "1 से 2 महीने में सब्सिडी राशि बैंक में ट्रांसफर",
      step4Desc: "बिग आइडिया सोलर बिजली विभाग की नेट-मीटरिंग रिपोर्ट व आपकी फोटो पीएम सूर्य घर पोर्टल पर जमा करता है। केंद्र सरकार की ₹108,000 की सीधी सब्सिडी (DBT) सीधे आपके बैंक खाते में ट्रांसफर हो जाती है।",
      step5Title: "स्टेप 5: सब्सिडी से लोन कम करें और बिजली बचत से आसान किस्त भरें!",
      step5Sub: "सोलर का पूरा खर्चा बिजली बिल की बचत से ही निकल जाता है",
      step5Desc: "खाते में आई ₹108,000 सब्सिडी को बैंक लोन में जमा कर दें — जिससे आपका मूल लोन बहुत छोटा हो जाता है। अब हर महीने बिजली बिल में जो ₹3,000 से ₹5,000 की बचत होगी, उसी से आराम से बची हुई छोटी सी किस्त (EMI) भर जाती है। लोन खत्म होते ही 20+ साल तक 100% मुफ्त बिजली का आनंद लें!",
      financeGraphicTitle: "💡 असली हिसाब: सोलर अपने आप अपनी किस्त कैसे भरता है?",
      financeGraphicDesc: "समझें क्यों लखनऊ के 90%+ परिवार बैंक लोन + सब्सिडी विकल्प चुनते हैं:",
      prevBillLabel: "सोलर लगाने से पहले हर महीने का बिजली बिल:",
      newBillLabel: "सोलर लगाने के बाद नया बिजली बिल:",
      subsidySlashLabel: "पीएम सूर्य घर सरकारी सब्सिडी (सीधे खाते में):",
      monthlyEmiLabel: "सब्सिडी घटाने के बाद छोटी मासिक किस्त (EMI):",
      netBenefitLabel: "हर महीने आपकी जेब में होने वाली सीधी शुद्ध बचत:",
      zeroBurdenNote: "🛡️ आपकी जेब से ₹0 एक्स्ट्रा खर्च: जो पैसा आप पहले बिजली विभाग को दे रहे थे, उसी पैसे से आपका अपना सोलर सिस्टम बन गया। किस्त पूरी होने पर अगले 20 साल बिजली पूरी तरह फ्री!",
      ctaTitle: "बैंक लोन व सब्सिडी सहायता के साथ सोलर लगाना चाहते हैं?",
      ctaButton: "सोलर लोन पात्रता व फ्री सर्वे बुक करें →",
      callExpertButton: "लोन एक्सपर्ट से बात करें"
    },
    trustBanner: {
      upneda: "🏛️ यूपीनेडा (UPNEDA) मान्यता प्राप्त चैनल पार्टनर",
      uppcl: "⚡ 100% यूपीपीसीएल (MVVNL) स्मार्ट नेट-मीटरिंग अप्रूव्ड",
      dbt: "💰 ₹108,000 सीधी DBT बैंक सब्सिडी सहायता",
      homes: "🏠 500+ लखनऊ घरों में सफल सोलर"
    },
    hero: {
      badge: "🏛️ पीएम सूर्य घर मुफ्त बिजली योजना • ₹108,000 सीधी DBT सब्सिडी चालू",
      titleStart: "अपनी छत पर सोलर लगवाएं,",
      titleHighlight: "बिजली का बिल हमेशा के लिए 0 करें!",
      titleEnd: "और पाएं ₹108,000 की सीधी सरकारी सब्सिडी अपने बैंक खाते में",
      subtitle: "लखनऊ के सभी इलाकों में फ्री साइट सर्वे और ₹108,000 डायरेक्ट बैंक ट्रांसफर (DBT) सरकारी सब्सिडी की 100% गारंटी। टाटा, वारी व अडानी सोलर पैनल लगवाएं और अपना यूपीपीसीएल बिजली बिल हमेशा के लिए ₹0 करें।",
      calcButton: "बजट निकालें और 2% डिस्काउंट फॉर्म भरें →",
      whatsappButton: "सोलर इंजीनियर से बात करें",
      benefitSurvey: "छत का मुफ्त सर्वे",
      benefitSurveySub: "0 रुपया विज़िट चार्ज (पूरे लखनऊ में)",
      benefitSubsidy: "₹108,000 सब्सिडी",
      benefitSubsidySub: "सीधा बैंक ट्रांसफर (DBT)",
      benefitWarranty: "25 साल की वारंटी",
      benefitWarrantySub: "सालों-साल बिना किसी टेंशन के",
      couponBannerTitle: "तुरंत 2% की अतिरिक्त छूट का कूपन पाएं",
      couponBannerDesc: "नीचे सिर्फ 3 आसान सवालों के जवाब दें और अपना डिस्काउंट कूपन अनलॉक करें!"
    },
    calculator: {
      title: "☀️ सोलर कॉस्ट कैलकुलेटर और 2% डिस्काउंट फॉर्म",
      subtitle: "जानें आपके घर के लिए सही सोलर साइज, यूपीपीसीएल नेट-मीटरिंग बचत और ₹108,000 सरकारी सब्सिडी।",
      step1Title: "स्टेप 1: आपका यूपीपीसीएल मासिक बिजली बिल",
      q1Bill: "1. आपका हर महीने औसत बिजली का बिल कितना आता है?",
      bill1: "₹1,000 - ₹2,000",
      bill2: "₹2,000 - ₹3,000",
      bill3: "₹3,000 - ₹5,000",
      bill4: "₹5,000 से ज्यादा",
      q2Property: "2. आपका मकान किस प्रकार का है?",
      propIndependent: "अपना खुद का मकान / कोठी",
      propApartment: "फ्लैट / अपार्टमेंट",
      propCommercial: "दुकान / कमर्शियल",
      q3Roof: "3. क्या आपके पास सोलर लगाने के लिए अपनी खुली छत है?",
      roofYes: "हाँ, अपनी खुली छत है",
      roofNo: "नहीं",
      roofNotSure: "पक्का नहीं, इंजीनियर को दिखाएंगे",
      calcAction: "बजट निकालें और 2% डिस्काउंट फॉर्म भरें →",
      step2Title: "स्टेप 2: आपके घर के लिए सही सोलर व सब्सिडी",
      recommendedSize: "आपके घर के लिए सही सोलर क्षमता",
      indicativeCost: "अनुमानित कुल सिस्टम खर्चा",
      afterSubsidy: "सरकारी सब्सिडी के बाद आपका कुल खर्च*",
      subsidyDisclaimer: "*नेट-मीटर लगने के बाद ₹108,000 की सरकारी सब्सिडी सीधे आपके बैंक खाते में आ जाती है।",
      selectBrand: "अपना पसंदीदा सोलर ब्रांड चुनें",
      otherBrand: "अन्य / एक्सपर्ट की सलाह चाहिए",
      proceedDiscount: "2% की छूट का कूपन पाने के लिए आगे बढ़ें →",
      monthlyBillShort: "मासिक बिजली बिल",
      step3Title: "फ्री सोलर कोटेशन और 2% डिस्काउंट कूपन पाएं",
      step3Subtitle: "अपना विवरण भरें और तुरंत अपना वेरिफाइड कूपन कोड पाएं।",
      fullName: "आपका पूरा नाम",
      fullNamePlaceholder: "उदा. राहुल यादव",
      phone: "मोबाइल नंबर (व्हाट्सएप नंबर)",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      area: "लखनऊ का इलाका / पिनकोड",
      areaPlaceholder: "उदा. कल्याणपुर, गोमती नगर, 226020",
      ownHouse: "क्या यह आपका अपना मकान है?",
      yes: "हाँ (मकान मालिक)",
      no: "नहीं (किराएदार)",
      monthlyBillSelect: "चुना गया मासिक बिल",
      agreeTerms: "मैं व्हाट्सएप/कॉल पर सोलर कोटेशन, सब्सिडी व फ्री सर्वे जानकारी पाने की सहमति देता हूँ।",
      getCouponAction: "मेरा 2% डिस्काउंट कूपन पाएं →",
      securityNote: "आपकी जानकारी 100% सुरक्षित है। कोई स्पैम नहीं, सिर्फ सर्टिफाइड सोलर इंजीनियर।",
      step4Title: "बधाई हो! आपका 2% डिस्काउंट कूपन एक्टिव है",
      step4Subtitle: "आपका कूपन कोड बन चुका है। हमारे सोलर इंजीनियर से व्हाट्सएप पर बात करें।",
      couponOff: "2% तुरंत छूट (FLAT OFF)",
      couponValidity: "आपके रूफटॉप सोलर कोटेशन व इंस्टालेशन पर मान्य।",
      copyCoupon: "कूपन कोड कॉपी करें",
      copied: "कूपन कोड कॉपी हो गया!",
      getQuoteWhatsapp: "व्हाट्सएप पर तुरंत कोटेशन पाएं",
      whatsappExpertText: "हमारे सोलर एक्सपर्ट कल्याणपुर, गोमती नगर व लखनऊ के लिए ऑनलाइन उपलब्ध हैं।",
      backHome: "दोबारा गणना करें"
    },
    whySolar: {
      badge: "घर के लिए सबसे समझदारी भरा फैसला",
      title: "सोलर लगवाना आपके घर के लिए सबसे फायदेमंद क्यों है?",
      subtitle: "सोलर लगाने से 25 साल तक मुफ्त बिजली मिलती है और महंगी बिजली के बिल से हमेशा के लिए आज़ादी मिलती है।",
      card1Title: "बिजली का बिल शून्य या बहुत कम",
      card1Desc: "दिनभर धूप से अपनी खुद की मुफ्त बिजली बनाएं। बची हुई बिजली ग्रिड को देकर अपना बिल ₹0 करें।",
      card2Title: "सीधे बैंक खाते में ₹108,000 सब्सिडी",
      card2Desc: "पीएम सूर्य घर योजना के तहत ₹108,000 की सरकारी सब्सिडी सीधे आपके बैंक खाते में आती है।",
      card3Title: "25 साल का लंबा जीवन और गारंटी",
      card3Desc: "टियर-1 सोलर पैनल्स 25 साल की वारंटी के साथ आते हैं और सिर्फ 2 से 3 साल में अपनी पूरी लागत वसूल कर देते हैं।",
      card4Title: "पूरा काम कंपनी खुद करती है",
      card4Desc: "छत का सर्वे, स्ट्रक्चर, वायरिंग, बिजली विभाग का नया नेट-मीटर और सब्सिडी के कागजात — सब हमारी टीम करवाती है।"
    },
    brandsSection: {
      badge: "केवल 100% असली टियर-1 ब्रांड्स",
      title: "आपके घर के लिए कौन सा सोलर ब्रांड सबसे अच्छा है?",
      subtitle: "टाटा, वारी और अडानी जैसे बड़े ब्रांड्स की वारंटी और कीमत देखें।",
      estPrice: "कीमत रेंज",
      efficiency: "सोलर दक्षता",
      warranty: "वारंटी",
      cellType: "तकनीक"
    },
    areasSection: {
      badge: "लखनऊ में लोकल सर्विस",
      title: "लखनऊ में हमारा सेवा क्षेत्र",
      subtitle: "लखनऊ के प्रत्येक मुख्य इलाके में हमारे इंजीनियर मुफ्त छत सर्वे के लिए उपलब्ध हैं।",
      checkButton: "मेरे इलाके में उपलब्धता जांचें →",
      availableBadge: "✓ उसी दिन मुफ्त साइट सर्वे उपलब्ध है"
    },
    dealerSection: {
      badge: "डीलर एवं पार्टनर प्रोग्राम",
      title: "सोलर पार्टनर / डीलर बनें (प्रति माह ₹50,000+ कमाएं)",
      subtitle: "बिग आइडिया सोलर नेटवर्क से जुड़ें। होलसेल रेट पर पैनल्स पाएं और अपने इलाके के ग्राहक लीड्स प्राप्त करें।",
      formTitle: "सोलर पार्टनर बनने के लिए फॉर्म भरें",
      nameLabel: "आपका नाम",
      phoneLabel: "फोन / व्हाट्सएप नंबर",
      companyLabel: "दुकान / फर्म का नाम",
      cityLabel: "शहर / जिला",
      submitDealer: "पार्टनर फॉर्म जमा करें →",
      dealerSuccess: "आवेदन प्राप्त हो गया! हमारी टीम 2 घंटे में आपसे संपर्क करेगी।"
    },
    faq: {
      badge: "कोई सवाल है?",
      title: "अक्सर पूछे जाने वाले सवाल (FAQ)",
      subtitle: "सोलर, सरकारी सब्सिडी और बिजली बिल की बचत से जुड़े आसान जवाब।",
      chatWithExpert: "क्या आपके पास अन्य सवाल हैं?",
      chatDesc: "तुरंत सही जानकारी पाने के लिए हमारे सीनियर सोलर इंजीनियर से व्हाट्सएप पर बात करें।",
      chatBtn: "व्हाट्सएप पर बात करें",
      items: [
        {
          q: "सोलर लगाने पर सरकार से कितनी सब्सिडी मिलती है?",
          a: "उत्तर प्रदेश में घरेलू मकानों के लिए पीएम सूर्य घर योजना के तहत ₹108,000 तक सीधी सरकारी सब्सिडी मिलती है। नेट-मीटर लगने के 30 दिनों के भीतर यह पैसा सीधे आपके बैंक खाते में आ जाता है।"
        },
        {
          q: "सब्सिडी के बाद 3 kW सोलर सिस्टम का कुल खर्चा कितना आता है?",
          a: "3 kW सिस्टम का सामान्य खर्चा ₹1,70,000 - ₹2,10,000 होता है। ₹108,000 की सरकारी सब्सिडी मिलने के बाद आपकी जेब से कुल खर्च मात्र ₹62,000 - ₹1,02,000 ही आता है।"
        },
        {
          q: "क्या बारिश या बादलों के मौसम में भी सोलर काम करता है?",
          a: "हाँ! आधुनिक सोलर पैनल्स बादलों में भी रोशनी से बिजली बनाते हैं। लखनऊ में साल भर में 300 से अधिक दिन भरपूर तेज धूप रहती है।"
        },
        {
          q: "नेट-मीटरिंग से बिजली बिल ₹0 कैसे हो जाता है?",
          a: "बिजली विभाग 2-तरफा स्मार्ट मीटर लगाता है। दिन में आपकी अतिरिक्त सोलर बिजली ग्रिड में जाती है (मीटर उल्टा घूमता है)। रात में ग्रिड की बिजली इस्तेमाल होती है। महीने में आपको सिर्फ बची हुई यूनिट का ही बिल देना होता है, जो अक्सर ₹0 हो जाता है।"
        },
        {
          q: "क्या बिना पैसे दिए (Zero Down Payment) आसान किस्तों (EMI) पर सोलर लग सकता है?",
          a: "हाँ! एसबीआई और पीएनबी जैसे सरकारी बैंकों से सोलर लोन उपलब्ध है, जिसकी मासिक किस्त (EMI) मात्र ₹1,499 से शुरू होती है। आपके बिजली बिल की बचत से ही किस्त भर जाती है।"
        },
        {
          q: "सोलर लगाने और सरकारी कागजात का काम कौन करेगा?",
          a: "बिग आइडिया सोलर (BigIdeaSolar) की टीम पूरा काम खुद करती है — छत का मुफ्त सर्वे, सोलर लगाना, बिजली विभाग का नेट-मीटर लगवाना और सरकारी सब्सिडी आपके खाते में मंगवाना।"
        }
      ]
    },
    footer: {
      aboutText: "बिग आइडिया सोलर (BigIdeaSolar) उत्तर प्रदेश का भरोसेमंद रूफटॉप सोलर इंस्टालेशन नेटवर्क है। हमारा ऑफिस कल्याणपुर, लखनऊ में स्थित है। हम टाटा, वारी, अडानी और विक्रम सोलर के साथ 100% सरकारी सब्सिडी गारंटी प्रदान करते हैं।",
      quickLinks: "महत्वपूर्ण लिंक्स",
      popularAreas: "प्रमुख इलाके",
      contactUs: "संपर्क एवं ऑफिस",
      copyright: "© 2026 BigIdeaSolar. सर्वाधिकार सुरक्षित। स्वच्छ ऊर्जा • उज्ज्वल कल।",
      disclaimer: "*सब्सिडी बिजली विभाग द्वारा नेट-मीटर लगाने के बाद भारत सरकार द्वारा सीधे आपके खाते में भेजी जाती है।"
    }
  }
};
