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

export function calculateSolar(billAmount: number): SolarCalculationResult {
  // Average tariff in UP / Lucknow (UPPCL): ~₹7.5 per unit
  const tariffPerUnit = 7.5;
  const estimatedUnitsMonthly = Math.round(billAmount / tariffPerUnit);

  // 1 kW solar generates approx 120-130 units per month in Lucknow (4-4.5 units/day)
  let kw = Math.ceil(estimatedUnitsMonthly / 125);
  if (kw < 1) kw = 1;
  if (kw > 15) kw = 15;

  // Approximate gross cost per kW before subsidy:
  // 1 kW: ₹55,000 - ₹70,000
  // 2 kW: ₹1,20,000 - ₹1,40,000
  // 3 kW: ₹1,75,000 - ₹2,00,000
  // >3 kW: ₹55,000 - ₹65,000 / kW
  let costMin = 0;
  let costMax = 0;

  if (kw === 1) {
    costMin = 55000;
    costMax = 70000;
  } else if (kw === 2) {
    costMin = 120000;
    costMax = 140000;
  } else if (kw === 3) {
    costMin = 175000;
    costMax = 200000;
  } else {
    costMin = kw * 55000;
    costMax = kw * 65000;
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

  const netCostMin = Math.max(20000, costMin - totalSubsidy);
  const netCostMax = Math.max(30000, costMax - totalSubsidy);

  // 1 kW requires ~80-100 sq.ft shadow-free RCC / Tin roof area
  const roofAreaSqFt = kw * 90;

  // Monthly savings = units generated * tariff (capped near the bill amount)
  const unitsGeneratedMonthly = kw * 125;
  const monthlySavings = Math.min(billAmount, Math.round(unitsGeneratedMonthly * tariffPerUnit));
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
