import { BRANDS, PRODUCT_FILTERS } from "@/lib/helios/plans";
import type { HeliosStore } from "@/lib/helios/store";
import type { FeatureFlag, PolicyBand, PremiumBand } from "@/lib/helios/types";
import { Button, CheckRow, SectionLabel } from "./ui";

const FEATURES: { id: FeatureFlag; label: string; hint?: string }[] = [
  { id: "fiveStar", label: "Five-star rating", hint: "4.5 and above" },
  { id: "giveback", label: "Part B giveback" },
  { id: "dental", label: "Dental" },
  { id: "hearing", label: "Hearing coverage" },
  { id: "otc", label: "OTC" },
  { id: "transportation", label: "Transportation" },
  { id: "fitness", label: "Fitness benefits" },
  { id: "chiropractic", label: "Chiropractic care" },
  { id: "additional", label: "Additional services" },
  { id: "partBFlex", label: "Part B flex benefit" },
];

const PREMIUMS: { id: PremiumBand; label: string }[] = [
  { id: "under20", label: "Under $20" },
  { id: "mid", label: "$30 – $60" },
  { id: "over60", label: "Over $60" },
];

const POLICIES: { id: PolicyBand; label: string }[] = [
  { id: "HMO", label: "HMO" },
  { id: "PPO", label: "PPO" },
  { id: "RPPO", label: "RPPO" },
];

export function Filters({ store }: { store: HeliosStore }) {
  const { filters } = store;
  return (
    <div className="px-4 pb-10">
      <div className="flex items-center justify-between pt-4">
        <p className="text-sm font-medium">Filter</p>
        <Button tone="quiet" className="px-2" onClick={() => store.clearFilters()}>
          Clear
        </Button>
      </div>
      <SectionLabel>Plan type</SectionLabel>
      {PRODUCT_FILTERS.map((item) => (
        <CheckRow
          key={item.id}
          on={filters.products.includes(item.id)}
          label={item.label}
          onClick={() => store.toggleProduct(item.id)}
        />
      ))}
      <SectionLabel>Plan features</SectionLabel>
      {FEATURES.map((item) => (
        <CheckRow
          key={item.id}
          on={filters.features.includes(item.id)}
          label={item.label}
          hint={item.hint}
          onClick={() => store.toggleFeature(item.id)}
        />
      ))}
      <SectionLabel>Brand</SectionLabel>
      {BRANDS.map((brand) => (
        <CheckRow key={brand} on={filters.brands.includes(brand)} label={brand} onClick={() => store.toggleBrand(brand)} />
      ))}
      <SectionLabel>Premium</SectionLabel>
      {PREMIUMS.map((item) => (
        <CheckRow
          key={item.id}
          on={filters.premiums.includes(item.id)}
          label={item.label}
          onClick={() => store.togglePremium(item.id)}
        />
      ))}
      <SectionLabel>Policy type</SectionLabel>
      {POLICIES.map((item) => (
        <CheckRow
          key={item.id}
          on={filters.policies.includes(item.id)}
          label={item.label}
          onClick={() => store.togglePolicy(item.id)}
        />
      ))}
      <SectionLabel>Deductible</SectionLabel>
      {(
        [
          ["any", "Any"],
          ["no", "No deductible"],
          ["yes", "Has a deductible"],
        ] as const
      ).map(([id, label]) => (
        <CheckRow
          key={id}
          on={filters.deductible === id}
          label={label}
          onClick={() => store.patch({ filters: { ...filters, deductible: id } })}
        />
      ))}
      <SectionLabel>Appointment</SectionLabel>
      <CheckRow
        on={filters.appointedOnly}
        label="Appointed only"
        onClick={() => store.patch({ filters: { ...filters, appointedOnly: !filters.appointedOnly } })}
      />
      <CheckRow
        on={filters.amendedOnly}
        label="Apply amended plans"
        onClick={() => store.patch({ filters: { ...filters, amendedOnly: !filters.amendedOnly } })}
      />
    </div>
  );
}
