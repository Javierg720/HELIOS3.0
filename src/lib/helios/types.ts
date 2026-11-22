export type Year = 2026 | 2027;

export type PlanType = "HMO" | "HMO-POS" | "PPO" | "RPPO";

export type ProductLine =
  | "MAPD"
  | "PDP"
  | "SUPP"
  | "MA"
  | "SNP"
  | "HI"
  | "DENTAL"
  | "VISION"
  | "HEARING";

export type ColumnKey =
  | "premium"
  | "annual"
  | "copays"
  | "moop"
  | "benefits"
  | "deductible"
  | "giveback"
  | "stars";

export type SortKey = "recommended" | "premium" | "annual" | "stars" | "moop";

export type PremiumBand = "under20" | "mid" | "over60";

export type PolicyBand = "HMO" | "PPO" | "RPPO";

export type FeatureFlag =
  | "fiveStar"
  | "giveback"
  | "dental"
  | "hearing"
  | "otc"
  | "transportation"
  | "fitness"
  | "chiropractic"
  | "additional"
  | "partBFlex";

export type Frequency =
  | "Every month"
  | "Every 2 months"
  | "Every 3 months"
  | "Every 6 months"
  | "Every 12 months";

export type SearchMode = "name" | "nameAddress" | "address" | "npi" | "facility";

export type PharmacyChoice = "unset" | "yes" | "no" | "mail";

export type ExtraHelp = "unset" | "yes" | "no" | "unknown";

export type DetailTab = "summary" | "benefits" | "drugs";

export type Stage =
  | { name: "plans" }
  | { name: "xray"; focusId: string }
  | { name: "detail"; planId: string; tab: DetailTab }
  | { name: "compare"; left: string; right: string }
  | { name: "discovery"; planId: string };

export interface PlanFeatures {
  dental: boolean;
  hearing: boolean;
  otc: boolean;
  transportation: boolean;
  fitness: boolean;
  chiropractic: boolean;
  additional: boolean;
  partBFlex: boolean;
  rx: boolean;
  hospital: boolean;
  vision: boolean;
  giveback: boolean;
}

export interface Plan {
  id: string;
  contract: string;
  name: string;
  type: PlanType;
  product: ProductLine;
  carrier: string;
  stars: number;
  premium: number;
  premium2026?: number;
  annualWithoutMeds: number;
  annualWithMeds: number;
  pcp: number;
  specialist: string;
  moopIn: number | null;
  moopCombined: number | null;
  moopOon: number | null;
  partB: number;
  dental: string;
  vision: string;
  otc: string;
  hearing: string;
  transportation: string;
  fitness: boolean;
  giveback: number;
  giveback2026?: number;
  medicalDeductible: number;
  drugDeductible: number;
  drugDeductibleNote: string;
  appointed: boolean;
  commissionable: boolean;
  allowsOon: boolean;
  coveredOf9: number;
  amended: boolean;
  blockedByMeds: boolean;
  rank: number;
  catastrophic: number;
  features: PlanFeatures;
}

export interface ProviderLocation {
  line: string;
  city: string;
  distance: number;
}

export interface DirectoryProvider {
  id: string;
  kind: "physician" | "organization";
  name: string;
  first: string;
  last: string;
  specialty: string;
  gender: "Female" | "Male" | "Organization";
  npi: string;
  npiVerified: boolean;
  phone: string;
  leadAddress: string;
  formerName: string;
  official: string;
  locations: ProviderLocation[];
  inNetworkPlanIds: string[];
}

export interface DrugMonth {
  amount: number;
  phase: "Initial" | "N/A";
}

export interface Drug {
  id: string;
  name: string;
  commonUse: string;
  strengths: string[];
  defaultStrength: string;
  defaultFrequency: Frequency;
  defaultQuantity: number;
  defaultConditions: string[];
  groups: string[];
  tier: number | null;
  ql: string | null;
  pa: boolean | null;
  st: boolean | null;
  fullCost: number | null;
  january: DrugMonth;
  april: DrugMonth;
  monthly: boolean;
  notOnFormulary: boolean;
}

export interface SavedMed {
  uid: string;
  drugId: string;
  strength: string;
  frequency: Frequency;
  quantity: number;
  conditions: string[];
}

export interface CompareRow {
  category: string;
  scope: string;
  label: string;
  a: string;
  b: string;
}

export interface Filters {
  products: ProductLine[];
  brands: string[];
  premiums: PremiumBand[];
  policies: PolicyBand[];
  deductible: "any" | "yes" | "no";
  appointedOnly: boolean;
  amendedOnly: boolean;
  features: FeatureFlag[];
  query: string;
}
