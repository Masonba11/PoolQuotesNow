import { STATES, SERVICES } from "./locations";

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  stateSlug: string;
  stateName: string;
  content: string;
  internalLinks: {
    type: "state" | "city" | "service";
    anchorText: string;
    url: string;
  }[];
}

// Helper function to get top cities for a state
function getTopCities(stateSlug: string, count: number = 5): string[] {
  const state = STATES.find((s) => s.slug === stateSlug);
  if (!state) return [];
  return state.cities.slice(0, count).map((c) => c.slug);
}

// Helper function to get city name by slug
function getCityName(stateSlug: string, citySlug: string): string {
  const state = STATES.find((s) => s.slug === stateSlug);
  return state?.cities.find((c) => c.slug === citySlug)?.name || citySlug;
}

// Generate internal links for an article
function generateInternalLinks(
  stateSlug: string,
  stateName: string,
  cities: string[],
  services: string[]
): BlogArticle["internalLinks"] {
  const links: BlogArticle["internalLinks"] = [];

  // State page link
  links.push({
    type: "state",
    anchorText: `Pool services in ${stateName}`,
    url: `/${stateSlug}`,
  });

  // City service page links (mix of cities and services)
  cities.forEach((citySlug, idx) => {
    const service = services[idx % services.length];
    const cityName = getCityName(stateSlug, citySlug);
    const serviceName = SERVICES.find((s) => s.slug === service)?.name || service;
    links.push({
      type: "service",
      anchorText: `Pool ${serviceName} in ${stateName}`,
      url: `/${stateSlug}/${citySlug}/${service}`,
    });
  });

  return links;
}

// Article topics for each state (5 per state)
const articleTopics: Record<string, string[]> = {
  florida: [
    "hurricane-season-pool-prep",
    "saltwater-pool-maintenance-florida",
    "year-round-pool-ownership-costs",
    "florida-pool-safety-regulations",
    "preventing-algae-blooms-tropical-climate",
  ],
  texas: [
    "texas-pool-heating-options",
    "drought-resistant-pool-design",
    "texas-pool-permit-requirements",
    "extreme-heat-pool-maintenance",
    "texas-pool-construction-trends",
  ],
  california: [
    "california-pool-water-conservation",
    "earthquake-resistant-pool-design",
    "california-pool-energy-efficiency",
    "drought-regulations-pool-owners",
    "california-pool-renovation-trends",
  ],
  arizona: [
    "arizona-desert-pool-maintenance",
    "extreme-heat-pool-cooling-solutions",
    "arizona-pool-evaporation-prevention",
    "desert-climate-pool-materials",
    "arizona-pool-landscaping-shade",
  ],
  nevada: [
    "las-vegas-pool-entertainment-design",
    "nevada-desert-pool-maintenance",
    "high-altitude-pool-considerations",
    "nevada-pool-water-conservation",
    "extreme-temperature-pool-care",
  ],
};

// This will be populated with actual article content
export const BLOG_ARTICLES: BlogArticle[] = [];

// Generate article structure for all states
STATES.forEach((state) => {
  articleTopics[state.slug].forEach((articleSlug) => {
    const topCities = getTopCities(state.slug, 5);
    const allServices = SERVICES.map((s) => s.slug);
    
    BLOG_ARTICLES.push({
      slug: articleSlug,
      title: "", // Will be filled with actual content
      metaTitle: "", // Will be filled
      metaDescription: "", // Will be filled
      stateSlug: state.slug,
      stateName: state.name,
      content: "", // Will be filled with actual content
      internalLinks: generateInternalLinks(
        state.slug,
        state.name,
        topCities,
        allServices
      ),
    });
  });
});

// Export helper functions
export function getArticleBySlug(
  stateSlug: string,
  articleSlug: string
): BlogArticle | undefined {
  return BLOG_ARTICLES.find(
    (article) =>
      article.stateSlug === stateSlug && article.slug === articleSlug
  );
}

export function getArticlesByState(stateSlug: string): BlogArticle[] {
  return BLOG_ARTICLES.filter((article) => article.stateSlug === stateSlug);
}

export function getAllArticles(): BlogArticle[] {
  return BLOG_ARTICLES;
}

