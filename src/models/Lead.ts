import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  name: string;
  phone: string;
  area: string;
  systemSize: string;
  monthlyBill: string;
  propertyType: string;
  hasRooftop: string;
  preferredBrand: string;
  status: "New" | "Contacted" | "Qualified" | "Site Visit" | "Quotation" | "Installed" | "Rejected";
  source: string;
  couponCode: string;
  discountPercent: number;
  estimatedCost: number;
  netCost: number;
  subsidy: number;
  isCouponVerified: boolean;
  notes?: string;
  assignedInstaller?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    area: { type: String, default: "Lucknow", trim: true },
    systemSize: { type: String, default: "3 kW" },
    monthlyBill: { type: String, default: "₹2,000 - ₹3,000" },
    propertyType: { type: String, default: "Independent House" },
    hasRooftop: { type: String, default: "Yes" },
    preferredBrand: { type: String, default: "Tata Power Solar" },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Site Visit", "Quotation", "Installed", "Rejected"],
      default: "New",
      index: true
    },
    source: { type: String, default: "Website" },
    couponCode: { type: String, index: true },
    discountPercent: { type: Number, default: 2 },
    estimatedCost: { type: Number, default: 165000 },
    netCost: { type: Number, default: 87000 },
    subsidy: { type: Number, default: 78000 },
    isCouponVerified: { type: Boolean, default: false },
    notes: { type: String, default: "" },
    assignedInstaller: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

export const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
