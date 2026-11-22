import { Star } from "lucide-react";
import { DIRECTORY_BY_ID } from "@/lib/helios/directory";
import { csnpFromMeds } from "@/lib/helios/drugs";
import {
  annualCost,
  benefitLine,
  coverage,
  CSNP_WARNING,
  DOCTOR_BANNER,
  drugPortion,
  givebackOf,
  includesPrimary,
  money,
  moopLine,
  planCode,
  premiumOf,
  primaryProvider,
  UNAVAILABLE_WARNING,
} from "@/lib/helios/logic";
import { COLUMN_OPTIONS, CSNP_PLAN, PLAN_BY_ID } from "@/lib/helios/plans";
import type { HeliosStore } from "@/lib/helios/store";
import type { ColumnKey, Plan } from "@/lib/helios/types";
import { Banner, Button } from "./ui";
import { cn } from "@/lib/cn";

function columnLabel(key: ColumnKey, period: HeliosStore["period"]) {
  if (key === "annual" && period === "monthly") return "Monthly cost";
  return COLUMN_OPTIONS.find((item) => item.id === key)?.label ?? key;
}

function columnValue(plan: Plan, key: ColumnKey, store: HeliosStore) {
  const meds = store.medications.length;
  if (key === "premium") return money(premiumOf(plan, store.year), "premium");
  if (key === "annual") {
    const annual = annualCost(plan, meds, store.year, store.extraHelp, store.pharmacy);
    return money(store.period === "monthly" ? Math.round(annual / 12) : annual);
  }
  if (key === "copays") return `PCP ${money(plan.pcp)} · Spec ${plan.specialist}`;
  if (key === "moop") return moopLine(plan);
  if (key === "benefits") return benefitLine(plan);
  if (key === "deductible") {
    const drug = plan.drugDeductible ? money(plan.drugDeductible) : money(0);
    return `Med ${money(plan.medicalDeductible)} · Drug ${drug}`;
  }
  if (key === "giveback") {
    const amount = givebackOf(plan, store.year);
    return amount > 0 ? `Up to ${money(amount, "auto")}` : "None";
  }
  return plan.stars ? plan.stars.toFixed(1) : "—";
}

export function PlanGrid({ store, plans }: { store: HeliosStore; plans: Plan[] }) {
  const primary = primaryProvider(store.primaryProviderId);
  const showDoctorBanner =
    primary?.kind === "physician" && plans.some((plan) => !includesPrimary(plan.id, primary));
  const csnp = csnpFromMeds(store.medications);
  const blocked = csnp && plans.some((plan) => plan.blockedByMeds);
  const csnpPlan = PLAN_BY_ID[CSNP_PLAN];

  return (
    <div className="px-4 pb-28 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 pt-6">
        <div>
          <h1 className="text-4xl font-semibold">Plans for {store.zip || "—"}</h1>
          <p className="mt-2 text-sm text-muted">
            {plans.length} {plans.length === 1 ? "result" : "results"} · {store.year} · 3 carriers, 44 plans in market
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {store.compareIds.length === 2 ? (
            <Button
              tone="gold"
              onClick={() =>
                store.patch({
                  stage: { name: "compare", left: store.compareIds[0], right: store.compareIds[1] },
                  assessmentOpen: false,
                })
              }
            >
              Compare benefits
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-sm">
        <Chip>{store.zip}</Chip>
        <Chip>{store.medications.length ? `${store.medications.length} medications` : "No medications"}</Chip>
        <Chip>{primary?.kind === "physician" ? "1 doctor" : "No doctor"}</Chip>
        {store.personalCode ? <Chip gold>{store.personalCode}</Chip> : null}
      </div>

      <div className="mt-4 space-y-3">
        {showDoctorBanner ? <Banner>{DOCTOR_BANNER}</Banner> : null}
        {csnp ? <Banner>{CSNP_WARNING}</Banner> : null}
        {blocked ? <Banner>{UNAVAILABLE_WARNING}</Banner> : null}
        {csnp && csnpPlan ? (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-4">
            <div>
              <p className="text-xs tracking-wide text-gold uppercase">Chronic special needs</p>
              <p className="mt-1 font-medium">{csnpPlan.name}</p>
              <p className="text-sm text-muted">
                Estimated annual {money(annualCost(csnpPlan, store.medications.length, store.year, store.extraHelp, store.pharmacy))}
              </p>
            </div>
            <Button
              onClick={() =>
                store.patch({
                  stage: { name: "detail", planId: csnpPlan.id, tab: "summary" },
                  assessmentOpen: false,
                })
              }
            >
              Review C-SNP
            </Button>
          </div>
        ) : null}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line">
        <div className="hidden border-b border-line bg-surface px-5 py-3 text-xs tracking-wide text-muted uppercase md:flex md:items-center md:gap-4">
          <span className="min-w-0 flex-1">Plan</span>
          {store.columns.map((key) => (
            <span key={key} className="w-40 shrink-0 text-right">
              {columnLabel(key, store.period)}
            </span>
          ))}
          <span className="w-28 shrink-0" />
        </div>
        {plans.length === 0 ? (
          <div className="px-5 py-16 text-center">
            <p className="text-lg font-medium">No plans match</p>
            <p className="mt-2 text-sm text-muted">
              {store.zip === "33498"
                ? "Clear a filter or return to Medicare Advantage / Part D."
                : "This demonstration catalog is built for 33498."}
            </p>
            {store.zip !== "33498" ? (
              <Button className="mt-4" tone="gold" onClick={() => store.patch({ zip: "33498" })}>
                Use 33498
              </Button>
            ) : null}
          </div>
        ) : (
          plans.map((plan) => (
            <PlanRow key={plan.id} plan={plan} store={store} primary={primary} unavailable={csnp && plan.blockedByMeds} />
          ))
        )}
      </div>
      <p className="mt-6 max-w-2xl text-xs leading-5 text-muted">
        Demonstration catalog for ZIP 33498, plan year 2027. Figures follow a recorded comparison and are not a live carrier quote or an enrollment.
      </p>
    </div>
  );
}

function Chip({ children, gold = false }: { children: string; gold?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-full border px-3 text-sm",
        gold ? "border-gold/40 text-gold" : "border-line text-muted",
      )}
    >
      {children}
    </span>
  );
}

function PlanRow({
  plan,
  store,
  primary,
  unavailable,
}: {
  plan: Plan;
  store: HeliosStore;
  primary: ReturnType<typeof primaryProvider>;
  unavailable: boolean;
}) {
  const open = store.expandedId === plan.id;
  const inNetwork = includesPrimary(plan.id, primary);
  const meds = store.medications.length;
  const cover = coverage(plan, store.medications);
  const alternate = store.savedProviderIds
    .map((id) => DIRECTORY_BY_ID[id])
    .find((provider) => provider && provider.id !== primary?.id && provider.kind === "physician" && provider.inNetworkPlanIds.includes(plan.id));

  return (
    <article className={cn("border-b border-line last:border-b-0", unavailable && "opacity-60")}>
      <div className="flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center">
        <button
          type="button"
          className="min-w-0 flex-1 text-left"
          aria-expanded={open}
          onClick={() => store.patch({ expandedId: open ? null : plan.id })}
        >
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-medium">{plan.name}</h2>
            {!plan.commissionable ? <span className="text-xs text-muted">Non-commissionable</span> : null}
            {plan.appointed ? <span className="text-xs text-gold">Appointed</span> : null}
            {unavailable ? <span className="text-xs text-gold">Unavailable</span> : null}
          </div>
          <p className="mt-1 text-xs text-muted">
            {plan.type} · {plan.carrier} · {planCode(plan)} · {store.year}
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs text-muted">
            <Star size={12} className={plan.stars >= 4.5 ? "fill-gold text-gold" : "text-muted"} />
            <span className="tabular-nums">{plan.stars ? `${plan.stars.toFixed(1)} out of 5` : "Not rated"}</span>
            {primary?.kind === "physician" ? (
              <span className="ml-2">{inNetwork ? "Primary in network" : "Primary not in network"}</span>
            ) : null}
          </p>
        </button>
        <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:gap-4">
          {store.columns.map((key) => (
            <div key={key} className="md:w-40 md:text-right">
              <p className="text-xs text-muted md:hidden">{columnLabel(key, store.period)}</p>
              <p className="text-sm font-medium tabular-nums">{columnValue(plan, key, store)}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:w-28 md:flex-col">
          <Button
            className="flex-1 px-3"
            aria-pressed={store.compareIds.includes(plan.id)}
            onClick={() => store.toggleCompare(plan.id)}
          >
            {store.compareIds.includes(plan.id) ? "Selected" : "Compare"}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="grid gap-6 border-t border-line bg-surface px-5 py-5 md:grid-cols-3">
          <div>
            <p className="text-xs tracking-wide text-muted uppercase">Estimated annual cost</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">
              {money(annualCost(plan, meds, store.year, store.extraHelp, store.pharmacy))}
            </p>
            <p className="mt-3 text-sm text-muted">Medical deductible {money(plan.medicalDeductible)}</p>
            <p className="text-sm text-muted">
              Drug deductible {money(plan.drugDeductible)}
              {plan.drugDeductibleNote ? ` (${plan.drugDeductibleNote})` : ""}
            </p>
            <p className="mt-3 text-sm">
              Pharmacy:{" "}
              {store.pharmacy === "mail" || store.pharmacy === "unset"
                ? "Mail order preferred"
                : store.pharmacy === "yes"
                  ? "Retail pharmacy"
                  : "No preferred pharmacy"}
            </p>
            <button type="button" className="mt-2 text-sm text-gold" onClick={() => store.patch({ assessmentOpen: true, assessmentSection: "meds" })}>
              Change pharmacy
            </button>
          </div>
          <div>
            <p className="text-xs tracking-wide text-muted uppercase">Drugs</p>
            {meds === 0 ? (
              <p className="mt-2 text-sm text-muted">No medications yet. Annual cost is premium only.</p>
            ) : (
              <>
                <p className="mt-2 text-sm">
                  {money(drugPortion(plan, meds, store.year, store.extraHelp, store.pharmacy))} estimated annual drug cost
                </p>
                <p className="mt-1 text-sm">
                  {cover.covered} of {cover.total} drugs covered
                  {cover.uncovered.length
                    ? ` · ${cover.uncovered.map((med) => med.strength).join(", ")} not on formulary`
                    : ""}
                </p>
              </>
            )}
          </div>
          <div>
            <p className="text-xs tracking-wide text-muted uppercase">Doctors</p>
            {plan.allowsOon ? (
              <p className="mt-2 text-sm text-muted">
                This plan allows out-of-network doctors. Most PPO or PFFS plans have a higher cost share out of network.
              </p>
            ) : null}
            {primary?.kind === "physician" ? (
              inNetwork ? (
                <p className="mt-2 text-sm">{primary.name} is in network.</p>
              ) : (
                <p className="mt-2 text-sm">
                  {primary.name}
                  <span className="mt-1 block text-muted">No locations in network</span>
                </p>
              )
            ) : (
              <p className="mt-2 text-sm text-muted">No primary doctor saved.</p>
            )}
            {alternate ? (
              <p className="mt-2 text-sm text-gold">{alternate.name} is in network. You can set them as primary.</p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                tone="quiet"
                className="px-0"
                onClick={() =>
                  store.patch({
                    providerOpen: true,
                    providerTab: "search",
                    networkPlanId: plan.id,
                    searchMode: "name",
                  })
                }
              >
                Find in-network doctors
              </Button>
              <Button
                onClick={() =>
                  store.patch({
                    stage: { name: "detail", planId: plan.id, tab: "drugs" },
                    selectedDrugId: store.medications[0]?.drugId ?? null,
                    assessmentOpen: false,
                  })
                }
              >
                Details
              </Button>
              <Button
                disabled={unavailable}
                tone="gold"
                onClick={() => store.patch({ stage: { name: "discovery", planId: plan.id }, assessmentOpen: false })}
              >
                Hold plan
              </Button>
              <Button onClick={() => store.patch({ emailOpen: true, emailPlanId: plan.id })}>Email</Button>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
