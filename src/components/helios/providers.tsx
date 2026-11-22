import { DIRECTORY_BY_ID } from "@/lib/helios/directory";
import { CITIES, SPECIALTIES } from "@/lib/helios/directory";
import { facilitySuggestions, saturniaMiss, searchDirectory } from "@/lib/helios/logic";
import type { HeliosStore } from "@/lib/helios/store";
import type { SearchMode } from "@/lib/helios/types";
import { Button, Field, inputClass, Seg } from "./ui";

const MODES: { id: SearchMode; label: string; hint: string }[] = [
  { id: "name", label: "Doctor name", hint: "Search by first and/or last name using at least 2 characters." },
  { id: "nameAddress", label: "Doctor name and address", hint: "Search by address and first and/or last name using at least 2 characters." },
  { id: "address", label: "Address", hint: "Search by street and city." },
  { id: "npi", label: "NPI", hint: "Search the 10-digit NPI." },
  { id: "facility", label: "Hospital / facility / medical group", hint: "Search an organization name." },
];

export function Providers({ store }: { store: HeliosStore }) {
  const mode = MODES.find((item) => item.id === store.searchMode) ?? MODES[0];
  const results = searchDirectory({
    mode: store.searchMode,
    first: store.first,
    last: store.last,
    address: store.address,
    city: store.city,
    npi: store.npi,
    facility: store.facility,
    radius: store.radius,
    specialty: store.specialty,
    gender: store.gender,
    cityFilter: store.cityFilter,
    networkPlanId: store.networkPlanId,
  });
  const suggestions = store.searchMode === "facility" ? facilitySuggestions(store.facility) : [];
  const miss = saturniaMiss(
    {
      mode: store.searchMode,
      first: store.first,
      last: store.last,
      address: store.address,
      city: store.city,
      npi: store.npi,
      facility: store.facility,
      radius: store.radius,
      specialty: store.specialty,
      gender: store.gender,
      cityFilter: store.cityFilter,
      networkPlanId: store.networkPlanId,
    },
    results.length,
  );
  const baptist = store.facility.toLowerCase().includes("baptist");

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-bg/80 p-0 md:items-center md:p-6">
      <div role="dialog" aria-modal="true" aria-label="Providers" className="flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-line bg-surface md:max-h-[90dvh] md:rounded-3xl">
        <header className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <Seg
            label="Provider tabs"
            value={store.providerTab}
            onChange={(providerTab) => store.patch({ providerTab })}
            options={[
              { id: "search", label: "Search providers" },
              { id: "saved", label: "Saved providers" },
            ]}
          />
          <Button tone="quiet" onClick={() => store.patch({ providerOpen: false, networkPlanId: null })}>
            Close
          </Button>
        </header>
        {store.providerTab === "saved" ? (
          <Saved store={store} />
        ) : (
          <div className="grid min-h-0 flex-1 md:grid-cols-[18rem_1fr]">
            <div className="overflow-y-auto border-b border-line p-5 md:border-r md:border-b-0">
              <Field label="Search mode">
                <select className={inputClass} value={store.searchMode} onChange={(event) => store.patch({ searchMode: event.target.value as SearchMode })}>
                  {MODES.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>
              <p className="mt-3 text-sm text-muted">{mode.hint}</p>
              <div className="mt-4 grid gap-3">
                {store.searchMode === "name" || store.searchMode === "nameAddress" ? (
                  <>
                    <Field label="First name">
                      <input className={inputClass} value={store.first} onChange={(event) => store.patch({ first: event.target.value })} />
                    </Field>
                    <Field label="Last name">
                      <input className={inputClass} value={store.last} onChange={(event) => store.patch({ last: event.target.value })} />
                    </Field>
                  </>
                ) : null}
                {store.searchMode === "nameAddress" || store.searchMode === "address" ? (
                  <>
                    <Field label="Address">
                      <input className={inputClass} value={store.address} onChange={(event) => store.patch({ address: event.target.value })} />
                    </Field>
                    <Field label="City">
                      <input className={inputClass} value={store.city} onChange={(event) => store.patch({ city: event.target.value })} />
                    </Field>
                  </>
                ) : null}
                {store.searchMode === "npi" ? (
                  <Field label="NPI">
                    <input className={inputClass} value={store.npi} onChange={(event) => store.patch({ npi: event.target.value })} />
                  </Field>
                ) : null}
                {store.searchMode === "facility" ? (
                  <Field label="Hospital / facility / medical group name">
                    <input className={inputClass} value={store.facility} onChange={(event) => store.patch({ facility: event.target.value })} />
                  </Field>
                ) : null}
              </div>
              {suggestions.length > 0 ? (
                <ul className="mt-2 overflow-hidden rounded-xl border border-line">
                  {suggestions.map((item) => (
                    <li key={item.id}>
                      <button type="button" className="min-h-11 w-full px-3 text-left text-sm hover:bg-surface-2" onClick={() => store.patch({ facility: item.name })}>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 text-sm">
                Searching within {store.radius} miles of ZIP {store.zip || "—"}{" "}
                <button type="button" className="text-gold" onClick={() => store.patch({ radius: store.radius === 25 ? 100 : 25 })}>
                  Edit
                </button>
              </p>
              <div className="mt-4 grid gap-3">
                <Field label="Specialty">
                  <select className={inputClass} value={store.specialty} onChange={(event) => store.patch({ specialty: event.target.value })}>
                    <option value="">All</option>
                    {SPECIALTIES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Gender">
                  <select className={inputClass} value={store.gender} onChange={(event) => store.patch({ gender: event.target.value })}>
                    <option value="">All</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </Field>
                <Field label="City">
                  <select className={inputClass} value={store.cityFilter} onChange={(event) => store.patch({ cityFilter: event.target.value })}>
                    <option value="">All</option>
                    {CITIES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Button
                  tone="quiet"
                  onClick={() => store.patch({ specialty: "", gender: "", cityFilter: "", networkPlanId: null })}
                >
                  Clear filters
                </Button>
              </div>
              <div className="mt-5">
                <p className="text-xs tracking-wide text-muted uppercase">Case leads</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button
                    onClick={() => store.patch({ searchMode: "name", first: "Mushfeka", last: "Golawala", providerTab: "search" })}
                  >
                    Golawala
                  </Button>
                  <Button onClick={() => store.patch({ searchMode: "name", first: "Dwight", last: "Ayala" })}>Ayala</Button>
                  <Button
                    onClick={() =>
                      store.patch({ searchMode: "facility", facility: "Baptist Health Boca Raton", first: "", last: "" })
                    }
                  >
                    Boca Raton Regional
                  </Button>
                </div>
                <p className="mt-2 text-xs text-muted">Leads are unverified until a directory record carries an NPI.</p>
              </div>
            </div>
            <div className="min-h-0 overflow-y-auto p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">
                  {results.length} {results.length === 1 ? "result" : "results"}
                  {baptist && results.length > 0 ? " · 8 of 33 in the South Florida network" : ""} · Sort by nearest
                </p>
                {store.networkPlanId ? <p className="text-xs text-gold">In-network filter on</p> : null}
              </div>
              {miss ? (
                <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm">
                  <p>No directory record at that address.</p>
                  <p className="mt-2 text-muted">
                    Mushfeka Golawala’s NPI 1013151141 is listed at 21644 State Rd 7, Boca Raton — not 19498 Saturnia Lakes Drive.
                  </p>
                  <Button className="mt-3" tone="gold" onClick={() => store.patch({ searchMode: "npi", npi: "1013151141" })}>
                    Show the NPI record
                  </Button>
                </div>
              ) : null}
              {results.length === 0 && !miss ? (
                <div className="mt-8">
                  <p className="font-medium">No providers added yet.</p>
                  <p className="mt-2 text-sm text-muted">No results found, please try other search criteria.</p>
                </div>
              ) : (
                <ul className="mt-4 space-y-3">
                  {results.map((provider) => {
                    const saved = store.savedProviderIds.includes(provider.id);
                    const nearest = provider.locations[0];
                    return (
                      <li key={provider.id} className="rounded-2xl border border-line p-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-medium">{provider.name}</p>
                            <p className="text-xs text-muted">{provider.specialty}</p>
                            <p className="mt-2 text-sm">{nearest.line}</p>
                            <p className="text-sm text-muted">
                              {nearest.distance.toFixed(1)} mi away
                              {provider.locations.length > 1 ? ` · + ${provider.locations.length - 1} more locations` : ""}
                            </p>
                          </div>
                          <Button tone={saved ? "quiet" : "gold"} disabled={saved} onClick={() => store.saveProvider(provider.id)}>
                            {saved ? "Saved" : "Save"}
                          </Button>
                        </div>
                        {provider.npi ? (
                          <p className="mt-3 text-xs text-muted">
                            NPI {provider.npi}
                            {provider.npiVerified ? " · NPPES verified" : ""}
                            {provider.formerName ? ` · Former name ${provider.formerName}` : ""}
                            {provider.official ? ` · ${provider.official}` : ""}
                          </p>
                        ) : (
                          <p className="mt-3 text-xs text-muted">Directory match · NPI not confirmed in this session</p>
                        )}
                        {provider.leadAddress ? (
                          <p className="mt-2 text-xs text-muted">Lead address {provider.leadAddress}. The directory address above is the one that saves.</p>
                        ) : null}
                        {provider.locations.length > 1 ? (
                          <ul className="mt-3 space-y-1 text-xs text-muted">
                            {provider.locations.slice(1).map((loc) => (
                              <li key={loc.line}>
                                {loc.line} · {loc.distance.toFixed(1)} mi
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Saved({ store }: { store: HeliosStore }) {
  const saved = store.savedProviderIds.map((id) => DIRECTORY_BY_ID[id]).filter(Boolean);
  if (saved.length === 0) {
    return (
      <div className="p-8">
        <p className="font-medium">No providers added yet.</p>
        <p className="mt-2 text-sm text-muted">Search providers to locate a current provider or find a new one.</p>
      </div>
    );
  }
  return (
    <ul className="space-y-3 overflow-y-auto p-5">
      {saved.map((provider) => {
        const primary = store.primaryProviderId === provider.id;
        const nearest = provider.locations[0];
        return (
          <li key={provider.id} className="rounded-2xl border border-line p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-medium">{provider.name}</p>
                <p className="text-xs text-muted">{provider.specialty}</p>
                <p className="mt-2 text-sm">
                  {nearest.line}
                  {provider.locations.length > 1 ? ` + ${provider.locations.length - 1} more locations` : ""}
                </p>
                {provider.npi ? <p className="mt-1 text-xs text-muted">NPI {provider.npi}</p> : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {primary ? (
                  <span className="inline-flex min-h-11 items-center text-sm text-gold">Primary provider</span>
                ) : (
                  <Button onClick={() => store.makePrimary(provider.id)}>Set as primary</Button>
                )}
                <Button tone="quiet" onClick={() => store.removeProvider(provider.id)}>
                  Remove
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
