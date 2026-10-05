import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Dealer } from "@/models/Dealer";
import { ensureDatabaseSeeded } from "@/lib/db-init";

export async function GET() {
  try {
    await ensureDatabaseSeeded();
    const dealers = await Dealer.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      dealers: dealers.map((d: any) => ({
        ...d,
        id: d._id.toString()
      }))
    });
  } catch (error) {
    console.error("GET /api/dealer error:", error);
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
    const { name, phone, companyName, city, experience, expectedVolume } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, "").slice(-10);

    const newDealer = await Dealer.create({
      name: name.trim(),
      phone: cleanPhone,
      companyName: companyName?.trim() || "Solar Channel Partner",
      city: city?.trim() || "Lucknow",
      experience: experience || "1-3 Years",
      expectedVolume: expectedVolume || "20-40 kW",
      status: "Pending"
    });

    return NextResponse.json({
      success: true,
      dealer: {
        ...newDealer.toObject(),
        id: newDealer._id.toString()
      },
      message: "Partner application submitted successfully"
    });
  } catch (error) {
    console.error("POST /api/dealer error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
