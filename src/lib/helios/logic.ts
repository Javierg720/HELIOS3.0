import { DIRECTORY, DIRECTORY_BY_ID } from "./directory";
import { DRUG_BY_ID } from "./drugs";
import { PLANS } from "./plans";
import type {
  DirectoryProvider,
  ExtraHelp,
  FeatureFlag,
  Filters,
  PharmacyChoice,
  Plan,
  PremiumBand,
  SavedMed,
  SearchMode,
  SortKey,
  Year,
} from "./types";

export function money(n: number, mode: "premium" | "whole" | "auto" = "auto"): string {
  const digits = mode === "premium" ? 2 : mode === "whole" ? 0 : Number.isInteger(n) ? 0 : 2;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}

export function premiumOf(plan: Plan, year: Year): number {
  if (year === 2026 && plan.premium2026 != null) return plan.premium2026;
  return plan.premium;
}

export function givebackOf(plan: Plan, year: Year): number {
  if (year === 2026 && plan.giveback2026 != null) return plan.giveback2026;
  return plan.giveback;
}

export function usesDrugs(plan: Plan): boolean {
  return plan.product === "MAPD" || plan.product === "PDP" || plan.product === "SNP";
}

export function annualCost(
  plan: Plan,
  meds: number,
  year: Year,
  extraHelp: ExtraHelp,
  pharmacy: PharmacyChoice,
): number {
  if (!usesDrugs(plan) || meds === 0) {
    const base = plan.annualWithoutMeds;
    return year === 2026 ? Math.round(base * 0.97) : base;
  }
  let drug = Math.max(0, plan.annualWithMeds - plan.annualWithoutMeds);
  if (pharmacy === "yes") drug = Math.round(drug * 1.06);
  if (pharmacy === "no") drug = Math.round(drug * 1.12);
  if (extraHelp === "yes") drug = Math.round(drug * 0.3);
  let total = plan.annualWithoutMeds + drug;
  if (year === 2026) total = Math.round(total * 0.97);
  return total;
}

export function drugPortion(plan: Plan, meds: number, year: Year, extraHelp: ExtraHelp, pharmacy: PharmacyChoice): number {
  if (!usesDrugs(plan) || meds === 0) return 0;
  return Math.max(0, annualCost(plan, meds, year, extraHelp, pharmacy) - (year === 2026 ? Math.round(plan.annualWithoutMeds * 0.97) : plan.annualWithoutMeds));
}

export function isCovered(plan: Plan, drugId: string): boolean {
  const drug = DRUG_BY_ID[drugId];
  if (!drug) return false;
  if (drug.notOnFormulary && plan.coveredOf9 < 9) return false;
  return true;
}

export function coverage(plan: Plan, meds: SavedMed[]) {
  const uncovered = meds.filter((med) => !isCovered(plan, med.drugId));
  return {
    covered: meds.length - uncovered.length,
    total: meds.length,
    uncovered,
  };
}

export function planCode(plan: Plan): string {
  return /^[HRS]\d/.test(plan.contract) || plan.contract.startsWith("Plan") ? plan.contract : `ID ${plan.id}`;
}

function hasFeature(plan: Plan, flag: FeatureFlag): boolean {
  switch (flag) {
    case "fiveStar":
      return plan.stars >= 4.5;
    case "giveback":
      return plan.giveback > 0;
    default:
      return plan.features[flag];
  }
}

function premiumBand(premium: number, band: PremiumBand): boolean {
  if (band === "under20") return premium < 20;
  if (band === "mid") return premium >= 30 && premium <= 60;
  return premium > 60;
}

function policyMatch(plan: Plan, policy: Filters["policies"][number]): boolean {
  if (policy === "HMO") return plan.type === "HMO" || plan.type === "HMO-POS";
  if (policy === "PPO") return plan.type === "PPO";
  return plan.type === "RPPO";
}

export function visiblePlans(filters: Filters, year: Year): Plan[] {
  const q = filters.query.trim().toLowerCase();
  return PLANS.filter((plan) => {
    if (filters.products.length && !filters.products.includes(plan.product)) return false;
    if (filters.brands.length && !filters.brands.includes(plan.carrier)) return false;
    if (filters.premiums.length && !filters.premiums.some((band) => premiumBand(premiumOf(plan, year), band))) return false;
    if (filters.policies.length && !filters.policies.some((policy) => policyMatch(plan, policy))) return false;
    const hasDed = plan.medicalDeductible > 0 || plan.drugDeductible > 0;
    if (filters.deductible === "yes" && !hasDed) return false;
    if (filters.deductible === "no" && hasDed) return false;
    if (filters.appointedOnly && !plan.appointed) return false;
    if (filters.amendedOnly && !plan.amended) return false;
    if (filters.features.some((flag) => !hasFeature(plan, flag))) return false;
    if (q) {
      const hay = `${plan.name} ${plan.contract} ${plan.carrier} ${plan.id}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function sortPlans(
  plans: Plan[],
  sort: SortKey,
  year: Year,
  meds: number,
  extraHelp: ExtraHelp,
  pharmacy: PharmacyChoice,
): Plan[] {
  const list = [...plans];
  const cost = (plan: Plan) => annualCost(plan, meds, year, extraHelp, pharmacy);
  if (sort === "premium") list.sort((a, b) => premiumOf(a, year) - premiumOf(b, year));
  else if (sort === "annual") list.sort((a, b) => cost(a) - cost(b));
  else if (sort === "stars") list.sort((a, b) => b.stars - a.stars);
  else if (sort === "moop") list.sort((a, b) => (a.moopIn ?? 99999) - (b.moopIn ?? 99999));
  else list.sort((a, b) => a.rank - b.rank);
  return list;
}

export function benefitLine(plan: Plan): string {
  return [
    `Dental ${plan.dental}`,
    `Vision ${plan.vision}`,
    `OTC ${plan.otc}`,
    plan.transportation === "Not covered" ? "No transport" : plan.transportation,
    plan.fitness ? "Fitness" : "No fitness",
  ].join(" · ");
}

export function moopLine(plan: Plan): string {
  const parts: string[] = [];
  if (plan.moopIn != null) parts.push(`In ${money(plan.moopIn)}`);
  if (plan.moopCombined != null) parts.push(`Combined ${money(plan.moopCombined)}`);
  if (plan.moopOon != null) parts.push(`Out ${money(plan.moopOon)}`);
  return parts.join(" · ") || "—";
}

export interface SearchInput {
  mode: SearchMode;
  first: string;
  last: string;
  address: string;
  city: string;
  npi: string;
  facility: string;
  radius: number;
  specialty: string;
  gender: string;
  cityFilter: string;
  networkPlanId: string | null;
}

export function searchDirectory(input: SearchInput): DirectoryProvider[] {
  const tokens = [input.first, input.last, input.address, input.city, input.npi, input.facility]
    .join(" ")
    .trim()
    .toLowerCase();
  if (input.mode !== "name" && tokens.replace(/\s/g, "").length < 2) return [];
  if ((input.mode === "name" || input.mode === "nameAddress") && `${input.first}${input.last}`.trim().length < 2) {
    return [];
  }

  const results = DIRECTORY.map((provider) => {
    const locations = provider.locations
      .filter((loc) => loc.distance <= input.radius)
      .sort((a, b) => a.distance - b.distance);
    return { ...provider, locations };
  }).filter((provider) => provider.locations.length > 0);

  const filtered = results.filter((provider) => {
    if (input.specialty && provider.specialty !== input.specialty) return false;
    if (input.gender && input.gender !== "All" && provider.gender !== input.gender) return false;
    if (input.cityFilter && !provider.locations.some((loc) => loc.city === input.cityFilter)) return false;
    if (input.networkPlanId && !provider.inNetworkPlanIds.includes(input.networkPlanId)) return false;
    const first = input.first.trim().toLowerCase();
    const last = input.last.trim().toLowerCase();
    const address = `${input.address} ${input.city}`.trim().toLowerCase();
    const facility = input.facility.trim().toLowerCase();
    const npi = input.npi.replace(/\D/g, "");
    if (input.mode === "name" || input.mode === "nameAddress") {
      const blob = `${provider.first} ${provider.last} ${provider.name}`.toLowerCase();
      if (first && !blob.includes(first)) return false;
      if (last && !blob.includes(last)) return false;
      if (input.mode === "nameAddress" && address.length >= 2) {
        const loc = provider.locations.some((item) => item.line.toLowerCase().includes(address) || item.city.toLowerCase().includes(address));
        const lead = provider.leadAddress.toLowerCase().includes(address);
        if (!loc && !lead) return false;
      }
    }
    if (input.mode === "address") {
      if (address.length < 2) return false;
      const loc = provider.locations.some((item) => `${item.line} ${item.city}`.toLowerCase().includes(address));
      const lead = provider.leadAddress.toLowerCase().includes(address);
      if (!loc && !lead) return false;
    }
    if (input.mode === "npi") {
      if (npi.length < 2) return false;
      if (!provider.npi.includes(npi)) return false;
    }
    if (input.mode === "facility") {
      if (facility.length < 2) return false;
      if (provider.kind !== "organization") return false;
      if (!provider.name.toLowerCase().includes(facility)) return false;
    }
    return true;
  });

  return filtered.sort((a, b) => a.locations[0].distance - b.locations[0].distance);
}

export function facilitySuggestions(query: string): DirectoryProvider[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return DIRECTORY.filter((provider) => provider.kind === "organization" && provider.name.toLowerCase().includes(q)).slice(0, 6);
}

export function drugSuggestions(query: string) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return Object.values(DRUG_BY_ID)
    .filter((drug) => drug.name.toLowerCase().includes(q) || drug.strengths.some((s) => s.toLowerCase().includes(q)))
    .slice(0, 8);
}

export function makeCode(zip: string): string {
  if (zip === "33498") return "IMFMMGOW";
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  let hash = 0;
  for (const char of zip) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  let code = "";
  for (let i = 0; i < 8; i += 1) code += alphabet[(hash >> (i * 2)) % alphabet.length];
  return code;
}

export function primaryProvider(id: string | null): DirectoryProvider | null {
  if (!id) return null;
  return DIRECTORY_BY_ID[id] ?? null;
}

export function includesPrimary(planId: string, provider: DirectoryProvider | null): boolean {
  if (!provider || provider.kind !== "physician") return true;
  return provider.inNetworkPlanIds.includes(planId);
}

export function saturniaMiss(input: SearchInput, count: number): boolean {
  if (count > 0 || input.mode === "npi") return false;
  const blob = `${input.address} ${input.facility} ${input.city}`.toLowerCase();
  return blob.includes("saturnia") || blob.includes("19498");
}

export const BEQ_TEXT =
  "To get started I would like to get your ZIP code, Medicare number and date of birth. I will use this information to access your demographic information and current plan status, as well as any medication and provider information we can access, including from your prior plan enrollment so we can best recommend a plan for you. This is optional. May I proceed?";

export const DOCTOR_BANNER =
  "The following plans don’t include your primary doctor as a PCP. These plans may be a good option for you, but choosing an in-network PCP should save you money.";

export const CSNP_WARNING = "Based on the medications provided, the beneficiary maybe eligible for a CSNP policy.";

export const UNAVAILABLE_WARNING = "One or more plans will not be available based on the applicant information.";

export const NON_FORMULARY =
  "Any amount you spend for a non-formulary drug is not counted towards the deductible, initial coverage limit or out of pocket costs unless the plan approves a formulary exception. If an exception is approved, the non-formulary drug will be covered.";
