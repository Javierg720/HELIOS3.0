import type { Drug, Frequency, SavedMed } from "./types";

export const FREQUENCIES: Frequency[] = [
  "Every month",
  "Every 2 months",
  "Every 3 months",
  "Every 6 months",
  "Every 12 months",
];

export const CONDITION_GROUPS: { id: string; label: string; items: string[] }[] = [
  {
    id: "cardiac",
    label: "Heart and vessels",
    items: [
      "Heart attack",
      "Atrial fibrillation",
      "Transient ischemic attack (TIA)",
      "Artery or vein blockage",
      "Stroke",
      "Flutter",
      "Mini-stroke",
      "Peripheral vascular disease (PVD)",
      "Coronary artery disease (CAD)",
      "Heart failure",
    ],
  },
  {
    id: "resp",
    label: "Respiratory",
    items: ["Emphysema", "Chronic bronchitis", "COPD", "Chronic respiratory condition"],
  },
  {
    id: "metabolic",
    label: "Metabolic",
    items: ["Type 2 diabetes", "High cholesterol", "Thyroid disorder"],
  },
  {
    id: "other",
    label: "Other",
    items: ["Nerve pain", "Depression or anxiety", "Acid reflux", "Condition not listed", "No conditions"],
  },
];

const CSNP_CONDITIONS = new Set([
  "Heart attack",
  "Atrial fibrillation",
  "Stroke",
  "Coronary artery disease (CAD)",
  "Heart failure",
  "COPD",
  "Chronic respiratory condition",
  "Type 2 diabetes",
]);

const CSNP_DRUGS = new Set(["eliquis", "jardiance", "metformin", "farxiga", "ozempic", "xarelto", "albuterol"]);

function drug(partial: Pick<Drug, "id" | "name" | "strengths" | "defaultStrength"> & Partial<Drug>): Drug {
  return {
    commonUse: partial.commonUse ?? "",
    defaultFrequency: partial.defaultFrequency ?? "Every month",
    defaultQuantity: partial.defaultQuantity ?? 30,
    defaultConditions: partial.defaultConditions ?? [],
    groups: partial.groups ?? ["other"],
    tier: partial.tier ?? null,
    ql: partial.ql ?? null,
    pa: partial.pa ?? null,
    st: partial.st ?? null,
    fullCost: partial.fullCost ?? null,
    january: partial.january ?? { amount: 0, phase: "Initial" },
    april: partial.april ?? { amount: 0, phase: "N/A" },
    monthly: partial.monthly ?? false,
    notOnFormulary: partial.notOnFormulary ?? false,
    ...partial,
  };
}

export const DRUGS: Drug[] = [
  drug({
    id: "eliquis",
    name: "Eliquis",
    commonUse: "Blood thinner",
    strengths: ["Eliquis TAB 2.5MG", "Eliquis TAB 5MG"],
    defaultStrength: "Eliquis TAB 5MG",
    defaultFrequency: "Every month",
    defaultQuantity: 30,
    defaultConditions: ["Atrial fibrillation"],
    groups: ["cardiac", "other"],
    january: { amount: 12, phase: "Initial" },
    april: { amount: 12, phase: "Initial" },
    monthly: true,
  }),
  drug({
    id: "metformin",
    name: "Metformin",
    commonUse: "Diabetes",
    strengths: ["Metformin HCL TAB 500MG", "Metformin HCL TAB 850MG", "Metformin HCL TAB 1000MG"],
    defaultStrength: "Metformin HCL TAB 850MG",
    defaultFrequency: "Every 3 months",
    defaultQuantity: 90,
    defaultConditions: ["Type 2 diabetes"],
    groups: ["metabolic", "other"],
    tier: 1,
    ql: "No",
    pa: false,
    st: false,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "jardiance",
    name: "Jardiance",
    commonUse: "Diabetes / heart failure",
    strengths: ["Jardiance TAB 10MG", "Jardiance TAB 25MG"],
    defaultStrength: "Jardiance TAB 10MG",
    defaultFrequency: "Every month",
    defaultQuantity: 30,
    defaultConditions: ["Type 2 diabetes"],
    groups: ["metabolic", "cardiac", "other"],
    tier: 3,
    ql: "30 tablets per 30 days",
    pa: true,
    st: false,
    fullCost: 209.63,
    january: { amount: 19, phase: "Initial" },
    april: { amount: 19, phase: "Initial" },
    monthly: true,
  }),
  drug({
    id: "atorvastatin",
    name: "Atorvastatin",
    commonUse: "Cholesterol",
    strengths: ["Atorvastatin Calcium TAB 10MG", "Atorvastatin Calcium TAB 20MG", "Atorvastatin Calcium TAB 40MG"],
    defaultStrength: "Atorvastatin Calcium TAB 20MG",
    defaultFrequency: "Every 3 months",
    defaultQuantity: 90,
    defaultConditions: ["High cholesterol"],
    groups: ["metabolic", "other"],
    tier: 1,
    ql: "No",
    pa: false,
    st: false,
    fullCost: 3.63,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "lisinopril",
    name: "Lisinopril",
    commonUse: "Blood pressure",
    strengths: ["Lisinopril TAB 2.5MG", "Lisinopril TAB 5MG", "Lisinopril TAB 10MG", "Lisinopril TAB 20MG"],
    defaultStrength: "Lisinopril TAB 2.5MG",
    defaultFrequency: "Every 3 months",
    defaultQuantity: 90,
    defaultConditions: [],
    groups: ["cardiac", "other"],
    tier: 1,
    ql: "No",
    pa: false,
    st: false,
    fullCost: 1.65,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "gabapentin",
    name: "Gabapentin",
    commonUse: "Nerve pain",
    strengths: ["Gabapentin CAP 100MG", "Gabapentin CAP 300MG", "Gabapentin CAP 400MG"],
    defaultStrength: "Gabapentin CAP 400MG",
    defaultFrequency: "Every 3 months",
    defaultQuantity: 270,
    defaultConditions: ["Condition not listed"],
    groups: ["other"],
    st: false,
    fullCost: 128.02,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "omeprazole",
    name: "Omeprazole",
    commonUse: "Acid reflux / GERD",
    strengths: ["Omeprazole DR CAP 20MG", "Omeprazole DR CAP 40MG"],
    defaultStrength: "Omeprazole DR CAP 20MG",
    defaultFrequency: "Every 3 months",
    defaultQuantity: 90,
    defaultConditions: ["Condition not listed"],
    groups: ["resp", "other"],
    tier: 1,
    ql: "No",
    pa: false,
    st: false,
    fullCost: 2.37,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "albuterol",
    name: "Albuterol",
    commonUse: "Rescue inhaler / airway",
    strengths: ["Albuterol Sulfate TAB 4MG", "Albuterol Sulfate HFA AER"],
    defaultStrength: "Albuterol Sulfate TAB 4MG",
    defaultFrequency: "Every month",
    defaultQuantity: 30,
    defaultConditions: ["COPD"],
    groups: ["resp", "other"],
    january: { amount: 33, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "levothyroxine",
    name: "Levothyroxine",
    commonUse: "Thyroid",
    strengths: ["Levothyroxine Sodium CAP 150MCG", "Levothyroxine Sodium TAB 100MCG"],
    defaultStrength: "Levothyroxine Sodium CAP 150MCG",
    defaultFrequency: "Every month",
    defaultQuantity: 30,
    defaultConditions: ["Thyroid disorder"],
    groups: ["metabolic", "other"],
    fullCost: 351.24,
    notOnFormulary: true,
    january: { amount: 351, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "farxiga",
    name: "Farxiga",
    commonUse: "Diabetes / heart failure",
    strengths: ["Farxiga TAB 5MG", "Farxiga TAB 10MG"],
    defaultStrength: "Farxiga TAB 5MG",
    defaultConditions: ["Type 2 diabetes"],
    groups: ["metabolic", "cardiac", "other"],
    tier: 3,
    pa: true,
    january: { amount: 22, phase: "Initial" },
    april: { amount: 22, phase: "Initial" },
    monthly: true,
  }),
  drug({
    id: "ozempic",
    name: "Ozempic",
    commonUse: "Type 2 diabetes",
    strengths: ["Ozempic SOL 2MG/3ML", "Ozempic SOL 4MG/3ML"],
    defaultStrength: "Ozempic SOL 2MG/3ML",
    groups: ["metabolic", "other"],
    tier: 3,
    pa: true,
    january: { amount: 47, phase: "Initial" },
    april: { amount: 47, phase: "Initial" },
    monthly: true,
  }),
  drug({
    id: "xarelto",
    name: "Xarelto",
    commonUse: "Blood thinner",
    strengths: ["Xarelto TAB 10MG", "Xarelto TAB 20MG"],
    defaultStrength: "Xarelto TAB 20MG",
    groups: ["cardiac", "other"],
    january: { amount: 15, phase: "Initial" },
    april: { amount: 15, phase: "Initial" },
    monthly: true,
  }),
  drug({
    id: "amlodipine",
    name: "Amlodipine",
    commonUse: "Blood pressure",
    strengths: ["Amlodipine BES TAB 5MG", "Amlodipine BES TAB 10MG"],
    defaultStrength: "Amlodipine BES TAB 5MG",
    groups: ["cardiac", "other"],
    tier: 1,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "metoprolol",
    name: "Metoprolol",
    commonUse: "Blood pressure / heart",
    strengths: ["Metoprolol SUCC TAB 25MG", "Metoprolol SUCC TAB 50MG"],
    defaultStrength: "Metoprolol SUCC TAB 25MG",
    groups: ["cardiac", "other"],
    tier: 1,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
  drug({
    id: "sertraline",
    name: "Sertraline",
    commonUse: "Depression / anxiety",
    strengths: ["Sertraline HCL TAB 50MG", "Sertraline HCL TAB 100MG"],
    defaultStrength: "Sertraline HCL TAB 50MG",
    groups: ["other"],
    tier: 1,
    january: { amount: 0, phase: "Initial" },
    april: { amount: 0, phase: "N/A" },
  }),
];

export const DRUG_BY_ID: Record<string, Drug> = Object.fromEntries(DRUGS.map((d) => [d.id, d]));

export const RECORDED_DRUG_IDS = [
  "eliquis",
  "metformin",
  "jardiance",
  "atorvastatin",
  "lisinopril",
  "gabapentin",
  "omeprazole",
  "albuterol",
  "levothyroxine",
] as const;

export function recordedMedications(): SavedMed[] {
  return RECORDED_DRUG_IDS.map((id) => {
    const drug = DRUG_BY_ID[id];
    return {
      uid: `rec-${id}`,
      drugId: id,
      strength: drug.defaultStrength,
      frequency: drug.defaultFrequency,
      quantity: drug.defaultQuantity,
      conditions: [...drug.defaultConditions],
    };
  });
}

export function csnpFromMeds(meds: SavedMed[]): boolean {
  return meds.some(
    (med) => CSNP_DRUGS.has(med.drugId) || med.conditions.some((c) => CSNP_CONDITIONS.has(c)),
  );
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function monthCost(drug: Drug, month: number, covered: boolean): { amount: number; phase: "Initial" | "N/A" } {
  if (!covered) {
    if (month === 0 || month === 6) {
      return { amount: drug.january.amount || Math.round(drug.fullCost ?? 0), phase: "Initial" };
    }
    return { amount: 0, phase: "N/A" };
  }
  if (month === 0) return drug.january;
  if (month === 3) return drug.april;
  if (drug.monthly) return { amount: drug.january.amount, phase: "Initial" };
  if (month === 6 || month === 9) return { ...drug.january };
  return { amount: 0, phase: "N/A" };
}
