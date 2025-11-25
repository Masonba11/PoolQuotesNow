const fs = require("fs");
const path = require("path");

// Read the locations file
const locationsPath = path.join(__dirname, "../src/data/locations.ts");
const content = fs.readFileSync(locationsPath, "utf8");

// Services are fixed
const services = [
  { slug: "pool-installation" },
  { slug: "pool-repair" },
  { slug: "pool-cleaning" },
  { slug: "pool-resurfacing" },
  { slug: "pool-remodeling" },
];

// Parse states using regex to find state objects
const states = [];
const stateMatches = content.matchAll(
  /{\s*slug:\s*"([^"]+)",\s*name:\s*"[^"]+",\s*abbreviation:\s*"[^"]+",\s*mainCity:\s*"[^"]+",\s*cities:\s*\[/g
);

for (const stateMatch of stateMatches) {
  const stateSlug = stateMatch[1];
  const stateStartIndex = stateMatch.index;

  // Find the cities array content for this state
  // Look for the cities array that starts after this match
  const afterMatch = content.substring(stateStartIndex + stateMatch[0].length);

  // Find all city slugs in this state's cities array (until we hit the closing bracket of cities array)
  const cities = [];
  let bracketDepth = 1; // We're already inside the cities array
  let i = 0;
  let inCityObject = false;

  while (i < afterMatch.length && bracketDepth > 0) {
    const char = afterMatch[i];

    if (char === "[") bracketDepth++;
    if (char === "]") {
      bracketDepth--;
      if (bracketDepth === 0) break;
    }

    // Look for city slug patterns
    const remaining = afterMatch.substring(i);
    const citySlugMatch = remaining.match(/slug:\s*"([^"]+)"/);
    if (citySlugMatch && !cities.find((c) => c.slug === citySlugMatch[1])) {
      // Make sure this slug is not the state slug
      if (citySlugMatch[1] !== stateSlug) {
        cities.push({ slug: citySlugMatch[1] });
      }
      i += citySlugMatch.index + citySlugMatch[0].length;
    } else {
      i++;
    }

    // Limit search to prevent infinite loops
    if (i > 5000) break;
  }

  states.push({ slug: stateSlug, cities });
}

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
states.forEach((state) => {
  sitemap += "  <url>\n";
  sitemap += `    <loc>${domain}/${state.slug}</loc>\n`;
  sitemap += "    <priority>0.8</priority>\n";
  sitemap += "    <changefreq>weekly</changefreq>\n";
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += "  </url>\n";
});

// City pages
states.forEach((state) => {
  state.cities.forEach((city) => {
    sitemap += "  <url>\n";
    sitemap += `    <loc>${domain}/${state.slug}/${city.slug}</loc>\n`;
    sitemap += "    <priority>0.7</priority>\n";
    sitemap += "    <changefreq>monthly</changefreq>\n";
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += "  </url>\n";
  });
});

// Service-in-city pages
states.forEach((state) => {
  state.cities.forEach((city) => {
    services.forEach((service) => {
      sitemap += "  <url>\n";
      sitemap += `    <loc>${domain}/${state.slug}/${city.slug}/${service.slug}</loc>\n`;
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
const totalStates = states.length;
const totalCities = states.reduce((sum, s) => sum + s.cities.length, 0);
const totalServiceInCity = totalCities * services.length;
const totalUrls = 1 + 1 + totalStates + totalCities + totalServiceInCity;

console.log("✅ Sitemap generated successfully!");
console.log(`📊 Total URLs: ${totalUrls}`);
console.log(`   - Homepage: 1`);
console.log(`   - Services: 1`);
console.log(`   - States: ${totalStates}`);
console.log(`   - Cities: ${totalCities}`);
console.log(`   - Service-in-city: ${totalServiceInCity}`);
console.log(`📁 Saved to: ${sitemapPath}`);
