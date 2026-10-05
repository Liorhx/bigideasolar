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
    callNow: string;
    getQuote: string;
    quoteShort: string;
    langShort: string;
    langLong: string;
    switchPrompt: string;
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
      calculator: "Cost Calculator",
      whySolar: "Why Solar & Subsidy",
      brands: "Solar Brands",
      areas: "Service Areas",
      dealerProgram: "Become a Partner",
      faq: "Questions & Answers",
      callNow: "Call Solar Expert",
      getQuote: "Calculate Budget",
      quoteShort: "Guide",
      langShort: "🇮🇳 हिंदी",
      langLong: "🇮🇳 हिंदी में पढ़ें",
      switchPrompt: "हिंदी में पढ़ने के लिए यहाँ क्लिक करें 👉"
    },
    hero: {
      badge: "🏛️ PM Surya Ghar Yojana Govt Subsidy Available",
      titleStart: "Install Solar on Your Roof.",
      titleHighlight: "Make Your Electricity Bill ₹0!",
      titleEnd: "Claim Up to ₹78,000 Govt Subsidy Directly in Your Bank",
      subtitle: "Stop paying high electricity bills. Get trusted Tata, Waaree & Adani solar panels with guaranteed ₹78,000 government subsidy and 25 years warranty.",
      calcButton: "Check My Solar Cost in 30 Sec →",
      whatsappButton: "Chat on WhatsApp",
      benefitSurvey: "Free Roof Survey",
      benefitSurveySub: "Zero visit charges",
      benefitSubsidy: "₹78,000 Subsidy",
      benefitSubsidySub: "Direct to your bank account",
      benefitWarranty: "25 Years Life",
      benefitWarrantySub: "Long-term peace of mind",
      couponBannerTitle: "Get 2% Extra Discount Coupon",
      couponBannerDesc: "Answer 3 quick questions below to unlock your discount coupon code!"
    },
    calculator: {
      title: "Solar Cost Calculator",
      subtitle: "Find out how much solar will cost for your house and how much govt subsidy you will get.",
      step1Title: "Step 1: Your Electricity Bill",
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
      calcAction: "Calculate My Solar Cost & Subsidy →",
      step2Title: "Step 2: Your Solar Setup & Subsidy",
      recommendedSize: "Recommended Solar Size",
      indicativeCost: "Approx Total Market Price",
      afterSubsidy: "Your Final Price After Govt Subsidy*",
      subsidyDisclaimer: "*₹78,000 Govt subsidy is credited directly to your bank account via PM Surya Ghar portal once the net-meter is installed.",
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
      card2Title: "Direct Government Subsidy (₹78,000)",
      card2Desc: "Under PM Surya Ghar Yojana, the government deposits up to ₹78,000 straight into your bank account.",
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
          a: "For residential homes in Lucknow & UP, you get up to ₹78,000 Central Govt Subsidy under PM Surya Ghar Yojana. The money is transferred directly to your bank account within 30 days of net-meter installation."
        },
        {
          q: "How much will a 3 kW solar system cost me after subsidy?",
          a: "A 3 kW complete system costs around ₹1,45,000 - ₹1,75,000 before subsidy. After the ₹78,000 government subsidy, your actual out-of-pocket expense is only around ₹67,000 - ₹97,000."
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
      calculator: "खर्चा कैलकुलेटर",
      whySolar: "सोलर क्यों और सब्सिडी",
      brands: "सोलर ब्रांड्स",
      areas: "कार्य क्षेत्र (इलाके)",
      dealerProgram: "पार्टनर / डीलर बनें",
      faq: "सवाल-जवाब",
      callNow: "सोलर एक्सपर्ट को कॉल करें",
      getQuote: "खर्चा जानें",
      quoteShort: "खर्चा",
      langShort: "🇬🇧 EN",
      langLong: "🇬🇧 English",
      switchPrompt: "Read in English 👉"
    },
    hero: {
      badge: "🏛️ पीएम सूर्य घर योजना - ₹78,000 सरकारी सब्सिडी चालू है",
      titleStart: "अपनी छत पर सोलर लगवाएं,",
      titleHighlight: "बिजली का बिल हमेशा के लिए 0 करें!",
      titleEnd: "और पाएं ₹78,000 की सीधी सरकारी सब्सिडी अपने बैंक खाते में",
      subtitle: "महंगी बिजली से हमेशा के लिए छुटकारा पाएं। टाटा, वारी और अडानी जैसे टॉप ब्रांड्स के सोलर पैनल लगवाएं और ₹78,000 सरकारी सब्सिडी सीधे अपने बैंक खाते में पाएं।",
      calcButton: "सिर्फ 30 सेकंड में सोलर खर्चा जानें →",
      whatsappButton: "व्हाट्सएप पर बात करें",
      benefitSurvey: "छत का मुफ्त सर्वे",
      benefitSurveySub: "0 रुपया विज़िट चार्ज",
      benefitSubsidy: "₹78,000 सब्सिडी",
      benefitSubsidySub: "सीधे आपके बैंक खाते में",
      benefitWarranty: "25 साल की वारंटी",
      benefitWarrantySub: "सालों-साल बिना किसी टेंशन के",
      couponBannerTitle: "तुरंत 2% की अतिरिक्त छूट का कूपन पाएं",
      couponBannerDesc: "नीचे सिर्फ 3 आसान सवालों के जवाब दें और अपना डिस्काउंट कूपन अनलॉक करें!"
    },
    calculator: {
      title: "सोलर खर्चा कैलकुलेटर",
      subtitle: "जानें आपके घर पर सोलर लगाने में कितना खर्चा आएगा और कितनी सरकारी सब्सिडी मिलेगी।",
      step1Title: "स्टेप 1: आपका बिजली बिल",
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
      calcAction: "सोलर खर्चा और सब्सिडी देखें →",
      step2Title: "स्टेप 2: आपके घर के लिए सही सोलर व सब्सिडी",
      recommendedSize: "आपके घर के लिए सही सोलर क्षमता",
      indicativeCost: "अनुमानित कुल सिस्टम खर्चा",
      afterSubsidy: "सरकारी सब्सिडी के बाद आपका कुल खर्च*",
      subsidyDisclaimer: "*नेट-मीटर लगने के बाद ₹78,000 की सरकारी सब्सिडी सीधे आपके बैंक खाते में आ जाती है।",
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
      card2Title: "सीधे बैंक खाते में ₹78,000 सब्सिडी",
      card2Desc: "पीएम सूर्य घर योजना के तहत ₹78,000 की सरकारी सब्सिडी सीधे आपके बैंक खाते में आती है।",
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
          a: "उत्तर प्रदेश में घरेलू मकानों के लिए पीएम सूर्य घर योजना के तहत ₹78,000 तक सीधी सरकारी सब्सिडी मिलती है। नेट-मीटर लगने के 30 दिनों के भीतर यह पैसा सीधे आपके बैंक खाते में आ जाता है।"
        },
        {
          q: "सब्सिडी के बाद 3 kW सोलर सिस्टम का कुल खर्चा कितना आता है?",
          a: "3 kW सिस्टम का सामान्य खर्चा ₹1,45,000 - ₹1,75,000 होता है। ₹78,000 की सरकारी सब्सिडी मिलने के बाद आपकी जेब से कुल खर्च मात्र ₹67,000 - ₹97,000 ही आता है।"
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
