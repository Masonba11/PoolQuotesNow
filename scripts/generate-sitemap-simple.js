const fs = require("fs");
const path = require("path");

// Manually define the structure based on the actual file
// This ensures accuracy - ONLY 5 STATES
const STATES = [
  {
    slug: "florida",
    cities: [
      "miami",
      "orlando",
      "tampa",
      "jacksonville",
      "st-petersburg",
      "fort-lauderdale",
      "cape-coral",
      "sarasota",
      "naples",
      "west-palm-beach",
      "boca-raton",
      "kissimmee",
      "lakeland",
      "bradenton",
      "fort-myers",
      "daytona-beach",
      "pensacola",
      "palm-bay",
      "port-st-lucie",
      "ocala",
    ],
  },
  {
    slug: "texas",
    cities: [
      "houston",
      "dallas",
      "san-antonio",
      "austin",
      "fort-worth",
      "el-paso",
      "arlington",
      "plano",
      "corpus-christi",
      "lubbock",
      "laredo",
      "irving",
      "garland",
      "frisco",
      "mckinney",
      "grand-prairie",
      "brownsville",
      "round-rock",
      "waco",
      "killeen",
    ],
  },
  {
    slug: "california",
    cities: [
      "los-angeles",
      "san-diego",
      "san-jose",
      "sacramento",
      "fresno",
      "long-beach",
      "anaheim",
      "riverside",
      "bakersfield",
      "oakland",
      "santa-ana",
      "irvine",
      "chula-vista",
      "stockton",
      "modesto",
      "oxnard",
      "fontana",
      "huntington-beach",
      "glendale",
      "fremont",
    ],
  },
  {
    slug: "arizona",
    cities: [
      "phoenix",
      "tucson",
      "mesa",
      "chandler",
      "gilbert",
      "scottsdale",
      "glendale",
      "peoria",
      "tempe",
      "surprise",
      "goodyear",
      "avondale",
      "buckeye",
      "queen-creek",
      "prescott",
      "flagstaff",
      "casa-grande",
      "maricopa",
      "bullhead-city",
      "lake-havasu-city",
    ],
  },
  {
    slug: "nevada",
    cities: [
      "las-vegas",
      "henderson",
      "reno",
      "north-las-vegas",
      "sparks",
      "carson-city",
      "pahrump",
      "boulder-city",
      "elko",
      "mesquite",
      "spring-valley",
      "sunrise-manor",
      "paradise",
      "whitney",
      "enterprise",
      "winchester",
      "summerlin",
      "incline-village",
      "laughlin",
      "fernley",
    ],
  },
];

const SERVICES = [
  { slug: "pool-installation" },
  { slug: "pool-repair" },
  { slug: "pool-cleaning" },
  { slug: "pool-resurfacing" },
  { slug: "pool-remodeling" },
];

// Generate sitemap
const domain = "https://poolquotesnow.com";
const today = new Date().toISOString().split("T")[0];

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Homepage
sitemap += "  <url>\n";
sitemap += `    <loc>${domain}/</loc>\n`;
sitemap += "    <priority>1.0</priority>\n";
sitemap += "    <changefreq>daily</changefreq>\n";
sitemap += `    <lastmod>${today}</lastmod>\n`;
sitemap += "  </url>\n";

// Services page
sitemap += "  <url>\n";
sitemap += `    <loc>${domain}/services</loc>\n`;
sitemap += "    <priority>0.9</priority>\n";
sitemap += "    <changefreq>weekly</changefreq>\n";
sitemap += `    <lastmod>${today}</lastmod>\n`;
sitemap += "  </url>\n";

// State pages
STATES.forEach((state) => {
  sitemap += "  <url>\n";
  sitemap += `    <loc>${domain}/${state.slug}</loc>\n`;
  sitemap += "    <priority>0.8</priority>\n";
  sitemap += "    <changefreq>weekly</changefreq>\n";
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += "  </url>\n";
});

// City pages
STATES.forEach((state) => {
  state.cities.forEach((citySlug) => {
    sitemap += "  <url>\n";
    sitemap += `    <loc>${domain}/${state.slug}/${citySlug}</loc>\n`;
    sitemap += "    <priority>0.7</priority>\n";
    sitemap += "    <changefreq>monthly</changefreq>\n";
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += "  </url>\n";
  });
});

// Service-in-city pages
STATES.forEach((state) => {
  state.cities.forEach((citySlug) => {
    SERVICES.forEach((service) => {
      sitemap += "  <url>\n";
      sitemap += `    <loc>${domain}/${state.slug}/${citySlug}/${service.slug}</loc>\n`;
      sitemap += "    <priority>0.6</priority>\n";
      sitemap += "    <changefreq>monthly</changefreq>\n";
      sitemap += `    <lastmod>${today}</lastmod>\n`;
      sitemap += "  </url>\n";
    });
  });
});

sitemap += "</urlset>";

// Write sitemap
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap);

// Calculate totals
const totalStates = STATES.length;
const totalCities = STATES.reduce((sum, s) => sum + s.cities.length, 0);
const totalServiceInCity = totalCities * SERVICES.length;
const totalUrls = 1 + 1 + totalStates + totalCities + totalServiceInCity;

console.log("✅ Sitemap generated successfully!");
console.log(`📊 Total URLs: ${totalUrls}`);
console.log(`   - Homepage: 1`);
console.log(`   - Services: 1`);
console.log(`   - States: ${totalStates}`);
console.log(`   - Cities: ${totalCities}`);
console.log(`   - Service-in-city: ${totalServiceInCity}`);
console.log(`📁 Saved to: ${sitemapPath}`);
