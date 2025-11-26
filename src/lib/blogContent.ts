import { STATES, SERVICES } from "@/data/locations";

interface ArticleContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  internalLinks: {
    type: "state" | "city" | "service";
    anchorText: string;
    url: string;
  }[];
}

// Helper to get top cities for a state
function getTopCities(stateSlug: string, count: number): string[] {
  const state = STATES.find((s) => s.slug === stateSlug);
  if (!state) return [];
  return state.cities.slice(0, count).map((c) => c.slug);
}

// Helper to get city name
function getCityName(stateSlug: string, citySlug: string): string {
  const state = STATES.find((s) => s.slug === stateSlug);
  return state?.cities.find((c) => c.slug === citySlug)?.name || citySlug;
}

// Helper to get service name
function getServiceName(serviceSlug: string): string {
  return SERVICES.find((s) => s.slug === serviceSlug)?.name || serviceSlug;
}

// Generate internal links for articles
function generateArticleLinks(
  stateSlug: string,
  stateName: string,
  cities: string[],
  services: string[]
): ArticleContent["internalLinks"] {
  const links: ArticleContent["internalLinks"] = [];

  // State page link
  links.push({
    type: "state",
    anchorText: `Pool services in ${stateName}`,
    url: `/${stateSlug}`,
  });

  // Mix of city service links (3-5 cities, different services)
  const cityServicePairs = [
    { city: cities[0], service: services[0] },
    { city: cities[1], service: services[1] },
    { city: cities[2], service: services[2] },
    { city: cities[3] || cities[0], service: services[3] },
    { city: cities[4] || cities[1], service: services[4] },
  ];

  cityServicePairs.forEach(({ city, service }) => {
    const cityName = getCityName(stateSlug, city);
    const serviceName = getServiceName(service);
    links.push({
      type: "service",
      anchorText: `Pool ${serviceName} in ${stateName}`,
      url: `/${stateSlug}/${city}/${service}`,
    });
  });

  return links;
}

// Article content generator - this will be expanded with actual content
export function generateArticleContent(
  stateSlug: string,
  articleSlug: string
): ArticleContent | null {
  const state = STATES.find((s) => s.slug === stateSlug);
  if (!state) return null;

  const topCities = getTopCities(stateSlug, 5);
  const allServices = SERVICES.map((s) => s.slug);

  // This is a placeholder - actual content will be generated
  // For now, return structure
  return {
    title: "",
    metaTitle: "",
    metaDescription: "",
    content: "",
    internalLinks: generateArticleLinks(
      stateSlug,
      state.name,
      topCities,
      allServices
    ),
  };
}

