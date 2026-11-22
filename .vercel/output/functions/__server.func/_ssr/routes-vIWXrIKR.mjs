import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Check, n as Star, r as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vIWXrIKR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function doc(partial) {
	return {
		kind: partial.kind ?? "physician",
		first: partial.first ?? "",
		last: partial.last ?? "",
		gender: partial.gender ?? "Organization",
		npi: partial.npi ?? "",
		npiVerified: partial.npiVerified ?? false,
		phone: partial.phone ?? "",
		leadAddress: partial.leadAddress ?? "",
		formerName: partial.formerName ?? "",
		official: partial.official ?? "",
		inNetworkPlanIds: partial.inNetworkPlanIds ?? [],
		...partial,
		locations: partial.locations
	};
}
var DIRECTORY = [
	doc({
		id: "golawala",
		name: "GOLAWALA, MUSHFEKA",
		first: "Mushfeka",
		last: "Golawala",
		specialty: "INTERNAL MEDICINE",
		gender: "Female",
		npi: "1013151141",
		npiVerified: true,
		phone: "(561) 703-1383",
		leadAddress: "19498 Saturnia Lakes Drive, Boca Raton, FL 33498",
		inNetworkPlanIds: ["273820", "273826"],
		locations: [
			{
				line: "21644 STATE RD 7, BOCA RATON, FL 33428",
				city: "BOCA RATON",
				distance: 3.8
			},
			{
				line: "7593 BOYNTON BEACH BLVD, BOYNTON BEACH, FL 33437",
				city: "BOYNTON BEACH",
				distance: 10.3
			},
			{
				line: "201 E SAMPLE RD, DEERFIELD BEACH, FL 33064",
				city: "DEERFIELD BEACH",
				distance: 12
			},
			{
				line: "14050 NW 14TH ST STE 190, FORT LAUDERDALE, FL 33323",
				city: "FORT LAUDERDALE",
				distance: 19.9
			},
			{
				line: "7205 NW 19TH ST STE 404, MIAMI, FL 33126",
				city: "MIAMI",
				distance: 47.6
			},
			{
				line: "4960 SW 72ND AVE STE 303, MIAMI, FL 33155",
				city: "MIAMI",
				distance: 51.2
			},
			{
				line: "6200 SW 73RD ST, SOUTH MIAMI, FL 33143",
				city: "SOUTH MIAMI",
				distance: 53.6
			}
		]
	}),
	doc({
		id: "ayala",
		name: "AYALA, DWIGHT",
		first: "Dwight",
		last: "Ayala",
		specialty: "FAMILY MEDICINE",
		gender: "Male",
		phone: "(561) 368-7055",
		leadAddress: "10278 Buena Ventura Drive, Boca Raton, FL 33498",
		inNetworkPlanIds: [
			"273788",
			"273809",
			"273820",
			"273876",
			"273816",
			"273819"
		],
		locations: [
			{
				line: "10278 BUENA VENTURA DR, BOCA RATON, FL 33498",
				city: "BOCA RATON",
				distance: .6
			},
			{
				line: "9980 CENTRAL PARK BLVD, BOCA RATON, FL 33428",
				city: "BOCA RATON",
				distance: 2.4
			},
			{
				line: "6901 CONGRESS AVE, BOYNTON BEACH, FL 33437",
				city: "BOYNTON BEACH",
				distance: 8.1
			},
			{
				line: "1799 SW 4TH AVE, BOCA RATON, FL 33432",
				city: "BOCA RATON",
				distance: 6.4
			},
			{
				line: "5501 N FEDERAL HWY, BOCA RATON, FL 33487",
				city: "BOCA RATON",
				distance: 7.2
			}
		]
	}),
	doc({
		id: "weisstuch",
		name: "WEISSTUCH, ADAM",
		first: "Adam",
		last: "Weisstuch",
		specialty: "OTOLARYNGOLOGY",
		gender: "Male",
		phone: "(561) 353-7377",
		leadAddress: "7900 Glades Rd #340, Boca Raton, FL 33434",
		inNetworkPlanIds: [
			"273814",
			"273809",
			"273821",
			"273788"
		],
		locations: [{
			line: "7900 GLADES RD #340, BOCA RATON, FL 33434",
			city: "BOCA RATON",
			distance: 5.4
		}]
	}),
	doc({
		id: "chalfin",
		name: "CHALFIN, RENATA",
		first: "Renata",
		last: "Chalfin",
		specialty: "NEUROLOGY",
		gender: "Female",
		phone: "",
		leadAddress: "Neurology Offices of South Florida / First Choice Neurology",
		inNetworkPlanIds: [
			"273820",
			"273876",
			"273814"
		],
		locations: [{
			line: "FIRST CHOICE NEUROLOGY, BOCA RATON, FL 33428",
			city: "BOCA RATON",
			distance: 4.1
		}]
	}),
	doc({
		id: "demarchi",
		name: "DEMARCHI, WILLIAM",
		first: "William",
		last: "DeMarchi",
		specialty: "INTERNAL MEDICINE",
		gender: "Male",
		leadAddress: "9878 Clint Moore area, Boca Raton, FL 33498",
		inNetworkPlanIds: ["273788", "273825"],
		locations: [{
			line: "9878 CLINT MOORE RD, BOCA RATON, FL 33496",
			city: "BOCA RATON",
			distance: 2.2
		}]
	}),
	doc({
		id: "voss",
		name: "VOSS, ELENA",
		first: "Elena",
		last: "Voss",
		specialty: "INTERNAL MEDICINE",
		gender: "Female",
		inNetworkPlanIds: [
			"273788",
			"273814",
			"273816",
			"273809",
			"273819",
			"273829"
		],
		locations: [{
			line: "1500 NW 10TH AVE, BOCA RATON, FL 33486",
			city: "BOCA RATON",
			distance: 4.8
		}]
	}),
	doc({
		id: "okonkwo",
		name: "OKONKWO, JAMES",
		first: "James",
		last: "Okonkwo",
		specialty: "FAMILY MEDICINE",
		gender: "Male",
		inNetworkPlanIds: [
			"273820",
			"273876",
			"273821",
			"273822",
			"273823",
			"273824"
		],
		locations: [{
			line: "900 GLADES RD, BOCA RATON, FL 33431",
			city: "BOCA RATON",
			distance: 6.1
		}]
	}),
	doc({
		id: "baptist-surgery-endo",
		kind: "organization",
		name: "BAPTIST SURGERY AND ENDOSCOPY CENTERS LLC",
		specialty: "AMBULATORY SURGICAL CENTER",
		locations: [{
			line: "1905 CLINT MOORE ROAD SUITE 115, BOCA RATON, FL 33496",
			city: "BOCA RATON",
			distance: 3.1
		}, {
			line: "SECOND LOCATION, BOCA RATON, FL",
			city: "BOCA RATON",
			distance: 5.5
		}]
	}),
	doc({
		id: "baptist-express",
		kind: "organization",
		name: "BAPTIST HEALTH EXPRESS CARE CORAL SPRINGS",
		specialty: "EMERGENCY CARE CLINIC CENTER",
		locations: [{
			line: "6264 W SAMPLE RD, POMPANO BEACH, FL 33067",
			city: "POMPANO BEACH",
			distance: 14.2
		}]
	}),
	doc({
		id: "baptist-pharmacy-101",
		kind: "organization",
		name: "BAPTIST HEALTH PHARMACY 101 LLC",
		specialty: "COMMUNITY RETAIL PHARMACY",
		locations: [{
			line: "8950 N KENDALL DR STE 102, MIAMI, FL 33176",
			city: "MIAMI",
			distance: 42
		}]
	}),
	doc({
		id: "baptist-outpatient",
		kind: "organization",
		name: "BAPTIST OUTPATIENT SERVICES INC",
		specialty: "HOME HEALTH AGENCY",
		locations: [{
			line: "12400 SW 127TH AVE, MIAMI, FL 33186",
			city: "MIAMI",
			distance: 38
		}]
	}),
	doc({
		id: "baptist-pharmacy-103",
		kind: "organization",
		name: "BAPTIST HEALTH PHARMACY 103 LLC",
		specialty: "COMMUNITY RETAIL PHARMACY",
		locations: [{
			line: "6200 SUNSET DR STE 102, SOUTH MIAMI, FL 33143",
			city: "SOUTH MIAMI",
			distance: 45
		}]
	}),
	doc({
		id: "baptist-surgery-fau",
		kind: "organization",
		name: "BAPTIST HEALTH SURGERY CENTER LLC",
		specialty: "AMBULATORY SURGICAL CLINIC",
		locations: [{
			line: "3731 FAU BLVD SUITE 100, BOCA RATON, FL 33431",
			city: "BOCA RATON",
			distance: 5.9
		}]
	}),
	doc({
		id: "boca-regional",
		kind: "organization",
		name: "BOCA RATON REGIONAL HOSPITAL INC",
		specialty: "GENERAL ACUTE CARE HOSPITAL",
		npi: "1902826779",
		npiVerified: true,
		formerName: "BOCA RATON COMMUNITY HOSPITAL, INC.",
		official: "LINCOLN MENDEZ",
		inNetworkPlanIds: [
			"273788",
			"273809",
			"273814",
			"273820",
			"273876",
			"273829",
			"273825"
		],
		locations: [{
			line: "1905 CLINT MOORE RD, BOCA RATON, FL 33496",
			city: "BOCA RATON",
			distance: 3.4
		}]
	})
];
var DIRECTORY_BY_ID = Object.fromEntries(DIRECTORY.map((p) => [p.id, p]));
var SPECIALTIES = [
	"ANESTHESIOLOGY",
	"DERMATOLOGY",
	"EMERGENCY MEDICINE",
	"FAMILY MEDICINE",
	"INTERNAL MEDICINE",
	"NEUROLOGY",
	"OTOLARYNGOLOGY",
	"AMBULATORY SURGICAL CENTER",
	"AMBULATORY SURGICAL CLINIC",
	"EMERGENCY CARE CLINIC CENTER",
	"COMMUNITY RETAIL PHARMACY",
	"HOME HEALTH AGENCY",
	"GENERAL ACUTE CARE HOSPITAL"
];
var CITIES = [
	"BOCA RATON",
	"BOYNTON BEACH",
	"DEERFIELD BEACH",
	"FORT LAUDERDALE",
	"POMPANO BEACH",
	"MIAMI",
	"SOUTH MIAMI",
	"ADVENTURA",
	"ATLANTIS"
];
var RECORDED_PROVIDER_IDS = [
	"golawala",
	"ayala",
	"baptist-surgery-fau",
	"boca-regional"
];
var FREQUENCIES = [
	"Every month",
	"Every 2 months",
	"Every 3 months",
	"Every 6 months",
	"Every 12 months"
];
var CONDITION_GROUPS = [
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
			"Heart failure"
		]
	},
	{
		id: "resp",
		label: "Respiratory",
		items: [
			"Emphysema",
			"Chronic bronchitis",
			"COPD",
			"Chronic respiratory condition"
		]
	},
	{
		id: "metabolic",
		label: "Metabolic",
		items: [
			"Type 2 diabetes",
			"High cholesterol",
			"Thyroid disorder"
		]
	},
	{
		id: "other",
		label: "Other",
		items: [
			"Nerve pain",
			"Depression or anxiety",
			"Acid reflux",
			"Condition not listed",
			"No conditions"
		]
	}
];
var CSNP_CONDITIONS = /* @__PURE__ */ new Set([
	"Heart attack",
	"Atrial fibrillation",
	"Stroke",
	"Coronary artery disease (CAD)",
	"Heart failure",
	"COPD",
	"Chronic respiratory condition",
	"Type 2 diabetes"
]);
var CSNP_DRUGS = /* @__PURE__ */ new Set([
	"eliquis",
	"jardiance",
	"metformin",
	"farxiga",
	"ozempic",
	"xarelto",
	"albuterol"
]);
function drug(partial) {
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
		january: partial.january ?? {
			amount: 0,
			phase: "Initial"
		},
		april: partial.april ?? {
			amount: 0,
			phase: "N/A"
		},
		monthly: partial.monthly ?? false,
		notOnFormulary: partial.notOnFormulary ?? false,
		...partial
	};
}
var DRUGS = [
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
		january: {
			amount: 12,
			phase: "Initial"
		},
		april: {
			amount: 12,
			phase: "Initial"
		},
		monthly: true
	}),
	drug({
		id: "metformin",
		name: "Metformin",
		commonUse: "Diabetes",
		strengths: [
			"Metformin HCL TAB 500MG",
			"Metformin HCL TAB 850MG",
			"Metformin HCL TAB 1000MG"
		],
		defaultStrength: "Metformin HCL TAB 850MG",
		defaultFrequency: "Every 3 months",
		defaultQuantity: 90,
		defaultConditions: ["Type 2 diabetes"],
		groups: ["metabolic", "other"],
		tier: 1,
		ql: "No",
		pa: false,
		st: false,
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
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
		groups: [
			"metabolic",
			"cardiac",
			"other"
		],
		tier: 3,
		ql: "30 tablets per 30 days",
		pa: true,
		st: false,
		fullCost: 209.63,
		january: {
			amount: 19,
			phase: "Initial"
		},
		april: {
			amount: 19,
			phase: "Initial"
		},
		monthly: true
	}),
	drug({
		id: "atorvastatin",
		name: "Atorvastatin",
		commonUse: "Cholesterol",
		strengths: [
			"Atorvastatin Calcium TAB 10MG",
			"Atorvastatin Calcium TAB 20MG",
			"Atorvastatin Calcium TAB 40MG"
		],
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
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	}),
	drug({
		id: "lisinopril",
		name: "Lisinopril",
		commonUse: "Blood pressure",
		strengths: [
			"Lisinopril TAB 2.5MG",
			"Lisinopril TAB 5MG",
			"Lisinopril TAB 10MG",
			"Lisinopril TAB 20MG"
		],
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
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	}),
	drug({
		id: "gabapentin",
		name: "Gabapentin",
		commonUse: "Nerve pain",
		strengths: [
			"Gabapentin CAP 100MG",
			"Gabapentin CAP 300MG",
			"Gabapentin CAP 400MG"
		],
		defaultStrength: "Gabapentin CAP 400MG",
		defaultFrequency: "Every 3 months",
		defaultQuantity: 270,
		defaultConditions: ["Condition not listed"],
		groups: ["other"],
		st: false,
		fullCost: 128.02,
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
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
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
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
		january: {
			amount: 33,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
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
		january: {
			amount: 351,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	}),
	drug({
		id: "farxiga",
		name: "Farxiga",
		commonUse: "Diabetes / heart failure",
		strengths: ["Farxiga TAB 5MG", "Farxiga TAB 10MG"],
		defaultStrength: "Farxiga TAB 5MG",
		defaultConditions: ["Type 2 diabetes"],
		groups: [
			"metabolic",
			"cardiac",
			"other"
		],
		tier: 3,
		pa: true,
		january: {
			amount: 22,
			phase: "Initial"
		},
		april: {
			amount: 22,
			phase: "Initial"
		},
		monthly: true
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
		january: {
			amount: 47,
			phase: "Initial"
		},
		april: {
			amount: 47,
			phase: "Initial"
		},
		monthly: true
	}),
	drug({
		id: "xarelto",
		name: "Xarelto",
		commonUse: "Blood thinner",
		strengths: ["Xarelto TAB 10MG", "Xarelto TAB 20MG"],
		defaultStrength: "Xarelto TAB 20MG",
		groups: ["cardiac", "other"],
		january: {
			amount: 15,
			phase: "Initial"
		},
		april: {
			amount: 15,
			phase: "Initial"
		},
		monthly: true
	}),
	drug({
		id: "amlodipine",
		name: "Amlodipine",
		commonUse: "Blood pressure",
		strengths: ["Amlodipine BES TAB 5MG", "Amlodipine BES TAB 10MG"],
		defaultStrength: "Amlodipine BES TAB 5MG",
		groups: ["cardiac", "other"],
		tier: 1,
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	}),
	drug({
		id: "metoprolol",
		name: "Metoprolol",
		commonUse: "Blood pressure / heart",
		strengths: ["Metoprolol SUCC TAB 25MG", "Metoprolol SUCC TAB 50MG"],
		defaultStrength: "Metoprolol SUCC TAB 25MG",
		groups: ["cardiac", "other"],
		tier: 1,
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	}),
	drug({
		id: "sertraline",
		name: "Sertraline",
		commonUse: "Depression / anxiety",
		strengths: ["Sertraline HCL TAB 50MG", "Sertraline HCL TAB 100MG"],
		defaultStrength: "Sertraline HCL TAB 50MG",
		groups: ["other"],
		tier: 1,
		january: {
			amount: 0,
			phase: "Initial"
		},
		april: {
			amount: 0,
			phase: "N/A"
		}
	})
];
var DRUG_BY_ID = Object.fromEntries(DRUGS.map((d) => [d.id, d]));
var RECORDED_DRUG_IDS = [
	"eliquis",
	"metformin",
	"jardiance",
	"atorvastatin",
	"lisinopril",
	"gabapentin",
	"omeprazole",
	"albuterol",
	"levothyroxine"
];
function recordedMedications() {
	return RECORDED_DRUG_IDS.map((id) => {
		const drug = DRUG_BY_ID[id];
		return {
			uid: `rec-${id}`,
			drugId: id,
			strength: drug.defaultStrength,
			frequency: drug.defaultFrequency,
			quantity: drug.defaultQuantity,
			conditions: [...drug.defaultConditions]
		};
	});
}
function csnpFromMeds(meds) {
	return meds.some((med) => CSNP_DRUGS.has(med.drugId) || med.conditions.some((c) => CSNP_CONDITIONS.has(c)));
}
var MONTHS = [
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
	"December"
];
function monthCost(drug, month, covered) {
	if (!covered) {
		if (month === 0 || month === 6) return {
			amount: drug.january.amount || Math.round(drug.fullCost ?? 0),
			phase: "Initial"
		};
		return {
			amount: 0,
			phase: "N/A"
		};
	}
	if (month === 0) return drug.january;
	if (month === 3) return drug.april;
	if (drug.monthly) return {
		amount: drug.january.amount,
		phase: "Initial"
	};
	if (month === 6 || month === 9) return { ...drug.january };
	return {
		amount: 0,
		phase: "N/A"
	};
}
var FEATURES$1 = {
	dental: true,
	hearing: true,
	otc: true,
	transportation: true,
	fitness: true,
	chiropractic: true,
	additional: true,
	partBFlex: false,
	rx: true,
	hospital: true,
	vision: true,
	giveback: false
};
function plan(partial) {
	const type = partial.type;
	const giveback = partial.giveback ?? 0;
	const transportation = partial.transportation ?? "Not covered";
	const dental = partial.dental ?? "$0";
	const features = {
		...FEATURES$1,
		giveback: giveback > 0,
		transportation: transportation !== "Not covered",
		dental: dental !== "$0" && dental !== "Not covered",
		partBFlex: giveback > 0,
		...partial.features
	};
	return {
		id: partial.id,
		contract: partial.contract ?? partial.id,
		name: partial.name,
		type,
		product: partial.product ?? "MAPD",
		carrier: partial.carrier,
		stars: partial.stars ?? 4,
		premium: partial.premium ?? 0,
		premium2026: partial.premium2026,
		annualWithoutMeds: partial.annualWithoutMeds ?? (partial.premium ?? 0) * 12,
		annualWithMeds: partial.annualWithMeds ?? (partial.premium ?? 0) * 12,
		pcp: partial.pcp ?? 0,
		specialist: partial.specialist ?? "$0",
		moopIn: partial.moopIn === void 0 ? 4500 : partial.moopIn,
		moopCombined: partial.moopCombined ?? null,
		moopOon: partial.moopOon ?? null,
		partB: partial.partB ?? 0,
		dental,
		vision: partial.vision ?? "$0",
		otc: partial.otc ?? "$0",
		hearing: partial.hearing ?? "$0",
		transportation,
		fitness: partial.fitness ?? true,
		giveback,
		giveback2026: partial.giveback2026,
		medicalDeductible: partial.medicalDeductible ?? 0,
		drugDeductible: partial.drugDeductible ?? 0,
		drugDeductibleNote: partial.drugDeductibleNote ?? "",
		appointed: partial.appointed ?? false,
		commissionable: partial.commissionable ?? true,
		allowsOon: partial.allowsOon ?? (type === "PPO" || type === "RPPO"),
		coveredOf9: partial.coveredOf9 ?? 8,
		amended: partial.amended ?? false,
		blockedByMeds: partial.blockedByMeds ?? false,
		rank: partial.rank,
		catastrophic: partial.catastrophic ?? 2400,
		features
	};
}
var PLANS = [
	plan({
		id: "273788",
		contract: "H1019-001-000",
		name: "CareOne Plus (HMO-POS)",
		carrier: "CarePlus",
		type: "HMO-POS",
		rank: 1,
		stars: 4.5,
		annualWithMeds: 1536,
		specialist: "$0",
		moopIn: 750,
		moopCombined: 750,
		partB: 108,
		dental: "$0",
		vision: "$450",
		otc: "$840",
		hearing: "$0",
		transportation: "50 trips",
		giveback: 9,
		appointed: true,
		coveredOf9: 8
	}),
	plan({
		id: "273814",
		contract: "H1609-020-000",
		name: "Aetna Medicare Select (HMO)",
		carrier: "Aetna Medicare",
		type: "HMO",
		rank: 2,
		stars: 4,
		annualWithMeds: 2104,
		moopIn: 3400,
		dental: "$3,000",
		vision: "$300",
		otc: "$150",
		transportation: "24 trips"
	}),
	plan({
		id: "273815",
		contract: "H5521-033-000",
		name: "Aetna Medicare Signature (PPO)",
		carrier: "Aetna Medicare",
		type: "PPO",
		rank: 3,
		stars: 4,
		annualWithMeds: 2339,
		specialist: "$0–$60",
		moopIn: 7150,
		moopCombined: 10750,
		dental: "$500",
		vision: "$100",
		hearing: "$0",
		transportation: "Not covered",
		fitness: true,
		commissionable: false,
		coveredOf9: 8,
		features: {
			...FEATURES$1,
			transportation: false,
			dental: true,
			hearing: false
		}
	}),
	plan({
		id: "273816",
		contract: "H1019-065-000",
		name: "CareFree Giveback (HMO)",
		carrier: "CarePlus",
		type: "HMO",
		rank: 4,
		stars: 4,
		annualWithMeds: 1680,
		specialist: "$20",
		moopIn: 5e3,
		partB: 882,
		dental: "$0",
		hearing: "$0",
		giveback: 73.5,
		transportation: "12 trips",
		amended: true,
		appointed: true
	}),
	plan({
		id: "273817",
		contract: "H1032-196-000",
		name: "Wellcare Value (HMO)",
		carrier: "Wellcare",
		type: "HMO",
		rank: 5,
		stars: 3.5,
		annualWithMeds: 1740,
		specialist: "$5",
		moopIn: 3900,
		vision: "$400",
		otc: "$200",
		transportation: "24 trips",
		blockedByMeds: true,
		features: {
			...FEATURES$1,
			dental: false,
			transportation: true
		}
	}),
	plan({
		id: "273818",
		contract: "H1032-195-000",
		name: "Wellcare Giveback (HMO-POS)",
		carrier: "Wellcare",
		type: "HMO-POS",
		rank: 6,
		stars: 3.5,
		annualWithMeds: 5448,
		specialist: "$15",
		moopIn: 5e3,
		partB: 1963,
		dental: "$2,000",
		vision: "$200",
		giveback: 163.6,
		transportation: "36 trips"
	}),
	plan({
		id: "273809",
		contract: "H1019-135-000",
		name: "CareFree Platinum Giveback (HMO-POS)",
		carrier: "CarePlus",
		type: "HMO-POS",
		rank: 7,
		stars: 4.5,
		annualWithMeds: 2152,
		specialist: "$25",
		moopIn: 3400,
		moopCombined: 3400,
		dental: "Schedule",
		vision: "$200",
		otc: "$180",
		transportation: "26 trips",
		giveback: 155,
		giveback2026: 148,
		drugDeductible: 700,
		drugDeductibleNote: "Excludes tiers 1, 2 and 3",
		appointed: true
	}),
	plan({
		id: "273819",
		contract: "H1019-148-000",
		name: "CareFree Essential (HMO-POS)",
		carrier: "CarePlus",
		type: "HMO-POS",
		rank: 8,
		stars: 4,
		annualWithMeds: 1420,
		specialist: "$10",
		moopIn: 4900,
		dental: "$0",
		vision: "$150",
		giveback: 40,
		transportation: "12 trips"
	}),
	plan({
		id: "273820",
		contract: "H1036-062-000",
		name: "Humana Gold Plus H1036-062C (HMO)",
		carrier: "Humana",
		type: "HMO",
		rank: 9,
		stars: 4,
		annualWithMeds: 1764,
		specialist: "$5",
		moopIn: 3200,
		dental: "$3,000",
		vision: "$300",
		otc: "$300",
		hearing: "$0",
		transportation: "50 trips",
		appointed: true,
		drugDeductible: 700,
		drugDeductibleNote: "Excludes tiers 1, 2 and 3"
	}),
	plan({
		id: "273876",
		contract: "H1036-305-000",
		name: "Humana Gold Plus Giveback (HMO)",
		carrier: "Humana",
		type: "HMO",
		rank: 10,
		stars: 4.5,
		annualWithMeds: 1908,
		moopIn: 3850,
		partB: 1776,
		dental: "$1,500",
		vision: "$200",
		otc: "$400",
		transportation: "24 trips",
		giveback: 148,
		giveback2026: 140,
		appointed: true,
		coveredOf9: 8
	}),
	plan({
		id: "273821",
		contract: "H5216-311-000",
		name: "HumanaChoice Giveback (PPO)",
		carrier: "Humana",
		type: "PPO",
		rank: 11,
		stars: 4,
		annualWithMeds: 1640,
		specialist: "$35",
		moopIn: 5900,
		moopCombined: 8900,
		dental: "$750",
		vision: "$150",
		giveback: 20,
		transportation: "12 trips",
		amended: true
	}),
	plan({
		id: "273822",
		contract: "H5216-068-000",
		name: "HumanaChoice (PPO)",
		carrier: "Humana",
		type: "PPO",
		rank: 12,
		stars: 3.5,
		annualWithMeds: 1888,
		specialist: "$40",
		moopIn: 6100,
		moopCombined: 6100,
		vision: "$100",
		transportation: "Not covered",
		blockedByMeds: true,
		features: {
			...FEATURES$1,
			transportation: false,
			dental: false,
			hearing: false
		}
	}),
	plan({
		id: "273823",
		contract: "H7284-008-000",
		name: "HumanaChoice (PPO)",
		carrier: "Humana",
		type: "PPO",
		rank: 13,
		stars: 3.5,
		premium: 52,
		premium2026: 48,
		annualWithoutMeds: 624,
		annualWithMeds: 1604,
		specialist: "$35",
		moopIn: 6200,
		moopCombined: 6200,
		vision: "$200",
		medicalDeductible: 0,
		drugDeductible: 700,
		drugDeductibleNote: "Excludes tiers 1, 2 and 3",
		transportation: "Not covered",
		amended: true,
		features: {
			...FEATURES$1,
			transportation: false
		}
	}),
	plan({
		id: "273824",
		contract: "R5826-005-000",
		name: "HumanaChoice R5826-005 (Regional PPO)",
		carrier: "Humana",
		type: "RPPO",
		rank: 14,
		stars: 3.5,
		premium: 161,
		premium2026: 149,
		annualWithoutMeds: 1932,
		annualWithMeds: 4569,
		specialist: "$45",
		moopIn: 6700,
		moopCombined: 1e4,
		dental: "$750",
		vision: "$100",
		transportation: "Not covered",
		medicalDeductible: 750,
		features: {
			...FEATURES$1,
			transportation: false,
			dental: true
		}
	}),
	plan({
		id: "273829",
		contract: "273829",
		name: "Devoted Health Core (HMO)",
		carrier: "Devoted Health",
		type: "HMO",
		rank: 15,
		stars: 4.5,
		annualWithMeds: 1288,
		moopIn: 1625,
		moopCombined: 0,
		dental: "$3,000 allowance",
		vision: "$300",
		otc: "$250",
		hearing: "Covered",
		transportation: "24 trips",
		giveback: 1.5,
		drugDeductible: 0,
		coveredOf9: 9
	}),
	plan({
		id: "273825",
		contract: "273825",
		name: "Florida Blue Medicare Premier (HMO)",
		carrier: "Florida Blue Medicare",
		type: "HMO",
		rank: 16,
		stars: 4,
		annualWithMeds: 2010,
		specialist: "$15",
		moopIn: 4500,
		dental: "$1,000",
		vision: "$150",
		otc: "$120",
		transportation: "24 trips"
	}),
	plan({
		id: "273826",
		contract: "273826",
		name: "HealthSun MediMax Plus (HMO)",
		carrier: "HealthSun",
		type: "HMO",
		rank: 17,
		stars: 4.5,
		annualWithMeds: 1396,
		specialist: "$5",
		moopIn: 3400,
		dental: "$2,000",
		vision: "$250",
		otc: "$300",
		transportation: "48 trips",
		appointed: true,
		coveredOf9: 9
	}),
	plan({
		id: "273827",
		contract: "273827",
		name: "AARP Medicare Advantage (HMO-POS)",
		carrier: "UnitedHealthcare",
		type: "HMO-POS",
		rank: 18,
		stars: 4,
		annualWithMeds: 2210,
		specialist: "$15",
		moopIn: 3900,
		dental: "$1,500",
		vision: "$300",
		otc: "$200",
		transportation: "24 trips",
		giveback: 12
	}),
	plan({
		id: "pdp-wellcare",
		contract: "S4802-101",
		name: "Wellcare Medicare Rx Value (PDP)",
		carrier: "Wellcare",
		type: "HMO",
		product: "PDP",
		rank: 30,
		stars: 3.5,
		premium: 18.4,
		annualWithoutMeds: 221,
		annualWithMeds: 980,
		moopIn: null,
		dental: "Not covered",
		vision: "Not covered",
		transportation: "Not covered",
		fitness: false,
		drugDeductible: 590,
		features: {
			...FEATURES$1,
			dental: false,
			vision: false,
			hearing: false,
			otc: false,
			transportation: false,
			fitness: false,
			hospital: false,
			chiropractic: false,
			additional: false
		}
	}),
	plan({
		id: "supp-g",
		contract: "Plan G",
		name: "Aetna Medicare Supplement Plan G",
		carrier: "Aetna Medicare",
		type: "PPO",
		product: "SUPP",
		rank: 31,
		stars: 0,
		premium: 146,
		annualWithoutMeds: 1752,
		annualWithMeds: 1752,
		moopIn: 0,
		dental: "Not covered",
		vision: "Not covered",
		transportation: "Not covered",
		fitness: false,
		features: {
			...FEATURES$1,
			rx: false,
			dental: false,
			vision: false,
			hearing: false,
			otc: false,
			transportation: false,
			fitness: false,
			giveback: false,
			additional: false,
			partBFlex: false
		}
	}),
	plan({
		id: "ma-humana",
		contract: "H1036-014-000",
		name: "Humana Gold Plus (HMO)",
		carrier: "Humana",
		type: "HMO",
		product: "MA",
		rank: 32,
		premium: 0,
		annualWithoutMeds: 0,
		annualWithMeds: 0,
		moopIn: 3900,
		dental: "$1,000",
		vision: "$150",
		transportation: "24 trips",
		features: {
			...FEATURES$1,
			rx: false
		}
	}),
	plan({
		id: "csnp-careone",
		contract: "H1019-080-000",
		name: "CareOne Chronic (HMO C-SNP)",
		carrier: "CarePlus",
		type: "HMO",
		product: "SNP",
		rank: 2,
		stars: 4,
		annualWithMeds: 980,
		specialist: "$0",
		moopIn: 1500,
		dental: "$2,000",
		vision: "$300",
		otc: "$500",
		transportation: "48 trips",
		appointed: true,
		coveredOf9: 9
	}),
	plan({
		id: "hi-select",
		contract: "HI-220",
		name: "Hospital Indemnity Select",
		carrier: "Aetna Medicare",
		type: "HMO",
		product: "HI",
		rank: 40,
		stars: 0,
		premium: 28,
		annualWithoutMeds: 336,
		annualWithMeds: 336,
		moopIn: null,
		transportation: "Not covered",
		fitness: false,
		features: {
			...FEATURES$1,
			rx: false,
			dental: false,
			vision: false,
			hearing: false,
			otc: false,
			transportation: false,
			fitness: false,
			hospital: true
		}
	}),
	plan({
		id: "dental-plus",
		contract: "DV-14",
		name: "Standalone Dental Plus",
		carrier: "Florida Blue Medicare",
		type: "HMO",
		product: "DENTAL",
		rank: 41,
		stars: 0,
		premium: 32,
		annualWithoutMeds: 384,
		annualWithMeds: 384,
		moopIn: null,
		dental: "$1,500",
		transportation: "Not covered",
		fitness: false,
		features: {
			...FEATURES$1,
			rx: false,
			hospital: false,
			transportation: false,
			fitness: false,
			dental: true
		}
	}),
	plan({
		id: "vision-routine",
		contract: "VS-09",
		name: "Routine Vision",
		carrier: "UnitedHealthcare",
		type: "HMO",
		product: "VISION",
		rank: 42,
		stars: 0,
		premium: 12,
		annualWithoutMeds: 144,
		annualWithMeds: 144,
		moopIn: null,
		vision: "$200",
		transportation: "Not covered",
		fitness: false,
		features: {
			...FEATURES$1,
			rx: false,
			hospital: false,
			transportation: false,
			fitness: false,
			vision: true
		}
	}),
	plan({
		id: "hearing-aid",
		contract: "HR-03",
		name: "Hearing Aid Benefit",
		carrier: "Humana",
		type: "HMO",
		product: "HEARING",
		rank: 43,
		stars: 0,
		premium: 15,
		annualWithoutMeds: 180,
		annualWithMeds: 180,
		moopIn: null,
		hearing: "$1,000",
		transportation: "Not covered",
		fitness: false,
		features: {
			...FEATURES$1,
			rx: false,
			hospital: false,
			transportation: false,
			fitness: false,
			hearing: true
		}
	})
];
var PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p]));
var BRANDS = [
	"Aetna Medicare",
	"CarePlus",
	"Devoted Health",
	"Florida Blue Medicare",
	"HealthSun",
	"Humana",
	"UnitedHealthcare",
	"Wellcare"
];
var PRODUCT_FILTERS = [
	{
		id: "MAPD",
		label: "Medicare Advantage / Part D"
	},
	{
		id: "PDP",
		label: "Part D"
	},
	{
		id: "SUPP",
		label: "Medicare Supplement"
	},
	{
		id: "MA",
		label: "Medicare Advantage"
	},
	{
		id: "SNP",
		label: "Special Needs"
	},
	{
		id: "HI",
		label: "Hospital Indemnity"
	},
	{
		id: "DENTAL",
		label: "Dental"
	},
	{
		id: "VISION",
		label: "Vision"
	},
	{
		id: "HEARING",
		label: "Hearing"
	}
];
var COLUMN_OPTIONS = [
	{
		id: "premium",
		label: "Monthly premium"
	},
	{
		id: "annual",
		label: "Annual cost"
	},
	{
		id: "copays",
		label: "Co-pays"
	},
	{
		id: "moop",
		label: "Max out-of-pocket"
	},
	{
		id: "benefits",
		label: "Annual benefits"
	},
	{
		id: "deductible",
		label: "Deductible"
	},
	{
		id: "giveback",
		label: "Part B giveback"
	},
	{
		id: "stars",
		label: "Star rating"
	}
];
var COMPARE_LEFT = "273829";
var COMPARE_RIGHT = "273809";
var DRUG_SHOWCASE = "273876";
var XRAY_PLAN = "273788";
var CSNP_PLAN = "csnp-careone";
function money(n, mode = "auto") {
	const digits = mode === "premium" ? 2 : mode === "whole" ? 0 : Number.isInteger(n) ? 0 : 2;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(n);
}
function premiumOf(plan, year) {
	if (year === 2026 && plan.premium2026 != null) return plan.premium2026;
	return plan.premium;
}
function givebackOf(plan, year) {
	if (year === 2026 && plan.giveback2026 != null) return plan.giveback2026;
	return plan.giveback;
}
function usesDrugs(plan) {
	return plan.product === "MAPD" || plan.product === "PDP" || plan.product === "SNP";
}
function annualCost(plan, meds, year, extraHelp, pharmacy) {
	if (!usesDrugs(plan) || meds === 0) {
		const base = plan.annualWithoutMeds;
		return year === 2026 ? Math.round(base * .97) : base;
	}
	let drug = Math.max(0, plan.annualWithMeds - plan.annualWithoutMeds);
	if (pharmacy === "yes") drug = Math.round(drug * 1.06);
	if (pharmacy === "no") drug = Math.round(drug * 1.12);
	if (extraHelp === "yes") drug = Math.round(drug * .3);
	let total = plan.annualWithoutMeds + drug;
	if (year === 2026) total = Math.round(total * .97);
	return total;
}
function drugPortion(plan, meds, year, extraHelp, pharmacy) {
	if (!usesDrugs(plan) || meds === 0) return 0;
	return Math.max(0, annualCost(plan, meds, year, extraHelp, pharmacy) - (year === 2026 ? Math.round(plan.annualWithoutMeds * .97) : plan.annualWithoutMeds));
}
function isCovered(plan, drugId) {
	const drug = DRUG_BY_ID[drugId];
	if (!drug) return false;
	if (drug.notOnFormulary && plan.coveredOf9 < 9) return false;
	return true;
}
function coverage(plan, meds) {
	const uncovered = meds.filter((med) => !isCovered(plan, med.drugId));
	return {
		covered: meds.length - uncovered.length,
		total: meds.length,
		uncovered
	};
}
function planCode(plan) {
	return /^[HRS]\d/.test(plan.contract) || plan.contract.startsWith("Plan") ? plan.contract : `ID ${plan.id}`;
}
function hasFeature(plan, flag) {
	switch (flag) {
		case "fiveStar": return plan.stars >= 4.5;
		case "giveback": return plan.giveback > 0;
		default: return plan.features[flag];
	}
}
function premiumBand(premium, band) {
	if (band === "under20") return premium < 20;
	if (band === "mid") return premium >= 30 && premium <= 60;
	return premium > 60;
}
function policyMatch(plan, policy) {
	if (policy === "HMO") return plan.type === "HMO" || plan.type === "HMO-POS";
	if (policy === "PPO") return plan.type === "PPO";
	return plan.type === "RPPO";
}
function visiblePlans(filters, year) {
	const q = filters.query.trim().toLowerCase();
	return PLANS.filter((plan) => {
		if (filters.products.length && !filters.products.includes(plan.product)) return false;
		if (filters.brands.length && !filters.brands.includes(plan.carrier)) return false;
		if (filters.premiums.length && !filters.premiums.some((band) => premiumBand(premiumOf(plan, year), band))) return false;
		if (filters.policies.length && !filters.policies.some((policy) => policyMatch(plan, policy))) return false;
		const hasDed = plan.medicalDeductible > 0 || plan.drugDeductible > 0;
		if (filters.deductible === "yes" && !hasDed) return false;
		if (filters.deductible === "no" && hasDed) return false;
		if (filters.appointedOnly && !plan.appointed) return false;
		if (filters.amendedOnly && !plan.amended) return false;
		if (filters.features.some((flag) => !hasFeature(plan, flag))) return false;
		if (q) {
			if (!`${plan.name} ${plan.contract} ${plan.carrier} ${plan.id}`.toLowerCase().includes(q)) return false;
		}
		return true;
	});
}
function sortPlans(plans, sort, year, meds, extraHelp, pharmacy) {
	const list = [...plans];
	const cost = (plan) => annualCost(plan, meds, year, extraHelp, pharmacy);
	if (sort === "premium") list.sort((a, b) => premiumOf(a, year) - premiumOf(b, year));
	else if (sort === "annual") list.sort((a, b) => cost(a) - cost(b));
	else if (sort === "stars") list.sort((a, b) => b.stars - a.stars);
	else if (sort === "moop") list.sort((a, b) => (a.moopIn ?? 99999) - (b.moopIn ?? 99999));
	else list.sort((a, b) => a.rank - b.rank);
	return list;
}
function benefitLine(plan) {
	return [
		`Dental ${plan.dental}`,
		`Vision ${plan.vision}`,
		`OTC ${plan.otc}`,
		plan.transportation === "Not covered" ? "No transport" : plan.transportation,
		plan.fitness ? "Fitness" : "No fitness"
	].join(" · ");
}
function moopLine(plan) {
	const parts = [];
	if (plan.moopIn != null) parts.push(`In ${money(plan.moopIn)}`);
	if (plan.moopCombined != null) parts.push(`Combined ${money(plan.moopCombined)}`);
	if (plan.moopOon != null) parts.push(`Out ${money(plan.moopOon)}`);
	return parts.join(" · ") || "—";
}
function searchDirectory(input) {
	const tokens = [
		input.first,
		input.last,
		input.address,
		input.city,
		input.npi,
		input.facility
	].join(" ").trim().toLowerCase();
	if (input.mode !== "name" && tokens.replace(/\s/g, "").length < 2) return [];
	if ((input.mode === "name" || input.mode === "nameAddress") && `${input.first}${input.last}`.trim().length < 2) return [];
	return DIRECTORY.map((provider) => {
		const locations = provider.locations.filter((loc) => loc.distance <= input.radius).sort((a, b) => a.distance - b.distance);
		return {
			...provider,
			locations
		};
	}).filter((provider) => provider.locations.length > 0).filter((provider) => {
		if (input.specialty && provider.specialty !== input.specialty) return false;
		if (input.gender && input.gender !== "All" && provider.gender !== input.gender) return false;
		if (input.cityFilter && !provider.locations.some((loc) => loc.city === input.cityFilter)) return false;
		if (input.networkPlanId && !provider.inNetworkPlanIds.includes(input.networkPlanId)) return false;
		const first = input.first.trim().toLowerCase();
		const last = input.last.trim().toLowerCase();
		const address = `${input.address} ${input.city}`.trim().toLowerCase();
		const facility = input.facility.trim().toLowerCase();
		const npi = input.npi.replace(/\D/g, "");
		if (input.mode === "name" || input.mode === "nameAddress") {
			const blob = `${provider.first} ${provider.last} ${provider.name}`.toLowerCase();
			if (first && !blob.includes(first)) return false;
			if (last && !blob.includes(last)) return false;
			if (input.mode === "nameAddress" && address.length >= 2) {
				const loc = provider.locations.some((item) => item.line.toLowerCase().includes(address) || item.city.toLowerCase().includes(address));
				const lead = provider.leadAddress.toLowerCase().includes(address);
				if (!loc && !lead) return false;
			}
		}
		if (input.mode === "address") {
			if (address.length < 2) return false;
			const loc = provider.locations.some((item) => `${item.line} ${item.city}`.toLowerCase().includes(address));
			const lead = provider.leadAddress.toLowerCase().includes(address);
			if (!loc && !lead) return false;
		}
		if (input.mode === "npi") {
			if (npi.length < 2) return false;
			if (!provider.npi.includes(npi)) return false;
		}
		if (input.mode === "facility") {
			if (facility.length < 2) return false;
			if (provider.kind !== "organization") return false;
			if (!provider.name.toLowerCase().includes(facility)) return false;
		}
		return true;
	}).sort((a, b) => a.locations[0].distance - b.locations[0].distance);
}
function facilitySuggestions(query) {
	const q = query.trim().toLowerCase();
	if (q.length < 2) return [];
	return DIRECTORY.filter((provider) => provider.kind === "organization" && provider.name.toLowerCase().includes(q)).slice(0, 6);
}
function drugSuggestions(query) {
	const q = query.trim().toLowerCase();
	if (q.length < 2) return [];
	return Object.values(DRUG_BY_ID).filter((drug) => drug.name.toLowerCase().includes(q) || drug.strengths.some((s) => s.toLowerCase().includes(q))).slice(0, 8);
}
function makeCode(zip) {
	if (zip === "33498") return "IMFMMGOW";
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
	let hash = 0;
	for (const char of zip) hash = hash * 33 + char.charCodeAt(0) >>> 0;
	let code = "";
	for (let i = 0; i < 8; i += 1) code += alphabet[(hash >> i * 2) % 24];
	return code;
}
function primaryProvider(id) {
	if (!id) return null;
	return DIRECTORY_BY_ID[id] ?? null;
}
function includesPrimary(planId, provider) {
	if (!provider || provider.kind !== "physician") return true;
	return provider.inNetworkPlanIds.includes(planId);
}
function saturniaMiss(input, count) {
	if (count > 0 || input.mode === "npi") return false;
	const blob = `${input.address} ${input.facility} ${input.city}`.toLowerCase();
	return blob.includes("saturnia") || blob.includes("19498");
}
var BEQ_TEXT = "To get started I would like to get your ZIP code, Medicare number and date of birth. I will use this information to access your demographic information and current plan status, as well as any medication and provider information we can access, including from your prior plan enrollment so we can best recommend a plan for you. This is optional. May I proceed?";
var DOCTOR_BANNER = "The following plans don’t include your primary doctor as a PCP. These plans may be a good option for you, but choosing an in-network PCP should save you money.";
var CSNP_WARNING = "Based on the medications provided, the beneficiary maybe eligible for a CSNP policy.";
var UNAVAILABLE_WARNING = "One or more plans will not be available based on the applicant information.";
var NON_FORMULARY = "Any amount you spend for a non-formulary drug is not counted towards the deductible, initial coverage limit or out of pocket costs unless the plan approves a formulary exception. If an exception is approved, the non-formulary drug will be covered.";
var filters = () => ({
	products: ["MAPD"],
	brands: [],
	premiums: [],
	policies: [],
	deductible: "any",
	appointedOnly: false,
	amendedOnly: false,
	features: [],
	query: ""
});
var initialData = {
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
	columns: [
		"premium",
		"annual",
		"moop"
	],
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
	columnPicker: false
};
function toggleList(list, value) {
	return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}
var useHelios = create()(persist((set, get) => ({
	...initialData,
	patch: (partial) => set(partial),
	reset: () => set({
		...initialData,
		filters: filters()
	}),
	loadCase: () => set({
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
		filters: filters()
	}),
	issueCode: () => {
		const zip = get().zip;
		if (zip.length === 5) set({ personalCode: makeCode(zip) });
	},
	toggleColumn: (key) => set((state) => {
		if (state.columns.includes(key)) return { columns: state.columns.filter((item) => item !== key) };
		if (state.columns.length >= 3) return {};
		return { columns: [...state.columns, key] };
	}),
	clearColumns: () => set({ columns: [] }),
	toggleProduct: (id) => set((state) => ({ filters: {
		...state.filters,
		products: toggleList(state.filters.products, id)
	} })),
	toggleBrand: (brand) => set((state) => ({ filters: {
		...state.filters,
		brands: toggleList(state.filters.brands, brand)
	} })),
	togglePremium: (band) => set((state) => ({ filters: {
		...state.filters,
		premiums: toggleList(state.filters.premiums, band)
	} })),
	togglePolicy: (band) => set((state) => ({ filters: {
		...state.filters,
		policies: toggleList(state.filters.policies, band)
	} })),
	toggleFeature: (flag) => set((state) => ({ filters: {
		...state.filters,
		features: toggleList(state.filters.features, flag)
	} })),
	clearFilters: () => set((state) => ({ filters: {
		...filters(),
		query: state.filters.query
	} })),
	saveProvider: (id) => set((state) => {
		if (state.savedProviderIds.includes(id)) return {};
		const physician = DIRECTORY_BY_ID[id]?.kind === "physician";
		return {
			savedProviderIds: [...state.savedProviderIds, id],
			primaryProviderId: state.primaryProviderId ?? (physician ? id : null),
			personalCode: state.personalCode || makeCode(state.zip)
		};
	}),
	removeProvider: (id) => set((state) => {
		const saved = state.savedProviderIds.filter((item) => item !== id);
		let primary = state.primaryProviderId;
		if (primary === id) primary = saved.find((item) => DIRECTORY_BY_ID[item]?.kind === "physician") ?? null;
		return {
			savedProviderIds: saved,
			primaryProviderId: primary
		};
	}),
	makePrimary: (id) => set({ primaryProviderId: id }),
	addMed: (med) => set((state) => ({
		medications: [...state.medications.filter((item) => item.uid !== med.uid), med],
		personalCode: state.personalCode || makeCode(state.zip)
	})),
	removeMed: (uid) => set((state) => ({ medications: state.medications.filter((item) => item.uid !== uid) })),
	toggleCompare: (planId) => set((state) => {
		if (state.compareIds.includes(planId)) return { compareIds: state.compareIds.filter((id) => id !== planId) };
		return { compareIds: [...state.compareIds, planId].slice(-2) };
	})
}), {
	name: "helios-case-v1",
	skipHydration: true
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className, alt = "", draw = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		role: "img",
		"aria-label": alt || void 0,
		"aria-hidden": alt ? void 0 : true,
		className: cn("helios-mark", draw && "helios-draw", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "15.25",
				className: "fill-bg stroke-line",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				pathLength: "100",
				d: "M1 16.7 H7.4 L9.3 13.7 L11.5 16.7 L13.4 20.8 L16 6.6 L18.7 22.6 L21.1 16.7 L23.2 13.6 L25.2 16.7 H31",
				fill: "none",
				className: "helios-trace stroke-fg",
				strokeWidth: "1.7",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16.7",
				r: "1.55",
				className: "fill-gold"
			})
		]
	});
}
function Button({ children, tone = "ghost", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40", tone === "gold" && "bg-gold text-bg hover:bg-gold/90", tone === "ghost" && "border border-line bg-surface text-fg hover:border-gold/50", tone === "quiet" && "text-muted hover:text-fg", className),
		children
	});
}
function Seg({ value, options, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": label,
		className: "flex rounded-full border border-line bg-surface p-1",
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": value === option.id,
			onClick: () => onChange(option.id),
			className: cn("min-h-9 rounded-full px-3 text-sm transition-colors", value === option.id ? "bg-fg text-bg" : "text-muted hover:text-fg"),
			children: option.label
		}, option.id))
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs tracking-wide text-muted uppercase",
			children: label
		}), children]
	});
}
var inputClass = "h-11 w-full rounded-xl border border-line bg-surface-2 px-3 text-sm text-fg outline-none placeholder:text-muted";
function CheckRow({ on, label, hint, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex min-h-11 w-full items-center gap-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-4 shrink-0 place-items-center rounded border", on ? "border-gold bg-gold text-bg" : "border-line bg-transparent"),
			children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 12,
				strokeWidth: 3
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs text-muted",
				children: hint
			}) : null]
		})]
	});
}
function Banner({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-6 text-fg",
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 mt-6 text-xs tracking-wide text-muted uppercase",
		children
	});
}
function Assessment({ store }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "fixed inset-0 z-40 flex flex-col bg-bg xl:static xl:z-auto xl:w-[28rem] xl:border-l xl:border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Needs assessment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Case context"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "quiet",
						onClick: () => store.reset(),
						children: "New session"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "quiet",
						onClick: () => store.patch({ assessmentOpen: false }),
						children: "Close"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line px-5 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
					label: "Assessment section",
					value: store.assessmentSection,
					onChange: (assessmentSection) => store.patch({ assessmentSection }),
					options: [
						{
							id: "basic",
							label: "Basic"
						},
						{
							id: "meds",
							label: "Medications"
						},
						{
							id: "doctors",
							label: "Doctors"
						}
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-5 py-5",
				children: [
					store.assessmentSection === "basic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Basic, { store }) : null,
					store.assessmentSection === "meds" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medications, { store }) : null,
					store.assessmentSection === "doctors" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctors, { store }) : null
				]
			})
		]
	});
}
function Basic({ store }) {
	const ready = store.zip.length === 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Plan year",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				label: "Plan year",
				value: String(store.year),
				onChange: (value) => store.patch({ year: value === "2026" ? 2026 : 2027 }),
				options: [{
					id: "2027",
					label: "2027"
				}, {
					id: "2026",
					label: "2026"
				}]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ZIP code",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					inputMode: "numeric",
					maxLength: 5,
					value: store.zip,
					onChange: (event) => store.patch({ zip: event.target.value.replace(/\D/g, "").slice(0, 5) })
				})
			})
		}),
		store.zip === "33498" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "3 carriers · 44 plans represented"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "The loaded market is 33498."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Medicare number",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					value: store.medicareNumber,
					placeholder: "Optional",
					onChange: (event) => store.patch({ medicareNumber: event.target.value.toUpperCase() })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Date of birth",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputClass,
					value: store.dob,
					placeholder: "mm / dd / yyyy",
					onChange: (event) => store.patch({ dob: event.target.value })
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			className: "mt-5 rounded-2xl border border-line bg-surface px-4 py-4 text-sm leading-6 text-muted",
			children: BEQ_TEXT
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: store.consent === true ? "gold" : "ghost",
				onClick: () => store.patch({ consent: true }),
				children: "Yes, proceed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: store.consent === false ? "gold" : "ghost",
				onClick: () => store.patch({ consent: false }),
				children: "Not now"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm",
			children: "Are you currently enrolled in a Medicare Advantage or Prescription Drug plan?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: store.enrolled === true ? "gold" : "ghost",
				onClick: () => store.patch({ enrolled: true }),
				children: "Yes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: store.enrolled === false ? "gold" : "ghost",
				onClick: () => store.patch({ enrolled: false }),
				children: "No"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "gold",
				disabled: !ready,
				onClick: () => {
					store.issueCode();
					store.patch({
						assessmentOpen: false,
						stage: { name: "plans" }
					});
				},
				children: "View all plans"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.loadCase(),
				children: "Load 33498 case"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs text-muted",
			children: store.consent === true ? "Consent recorded. Enrichment stays optional in this demonstration." : "Consent is not recorded. Medicare number and date of birth were never required for this path."
		})
	] });
}
function Medications({ store }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [drugId, setDrugId] = (0, import_react.useState)("");
	const [strength, setStrength] = (0, import_react.useState)("");
	const [frequency, setFrequency] = (0, import_react.useState)("Every month");
	const [quantity, setQuantity] = (0, import_react.useState)("30");
	const [conditions, setConditions] = (0, import_react.useState)([]);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const suggestions = (0, import_react.useMemo)(() => drugSuggestions(query), [query]);
	const drug = drugId ? DRUG_BY_ID[drugId] : null;
	const groups = CONDITION_GROUPS.filter((group) => !drug || drug.groups.includes(group.id));
	const csnp = csnpFromMeds(store.medications);
	function chooseDrug(id) {
		const next = DRUG_BY_ID[id];
		setDrugId(id);
		setQuery(next.name);
		setStrength(next.defaultStrength);
		setFrequency(next.defaultFrequency);
		setQuantity(String(next.defaultQuantity));
		setConditions([]);
		setEditing(null);
	}
	function toggleCondition(item) {
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
		const med = {
			uid: editing ?? `med-${drug.id}-${Date.now()}`,
			drugId: drug.id,
			strength,
			frequency,
			quantity: qty,
			conditions
		};
		store.addMed(med);
		setEditing(null);
		setDrugId("");
		setQuery("");
		setStrength("");
		setConditions([]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		csnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm",
				children: UNAVAILABLE_WARNING
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm",
				children: CSNP_WARNING
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Medication name",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: inputClass,
				value: query,
				placeholder: "At least 2 characters",
				onChange: (event) => {
					setQuery(event.target.value);
					setDrugId("");
				}
			})
		}),
		suggestions.length > 0 && !drug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 overflow-hidden rounded-xl border border-line",
			children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex min-h-11 w-full items-center justify-between px-3 text-left text-sm hover:bg-surface-2",
				onClick: () => chooseDrug(item.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: item.commonUse
				})]
			}) }, item.id))
		}) : null,
		drug ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Dosage",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputClass,
						value: strength,
						onChange: (event) => setStrength(event.target.value),
						children: drug.strengths.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Refill frequency",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputClass,
						value: frequency,
						onChange: (event) => setFrequency(event.target.value),
						children: FREQUENCIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Quantity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						inputMode: "numeric",
						value: quantity,
						onChange: (event) => setQuantity(event.target.value.replace(/\D/g, ""))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Are you taking this medication for any of these conditions?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: group.label
						}), group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleCondition(item),
							className: cn("mt-1 flex min-h-11 w-full items-center rounded-xl border px-3 text-left text-sm", conditions.includes(item) ? "border-gold text-fg" : "border-line text-muted"),
							children: item
						}, item))]
					}, group.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "gold",
					onClick: commit,
					children: editing ? "Save medication" : "Add medication"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "A typed name is not saved until you add it. Farxiga can be searched and left unsaved."
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Is there a pharmacy you use to fill prescriptions?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						["yes", "Yes"],
						["no", "No"],
						["mail", "Mail order"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: store.pharmacy === id ? "gold" : "ghost",
						onClick: () => store.patch({ pharmacy: id }),
						children: label
					}, id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Do you receive Extra Help / Low Income Subsidy?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						["yes", "Yes"],
						["no", "No"],
						["unknown", "I don't know"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: store.extraHelp === id ? "gold" : "ghost",
						onClick: () => store.patch({ extraHelp: id }),
						children: label
					}, id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: store.medications.map((med) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-line px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: med.strength
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							med.frequency,
							" (",
							med.quantity,
							")",
							med.conditions.length ? ` · ${med.conditions.join(", ")}` : ""
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm text-gold",
							onClick: () => {
								chooseDrug(med.drugId);
								setStrength(med.strength);
								setFrequency(med.frequency);
								setQuantity(String(med.quantity));
								setConditions(med.conditions);
								setEditing(med.uid);
							},
							children: "Edit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm text-muted",
							onClick: () => store.removeMed(med.uid),
							children: "Delete"
						})]
					})]
				})
			}, med.uid))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			onClick: () => {
				recordedMedications().forEach((med) => store.addMed(med));
				if (!store.personalCode) store.issueCode();
			},
			children: "Add the recorded nine"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "gold",
				onClick: () => store.patch({
					assessmentOpen: false,
					stage: { name: "plans" }
				}),
				children: "Update and close"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.patch({ assessmentSection: "basic" }),
				children: "View needs assessment"
			})]
		})
	] });
}
function Doctors({ store }) {
	const saved = store.savedProviderIds.map((id) => DIRECTORY_BY_ID[id]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line px-4 py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "No saved providers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Search providers to locate a current provider or find a new one."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: saved.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-2xl border border-line px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: provider.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: provider.specialty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: store.primaryProviderId === provider.id ? "Primary provider" : "Saved"
					})
				]
			}, provider.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "gold",
				onClick: () => store.patch({
					providerOpen: true,
					providerTab: "search",
					networkPlanId: null
				}),
				children: "Search providers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.loadCase(),
				children: "Load recorded providers"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "gold",
				onClick: () => store.patch({ assessmentOpen: false }),
				children: "Update and close"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.patch({ assessmentSection: "basic" }),
				children: "View needs assessment"
			})]
		})
	] });
}
var COMPARE_ROWS = [
	{
		category: "Costs",
		scope: "Overview",
		label: "Monthly premium",
		a: "$0.00",
		b: "$0.00"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Medical deductible",
		a: "$0",
		b: "$0"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Out-of-network maximum out-of-pocket",
		a: "N/A",
		b: "N/A"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "In-network maximum out-of-pocket",
		a: "$1,625",
		b: "$3,400"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Combined maximum out-of-pocket",
		a: "$0",
		b: "$3,400"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Drug deductible",
		a: "$0",
		b: "$700 (excludes tiers 1, 2 and 3)"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Catastrophic coverage limit",
		a: "$2,400",
		b: "$2,400"
	},
	{
		category: "Costs",
		scope: "Overview",
		label: "Part B giveback",
		a: "Up to $1.50",
		b: "Up to $155.00"
	},
	{
		category: "Acupuncture",
		scope: "In-network",
		label: "Copay",
		a: "$0",
		b: "$20"
	},
	{
		category: "Acupuncture",
		scope: "In-network",
		label: "Visit maximum",
		a: "25 every year",
		b: "25 every year"
	},
	{
		category: "Acupuncture",
		scope: "In-network",
		label: "Prior authorization",
		a: "Required",
		b: "Required"
	},
	{
		category: "Additional services",
		scope: "In-network",
		label: "Fitness benefit copay",
		a: "$0",
		b: "$0"
	},
	{
		category: "Additional services",
		scope: "In-network",
		label: "In-home support services",
		a: "$0",
		b: "$0"
	},
	{
		category: "Ambulance",
		scope: "In-network",
		label: "Air ambulance coinsurance",
		a: "20%",
		b: "20%"
	},
	{
		category: "Ambulance",
		scope: "In-network",
		label: "Prior authorization for air ambulance",
		a: "Required",
		b: "Required"
	},
	{
		category: "Ambulance",
		scope: "Out-of-network",
		label: "Ground ambulance copay",
		a: "$0 to $250",
		b: "$0 to $250"
	},
	{
		category: "Ambulance",
		scope: "Out-of-network",
		label: "Air ambulance coinsurance",
		a: "20%",
		b: "20%"
	},
	{
		category: "Ambulance",
		scope: "Out-of-network",
		label: "Emergency ground",
		a: "$0",
		b: "$0"
	},
	{
		category: "Ambulance",
		scope: "Out-of-network",
		label: "Non-emergency ground",
		a: "$250",
		b: "$250"
	},
	{
		category: "Chiropractic",
		scope: "In-network",
		label: "Medicare-covered copay",
		a: "$0",
		b: "$20"
	},
	{
		category: "Chiropractic",
		scope: "In-network",
		label: "Routine care copay",
		a: "Not covered",
		b: "$20"
	},
	{
		category: "Chiropractic",
		scope: "In-network",
		label: "Routine care maximum",
		a: "—",
		b: "12 every year"
	},
	{
		category: "Chiropractic",
		scope: "In-network",
		label: "Prior authorization",
		a: "Required",
		b: "Required"
	},
	{
		category: "Chiropractic",
		scope: "Out-of-network",
		label: "Medicare-covered copay",
		a: "$35",
		b: "$35"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Model",
		a: "Allowance",
		b: "Schedule"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Allowance",
		a: "Up to $3,000 every year for non-Medicare preventive and comprehensive services. Unused amount expires.",
		b: "No dollar allowance — services pay on the schedule below"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Oral surgery",
		a: "Inside the allowance",
		b: "0% coinsurance, up to 2 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Simple or surgical extraction",
		a: "Inside the allowance",
		b: "0% coinsurance, up to 3 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Extractions for dentures",
		a: "Inside the allowance",
		b: "0% coinsurance, unlimited"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Fillings",
		a: "Inside the allowance",
		b: "0% coinsurance, amalgam or composite"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Periodontal maintenance",
		a: "Inside the allowance",
		b: "0% coinsurance, up to 4 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Anesthesia with a covered service",
		a: "Inside the allowance",
		b: "0% coinsurance, as needed"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Comprehensive oral exam",
		a: "Inside the allowance",
		b: "$0, 1 every 3 years"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Panoramic film",
		a: "Inside the allowance",
		b: "$0, 1 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Bitewing, exams, cleaning",
		a: "Inside the allowance",
		b: "$0, up to 2 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Complete or partial dentures",
		a: "Inside the allowance",
		b: "30% coinsurance, 1 every 5 years"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Crown, adjustment, rebase, reline",
		a: "Inside the allowance",
		b: "30% coinsurance, 1 per year"
	},
	{
		category: "Dental",
		scope: "In-network",
		label: "Excluded",
		a: "Fluoride, cosmetic services, and implants",
		b: "Fluoride, cosmetic services, and implants"
	},
	{
		category: "Emergency",
		scope: "In-network",
		label: "Copay",
		a: "$75",
		b: "$150"
	},
	{
		category: "Emergency",
		scope: "In-network",
		label: "Waived if admitted within 24 hours",
		a: "Yes",
		b: "Yes"
	},
	{
		category: "Emergency",
		scope: "Worldwide",
		label: "Emergency copay",
		a: "$75",
		b: "$150"
	},
	{
		category: "Emergency",
		scope: "Worldwide",
		label: "Emergency transportation",
		a: "$75",
		b: "$250"
	},
	{
		category: "Hearing",
		scope: "In-network",
		label: "Medicare-covered",
		a: "$5",
		b: "$25"
	},
	{
		category: "Hearing",
		scope: "In-network",
		label: "Routine exam",
		a: "$0, 1 every year",
		b: "$0, 1 every year"
	},
	{
		category: "Hearing",
		scope: "In-network",
		label: "Fitting and evaluation",
		a: "$0, 4 every year",
		b: "$0, 4 every year"
	},
	{
		category: "Hearing",
		scope: "In-network",
		label: "Prior authorization and referral",
		a: "Required",
		b: "Required"
	},
	{
		category: "Part B drugs",
		scope: "In-network",
		label: "Chemotherapy coinsurance",
		a: "0% to 20%",
		b: "0% to 20%"
	},
	{
		category: "Part B drugs",
		scope: "In-network",
		label: "Other Part B drugs",
		a: "0% to 20%",
		b: "0% to 20%"
	},
	{
		category: "Part B drugs",
		scope: "Out-of-network",
		label: "Coinsurance",
		a: "20%",
		b: "20%"
	},
	{
		category: "Outpatient rehabilitation",
		scope: "In-network",
		label: "Cardiac",
		a: "$0",
		b: "$25"
	},
	{
		category: "Outpatient rehabilitation",
		scope: "In-network",
		label: "Intensive cardiac",
		a: "$0",
		b: "$25"
	},
	{
		category: "Outpatient rehabilitation",
		scope: "In-network",
		label: "Pulmonary",
		a: "$0",
		b: "$25"
	},
	{
		category: "Outpatient rehabilitation",
		scope: "In-network",
		label: "Prior authorization and referral",
		a: "Required",
		b: "Required"
	},
	{
		category: "Diabetic supplies",
		scope: "In-network",
		label: "Medicare-covered supplies",
		a: "$0",
		b: "$0"
	},
	{
		category: "Diabetic supplies",
		scope: "In-network",
		label: "Therapeutic shoes and inserts",
		a: "$10",
		b: "—"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "Outpatient procedures and tests",
		a: "$0 to $5",
		b: "$0 to $25"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "Lab services",
		a: "$0",
		b: "$0"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "OPH / PCP / specialist / urgent",
		a: "$0 / $5 / $0 / $0",
		b: "$0 / $25 / $25 / $25"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "Diagnostic radiology",
		a: "$0 to $75",
		b: "$0 to $250"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "Therapeutic radiology",
		a: "$0 to $250",
		b: "$0 to $250"
	},
	{
		category: "Diagnostics",
		scope: "In-network",
		label: "Prior authorization and referral",
		a: "Required",
		b: "Required"
	},
	{
		category: "Durable medical equipment",
		scope: "In-network",
		label: "Oxygen and Medicare-covered DME",
		a: "50% coinsurance",
		b: "50% coinsurance"
	},
	{
		category: "Mental health",
		scope: "Out-of-network",
		label: "Individual session",
		a: "$35",
		b: "$35"
	},
	{
		category: "Mental health",
		scope: "Out-of-network",
		label: "Group session",
		a: "$35",
		b: "$35"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Prior authorization and referral",
		a: "Required",
		b: "Required"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Diagnostic colonoscopy",
		a: "$0",
		b: "$150"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Hyperbaric oxygen",
		a: "$0",
		b: "$25"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Mental health",
		a: "$20",
		b: "$250"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Surgery",
		a: "$5",
		b: "$25"
	},
	{
		category: "Outpatient hospital",
		scope: "In-network",
		label: "Observation, per stay",
		a: "$20",
		b: "$0"
	},
	{
		category: "Ambulatory surgical center",
		scope: "In-network",
		label: "Services",
		a: "$0",
		b: "$0 to $150"
	},
	{
		category: "Ambulatory surgical center",
		scope: "In-network",
		label: "Diagnostic colonoscopy",
		a: "$0",
		b: "$0"
	},
	{
		category: "Ambulatory surgical center",
		scope: "In-network",
		label: "Surgery",
		a: "$0",
		b: "$150"
	},
	{
		category: "Ambulatory surgical center",
		scope: "In-network",
		label: "Prior authorization and referral",
		a: "Required",
		b: "Required"
	}
];
var XRAY_FEATURES = [
	{
		key: "rx",
		label: "Rx drugs"
	},
	{
		key: "hospital",
		label: "Hospital and medical"
	},
	{
		key: "dental",
		label: "Dental"
	},
	{
		key: "vision",
		label: "Vision"
	},
	{
		key: "hearing",
		label: "Hearing"
	},
	{
		key: "fitness",
		label: "Fitness"
	},
	{
		key: "otc",
		label: "Over-the-counter"
	},
	{
		key: "transport",
		label: "Transportation"
	},
	{
		key: "giveback",
		label: "Part B giveback"
	}
];
function Xray({ store, plans }) {
	const focusId = store.stage.name === "xray" ? store.stage.focusId : plans[0]?.id;
	const focus = plans.find((plan) => plan.id === focusId) ?? plans[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				tone: "quiet",
				className: "px-0",
				onClick: () => store.patch({ stage: { name: "plans" } }),
				children: "Back to plans"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "X-ray"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[1fr_18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: plans.map((plan) => {
					const annual = annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy);
					const active = focus?.id === plan.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => store.patch({ stage: {
							name: "xray",
							focusId: plan.id
						} }),
						className: cn("rounded-3xl border p-5 text-left", active ? "border-gold bg-surface" : "border-line bg-bg hover:bg-surface"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: plan.carrier
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-xl font-medium",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									planCode(plan),
									" · ",
									store.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 14,
									className: plan.stars >= 4.5 ? "fill-gold text-gold" : "text-muted"
								}), plan.stars ? `${plan.stars.toFixed(1)} out of 5` : "Not rated"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-3xl font-semibold tabular-nums",
								children: money(premiumOf(plan, store.year), "premium")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Monthly premium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm tabular-nums",
								children: ["Estimated annual ", money(annual)]
							})
						]
					}, plan.id);
				})
			}), focus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-3xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-medium",
						children: focus.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: XRAY_FEATURES.map((feature) => {
							const on = feature.key === "rx" ? focus.features.rx : feature.key === "hospital" ? focus.features.hospital : feature.key === "dental" ? focus.features.dental : feature.key === "vision" ? focus.features.vision : feature.key === "hearing" ? focus.features.hearing : feature.key === "fitness" ? focus.features.fitness : feature.key === "otc" ? focus.features.otc : feature.key === "transport" ? focus.features.transportation : focus.features.giveback || focus.giveback > 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-5 place-items-center rounded-full", on ? "bg-gold text-bg" : "border border-line text-transparent"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: on ? "text-fg" : "text-muted",
									children: feature.label
								})]
							}, feature.key);
						})
					})
				]
			}) : null]
		})]
	});
}
function PlanDetail({ store }) {
	if (store.stage.name !== "detail") return null;
	const plan = PLAN_BY_ID[store.stage.planId];
	if (!plan) return null;
	const tab = store.stage.tab;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "quiet",
					className: "px-0",
					onClick: () => store.patch({ stage: { name: "plans" } }),
					children: "Back to plans"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
					label: "Plan detail",
					value: tab,
					onChange: (next) => store.patch({ stage: {
						name: "detail",
						planId: plan.id,
						tab: next
					} }),
					options: [
						{
							id: "summary",
							label: "Plan costs"
						},
						{
							id: "benefits",
							label: "Benefits"
						},
						{
							id: "drugs",
							label: "Drug costs"
						}
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							plan.carrier,
							" · ",
							planCode(plan),
							" · ",
							store.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-semibold tracking-tight",
						children: plan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Premium ",
							money(premiumOf(plan, store.year), "premium"),
							" · Annual",
							" ",
							money(annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy)),
							" · Drug deductible",
							" ",
							money(plan.drugDeductible)
						]
					})
				]
			}),
			tab === "summary" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {
				plan,
				store
			}) : null,
			tab === "benefits" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleBenefits, { plan }) : null,
			tab === "drugs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugCosts, {
				plan,
				store
			}) : null
		]
	});
}
function Summary({ plan, store }) {
	const primary = primaryProvider(store.primaryProviderId);
	const inNetwork = includesPrimary(plan.id, primary);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 grid gap-4 md:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "In-network max",
				value: plan.moopIn == null ? "—" : money(plan.moopIn)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "Combined max",
				value: moopLine(plan)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "Part B giveback",
				value: givebackOf(plan, store.year) ? `Up to ${money(givebackOf(plan, store.year), "auto")}` : "None"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "Medical deductible",
				value: money(plan.medicalDeductible)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "Drug deductible",
				value: plan.drugDeductibleNote ? `${money(plan.drugDeductible)} · ${plan.drugDeductibleNote}` : money(plan.drugDeductible)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
				label: "Catastrophic limit",
				value: money(plan.catastrophic)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-line p-5 md:col-span-3",
				children: [primary?.kind === "physician" ? inNetwork ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [primary.name, " is in network as a PCP."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [primary.name, " — no locations in network."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "No primary doctor on the case."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "gold",
						onClick: () => store.patch({ stage: {
							name: "discovery",
							planId: plan.id
						} }),
						children: "Hold plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => store.patch({
							emailOpen: true,
							emailPlanId: plan.id
						}),
						children: "Email"
					})]
				})]
			})
		]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-lg font-medium tabular-nums",
			children: value
		})]
	});
}
function SingleBenefits({ plan }) {
	const side = plan.id === "273829" ? "a" : plan.id === "273809" ? "b" : null;
	if (!side) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line",
		children: [
			["Primary care", money(plan.pcp)],
			["Specialist", plan.specialist],
			["Dental", plan.dental],
			["Vision", plan.vision],
			["Hearing", plan.hearing],
			["OTC", plan.otc],
			["Transportation", plan.transportation],
			["Fitness", plan.fitness ? "Covered" : "Not covered"],
			["Max out-of-pocket", moopLine(plan)]
		].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between gap-4 px-5 py-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-right",
				children: value
			})]
		}, label))
	});
	const rows = COMPARE_ROWS.filter((row) => side === "a" ? row.a : row.b);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid gap-1 px-5 py-4 text-sm md:grid-cols-[10rem_1fr_1.4fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: row.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.label }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: side === "a" ? row.a : row.b })
			]
		}, `${row.category}-${row.label}`))
	});
}
function DrugCosts({ plan, store }) {
	const meds = store.medications;
	(0, import_react.useEffect)(() => {
		if (!store.selectedDrugId && meds[0]) store.patch({ selectedDrugId: meds[0].drugId });
	}, [meds, store]);
	const selected = store.selectedDrugId ? DRUG_BY_ID[store.selectedDrugId] : null;
	const coveredSelected = selected ? isCovered(plan, selected.id) : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Pharmacy status:",
					" ",
					store.pharmacy === "no" ? "Standard retail" : store.pharmacy === "yes" ? "Preferred retail" : "Preferred retail / mail order"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [
					money(drugPortion(plan, meds.length, store.year, store.extraHelp, store.pharmacy)),
					" estimated annual drug cost",
					meds.length ? ` · ${coverage(plan, meds).covered} of ${coverage(plan, meds).total} covered` : ""
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.patch({
					assessmentOpen: true,
					assessmentSection: "meds"
				}),
				children: "Change pharmacy"
			})]
		}), meds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-3xl border border-line px-5 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-medium",
					children: "No medications in this case"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Add a drug to see tier, prior authorization, and the month-by-month phase."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					tone: "gold",
					onClick: () => store.patch({
						assessmentOpen: true,
						assessmentSection: "meds"
					}),
					children: "Add medications"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 lg:grid-cols-[16rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "overflow-hidden rounded-3xl border border-line",
				children: meds.map((med) => {
					const on = store.selectedDrugId === med.drugId;
					const covered = isCovered(plan, med.drugId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => store.patch({ selectedDrugId: med.drugId }),
						className: cn("flex min-h-14 w-full flex-col items-start justify-center px-4 text-left", on ? "bg-surface-2" : "hover:bg-surface"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: med.strength
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: covered ? "On formulary" : "Not on formulary"
						})]
					}) }, med.uid);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-line p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-medium",
							children: selected.defaultStrength
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid gap-3 text-sm sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Tier",
									value: selected.tier == null ? "—" : `Tier ${selected.tier}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Quantity limits",
									value: selected.ql ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Prior authorization",
									value: selected.pa == null ? "—" : selected.pa ? "Yes" : "No"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Step therapy",
									value: selected.st == null ? "—" : selected.st ? "Yes" : "No"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Estimated full drug cost",
									value: selected.fullCost == null ? "—" : money(selected.fullCost, "auto")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pair, {
									label: "Drug deductible",
									value: money(plan.drugDeductible)
								})
							]
						}),
						!coveredSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: NON_FORMULARY
						}) : null
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Select a drug."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-2",
					children: MONTHS.map((month, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => store.patch({ monthIndex: index }),
						className: cn("min-h-11 shrink-0 rounded-full border px-4 text-sm", store.monthIndex === index ? "border-gold text-fg" : "border-line text-muted"),
						children: month
					}, month))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 divide-y divide-line overflow-hidden rounded-3xl border border-line",
					children: [meds.map((med) => {
						const drug = DRUG_BY_ID[med.drugId];
						const cell = monthCost(drug, store.monthIndex, isCovered(plan, drug.id));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: med.strength }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-muted",
								children: [
									money(cell.amount),
									" ",
									cell.phase
								]
							})]
						}, med.uid);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between bg-surface px-4 py-3 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Total for ", MONTHS[store.monthIndex]] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: money(meds.reduce((sum, med) => {
								const drug = DRUG_BY_ID[med.drugId];
								return sum + monthCost(drug, store.monthIndex, isCovered(plan, drug.id)).amount;
							}, 0))
						})]
					})]
				})
			] })]
		})]
	});
}
function Pair({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs text-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1",
		children: value
	})] });
}
function Compare({ store }) {
	if (store.stage.name !== "compare") return null;
	const left = PLAN_BY_ID[store.stage.left];
	const right = PLAN_BY_ID[store.stage.right];
	if (!left || !right) return null;
	const diffs = COMPARE_ROWS.filter((row) => row.a !== row.b).length;
	let category = "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "quiet",
					className: "px-0",
					onClick: () => store.patch({ stage: { name: "plans" } }),
					children: "Back to plans"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-gold",
					children: [diffs, " differences"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: [left, right].map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "rounded-3xl border border-line p-5 text-left",
					onClick: () => store.patch({ stage: {
						name: "detail",
						planId: plan.id,
						tab: "summary"
					} }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: planCode(plan)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-xl font-medium",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm tabular-nums",
							children: [money(premiumOf(plan, store.year), "premium"), " monthly"]
						})
					]
				}, plan.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-3xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Benefit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: left.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: right.name
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARE_ROWS.map((row) => {
						const showCategory = row.category !== category;
						category = row.category;
						const diff = row.a !== row.b;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: cn("border-b border-line", diff && "bg-gold/5"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
									className: "px-4 py-3 text-left font-normal",
									children: [
										showCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1 block text-xs tracking-wide text-gold uppercase",
											children: row.category
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: row.scope
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block",
											children: row.label
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 align-top",
									children: row.a
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 align-top",
									children: row.b
								})
							]
						}, `${row.category}-${row.scope}-${row.label}`);
					}) })]
				})
			})
		]
	});
}
function Discovery({ store }) {
	if (store.stage.name !== "discovery") return null;
	const plan = PLAN_BY_ID[store.stage.planId];
	if (!plan) return null;
	const primary = primaryProvider(store.primaryProviderId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 pt-10 pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-gold uppercase",
				children: "Held for this session"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-semibold tracking-tight",
				children: plan.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Nothing has been submitted. The recorded session ends at benefit review — this hold is only inside Helios."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 divide-y divide-line border-y border-line text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Personal code",
						value: store.personalCode || "Not issued"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "ZIP",
						value: `${store.zip} · ${store.year}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Plan",
						value: planCode(plan)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Estimated annual",
						value: money(annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Medications",
						value: String(store.medications.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Primary",
						value: primary?.name ?? "None"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => store.patch({ stage: { name: "plans" } }),
						children: "Select another plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => store.patch({ stage: {
							name: "detail",
							planId: plan.id,
							tab: "drugs"
						} }),
						children: "Drug costs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => store.patch({ stage: {
							name: "compare",
							left: plan.id === "273809" ? "273829" : plan.id,
							right: plan.id === "273829" ? "273809" : "273809"
						} }),
						children: "Benefits"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "gold",
						onClick: () => store.patch({
							emailOpen: true,
							emailPlanId: plan.id
						}),
						children: "Email plan"
					})
				]
			})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right",
			children: value
		})]
	});
}
function EmailDialog({ store }) {
	const plan = store.emailPlanId ? PLAN_BY_ID[store.emailPlanId] : null;
	const annual = plan ? annualCost(plan, store.medications.length, store.year, store.extraHelp, store.pharmacy) : 0;
	const subject = `Medicare plan options for ${store.zip || "your ZIP"}`;
	const body = plan ? `Helios case ${store.personalCode || "draft"}\n${plan.name} (${planCode(plan)})\nPremium ${money(premiumOf(plan, store.year), "premium")} · Estimated annual ${money(annual)}\nMedications ${store.medications.length} · ZIP ${store.zip} · ${store.year}\nThis is a demonstration summary, not an enrollment.` : "";
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!store.emailOpen || !plan) return null;
	const href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-bg/80 p-4 md:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Email plan",
			className: "w-full max-w-lg rounded-3xl border border-line bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium",
					children: "Email plan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: subject
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-4 max-h-60 overflow-auto rounded-2xl bg-bg p-4 text-sm whitespace-pre-wrap",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							className: "inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg",
							children: "Open mail"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								navigator.clipboard?.writeText(`${subject}\n\n${body}`).then(() => {
									setCopied(true);
									toast("Copied");
								});
							},
							children: copied ? "Copied" : "Copy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							tone: "quiet",
							onClick: () => store.patch({ emailOpen: false }),
							children: "Close"
						})
					]
				})
			]
		})
	});
}
var FEATURES = [
	{
		id: "fiveStar",
		label: "Five-star rating",
		hint: "4.5 and above"
	},
	{
		id: "giveback",
		label: "Part B giveback"
	},
	{
		id: "dental",
		label: "Dental"
	},
	{
		id: "hearing",
		label: "Hearing coverage"
	},
	{
		id: "otc",
		label: "OTC"
	},
	{
		id: "transportation",
		label: "Transportation"
	},
	{
		id: "fitness",
		label: "Fitness benefits"
	},
	{
		id: "chiropractic",
		label: "Chiropractic care"
	},
	{
		id: "additional",
		label: "Additional services"
	},
	{
		id: "partBFlex",
		label: "Part B flex benefit"
	}
];
var PREMIUMS = [
	{
		id: "under20",
		label: "Under $20"
	},
	{
		id: "mid",
		label: "$30 – $60"
	},
	{
		id: "over60",
		label: "Over $60"
	}
];
var POLICIES = [
	{
		id: "HMO",
		label: "HMO"
	},
	{
		id: "PPO",
		label: "PPO"
	},
	{
		id: "RPPO",
		label: "RPPO"
	}
];
function Filters({ store }) {
	const { filters } = store;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Filter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "quiet",
					className: "px-2",
					onClick: () => store.clearFilters(),
					children: "Clear"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Plan type" }),
			PRODUCT_FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.products.includes(item.id),
				label: item.label,
				onClick: () => store.toggleProduct(item.id)
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Plan features" }),
			FEATURES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.features.includes(item.id),
				label: item.label,
				hint: item.hint,
				onClick: () => store.toggleFeature(item.id)
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Brand" }),
			BRANDS.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.brands.includes(brand),
				label: brand,
				onClick: () => store.toggleBrand(brand)
			}, brand)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Premium" }),
			PREMIUMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.premiums.includes(item.id),
				label: item.label,
				onClick: () => store.togglePremium(item.id)
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Policy type" }),
			POLICIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.policies.includes(item.id),
				label: item.label,
				onClick: () => store.togglePolicy(item.id)
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Deductible" }),
			[
				["any", "Any"],
				["no", "No deductible"],
				["yes", "Has a deductible"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.deductible === id,
				label,
				onClick: () => store.patch({ filters: {
					...filters,
					deductible: id
				} })
			}, id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Appointment" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.appointedOnly,
				label: "Appointed only",
				onClick: () => store.patch({ filters: {
					...filters,
					appointedOnly: !filters.appointedOnly
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				on: filters.amendedOnly,
				label: "Apply amended plans",
				onClick: () => store.patch({ filters: {
					...filters,
					amendedOnly: !filters.amendedOnly
				} })
			})
		]
	});
}
function columnLabel(key, period) {
	if (key === "annual" && period === "monthly") return "Monthly cost";
	return COLUMN_OPTIONS.find((item) => item.id === key)?.label ?? key;
}
function columnValue(plan, key, store) {
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
function PlanGrid({ store, plans }) {
	const primary = primaryProvider(store.primaryProviderId);
	const showDoctorBanner = primary?.kind === "physician" && plans.some((plan) => !includesPrimary(plan.id, primary));
	const csnp = csnpFromMeds(store.medications);
	const blocked = csnp && plans.some((plan) => plan.blockedByMeds);
	const csnpPlan = PLAN_BY_ID[CSNP_PLAN];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-28 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl font-semibold",
					children: ["Plans for ", store.zip || "—"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						plans.length,
						" ",
						plans.length === 1 ? "result" : "results",
						" · ",
						store.year,
						" · 3 carriers, 44 plans in market"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: store.compareIds.length === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "gold",
						onClick: () => store.patch({
							stage: {
								name: "compare",
								left: store.compareIds[0],
								right: store.compareIds[1]
							},
							assessmentOpen: false
						}),
						children: "Compare benefits"
					}) : null
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: store.zip }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: store.medications.length ? `${store.medications.length} medications` : "No medications" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: primary?.kind === "physician" ? "1 doctor" : "No doctor" }),
					store.personalCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						gold: true,
						children: store.personalCode
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [
					showDoctorBanner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, { children: DOCTOR_BANNER }) : null,
					csnp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, { children: CSNP_WARNING }) : null,
					blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, { children: UNAVAILABLE_WARNING }) : null,
					csnp && csnpPlan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-gold uppercase",
								children: "Chronic special needs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: csnpPlan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["Estimated annual ", money(annualCost(csnpPlan, store.medications.length, store.year, store.extraHelp, store.pharmacy))]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => store.patch({
								stage: {
									name: "detail",
									planId: csnpPlan.id,
									tab: "summary"
								},
								assessmentOpen: false
							}),
							children: "Review C-SNP"
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 overflow-hidden rounded-2xl border border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden border-b border-line bg-surface px-5 py-3 text-xs tracking-wide text-muted uppercase md:flex md:items-center md:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1",
							children: "Plan"
						}),
						store.columns.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-40 shrink-0 text-right",
							children: columnLabel(key, store.period)
						}, key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-28 shrink-0" })
					]
				}), plans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-medium",
							children: "No plans match"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: store.zip === "33498" ? "Clear a filter or return to Medicare Advantage / Part D." : "This demonstration catalog is built for 33498."
						}),
						store.zip !== "33498" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							tone: "gold",
							onClick: () => store.patch({ zip: "33498" }),
							children: "Use 33498"
						}) : null
					]
				}) : plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
					plan,
					store,
					primary,
					unavailable: csnp && plan.blockedByMeds
				}, plan.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-xs leading-5 text-muted",
				children: "Demonstration catalog for ZIP 33498, plan year 2027. Figures follow a recorded comparison and are not a live carrier quote or an enrollment."
			})
		]
	});
}
function Chip({ children, gold = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex min-h-9 items-center rounded-full border px-3 text-sm", gold ? "border-gold/40 text-gold" : "border-line text-muted"),
		children
	});
}
function PlanRow({ plan, store, primary, unavailable }) {
	const open = store.expandedId === plan.id;
	const inNetwork = includesPrimary(plan.id, primary);
	const meds = store.medications.length;
	const cover = coverage(plan, store.medications);
	const alternate = store.savedProviderIds.map((id) => DIRECTORY_BY_ID[id]).find((provider) => provider && provider.id !== primary?.id && provider.kind === "physician" && provider.inNetworkPlanIds.includes(plan.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("border-b border-line last:border-b-0", unavailable && "opacity-60"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "min-w-0 flex-1 text-left",
					"aria-expanded": open,
					onClick: () => store.patch({ expandedId: open ? null : plan.id }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-medium",
									children: plan.name
								}),
								!plan.commissionable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: "Non-commissionable"
								}) : null,
								plan.appointed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-gold",
									children: "Appointed"
								}) : null,
								unavailable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-gold",
									children: "Unavailable"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								plan.type,
								" · ",
								plan.carrier,
								" · ",
								planCode(plan),
								" · ",
								store.year
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-center gap-1 text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 12,
									className: plan.stars >= 4.5 ? "fill-gold text-gold" : "text-muted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: plan.stars ? `${plan.stars.toFixed(1)} out of 5` : "Not rated"
								}),
								primary?.kind === "physician" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2",
									children: inNetwork ? "Primary in network" : "Primary not in network"
								}) : null
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:flex md:items-center md:gap-4",
					children: store.columns.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:w-40 md:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted md:hidden",
							children: columnLabel(key, store.period)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tabular-nums",
							children: columnValue(plan, key, store)
						})]
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 md:w-28 md:flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1 px-3",
						"aria-pressed": store.compareIds.includes(plan.id),
						onClick: () => store.toggleCompare(plan.id),
						children: store.compareIds.includes(plan.id) ? "Selected" : "Compare"
					})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 border-t border-line bg-surface px-5 py-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Estimated annual cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-2xl font-semibold tabular-nums",
						children: money(annualCost(plan, meds, store.year, store.extraHelp, store.pharmacy))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["Medical deductible ", money(plan.medicalDeductible)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Drug deductible ",
							money(plan.drugDeductible),
							plan.drugDeductibleNote ? ` (${plan.drugDeductibleNote})` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: [
							"Pharmacy:",
							" ",
							store.pharmacy === "mail" || store.pharmacy === "unset" ? "Mail order preferred" : store.pharmacy === "yes" ? "Retail pharmacy" : "No preferred pharmacy"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 text-sm text-gold",
						onClick: () => store.patch({
							assessmentOpen: true,
							assessmentSection: "meds"
						}),
						children: "Change pharmacy"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Drugs"
				}), meds === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "No medications yet. Annual cost is premium only."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [money(drugPortion(plan, meds, store.year, store.extraHelp, store.pharmacy)), " estimated annual drug cost"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm",
					children: [
						cover.covered,
						" of ",
						cover.total,
						" drugs covered",
						cover.uncovered.length ? ` · ${cover.uncovered.map((med) => med.strength).join(", ")} not on formulary` : ""
					]
				})] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Doctors"
					}),
					plan.allowsOon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "This plan allows out-of-network doctors. Most PPO or PFFS plans have a higher cost share out of network."
					}) : null,
					primary?.kind === "physician" ? inNetwork ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [primary.name, " is in network."]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [primary.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-muted",
							children: "No locations in network"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "No primary doctor saved."
					}),
					alternate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-gold",
						children: [alternate.name, " is in network. You can set them as primary."]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "quiet",
								className: "px-0",
								onClick: () => store.patch({
									providerOpen: true,
									providerTab: "search",
									networkPlanId: plan.id,
									searchMode: "name"
								}),
								children: "Find in-network doctors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => store.patch({
									stage: {
										name: "detail",
										planId: plan.id,
										tab: "drugs"
									},
									selectedDrugId: store.medications[0]?.drugId ?? null,
									assessmentOpen: false
								}),
								children: "Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: unavailable,
								tone: "gold",
								onClick: () => store.patch({
									stage: {
										name: "discovery",
										planId: plan.id
									},
									assessmentOpen: false
								}),
								children: "Hold plan"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => store.patch({
									emailOpen: true,
									emailPlanId: plan.id
								}),
								children: "Email"
							})
						]
					})
				] })
			]
		}) : null]
	});
}
var MODES = [
	{
		id: "name",
		label: "Doctor name",
		hint: "Search by first and/or last name using at least 2 characters."
	},
	{
		id: "nameAddress",
		label: "Doctor name and address",
		hint: "Search by address and first and/or last name using at least 2 characters."
	},
	{
		id: "address",
		label: "Address",
		hint: "Search by street and city."
	},
	{
		id: "npi",
		label: "NPI",
		hint: "Search the 10-digit NPI."
	},
	{
		id: "facility",
		label: "Hospital / facility / medical group",
		hint: "Search an organization name."
	}
];
function Providers({ store }) {
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
		networkPlanId: store.networkPlanId
	});
	const suggestions = store.searchMode === "facility" ? facilitySuggestions(store.facility) : [];
	const miss = saturniaMiss({
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
		networkPlanId: store.networkPlanId
	}, results.length);
	const baptist = store.facility.toLowerCase().includes("baptist");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-bg/80 p-0 md:items-center md:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Providers",
			className: "flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-line bg-surface md:max-h-[90dvh] md:rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
					label: "Provider tabs",
					value: store.providerTab,
					onChange: (providerTab) => store.patch({ providerTab }),
					options: [{
						id: "search",
						label: "Search providers"
					}, {
						id: "saved",
						label: "Saved providers"
					}]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "quiet",
					onClick: () => store.patch({
						providerOpen: false,
						networkPlanId: null
					}),
					children: "Close"
				})]
			}), store.providerTab === "saved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Saved, { store }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 md:grid-cols-[18rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-y-auto border-b border-line p-5 md:border-r md:border-b-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Search mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputClass,
								value: store.searchMode,
								onChange: (event) => store.patch({ searchMode: event.target.value }),
								children: MODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.id,
									children: item.label
								}, item.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: mode.hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [
								store.searchMode === "name" || store.searchMode === "nameAddress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "First name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.first,
										onChange: (event) => store.patch({ first: event.target.value })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.last,
										onChange: (event) => store.patch({ last: event.target.value })
									})
								})] }) : null,
								store.searchMode === "nameAddress" || store.searchMode === "address" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Address",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.address,
										onChange: (event) => store.patch({ address: event.target.value })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.city,
										onChange: (event) => store.patch({ city: event.target.value })
									})
								})] }) : null,
								store.searchMode === "npi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "NPI",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.npi,
										onChange: (event) => store.patch({ npi: event.target.value })
									})
								}) : null,
								store.searchMode === "facility" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Hospital / facility / medical group name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										value: store.facility,
										onChange: (event) => store.patch({ facility: event.target.value })
									})
								}) : null
							]
						}),
						suggestions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 overflow-hidden rounded-xl border border-line",
							children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 w-full px-3 text-left text-sm hover:bg-surface-2",
								onClick: () => store.patch({ facility: item.name }),
								children: item.name
							}) }, item.id))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm",
							children: [
								"Searching within ",
								store.radius,
								" miles of ZIP ",
								store.zip || "—",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-gold",
									onClick: () => store.patch({ radius: store.radius === 25 ? 100 : 25 }),
									children: "Edit"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Specialty",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										value: store.specialty,
										onChange: (event) => store.patch({ specialty: event.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "All"
										}), SPECIALTIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Gender",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										value: store.gender,
										onChange: (event) => store.patch({ gender: event.target.value }),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "All"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Female" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Male" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										value: store.cityFilter,
										onChange: (event) => store.patch({ cityFilter: event.target.value }),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "All"
										}), CITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									tone: "quiet",
									onClick: () => store.patch({
										specialty: "",
										gender: "",
										cityFilter: "",
										networkPlanId: null
									}),
									children: "Clear filters"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-muted uppercase",
									children: "Case leads"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => store.patch({
												searchMode: "name",
												first: "Mushfeka",
												last: "Golawala",
												providerTab: "search"
											}),
											children: "Golawala"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => store.patch({
												searchMode: "name",
												first: "Dwight",
												last: "Ayala"
											}),
											children: "Ayala"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => store.patch({
												searchMode: "facility",
												facility: "Baptist Health Boca Raton",
												first: "",
												last: ""
											}),
											children: "Boca Raton Regional"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted",
									children: "Leads are unverified until a directory record carries an NPI."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 overflow-y-auto p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									results.length,
									" ",
									results.length === 1 ? "result" : "results",
									baptist && results.length > 0 ? " · 8 of 33 in the South Florida network" : "",
									" · Sort by nearest"
								]
							}), store.networkPlanId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gold",
								children: "In-network filter on"
							}) : null]
						}),
						miss ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No directory record at that address." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted",
									children: "Mushfeka Golawala’s NPI 1013151141 is listed at 21644 State Rd 7, Boca Raton — not 19498 Saturnia Lakes Drive."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-3",
									tone: "gold",
									onClick: () => store.patch({
										searchMode: "npi",
										npi: "1013151141"
									}),
									children: "Show the NPI record"
								})
							]
						}) : null,
						results.length === 0 && !miss ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "No providers added yet."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "No results found, please try other search criteria."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: results.map((provider) => {
								const saved = store.savedProviderIds.includes(provider.id);
								const nearest = provider.locations[0];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl border border-line p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium",
													children: provider.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted",
													children: provider.specialty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm",
													children: nearest.line
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-sm text-muted",
													children: [
														nearest.distance.toFixed(1),
														" mi away",
														provider.locations.length > 1 ? ` · + ${provider.locations.length - 1} more locations` : ""
													]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												tone: saved ? "quiet" : "gold",
												disabled: saved,
												onClick: () => store.saveProvider(provider.id),
												children: saved ? "Saved" : "Save"
											})]
										}),
										provider.npi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-xs text-muted",
											children: [
												"NPI ",
												provider.npi,
												provider.npiVerified ? " · NPPES verified" : "",
												provider.formerName ? ` · Former name ${provider.formerName}` : "",
												provider.official ? ` · ${provider.official}` : ""
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted",
											children: "Directory match · NPI not confirmed in this session"
										}),
										provider.leadAddress ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs text-muted",
											children: [
												"Lead address ",
												provider.leadAddress,
												". The directory address above is the one that saves."
											]
										}) : null,
										provider.locations.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-1 text-xs text-muted",
											children: provider.locations.slice(1).map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												loc.line,
												" · ",
												loc.distance.toFixed(1),
												" mi"
											] }, loc.line))
										}) : null
									]
								}, provider.id);
							})
						})
					]
				})]
			})]
		})
	});
}
function Saved({ store }) {
	const saved = store.savedProviderIds.map((id) => DIRECTORY_BY_ID[id]).filter(Boolean);
	if (saved.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: "No providers added yet."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Search providers to locate a current provider or find a new one."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3 overflow-y-auto p-5",
		children: saved.map((provider) => {
			const primary = store.primaryProviderId === provider.id;
			const nearest = provider.locations[0];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-2xl border border-line p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: provider.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: provider.specialty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm",
							children: [nearest.line, provider.locations.length > 1 ? ` + ${provider.locations.length - 1} more locations` : ""]
						}),
						provider.npi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: ["NPI ", provider.npi]
						}) : null
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex min-h-11 items-center text-sm text-gold",
							children: "Primary provider"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => store.makePrimary(provider.id),
							children: "Set as primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							tone: "quiet",
							onClick: () => store.removeProvider(provider.id),
							children: "Remove"
						})]
					})]
				})
			}, provider.id);
		})
	});
}
var STEPS = [
	{
		id: "intake",
		label: "Intake"
	},
	{
		id: "plans",
		label: "Plans"
	},
	{
		id: "xray",
		label: "X-ray"
	},
	{
		id: "providers",
		label: "Providers"
	},
	{
		id: "medications",
		label: "Medications"
	},
	{
		id: "drugs",
		label: "Drug costs"
	},
	{
		id: "benefits",
		label: "Benefits"
	}
];
var COPY = {
	intake: "ZIP and plan year open the market. Medicare number and date of birth stay optional.",
	plans: "Recommended plans for this ZIP. Annual cost stays at the premium until medications are saved.",
	xray: "The same catalog as cards — star rating and nine benefit highlights.",
	providers: "Match a directory record, confirm the NPI, then set one primary.",
	medications: "Strength, quantity, and condition. Saving a drug reprices every plan.",
	drugs: "Tier, prior authorization, step therapy, and the cost by month.",
	benefits: "Two plan IDs, line by line. Gold marks a difference."
};
function HeliosApp() {
	const store = useHelios();
	const [drawMark, setDrawMark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		useHelios.persist.rehydrate();
		const timer = window.setTimeout(() => setDrawMark(false), 1100);
		return () => window.clearTimeout(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key !== "Escape") return;
			const current = useHelios.getState();
			if (current.emailOpen) current.patch({ emailOpen: false });
			else if (current.providerOpen) current.patch({
				providerOpen: false,
				networkPlanId: null
			});
			else if (current.filterSheet) current.patch({ filterSheet: false });
			else if (current.columnPicker) current.patch({ columnPicker: false });
			else if (current.assessmentOpen) current.patch({ assessmentOpen: false });
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const plans = (0, import_react.useMemo)(() => {
		if (store.zip !== "33498") return [];
		return sortPlans(visiblePlans(store.filters, store.year), store.sort, store.year, store.medications.length, store.extraHelp, store.pharmacy);
	}, [
		store.zip,
		store.filters,
		store.year,
		store.sort,
		store.medications.length,
		store.extraHelp,
		store.pharmacy
	]);
	const step = currentStep(store);
	const showFilters = store.stage.name === "plans" || store.stage.name === "xray";
	function go(id) {
		if (id === "intake") {
			store.patch({
				stage: { name: "plans" },
				assessmentOpen: true,
				assessmentSection: "basic",
				providerOpen: false
			});
			return;
		}
		if (id === "plans") {
			store.patch({
				stage: { name: "plans" },
				assessmentOpen: false,
				providerOpen: false
			});
			return;
		}
		if (id === "xray") {
			const focus = plans.find((plan) => plan.id === "273788")?.id ?? plans[0]?.id ?? "273788";
			store.patch({
				stage: {
					name: "xray",
					focusId: focus
				},
				assessmentOpen: false,
				providerOpen: false
			});
			return;
		}
		if (id === "providers") {
			store.patch({
				providerOpen: true,
				providerTab: "search",
				assessmentOpen: false,
				networkPlanId: null
			});
			return;
		}
		if (id === "medications") {
			store.patch({
				assessmentOpen: true,
				assessmentSection: "meds",
				providerOpen: false,
				stage: { name: "plans" }
			});
			return;
		}
		if (id === "drugs") {
			store.patch({
				stage: {
					name: "detail",
					planId: DRUG_SHOWCASE,
					tab: "drugs"
				},
				assessmentOpen: false,
				providerOpen: false,
				selectedDrugId: store.medications[0]?.drugId ?? null
			});
			return;
		}
		const pair = store.compareIds.length === 2 ? store.compareIds : [COMPARE_LEFT, COMPARE_RIGHT];
		store.patch({
			stage: {
				name: "compare",
				left: pair[0],
				right: pair[1]
			},
			assessmentOpen: false,
			providerOpen: false
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { theme: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "shrink-0 border-b border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 px-4 py-3 md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
								alt: "",
								draw: drawMark,
								className: "size-9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-widest",
									children: "HELIOS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-xs text-muted",
									children: pathFor(store)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto flex items-center gap-2",
								children: [
									store.personalCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden font-mono text-xs tracking-wide text-gold sm:inline",
										children: store.personalCode
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "hidden sm:inline-flex",
										onClick: () => store.loadCase(),
										children: "Recorded case"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										tone: "gold",
										onClick: () => store.patch({
											assessmentOpen: true,
											assessmentSection: store.assessmentSection
										}),
										children: "Needs assessment"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 overflow-x-auto px-4 pb-3 md:px-6",
						children: STEPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(item.id),
							className: cn("min-h-11 shrink-0 border-b-2 px-3 text-sm", step === item.id ? "border-gold text-fg" : "border-transparent text-muted"),
							children: item.label
						}, item.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 px-4 py-3 text-sm text-muted md:px-6",
				children: COPY[step]
			}),
			showFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, { store }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [
					showFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden w-72 shrink-0 overflow-y-auto border-r border-line lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, { store })
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "min-w-0 flex-1 overflow-y-auto",
						children: [
							store.stage.name === "plans" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanGrid, {
								store,
								plans
							}) : null,
							store.stage.name === "xray" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Xray, {
								store,
								plans
							}) : null,
							store.stage.name === "detail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanDetail, { store }) : null,
							store.stage.name === "compare" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, { store }) : null,
							store.stage.name === "discovery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Discovery, { store }) : null
						]
					}),
					store.assessmentOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assessment, { store }) : null
				]
			}),
			store.providerOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Providers, { store }) : null,
			store.emailOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailDialog, { store }) : null,
			store.filterSheet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 flex flex-col bg-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Filters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "quiet",
						onClick: () => store.patch({ filterSheet: false }),
						children: "Done"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, { store })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex shrink-0 items-center justify-between gap-3 border-t border-line px-4 py-2 font-mono text-xs text-muted md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: [
						store.zip || "—",
						" · ",
						store.year,
						" · MAPD · ",
						plans.length,
						" plans"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0",
					children: [
						store.medications.length,
						" meds · ",
						store.savedProviderIds.length,
						" providers"
					]
				})]
			})
		]
	});
}
function Toolbar({ store }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 flex-wrap items-center gap-2 border-b border-line px-4 py-3 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				label: "View",
				value: store.stage.name === "xray" ? "xray" : "list",
				onChange: (value) => {
					if (value === "xray") {
						const focus = store.stage.name === "xray" ? store.stage.focusId : XRAY_PLAN;
						store.patch({ stage: {
							name: "xray",
							focusId: focus
						} });
					} else store.patch({ stage: { name: "plans" } });
				},
				options: [{
					id: "list",
					label: "List"
				}, {
					id: "xray",
					label: "X-ray"
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "sort",
				children: "Sort"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "sort",
				className: "h-11 rounded-full border border-line bg-surface px-3 text-sm",
				value: store.sort,
				onChange: (event) => store.patch({ sort: event.target.value }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "recommended",
						children: "Sort: Recommended"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "premium",
						children: "Sort: Premium"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "annual",
						children: "Sort: Annual cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "stars",
						children: "Sort: Stars"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "moop",
						children: "Sort: Max out-of-pocket"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				label: "Year",
				value: String(store.year),
				onChange: (value) => store.patch({ year: value === "2026" ? 2026 : 2027 }),
				options: [{
					id: "2027",
					label: "2027"
				}, {
					id: "2026",
					label: "2026"
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				label: "Time period",
				value: store.period,
				onChange: (period) => store.patch({ period }),
				options: [{
					id: "annual",
					label: "Annual"
				}, {
					id: "monthly",
					label: "Monthly"
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => store.patch({ columnPicker: !store.columnPicker }),
					children: [
						"Columns (",
						store.columns.length,
						")"
					]
				}), store.columnPicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-0 z-30 mt-2 w-64 rounded-2xl border border-line bg-surface p-3 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "Select up to 3 columns"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-xs text-gold",
							onClick: () => store.clearColumns(),
							children: "Clear all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2",
						children: COLUMN_OPTIONS.map((column) => {
							const on = store.columns.includes(column.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-11 w-full items-center justify-between text-sm",
								onClick: () => store.toggleColumn(column.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: column.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: on ? "text-gold" : "text-muted",
									children: on ? "On" : "Off"
								})]
							}) }, column.id);
						})
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: cn(inputClass, "h-11 w-40 rounded-full md:w-56"),
				placeholder: "Search plans",
				value: store.filters.query,
				onChange: (event) => store.patch({ filters: {
					...store.filters,
					query: event.target.value
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "lg:hidden",
				onClick: () => store.patch({ filterSheet: true }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 16 }), "Filters"]
			})
		]
	});
}
function currentStep(store) {
	if (store.providerOpen) return "providers";
	if (store.assessmentOpen && store.assessmentSection === "meds") return "medications";
	if (store.assessmentOpen && store.assessmentSection === "basic") return "intake";
	if (store.assessmentOpen && store.assessmentSection === "doctors") return "providers";
	if (store.stage.name === "xray") return "xray";
	if (store.stage.name === "detail" && store.stage.tab === "drugs") return "drugs";
	if (store.stage.name === "compare" || store.stage.name === "detail" && store.stage.tab === "benefits") return "benefits";
	return "plans";
}
function pathFor(store) {
	const zip = store.zip || "—";
	const stage = store.stage;
	if (stage.name === "xray") return `/planxray/xray/${zip}/12099/MAPD/${stage.focusId}/10`;
	if (stage.name === "detail" && stage.tab === "drugs") return `/plandetails/drugs/${zip}/12099/MAPD/${stage.planId}`;
	if (stage.name === "detail") return `/plandetails/benefits/${zip}/12099/MAPD/${stage.planId}`;
	if (stage.name === "compare") return `/plandetails/benefits/${zip}/12099/MAPD/${stage.left}|${stage.right}`;
	if (stage.name === "discovery") return "/discovery";
	return `/plans/${zip}/12099/MAPD`;
}
var SplitComponent = HeliosApp;
//#endregion
export { SplitComponent as component };
