import { Check, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { COMPARE_ROWS, XRAY_FEATURES } from "@/lib/helios/benefits";
import { DRUG_BY_ID, MONTHS, monthCost } from "@/lib/helios/drugs";
import {
  annualCost,
  coverage,
  drugPortion,
  givebackOf,
  includesPrimary,
  isCovered,
  money,
  moopLine,
  NON_FORMULARY,
  planCode,
  premiumOf,
  primaryProvider,
} from "@/lib/helios/logic";
import { PLAN_BY_ID } from "@/lib/helios/plans";
import type { HeliosStore } from "@/lib/helios/store";
import type { DetailTab, Plan } from "@/lib/helios/types";
import { Button, Seg } from "./ui";
import { cn } from "@/lib/cn";

export function Xray({ store, plans }: { store: HeliosStore; plans: Plan[] }) {
  const focusId = store.stage.name === "xray" ? store.stage.focusId : plans[0]?.id;
  const focus = plans.find((plan) => plan.id === focusId) ?? plans[0];
  return (
    <div className="px-4 pb-28 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <Button tone="quiet" className="px-0" onClick={() => store.patch({ stage: { name: "plans" } })}>
          Back to plans
        </Button>
        <p className="text-sm text-muted">X-ray</p>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_18rem]">
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => {
            const annual = annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy);
            const active = focus?.id === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => store.patch({ stage: { name: "xray", focusId: plan.id } })}
                className={cn(
                  "rounded-3xl border p-5 text-left",
                  active ? "border-gold bg-surface" : "border-line bg-bg hover:bg-surface",
                )}
              >
                <p className="text-xs text-muted">{plan.carrier}</p>
                <h2 className="mt-2 text-xl font-medium">{plan.name}</h2>
                <p className="mt-1 text-xs text-muted">
                  {planCode(plan)} · {store.year}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm">
                  <Star size={14} className={plan.stars >= 4.5 ? "fill-gold text-gold" : "text-muted"} />
                  {plan.stars ? `${plan.stars.toFixed(1)} out of 5` : "Not rated"}
                </p>
                <p className="mt-4 text-3xl font-semibold tabular-nums">{money(premiumOf(plan, store.year), "premium")}</p>
                <p className="text-sm text-muted">Monthly premium</p>
                <p className="mt-3 text-sm tabular-nums">Estimated annual {money(annual)}</p>
              </button>
            );
          })}
        </div>
        {focus ? (
          <aside className="h-fit rounded-3xl border border-line bg-surface p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Highlights</p>
            <h3 className="mt-2 font-medium">{focus.name}</h3>
            <ul className="mt-4 space-y-3">
              {XRAY_FEATURES.map((feature) => {
                const on =
                  feature.key === "rx"
                    ? focus.features.rx
                    : feature.key === "hospital"
                      ? focus.features.hospital
                      : feature.key === "dental"
                        ? focus.features.dental
                        : feature.key === "vision"
                          ? focus.features.vision
                          : feature.key === "hearing"
                            ? focus.features.hearing
                            : feature.key === "fitness"
                              ? focus.features.fitness
                              : feature.key === "otc"
                                ? focus.features.otc
                                : feature.key === "transport"
                                  ? focus.features.transportation
                                  : focus.features.giveback || focus.giveback > 0;
                return (
                  <li key={feature.key} className="flex items-center gap-3 text-sm">
                    <span className={cn("grid size-5 place-items-center rounded-full", on ? "bg-gold text-bg" : "border border-line text-transparent")}>
                      <Check size={12} />
                    </span>
                    <span className={on ? "text-fg" : "text-muted"}>{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

export function PlanDetail({ store }: { store: HeliosStore }) {
  if (store.stage.name !== "detail") return null;
  const plan = PLAN_BY_ID[store.stage.planId];
  if (!plan) return null;
  const tab = store.stage.tab;
  return (
    <div className="px-4 pb-28 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <Button tone="quiet" className="px-0" onClick={() => store.patch({ stage: { name: "plans" } })}>
          Back to plans
        </Button>
        <Seg
          label="Plan detail"
          value={tab}
          onChange={(next) => store.patch({ stage: { name: "detail", planId: plan.id, tab: next as DetailTab } })}
          options={[
            { id: "summary", label: "Plan costs" },
            { id: "benefits", label: "Benefits" },
            { id: "drugs", label: "Drug costs" },
          ]}
        />
      </div>
      <header className="mt-6">
        <p className="text-xs text-muted">
          {plan.carrier} · {planCode(plan)} · {store.year}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{plan.name}</h1>
        <p className="mt-3 text-sm text-muted">
          Premium {money(premiumOf(plan, store.year), "premium")} · Annual{" "}
          {money(annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy))} · Drug deductible{" "}
          {money(plan.drugDeductible)}
        </p>
      </header>
      {tab === "summary" ? <Summary plan={plan} store={store} /> : null}
      {tab === "benefits" ? <SingleBenefits plan={plan} /> : null}
      {tab === "drugs" ? <DrugCosts plan={plan} store={store} /> : null}
    </div>
  );
}

function Summary({ plan, store }: { plan: Plan; store: HeliosStore }) {
  const primary = primaryProvider(store.primaryProviderId);
  const inNetwork = includesPrimary(plan.id, primary);
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <Fact label="In-network max" value={plan.moopIn == null ? "—" : money(plan.moopIn)} />
      <Fact label="Combined max" value={moopLine(plan)} />
      <Fact label="Part B giveback" value={givebackOf(plan, store.year) ? `Up to ${money(givebackOf(plan, store.year), "auto")}` : "None"} />
      <Fact label="Medical deductible" value={money(plan.medicalDeductible)} />
      <Fact label="Drug deductible" value={plan.drugDeductibleNote ? `${money(plan.drugDeductible)} · ${plan.drugDeductibleNote}` : money(plan.drugDeductible)} />
      <Fact label="Catastrophic limit" value={money(plan.catastrophic)} />
      <div className="rounded-3xl border border-line p-5 md:col-span-3">
        {primary?.kind === "physician" ? (
          inNetwork ? (
            <p>{primary.name} is in network as a PCP.</p>
          ) : (
            <p>
              {primary.name} — no locations in network.
            </p>
          )
        ) : (
          <p className="text-muted">No primary doctor on the case.</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button tone="gold" onClick={() => store.patch({ stage: { name: "discovery", planId: plan.id } })}>
            Hold plan
          </Button>
          <Button onClick={() => store.patch({ emailOpen: true, emailPlanId: plan.id })}>Email</Button>
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-line p-5">
      <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-2 text-lg font-medium tabular-nums">{value}</p>
    </div>
  );
}

function SingleBenefits({ plan }: { plan: Plan }) {
  const side = plan.id === "273829" ? "a" : plan.id === "273809" ? "b" : null;
  if (!side) {
    return (
      <ul className="mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line">
        {[
          ["Primary care", money(plan.pcp)],
          ["Specialist", plan.specialist],
          ["Dental", plan.dental],
          ["Vision", plan.vision],
          ["Hearing", plan.hearing],
          ["OTC", plan.otc],
          ["Transportation", plan.transportation],
          ["Fitness", plan.fitness ? "Covered" : "Not covered"],
          ["Max out-of-pocket", moopLine(plan)],
        ].map(([label, value]) => (
          <li key={label} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
            <span className="text-muted">{label}</span>
            <span className="text-right">{value}</span>
          </li>
        ))}
      </ul>
    );
  }
  const rows = COMPARE_ROWS.filter((row) => (side === "a" ? row.a : row.b));
  return (
    <ul className="mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line">
      {rows.map((row) => (
        <li key={`${row.category}-${row.label}`} className="grid gap-1 px-5 py-4 text-sm md:grid-cols-[10rem_1fr_1.4fr]">
          <span className="text-muted">{row.category}</span>
          <span>{row.label}</span>
          <span>{side === "a" ? row.a : row.b}</span>
        </li>
      ))}
    </ul>
  );
}

export function DrugCosts({ plan, store }: { plan: Plan; store: HeliosStore }) {
  const meds = store.medications;
  useEffect(() => {
    if (!store.selectedDrugId && meds[0]) store.patch({ selectedDrugId: meds[0].drugId });
  }, [meds, store]);
  const selected = store.selectedDrugId ? DRUG_BY_ID[store.selectedDrugId] : null;
  const coveredSelected = selected ? isCovered(plan, selected.id) : false;
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-muted">
            Pharmacy status:{" "}
            {store.pharmacy === "no" ? "Standard retail" : store.pharmacy === "yes" ? "Preferred retail" : "Preferred retail / mail order"}
          </p>
          <p className="mt-1 text-sm">
            {money(drugPortion(plan, meds.length, store.year, store.extraHelp, store.pharmacy))} estimated annual drug cost
            {meds.length ? ` · ${coverage(plan, meds).covered} of ${coverage(plan, meds).total} covered` : ""}
          </p>
        </div>
        <Button onClick={() => store.patch({ assessmentOpen: true, assessmentSection: "meds" })}>Change pharmacy</Button>
      </div>
      {meds.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-line px-5 py-10">
          <p className="text-lg font-medium">No medications in this case</p>
          <p className="mt-2 text-sm text-muted">Add a drug to see tier, prior authorization, and the month-by-month phase.</p>
          <Button className="mt-4" tone="gold" onClick={() => store.patch({ assessmentOpen: true, assessmentSection: "meds" })}>
            Add medications
          </Button>
        </div>
      ) : (
        <div className="mt-5 grid gap-4 lg:grid-cols-[16rem_1fr]">
          <ul className="overflow-hidden rounded-3xl border border-line">
            {meds.map((med) => {
              const on = store.selectedDrugId === med.drugId;
              const covered = isCovered(plan, med.drugId);
              return (
                <li key={med.uid}>
                  <button
                    type="button"
                    onClick={() => store.patch({ selectedDrugId: med.drugId })}
                    className={cn("flex min-h-14 w-full flex-col items-start justify-center px-4 text-left", on ? "bg-surface-2" : "hover:bg-surface")}
                  >
                    <span className="text-sm">{med.strength}</span>
                    <span className="text-xs text-muted">{covered ? "On formulary" : "Not on formulary"}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div>
            {selected ? (
              <div className="rounded-3xl border border-line p-5">
                <h2 className="text-xl font-medium">{selected.defaultStrength}</h2>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <Pair label="Tier" value={selected.tier == null ? "—" : `Tier ${selected.tier}`} />
                  <Pair label="Quantity limits" value={selected.ql ?? "—"} />
                  <Pair label="Prior authorization" value={selected.pa == null ? "—" : selected.pa ? "Yes" : "No"} />
                  <Pair label="Step therapy" value={selected.st == null ? "—" : selected.st ? "Yes" : "No"} />
                  <Pair label="Estimated full drug cost" value={selected.fullCost == null ? "—" : money(selected.fullCost, "auto")} />
                  <Pair label="Drug deductible" value={money(plan.drugDeductible)} />
                </dl>
                {!coveredSelected ? <p className="mt-4 text-sm text-muted">{NON_FORMULARY}</p> : null}
              </div>
            ) : (
              <p className="text-sm text-muted">Select a drug.</p>
            )}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {MONTHS.map((month, index) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => store.patch({ monthIndex: index })}
                  className={cn(
                    "min-h-11 shrink-0 rounded-full border px-4 text-sm",
                    store.monthIndex === index ? "border-gold text-fg" : "border-line text-muted",
                  )}
                >
                  {month}
                </button>
              ))}
            </div>
            <ul className="mt-3 divide-y divide-line overflow-hidden rounded-3xl border border-line">
              {meds.map((med) => {
                const drug = DRUG_BY_ID[med.drugId];
                const cell = monthCost(drug, store.monthIndex, isCovered(plan, drug.id));
                return (
                  <li key={med.uid} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                    <span>{med.strength}</span>
                    <span className="tabular-nums text-muted">
                      {money(cell.amount)} {cell.phase}
                    </span>
                  </li>
                );
              })}
              <li className="flex items-center justify-between bg-surface px-4 py-3 text-sm font-medium">
                <span>Total for {MONTHS[store.monthIndex]}</span>
                <span className="tabular-nums">
                  {money(
                    meds.reduce((sum, med) => {
                      const drug = DRUG_BY_ID[med.drugId];
                      return sum + monthCost(drug, store.monthIndex, isCovered(plan, drug.id)).amount;
                    }, 0),
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function Pair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

export function Compare({ store }: { store: HeliosStore }) {
  if (store.stage.name !== "compare") return null;
  const left = PLAN_BY_ID[store.stage.left];
  const right = PLAN_BY_ID[store.stage.right];
  if (!left || !right) return null;
  const diffs = COMPARE_ROWS.filter((row) => row.a !== row.b).length;
  let category = "";
  return (
    <div className="px-4 pb-28 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <Button tone="quiet" className="px-0" onClick={() => store.patch({ stage: { name: "plans" } })}>
          Back to plans
        </Button>
        <p className="text-sm text-gold">{diffs} differences</p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {[left, right].map((plan) => (
          <button
            key={plan.id}
            type="button"
            className="rounded-3xl border border-line p-5 text-left"
            onClick={() => store.patch({ stage: { name: "detail", planId: plan.id, tab: "summary" } })}
          >
            <p className="text-xs text-muted">{planCode(plan)}</p>
            <h1 className="mt-1 text-xl font-medium">{plan.name}</h1>
            <p className="mt-2 text-sm tabular-nums">{money(premiumOf(plan, store.year), "premium")} monthly</p>
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto rounded-3xl border border-line">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="text-xs tracking-wide text-muted uppercase">
            <tr className="border-b border-line">
              <th className="px-4 py-3 font-medium">Benefit</th>
              <th className="px-4 py-3 font-medium">{left.name}</th>
              <th className="px-4 py-3 font-medium">{right.name}</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => {
              const showCategory = row.category !== category;
              category = row.category;
              const diff = row.a !== row.b;
              return (
                <tr key={`${row.category}-${row.scope}-${row.label}`} className={cn("border-b border-line", diff && "bg-gold/5")}>
                  <th className="px-4 py-3 text-left font-normal">
                    {showCategory ? <span className="mb-1 block text-xs tracking-wide text-gold uppercase">{row.category}</span> : null}
                    <span className="text-muted">{row.scope}</span>
                    <span className="mt-1 block">{row.label}</span>
                  </th>
                  <td className="px-4 py-3 align-top">{row.a}</td>
                  <td className="px-4 py-3 align-top">{row.b}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Discovery({ store }: { store: HeliosStore }) {
  if (store.stage.name !== "discovery") return null;
  const plan = PLAN_BY_ID[store.stage.planId];
  if (!plan) return null;
  const primary = primaryProvider(store.primaryProviderId);
  return (
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-28">
      <p className="text-xs tracking-wide text-gold uppercase">Held for this session</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{plan.name}</h1>
      <p className="mt-3 text-muted">
        Nothing has been submitted. The recorded session ends at benefit review — this hold is only inside Helios.
      </p>
      <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
        <Row label="Personal code" value={store.personalCode || "Not issued"} />
        <Row label="ZIP" value={`${store.zip} · ${store.year}`} />
        <Row label="Plan" value={planCode(plan)} />
        <Row label="Estimated annual" value={money(annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy))} />
        <Row label="Medications" value={String(store.medications.length)} />
        <Row label="Primary" value={primary?.name ?? "None"} />
      </dl>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button onClick={() => store.patch({ stage: { name: "plans" } })}>Select another plan</Button>
        <Button onClick={() => store.patch({ stage: { name: "detail", planId: plan.id, tab: "drugs" } })}>Drug costs</Button>
        <Button
          onClick={() =>
            store.patch({
              stage: { name: "compare", left: plan.id === "273809" ? "273829" : plan.id, right: plan.id === "273829" ? "273809" : "273809" },
            })
          }
        >
          Benefits
        </Button>
        <Button tone="gold" onClick={() => store.patch({ emailOpen: true, emailPlanId: plan.id })}>
          Email plan
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}

export function EmailDialog({ store }: { store: HeliosStore }) {
  const plan = store.emailPlanId ? PLAN_BY_ID[store.emailPlanId] : null;
  const annual = plan ? annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy) : 0;
  const subject = `Medicare plan options for ${store.zip || "your ZIP"}`;
  const body = plan
    ? `Helios case ${store.personalCode || "draft"}\n${plan.name} (${planCode(plan)})\nPremium ${money(premiumOf(plan, store.year), "premium")} · Estimated annual ${money(annual)}\nMedications ${store.medications.length} · ZIP ${store.zip} · ${store.year}\nThis is a demonstration summary, not an enrollment.`
    : "";
  const [copied, setCopied] = useState(false);
  if (!store.emailOpen || !plan) return null;
  const href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-bg/80 p-4 md:items-center">
      <div role="dialog" aria-modal="true" aria-label="Email plan" className="w-full max-w-lg rounded-3xl border border-line bg-surface p-5">
        <h2 className="text-xl font-medium">Email plan</h2>
        <p className="mt-2 text-sm text-muted">{subject}</p>
        <pre className="mt-4 max-h-60 overflow-auto rounded-2xl bg-bg p-4 text-sm whitespace-pre-wrap">{body}</pre>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={href} className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg">
            Open mail
          </a>
          <Button
            onClick={() => {
              void navigator.clipboard?.writeText(`${subject}\n\n${body}`).then(() => {
                setCopied(true);
                toast("Copied");
              });
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button tone="quiet" onClick={() => store.patch({ emailOpen: false })}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
