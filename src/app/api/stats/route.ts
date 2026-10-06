import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { ensureDatabaseSeeded } from "@/lib/db-init";

export async function GET() {
  try {
    await ensureDatabaseSeeded();

    // 100% Real-time database counts
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: "New" });
    const contacted = await Lead.countDocuments({ status: { $ne: "New" } });
    const qualified = await Lead.countDocuments({
      status: { $in: ["Qualified", "Site Visit", "Quotation", "Installed"] }
    });
    const siteVisits = await Lead.countDocuments({
      status: { $in: ["Site Visit", "Quotation", "Installed"] }
    });
    const quotations = await Lead.countDocuments({
      status: { $in: ["Quotation", "Installed"] }
    });
    const installations = await Lead.countDocuments({ status: "Installed" });

    // Leads created in last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const leadsLast7Days = await Lead.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    });

    // Real aggregate revenue & commission from MongoDB
    const allLeads = await Lead.find().lean();
    const totalProjectValue = allLeads.reduce((acc, curr: any) => acc + (curr.estimatedCost || 0), 0);
    const totalInstalledValue = allLeads
      .filter((l: any) => l.status === "Installed")
      .reduce((acc, curr: any) => acc + (curr.estimatedCost || 165000), 0);
    
    // Commission earned: ₹21,000 per install + ₹1,500 per site visit
    const totalCommission = installations * 21000 + siteVisits * 1500;

    const calcPercent = (count: number) =>
      totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalLeads,
        newLeads,
        qualifiedLeads: qualified,
        siteVisits,
        quotations,
        installations,
        contacted,
        leadsLast7Days,
        totalProjectValue,
        totalInstalledValue,
        totalCommission,
        funnel: [
          { stage: "Total Leads", count: totalLeads, percent: 100 },
          {
            stage: "Contacted",
            count: contacted,
            percent: calcPercent(contacted)
          },
          {
            stage: "Qualified",
            count: qualified,
            percent: calcPercent(qualified)
          },
          {
            stage: "Site Visit",
            count: siteVisits,
            percent: calcPercent(siteVisits)
          },
          {
            stage: "Quotation",
            count: quotations,
            percent: calcPercent(quotations)
          },
          {
            stage: "Installed",
            count: installations,
            percent: calcPercent(installations)
          }
        ]
      }
    });
  } catch (error) {
    console.error("GET /api/stats error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
