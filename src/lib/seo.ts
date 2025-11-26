import {
  STATES,
  SERVICES,
  getStateBySlug,
  getCityBySlug,
  getServiceBySlug,
} from "@/data/locations";
import { getStateGeo, getCityGeo } from "@/data/geo";
import type { Metadata } from "next";

export function generateStateMetadata(stateSlug: string): Metadata {
  const state = getStateBySlug(stateSlug);
  if (!state) {
    return {
      title: "State Not Found - PoolQuotesNow",
      description: "The requested state page could not be found.",
    };
  }

  return {
    title: `Pool Services in ${state.name} - PoolQuotesNow`,
    description: `Find trusted pool professionals in ${state.name}. Get quotes for pool installation, repair, cleaning, resurfacing, and remodeling services in ${state.name}.`,
  };
}

export function generateCityMetadata(
  stateSlug: string,
  citySlug: string
): Metadata {
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);

  if (!state || !city) {
    return {
      title: "City Not Found - PoolQuotesNow",
      description: "The requested city page could not be found.",
    };
  }

  return {
    title: `Pool Services in ${city.name}, ${state.abbreviation} - PoolQuotesNow`,
    description: `Find trusted pool professionals in ${city.name}, ${state.name}. Get quotes for pool installation, repair, cleaning, resurfacing, and remodeling services.`,
  };
}

export function generateServiceMetadata(
  stateSlug: string,
  citySlug: string,
  serviceSlug: string
): Metadata {
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!state || !city || !service) {
    return {
      title: "Service Not Found - PoolQuotesNow",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.name} in ${city.name}, ${state.abbreviation} - PoolQuotesNow`,
    description: `Get quotes for ${service.name.toLowerCase()} in ${
      city.name
    }, ${
      state.name
    }. Find trusted pool professionals for ${service.description.toLowerCase()}.`,
  };
}

export function generateBreadcrumbSchema(
  stateSlug?: string,
  citySlug?: string,
  serviceSlug?: string
) {
  const items: Array<{ name: string; item: string }> = [
    { name: "Home", item: "https://poolquotesnow.com/" },
  ];

  if (stateSlug) {
    const state = getStateBySlug(stateSlug);
    if (state) {
      items.push({
        name: state.name,
        item: `https://poolquotesnow.com/${stateSlug}/`,
      });
    }
  }

  if (citySlug && stateSlug) {
    const city = getCityBySlug(stateSlug, citySlug);
    if (city) {
      items.push({
        name: city.name,
        item: `https://poolquotesnow.com/${stateSlug}/${citySlug}/`,
      });
    }
  }

  if (serviceSlug && citySlug && stateSlug) {
    const service = getServiceBySlug(serviceSlug);
    if (service) {
      items.push({
        name: service.name,
        item: `https://poolquotesnow.com/${stateSlug}/${citySlug}/${serviceSlug}/`,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PoolQuotesNow",
    url: "https://poolquotesnow.com",
    logo: "https://poolquotesnow.com/logo.png",
    description:
      "PoolQuotesNow connects homeowners with trusted pool professionals for installation, repair, cleaning, resurfacing, and remodeling services.",
    sameAs: [],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PoolQuotesNow",
    url: "https://poolquotesnow.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://poolquotesnow.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema(
  stateSlug: string,
  citySlug: string,
  serviceSlug: string
) {
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!state || !city || !service) return null;

  const cityGeo = getCityGeo(state.name, city.name);
  const areaServed: any = {
    "@type": "City",
    name: city.name,
  };

  if (cityGeo) {
    areaServed.geo = {
      "@type": "GeoCoordinates",
      latitude: cityGeo.lat,
      longitude: cityGeo.lng,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    areaServed,
    provider: {
      "@type": "Organization",
      name: "PoolQuotesNow",
      url: "https://poolquotesnow.com",
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// State Page Schema
export function generateStatePageSchema(stateSlug: string) {
  const state = getStateBySlug(stateSlug);
  if (!state) return null;

  const stateGeo = getStateGeo(state.name);
  const areaServed: any = {
    "@type": "State",
    name: state.name,
  };

  if (stateGeo) {
    areaServed.geo = {
      "@type": "GeoCoordinates",
      latitude: stateGeo.lat,
      longitude: stateGeo.lng,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Pool Services",
    areaServed,
    provider: {
      "@type": "Organization",
      name: "PoolQuotesNow",
      url: "https://poolquotesnow.com",
    },
  };
}

// City Page Schema
export function generateCityPageSchema(stateSlug: string, citySlug: string) {
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);
  if (!state || !city) return null;

  const cityGeo = getCityGeo(state.name, city.name);
  const areaServed: any = {
    "@type": "City",
    name: city.name,
  };

  if (cityGeo) {
    areaServed.geo = {
      "@type": "GeoCoordinates",
      latitude: cityGeo.lat,
      longitude: cityGeo.lng,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Pool Services",
    areaServed,
    provider: {
      "@type": "Organization",
      name: "PoolQuotesNow",
      url: "https://poolquotesnow.com",
    },
  };
}

// Services Breadcrumb Schema
export function generateServicePageBreadcrumbSchema(serviceSlug: string) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://poolquotesnow.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://poolquotesnow.com/services/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `https://poolquotesnow.com/services/${serviceSlug}/`,
      },
    ],
  };
}

// Blog Breadcrumb Schema
export function generateBlogBreadcrumbSchema(
  stateSlug: string,
  articleSlug: string,
  articleTitle: string
) {
  const state = getStateBySlug(stateSlug);
  if (!state) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://poolquotesnow.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://poolquotesnow.com/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: state.name,
        item: `https://poolquotesnow.com/blog/${stateSlug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: articleTitle,
        item: `https://poolquotesnow.com/blog/${stateSlug}/${articleSlug}/`,
      },
    ],
  };
}

// Blog Article Schema
export function generateArticleSchema(
  stateSlug: string,
  articleSlug: string,
  articleTitle: string,
  publishDate?: string
) {
  const state = getStateBySlug(stateSlug);
  if (!state) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    author: {
      "@type": "Organization",
      name: "PoolQuotesNow",
    },
    datePublished: publishDate || new Date().toISOString().split("T")[0],
    about: `${state.name} pool services`,
  };
}
