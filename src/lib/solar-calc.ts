export interface SolarCalculationResult {
  recommendedKw: number;
  monthlyBill: number;
  unitsMonthly: number;
  roofAreaSqFt: number;
  costMin: number;
  costMax: number;
  centralSubsidy: number;
  stateSubsidy: number;
  totalSubsidy: number;
  netCostMin: number;
  netCostMax: number;
  monthlySavings: number;
  yearlySavings: number;
  savings25Years: number;
  paybackYears: number;
  co2OffsetTons: number;
  treesEquivalent: number;
}

export function calculateSolar(billAmount: number, forceKw?: number): SolarCalculationResult {
  // Average tariff in UP / Lucknow (UPPCL): ~₹7.5 per unit
  const tariffPerUnit = 7.5;
  const estimatedUnitsMonthly = Math.round(billAmount / tariffPerUnit);

  // Determine capacity dynamically or via explicit user choice
  let kw: number;
  if (forceKw && forceKw >= 1) {
    kw = forceKw;
  } else if (billAmount <= 1500) {
    kw = 1;
  } else if (billAmount <= 2500) {
    kw = 2;
  } else if (billAmount <= 4000) {
    kw = 3;
  } else {
    kw = Math.min(10, Math.max(4, Math.ceil(estimatedUnitsMonthly / 125)));
  }

  // Approximate gross cost per kW before subsidy:
  // 1 kW: ₹55,000 - ₹70,000
  // 2 kW: ₹1,20,000 - ₹1,40,000
  // 3 kW: ₹1,80,000 - ₹2,10,000
  // 4 kW: ₹2,10,000 - ₹2,40,000
  // 5 kW: ₹2,40,000 - ₹2,70,000
  // 6 kW: ₹2,70,000 - ₹3,00,000
  let costMin = 0;
  let costMax = 0;

  if (kw === 1) {
    costMin = 55000;
    costMax = 70000;
  } else if (kw === 2) {
    costMin = 120000;
    costMax = 140000;
  } else if (kw === 3) {
    costMin = 180000;
    costMax = 210000;
  } else if (kw === 4) {
    costMin = 210000;
    costMax = 240000;
  } else if (kw === 5) {
    costMin = 240000;
    costMax = 270000;
  } else if (kw === 6) {
    costMin = 270000;
    costMax = 300000;
  } else {
    costMin = 270000 + (kw - 6) * 30000;
    costMax = 300000 + (kw - 6) * 35000;
  }

  // Central PM Surya Ghar Subsidy:
  // 1 kW: ₹0 (No subsidy provided)
  // 2 kW: ₹60,000
  // 3 kW or above: ₹78,000 max
  let centralSubsidy = 0;
  if (kw === 1) {
    centralSubsidy = 0;
  } else if (kw === 2) {
    centralSubsidy = 60000;
  } else {
    centralSubsidy = 78000;
  }

  // UP State Government (UPNEDA) additional subsidy:
  // 1 kW: ₹0 (No subsidy provided)
  // 2 kW: ₹30,000
  // 3 kW or above: ₹30,000 (Capped at ₹30,000 max)
  let stateSubsidy = 0;
  if (kw === 1) {
    stateSubsidy = 0;
  } else {
    stateSubsidy = 30000;
  }

  // Total Combined Direct Subsidy: Central + UP State
  // 1 kW: ₹0 (No subsidy provided)
  // 2 kW: ₹60,000 + ₹30,000 = ₹90,000
  // 3 kW: ₹78,000 + ₹30,000 = ₹1,08,000
  // >3 kW: ₹78,000 + ₹30,000 = ₹1,08,000
  const totalSubsidy = centralSubsidy + stateSubsidy;

  let netCostMin = 0;
  let netCostMax = 0;

  if (kw === 1) {
    netCostMin = costMin;
    netCostMax = costMax;
  } else {
    netCostMin = Math.max(30000, costMin - totalSubsidy);
    netCostMax = Math.max(45000, costMax - totalSubsidy);
  }

  // 1 kW requires ~80-100 sq.ft shadow-free RCC / Tin roof area
  const roofAreaSqFt = kw * 90;

  // Monthly power bill savings (aligned with Step 1 monthly bill ranges & UPPCL net-meter generation):
  // 1 kW: ~₹1,100 / month (replaces ₹800 - ₹1,500 bill)
  // 2 kW: ~₹2,000 / month (replaces ₹1,500 - ₹2,500 bill)
  // 3 kW: ~₹3,200 / month (replaces ₹2,500 - ₹4,000 bill)
  // 4 kW: ~₹4,800 / month (replaces ₹4,000 - ₹5,500 bill)
  // 5 kW: ~₹6,500 / month (replaces ₹5,500 - ₹7,500 bill)
  // 6 kW: ~₹8,200 / month (replaces ₹7,500+ bill)
  let monthlySavings = 0;
  if (kw === 1) {
    monthlySavings = 1100;
  } else if (kw === 2) {
    monthlySavings = 2000;
  } else if (kw === 3) {
    monthlySavings = 3200;
  } else if (kw === 4) {
    monthlySavings = 4800;
  } else if (kw === 5) {
    monthlySavings = 6500;
  } else if (kw === 6) {
    monthlySavings = 8200;
  } else {
    monthlySavings = kw * 1350;
  }

  const yearlySavings = monthlySavings * 12;
  const savings25Years = yearlySavings * 25;

  const averageNetCost = (netCostMin + netCostMax) / 2;
  const paybackYears = Number((averageNetCost / (yearlySavings || 1)).toFixed(1));

  // Environmental impact
  const co2OffsetTons = Number((kw * 1.3).toFixed(1));
  const treesEquivalent = Math.round(kw * 28);

  return {
    recommendedKw: kw,
    monthlyBill: billAmount,
    unitsMonthly: estimatedUnitsMonthly,
    roofAreaSqFt,
    costMin,
    costMax,
    centralSubsidy,
    stateSubsidy,
    totalSubsidy,
    netCostMin,
    netCostMax,
    monthlySavings,
    yearlySavings,
    savings25Years,
    paybackYears,
    co2OffsetTons,
    treesEquivalent
  };
}

export function generateCouponCode(): string {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let code = "SOLAR-";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
