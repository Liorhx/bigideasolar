"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  Calendar,
  Wrench,
  IndianRupee,
  Search,
  Filter,
  Download,
  Plus,
  MessageSquare,
  Phone,
  ShieldCheck,
  TrendingUp,
  Tag,
  Check,
  X,
  RefreshCw,
  Sun,
  LayoutDashboard,
  FileSpreadsheet,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  Settings,
  Lock,
  Unlock,
  Save,
  KeyRound,
  Database
} from "lucide-react";

export default function AdminPage() {
  // Authentication PIN guard (Default: solar2026)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<"dashboard" | "dealers" | "coupons" | "settings">("dashboard");
  const [leads, setLeads] = useState<any[]>([]);
  const [dealers, setDealers] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalLeads: 248,
    qualifiedLeads: 132,
    siteVisits: 68,
    installations: 21,
    totalCommission: 147000,
    funnel: [
      { stage: "Total Leads", count: 248, percent: 100 },
      { stage: "Contacted", count: 180, percent: 73 },
      { stage: "Qualified", count: 132, percent: 53 },
      { stage: "Site Visit", count: 68, percent: 27 },
      { stage: "Quotation", count: 36, percent: 15 },
      { stage: "Installed", count: 21, percent: 8 }
    ]
  });

  // Dynamic Site Settings state from MongoDB
  const [siteSettings, setSiteSettings] = useState({
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
  });

  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [settingsSaveMsg, setSettingsSaveMsg] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [areaFilter, setAreaFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Coupon verifier state
  const [couponInput, setCouponInput] = useState("");
  const [couponResult, setCouponResult] = useState<{
    success?: boolean;
    verified?: boolean;
    couponCode?: string;
    customerName?: string;
    phone?: string;
    area?: string;
    systemSize?: string;
    discount?: string;
    message?: string;
    error?: string;
  } | null>(null);
  const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);

  // New Lead Modal state
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: "",
    phone: "",
    area: "Gomti Nagar",
    systemSize: "3 kW",
    monthlyBill: "₹2,000 - ₹3,000",
    preferredBrand: "Tata Power Solar",
    source: "Direct"
  });

  useEffect(() => {
    // Check if session PIN is saved in sessionStorage
    const savedPin = sessionStorage.getItem("solar_admin_auth");
    if (savedPin === "authenticated") {
      setIsAuthenticated(true);
      fetchDashboardData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    if (pinInput.trim() === "solar2026" || pinInput.trim() === siteSettings.adminPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem("solar_admin_auth", "authenticated");
      fetchDashboardData();
    } else {
      setAuthError("Incorrect Admin PIN. Please check and try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("solar_admin_auth");
  };

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const [leadsRes, statsRes, dealersRes, configRes] = await Promise.all([
        fetch("/api/leads"),
        fetch("/api/stats"),
        fetch("/api/dealer"),
        fetch("/api/config")
      ]);

      const leadsData = await leadsRes.json();
      const statsData = await statsRes.json();
      const dealersData = await dealersRes.json();
      const configData = await configRes.json();

      if (leadsData.success && leadsData.leads) setLeads(leadsData.leads);
      if (statsData.success && statsData.stats) setStats(statsData.stats);
      if (dealersData.success && dealersData.dealers) setDealers(dealersData.dealers);
      if (configData.success && configData.config) setSiteSettings(configData.config);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error("Update lead status error:", err);
    }
  };

  const handleVerifyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    setIsVerifyingCoupon(true);
    setCouponResult(null);

    try {
      const res = await fetch("/api/coupons/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: couponInput.trim().toUpperCase(),
          markRedeemed: true
        })
      });
      const data = await res.json();
      setCouponResult(data);
    } catch (err) {
      setCouponResult({ success: false, error: "Verification server error" });
    } finally {
      setIsVerifyingCoupon(false);
    }
  };

  const handleAddManualLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) return;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeadForm)
      });
      const data = await res.json();
      if (data.success) {
        setShowAddLeadModal(false);
        setNewLeadForm({
          name: "",
          phone: "",
          area: "Gomti Nagar",
          systemSize: "3 kW",
          monthlyBill: "₹2,000 - ₹3,000",
          preferredBrand: "Tata Power Solar",
          source: "Direct"
        });
        fetchDashboardData();
      }
    } catch (err) {
      console.error("Add manual lead error:", err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    setSettingsSaveMsg("");

    try {
      const res = await fetch("/api/config", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(siteSettings)
      });
      const data = await res.json();
      if (data.success) {
        setSettingsSaveMsg("✓ Site Settings & Dynamic Pricing saved to MongoDB Atlas!");
        setTimeout(() => setSettingsSaveMsg(""), 4000);
      }
    } catch (err) {
      console.error("Save settings error:", err);
    } finally {
      setIsSavingSettings(false);
    }
  };

  const exportLeadsToCSV = () => {
    const headers = "Name,Phone,Area,System Size,Bill,Brand,Status,Source,Coupon Code,Created At\n";
    const rows = leads
      .map(
        (l) =>
          `"${l.name}","${l.phone}","${l.area}","${l.systemSize}","${l.monthlyBill}","${l.preferredBrand}","${l.status}","${l.source}","${l.couponCode}","${l.createdAt}"`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BigIdeaSolar_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone?.includes(searchQuery) ||
      l.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.couponCode?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || l.status === statusFilter;
    const matchesArea = areaFilter === "All" || l.area === areaFilter;

    return matchesSearch && matchesStatus && matchesArea;
  });

  // ========================================================
  // PIN AUTHENTICATION LOCK SCREEN
  // ========================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl max-w-md w-full p-8 text-white shadow-2xl backdrop-blur-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Lock className="w-7 h-7 text-amber-300" />
            </div>
            <h1 className="text-2xl font-black tracking-tight">Admin & CRM Access</h1>
            <p className="text-xs text-slate-400">
              Secure Channel Portal • Connected to MongoDB Atlas
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400 text-rose-200 text-xs font-bold text-center">
                {authError}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Enter Admin PIN</span>
                <span className="text-[10px] text-emerald-400">Default: solar2026</span>
              </label>
              <input
                type="password"
                required
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-center text-lg font-mono font-black tracking-widest text-amber-300 outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin CRM</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ========================================================
  // AUTHENTICATED ADMIN DASHBOARD
  // ========================================================
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Admin Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md">
                  <Sun className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <span className="font-black text-slate-900 text-base">
                    BigIdea<span className="text-emerald-600">Solar</span>
                  </span>
                  <span className="ml-2 text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200 flex-inline items-center gap-1">
                    <Database className="w-2.5 h-2.5 inline mr-1" /> MongoDB Atlas
                  </span>
                </div>
              </Link>
            </div>

            {/* Date Range & Profile */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Active 30-Day CRM Pipeline</span>
              </div>

              {/* Admin Avatar */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  RY
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-slate-800 leading-none">Rahul Yadav</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">Channel Admin</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors"
                title="Lock and Log Out"
              >
                Lock CRM
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            {[
              { id: "dashboard", label: `Leads (${leads.length})`, icon: LayoutDashboard },
              { id: "dealers", label: `Dealer Inquiries (${dealers.length})`, icon: Users },
              { id: "coupons", label: "Coupon Verifier", icon: Tag },
              { id: "settings", label: "Site Settings & Pricing", icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportLeadsToCSV}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setShowAddLeadModal(true)}
              className="flex items-center gap-1.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Lead</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5 KPI Metric Cards (From Mockup Bottom CRM Panel) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Card 1: Total Leads */}
          <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Leads</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-black text-slate-900">{stats.totalLeads}</p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                ↑ 12% from last 7 days
              </span>
            </div>
          </div>

          {/* Card 2: Qualified Leads */}
          <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Qualified Leads</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-black text-slate-900">{stats.qualifiedLeads}</p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                ↑ 18% from last 7 days
              </span>
            </div>
          </div>

          {/* Card 3: Site Visits */}
          <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Site Visits</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-black text-slate-900">{stats.siteVisits}</p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                ↑ 24% from last 7 days
              </span>
            </div>
          </div>

          {/* Card 4: Installations */}
          <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Installations</span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-black text-slate-900">{stats.installations}</p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                ↑ 32% from last 7 days
              </span>
            </div>
          </div>

          {/* Card 5: Total Commission */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-4.5 border border-emerald-600 shadow-md flex flex-col justify-between col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-100 uppercase">Total Revenue</span>
              <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-black text-white">
                ₹{stats.totalCommission.toLocaleString("en-IN")}
              </p>
              <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1 mt-0.5">
                ↑ 28% from last 7 days
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN DASHBOARD VIEW (Lead Funnel + CRM Table + Verifier) */}
        {/* ======================================================== */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Lead Funnel Chart (Matches Mockup Funnel) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 text-sm">Lead Funnel</h3>
                <span className="text-xs font-bold text-emerald-600">30-Day Conversion</span>
              </div>

              <div className="space-y-3 pt-1">
                {stats.funnel.map((item, idx) => {
                  const colors = [
                    "bg-blue-600",
                    "bg-teal-500",
                    "bg-emerald-500",
                    "bg-amber-500",
                    "bg-orange-500",
                    "bg-purple-600"
                  ];
                  return (
                    <div key={item.stage} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700">{item.stage}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900">{item.count}</span>
                          <span className="text-[10px] text-slate-400">({item.percent}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${colors[idx % colors.length]}`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Coupon Verification Mini Box (Right Panel in Mockup) */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Coupon Verification</span>
                </h4>

                <form onSubmit={handleVerifyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Enter Coupon Code"
                    className="flex-1 px-3 py-2 text-xs uppercase font-mono font-bold border border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={isVerifyingCoupon}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs"
                  >
                    {isVerifyingCoupon ? "..." : "Verify"}
                  </button>
                </form>

                {couponResult && (
                  <div
                    className={`mt-2.5 p-3 rounded-xl text-xs ${
                      couponResult.verified
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                        : "bg-rose-50 border border-rose-200 text-rose-800"
                    }`}
                  >
                    {couponResult.verified ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between font-bold">
                          <span>✓ {couponResult.couponCode}</span>
                          <span className="text-emerald-700">{couponResult.discount}</span>
                        </div>
                        <p className="text-[11px] text-slate-600">
                          {couponResult.customerName} ({couponResult.area || "Lucknow"})
                        </p>
                      </div>
                    ) : (
                      <p className="font-bold">{couponResult.error || "Invalid coupon code"}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Recent Leads Table (Matches Mockup Table) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col">
              {/* Filter / Search Bar */}
              <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-extrabold text-slate-900 text-base">
                  Recent Leads ({filteredLeads.length})
                </h3>

                <div className="flex items-center gap-2.5 flex-1 max-w-md">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search lead name, phone, area..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 outline-none font-bold text-slate-700"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Quotation">Quotation</option>
                    <option value="Installed">Installed</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 text-[11px] uppercase">
                    <tr>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-3">Phone</th>
                      <th className="py-3 px-3">Area</th>
                      <th className="py-3 px-2">Size</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3">Source</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredLeads.map((lead) => {
                      const statusStyles: Record<string, string> = {
                        New: "bg-blue-50 text-blue-700 border-blue-200",
                        Contacted: "bg-amber-50 text-amber-700 border-amber-200",
                        Qualified: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        "Site Visit": "bg-teal-50 text-teal-700 border-teal-200",
                        Quotation: "bg-indigo-50 text-indigo-700 border-indigo-200",
                        Installed: "bg-purple-50 text-purple-700 border-purple-200",
                        Rejected: "bg-rose-50 text-rose-700 border-rose-200"
                      };

                      return (
                        <tr key={lead.id || lead._id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900">
                            <div>{lead.name}</div>
                            <span className="text-[10px] font-mono text-emerald-700">
                              {lead.couponCode}
                            </span>
                          </td>
                          <td className="py-3 px-3 font-mono font-medium">{lead.phone}</td>
                          <td className="py-3 px-3">{lead.area}</td>
                          <td className="py-3 px-2 font-bold text-slate-800">{lead.systemSize}</td>
                          <td className="py-3 px-3">
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                handleUpdateStatus(lead.id || lead._id, e.target.value)
                              }
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border outline-none cursor-pointer ${
                                statusStyles[lead.status] || "bg-slate-50 text-slate-700"
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Site Visit">Site Visit</option>
                              <option value="Quotation">Quotation</option>
                              <option value="Installed">Installed</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                              {lead.source}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(
                                  `Hello ${lead.name}, greetings from BigIdeaSolar! Regarding your inquiry for ${lead.systemSize} solar in ${lead.area} (Coupon: ${lead.couponCode}).`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>
                              <a
                                href={`tel:${lead.phone}`}
                                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                                title="Call Lead"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* DEALER INQUIRIES VIEW */}
        {/* ======================================================== */}
        {activeTab === "dealers" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Solar Dealer & Franchisee Applications ({dealers.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Prospective channel partners wanting to sell and install solar in UP.
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                {dealers.length} Registered Partners
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {dealers.map((dealer) => (
                <div
                  key={dealer.id || dealer._id}
                  className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">
                        {dealer.name}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-700">
                        {dealer.companyName}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                      {dealer.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
                    <div>
                      <span className="font-bold text-slate-500 block">City:</span>
                      <span>{dealer.city}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500 block">Experience:</span>
                      <span>{dealer.experience}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500 block">Volume:</span>
                      <span>{dealer.expectedVolume}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500 block">Phone:</span>
                      <span className="font-mono">{dealer.phone}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <a
                      href={`https://wa.me/91${dealer.phone}?text=${encodeURIComponent(
                        `Hello ${dealer.name}, this is BigIdeaSolar Channel Partner Management. We reviewed your dealer registration for ${dealer.city}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Partner</span>
                    </a>
                    <a
                      href={`tel:${dealer.phone}`}
                      className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* COUPON VERIFIER TAB VIEW */}
        {/* ======================================================== */}
        {activeTab === "coupons" && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Installer Coupon Code Verification
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Enter the customer&apos;s coupon code from their WhatsApp message or voucher to verify their 2% discount and system details.
              </p>
            </div>

            <form onSubmit={handleVerifyCoupon} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Coupon Code</label>
                <input
                  type="text"
                  required
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="e.g. SOLAR-8F3K2Q"
                  className="w-full px-4 py-3 text-base uppercase font-mono font-black border border-slate-300 rounded-xl outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                disabled={isVerifyingCoupon}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all"
              >
                {isVerifyingCoupon ? "Verifying..." : "Verify & Mark Redeemed"}
              </button>
            </form>

            {couponResult && (
              <div
                className={`p-5 rounded-2xl border ${
                  couponResult.verified
                    ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                    : "bg-rose-50 border-rose-200 text-rose-900"
                }`}
              >
                {couponResult.verified ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-black text-lg text-emerald-800">
                        ✓ {couponResult.couponCode}
                      </span>
                      <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                        {couponResult.discount}
                      </span>
                    </div>
                    <p className="text-xs font-semibold">
                      Customer: {couponResult.customerName} | Phone: {couponResult.phone}
                    </p>
                    <p className="text-xs text-slate-600">
                      Area: {couponResult.area} | System: {couponResult.systemSize}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs font-bold">{couponResult.error}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* DYNAMIC SITE SETTINGS & PRICING TAB (No Hardcoding!) */}
        {/* ======================================================== */}
        {activeTab === "settings" && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Dynamic Site Settings & Pricing Management
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Update central subsidy, pricing, phone numbers, and security PIN directly in MongoDB.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-bold">
                <Database className="w-3.5 h-3.5" />
                <span>MongoDB Sync</span>
              </div>
            </div>

            {settingsSaveMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold text-xs text-center animate-in fade-in">
                {settingsSaveMsg}
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Subsidy Management */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-emerald-600" />
                  <span>Central Govt PM Surya Ghar Subsidy Slabs (₹)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">1 kW Subsidy</label>
                    <input
                      type="number"
                      value={siteSettings.subsidy1Kw}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, subsidy1Kw: Number(e.target.value) })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">2 kW Subsidy</label>
                    <input
                      type="number"
                      value={siteSettings.subsidy2Kw}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, subsidy2Kw: Number(e.target.value) })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">3 kW+ Max Subsidy</label>
                    <input
                      type="number"
                      value={siteSettings.subsidy3KwPlus}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, subsidy3KwPlus: Number(e.target.value) })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Public Contact & Support Numbers</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Display</label>
                    <input
                      type="text"
                      value={siteSettings.phone}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">WhatsApp Raw Number</label>
                    <input
                      type="text"
                      value={siteSettings.whatsappNumber}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, whatsappNumber: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Support Email</label>
                    <input
                      type="email"
                      value={siteSettings.email}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Security & Admin PIN */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-emerald-600" />
                  <span>Admin CRM Security PIN</span>
                </h4>
                <div className="max-w-xs space-y-1">
                  <label className="text-xs font-bold text-slate-700">Change Admin PIN</label>
                  <input
                    type="text"
                    value={siteSettings.adminPin}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, adminPin: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono font-bold text-slate-900 outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Save Settings Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSavingSettings}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isSavingSettings ? "Saving..." : "Save Settings to MongoDB"}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Manual Add Lead Modal */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-slate-900 text-lg">Add Offline / Inbound Lead</h3>
              <button
                onClick={() => setShowAddLeadModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualLead} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                  placeholder="e.g. Suresh Patel"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={newLeadForm.phone}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                  placeholder="10-digit number"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Area</label>
                  <input
                    type="text"
                    value={newLeadForm.area}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, area: e.target.value })}
                    placeholder="e.g. Gomti Nagar"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">System Size</label>
                  <select
                    value={newLeadForm.systemSize}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, systemSize: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                  >
                    <option value="2 kW">2 kW</option>
                    <option value="3 kW">3 kW</option>
                    <option value="5 kW">5 kW</option>
                    <option value="10 kW">10 kW</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 font-bold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20"
                >
                  Save Lead to MongoDB
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
