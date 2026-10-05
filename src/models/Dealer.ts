import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDealer extends Document {
  name: string;
  phone: string;
  companyName: string;
  city: string;
  experience: string;
  expectedVolume: string;
  status: "Pending" | "Reviewed" | "Approved" | "Contacted";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const DealerSchema = new Schema<IDealer>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    companyName: { type: String, default: "Solar Channel Partner", trim: true },
    city: { type: String, default: "Lucknow", trim: true },
    experience: { type: String, default: "1-3 Years" },
    expectedVolume: { type: String, default: "20-40 kW" },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Approved", "Contacted"],
      default: "Pending"
    },
    notes: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

export const Dealer: Model<IDealer> =
  mongoose.models.Dealer || mongoose.model<IDealer>("Dealer", DealerSchema);
