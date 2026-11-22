import type { DirectoryProvider } from "./types";

function doc(
  partial: Pick<DirectoryProvider, "id" | "name" | "specialty" | "locations"> &
    Partial<DirectoryProvider>,
): DirectoryProvider {
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
    locations: partial.locations,
  };
}

export const DIRECTORY: DirectoryProvider[] = [
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
      { line: "21644 STATE RD 7, BOCA RATON, FL 33428", city: "BOCA RATON", distance: 3.8 },
      { line: "7593 BOYNTON BEACH BLVD, BOYNTON BEACH, FL 33437", city: "BOYNTON BEACH", distance: 10.3 },
      { line: "201 E SAMPLE RD, DEERFIELD BEACH, FL 33064", city: "DEERFIELD BEACH", distance: 12 },
      { line: "14050 NW 14TH ST STE 190, FORT LAUDERDALE, FL 33323", city: "FORT LAUDERDALE", distance: 19.9 },
      { line: "7205 NW 19TH ST STE 404, MIAMI, FL 33126", city: "MIAMI", distance: 47.6 },
      { line: "4960 SW 72ND AVE STE 303, MIAMI, FL 33155", city: "MIAMI", distance: 51.2 },
      { line: "6200 SW 73RD ST, SOUTH MIAMI, FL 33143", city: "SOUTH MIAMI", distance: 53.6 },
    ],
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
    inNetworkPlanIds: ["273788", "273809", "273820", "273876", "273816", "273819"],
    locations: [
      { line: "10278 BUENA VENTURA DR, BOCA RATON, FL 33498", city: "BOCA RATON", distance: 0.6 },
      { line: "9980 CENTRAL PARK BLVD, BOCA RATON, FL 33428", city: "BOCA RATON", distance: 2.4 },
      { line: "6901 CONGRESS AVE, BOYNTON BEACH, FL 33437", city: "BOYNTON BEACH", distance: 8.1 },
      { line: "1799 SW 4TH AVE, BOCA RATON, FL 33432", city: "BOCA RATON", distance: 6.4 },
      { line: "5501 N FEDERAL HWY, BOCA RATON, FL 33487", city: "BOCA RATON", distance: 7.2 },
    ],
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
    inNetworkPlanIds: ["273814", "273809", "273821", "273788"],
    locations: [
      { line: "7900 GLADES RD #340, BOCA RATON, FL 33434", city: "BOCA RATON", distance: 5.4 },
    ],
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
    inNetworkPlanIds: ["273820", "273876", "273814"],
    locations: [
      { line: "FIRST CHOICE NEUROLOGY, BOCA RATON, FL 33428", city: "BOCA RATON", distance: 4.1 },
    ],
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
    locations: [
      { line: "9878 CLINT MOORE RD, BOCA RATON, FL 33496", city: "BOCA RATON", distance: 2.2 },
    ],
  }),
  doc({
    id: "voss",
    name: "VOSS, ELENA",
    first: "Elena",
    last: "Voss",
    specialty: "INTERNAL MEDICINE",
    gender: "Female",
    inNetworkPlanIds: ["273788", "273814", "273816", "273809", "273819", "273829"],
    locations: [
      { line: "1500 NW 10TH AVE, BOCA RATON, FL 33486", city: "BOCA RATON", distance: 4.8 },
    ],
  }),
  doc({
    id: "okonkwo",
    name: "OKONKWO, JAMES",
    first: "James",
    last: "Okonkwo",
    specialty: "FAMILY MEDICINE",
    gender: "Male",
    inNetworkPlanIds: ["273820", "273876", "273821", "273822", "273823", "273824"],
    locations: [
      { line: "900 GLADES RD, BOCA RATON, FL 33431", city: "BOCA RATON", distance: 6.1 },
    ],
  }),
  doc({
    id: "baptist-surgery-endo",
    kind: "organization",
    name: "BAPTIST SURGERY AND ENDOSCOPY CENTERS LLC",
    specialty: "AMBULATORY SURGICAL CENTER",
    locations: [
      { line: "1905 CLINT MOORE ROAD SUITE 115, BOCA RATON, FL 33496", city: "BOCA RATON", distance: 3.1 },
      { line: "SECOND LOCATION, BOCA RATON, FL", city: "BOCA RATON", distance: 5.5 },
    ],
  }),
  doc({
    id: "baptist-express",
    kind: "organization",
    name: "BAPTIST HEALTH EXPRESS CARE CORAL SPRINGS",
    specialty: "EMERGENCY CARE CLINIC CENTER",
    locations: [
      { line: "6264 W SAMPLE RD, POMPANO BEACH, FL 33067", city: "POMPANO BEACH", distance: 14.2 },
    ],
  }),
  doc({
    id: "baptist-pharmacy-101",
    kind: "organization",
    name: "BAPTIST HEALTH PHARMACY 101 LLC",
    specialty: "COMMUNITY RETAIL PHARMACY",
    locations: [
      { line: "8950 N KENDALL DR STE 102, MIAMI, FL 33176", city: "MIAMI", distance: 42 },
    ],
  }),
  doc({
    id: "baptist-outpatient",
    kind: "organization",
    name: "BAPTIST OUTPATIENT SERVICES INC",
    specialty: "HOME HEALTH AGENCY",
    locations: [
      { line: "12400 SW 127TH AVE, MIAMI, FL 33186", city: "MIAMI", distance: 38 },
    ],
  }),
  doc({
    id: "baptist-pharmacy-103",
    kind: "organization",
    name: "BAPTIST HEALTH PHARMACY 103 LLC",
    specialty: "COMMUNITY RETAIL PHARMACY",
    locations: [
      { line: "6200 SUNSET DR STE 102, SOUTH MIAMI, FL 33143", city: "SOUTH MIAMI", distance: 45 },
    ],
  }),
  doc({
    id: "baptist-surgery-fau",
    kind: "organization",
    name: "BAPTIST HEALTH SURGERY CENTER LLC",
    specialty: "AMBULATORY SURGICAL CLINIC",
    locations: [
      { line: "3731 FAU BLVD SUITE 100, BOCA RATON, FL 33431", city: "BOCA RATON", distance: 5.9 },
    ],
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
    inNetworkPlanIds: ["273788", "273809", "273814", "273820", "273876", "273829", "273825"],
    locations: [
      { line: "1905 CLINT MOORE RD, BOCA RATON, FL 33496", city: "BOCA RATON", distance: 3.4 },
    ],
  }),
];

export const DIRECTORY_BY_ID: Record<string, DirectoryProvider> = Object.fromEntries(
  DIRECTORY.map((p) => [p.id, p]),
);

export const SPECIALTIES = [
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
  "GENERAL ACUTE CARE HOSPITAL",
] as const;

export const CITIES = [
  "BOCA RATON",
  "BOYNTON BEACH",
  "DEERFIELD BEACH",
  "FORT LAUDERDALE",
  "POMPANO BEACH",
  "MIAMI",
  "SOUTH MIAMI",
  "ADVENTURA",
  "ATLANTIS",
] as const;

export const RECORDED_PROVIDER_IDS = ["golawala", "ayala", "baptist-surgery-fau", "boca-regional"] as const;
