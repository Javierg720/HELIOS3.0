import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Toaster } from "sonner";
import { sortPlans, visiblePlans } from "@/lib/helios/logic";
import { COLUMN_OPTIONS, COMPARE_LEFT, COMPARE_RIGHT, DRUG_SHOWCASE, XRAY_PLAN } from "@/lib/helios/plans";
import { useHelios, type HeliosStore } from "@/lib/helios/store";
import type { ColumnKey } from "@/lib/helios/types";
import { Assessment } from "./assessment";
import { Compare, Discovery, EmailDialog, PlanDetail, Xray } from "./details";
import { Filters } from "./filters";
import { PlanGrid } from "./grid";
import { Providers } from "./providers";
import { Button, inputClass, Mark, Seg } from "./ui";
import { cn } from "@/lib/cn";

const STEPS = [
  { id: "intake", label: "Intake" },
  { id: "plans", label: "Plans" },
  { id: "xray", label: "X-ray" },
  { id: "providers", label: "Providers" },
  { id: "medications", label: "Medications" },
  { id: "drugs", label: "Drug costs" },
  { id: "benefits", label: "Benefits" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

const COPY: Record<StepId, string> = {
  intake: "ZIP and plan year open the market. Medicare number and date of birth stay optional.",
  plans: "Recommended plans for this ZIP. Annual cost stays at the premium until medications are saved.",
  xray: "The same catalog as cards — star rating and nine benefit highlights.",
  providers: "Match a directory record, confirm the NPI, then set one primary.",
  medications: "Strength, quantity, and condition. Saving a drug reprices every plan.",
  drugs: "Tier, prior authorization, step therapy, and the cost by month.",
  benefits: "Two plan IDs, line by line. Gold marks a difference.",
};

export function HeliosApp() {
  const store = useHelios();
  const [drawMark, setDrawMark] = useState(true);

  useEffect(() => {
    void useHelios.persist.rehydrate();
    const timer = window.setTimeout(() => setDrawMark(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const current = useHelios.getState();
      if (current.emailOpen) current.patch({ emailOpen: false });
      else if (current.providerOpen) current.patch({ providerOpen: false, networkPlanId: null });
      else if (current.filterSheet) current.patch({ filterSheet: false });
      else if (current.columnPicker) current.patch({ columnPicker: false });
      else if (current.assessmentOpen) current.patch({ assessmentOpen: false });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const plans = useMemo(() => {
    if (store.zip !== "33498") return [];
    return sortPlans(
      visiblePlans(store.filters, store.year),
      store.sort,
      store.year,
      store.medications.length,
      store.extraHelp,
      store.pharmacy,
    );
  }, [store.zip, store.filters, store.year, store.sort, store.medications.length, store.extraHelp, store.pharmacy]);

  const step = currentStep(store);
  const showFilters = store.stage.name === "plans" || store.stage.name === "xray";

  function go(id: StepId) {
    if (id === "intake") {
      store.patch({ stage: { name: "plans" }, assessmentOpen: true, assessmentSection: "basic", providerOpen: false });
      return;
    }
    if (id === "plans") {
      store.patch({ stage: { name: "plans" }, assessmentOpen: false, providerOpen: false });
      return;
    }
    if (id === "xray") {
      const focus = plans.find((plan) => plan.id === XRAY_PLAN)?.id ?? plans[0]?.id ?? XRAY_PLAN;
      store.patch({ stage: { name: "xray", focusId: focus }, assessmentOpen: false, providerOpen: false });
      return;
    }
    if (id === "providers") {
      store.patch({ providerOpen: true, providerTab: "search", assessmentOpen: false, networkPlanId: null });
      return;
    }
    if (id === "medications") {
      store.patch({ assessmentOpen: true, assessmentSection: "meds", providerOpen: false, stage: { name: "plans" } });
      return;
    }
    if (id === "drugs") {
      store.patch({
        stage: { name: "detail", planId: DRUG_SHOWCASE, tab: "drugs" },
        assessmentOpen: false,
        providerOpen: false,
        selectedDrugId: store.medications[0]?.drugId ?? null,
      });
      return;
    }
    const pair = store.compareIds.length === 2 ? store.compareIds : [COMPARE_LEFT, COMPARE_RIGHT];
    store.patch({
      stage: { name: "compare", left: pair[0], right: pair[1] },
      assessmentOpen: false,
      providerOpen: false,
    });
  }

  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <Toaster theme="dark" />
      <header className="shrink-0 border-b border-line">
        <div className="h-px bg-gold" />
        <div className="flex items-center gap-3 px-4 py-3 md:px-6">
          <Mark alt="" draw={drawMark} className="size-9" />
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-widest">HELIOS</p>
            <p className="truncate font-mono text-xs text-muted">{pathFor(store)}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {store.personalCode ? (
              <span className="hidden font-mono text-xs tracking-wide text-gold sm:inline">{store.personalCode}</span>
            ) : null}
            <Button className="hidden sm:inline-flex" onClick={() => store.loadCase()}>
              Recorded case
            </Button>
            <Button tone="gold" onClick={() => store.patch({ assessmentOpen: true, assessmentSection: store.assessmentSection })}>
              Needs assessment
            </Button>
          </div>
        </div>
        <div className="flex gap-1 overflow-x-auto px-4 pb-3 md:px-6">
          {STEPS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cn(
                "min-h-11 shrink-0 border-b-2 px-3 text-sm",
                step === item.id ? "border-gold text-fg" : "border-transparent text-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>
      <p className="shrink-0 px-4 py-3 text-sm text-muted md:px-6">{COPY[step]}</p>
      {showFilters ? <Toolbar store={store} /> : null}
      <div className="flex min-h-0 flex-1">
        {showFilters ? (
          <aside className="hidden w-72 shrink-0 overflow-y-auto border-r border-line lg:block">
            <Filters store={store} />
          </aside>
        ) : null}
        <main className="min-w-0 flex-1 overflow-y-auto">
          {store.stage.name === "plans" ? <PlanGrid store={store} plans={plans} /> : null}
          {store.stage.name === "xray" ? <Xray store={store} plans={plans} /> : null}
          {store.stage.name === "detail" ? <PlanDetail store={store} /> : null}
          {store.stage.name === "compare" ? <Compare store={store} /> : null}
          {store.stage.name === "discovery" ? <Discovery store={store} /> : null}
        </main>
        {store.assessmentOpen ? <Assessment store={store} /> : null}
      </div>
      {store.providerOpen ? <Providers store={store} /> : null}
      {store.emailOpen ? <EmailDialog store={store} /> : null}
      {store.filterSheet ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-bg">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="font-medium">Filters</p>
            <Button tone="quiet" onClick={() => store.patch({ filterSheet: false })}>
              Done
            </Button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <Filters store={store} />
          </div>
        </div>
      ) : null}
      <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-line px-4 py-2 font-mono text-xs text-muted md:px-6">
        <span className="truncate">
          {store.zip || "—"} · {store.year} · MAPD · {plans.length} plans
        </span>
        <span className="shrink-0">
          {store.medications.length} meds · {store.savedProviderIds.length} providers
        </span>
      </footer>
    </div>
  );
}

function Toolbar({ store }: { store: HeliosStore }) {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-line px-4 py-3 md:px-6">
      <Seg
        label="View"
        value={store.stage.name === "xray" ? "xray" : "list"}
        onChange={(value) => {
          if (value === "xray") {
            const focus = store.stage.name === "xray" ? store.stage.focusId : XRAY_PLAN;
            store.patch({ stage: { name: "xray", focusId: focus } });
          } else store.patch({ stage: { name: "plans" } });
        }}
        options={[
          { id: "list", label: "List" },
          { id: "xray", label: "X-ray" },
        ]}
      />
      <label className="sr-only" htmlFor="sort">
        Sort
      </label>
      <select
        id="sort"
        className="h-11 rounded-full border border-line bg-surface px-3 text-sm"
        value={store.sort}
        onChange={(event) => store.patch({ sort: event.target.value as typeof store.sort })}
      >
        <option value="recommended">Sort: Recommended</option>
        <option value="premium">Sort: Premium</option>
        <option value="annual">Sort: Annual cost</option>
        <option value="stars">Sort: Stars</option>
        <option value="moop">Sort: Max out-of-pocket</option>
      </select>
      <Seg
        label="Year"
        value={String(store.year)}
        onChange={(value) => store.patch({ year: value === "2026" ? 2026 : 2027 })}
        options={[
          { id: "2027", label: "2027" },
          { id: "2026", label: "2026" },
        ]}
      />
      <Seg
        label="Time period"
        value={store.period}
        onChange={(period) => store.patch({ period })}
        options={[
          { id: "annual", label: "Annual" },
          { id: "monthly", label: "Monthly" },
        ]}
      />
      <div className="relative">
        <Button onClick={() => store.patch({ columnPicker: !store.columnPicker })}>
          Columns ({store.columns.length})
        </Button>
        {store.columnPicker ? (
          <div className="absolute left-0 z-30 mt-2 w-64 rounded-2xl border border-line bg-surface p-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm">Select up to 3 columns</p>
              <button type="button" className="text-xs text-gold" onClick={() => store.clearColumns()}>
                Clear all
              </button>
            </div>
            <ul className="mt-2">
              {COLUMN_OPTIONS.map((column) => {
                const on = store.columns.includes(column.id);
                return (
                  <li key={column.id}>
                    <button
                      type="button"
                      className="flex min-h-11 w-full items-center justify-between text-sm"
                      onClick={() => store.toggleColumn(column.id as ColumnKey)}
                    >
                      <span>{column.label}</span>
                      <span className={on ? "text-gold" : "text-muted"}>{on ? "On" : "Off"}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <input
        className={cn(inputClass, "h-11 w-40 rounded-full md:w-56")}
        placeholder="Search plans"
        value={store.filters.query}
        onChange={(event) => store.patch({ filters: { ...store.filters, query: event.target.value } })}
      />
      <Button className="lg:hidden" onClick={() => store.patch({ filterSheet: true })}>
        <SlidersHorizontal size={16} />
        Filters
      </Button>
    </div>
  );
}

function currentStep(store: HeliosStore): StepId {
  if (store.providerOpen) return "providers";
  if (store.assessmentOpen && store.assessmentSection === "meds") return "medications";
  if (store.assessmentOpen && store.assessmentSection === "basic") return "intake";
  if (store.assessmentOpen && store.assessmentSection === "doctors") return "providers";
  if (store.stage.name === "xray") return "xray";
  if (store.stage.name === "detail" && store.stage.tab === "drugs") return "drugs";
  if (store.stage.name === "compare" || (store.stage.name === "detail" && store.stage.tab === "benefits")) return "benefits";
  return "plans";
}

function pathFor(store: HeliosStore): string {
  const zip = store.zip || "—";
  const stage = store.stage;
  if (stage.name === "xray") return `/planxray/xray/${zip}/12099/MAPD/${stage.focusId}/10`;
  if (stage.name === "detail" && stage.tab === "drugs") return `/plandetails/drugs/${zip}/12099/MAPD/${stage.planId}`;
  if (stage.name === "detail") return `/plandetails/benefits/${zip}/12099/MAPD/${stage.planId}`;
  if (stage.name === "compare") return `/plandetails/benefits/${zip}/12099/MAPD/${stage.left}|${stage.right}`;
  if (stage.name === "discovery") return "/discovery";
  return `/plans/${zip}/12099/MAPD`;
}
