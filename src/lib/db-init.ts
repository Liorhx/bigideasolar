import { connectToDatabase } from "./mongodb";
import { Lead } from "@/models/Lead";
import { Dealer } from "@/models/Dealer";
import { Coupon } from "@/models/Coupon";
import { SiteConfig } from "@/models/SiteConfig";

export async function ensureDatabaseSeeded() {
  try {
    await connectToDatabase();

    // 1. Ensure SiteConfig is updated with BigIdeaSolar details
    await SiteConfig.findOneAndUpdate(
      { key: "global_config" },
      {
        $set: {
          brandName: "BigIdeaSolar",
          phone: "+91 90449 14653",
          phoneRaw: "919044914653",
          whatsappNumber: "919044914653",
          email: "bigidea97@gmail.com",
          address: "510, Bahadurpur, Kalyanpur Unity City Chauraha, Lucknow (UP) - 226020",
          subsidy1Kw: 30000,
          subsidy2Kw: 60000,
          subsidy3KwPlus: 78000,
          stateSubsidyMax: 30000,
          defaultDiscountPercent: 2,
          adminPin: "solar2026"
        }
      },
      { upsert: true, new: true }
    );
    console.log("✓ Synchronized BigIdeaSolar SiteConfig in MongoDB");

    // 2. Ensure initial leads exist
    const leadCount = await Lead.countDocuments();
    if (leadCount === 0) {
      const initialLeads = [
        {
          name: "Amit Kumar",
          phone: "9876543210",
          area: "Kalyanpur / Unity City",
          systemSize: "3 kW",
          monthlyBill: "₹2,000 - ₹3,000",
          propertyType: "Independent House",
          hasRooftop: "Yes",
          preferredBrand: "Tata Power Solar",
          status: "New",
          source: "Facebook",
          couponCode: "SOLAR-8F3K2Q",
          discountPercent: 2,
          estimatedCost: 165000,
          netCost: 87000,
          subsidy: 78000,
          isCouponVerified: true,
          notes: "Wants site survey near Unity City chauraha. Has 400 sqft RCC roof."
        },
        {
          name: "Sneha Verma",
          phone: "9123456780",
          area: "Indira Nagar",
          systemSize: "2 kW",
          monthlyBill: "₹1,000 - ₹2,000",
          propertyType: "Independent House",
          hasRooftop: "Yes",
          preferredBrand: "Waaree Solar",
          status: "Contacted",
          source: "Instagram",
          couponCode: "SOLAR-4D921P",
          discountPercent: 2,
          estimatedCost: 115000,
          netCost: 55000,
          subsidy: 60000,
          isCouponVerified: true,
          notes: "Spoke regarding PM Surya Ghar subsidy paper requirements."
        },
        {
          name: "Rahul Singh",
          phone: "8765432109",
          area: "Aliganj",
          systemSize: "5 kW",
          monthlyBill: "₹5,000+",
          propertyType: "Independent House",
          hasRooftop: "Yes",
          preferredBrand: "Adani Solar",
          status: "Site Visit",
          source: "Google",
          couponCode: "SOLAR-7H2K8M",
          discountPercent: 2,
          estimatedCost: 275000,
          netCost: 197000,
          subsidy: 78000,
          isCouponVerified: true,
          notes: "Site visit engineer assigned (Sunil Kumar). Roof shadow-free."
        },
        {
          name: "Pooja Gupta",
          phone: "9988776655",
          area: "Mahanagar",
          systemSize: "3 kW",
          monthlyBill: "₹3,000 - ₹5,000",
          propertyType: "Independent House",
          hasRooftop: "Yes",
          preferredBrand: "Tata Power Solar",
          status: "Qualified",
          source: "Facebook",
          couponCode: "SOLAR-9P2X4L",
          discountPercent: 2,
          estimatedCost: 165000,
          netCost: 87000,
          subsidy: 78000,
          isCouponVerified: false,
          notes: "Interested in 0-downpayment bank loan EMI option."
        },
        {
          name: "Vikas Yadav",
          phone: "9012345678",
          area: "Jankipuram",
          systemSize: "2 kW",
          monthlyBill: "₹2,000 - ₹3,000",
          propertyType: "Independent House",
          hasRooftop: "Yes",
          preferredBrand: "Vikram Solar",
          status: "Quotation",
          source: "Instagram",
          couponCode: "SOLAR-1K9M5N",
          discountPercent: 2,
          estimatedCost: 110000,
          netCost: 50000,
          subsidy: 60000,
          isCouponVerified: true,
          notes: "Quotation sent on WhatsApp for Vikram Mono PERC system."
        }
      ];

      const inserted = await Lead.insertMany(initialLeads);

      for (const lead of inserted) {
        await Coupon.create({
          code: lead.couponCode,
          leadId: lead._id,
          customerName: lead.name,
          phone: lead.phone,
          area: lead.area,
          discountPercent: lead.discountPercent,
          discountText: `${lead.discountPercent}% Flat Off`,
          preferredBrand: lead.preferredBrand,
          systemSize: lead.systemSize,
          isRedeemed: lead.isCouponVerified
        });
      }
      console.log("✓ Seeded initial Leads & Coupons in MongoDB");
    }

    // 3. Ensure dealers exist
    const dealerCount = await Dealer.countDocuments();
    if (dealerCount === 0) {
      await Dealer.insertMany([
        {
          name: "Rajesh Chandra",
          phone: "9839012345",
          companyName: "Avadh Solar Solutions",
          city: "Lucknow / Sitapur",
          experience: "5+ Years in Electrical Contracting",
          expectedVolume: "25 kW / month",
          status: "Reviewed",
          notes: "Spoke regarding wholesale Tier-1 Tata/Waaree panels."
        },
        {
          name: "Manish Trivedi",
          phone: "9415098765",
          companyName: "Trivedi Energy & Power",
          city: "Kanpur / Unnao",
          experience: "3 Years in Solar Installation",
          expectedVolume: "40 kW / month",
          status: "Pending",
          notes: "Requires marketing kits and engineer survey support."
        }
      ]);
      console.log("✓ Seeded initial Dealers in MongoDB");
    }
  } catch (error) {
    console.error("Database seed error:", error);
  }
}
