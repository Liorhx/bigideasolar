import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { Coupon } from "@/models/Coupon";
import { ensureDatabaseSeeded } from "@/lib/db-init";
import { generateCouponCode } from "@/lib/solar-calc";

export async function GET(request: Request) {
  try {
    await ensureDatabaseSeeded();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "All";
    const area = searchParams.get("area") || "All";

    const query: any = {};

    if (status && status !== "All") {
      query.status = status;
    }

    if (area && area !== "All") {
      query.area = { $regex: area, $options: "i" };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { couponCode: { $regex: search, $options: "i" } },
        { area: { $regex: search, $options: "i" } }
      ];
    }

    const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      leads: leads.map((l: any) => ({
        ...l,
        id: l._id.toString()
      }))
    });
  } catch (error) {
    console.error("GET /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const {
      name,
      phone,
      area = "Lucknow",
      systemSize = "3 kW",
      monthlyBill = "₹2,000 - ₹3,000",
      propertyType = "Independent House",
      hasRooftop = "Yes",
      preferredBrand = "Tata Power Solar",
      source = "Website",
      estimatedCost = 165000,
      netCost = 87000,
      subsidy = 78000,
      discountPercent = 2
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const couponCode = generateCouponCode();

    const newLead = await Lead.create({
      name: name.trim(),
      phone: cleanPhone,
      area,
      systemSize,
      monthlyBill,
      propertyType,
      hasRooftop,
      preferredBrand,
      status: "New",
      source,
      couponCode,
      discountPercent,
      estimatedCost,
      netCost,
      subsidy,
      isCouponVerified: true,
      notes: "Lead registered via online website calculator."
    });

    // Create corresponding coupon in MongoDB
    await Coupon.create({
      code: couponCode,
      leadId: newLead._id,
      customerName: newLead.name,
      phone: newLead.phone,
      area: newLead.area,
      discountPercent,
      discountText: `${discountPercent}% Flat Off`,
      preferredBrand,
      systemSize,
      isRedeemed: false
    });

    return NextResponse.json({
      success: true,
      lead: {
        ...newLead.toObject(),
        id: newLead._id.toString()
      },
      couponCode
    });
  } catch (error) {
    console.error("POST /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
