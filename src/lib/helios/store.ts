import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DIRECTORY_BY_ID, RECORDED_PROVIDER_IDS } from "./directory";
import { recordedMedications } from "./drugs";
import { makeCode } from "./logic";
import type {
  ColumnKey,
  ExtraHelp,
  FeatureFlag,
  Filters,
  PharmacyChoice,
  PremiumBand,
  PolicyBand,
  ProductLine,
  SavedMed,
  SearchMode,
  SortKey,
  Stage,
  Year,
} from "./types";

export interface HeliosData {
  zip: string;
  year: Year;
  medicareNumber: string;
  dob: string;
  consent: boolean | null;
  enrolled: boolean | null;
  personalCode: string;
  pharmacy: PharmacyChoice;
  extraHelp: ExtraHelp;
  medications: SavedMed[];
  savedProviderIds: string[];
  primaryProviderId: string | null;
  radius: number;
  columns: ColumnKey[];
  sort: SortKey;
  period: "annual" | "monthly";
  filters: Filters;
  expandedId: string | null;
  compareIds: string[];
  stage: Stage;
  assessmentOpen: boolean;
  assessmentSection: "basic" | "meds" | "doctors";
  providerOpen: boolean;
  providerTab: "search" | "saved";
  searchMode: SearchMode;
  first: string;
  last: string;
  address: string;
  city: string;
  npi: string;
  facility: string;
  specialty: string;
  gender: string;
  cityFilter: string;
  networkPlanId: string | null;
  selectedDrugId: string | null;
  monthIndex: number;
  emailOpen: boolean;
  emailPlanId: string | null;
  filterSheet: boolean;
  columnPicker: boolean;
}

const filters = (): Filters => ({
  products: ["MAPD"],
  brands: [],
  premiums: [],
  policies: [],
  deductible: "any",
  appointedOnly: false,
  amendedOnly: false,
  features: [],
  query: "",
});

export const initialData: HeliosData = {
  zip: "33498",
  year: 2027,
  medicareNumber: "",
  dob: "",
  consent: null,
  enrolled: null,
  personalCode: "",
  pharmacy: "unset",
  extraHelp: "unset",
  medications: [],
  savedProviderIds: [],
  primaryProviderId: null,
  radius: 25,
  columns: ["premium", "annual", "moop"],
  sort: "recommended",
  period: "annual",
  filters: filters(),
  expandedId: null,
  compareIds: [],
  stage: { name: "plans" },
  assessmentOpen: true,
  assessmentSection: "basic",
  providerOpen: false,
  providerTab: "search",
  searchMode: "name",
  first: "",
  last: "",
  address: "",
  city: "",
  npi: "",
  facility: "",
  specialty: "",
  gender: "",
  cityFilter: "",
  networkPlanId: null,
  selectedDrugId: null,
  monthIndex: 0,
  emailOpen: false,
  emailPlanId: null,
  filterSheet: false,
  columnPicker: false,
};

interface Actions {
  patch: (partial: Partial<HeliosData>) => void;
  reset: () => void;
  loadCase: () => void;
  issueCode: () => void;
  toggleColumn: (key: ColumnKey) => void;
  clearColumns: () => void;
  toggleProduct: (id: ProductLine) => void;
  toggleBrand: (brand: string) => void;
  togglePremium: (band: PremiumBand) => void;
  togglePolicy: (band: PolicyBand) => void;
  toggleFeature: (flag: FeatureFlag) => void;
  clearFilters: () => void;
  saveProvider: (id: string) => void;
  removeProvider: (id: string) => void;
  makePrimary: (id: string) => void;
  addMed: (med: SavedMed) => void;
  removeMed: (uid: string) => void;
  toggleCompare: (planId: string) => void;
}

export type HeliosStore = HeliosData & Actions;

function toggleList<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export const useHelios = create<HeliosStore>()(
  persist(
    (set, get) => ({
      ...initialData,
      patch: (partial) => set(partial),
      reset: () => set({ ...initialData, filters: filters() }),
      loadCase: () =>
        set({
          zip: "33498",
          year: 2027,
          consent: true,
          enrolled: false,
          personalCode: "IMFMMGOW",
          pharmacy: "mail",
          extraHelp: "no",
          medications: recordedMedications(),
          savedProviderIds: [...RECORDED_PROVIDER_IDS],
          primaryProviderId: "golawala",
          radius: 100,
          stage: { name: "plans" },
          assessmentOpen: false,
          providerOpen: false,
          filters: filters(),
        }),
      issueCode: () => {
        const zip = get().zip;
        if (zip.length === 5) set({ personalCode: makeCode(zip) });
      },
      toggleColumn: (key) =>
        set((state) => {
          if (state.columns.includes(key)) return { columns: state.columns.filter((item) => item !== key) };
          if (state.columns.length >= 3) return {};
          return { columns: [...state.columns, key] };
        }),
      clearColumns: () => set({ columns: [] }),
      toggleProduct: (id) =>
        set((state) => ({ filters: { ...state.filters, products: toggleList(state.filters.products, id) } })),
      toggleBrand: (brand) =>
        set((state) => ({ filters: { ...state.filters, brands: toggleList(state.filters.brands, brand) } })),
      togglePremium: (band) =>
        set((state) => ({ filters: { ...state.filters, premiums: toggleList(state.filters.premiums, band) } })),
      togglePolicy: (band) =>
        set((state) => ({ filters: { ...state.filters, policies: toggleList(state.filters.policies, band) } })),
      toggleFeature: (flag) =>
        set((state) => ({ filters: { ...state.filters, features: toggleList(state.filters.features, flag) } })),
      clearFilters: () => set((state) => ({ filters: { ...filters(), query: state.filters.query } })),
      saveProvider: (id) =>
        set((state) => {
          if (state.savedProviderIds.includes(id)) return {};
          const physician = DIRECTORY_BY_ID[id]?.kind === "physician";
          return {
            savedProviderIds: [...state.savedProviderIds, id],
            primaryProviderId: state.primaryProviderId ?? (physician ? id : null),
            personalCode: state.personalCode || makeCode(state.zip),
          };
        }),
      removeProvider: (id) =>
        set((state) => {
          const saved = state.savedProviderIds.filter((item) => item !== id);
          let primary = state.primaryProviderId;
          if (primary === id) primary = saved.find((item) => DIRECTORY_BY_ID[item]?.kind === "physician") ?? null;
          return { savedProviderIds: saved, primaryProviderId: primary };
        }),
      makePrimary: (id) => set({ primaryProviderId: id }),
      addMed: (med) =>
        set((state) => ({
          medications: [...state.medications.filter((item) => item.uid !== med.uid), med],
          personalCode: state.personalCode || makeCode(state.zip),
        })),
      removeMed: (uid) => set((state) => ({ medications: state.medications.filter((item) => item.uid !== uid) })),
      toggleCompare: (planId) =>
        set((state) => {
          if (state.compareIds.includes(planId)) return { compareIds: state.compareIds.filter((id) => id !== planId) };
          const next = [...state.compareIds, planId].slice(-2);
          return { compareIds: next };
        }),
    }),
    { name: "helios-case-v1", skipHydration: true },
  ),
);
