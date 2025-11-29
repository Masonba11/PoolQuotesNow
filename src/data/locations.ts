export const SERVICES = [
  {
    slug: "pool-builder",
    name: "Pool builder",
    description: "Professional pool builder services for your home",
  },
  {
    slug: "pool-repair",
    name: "Pool Repair",
    description: "Expert pool repair and maintenance services",
  },
  {
    slug: "pool-cleaning",
    name: "Pool Cleaning",
    description: "Regular pool cleaning and maintenance services",
  },
  {
    slug: "pool-resurfacing",
    name: "Pool Resurfacing",
    description: "Pool resurfacing and renovation services",
  },
  {
    slug: "pool-remodeling",
    name: "Pool Remodeling",
    description: "Complete pool remodeling and design services",
  },
];

export interface City {
  slug: string;
  name: string;
}

export interface State {
  slug: string;
  name: string;
  abbreviation: string;
  mainCity: string;
  cities: City[];
}

export const STATES: State[] = [
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    mainCity: "Miami",
    cities: [
      { slug: "miami", name: "Miami" },
      { slug: "orlando", name: "Orlando" },
      { slug: "tampa", name: "Tampa" },
      { slug: "jacksonville", name: "Jacksonville" },
      { slug: "st-petersburg", name: "St. Petersburg" },
      { slug: "fort-lauderdale", name: "Fort Lauderdale" },
      { slug: "cape-coral", name: "Cape Coral" },
      { slug: "sarasota", name: "Sarasota" },
      { slug: "naples", name: "Naples" },
      { slug: "west-palm-beach", name: "West Palm Beach" },
      { slug: "boca-raton", name: "Boca Raton" },
      { slug: "kissimmee", name: "Kissimmee" },
      { slug: "lakeland", name: "Lakeland" },
      { slug: "bradenton", name: "Bradenton" },
      { slug: "fort-myers", name: "Fort Myers" },
      { slug: "daytona-beach", name: "Daytona Beach" },
      { slug: "pensacola", name: "Pensacola" },
      { slug: "palm-bay", name: "Palm Bay" },
      { slug: "port-st-lucie", name: "Port St. Lucie" },
      { slug: "ocala", name: "Ocala" },
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    mainCity: "Houston",
    cities: [
      { slug: "houston", name: "Houston" },
      { slug: "dallas", name: "Dallas" },
      { slug: "san-antonio", name: "San Antonio" },
      { slug: "austin", name: "Austin" },
      { slug: "fort-worth", name: "Fort Worth" },
      { slug: "el-paso", name: "El Paso" },
      { slug: "arlington", name: "Arlington" },
      { slug: "plano", name: "Plano" },
      { slug: "corpus-christi", name: "Corpus Christi" },
      { slug: "lubbock", name: "Lubbock" },
      { slug: "laredo", name: "Laredo" },
      { slug: "irving", name: "Irving" },
      { slug: "garland", name: "Garland" },
      { slug: "frisco", name: "Frisco" },
      { slug: "mckinney", name: "McKinney" },
      { slug: "grand-prairie", name: "Grand Prairie" },
      { slug: "brownsville", name: "Brownsville" },
      { slug: "round-rock", name: "Round Rock" },
      { slug: "waco", name: "Waco" },
      { slug: "killeen", name: "Killeen" },
    ],
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    mainCity: "Los Angeles",
    cities: [
      { slug: "los-angeles", name: "Los Angeles" },
      { slug: "san-diego", name: "San Diego" },
      { slug: "san-jose", name: "San Jose" },
      { slug: "sacramento", name: "Sacramento" },
      { slug: "fresno", name: "Fresno" },
      { slug: "long-beach", name: "Long Beach" },
      { slug: "anaheim", name: "Anaheim" },
      { slug: "riverside", name: "Riverside" },
      { slug: "bakersfield", name: "Bakersfield" },
      { slug: "oakland", name: "Oakland" },
      { slug: "santa-ana", name: "Santa Ana" },
      { slug: "irvine", name: "Irvine" },
      { slug: "chula-vista", name: "Chula Vista" },
      { slug: "stockton", name: "Stockton" },
      { slug: "modesto", name: "Modesto" },
      { slug: "oxnard", name: "Oxnard" },
      { slug: "fontana", name: "Fontana" },
      { slug: "huntington-beach", name: "Huntington Beach" },
      { slug: "glendale", name: "Glendale" },
      { slug: "fremont", name: "Fremont" },
    ],
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    mainCity: "Phoenix",
    cities: [
      { slug: "phoenix", name: "Phoenix" },
      { slug: "tucson", name: "Tucson" },
      { slug: "mesa", name: "Mesa" },
      { slug: "chandler", name: "Chandler" },
      { slug: "gilbert", name: "Gilbert" },
      { slug: "scottsdale", name: "Scottsdale" },
      { slug: "glendale", name: "Glendale" },
      { slug: "peoria", name: "Peoria" },
      { slug: "tempe", name: "Tempe" },
      { slug: "surprise", name: "Surprise" },
      { slug: "goodyear", name: "Goodyear" },
      { slug: "avondale", name: "Avondale" },
      { slug: "buckeye", name: "Buckeye" },
      { slug: "queen-creek", name: "Queen Creek" },
      { slug: "prescott", name: "Prescott" },
      { slug: "flagstaff", name: "Flagstaff" },
      { slug: "casa-grande", name: "Casa Grande" },
      { slug: "maricopa", name: "Maricopa" },
      { slug: "bullhead-city", name: "Bullhead City" },
      { slug: "lake-havasu-city", name: "Lake Havasu City" },
    ],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbreviation: "NV",
    mainCity: "Las Vegas",
    cities: [
      { slug: "las-vegas", name: "Las Vegas" },
      { slug: "henderson", name: "Henderson" },
      { slug: "reno", name: "Reno" },
      { slug: "north-las-vegas", name: "North Las Vegas" },
      { slug: "sparks", name: "Sparks" },
      { slug: "carson-city", name: "Carson City" },
      { slug: "pahrump", name: "Pahrump" },
      { slug: "boulder-city", name: "Boulder City" },
      { slug: "elko", name: "Elko" },
      { slug: "mesquite", name: "Mesquite" },
      { slug: "spring-valley", name: "Spring Valley" },
      { slug: "sunrise-manor", name: "Sunrise Manor" },
      { slug: "paradise", name: "Paradise" },
      { slug: "whitney", name: "Whitney" },
      { slug: "enterprise", name: "Enterprise" },
      { slug: "winchester", name: "Winchester" },
      { slug: "summerlin", name: "Summerlin" },
      { slug: "incline-village", name: "Incline Village" },
      { slug: "laughlin", name: "Laughlin" },
      { slug: "fernley", name: "Fernley" },
    ],
  },
];

// Helper functions
export function getStateBySlug(slug: string): State | undefined {
  return STATES.find((state) => state.slug === slug);
}

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): City | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.cities.find((city) => city.slug === citySlug);
}

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
