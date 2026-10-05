import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISiteConfig extends Document {
  key: string;
  brandName: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  email: string;
  address: string;
  subsidy1Kw: number;
  subsidy2Kw: number;
  subsidy3KwPlus: number;
  stateSubsidyMax: number;
  defaultDiscountPercent: number;
  areas: string[];
  brands: {
    id: string;
    name: string;
    priceRange: string;
    warrantyYears: number;
    efficiency: string;
    taglineEn: string;
    taglineHi: string;
    badge: string;
  }[];
  adminPin: string;
  updatedAt: Date;
}

const SiteConfigSchema = new Schema<ISiteConfig>(
  {
    key: { type: String, default: "global_config", unique: true },
    brandName: { type: String, default: "BigIdeaSolar" },
    phone: { type: String, default: "+91 90449 14653" },
    phoneRaw: { type: String, default: "919044914653" },
    whatsappNumber: { type: String, default: "919044914653" },
    email: { type: String, default: "bigidea97@gmail.com" },
    address: { type: String, default: "510, Bahadurpur, Kalyanpur Unity City Chauraha, Lucknow (UP) - 226020" },
    subsidy1Kw: { type: Number, default: 30000 },
    subsidy2Kw: { type: Number, default: 60000 },
    subsidy3KwPlus: { type: Number, default: 78000 },
    stateSubsidyMax: { type: Number, default: 30000 },
    defaultDiscountPercent: { type: Number, default: 2 },
    areas: {
      type: [String],
      default: [
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
      ]
    },
    brands: {
      type: [
        {
          id: String,
          name: String,
          priceRange: String,
          warrantyYears: Number,
          efficiency: String,
          taglineEn: String,
          taglineHi: String,
          badge: String
        }
      ],
      default: [
        {
          id: "tata",
          name: "Tata Power Solar",
          priceRange: "₹60k - ₹75k / kW",
          warrantyYears: 25,
          efficiency: "21.8%",
          taglineEn: "Reliable • High Performance",
          taglineHi: "भरोसेमंद • उच्च प्रदर्शन",
          badge: "Most Popular"
        },
        {
          id: "waaree",
          name: "Waaree Solar",
          priceRange: "₹55k - ₹70k / kW",
          warrantyYears: 25,
          efficiency: "21.5%",
          taglineEn: "Wide Product Range • India's Largest Exporter",
          taglineHi: "विस्तृत उत्पाद रेंज • भारत का सबसे बड़ा निर्यातक",
          badge: "Best Value"
        },
        {
          id: "adani",
          name: "Adani Solar",
          priceRange: "₹65k - ₹80k / kW",
          warrantyYears: 25,
          efficiency: "22.1%",
          taglineEn: "Trusted & Ultra Efficient • Heavy Duty",
          taglineHi: "भरोसेमंद और अति-दक्ष • हैवी ड्यूटी",
          badge: "Premium Tech"
        },
        {
          id: "vikram",
          name: "Vikram Solar",
          priceRange: "₹55k - ₹70k / kW",
          warrantyYears: 25,
          efficiency: "21.3%",
          taglineEn: "Great Value • Advanced Tier-1 Tech",
          taglineHi: "शानदार वैल्यू • एडवांस्ड टियर-1 तकनीक",
          badge: "High ROI"
        }
      ]
    },
    adminPin: { type: String, default: "solar2026" }
  },
  {
    timestamps: true
  }
);

export const SiteConfig: Model<ISiteConfig> =
  mongoose.models.SiteConfig ||
  mongoose.model<ISiteConfig>("SiteConfig", SiteConfigSchema);
