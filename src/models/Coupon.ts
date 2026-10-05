import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICoupon extends Document {
  code: string;
  leadId?: mongoose.Types.ObjectId;
  customerName: string;
  phone: string;
  area: string;
  discountPercent: number;
  discountText: string;
  preferredBrand: string;
  systemSize: string;
  isRedeemed: boolean;
  redeemedAt?: Date;
  redeemedBy?: string;
  createdAt: Date;
}

const CouponSchema = new Schema<ICoupon>(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true },
    leadId: { type: Schema.Types.ObjectId, ref: "Lead" },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    area: { type: String, default: "Lucknow" },
    discountPercent: { type: Number, default: 2 },
    discountText: { type: String, default: "2% Flat Off" },
    preferredBrand: { type: String, default: "Tata Power Solar" },
    systemSize: { type: String, default: "3 kW" },
    isRedeemed: { type: Boolean, default: false },
    redeemedAt: { type: Date },
    redeemedBy: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

export const Coupon: Model<ICoupon> =
  mongoose.models.Coupon || mongoose.model<ICoupon>("Coupon", CouponSchema);
