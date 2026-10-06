export const LUCKNOW_AREAS = [
  "Kalyanpur / Unity City",
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
  "Bakshi Ka Talab",
  "Sitapur Road",
  "Telibagh",
  "Sushant Golf City",
  "Hazratganj",
  "Vikas Nagar",
  "Kakori",
  "Raebareli Road",
  "Amausi / Transport Nagar"
];

export const SOLAR_BRANDS = [
  {
    id: "tata",
    name: "Tata Power Solar",
    tagline: {
      en: "Reliable • High Performance",
      hi: "भरोसेमंद • उच्च प्रदर्शन"
    },
    priceRange: "₹65k - ₹75k / kW",
    minPricePerKw: 60000,
    maxPricePerKw: 75000,
    warrantyYears: 25,
    efficiency: "21.8%",
    cellType: "Mono PERC / TopCon (DCR)",
    features: {
      en: ["India's #1 Trusted Brand", "Tier-1 High Efficiency", "Direct DISCOM Approval"],
      hi: ["भारत का नंबर 1 ब्रांड", "टियर-1 उच्च दक्षता", "सीधे डिस्कॉम अप्रूवल"]
    },
    badge: "Most Popular",
    color: "#0284c7"
  },
  {
    id: "waaree",
    name: "Waaree Solar",
    tagline: {
      en: "Wide Product Range • India's Largest Exporter",
      hi: "विस्तृत उत्पाद रेंज • भारत का सबसे बड़ा निर्यातक"
    },
    priceRange: "₹60k - ₹65k / kW",
    minPricePerKw: 55000,
    maxPricePerKw: 70000,
    warrantyYears: 25,
    efficiency: "21.5%",
    cellType: "Bifacial Mono PERC",
    features: {
      en: ["Best Price-to-Performance", "Dual Glass Protection", "MNRE Approved DCR"],
      hi: ["बेस्ट कीमत और परफॉर्मेंस", "ड्यूल ग्लास प्रोटेक्शन", "MNRE अप्रूव्ड DCR"]
    },
    badge: "Best Value",
    color: "#16a34a"
  },
  {
    id: "adani",
    name: "Adani Solar",
    tagline: {
      en: "Trusted & Ultra Efficient • Heavy Duty",
      hi: "भरोसेमंद और अति-दक्ष • हैवी ड्यूटी"
    },
    priceRange: "₹60k - ₹70k / kW",
    minPricePerKw: 65000,
    maxPricePerKw: 80000,
    warrantyYears: 25,
    efficiency: "22.1%",
    cellType: "TopCon Bifacial DCR",
    features: {
      en: ["Ultra Low Light Performance", "Extreme Weather Proof", "Up to 30 Yrs Linear Output"],
      hi: ["कम धूप में भी बेहतर बिजली", "कड़ाके की धूप/बारिश प्रतिरोधी", "30 साल लीनियर आउटपुट"]
    },
    badge: "Premium Tech",
    color: "#0ea5e9"
  },
  {
    id: "vikram",
    name: "Vikram Solar",
    tagline: {
      en: "Great Value • Advanced Tier-1 Tech",
      hi: "शानदार वैल्यू • एडवांस्ड टियर-1 तकनीक"
    },
    priceRange: "₹60k - ₹65k / kW",
    minPricePerKw: 55000,
    maxPricePerKw: 70000,
    warrantyYears: 25,
    efficiency: "21.3%",
    cellType: "Mono PERC Half-Cut",
    features: {
      en: ["Fast Payback Period", "PID Resistant Cells", "Complete Govt Subsidy Valid"],
      hi: ["तेज़ रिटर्न ऑन इन्वेस्टमेंट", "पीआईडी प्रतिरोधी सेल्स", "पूर्ण सरकारी सब्सिडी योग्य"]
    },
    badge: "High ROI",
    color: "#f59e0b"
  }
];

export const SUBSIDY_SLABS = [
  { capacityKw: 1, centralSubsidy: 0, stateSubsidy: 0, totalSubsidy: 0, label: "No subsidy provided" },
  { capacityKw: 2, centralSubsidy: 60000, stateSubsidy: 30000, totalSubsidy: 90000, label: "₹90,000 Subsidy" },
  { capacityKw: 3, centralSubsidy: 78000, stateSubsidy: 30000, totalSubsidy: 108000, label: "₹1,08,000 Subsidy" },
  { capacityKw: 4, centralSubsidy: 78000, stateSubsidy: 30000, totalSubsidy: 108000, label: "₹1,08,000 Subsidy" },
  { capacityKw: 5, centralSubsidy: 78000, stateSubsidy: 30000, totalSubsidy: 108000, label: "₹1,08,000 Subsidy" },
  { capacityKw: 10, centralSubsidy: 78000, stateSubsidy: 30000, totalSubsidy: 108000, label: "₹1,08,000 Subsidy" }
];

export const CONTACT_INFO = {
  brandName: "BigIdeaSolar",
  phone: "+91 90449 14653",
  phoneRaw: "919044914653",
  whatsappNumber: "919044914653",
  email: "bigidea97@gmail.com",
  address: "510, Bahadurpur, Kalyanpur Unity City Chauraha, Lucknow (UP) - 226020",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM"
};
