import { useMemo, useState } from "react";
import { DIRECTORY_BY_ID } from "@/lib/helios/directory";
import { CONDITION_GROUPS, csnpFromMeds, DRUG_BY_ID, FREQUENCIES, recordedMedications } from "@/lib/helios/drugs";
import { BEQ_TEXT, CSNP_WARNING, drugSuggestions, UNAVAILABLE_WARNING } from "@/lib/helios/logic";
import type { HeliosStore } from "@/lib/helios/store";
import type { Frequency, SavedMed } from "@/lib/helios/types";
import { Button, Field, inputClass, Seg } from "./ui";
import { cn } from "@/lib/cn";

export function Assessment({ store }: { store: HeliosStore }) {
  return (
    <aside className="fixed inset-0 z-40 flex flex-col bg-bg xl:static xl:z-auto xl:w-[28rem] xl:border-l xl:border-line">
      <header className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Needs assessment</p>
          <h2 className="text-2xl font-semibold">Case context</h2>
        </div>
        <div className="flex gap-2">
          <Button tone="quiet" onClick={() => store.reset()}>
            New session
          </Button>
          <Button tone="quiet" onClick={() => store.patch({ assessmentOpen: false })}>
            Close
          </Button>
        </div>
      </header>
      <div className="border-b border-line px-5 py-3">
        <Seg
          label="Assessment section"
          value={store.assessmentSection}
          onChange={(assessmentSection) => store.patch({ assessmentSection })}
          options={[
            { id: "basic", label: "Basic" },
            { id: "meds", label: "Medications" },
            { id: "doctors", label: "Doctors" },
          ]}
        />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        {store.assessmentSection === "basic" ? <Basic store={store} /> : null}
        {store.assessmentSection === "meds" ? <Medications store={store} /> : null}
        {store.assessmentSection === "doctors" ? <Doctors store={store} /> : null}
      </div>
    </aside>
  );
}

function Basic({ store }: { store: HeliosStore }) {
  const ready = store.zip.length === 5;
  return (
    <div>
      <Field label="Plan year">
        <Seg
          label="Plan year"
          value={String(store.year)}
          onChange={(value) => store.patch({ year: value === "2026" ? 2026 : 2027 })}
          options={[
            { id: "2027", label: "2027" },
            { id: "2026", label: "2026" },
          ]}
        />
      </Field>
      <div className="mt-4">
        <Field label="ZIP code">
          <input
            className={inputClass}
            inputMode="numeric"
            maxLength={5}
            value={store.zip}
            onChange={(event) => store.patch({ zip: event.target.value.replace(/\D/g, "").slice(0, 5) })}
          />
        </Field>
      </div>
      {store.zip === "33498" ? (
        <p className="mt-3 text-sm text-muted">3 carriers · 44 plans represented</p>
      ) : (
        <p className="mt-3 text-sm text-muted">The loaded market is 33498.</p>
      )}
      <div className="mt-4 grid gap-4">
        <Field label="Medicare number">
          <input
            className={inputClass}
            value={store.medicareNumber}
            placeholder="Optional"
            onChange={(event) => store.patch({ medicareNumber: event.target.value.toUpperCase() })}
          />
        </Field>
        <Field label="Date of birth">
          <input
            className={inputClass}
            value={store.dob}
            placeholder="mm / dd / yyyy"
            onChange={(event) => store.patch({ dob: event.target.value })}
          />
        </Field>
      </div>
      <blockquote className="mt-5 rounded-2xl border border-line bg-surface px-4 py-4 text-sm leading-6 text-muted">
        {BEQ_TEXT}
      </blockquote>
      <div className="mt-3 flex gap-2">
        <Button tone={store.consent === true ? "gold" : "ghost"} onClick={() => store.patch({ consent: true })}>
          Yes, proceed
        </Button>
        <Button tone={store.consent === false ? "gold" : "ghost"} onClick={() => store.patch({ consent: false })}>
          Not now
        </Button>
      </div>
      <p className="mt-6 text-sm">Are you currently enrolled in a Medicare Advantage or Prescription Drug plan?</p>
      <div className="mt-3 flex gap-2">
        <Button tone={store.enrolled === true ? "gold" : "ghost"} onClick={() => store.patch({ enrolled: true })}>
          Yes
        </Button>
        <Button tone={store.enrolled === false ? "gold" : "ghost"} onClick={() => store.patch({ enrolled: false })}>
          No
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          tone="gold"
          disabled={!ready}
          onClick={() => {
            store.issueCode();
            store.patch({ assessmentOpen: false, stage: { name: "plans" } });
          }}
        >
          View all plans
        </Button>
        <Button onClick={() => store.loadCase()}>Load 33498 case</Button>
      </div>
      <p className="mt-3 text-xs text-muted">
        {store.consent === true
          ? "Consent recorded. Enrichment stays optional in this demonstration."
          : "Consent is not recorded. Medicare number and date of birth were never required for this path."}
      </p>
    </div>
  );
}

function Medications({ store }: { store: HeliosStore }) {
  const [query, setQuery] = useState("");
  const [drugId, setDrugId] = useState("");
  const [strength, setStrength] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("Every month");
  const [quantity, setQuantity] = useState("30");
  const [conditions, setConditions] = useState<string[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const suggestions = useMemo(() => drugSuggestions(query), [query]);
  const drug = drugId ? DRUG_BY_ID[drugId] : null;
  const groups = CONDITION_GROUPS.filter((group) => !drug || drug.groups.includes(group.id));
  const csnp = csnpFromMeds(store.medications);

  function chooseDrug(id: string) {
    const next = DRUG_BY_ID[id];
    setDrugId(id);
    setQuery(next.name);
    setStrength(next.defaultStrength);
    setFrequency(next.defaultFrequency);
    setQuantity(String(next.defaultQuantity));
    setConditions([]);
    setEditing(null);
  }

  function toggleCondition(item: string) {
    setConditions((current) => {
      if (item === "No conditions") return ["No conditions"];
      const without = current.filter((entry) => entry !== "No conditions" && entry !== item);
      return current.includes(item) ? without : [...without, item];
    });
  }

  function commit() {
    if (!drug || !strength) return;
    const qty = Number(quantity);
    if (!Number.isFinite(qty) || qty <= 0) return;
    const med: SavedMed = {
      uid: editing ?? `med-${drug.id}-${Date.now()}`,
      drugId: drug.id,
      strength,
      frequency,
      quantity: qty,
      conditions,
    };
    store.addMed(med);
    setEditing(null);
    setDrugId("");
    setQuery("");
    setStrength("");
    setConditions([]);
  }

  return (
    <div>
      {csnp ? (
        <div className="mb-4 space-y-2">
          <p className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm">{UNAVAILABLE_WARNING}</p>
          <p className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm">{CSNP_WARNING}</p>
        </div>
      ) : null}
      <Field label="Medication name">
        <input
          className={inputClass}
          value={query}
          placeholder="At least 2 characters"
          onChange={(event) => {
            setQuery(event.target.value);
            setDrugId("");
          }}
        />
      </Field>
      {suggestions.length > 0 && !drug ? (
        <ul className="mt-2 overflow-hidden rounded-xl border border-line">
          {suggestions.map((item) => (
            <li key={item.id}>
              <button type="button" className="flex min-h-11 w-full items-center justify-between px-3 text-left text-sm hover:bg-surface-2" onClick={() => chooseDrug(item.id)}>
                <span>{item.name}</span>
                <span className="text-xs text-muted">{item.commonUse}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {drug ? (
        <div className="mt-4 grid gap-4">
          <Field label="Dosage">
            <select className={inputClass} value={strength} onChange={(event) => setStrength(event.target.value)}>
              {drug.strengths.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
          <Field label="Refill frequency">
            <select
              className={inputClass}
              value={frequency}
              onChange={(event) => setFrequency(event.target.value as Frequency)}
            >
              {FREQUENCIES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
          <Field label="Quantity">
            <input className={inputClass} inputMode="numeric" value={quantity} onChange={(event) => setQuantity(event.target.value.replace(/\D/g, ""))} />
          </Field>
          <div>
            <p className="text-sm">Are you taking this medication for any of these conditions?</p>
            <div className="mt-2">
              {groups.map((group) => (
                <div key={group.id} className="mt-3">
                  <p className="text-xs text-muted">{group.label}</p>
                  {group.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleCondition(item)}
                      className={cn(
                        "mt-1 flex min-h-11 w-full items-center rounded-xl border px-3 text-left text-sm",
                        conditions.includes(item) ? "border-gold text-fg" : "border-line text-muted",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Button tone="gold" onClick={commit}>
            {editing ? "Save medication" : "Add medication"}
          </Button>
          <p className="text-xs text-muted">A typed name is not saved until you add it. Farxiga can be searched and left unsaved.</p>
        </div>
      ) : null}

      <div className="mt-6">
        <Field label="Is there a pharmacy you use to fill prescriptions?">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["yes", "Yes"],
                ["no", "No"],
                ["mail", "Mail order"],
              ] as const
            ).map(([id, label]) => (
              <Button key={id} tone={store.pharmacy === id ? "gold" : "ghost"} onClick={() => store.patch({ pharmacy: id })}>
                {label}
              </Button>
            ))}
          </div>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Do you receive Extra Help / Low Income Subsidy?">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["yes", "Yes"],
                ["no", "No"],
                ["unknown", "I don't know"],
              ] as const
            ).map(([id, label]) => (
              <Button key={id} tone={store.extraHelp === id ? "gold" : "ghost"} onClick={() => store.patch({ extraHelp: id })}>
                {label}
              </Button>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-6 space-y-3">
        {store.medications.map((med) => (
          <div key={med.uid} className="rounded-2xl border border-line px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{med.strength}</p>
                <p className="text-sm text-muted">
                  {med.frequency} ({med.quantity})
                  {med.conditions.length ? ` · ${med.conditions.join(", ")}` : ""}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-sm text-gold"
                  onClick={() => {
                    chooseDrug(med.drugId);
                    setStrength(med.strength);
                    setFrequency(med.frequency);
                    setQuantity(String(med.quantity));
                    setConditions(med.conditions);
                    setEditing(med.uid);
                  }}
                >
                  Edit
                </button>
                <button type="button" className="text-sm text-muted" onClick={() => store.removeMed(med.uid)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="mt-4"
        onClick={() => {
          recordedMedications().forEach((med) => store.addMed(med));
          if (!store.personalCode) store.issueCode();
        }}
      >
        Add the recorded nine
      </Button>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button tone="gold" onClick={() => store.patch({ assessmentOpen: false, stage: { name: "plans" } })}>
          Update and close
        </Button>
        <Button onClick={() => store.patch({ assessmentSection: "basic" })}>View needs assessment</Button>
      </div>
    </div>
  );
}

function Doctors({ store }: { store: HeliosStore }) {
  const saved = store.savedProviderIds.map((id) => DIRECTORY_BY_ID[id]).filter(Boolean);
  return (
    <div>
      {saved.length === 0 ? (
        <div className="rounded-2xl border border-line px-4 py-6">
          <p className="font-medium">No saved providers</p>
          <p className="mt-2 text-sm text-muted">Search providers to locate a current provider or find a new one.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {saved.map((provider) => (
            <li key={provider.id} className="rounded-2xl border border-line px-4 py-3">
              <p className="font-medium">{provider.name}</p>
              <p className="text-xs text-muted">{provider.specialty}</p>
              <p className="mt-1 text-sm">{store.primaryProviderId === provider.id ? "Primary provider" : "Saved"}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button tone="gold" onClick={() => store.patch({ providerOpen: true, providerTab: "search", networkPlanId: null })}>
          Search providers
        </Button>
        <Button onClick={() => store.loadCase()}>Load recorded providers</Button>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button tone="gold" onClick={() => store.patch({ assessmentOpen: false })}>
          Update and close
        </Button>
        <Button onClick={() => store.patch({ assessmentSection: "basic" })}>View needs assessment</Button>
      </div>
    </div>
  );
}
