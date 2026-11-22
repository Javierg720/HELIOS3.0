# SunFire Matrix / Blaze Agent View — Exhaustive Page-by-Page Workflow Blueprint (FINAL, dense-OCR verified)

## Source and method

- **Primary source:** `/home/user/Downloads/Screen Recording 2026-11-15 134956 (1) repaired.mp4`
- **Video status:** The original file was missing `moov`; it was repaired locally by reconstructing the H.264 bitstream and remuxing. The repaired MP4 is 837 MB, H.264 High, 1920×1080, 30 fps, 24,827 frames, 827.566667 s (**13:47**).
- **Inspection method:** I extracted frames at 10-second intervals and then at 2-second intervals and ran OCR (`tesseract` 5.5.4, `-l eng --psm 6`) over them. The 10-second pass produced **83 frames** and a **1,931-line / 81 KB** transcript. The dense 2-second pass produced **414 frames** (`0000.png`–`0413.png`) and a **9,803-line / 414,505-byte** transcript (`ocr2_all.txt`), condensed to 8,277 lines after removing browser-chrome noise. A 2,496-line `key_excerpts.txt` was built for the major workflow ranges. Timestamps below are **video timestamps**, written as `T=` in the dense transcript. The browser/macOS clock visible in the recording advances from about **1:24 PM to 1:37 PM**, matching the 13:47 runtime.
- **Evidence discipline:** Everything below is derived from observable frame/OCR evidence. Where OCR was visibly garbled, I mark the value as **OCR uncertain**. I do not claim a field was filled, a button was clicked, or a value was selected unless the frame shows that state or the immediately following state proves the transition.
- **Important limitation:** This model could not directly view PNG pixels; all visual claims come from OCR text of extracted frames. Layout descriptions are therefore based on the text structure of the screen (headers, table columns, side rails, tab labels, etc.), not on color/shape interpretation.
- **Relationship to the earlier draft:** This FINAL document supersedes `/home/user/Downloads/SunFire_Matrix_Workflow_Blueprint.md`. The draft captured the broad flow from 10-second sampling; this version adds the dense-OCR findings: the `LOADING PLANS` splash, the current-enrollment question, the carrier/plan universe count, the **X-ray** view and column selector, exact plan IDs/costs, the Farxiga entry attempt, per-drug tier/PA/step-therapy/full-cost values, and the granular side-by-side benefit language at the end of the recording.

### Evidence artifacts used for this final version

| Artifact | What it proves |
|---|---|
| `/home/user/Downloads/Screen Recording 2026-11-15 134956 (1) repaired.mp4` | Playable 13:47 source; H.264 High, 1920×1080, 30 fps, 24,827 frames. Full decode succeeded except one isolated error near frame 24,823 at end of stream. Seeking verified at 400 s and 800 s. |
| `/tmp/opencode/repair/ocr10_all.txt` | Broad 10-second state verification across the whole recording. |
| `/tmp/opencode/repair/ocr2_all.txt` | Dense 2-second transcript; source of every `T=` timestamp and exact value below. |
| `/tmp/opencode/repair/ocr2_condensed.txt` | Chrome-noise-removed variant used for plan-ID/cost registry searches. |
| `/tmp/opencode/repair/key_excerpts.txt` | Curated dense excerpts by workflow range (opening, providers, medication entry, plan details, benefits). |
| `/tmp/opencode/repair/f2/`, `f10/`, `frames/` | Extracted frame sets at 2 s, 10 s, and 30 s intervals. |

---

# 1. Executive map of the whole workflow

The recording shows an insurance agent using SunFire Matrix/Blaze as a **Medicare plan comparison and enrollment-support workspace**, augmented by external research tabs. The end-to-end flow is:

1. **Start a session / Needs Assessment** — ZIP, plan year, optional Medicare number/DOB, consent.
2. **Land on the plan results grid** for ZIP `33498`, plan year `2027`, product context `MAPD`.
3. **Explore filters and columns** — plan type, premium, policy type, deductible, appointed-only, brand, benefits, star rating.
4. **Research providers externally** — ChatGPT gives candidate doctors; Google and NPI registry verify them.
5. **Search and save providers/facilities inside SunFire** — doctor name, address, NPI, hospital/facility/medical group; set a primary provider.
6. **Research medications externally** — ChatGPT produces a random Medicare drug list with uses/tiers context.
7. **Enter medications into Needs Assessment** — drug name, dosage, refill frequency, quantity, condition mapping.
8. **Return to the personalized plan grid** — chips now show `9 medication(s)` and `1 doctor(s)`; annual costs recalculate.
9. **Inspect expanded plan cost summaries** — medical/drug deductibles, pharmacy preference, estimated annual drug cost, doctor-network warnings.
10. **Open drug-cost detail pages** — tier, prior authorization, step therapy, quantity limits, monthly phase costs.
11. **Open benefits detail side-by-side comparison** — ambulance, chiropractic, dental, and other granular benefits for two plan IDs.
12. **End state:** the agent is comparing specific plan IDs with a fully personalized medication/provider profile and is positioned to select/email/compare plans.

**Fine-grained steps recovered only by the 2-second OCR pass** (these sit inside the twelve phases above):

- **T=0–2:** a full-page **`LOADING PLANS`** state appears before the intake drawer.
- **T=6–8:** the BEQ consent block contains an additional gating question: **“Are you currently enrolled in a Medicare Advantage or Prescription Drug plan? Yes No.”**
- **T=10–14:** the plan-year selector is accompanied by **“3 Carriers / 44 Plans represented”** — the total universe behind the 18 displayed results.
- **T=142:** **Select Columns (3)** opens with the hint **“Select up to 3 columns clear all”**, proving the comparison grid is column-configurable.
- **T=144–146:** the **X-ray** toggle navigates to a distinct route, `#/planxray/xray/...`, showing large plan cards with star ratings and a **Highlights / Benefits details** side panel with checkmarked benefit categories.
- **T=692–712:** the agent attempts to enter **Farxiga TAB 5MG** as a medication, but it is absent from the final nine-drug detail list — an entry that was tried and not retained (or was replaced).
- **T=758–782:** the drug-cost detail page is navigated drug by drug, exposing tier, quantity limits, prior authorization, step therapy, and estimated full drug cost for individual drugs.
- **T=804–826:** the final state is a long, two-column benefits comparison with costs, deductibles, and frequency/prior-authorization language for many benefit categories.

Core recurring URL patterns observed:

- `sunfirematrix.com/app/blaze/portal/eig/#/plans`
- `sunfirematrix.com/app/blaze/portal/eig/#/plans/33498/12099/MAPD`
- `sunfirematrix.com/app/blaze/portal/eig/#/planxray/xray/33498/12099/MAPD/273788/10`
- `sunfirematrix.com/app/blaze/portal/eig/#/plandetails/drugs/33498/12099/MAPD/273876`
- `sunfirematrix.com/app/blaze/portal/eig/#/plandetails/benefits/33498/12099/MAPD/273876`
- `sunfirematrix.com/app/blaze/portal/eig/#/plandetails/benefits/33498/12099/MAPD/273829|273809`
- `sunfirematrix.com/app/blaze/portal/eig/#/discovery`

Fixed case context throughout: **ZIP `33498`**, **plan year `2027`**, **MAPD** (Medicare Advantage Prescription Drug) context, and path segment **`12099`**.

---

# 2. Persistent global chrome and session state

Across nearly every SunFire screen the following global elements are visible:

- Browser tab title: **“SunFire Blaze”**.
- Bookmarks bar with many carrier/portal bookmarks: **SCAN SunFire, EvolveSSO, Molina Member Elig..., Aetna Think Agent, Y0001_H0628_034_..., Humana check** (multiple), **All Bookmarks**.
- A second browser tab named **“Ask Gemini”**, later a **ChatGPT** tab and various research tabs.
- A top-right browser prompt/badge: **“Verify it's you”** — likely a Chrome/Google account or security prompt, not part of SunFire.
- A header control in SunFire: **“Needs Assessment”** with **“New Session”** available from the assessment panel.
- After provider/medication intake completes, the header shows **“Personal Code: IMFMMGOW”**.
- Result header chips evolve from **“No medication(s) (0)” / “No doctor(s)”** to **“9 medication(s)” / “1 doctor(s)”**.
- The plan grid toolbar consistently includes:
  - List / **X-ray** view toggle
  - **Sort: Recommended plans**
  - **Year: 2027 | 2026**
  - **Time period: Annual**
  - **Select Columns (3)**
- The left rail is usually **Filter by**, with plan types and plan features.
- Main table columns are consistently:
  - **Plan type**
  - **Available plans**
  - **Monthly premium**
  - **Annual cost**
  - **Co-pays**
  - **Max Out-of-Pocket**
  - **Annual Benefits**

Why this matters: the global chrome tells us the agent is operating inside an established bookmarks/toolbox workflow, not isolated in one app. The persistent Needs Assessment button means the personalization drawer can be reopened at any time, and the changing chips/personal code prove the app maintains session state that changes the numbers shown downstream.

---

# 3. Page-by-page blueprint

## Page 0 — `LOADING PLANS` splash (T=0–2)

**Timestamp:** 00:00–00:02  
**URL:** already `.../#/plans/33498/12099/MAPD`  
**Screen:** Near-full-page loading state

### Exactly what is there

- The only application content OCR can detect is the literal text **`LOADING PLANS`**.
- The SunFire Blaze browser tab, the `Ask Gemini` tab, the bookmarks bar, and the **“Verify it's you”** browser badge are already present.
- The macOS clock reads about **1:24 PM**.

### What the user does

Nothing is interacted with; this is an initialization/loading frame at the very start of the recording. The URL already contains the fully resolved case context (`33498 / 12099 / MAPD`), so the session was either pre-loaded or initialized just before recording began.

### Why this page exists

It is a loading/placeholder state while the plan catalog for the case is fetched. Its presence at T=0 and T=2 confirms the recording starts at application startup, not mid-flow.

### Why it is important

It establishes that the URL — not a wizard step — is the source of truth for the case. A replacement should show an explicit loading state while resolving the plan universe from the route's ZIP/product identifiers, and should not render an empty grid.

### Replacement implication

Implement a real loading state keyed to route parameters (`ZIP`, `product`, `year`). Do not treat `LOADING PLANS` as a page; treat it as the fetch phase that must resolve into the plan grid or a retryable error.

---

## Page 1 — Initial Needs Assessment / eligibility gate

**Timestamp:** 00:00–00:10  
**URL:** `sunfirematrix.com/app/blaze/portal/eig/#/plans` → `.../#/plans/33498/12099/MAPD`  
**Screen:** Needs Assessment panel/modal

### Exactly what is there

- Header/title: **Needs Assessment**
- Secondary action: **New Session**
- Section label: initially just the assessment fields; at 00:30 it is explicitly labeled **Basic Information**
- Fields:
  - **Plan year** with toggles/options `2027` and `2026`
  - **ZIP code** — initially partially visible `334...`, then `33498`
  - **Medicare Number*** — required marker, but visibly blank in captured frames
  - **Date of birth*** — placeholder `mm / dd / yyyy`, visibly blank
- Consent block titled **BEQ Consent**, with text:
  > “To get started I would like to get your ZIP code, Medicare number & DOB. I will use this information to access your demographic information and current plan status, as well as any medication and provider information we can access, including from your prior plan enrollment so we can best recommend a plan for you. This is optional. May I proceed?”
- Later in the same panel:
  - **What's available**
  - **View all plans**

### What the user does

- Enters or confirms ZIP `33498`.
- Selects plan year `2027` (the later grid is consistently 2027).
- Does **not** visibly enter Medicare Number or DOB in the captured frames.
- The consent text is shown; no visible acceptance control is captured.

### System response

- The URL changes from `#/plans` to `#/plans/33498/12099/MAPD`, proving that the ZIP and product context now define the session.
- A plan universe becomes available behind the drawer.

### Why this page exists

This is the intake gate. It establishes the three anchors that drive every downstream calculation:

1. **Geography** — ZIP determines which plans and provider networks are relevant.
2. **Plan year** — 2027 vs 2026 changes formulary, premiums, benefits, and plan IDs.
3. **Identity/consent** — Medicare number and DOB would allow the system to pull demographic, enrollment, medication, and prior-plan data. The text explicitly says this enrichment is optional.

### Why it is important

Without this step, the rest of the app would only be a generic plan catalog. With it, the app can personalize. The fact that the demo later gets medication and provider chips, a personal code, and recalculated annual costs means this intake state is the root of the entire personalized comparison.

### Replacement implication

Your replacement must treat this as a **session-context builder**, not merely a form. It must persist ZIP, year, product type, consent status, and optional identity data, and every later page must read from that same context.

---

## Page 1A — Consent block and current-coverage question (T=4–8)

**Timestamps:** 00:04–00:08  
**URL:** same plan URL, drawer open  
**Screen:** Needs Assessment → Basic Information / BEQ Consent, scrolled lower

### Exactly what is there

- Section label **Basic Information** (T=4).
- **Plan year** `2027` / `2026`; **ZIP code** `33498`; **What's available**; **View all plans**.
- **Medicare Number*** and **Date of birth*** with placeholder `mm / dd / yyyy` — both blank in every captured frame.
- Full **BEQ Consent** paragraph (T=6–8):
  > “To get started I would like to get your ZIP code, Medicare number & DOB. I will use this information to access your demographic information and current plan status, as well as any medication and provider information we can access, including from your prior plan enrollment so we can best recommend a plan for you. This is optional. May I proceed?”
- Directly beneath it, a separate question found only in the dense pass:
  > **“Are you currently enrolled in a Medicare Advantage or Prescription Drug plan? Yes No”**
- Beside the plan-year selector: **“3 Carriers / 44 Plans represented”** (T=10–14).

### What the user does

Scrolls/waits within the intake drawer. No filled Medicare number, DOB, or visible Yes/No selection is captured. The clock stays at about 1:24 PM.

### System response

The drawer remains open while the underlying plan universe is described as 44 plans from 3 carriers; the grid ultimately displays 18 results for the case.

### Why this page exists

The consent paragraph authorizes enrichment from prior-plan enrollment data. The current-enrollment question is a **branching input**: it determines whether the system treats the beneficiary as currently covered (switch/transition logic) or new to Medicare Advantage/Part D. The carrier/plan count is market-context metadata that tells the agent how much of the universe the 18-result shortlist represents.

### Why it is important

This is the compliance and eligibility boundary of the whole workflow. A replacement must capture the Yes/No answer because it can change which plans are available and how costs are explained (e.g., transition-of-care, existing plan status). The explicit “This is optional” wording means enrichment cannot be assumed.

### Replacement implication

Model consent and current-enrollment answer as **first-class session fields**, not free text. Store whether the beneficiary consented to external data access, whether they are currently in an MA/PDP plan, which data sources were authorized, and a timestamp. Surface the 3-carrier/44-plan market count as derived metadata from the catalog, not a hardcoded label.

---

## Page 2 — First personalized plan results grid

**Timestamp:** 00:20  
**URL:** `.../#/plans/33498/12099/MAPD`  
**Screen:** Plan list / comparison grid

### Exactly what is there

- Title: **PLANS FOR 33498 (18 results)**
- Context chips:
  - `33498`
  - **No medication(s) (0)**
  - **No doctor(s)**
  - **Needs Assessment**
- Toolbar:
  - List / X-ray toggle
  - **Sort: Recommended plans**
  - **Year: 2027 | 2026**
  - **Time period: Annual**
  - **Select Columns (3)**
- Left filter rail:
  - **Plan type** with categories:
    - Medicare Advantage/Part D
    - Part D
    - Medicare Supplement
    - Medicare Advantage
    - Special Needs
    - Hospital Indemnity
    - Dental
    - Vision
    - Hearing
  - **Filter by**
  - **Plan features**
  - Five star rating
  - Part B give back
  - Dental
- Table columns:
  - Plan type
  - Available plans
  - Monthly premium
  - Annual cost
  - Co-pays
  - Max Out-of-Pocket
  - Annual Benefits
- Visible example rows:
  - **CareOne Plus (HMO-POS)** — plan ID `H1019-001-000`, year 2027, monthly premium `$0.00`, annual cost `$0` at this stage, Primary `$0`, Specialist `$0`, In-network `$750`, Combined `$750`, PartB `$108`, Dental `$0`, Vision `$450`, OTC `$840`, Hearing `$0`, Transportation `50 trips`, Fitness `covered`. OCR shows premium text around `$9.00` nearby, likely a giveback or secondary value; mark **OCR uncertain**.
  - **Aetna Medicare Select (HMO)** — plan ID `H1609-020-000`, monthly premium `$0.00`, Primary `$0`, Specialist `$0`, In-network `$3,400`, Dental `$3,000`, Vision `$300`.

### What the user does

The agent is reviewing the baseline, pre-personalization plan set. At this point no medications and no doctors are attached, so the results are the default recommended set for ZIP/year.

### System response

The app returns **18 plans** and sorts them by “Recommended plans.”

### Why this page exists

This is the primary decision surface. It compresses a large Medicare plan universe into a side-by-side comparison of premium, cost-sharing, maximum out-of-pocket, and supplemental benefits.

### Why it is important

This is where the agent forms the first shortlist. Every filter, medication, and provider added later changes what this grid means. The baseline `$0.00` annual cost for CareOne later becomes `$1,536` once medications are entered, proving this grid is dynamically recalculated rather than static.

### Replacement implication

Your replacement needs a fast, sortable, column-configurable grid with stable plan identity fields (plan name, plan type, plan ID, year), cost columns, and an “annual benefits” summary column that can expand into detail.

---

## Page 2A — Select Columns panel (T=142)

**Timestamp:** 02:22  
**Screen:** Plan grid with the column picker expanded

### Exactly what is there

- Toolbar still shows **List | X-ray**, **Sort: Recommended plans**, **Year 2027 | 2026**, **Time period: Annual**, **Select Columns (3)**.
- Expanded popover text:
  > **“Select up to 3 columns”** and **“clear all”**.
- Behind it, the grid headers are visible and confirm the selectable dimensions:
  - **Plan type**
  - **Available plans**
  - **Monthly premium**
  - **Annual cost / Annual Benefits**
  - **Co-pays**
  - **Max Out-of-Pocket**
  - **Annual Benefits**
- At T=152–160 an alternate toolbar label appears: **“Apply amended plans”** with the year/time-period controls, showing the sort control can be replaced by an amended-plan action.

### What the user does

Opens the column selector and reviews the available comparison dimensions; the header count stays **18 results**.

### Why this page exists

Medicare plan comparison has many more attributes than fit on screen. The (3) indicates three columns are currently selected, and the picker lets the agent swap in the dimensions that matter for a given client.

### Why it is important

This is a direct functional requirement: the grid is not a fixed report. A replacement must support user-configurable columns with an enforced limit, a clear-all action, and stable identity columns that never disappear.

### Replacement implication

Persist column selection per user/session, cap it at three configurable comparisons, and keep plan name/ID/year pinned so the selected rows remain identifiable regardless of chosen columns.

---

## Page 2B — X-ray view / plan-card highlights (T=144–146)

**Timestamp:** 02:24–02:26  
**URL:** `sunfirematrix.com/app/blaze/portal/eig/#/planxray/xray/33498/12099/MAPD/273788/10`  
**Screen:** X-ray plan-card view with a right-hand details panel

### Exactly what is there

- Toolbar changes to **`< Back to plans`**, **Sort: Recommended plans**, and a **Benefits details** panel toggle.
- A side control labelled **Navigate** with a vertical strip of small view icons.
- Large plan cards replace table rows. Each card shows:
  - Plan name, plan type and carrier, e.g. **CareOne Plus (HMO-POS) / CarePlus**, **Aetna Medicare Select (HMO) / Aetna Medicare**, **HumanaChoice Giveback H5216-311 (PPO) / Humana**, **Humana Gold Plus H1036-062C (HMO) / Humana**.
  - Plan ID under the name, e.g. `H1019-001-000`, `H1609-020-000`, `H5216-311-000`, `H1036-062-000`.
  - **Monthly plan premium `$0.00`** and **Estimated annual cost `$0`** (pre-personalization).
  - **Star rating** rendered as a graphical row: e.g. `4 out of 5 stars`, `4.5 out of 5 stars`.
  - **2027 plan year**.
- Right panel labelled **Highlights / Plan features** shows checkmarked categories:
  - **Rx Drugs**, **Hospital & Medical**, **Dental**, **Vision**, **Hearing**, **Fitness Benefits**, **Over-the-counter Benefits**, **Transportation Services**, **Part B Give Back**.
- The URL contains plan ID `273788` and segment `/10`, suggesting a plan-specific X-ray focus with a page/step index (**OCR uncertain** on the exact meaning of `/10`).

### What the user does

Toggles from the table into the X-ray card view, browses two cards, and inspects the benefit-highlight panel, then returns to the list at T=148.

### Why this page exists

It is the visual/executive alternative to the dense comparison grid: same plans, but presented as scannable cards with star ratings and an at-a-glance benefit-feature checklist.

### Why it is important

This is a distinct route and a distinct information architecture — a replacement that only builds the table loses this whole mode. The `/10` and plan ID in the URL show the X-ray view is deep-linkable to a specific plan, which matters for agent workflows and audit trails.

### Replacement implication

Provide two renderings of the same plan dataset (grid and card/X-ray), a stable deep-link route containing case context plus plan ID, and a shared benefit-feature taxonomy (the nine checkmarked categories above) that drives both the grid's “Annual Benefits” summary and the X-ray highlights panel.

---

## Page 3 — Needs Assessment revisited: Basic Information and consent

**Timestamp:** 00:30–00:40  
**URL:** same plan URL, drawer open  
**Screen:** Needs Assessment → Basic Information / BEQ Consent

### Exactly what is there

- Header: **Needs Assessment**, **New Session**
- Section: **Basic Information**
- Plan year `2027` / `2026`
- ZIP code — OCR at 00:30 reads `30478`, which is almost certainly an OCR misread of `33498` because the URL and all surrounding screens use `33498`; mark **OCR uncertain**
- Medicare Number*
- Date of birth*
- BEQ Consent text, now fully visible:
  > “To get started I would like to get your ZIP code, Medicare number & DOB. I will use this information to access your demographic information and current plan status, as well as any medication and provider information we can access, including from your prior plan enrollment so we can best recommend a plan for you. This is optional. May I proceed?”

### What the user does

The agent reopens or scrolls within the Needs Assessment while still on the plan URL. This appears to be a review/confirmation pause before moving into providers and medications.

### System response

No visible navigation change; the underlying plan result state remains available.

### Why this page exists

It allows the agent to revisit the origin of the session context without losing the plan results. It also re-exposes the legal/consent language for using external data sources.

### Why it is important

The consent language is the boundary between “manual entry only” and “data-enriched recommendation.” For a replacement system, this is where compliance, auditability, and data-source permission must live.

---

## Page 4 — Provider search modal: Doctor name

**Timestamp:** 00:50  
**Screen:** Modal overlay with tabs **Search Providers | Saved Providers**

### Exactly what is there

- Tab row: **Search Providers** and **Saved Providers**
- Empty-state text:
  > “No providers added yet. Search providers to locate a current provider or find a new one.”
- Search mode label: **Doctor name**
- Hint:
  > “Search by first and/or last name using at least 2 characters.”
- Fields:
  - First name
  - Last name
- Radius line: **Searching within 25 miles of Zip 33498 Edit**
- Close `x`

### What the user does

Opens provider search from the Needs Assessment / My Doctors flow, initially in name-only mode.

### System response

The modal starts empty with no saved providers.

### Why this page exists

It collects the beneficiary’s current or desired doctors so the app can later test plan network compatibility.

### Why it is important

Medicare Advantage plan value depends heavily on whether the beneficiary’s doctors and facilities are in network. A cheap plan with the wrong PCP can be a bad recommendation. The `25 miles of ZIP 33498` radius shows the app is geographically constraining the search.

---

## Page 5 — Provider search modal: Doctor name and address

**Timestamp:** 01:00  
**Screen:** Same modal, alternate search mode

### Exactly what is there

- Search mode changed to **Doctor name and address**
- Hint:
  > “Search by address and first and/or last name using at least 2 characters.”
- Fields:
  - First name
  - Last name
  - Address
  - City
- Radius still **25 miles of Zip 33498 Edit**

### What the user does

Switches from name-only to combined name/address search, presumably because name alone is ambiguous.

### Why this page exists

It supports disambiguation when multiple providers share a name or when the agent has an address from an external source.

### Why it is important

The later workflow shows the agent has both a ChatGPT-provided address (`19498 Saturnia Lakes Drive`) and a SunFire/NPI-style address (`21644 STATE RD 7`). This alternate search mode is exactly what lets the agent reconcile those sources.

---

## Page 6 — Medications intake section

**Timestamp:** 01:10  
**Screen:** Needs Assessment → Medications

### Exactly what is there

- Header: **Needs Assessment**
- Section: **Medications**
- Field: **Medication name**
- Question: **Is there a pharmacy you use to fill prescriptions?**
  - Yes
  - No
  - Mail order
- Question: **Do you receive Extra Help / Low Income Subsidy (optional)?**
  - Yes
  - No
  - I don't know

### What the user does

The agent opens or scrolls to the medication section before any drug is entered.

### System response

Empty medication entry form plus pharmacy and subsidy context questions.

### Why this page exists

Part D costs are drug-specific. The system needs the medication list before it can estimate realistic annual drug spend. Pharmacy preference and Extra Help status can change copays and phase timing.

### Why it is important

This is the second major personalization axis, alongside providers. Later, adding medications changes plan annual costs and triggers a CSNP eligibility warning.

---

## Page 7 — Filter exploration on the plan grid (pre-personalization)

**Timestamps:** 01:20–02:40  
**URL:** `.../#/plans/33498/12099/MAPD`  
**Screen:** Plan results with filter panels expanded

### Exactly what is there

Across these frames the agent opens/scrolls several filter groups. Observed controls and labels:

#### Benefit/feature filters

- **Hearing coverage**
- **OTC**
- **Transportation**
- **Fitness Benefits**
- **Chiropractic Care**
- **Additional Services**
- **Part B Flex Benefit**

#### Brand list

- Aetna Medicare
- CarePlus
- Devoted Health
- Florida Blue Medicare
- HealthSun
- Humana
- UnitedHealthcare

#### Premium filters

- **Under $20**
- **$30 - $60**
- **Over $60**

#### Policy type filters

- HMO
- PPO
- RPPO

#### Other filters

- **Deductible**
- **Appointed plans**
- **Appointed Only**
- **Apply amended plans** (seen at 02:40)
- Five star rating
- Part B give back
- Dental

#### Additional visible plan rows

- **Aetna Medicare Signature (PPO)** — non-commissionable, plan ID `H5521-033` / `H5521-033-000`, monthly `$0.00`, Primary `$0`, Specialist `$0-$60`, In-network `$7,150`, Combined `$10,750`, Dental `$500`, Vision `$100`, Hearing `$0`, Transportation **Not Covered**, Fitness **covered**.
- **HumanaChoice R5826-005 (Regional PPO)** — plan ID `R5826-005-000`, monthly `$161.00`, annual `$1,932`, Primary `$0`, Specialist `$45`, In-network `$6,700`, Dental `$750`, Vision `$100`, Hearing `$0`, Transportation **Not Covered**, Fitness covered, **Medical deductible $750** for in/out-of-network services.
- A HumanaChoice plan around `$52.00` monthly / `$624` annual, plan ID `H7284-008-000`, Specialist `$35`, Combined `$6,200`, Vision `$200`, Medical deductible `$0`, **Drug deductible `$700` (excludes Tier 1, 2 and 3 drugs)**.
- **CareFree Giveback (HMO)** — plan ID OCR `H1019-065-000`, monthly `$0.00`, Primary `$0`, Specialist `$20`, In-network `$5,000`, PartB `$882`, Dental `$0`, Hearing `$0`, Giveback up to `$73.50` (**OCR uncertain**).

Also visible repeatedly: **Estimated Annual Cost Summary**.

### What the user does

The agent expands and scrolls filter groups, likely testing how the 18-plan set responds to benefit, carrier, premium, policy-type, and appointed-status constraints. The agent does not permanently leave the results grid.

### System response

The header continues to say **18 results**, so no filter appears to permanently shrink the set in the captured frames. The filter panels themselves change/expand.

### Why this page exists

Filters turn a generic list into a requirements-matched shortlist. They cover:

- clinical need (Hearing, Dental, Chiropractic, OTC, Transportation, Fitness),
- financial fit (premium bands, deductibles),
- product preference (HMO/PPO/RPPO),
- carrier preference (brand list),
- sales/agent constraints (Appointed Only, non-commissionable markers).

### Why it is important

This is where “recommended by algorithm” becomes “appropriate for this client and this agent.” The replacement system must preserve every one of these filter dimensions, because each maps to a real reason a plan is or is not suitable.

---

## Page 8 — External navigation hub: new tab / Google / Chrome AI Mode

**Timestamp:** 02:50  
**Tab:** New Tab  
**URL:** `drive.google.com/drive/shared-with-me` visible, plus Chrome AI Mode UI

### Exactly what is there

- Gmail, Images
- **Ask Google** / **AI Mode**
- AI Mode text:
  - “Do more with AI”
  - “Create images”
  - “Create, summarize, plan”
  - “Reimagine, illustrate, edit”
- Shortcut tiles:
  - SunFire Web App. Login
  - Inbox
  - ChatGPT
  - Manus
  - Victory Marine...
  - GUTSI.9.30.26 I...
  - Google Drive
  - Sign in
  - Customize Chrome

### What the user does

Opens a new tab as a springboard to ChatGPT and other research tools.

### Why this page exists

It is not a SunFire page; it is the agent’s research launchpad. The shortcuts show a working environment with SunFire, email, ChatGPT, Manus, and other tools.

### Why it is important

The workflow is explicitly multi-tool. The agent does not trust SunFire alone for provider/medication discovery; they bring in external research and then carry verified values back into SunFire.

---

## Page 9 — ChatGPT new chat

**Timestamp:** 03:00  
**Tab:** ChatGPT  
**URL:** `chatgpt.com/?utm_source=google&utm_medium=paid_search&...`

### Exactly what is there

- ChatGPT header with **New chat**
- Left nav:
  - Images
  - Scheduled
  - Library
  - Plugins
  - Explore
  - Projects
  - Recents
- Center text: **Ready when you are.**
- Bottom composer with **Ask ChatGPT**, **Think**, and attachment/plus controls.

### What the user does

Starts a fresh AI conversation for provider research.

### Why this page exists

Used as an idea generator for candidate doctors when the agent does not yet have a specific name.

### Why it is important

It seeds the provider workflow. The later SunFire steps would not have a name to search without this external generation step.

---

## Page 10 — ChatGPT prompt: random doctors in 33498

**Timestamp:** 03:10  
**Conversation title:** **Find Doctors 33498**

### Exactly what is there

- Prompt typed: **“give me random dr. in 33498”** (OCR shows `giveme random dr. in 33) @ think`, clearly this phrase)
- “Health” tool/nav item visible
- Response begins producing doctor cards/names.
- Visible names:
  - **Dr. Mushfeka Golawala**
  - **Dr. Dwight Guido Ayala**
- Response caveat:
  > “Are you looking for PCP doctors for Medicare Advantage plan verification? I can give you names, addresses, and phone numbers. Verify network participation with the specific carrier before confirming.”
- Standard disclaimer: **“ChatGPT can make mistakes. Check important info.”**

### What the user does

Asks for random providers near ZIP 33498.

### System response

ChatGPT returns named PCP candidates and explicitly warns that carrier network participation must still be verified.

### Why this page exists

Fast candidate generation.

### Why it is important

The warning is crucial: AI output is treated as a lead, not as authoritative network data. The rest of the recording shows the agent doing exactly that — taking AI names, then verifying through SunFire/NPI/Google.

---

## Page 11 — ChatGPT doctor answer details

**Timestamp:** 03:20 and 03:40  
**Conversation:** Find Doctors 33498

### Exactly what is there

Prompt:
> “give me random dr. in 33498”

Response:
> “Here are some doctors in or very close to ZIP code 33498 — Boca Raton, FL. Random primary care doctors”

Listed providers:

1. **Dr. Mushfeka Moiz Golawala, MD**
   - Internal Medicine
   - `19498 Saturnia Lakes Drive, Boca Raton, FL 33498`
   - Phone `(561) 703-1383`
   - “Listed in ZIP 33498”
2. **Dr. Dwight Guido Ayala**
   - Family Medicine
   - Later visible at 06:00:
   - `10278 Buena Ventura Drive, Boca Raton, FL 33498`
   - Phone `(561) 368-7055`
3. Later, **Dr. William M. DeMarchi**
   - Internal Medicine
   - `9878 Clint Manre Road, Boca Raton, FL 33498` (**OCR uncertain** on street name)

### What the user does

Copies/uses these names and addresses as inputs into SunFire provider search.

### Why this page exists

It produces structured candidate data: name, specialty, address, phone, ZIP relationship.

### Why it is important

This is the input bridge from external AI research into the internal provider-search workflow. The later discrepancy between ChatGPT’s address for Golawala and SunFire’s NPI-style address proves verification is necessary.

---

## Page 12 — My Doctors summary with no saved providers

**Timestamp:** 03:50  
**Screen:** Needs Assessment → My Doctors summary / drawer

### Exactly what is there

- Header: **Needs Assessment**
- Section: **My Doctors**
- Text:
  > “No Saved Providers”
  > “Search providers to locate a current provider or find a new one.”
- Buttons:
  - **Update & close**
  - **View Needs Assessment**

### What the user does

Returns to SunFire after ChatGPT research and prepares to add providers.

### System response

Summary still shows zero saved providers.

### Why this page exists

It is the checkpoint between searching and finalizing provider data.

### Why it is important

“Update & close” indicates provider changes are committed back into the Needs Assessment/session. “View Needs Assessment” lets the agent jump back to the larger intake flow.

---

## Page 13 — Provider search by doctor name inside SunFire

**Timestamp:** 04:00  
**Screen:** Search Providers modal

### Exactly what is there

- Tabs: **Search Providers | Saved Providers**
- Empty state: **No providers added yet...**
- Search mode: **Doctor name**
- Fields: First name, Last name
- Entered text visible: **Dr. Mushfeka Golawala**
- Radius: **Searching within 25 miles of Zip 33498 Edit**

### What the user does

Types the ChatGPT-provided doctor name into SunFire’s provider search.

### Why this page exists

Converts an external candidate name into an internal provider record.

### Why it is important

This is the exact moment the workflow moves from “AI suggestion” to “system-backed provider lookup.”

---

## Page 14 — SunFire provider search results

**Timestamp:** 04:20  
**Screen:** Provider results page

### Exactly what is there

- Filter rail:
  - **Filter by**
  - **Specialty**
    - ANESTHESIOLOGY
    - DERMATOLOGY
    - EMERGENCY MEDICINE
    - FAMILY MEDICINE
    - INTERNAL MEDICINE
    - View all
  - **Gender**
    - All
    - Male
    - Female
  - **Cities**
    - ADVENTURA (OCR spelling)
    - ATLANTA
    - (more)
  - Buttons: **Apply filters**, **Clear filters**
- Top line: **1 Results**, **Sort by Nearest**
- Result:
  - **GOLAWALA, MUSHFEKA**
  - Specialty line OCR: **EMERGENCY MEDICINE & INTERNAL MEDICINE PHYSICIAN**
  - Primary address: `21644 STATE RD 7 BOCA RATON FL 33428`
  - **+ 6 more locations**
  - Distances shown:
    - `3.8 mi away`
    - `10.3 mi away`
    - `7593 BOYNTON BEACH BLVD BOYNTON BEACH FL 33437`
    - `201 E SAMPLE RD DEERFIELD BEACH, FL 33064 12.0 mi away`
    - `14050 NW 14TH ST STE 190 FORT LAUDERDALE, FL 33323 19.9 mi away`
    - `7205 NW 19TH ST STE 404 MIAMI FL 33126 47.6 mi away`
    - `4960 SW 72ND AVE STE 303 MIAMI FL 33155 51.2 mi away`
    - `6200 SW 73RD ST SOUTH MIAMI FL 33143 53.6 mi away`

### What the user does

Reviews the single SunFire/NPI-style match for Golawala.

### System response

One result appears, with multiple practice locations and distances from ZIP `33498`.

### Why this page exists

It lets the agent choose the correct provider record and see all known locations before saving.

### Why it is important

The address differs from ChatGPT’s `19498 Saturnia Lakes Drive`. The agent now has to decide which record is authoritative. This is a core data-quality workflow: AI-generated lead → provider database match → authoritative NPI verification.

---

## Page 15 — Address-based provider search inside SunFire

**Timestamps:** 04:40–05:10  
**Screen:** Search Providers modal, Address mode

### Exactly what is there

- Search mode: **Address**
- Address field progression:
  - `19498 Saturnia Lakes Drive, Boca Raton, FL 33498` (**OCR uncertain** on ZIP at 04:40)
  - `19498 Saturnia Lakes Drive, IBoca Raton` (04:50 — likely mid-edit)
  - `19498 Saturnia Lakes Drive,` with City dropdown/suggestion **BOCA RATON** (05:00)
  - `19498 Saturnia Lakes Drive` with City **BOCA RATON** (05:10)
- Radius changed from **25 miles** to **100 miles of Zip 33498 Edit**

### What the user does

Enters the ChatGPT-provided address and expands the radius from 25 to 100 miles.

### System response

The form accepts the address/city split and keeps the wider radius.

### Why this page exists

Address search is used when the name search returns a record that does not match the externally supplied address.

### Why it is important

The agent is explicitly testing whether the AI address maps to a SunFire provider record. The radius expansion shows the agent is willing to search farther to locate the same doctor/facility.

---

## Page 16 — Helios D-SNP Agent Suite tab

**Timestamp:** 05:30  
**Tab:** NewTab / Helios  
**URL:** `helios-dsnp.vercel.app` (**OCR uncertain** on exact domain rendering)

### Exactly what is there

- Title: **Helios D-SNP AGENT SUITE**
- Plan cards:
  - **Aetna Medicare Value Plus Plan (HMO)**
    - `1609-041 - PBP 010 - MAPD`
  - **Wellcare Dual Access (HMO D-SNP)**
    - `H1416-024 - PBP G07 - HMO D-SNP`
- Ratings visible: `4.8`, `3.5` (**OCR uncertain** which card each belongs to)
- A Google tab for **Dr. Mushfeka Moiz Golawala, MD** is also open.

### What the user does

Cross-references D-SNP/special-needs plan context while verifying a provider.

### Why this page exists

It is an external decision-support tool for dual/special-needs Medicare plans.

### Why it is important

This foreshadows the later CSNP warning in SunFire. The agent is operating in a world where standard MAPD and special-needs products are both relevant.

---

## Page 17 — Google NPI search for Golawala

**Timestamp:** 05:40  
**Tab:** Google  
**Query:** `Dr. Mushfeka Moiz Golawala, MD npi`

### Exactly what is there

- Search result:
  - **NPI Registry (.gov)**
  - `https://npiregistry.cms.hhs.gov` → provider-view
  - Snippet: **Provider Information for 1013151141**

### What the user does

Searches Google for the provider’s NPI.

### System response

Finds the official NPI Registry result with NPI `1013151141`.

### Why this page exists

Authoritative provider identity lookup.

### Why it is important

This NPI is later saved inside SunFire on the Golawala provider card. The agent is not guessing; it is carrying a verified identifier into the internal system.

---

## Page 18 — SunFire provider results / no providers saved state

**Timestamp:** 05:50  
**Screen:** Provider results page

### Exactly what is there

- Top controls: **New Search**, **No providers saved**
- **1 Results**, Sort by Nearest
- Same filter rail and Golawala result as Page 14
- Result address and +6 more locations visible.

### What the user does

Returns from NPI verification to the SunFire result list.

### Why this page exists

Maintains the provider search state while the agent checks external sources.

### Why it is important

The app preserves the result set across tab switches, allowing verification without losing work.

---

## Page 19 — ChatGPT expanded specialist research

**Timestamps:** 06:00–06:20, 09:50  
**Conversation:** Find Doctors 33498

### Exactly what is there

At 06:00:

- **Doctors and specialists**
- **ENT - Ear, Nose & Throat**
  - **Adam Weisstuch, MD, FAAOA**
  - Address: `7900 Glades Rd #340, Boca Raton, FL 33434`
  - Phone: `(561) 353-7377`
- **Neurologist**
  - **Renata Chalfin, M.D.** — Neurology Offices of South Florida / First Choice Neurology
- A Google knowledge panel for Adam Weisstuch is visible later:
  - Otolaryngologist
  - 4.8 rating
  - Address and phone
  - Website / Call / Claim this business
  - Description: otolaryngologist (ENT/head and neck surgeon)

At 06:20, the prompt shown is:
> “not just primary care!”

At 09:50, response text:
> “These are useful for Medicare provider lookups. Some are directly in 33498, while others are in nearby 33428 and 33434.”

### What the user does

Asks ChatGPT to broaden beyond primary care doctors.

### System response

ChatGPT returns specialists and nearby ZIPs.

### Why this page exists

Provider discovery is not limited to PCPs; specialists and facilities also matter for network adequacy and chronic-condition fit.

### Why it is important

The agent is building a broader provider ecosystem, not just checking one PCP. This affects later facility searches and condition/medication mapping.

---

## Page 20 — Saved Providers: Golawala becomes primary

**Timestamp:** 06:10  
**Screen:** Search Providers modal → Saved Providers tab

### Exactly what is there

- Search mode: **NPI**
- Saved provider card:
  - **GOLAWALA, MUSHFEKA**
  - **Primary provider**
  - **Remove**
  - Specialty: **INTERNAL MEDICINE PHYSICIAN**
  - Address: `21644 STATE RD 7 BOCA RATON FL 33428 + 6 more locations`
  - NPI: `1013151141`
- Radius line: **Searching within...** / `1013151141` visible

### What the user does

Saves Golawala as a provider and marks them **Primary provider**.

### System response

The provider moves into the saved list with NPI and full address.

### Why this page exists

The saved list is the persistent provider profile used by plan-network logic.

### Why it is important

This is the first saved doctor and later the plan grid chip says **1 doctor(s)**. The “Primary provider” designation is later used in banners about plans not including the primary doctor as PCP.

---

## Page 21 — Saved Providers: Ayala added

**Timestamp:** 06:40  
**Screen:** Saved Providers tab

### Exactly what is there

Saved cards:

1. **AYALA, DWIGHT**
   - **Set as Primary**
   - **Remove**
   - Specialty: **FAMILY MEDICINE PHYSICIAN**
   - Address: `10278 BUENA VENTURA DR BOCA RATON FL 33498 + 4 more locations`
2. **GOLAWALA, MUSHFEKA**
   - **Primary provider**
   - **Remove**
   - Specialty: **INTERNAL MEDICINE PHYSICIAN**
   - Address: `21644 STATE RD 7 BOCA RATON FL 33428 + 6 more locations`

### What the user does

Adds Ayala from ChatGPT research but leaves Golawala as primary.

### System response

Saved provider count visual changes; Ayala’s card offers **Set as Primary**, proving only one provider can be primary at a time.

### Why this page exists

Supports multiple current providers while preserving one primary PCP.

### Why it is important

Medicare Advantage network logic often hinges on the PCP. A replacement must support multiple saved providers plus an explicit primary designation.

---

## Page 22 — New tab before facility research

**Timestamp:** 06:50  
**Screen:** Chrome New Tab / Google

### Exactly what is there

Same shortcut hub as Page 8 with SunFire Web App Login, Inbox, ChatGPT, Manus, etc.

### What the user does

Opens another research tab before hospital/facility lookup.

### Why it is important

Shows the repeated pattern: SunFire → external research → back to SunFire.

---

## Page 23 — Hospital/facility/medical group search mode

**Timestamps:** 07:00, 07:50  
**Screen:** Search Providers modal

### Exactly what is there

- Search mode: **Hospital/Facility/Medical Group Name**
- Field label: **Hospital/Facility/Medical Group Name**
- Entered text evolves:
  - `Baptist health`
  - `Baptist health` with autocomplete/typeahead later
- Saved providers still visible:
  - AYALA, DWIGHT — Set as Primary
  - GOLAWALA, MUSHFEKA — Primary provider
- Radius: **Searching within 100 miles of Zip 33498 Edit**
- A search button appears.

### What the user does

Switches provider search from doctors to organizations.

### Why this page exists

Facilities and medical groups also affect network participation and plan suitability.

### Why it is important

This expands the provider model from individual practitioners to organizations — hospitals, surgery centers, home health agencies, pharmacies.

---

## Page 24 — Facility results: zero results and filters

**Timestamps:** 07:10–07:20  
**Screen:** Provider results page

### Exactly what is there

- Header: **New Search**, providers saved count
- **0 Results**, Sort by Nearest
- Text: **No results found, please try other search criteria**
- Filter rail:
  - Specialty: ANESTHESIOLOGY, DERMATOLOGY, EMERGENCY MEDICINE, FAMILY MEDICINE, INTERNAL MEDICINE, View all
  - Gender: All, Male, Female
  - Cities: ADVENTURA, ATLANTA, ATLANTIS, AUGUSTA, AVE MARIA, View all
  - Apply filters / Clear filters

### What the user does

Tries a search that returns no results and reviews/adjusts filters.

### Why this page exists

Handles empty-result states and prevents the agent from assuming a provider does not exist.

### Why it is important

A replacement needs graceful zero-result handling and visible ability to clear filters or change criteria.

---

## Page 25 — Facility results: Baptist Health list

**Timestamps:** 07:30–07:40  
**Screen:** Provider results page

### Exactly what is there

- **33 Results**, Sort by Nearest
- Visible records:
  1. **BAPTIST SURGERY AND ENDOSCOPY CENTERS LLC**
     - **AMBULATORY SURGICAL CENTER**
     - `1905 CLINT MOORE ROAD SUITE 115 BOCA RATON, FL 33496 + 1 more locations`
  2. **BAPTIST HEALTH EXPRESS CARE CORAL SPRINGS**
     - **EMERGENCY CARE CLINIC CENTER**
     - `6264 W SAMPLE RD POMPANO BEACH FL 33067 + 18 more locations`
  3. **INTERNAL MEDICINE PHYSICIAN** record
     - `801 MEADOWS RD STE 102 BOCA RATON, FL 33486 + 113 more locations`
  4. **BAPTIST HEALTH PHARMACY 101 LLC**
     - **COMMUNITY RETAIL PHARMACY**
     - `8950 N KENDALL DR STE 102 MIAMI, FL 33176`
  5. **BAPTIST OUTPATIENT SERVICES INC**
     - **HOME HEALTH AGENCY**
     - `12400 SW 127TH AVE MIAMI, FL 33186 + 1 more locations`
  6. **BAPTIST HEALTH PHARMACY 103 LLC**
  7. Other locations around `6200 SUNSET DR STE 102 SOUTH MIAMI, FL 33143`

### What the user does

Reviews the broad Baptist Health organization result set.

### System response

Returns 33 organization results, many outside the immediate ZIP.

### Why this page exists

Allows selection of hospitals, surgery centers, urgent care, home health, and pharmacies as saved entities.

### Why it is important

The result set includes non-doctor entities, proving the “provider” model is broad. The agent can save facilities that matter to care delivery and plan networks.

---

## Page 26 — Google research: Baptist Health

**Timestamps:** 08:00–08:10  
**Screen:** Google search

### Exactly what is there

Search: **baptist health**

Suggestions/results visible:

- baptist health mychart
- baptist health careers
- baptist health urgent care
- baptist health lexington
- baptist health little rock
- baptist health south florida
- baptist health louisville
- baptist health patient portal

Search results include:

- Sponsored **Baptist Health South Florida**
- **Baptist Health Urgent Care at Home by Baptist Health**
- Phone `(833) 692-2784`
- Founded 1960
- Headquarters Coral Gables, FL
- CEO/President Bo Boulenger
- “Download The PineApp”
- “Online Check-In”

### What the user does

Researches which Baptist Health entity is the relevant South Florida organization.

### Why this page exists

Disambiguates a broad NPI result set.

### Why it is important

The agent is trying to distinguish Baptist Health South Florida, urgent care, and local hospital entities before saving a record.

---

## Page 27 — Google research: hospitals near me

**Timestamps:** 08:20, 09:00  
**Screen:** Google Search + Maps

### Exactly what is there

Query: **hospitals near me**  
Location shown: **Hamptons at Boca Raton, FL**  
Map/list results include:

- **West Boca Medical Center**
  - 4.5 (3.5K)
  - Medical Center
  - Boca Raton, Florida
  - `(561) 488-8000`
  - Open 24 hours
  - Website / Directions
- **Baptist Health Boca Raton Regional Hospital**
  - 4.4 (4.2K)
  - Hospital
  - Boca Raton, FL
  - Open 24 hours
  - Website / Directions
- Other Baptist Health results nearby.
- Ad text: **“Act Now To Protect Your Access - Members Should Choose The Managed Coverage You An...”**

### What the user does

Looks up local hospitals and identifies the full facility name.

### Why this page exists

Finds the precise hospital name to type into SunFire’s facility search.

### Why it is important

This produces `Baptist Health Boca Raton Regional Hospital`, which is then typed into SunFire and verified by NPI.

---

## Page 28 — Hospital typeahead inside SunFire

**Timestamp:** 08:50  
**Screen:** Search Providers modal, facility name mode

### Exactly what is there

Entered text: **Baptist Health Boca Raton**

Autocomplete/typeahead suggestions include:

- **Baptist Health Boca Raton**
- **Baptist Health Boca Raton Reg...**
- **Baptist Health Boca Raton**

Saved doctors still visible:

- AYALA, DWIGHT
- GOLAWALA, MUSHFEKA

### What the user does

Uses typeahead to choose the correct hospital record.

### Why this page exists

Prevents free-text mismatches by suggesting known organizations.

### Why it is important

The agent narrows from the broad “Baptist health” result set to the specific Boca Raton hospital.

---

## Page 29 — NPI Registry for Boca Raton Regional Hospital

**Timestamp:** 09:10  
**Tab:** NPPES NPI Registry  
**URL:** `npiregistry.cms.hhs.gov/provider-view/1902826779`

### Exactly what is there

- Header: **NPPES NPI Registry**, links **NPPES Downloads**, **API**, **Help**
- NPI: **1902826779**
- Other Names:
  - Former Legal Business Name: **BOCA RATON COMMUNITY HOSPITAL, INC.**
- Organization Subpart: **NO**
- Last Updated: **2022-07-29**
- Certification Date: **2022-07-29**
- Details table:
  - Enumeration Date: **2006-07-21**
  - NPI Type: **NPI-2 Organization**
  - Status: **Active**
  - Authorized Official Information: Name **LINCOLN MENDEZ**

### What the user does

Verifies the hospital’s authoritative NPI record.

### System response

Official CMS NPI data confirms identity and active status.

### Why this page exists

Authoritative verification of an organization before saving it.

### Why it is important

Same pattern as the doctor NPI check: external research suggests a name; NPI confirms the precise legal entity; SunFire saves the verified record.

---

## Page 30 — Saved Providers with facilities

**Timestamps:** 09:20–09:30  
**Screen:** Saved Providers tab / Needs Assessment summary

### Exactly what is there

Saved provider/organization cards observed:

1. **AYALA, DWIGHT**
   - **Set as Primary** / **Remove**
   - FAMILY MEDICINE PHYSICIAN
   - `10278 BUENA VENTURA DR BOCA RATON FL 33498 + 4 more locations`
2. **BAPTIST HEALTH SURGERY CENTER LLC**
   - **Set as... Remove** (OCR shows **Set as Remove Primary** across lines)
   - **AMBULATORY SURGICAL CLINICCENTER**
   - `3731 FAU BLVD SUITE 100 BOCA RATON, FL 33431`
3. **BOCA RATON REGIONAL HOSPITAL INC**
   - **Set as... Remove**
   - **GENERAL ACUTE CARE HOSPITAL**
   - `1905 CLINT MOORE RD BOCA RATON, FL 33496 + 14 more locations`
4. **GOLAWALA, MUSHFEKA**
   - **Primary provider**
   - **Remove**
   - INTERNAL MEDICINE PHYSICIAN
   - `21644 STATE RD 7 BOCA RATON FL 33428 + 6 more locations`

At 09:30 the Needs Assessment summary shows the surgery center, hospital, and Golawala, plus **Update & close** and **View Needs Assessment**.

### What the user does

Saves facilities into the same provider profile as doctors and reviews the summary.

### Why this page exists

Consolidates all selected providers/facilities before closing the assessment.

### Why it is important

This demonstrates that “provider” is a superset: PCPs, specialists, hospitals, surgery centers, home health, and pharmacies can all be part of the personalization profile.

---

## Page 31 — ChatGPT medication research

**Timestamps:** 10:00–10:40  
**Tab:** ChatGPT  
**Conversation:** Find Doctors 33498 (same thread, now medication topic)

### Exactly what is there

Response heading: **Random medications**  
Intro text:
> “Medicare drug lookup practice, covering different conditions and drug tiers.”

Table columns: **Medication | Common use**

Visible medications:

- **Eliquis** — Blood thinner
- **Metformin** — Diabetes
- **Jardiance** — Diabetes / heart failure
- **Ozempic** — Type 2 diabetes
- **Atorvastatin** — Cholesterol
- **Lisinopril** — Blood pressure
- **Amlodipine** — Blood pressure
- **Metoprolol** — Blood pressure / heart
- **Xarelto** — Blood thinner
- **Gabapentin** — Nerve pain
- **Levothyroxine** — Thyroid
- **Omeprazole** — Acid reflux / GERD (**OCR shows “Acid...”**)
- **Sertraline** — Depression / anxiety

A Google knowledge panel for Adam Weisstuch remains visible on the right, showing the research tabs coexist.

### What the user does

Uses ChatGPT to generate a medication list for testing SunFire’s Part D/CSNP logic.

### Why this page exists

Fast generation of realistic drug names and condition associations.

### Why it is important

This becomes the exact medication list entered into SunFire. Like the doctor list, it is a seed list, not an authoritative source.

---

## Page 31A — Farxiga appears in research and in an entry attempt (T=692–712)

**Timestamps:** 11:32–11:56  
**Screens:** ChatGPT research table, then Medication editor

### Exactly what is there

At T=692–706, the ChatGPT **Random medications** table includes an additional row:

- **Farxiga** — Diabetes / heart failure (**OCR renders the trailing word garbled as `Diabetes//{heati failure`, `Diabetes) /[heatifallure`; mark OCR uncertain**)

At T=710–712, the medication editor shows:

- **`Farxigal`** then **`Farxiga TAB 5MG +`** in the drug-name/typeahead field.

At T=758–782, the final **nine-drug** list on the drug-cost detail page contains **no Farxiga**:

1. Lisinopril TAB 2.5MG
2. Metformin HCL TAB 850MG
3. Omeprazole DR CAP 20MG
4. Atorvastatin Calcium TAB 20MG
5. Gabapentin CAP 400MG
6. Albuterol Sulfate TAB 4MG
7. Eliquis TAB 5MG
8. Jardiance TAB 10MG
9. Levothyroxine Sodium CAP 150MCG

### What the user does

The agent types Farxiga into the medication field, apparently as an additional test drug, but the saved medication profile at the end contains nine drugs and excludes it. The captured frames do not show a save or delete action for Farxiga, so the **outcome is unproven**: it may have been abandoned, replaced, or removed between 2-second samples.

### Why this page exists

It demonstrates the drug typeahead resolving a free-text brand name to a formatted dosage form (`Farxiga` → `Farxiga TAB 5MG`), exactly as it does for the drugs that were retained.

### Why it is important

This is a useful negative/edge case for a replacement: the system must handle partially entered or abandoned medications without polluting the final profile, and the final drug count (`9`) is the authoritative state, not the number of names typed during research.

### Replacement implication

Treat medication entry as an explicit commit operation. Keep a draft/typeahead state separate from saved drugs; show a live saved-count chip; and log add/remove events so the provenance of the final nine-drug list is auditable. Do not infer a saved drug from a typed value.

---

## Page 32 — Medication entry: Eliquis

**Timestamp:** 10:10  
**Screen:** Needs Assessment → Medications

### Exactly what is there

- Medication name: **Eliquis**
- Dosage dropdown/value: OCR `Eliquis AV 035M...` / later clearly **Eliquis TAB 5MG**
- Refill frequency: **Every month**
- Quantity: **30**
- Question: **Are you taking this medication for any of these conditions?**
  - Heart attack
  - Atrial fibrillation

### What the user does

Enters Eliquis with monthly refill and 30-day quantity, then begins condition mapping.

### Why this page exists

Captures drug identity, strength, supply pattern, and clinical rationale.

### Why it is important

The condition mapping is not cosmetic. It feeds chronic/specialty-needs logic. Atrial fibrillation is a common CSNP-relevant condition for anticoagulants.

---

## Page 33 — Condition checklist for medication

**Timestamp:** 10:20  
**Screen:** Medications → condition selector expanded

### Exactly what is there

Checklist options:

- Heart attack
- Atrial fibrillation
- Transient ischemic attack (TIA)
- Artery or vein blockage
- Stroke
- Flutter
- Mini-stroke
- Peripheral Vascular Disease (PVD)
- Coronary Artery Disease (CAD)
- Condition not listed
- No Conditions

### What the user does

Opens the full condition taxonomy for the current drug.

### Why this page exists

Maps each medication to a clinical condition category.

### Why it is important

This is how the system distinguishes ordinary Part D use from chronic special-needs eligibility. It also affects which plans are flagged as unavailable or potentially appropriate.

---

## Page 34 — Medication review with CSNP warning

**Timestamp:** 10:50  
**Screen:** Needs Assessment → Medications list

### Exactly what is there

Warnings at top:

- **“One or more plans will not be available based on the applicant information”**
- **“Based on the medications provided, the beneficiary maybe eligible for a CSNP policy.”** (grammar as shown)

Saved/entered drugs visible:

- **Eliquis TAB 5MG** — Delete/Edit, refill every month (30)
- **Metformin HCL TAB 850MG** — Delete/Edit, refill every 3 months (90)
- **Jardiance TAB 10MG**
- **Atorvastatin Calcium** dropdown/entry in progress

### What the user does

Reviews accumulated medications and sees system-generated eligibility warnings.

### System response

The app changes recommendation logic: some plans become unavailable and a CSNP possibility is flagged.

### Why this page exists

Surfaces clinical/commercial consequences of the drug list before the agent returns to the plan grid.

### Why it is important

This is a major intelligence feature: medication data is not just for cost; it can redirect the entire product strategy from MAPD to CSNP.

---

## Page 35 — Medication entry: Lisinopril and refill dropdown

**Timestamp:** 11:00  
**Screen:** Medication editor

### Exactly what is there

- Medication: **Lisinopril**
- Dosage: **Lisinopril TAB 2.5MG**
- Refill frequency dropdown open with options:
  - Every month
  - Every 2 months
  - Every 3 months
  - Every 6 months
  - Every 12 months
- Quantity: **90**
- Condition question partially visible, including heart-failure-related option (**OCR uncertain**)

### What the user does

Chooses a refill cadence for Lisinopril.

### Why this page exists

Refill frequency and quantity determine annual fill count and therefore annual drug cost.

### Why it is important

A 90-day supply every 3 months versus monthly changes both cost and formulary phase timing. The replacement must model days’ supply, not just monthly cost.

---

## Page 36 — Medication entry: Gabapentin

**Timestamp:** 11:10  
**Screen:** Medication editor

### Exactly what is there

- Medication: **Gabapentin**
- Dosage: **Gabapentin CAP 400MG**
- Refill frequency: OCR **Every 15 months** / `EverylSmonths` (**OCR uncertain**; likely a garbled dropdown value)
- Quantity: **270**
- Condition options visible:
  - Condition not listed
  - No Conditions
- Warning: **One or more plans will not be available based on the applicant information**

### What the user does

Enters Gabapentin with a large quantity.

### Why this page exists

Supports non-standard supply quantities and frequencies.

### Why it is important

The drug list eventually totals **9 medication(s)**, and Gabapentin later appears in drug-cost detail with a `$0 Initial` cost.

---

## Page 37 — Medication entry: Omeprazole and respiratory conditions

**Timestamps:** 11:30–11:40  
**Screen:** Medication editor / condition selector

### Exactly what is there

- Medication: **Omeprazole**
- Dosage: **Omeprazole DR CAP 20MG**
- Refill frequency: **Every 3 months**
- Quantity: **90**
- Condition selected/visible: **condition not listed**
- Later condition list expanded:
  - Emphysema
  - chronic bronchitis
  - COPD
  - Chronic respiratory condition
  - Condition not listed
  - No Conditions
- Warnings:
  - One or more plans will not be available...
  - Beneficiary maybe eligible for a CSNP policy.

### What the user does

Enters Omeprazole and explores respiratory condition mappings.

### Why this page exists

Even acid-reflux drugs can be tied to broader chronic condition profiles.

### Why it is important

The condition taxonomy is shared across drugs. The same respiratory condition set appears here, which may relate to later drug-cost detail where **Albuterol Sulfate TAB 4MG** appears.

---

## Page 38 — Final medication list state before returning to plans

**Timestamp:** 11:50  
**Screen:** Needs Assessment → Medications list

### Exactly what is there

- Warning still visible:
  - One or more plans will not be available...
  - Beneficiary maybe eligible for CSNP policy.
- Saved drug card:
  - **Eliquis TAB 5MG**
  - Edit / Delete
  - Refill every month (30)
- Header/content indicates medication count will be **9** on the next page.

### What the user does

Finishes or pauses medication entry and returns to plan results.

### System response

The next screen shows **9 medication(s)** in the result chip.

### Why it is important

This is the handoff from data collection to recalculation.

---

## Page 39 — Personalized plan results with medications and doctor

**Timestamp:** 12:00  
**URL:** `.../#/plans/33498/12099/MAPD`  
**Screen:** Plan results after personalization

### Exactly what is there

- Header now shows **Personal Code: IMFMMGOW**
- Result chips:
  - **9 medication(s)**
  - **1 doctor(s)**
- Still **18 results**
- Banner:
  > “The following plans don’t include your primary doctor as a PCP. These plans may be a good option for you, but choosing an in-network PCP should save you money.”
- CareOne Plus row now shows:
  - Monthly `$0.00`
  - **Annual cost `$1,536`** (changed from `$0` before medications)
  - Primary `$0`
  - Specialist `$0`
  - In-network `$750`
  - Combined `$750`
  - PartB `$108`
  - Dental `$0`
  - Vision `$450`
  - OTC `$840`
  - Hearing `$0`
  - Transportation 50 trips
  - Fitness covered

### What the user does

Returns to the grid with a fully changed personalization state.

### System response

Annual cost recalculates and a primary-doctor network warning appears.

### Why this page exists

Shows how the same 18 plans look for this specific beneficiary after providers and drugs are attached.

### Why it is important

This is the proof that personalization changes the numbers, not just labels. A replacement must recompute costs and suitability when profile data changes and must explain why a plan is flagged.

---

## Page 40 — Expanded plan cost summary in the grid

**Timestamps:** 12:10–12:30  
**Screen:** Plan row expanded / Estimated Annual Cost Summary

### Exactly what is there

Observed across adjacent plans:

- **Medical deductible `$0`**
- **Drug deductible `$700 (excludes Tier 1, 2 and 3 drugs)`** on some plans
- **Drug deductible `$0`** on another plan
- **Pharmacy: Mail Order Pharmacy Preferred**
- **$2,339 Estimated Annual Drug Cost** on one plan, **8 of 9 Drugs covered**
- **$1,908 Estimated Annual Drug Cost** on another plan, **8 of 9 Drugs covered**
- **Change Pharmacy** control
- Doctors section:
  - “This plan allows out of network doctors. Most PPO or PFFS plans will have a higher cost-share with out of network providers.”
  - Or:
  - **GOLAWALA, MUSHFEKA**
  - **No locations in network**
  - **Find In-network Doctors**
- Action buttons:
  - **Compare/Email Plan Links**
  - **Details**

### What the user does

Expands plan rows to inspect estimated annual cost and network implications.

### Why this page exists

Gives the agent a compact “why this plan costs what it costs” explanation before opening full plan detail.

### Why it is important

The agent can see that one drug is not covered (`8 of 9`) and that the primary doctor may have no in-network locations. These are decisive recommendation factors.

---

## Page 41 — Drug cost details page

**Timestamp:** 12:40  
**URL:** `.../#/plandetails/drugs/33498/12099/MAPD/273876`  
**Screen:** Plan detail → Drug cost details tab

### Exactly what is there

Top tabs:

- **Plan costs summary**
- **Benefits details**
- **Drug cost details**

Left list under **Drug Tier information**:

- Lisinopril TAB 2.5MG
- Metformin HCL TAB 850MG
- Omeprazole DR CAP 20MG
- Atorvastatin Calcium TAB 20MG
- Gabapentin CAP 400MG
- Albuterol Sulfate TAB 4MG
- Eliquis TAB 5MG
- Jardiance TAB 10MG
- Levothyroxine Sodium CAP 150MCG

Right detail for selected drug (Lisinopril initially):

- **Drug deductible `$0`**
- **Pharmacy status: Preferred Retail/Mail Order**
- **Drug Tier information**
- Monthly drug costs by month: January, February, March, April, May
- **Quantity limits: No**
- **Prior authorization: No**
- **Step therapy: No**
- **Estimated full drug cost `$1.65`**

### What the user does

Opens the drug-level verification view for a specific plan ID.

### Why this page exists

Validates the detailed Part D mechanics behind the estimated annual drug cost.

### Why it is important

This is where an agent checks whether a drug needs prior authorization, step therapy, or quantity limits. It also shows the plan’s preferred pharmacy status. This prevents misrepresenting what a drug will actually cost the beneficiary.

### Note on Albuterol

**Albuterol Sulfate TAB 4MG** appears in the drug detail list even though it was not clearly visible in the earlier 10-second medication-entry samples. It was likely added between samples or OCR missed its entry. Treat its presence as observed on this page but not fully traced to an entry action.

---

## Page 41A — Per-drug tier, restrictions and full-cost values (T=758–782)

**Timestamp:** 12:38–12:51  
**URL:** `.../#/plandetails/drugs/33498/12099/MAPD/273876` (plan: **Humana Gold Plus Giveback H1036-305 (HMO)**, `H1036-305-000`, rating OCR `4.5 out of 5 stars`, 2027 plan year)

### Exactly what is there

Top-of-page summary for this plan:

- **Monthly premium `$0.00`**
- **Estimated annual drug costs `$1,908`**
- **Drug deductible `$0`**
- **Pharmacy status: Preferred Retail/Mail Order**
- Left rail: **Drug Tier information** with the same nine-drug list as Page 41.
- Month selector runs **January–December** (T=774–778 show July, August, September, October, November, December).

Per-drug detail panels OCR'd as the agent clicks through the list (values are attached to the drug named in the same OCR block; where the association is ambiguous it is flagged):

| Drug | Tier | Quantity limits | Prior authorization | Step therapy | Estimated full drug cost |
|---|---|---|---|---|---|
| Lisinopril TAB 2.5MG | **Tier 1** | No | No | No | about **`$1.65`** (draft value; dense OCR shows a garbled `29.10` nearby, so treat exact cents as **OCR uncertain**) |
| Atorvastatin Calcium TAB 20MG | **Tier 1** | No | No ("`Prior authorization “`" garbled) | No | **`$3.63`** |
| Gabapentin CAP 400MG | Tier not legible in the captured block | — | — | **No** | **`$128.02`** |
| Jardiance TAB 10MG | **Tier 3** | **30 tablets per 30 days** | **Yes** | No | **`$209.63`** |
| Levothyroxine Sodium CAP 150MCG | — | — | — | — | **“Not on formulary”**, with **`$351.24`** shown next to it (likely the non-formulary full cost; **association OCR uncertain**) |
| Omeprazole DR CAP 20MG | **Tier 1** | No | No | No | **`$2.37`** |
| Albuterol Sulfate TAB 4MG | — | — | — | — | not separately legible; later monthly cost `$33 Initial` |

Non-formulary explanatory text shown repeatedly:
> “Any amount you spend for a non-formulary drug is not counted towards the deductible, initial coverage limit or out of pocket costs UNLESS the plan approves a formulary exception. If an exception is approved, the non-formulary drug will be covered.”

### What the user does

Clicks through individual drugs in the tier list and scrolls the monthly cost selector across the year, inspecting restrictions and full costs before returning to the plan list at T=784.

### Why this page exists

It is the deepest Part D verification layer: not just “what will the plan cost,” but “which specific drugs are restricted, what hoops must be cleared, and what the undiscounted drug would cost.”

### Why it is important

`Prior authorization: Yes` and `30 tablets per 30 days` on Jardiance, and `Not on formulary` on Levothyroxine, are exactly the facts that can invalidate a recommendation if missed. A $2,339/$1,908 estimated annual drug cost is only defensible if these per-drug mechanics are visible.

### Replacement implication

Store per-plan, per-drug formulary attributes: tier, quantity limit, prior-authorization flag, step-therapy flag, full cost, covered/not-covered, and the formulary-exception policy text. Render this as a selectable list/detail view with a month selector, and link it to the annual drug-cost estimate so the number can be traced back to its components.

---

## Page 42 — Monthly drug cost phases

**Timestamps:** 12:50–13:00  
**URL:** same drug detail page

### Exactly what is there

For one month (apparently January / Initial phase):

- Lisinopril TAB 2.5MG — `$0 Initial`
- Metformin HCL TAB 850MG — `$0 Initial`
- Omeprazole DR CAP 20MG — `$0 Initial`
- Atorvastatin Calcium TAB 20MG — `$0 Initial`
- Gabapentin CAP 400MG — `$0 Initial`
- Albuterol Sulfate TAB 4MG — `$33 Initial`
- Eliquis TAB 5MG — `$12 Initial`
- Jardiance TAB 10MG — `$19 Initial`
- Levothyroxine Sodium CAP 150MCG — `$351 Initial`
- **Total for month `$415 Initial`**

After month changes to April:

- Omeprazole DR CAP 20MG — `$0 N/A`
- Atorvastatin Calcium TAB 20MG — `$0 N/A`
- Gabapentin CAP 400MG — `$0 N/A`
- Albuterol Sulfate TAB 4MG — `$0 N/A`
- Levothyroxine Sodium CAP 150MCG — `$0 N/A`
- Eliquis TAB 5MG — `$12 Initial`
- Jardiance TAB 10MG — `$19 Initial`
- **Total for month `$30 Initial`**

### What the user does

Scrolls/changes the month selector and observes how costs move through benefit phases.

### Why this page exists

Models the Part D benefit cycle month by month.

### Why it is important

A single “monthly premium” number is not enough. The real beneficiary cost changes across deductible/initial/coverage-gap phases. The replacement must reproduce month-level phase costs and explain `Initial` vs `N/A` states.

---

## Page 43 — Back to plan list with Appointed plans filter

**Timestamp:** 13:00–13:20  
**Screen:** Plan results

### Exactly what is there

- Header still **Personal Code: IMFMMGOW**, **9 medication(s)**, **1 doctor(s)**
- Filter rail now shows **Appointed plans** / **Appointed Only**
- Visible plan row:
  - **Humana Gold Plus H1036-062C (HMO)**
  - Buttons: **Select another plan**, **Select another plan**
- Cost summary:
  - Transportation 26 trips
  - Fitness covered
  - Medical deductible `$0`
  - Drug deductible `$700 (excludes Tier 1, 2 and 3 drugs)`
  - Pharmacy Mail Order Preferred
  - **Medicare Advantage/Part D plans**

### What the user does

Returns to the grid and reviews an appointed plan, with explicit plan-selection controls.

### Why this page exists

Moves from analysis to selection.

### Why it is important

“Select another plan” indicates the agent can swap the chosen plan while keeping the personalized session. The workflow is not just research; it is heading toward an enrollment/selection decision.

---

## Page 44 — Benefits details side-by-side comparison

**Timestamps:** 13:30–13:40  
**URL:** `.../#/plandetails/benefits/33498/12099/MAPD/273829|273809`  
**Screen:** Plan details → Benefits details for two plan IDs

### Exactly what is there

Two plan columns are compared side-by-side; URL contains plan IDs `273829|273809`.

#### Ambulance Services

In-Network:

- **Coinsurance for Air Ambulance Services 20%** (both columns)
- **Prior Authorization Required for Air Ambulance** (both columns)
- Out-of-Network:
  - Ambulance Services
  - Copayment for Ambulance Services - Ground: `$0 to $250`
  - Coinsurance for Ambulance Services - Air: `20%`
  - `$250 Ambulance Emergency - Ground Ambulance $0`
  - Ambulance Non-Emergency - Ground Ambulance

#### Chiropractic Services

In-Network column 1:

- Copayment for Medicare-covered Chiropractic Services `$0`
- Prior Authorization Required for Chiropractic Services

In-Network column 2:

- Copayment for Medicare-covered Chiropractic Services `$20`
- Copayment for Routine Care `$20`
- Maximum **12 Routine Care every year**
- Prior Authorization Required for Chiropractic Services

Out-of-Network:

- Medicare Covered Chiropractic Services
- Copayment `$35`

#### Dental benefits (final visible state)

Visible comparison text includes:

- Dental coverage limit; unused amount expires at end of year.
- `0% coinsurance for oral surgery up to 2 per year`
- Benefit usable for most dental treatments:
  - preventive dental services (exams, routine cleanings)
  - basic dental services (fillings, extractions)
  - major dental services (periodontal scaling, crowns, dentures, root canals, bridges)
- Frequency limits may apply.
- Allowance cannot be used on fluoride, cosmetic services, and implants.
- `0% coinsurance for simple or surgical extraction up to 3 per year`
- `0% coinsurance for amalgam and/or composite filling`
- `0% coinsurance for periodontal maintenance up to 4 per year`
- `0% coinsurance for necessary anesthesia with covered service up to as needed`
- `0% coinsurance for extractions for dentures up to unlimited per year`
- `$0 copayment for comprehensive oral exam up to 1 every 3 years`
- `$0 copayment for panoramic film up to 1 per year`
- `$0 copayment for bitewing x-rays, emergency diagnostic exam, periodic oral exam, prophylaxis (cleaning) up to 2 per year`
- `30% coinsurance for complete or partial dentures up to 1 every 5 years`
- `30% coinsurance for crown, denture adjustments, rebase, reline up to 1 per year`
- Unlimited extractions are covered only for dentures; all other extractions limited to 3 per year.

### What the user does

Scrolls through granular benefit language comparing two plans.

### Why this page exists

Final due-diligence view when premium/cost numbers are close and benefit details matter.

### Why it is important

This is where subtle differences — `$0` vs `$20` chiropractic copay, prior authorization, dental frequency limits, ambulance coinsurance — become visible. A replacement must store and render benefit text at this granularity and support side-by-side comparison by plan ID.

---

## Page 44A — Full two-column benefit comparison at the final state (T=804–826)

**Timestamps:** 13:24–13:47 (the last frames of the recording)  
**URL:** `.../#/plandetails/benefits/33498/12099/MAPD/273829|273809` (two plan IDs separated by `|`)  
**Screen:** Benefits details, scrolled through many categories

### Top-of-page cost comparison (repeated at T=804, 806, 816)

| Field | Column A | Column B |
|---|---|---|
| Monthly premium | `$0.00` | `$0.00` |
| Medical deductible | `$0` | `$0` |
| Out-of-network maximum out-of-pocket | `N/A` | `N/A` |
| In-network maximum out-of-pocket | `$1,625` | `$3,400` |
| Combined maximum out-of-pocket | `$0` | `$3,400` |
| Drug deductible | `$0` | **`$700 (excludes Tiers 1, 2 and 3)`** |
| Catastrophic coverage limit | `$2,400` | `$2,400` |
| Part B giveback | **Up to `$1.50`** | **Up to `$155.00`** |

### Benefit categories and exact differences OCR'd in the final frames

- **Acupuncture (In-Network):** copay `$0` vs `$20`; both **Maximum 25 visits every year**; both **Prior Authorization Required**.
- **Additional Services:** Copayment for Fitness Benefit `$0` in both; Copayment for In-Home Support Services `$0` (line garbled as `Conavment for In-Home Sunnort Services $0`).
- **Ambulance:** In-Network air ambulance coinsurance **20%** in both, prior authorization required in both. Out-of-Network ground ambulance **$0 to $250**; air coinsurance **20%**; emergency ground `$0`; non-emergency ground `$250` (line assembled from garbled OCR — **values individually OCR uncertain**).
- **Chiropractic (In-Network):** Medicare-covered copay **`$0` vs `$20`**; column B adds **Routine Care `$20`, Maximum 12 visits every year**; both require prior authorization. Out-of-Network Medicare-covered chiropractic **`$35`**.
- **Dental (In-Network):** column A is an allowance model — **“Plan covers up to `$3,000` allowance every year for non-Medicare-covered preventive and comprehensive dental services. You are responsible for any amount above the dental coverage limit. Any amount unused at the end of the year will expire. Your benefit can be used for most dental treatments such as: preventive dental services, such as exams, routine cleanings, etc.; basic dental services, such as fillings, extractions, etc.; major dental services, such as periodontal scaling, crowns...”** Column B is a schedule model — 0% coinsurance for scaling/root planing (deep cleaning) up to 1 per quadrant per year; root canal for moderate inflammation up to 1 per year; oral surgery up to 2 per year; simple/surgical extraction up to 3 per year; amalgam/composite filling; periodontal maintenance up to 4 per year; necessary anesthesia as needed. **Equipment 50%** appears on one side. (This section is split across T=810, 818 and the earlier Page 44 excerpt, which adds dentures/crowns/x-ray frequency limits and “no fluoride, cosmetic services, and implants.”)
- **Emergency Care (In-Network):** copay **`$75` vs `$150`**; Medicare-covered emergency copay waived if admitted within 24 hours in both. Worldwide emergency coverage **`$75` vs `$150`**; worldwide emergency transportation **`$75` vs `$250`**.
- **Hearing Services (In-Network):** Medicare-covered benefits **`$5` vs `$25`**; routine hearing exam `$0` with **Maximum 1 visit every year** in both; fitting/evaluation for hearing aid `$0` with **Maximum 4 visits every year** in both; both require prior authorization and referral.
- **Part B drugs (Outpatient):** chemotherapy coinsurance **0% to 20%** in-network both; other Part B drugs **0% to 20%**; out-of-network **20%** for both categories.
- **Outpatient Rehabilitation:** cardiac and pulmonary rehabilitation **`$0` vs `$25`** for cardiac, intensive cardiac, and pulmonary services; both require prior authorization and referral.
- **Diabetic supplies (T=820):** Medicare-covered diabetic supplies `$0`; therapeutic shoes/inserts `$10` (shown on one side).
- **Diagnostic Tests, Lab and Radiology (T=820):** Outpatient diagnostic procedures/tests **`$0 to $5` vs `$0 to $25`**; lab services `$0` both; prior authorization and referral required both. Provider-type splits: OPH/PCP/SPC/UCC — e.g. `$0 / $5 / $0 / $0` vs `$0 / $25 / $25 / $25`; sleep-study facility/home variants. Diagnostic radiological services `$0 to $75` vs `$0 to $250`; therapeutic radiological services `$0 to $250`.
- **Durable Medical Equipment (T=822):** oxygen system / Medicare-covered DME coinsurance **50%**.
- **Mental Health (T=824):** Out-of-network Medicare-covered individual sessions `$35`, group sessions `$35`.
- **Outpatient Hospital / Observation / ASC (T=826):** prior authorization and referral required for outpatient hospital services; diagnostic colonoscopy OPH `$0` vs `$150`; hyperbaric oxygen treatment OPH `$0` vs `$25`; mental health OPH `$20` vs `$250`; surgery services OPH `$5` vs `$25`; wound care OPH. Observation services per stay **`$20` vs `$0`**, prior authorization and referral required. Ambulatory surgical center services **`$0` vs `$0 to $150`**, prior authorization and referral required; diagnostic colonoscopy ASC `$0`; surgery services ASC `$150`.

### What the user does

Scrolls continuously from the top cost summary down through the benefit catalog until the recording ends at T=826.

### Why this page exists

This is final due diligence: once premium, annual cost, and drug cost are close, the agent compares the **experience** of the plan — what the beneficiary pays at the point of care and which administrative hurdles apply.

### Why it is important

The differences are large and decisive: `$1,625` vs `$3,400` in-network MOOP, `$0` vs `$700` drug deductible, `$1.50` vs `$155` Part B giveback, `$75` vs `$150` emergency copay, `$0` vs `$25` rehab. A recommendation made without this screen is incomplete. The recording **ends here**, so this is the final analytical state, not a completed enrollment.

### Replacement implication

Store benefits as structured, typed fields (copay amount, coinsurance percentage, allowance cap, frequency limit, prior-auth flag, referral flag, in/out-of-network scope, provider-type splits) plus the human-readable plan text. Render side-by-side by plan ID with difference highlighting, and keep the granular text available for compliance and explanation — not just a star rating or summary bullet.

---

# 4. The data model implied by the recording

The screens collectively imply the following entities and relationships.

## 4.1 Session

- Personal Code: `IMFMMGOW`
- ZIP: `33498`
- Plan year: `2027`
- Product context: `MAPD`
- Path segment: `12099`
- Chips: medication count, doctor count
- Consent/BEQ state
- Optional Medicare number / DOB

## 4.2 Plan

- Plan name
- Plan type / policy type (HMO, HMO-POS, PPO, RPPO, PFFS, D-SNP etc.)
- Plan ID / PBP
- Carrier/brand
- Monthly premium
- Annual cost
- Medical deductible
- Drug deductible
- Max out-of-pocket
- Star rating
- Appointed / non-commissionable status
- Annual benefits summary
- Detailed benefits by category
- URLs by detail type (`/plandetails/drugs/...`, `/plandetails/benefits/...`)

## 4.3 Provider / organization

- Entity type: individual doctor vs hospital/facility/medical group/pharmacy/home health
- Name
- NPI
- Specialty / taxonomy
- Address list
- Distance from ZIP
- Primary provider flag
- Remove / Set as Primary actions
- Search modes: doctor name, doctor name + address, address, NPI, hospital/facility/medical group name
- Search radius: 25 miles initially, later 100 miles

## 4.4 Medication

- Drug name
- Dosage/form/strength (e.g., `Eliquis TAB 5MG`, `Metformin HCL TAB 850MG`)
- Refill frequency
- Quantity / days’ supply
- Condition mapping
- Pharmacy preference
- Extra Help / LIS status
- Tier
- Pharmacy status (preferred retail/mail)
- Quantity limits
- Prior authorization
- Step therapy
- Monthly cost by benefit phase
- Covered/not covered status (`8 of 9 Drugs covered`)

## 4.5 External research artifacts

- ChatGPT candidate doctors and medications
- Google search results and maps
- NPI Registry records for doctors and organizations
- Helios D-SNP plan cards
- Google/Chrome research tabs and shortcuts

---

# 5. Why the workflow matters as a whole

This is not a simple “lookup a plan” flow. It is a **personalized Medicare recommendation assembly line**:

1. **Define the market** — ZIP + year + product.
2. **Build a shortlist** — filters, sort, columns, appointed status.
3. **Build the human context** — doctors, primary PCP, hospitals, facilities.
4. **Build the clinical/pharmacy context** — medications,dosages, refill patterns, conditions, Extra Help, pharmacy.
5. **Recalculate** — annual costs, drug coverage, plan availability, CSNP warnings.
6. **Verify at multiple depths** — provider NPI, hospital NPI, drug tier/PA/step therapy, granular benefits.
7. **Select/email/compare** — final action controls in the plan grid.

The most important observed causal chains are:

- `ZIP 33498 + year 2027` → `18 results`.
- `Add medications` → `9 medication(s)` chip → annual cost changes (`$0` → `$1,536` for CareOne) → drug-cost detail and CSNP warning.
- `Save Golawala as primary` → `1 doctor(s)` chip → “plans don’t include your primary doctor as PCP” banner → “No locations in network” → “Find In-network Doctors”.
- `ChatGPT gives a name/address` → `SunFire provider search` → `Google/NPI verification` → `Saved provider with NPI`.
- `Drug list` → `8 of 9 covered` → `Estimated Annual Drug Cost` → `monthly phase costs`.
- `Close premium/cost comparison` → `benefits detail side-by-side`.

---

# 6. Requirements for a SunFire Matrix replacement

Based only on what the recording shows, the replacement should include:

1. **Persistent session context**
   - ZIP, plan year, product type, personal/session code, consent state.
   - All pages must read and write this context.

2. **Plan comparison grid**
   - 18-result style catalog for the case ZIP.
   - Sort by recommended plans.
   - Year and time-period toggles.
   - Configurable columns.
   - List and X-ray-style views.
   - Carrier/brand filters.
   - Premium, policy type, deductible, appointed-only filters.
   - Benefit filters: dental, vision, hearing, OTC, transportation, fitness, chiropractic, Part B flex benefit, five-star, giveback.

3. **Needs Assessment drawer/modal**
   - Basic Information.
   - Medications.
   - My Doctors / providers.
   - Update & close.
   - View Needs Assessment.
   - New Session.

4. **Provider subsystem**
   - Search by name, name+address, address, NPI, facility/group name.
   - Adjustable radius.
   - Result list with specialty/gender/city filters and sort by nearest.
   - Multi-location display with distances.
   - Save/remove providers.
   - Set exactly one primary provider.
   - Support organizations as well as individuals.

5. **Medication subsystem**
   - Drug search/typeahead with dosage forms.
   - Refill frequency and quantity.
   - Condition taxonomy per drug.
   - Pharmacy selection and change pharmacy.
   - Extra Help/LIS.
   - Edit/delete saved drugs.
   - Warnings for unavailable plans and CSNP eligibility.
   - Drug count chip.

6. **Cost engine**
   - Monthly premium.
   - Annual cost.
   - Medical deductible.
   - Drug deductible with tier exclusions.
   - Max out-of-pocket.
   - Estimated annual drug cost.
   - Covered-drug count.
   - Month-by-month benefit phase costs.
   - Prior authorization / step therapy / quantity limit flags.

7. **Network logic**
   - Primary-doctor network warning.
   - “No locations in network” detection.
   - Find in-network doctors action.
   - Out-of-network cost-share warning.

8. **Plan detail pages**
   - Plan costs summary.
   - Benefits details.
   - Drug cost details.
   - Side-by-side comparison by plan ID.
   - Detailed benefit text with limits/frequencies/prior authorization.

9. **Audit and provenance**
   - Show which data came from AI, Google, NPI, or internal source.
   - Store NPI identifiers used for verification.
   - Preserve warnings and rationale (“why this plan is unavailable/expensive/flagged”).
   - The workflow repeatedly moves from unverified lead → verified record; the replacement should make that chain explicit.

---

# 7. Observations that are easy to miss

- The **Medicare Number and DOB fields are never visibly filled**, yet the app produces a personal code and personalized data. Either the demo used a preloaded session or those fields were not required for the visible path. Do not assume they were entered.
- The **result count stays 18** even after medications and CSNP warnings. The warning says “one or more plans will not be available,” but the header count does not visibly change in the sampled frames.
- The **doctor chip says 1 doctor(s)** even though several facilities are saved. This suggests only the primary individual doctor is counted in that chip, or facility count is tracked separately.
- **ChatGPT output is explicitly treated as unverified** (“Verify network participation with the specific carrier before confirming”), and the agent does verify via NPI.
- The **address for Golawala differs** between ChatGPT (`19498 Saturnia Lakes Drive`) and SunFire/NPI-style records (`21644 STATE RD 7`). This is a real data-reconciliation moment.
- The **annual cost for CareOne changes** from `$0` before medications to `$1,536` after medications. That is the clearest proof of dynamic recalculation.
- **8 of 9 drugs are covered** on the plans shown; one drug is not covered. The replacement must show uncovered drugs explicitly.
- **Albuterol appears in drug detail** but was not clearly captured during entry. Treat it as present in the final drug profile but with uncertain entry timing.
- **Benefit comparison is by plan ID** in the URL (`273829|273809`), not just by plan name. Stable IDs are essential.
- The recording ends mid-comparison, not with a completed enrollment. The final visible state is granular dental/chiropractic/ambulance benefit review.
- **Dense OCR added a second intake gate:** “Are you currently enrolled in a Medicare Advantage or Prescription Drug plan? Yes No” (T=6–8). The 10-second pass missed it entirely.
- **The market context is larger than the shortlist:** “3 Carriers / 44 Plans represented” sits beside the year selector (T=10–14), while the grid shows 18 results.
- **The X-ray view is its own route** (`#/planxray/xray/.../273788/10`) with plan cards, star ratings, and a nine-category benefit-feature checklist — not merely a CSS toggle of the table.
- **Select Columns is capped at three** with a `clear all` control (T=142).
- **Farxiga was typed but did not survive into the final nine-drug list.** Treat the count chip (`9 medication(s)`) and the nine-drug detail list as authoritative; the typed value is an uncommitted/abandoned draft.
- **Albuterol Sulfate TAB 4MG was added at some point** between the 10-second samples; it is present in the final drug detail list and in monthly phase costs (`$33 Initial`).
- **The plan universe in the dense OCR includes many more IDs than the draft listed:** `H1019-001-000`, `H1609-020-000`, `H5521-033-000`, `H1019-065-000`, `H1032-196-000`, `H1019-148-000`, `H1036-305-000`, `H5216-068-000`, `H5216-311-000`, `H1032-195-000`, `H1019-135-000`, `H1036-062-000`, `R5826-005-000`.
- **Giveback values vary widely by plan:** CareOne references up to `$9.00`, another plan up to `$148.00`, CareFree Platinum up to `$155.00`; the final benefits comparison shows `$1.50` vs `$155.00`.
- **The drug-detail page proves per-drug restrictions exist:** Jardiance is Tier 3 with prior authorization and 30-tablets-per-30-days limit; Levothyroxine is “Not on formulary”; Gabapentin has a `$128.02` full cost.

---

# 8. Bottom line

The SunFire Matrix/Blaze “agent view” shown in this recording is a **Medicare plan recommendation cockpit**. It combines:

- intake,
- plan search/filtering,
- provider and facility verification,
- medication and condition capture,
- CSNP detection,
- annual cost modeling,
- drug-tier/phase analysis,
- network adequacy checks,
- and side-by-side benefit comparison.

Its value is not any single page; it is the **chain of evidence** from one page to the next. A replacement that only reproduces the plan grid will miss the point. The essential product is the system of record that connects a beneficiary’s ZIP, doctors, drugs, conditions, and preferences to defensible, explainable plan recommendations.

---

# 9. Complete observed plan/cost registry (dense-OCR verified)

All rows below are 2027-plan-year entries observed in the grid. Values are exactly as OCR'd; garbled fragments are omitted rather than guessed.

| Plan name | Plan ID | Monthly premium | Notable observed fields |
|---|---|---|---|
| CareOne Plus (HMO-POS), CarePlus | `H1019-001-000` | `$0.00` | Annual `$0` before meds → `$1,536` after meds; Primary `$0`, Specialist `$0`, In-network `$750`, Combined `$750`, PartB `$108`, Dental `$0`, Vision `$450`, OTC `$840`, Hearing `$0`, Transportation 50 trips, Fitness covered; Part B giveback text near `$9.00` (**OCR uncertain**) |
| Aetna Medicare Select (HMO) | `H1609-020-000` | `$0.00` | Primary `$0`, Specialist `$0`, In-network `$3,400`, Dental `$3,000`, Vision `$300` |
| Aetna Medicare Signature (PPO) | `H5521-033-000` | `$0.00` | Non-commissionable; Specialist `$0–$60`, In-network `$7,150`, Combined `$10,750`, Dental `$500`, Vision `$100`, Transportation Not Covered |
| CareFree Giveback (HMO) | `H1019-065-000` | `$0.00` | Specialist `$20`, In-network `$5,000`, PartB `$882`, Dental `$0`, Hearing `$0`, giveback up to `$73.50` (**OCR uncertain**) |
| Wellcare / plan under `$20` filter | `H1032-196-000` | — | Specialist `$5`, Vision `$400` |
| Wellcare Giveback (HMO-POS) | `H1032-195-000` | `$0.00` | Annual `$5,448`; Specialist `$15`, In-network `$5,000`, PartB `$1,963.2x` (**OCR uncertain**), Dental `$2,000`, Vision `$200`, giveback up to `$163.60` |
| CareFree Platinum Giveback (HMO-POS) | `H1019-135-000` | `$0.00` | Annual `$2,152` after meds; Specialist `$25`, Combined `$3,400`, Dental `$0`, Vision `$200`, OTC `$180`, Transportation 26 trips, Giveback up to `$155.00` |
| CareFree Platinum Giveback (HMO-POS), variant | `H1019-148-000` | — | Specialist `$10`, Dental `$0`, giveback up (amount not legible) |
| Humana Gold Plus (HMO) | `H1036-062-000` | `$0.00` | Annual cost text around `$1.…` (**OCR uncertain**); Specialist `$5`, Dental `$3,000`, Vision `$300`, OTC `$300`, Hearing `$0`, Transportation 50 trips, Fitness covered; shown under **Appointed plans** |
| Humana Gold Plus Giveback (HMO) | `H1036-305-000` | `$0.00` | Annual `$1,908` after meds; In-network `$3,850`, PartB `$1,776`, giveback up to `$148.00` (dense) / `$155.00` (final comparison, **OCR uncertain** which plan) |
| HumanaChoice Giveback (PPO) | `H5216-311-000` | `$0.00` | X-ray card: 4 out of 5 stars, estimated annual cost `$0` before meds; category checkmarks for Rx/Hospital/Dental/Vision/Hearing/Fitness/OTC/Transportation/Giveback |
| Florida Blue / United-style plan | `H5216-068-000` | — | Specialist `$40`, Combined `$6,100`, Vision `$100`, Transportation Not Covered |
| HumanaChoice plan | `H7284-008-000` | `$52.00` | Annual `$624`; Specialist `$35`, Combined `$6,200`, Vision `$200`, Medical deductible `$0`, Drug deductible `$700 (excludes Tier 1, 2 and 3)` |
| HumanaChoice R5826-005 (Regional PPO) | `R5826-005-000` | `$161.00` | Annual `$4,569` after meds / `$1,932` earlier; Specialist `$45`, In-network `$6,700`, Combined `$10,000`, Dental `$750`, Vision `$100`, Transportation Not Covered; allows out-of-network doctors |

Notes:
- The header count fluctuates between **18 results** and **31 results** in later frames (T=790, T=2306 region). This likely reflects a filter change (31 appears near “Appointed plans”), but the exact trigger is not visible. Mark **OCR/interpretation uncertain**.
- All dollar values that sit next to garbled star-rating or brand text should be re-verified against the source frames before being used in pricing logic.

---

# 10. Complete URL inventory observed

| Route | Purpose |
|---|---|
| `#/plans` | Entry route before case resolution |
| `#/plans/33498/12099/MAPD` | Main plan grid for ZIP 33498, context 12099, product MAPD |
| `#/planxray/xray/33498/12099/MAPD/273788/10` | X-ray plan-card view focused on plan `273788`, with step/page segment `10` |
| `#/plandetails/drugs/33498/12099/MAPD/273876` | Drug cost details for plan `273876` |
| `#/plandetails/benefits/33498/12099/MAPD/273876` | Benefits details for plan `273876` |
| `#/plandetails/benefits/33498/12099/MAPD/273829\|273809` | Side-by-side benefits comparison for two plans |
| `#/discovery` | Discovery/plan-selection surface reached from the personalized grid |

External tools observed in tabs: `chatgpt.com`, `npiregistry.cms.hhs.gov/provider-view/1013151141`, `npiregistry.cms.hhs.gov/provider-view/1902826779`, `helios-dsnp.vercel.app`, Google search/maps, Chrome AI Mode / `Ask Gemini`, `drive.google.com/drive/shared-with-me`.

---

# 11. Field-level data dictionary implied by the screens

## Session / intake
- `plan_year` (2027 | 2026)
- `zip` (33498)
- `product_context` (MAPD; also MA-only, PDP, Medicare Supplement, D-SNP, CSNP filters exist)
- `personal_code` (IMFMMGOW, appears after personalization)
- `medicare_number` (field present, never visibly filled)
- `date_of_birth` (field present, never visibly filled)
- `beq_consent` (optional external-data authorization text)
- `currently_enrolled_ma_or_pdp` (Yes | No) — dense-OCR addition

## Plan
- `plan_id` / `pbp` (e.g., `H1019-001-000`), `plan_name`, `plan_type` (HMO, HMO-POS, PPO, RPPO, PFFS), `carrier/brand`, `year`, `star_rating`, `appointed`, `commissionable`, `monthly_premium`, `annual_cost`, `medical_deductible`, `drug_deductible` + excluded tiers, `max_oop` (in-network/out-of-network/combined), `catastrophic_limit`, `part_b_giveback`, `annual_benefits_summary`, `benefit_feature_flags` (nine X-ray categories)

## Provider / organization
- `entity_type`, `name`, `npi`, `specialty`, `address_list`, `distance_mi`, `gender`, `city`, `primary_flag`, `search_mode`, `radius_mi`

## Medication
- `drug_name`, `formatted_strength` (e.g., `Eliquis TAB 5MG`), `refill_frequency`, `quantity`, `condition_codes`, `pharmacy_preference`, `extra_help_lis`, `tier`, `quantity_limit`, `prior_authorization`, `step_therapy`, `full_cost`, `covered`, `monthly_cost_by_phase`, `coverage_period`, `annual_drug_cost_estimate`, `covered_drug_count`

## Benefit (structured)
- `category`, `scope` (in-network/out-of-network/worldwide), `cost_type` (copay/coinsurance/allowance), `amount`, `frequency_limit`, `prior_authorization`, `referral`, `provider_type_split`, `free_text_plan_language`

---

# 12. Evidence gaps and cautions (do not over-claim)

1. **No direct pixel inspection** was possible; everything is OCR-derived. Colors, exact icon shapes, and some visual groupings are inferred from text order.
2. **Medicare number and DOB were never visibly entered.** Do not build a replacement that assumes they were required for this path.
3. **The current-enrollment Yes/No answer is not visible** as a selection, only the question and options.
4. **The Farxiga outcome is unproven** — typed at T=712, absent from the final nine-drug list.
5. **The trigger for `18 results` → `31 results` is not captured.** It may be an “Appointed plans” filter, but that is an inference.
6. **`/10` in the X-ray URL is unexplained**; it may be a page/step index.
7. **Some dollar values conflict between the 10-second and 2-second passes** (e.g., giveback amounts, HumanaChoice annual cost). Treat the dense value as preferred but still OCR-uncertain where flagged.
8. **One decode error exists near frame 24,823** at the very end of the repaired video; the final seconds may be slightly corrupted, but the T=826 benefit text was read successfully.
9. **No enrollment, application submission, or plan purchase is visible.** The recording ends during benefit comparison.

---

# 13. Replacement-system acceptance criteria derived from the evidence

A replacement should be considered faithful to this workflow only if it can reproduce each of the following observable behaviors:

1. Resolve a case from route parameters (`ZIP`, `year`, `product`) and show an explicit loading state before the grid.
2. Present a persistent Needs Assessment with Basic Information, BEQ consent, current-enrollment question, Medications, and My Doctors, plus New Session / Update & close / View Needs Assessment.
3. Show a plan grid with **18 results** for ZIP 33498, recommended sort, annual time period, year toggle, and an enforced three-column selector with clear-all.
4. Offer both a table view and a deep-linkable X-ray card view with star ratings and a nine-category benefit-feature checklist.
5. Support all filter dimensions observed: plan type, premium bands, deductible, policy type, appointed plans/only, amended plans, brand, five-star, giveback, dental/vision/hearing/OTC/transportation/fitness/chiropractic/Part B flex benefit.
6. Search providers by doctor name, doctor name + address, address, NPI, and facility/group name; radius 25 → 100 miles; specialty/gender/city filters; sort by nearest; multi-location distances.
7. Save doctors, specialists, hospitals, surgery centers, home health, and pharmacies as one provider entity model; designate exactly one primary provider; remove/swap.
8. Enter medications with formatted strength, refill frequency, quantity, condition taxonomy, pharmacy preference, and Extra Help/LIS; show live count chip and warnings for plan unavailability and CSNP eligibility.
9. Recompute annual cost when profile changes (`$0` → `$1,536` for CareOne is the regression test) and show `8 of 9 drugs covered` plus estimated annual drug cost.
10. Expose per-drug formulary detail: tier, quantity limits, prior authorization, step therapy, full cost, non-formulary explanation, month-by-month coverage-period costs.
11. Detect primary-doctor network gaps: banner, “No locations in network,” “Find In-network Doctors,” and out-of-network cost-share warning.
12. Provide plan detail pages with Plan costs summary / Benefits details / Drug cost details tabs and side-by-side comparison by plan ID, including the granular benefit fields listed in Section 11.
13. Preserve provenance: mark which values came from AI chat, Google, NPI registry, or internal data, and store the verification chain for each saved provider.
14. Never claim an enrollment occurred — the source recording does not show one.

---

# 14. How to verify this blueprint against the source

- Re-run OCR on any frame in `/tmp/opencode/repair/f2/` at a 2-second index `n = timestamp/2` (e.g., T=804 → `f2/0402.png`).
- Use `/tmp/opencode/repair/range2.sh START END` to print a dense timestamp range and `/tmp/opencode/repair/find2.sh "phrase"` to locate a term.
- Correlate any value in this document with the `T=` marker in `/tmp/opencode/repair/ocr2_all.txt`; all Section 9–13 additions are anchored to those markers.
- Play the repaired MP4 in VLC/ffmpeg and seek to the `T=` time to hear/see the surrounding interaction if visual tooling becomes available.
