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
  // Average tariff in UP / Lucknow: ~₹7.5 per unit
  const tariffPerUnit = 7.5;
  const estimatedUnitsMonthly = Math.round(billAmount / tariffPerUnit);

  // 1 kW solar generates approx 120-130 units per month in Lucknow / North India (4-4.5 units/day)
  let kw = Math.ceil(estimatedUnitsMonthly / 125);
  if (kw < 2) kw = 2; // Minimum standard grid-tied residential install
  if (kw > 15) kw = 15;

  // Approximate cost per kW in market before subsidy: ₹55,000 - ₹62,000 per kW
  const costMin = kw * 50000;
  const costMax = kw * 60000;

  // Central PM Surya Ghar Muft Bijli Yojana subsidy:
  // 1 kW: ₹30,000
  // 2 kW: ₹60,000
  // 3 kW or above: ₹78,000 max
  let centralSubsidy = 0;
  if (kw === 1) centralSubsidy = 30000;
  else if (kw === 2) centralSubsidy = 60000;
  else centralSubsidy = 78000;

  // UP State Government Surya Mitra / UPNEDA additional subsidy:
  // ₹15,000/kW up to max ₹30,000
  let stateSubsidy = 0;
  if (kw === 1) stateSubsidy = 15000;
  else stateSubsidy = 30000;

  const totalSubsidy = centralSubsidy; // Keep conservative on central guarantee, highlight up to total

  const netCostMin = Math.max(20000, costMin - totalSubsidy);
  const netCostMax = Math.max(30000, costMax - totalSubsidy);

  // 1 kW requires ~100 sq.ft shadow-free area
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
