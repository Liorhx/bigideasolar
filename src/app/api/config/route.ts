import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { SiteConfig } from "@/models/SiteConfig";
import { ensureDatabaseSeeded } from "@/lib/db-init";

export async function GET() {
  try {
    await ensureDatabaseSeeded();
    let config = await SiteConfig.findOne({ key: "global_config" }).lean();
    if (!config) {
      config = await SiteConfig.create({ key: "global_config" });
    }

    return NextResponse.json({ success: true, config });
  } catch (error) {
    console.error("GET /api/config error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const updated = await SiteConfig.findOneAndUpdate(
      { key: "global_config" },
      { $set: body },
      { new: true, upsert: true }
    ).lean();

    return NextResponse.json({
      success: true,
      config: updated,
      message: "Site settings updated in MongoDB successfully"
    });
  } catch (error) {
    console.error("PATCH /api/config error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
