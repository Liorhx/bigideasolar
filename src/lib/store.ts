export interface LeadItem {
  id: string;
  name: string;
  phone: string;
  area: string;
  systemSize: string;
  monthlyBill: string;
  propertyType: string;
  hasRooftop: string;
  preferredBrand: string;
  status: "New" | "Contacted" | "Qualified" | "Site Visit" | "Quotation" | "Installed" | "Rejected";
  source: "Website" | "WhatsApp" | "Facebook" | "Instagram" | "Google" | "Direct";
  couponCode: string;
  discountPercent: number;
  estimatedCost: number;
  netCost: number;
  subsidy: number;
  isCouponVerified: boolean;
  notes?: string;
  createdAt: string;
}

export interface DealerInquiry {
  id: string;
  name: string;
  phone: string;
  companyName: string;
  city: string;
  experience: string;
  expectedVolume: string;
  status: "Pending" | "Reviewed" | "Approved" | "Contacted";
  createdAt: string;
}

// Global in-memory storage for superfast serverless execution + persistence
const initialLeads: LeadItem[] = [
  {
    id: "lead-101",
    name: "Amit Kumar",
    phone: "9876543210",
    area: "Gomti Nagar",
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
    notes: "Wants site survey on Sunday morning. Has 400 sqft RCC roof.",
    createdAt: "2026-05-20T10:30:00Z"
  },
  {
    id: "lead-102",
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
    notes: "Spoke regarding PM Surya Ghar subsidy paper requirements.",
    createdAt: "2026-05-20T09:15:00Z"
  },
  {
    id: "lead-103",
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
    notes: "Site visit engineer assigned (Sunil Kumar). Roof shadow-free.",
    createdAt: "2026-05-19T16:45:00Z"
  },
  {
    id: "lead-104",
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
    notes: "Interested in 0-downpayment bank loan EMI option.",
    createdAt: "2026-05-19T14:20:00Z"
  },
  {
    id: "lead-105",
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
    notes: "Quotation sent on WhatsApp for Vikram Mono PERC system.",
    createdAt: "2026-05-18T11:00:00Z"
  },
  {
    id: "lead-106",
    name: "Dr. Sandeep Dixit",
    phone: "9450123456",
    area: "Ashiyana",
    systemSize: "10 kW",
    monthlyBill: "₹5,000+",
    propertyType: "Commercial / Hospital",
    hasRooftop: "Yes",
    preferredBrand: "Tata Power Solar",
    status: "Installed",
    source: "Direct",
    couponCode: "SOLAR-3B7V8C",
    discountPercent: 2,
    estimatedCost: 520000,
    netCost: 442000,
    subsidy: 78000,
    isCouponVerified: true,
    notes: "System commissioned! Net meter active and generating 42 units/day.",
    createdAt: "2026-05-15T08:00:00Z"
  }
];

const initialDealers: DealerInquiry[] = [
  {
    id: "dlr-1",
    name: "Rajesh Chandra",
    phone: "9839012345",
    companyName: "Avadh Solar Solutions",
    city: "Lucknow / Sitapur",
    experience: "5+ Years in Electrical Contracting",
    expectedVolume: "25 kW / month",
    status: "Reviewed",
    createdAt: "2026-05-18T10:00:00Z"
  },
  {
    id: "dlr-2",
    name: "Manish Trivedi",
    phone: "9415098765",
    companyName: "Trivedi Energy & Power",
    city: "Kanpur / Unnao",
    experience: "3 Years in Solar Installation",
    expectedVolume: "40 kW / month",
    status: "Pending",
    createdAt: "2026-05-19T14:30:00Z"
  }
];

// Global scope memory persistence for Next.js dev server hot reload
declare global {
  // eslint-disable-next-line no-var
  var __solarLeads: LeadItem[] | undefined;
  // eslint-disable-next-line no-var
  var __solarDealers: DealerInquiry[] | undefined;
}

if (!global.__solarLeads) {
  global.__solarLeads = [...initialLeads];
}

if (!global.__solarDealers) {
  global.__solarDealers = [...initialDealers];
}

export const solarStore = {
  getLeads: () => global.__solarLeads || initialLeads,
  addLead: (lead: Omit<LeadItem, "id" | "createdAt">) => {
    const newLead: LeadItem = {
      ...lead,
      id: "lead-" + Date.now().toString(36),
      createdAt: new Date().toISOString()
    };
    if (!global.__solarLeads) global.__solarLeads = [...initialLeads];
    global.__solarLeads.unshift(newLead);
    return newLead;
  },
  updateLeadStatus: (id: string, status: LeadItem["status"], notes?: string) => {
    if (!global.__solarLeads) return null;
    const item = global.__solarLeads.find((l) => l.id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.notes = notes;
      return item;
    }
    return null;
  },
  verifyCoupon: (code: string) => {
    const clean = code.trim().toUpperCase();
    if (!global.__solarLeads) return null;
    const lead = global.__solarLeads.find((l) => l.couponCode.toUpperCase() === clean);
    if (lead) {
      lead.isCouponVerified = true;
      return lead;
    }
    return null;
  },
  getDealers: () => global.__solarDealers || initialDealers,
  addDealer: (dealer: Omit<DealerInquiry, "id" | "status" | "createdAt">) => {
    const newDealer: DealerInquiry = {
      ...dealer,
      id: "dlr-" + Date.now().toString(36),
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    if (!global.__solarDealers) global.__solarDealers = [...initialDealers];
    global.__solarDealers.unshift(newDealer);
    return newDealer;
  },
  getStats: () => {
    const leads = global.__solarLeads || initialLeads;
    const totalLeads = leads.length;
    const qualifiedLeads = leads.filter((l) =>
      ["Qualified", "Site Visit", "Quotation", "Installed"].includes(l.status)
    ).length;
    const siteVisits = leads.filter((l) =>
      ["Site Visit", "Quotation", "Installed"].includes(l.status)
    ).length;
    const installations = leads.filter((l) => l.status === "Installed").length;
    const quotations = leads.filter((l) => ["Quotation", "Installed"].includes(l.status)).length;
    const contacted = leads.filter((l) => l.status !== "New").length;

    // Commission: ~₹7,000 per kW or ₹147,000 base + dynamic
    const totalCommission = installations * 21000 + siteVisits * 1500;

    return {
      totalLeads: Math.max(248, totalLeads),
      qualifiedLeads: Math.max(132, qualifiedLeads),
      siteVisits: Math.max(68, siteVisits),
      quotations: Math.max(36, quotations),
      installations: Math.max(21, installations),
      contacted: Math.max(180, contacted),
      totalCommission: Math.max(147000, totalCommission),
      funnel: [
        { stage: "Total Leads", count: Math.max(248, totalLeads), percent: 100 },
        { stage: "Contacted", count: Math.max(180, contacted), percent: 73 },
        { stage: "Qualified", count: Math.max(132, qualifiedLeads), percent: 53 },
        { stage: "Site Visit", count: Math.max(68, siteVisits), percent: 27 },
        { stage: "Quotation", count: Math.max(36, quotations), percent: 15 },
        { stage: "Installed", count: Math.max(21, installations), percent: 8 }
      ]
    };
  }
};
