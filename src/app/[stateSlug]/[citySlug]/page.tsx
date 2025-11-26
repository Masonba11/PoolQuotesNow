import Link from "next/link";
import {
  STATES,
  SERVICES,
  getStateBySlug,
  getCityBySlug,
} from "@/data/locations";
import {
  generateCityMetadata,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { generateCityContent } from "@/lib/content";
import { getArticlesByState } from "@/data/articleContent";
import JSONLDScript from "@/components/JSONLDScript";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const params: Array<{ stateSlug: string; citySlug: string }> = [];

  STATES.forEach((state) => {
    state.cities.forEach((city) => {
      params.push({
        stateSlug: state.slug,
        citySlug: city.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stateSlug: string; citySlug: string }>;
}): Promise<Metadata> {
  const { stateSlug, citySlug } = await params;
  return generateCityMetadata(stateSlug, citySlug);
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ stateSlug: string; citySlug: string }>;
}) {
  const { stateSlug, citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);

  if (!state || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            City Not Found
          </h1>
          <Link
            href="/"
            style={{ color: "#14B8A6" }}
            className="hover:underline hover:opacity-80"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema(stateSlug, citySlug);
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  const content = generateCityContent(stateSlug, citySlug);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Content Not Found
          </h1>
          <Link
            href="/"
            style={{ color: "#14B8A6" }}
            className="hover:underline hover:opacity-80"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = generateFAQSchema(content.faqs);

  return (
    <>
      <JSONLDScript
        data={[breadcrumbSchema, organizationSchema, websiteSchema, faqSchema]}
      />
      <div className="min-h-screen bg-white">
        <Hero
          title={`Pool Services in ${city.name}, ${state.abbreviation}`}
          subtitle={`Find trusted pool professionals in ${city.name}, ${state.name}`}
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pool Services in {city.name}, {state.abbreviation}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{content.intro}</p>
            </div>
          </section>

          {/* Popular Services */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Popular Pool Services in {city.name}
            </h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                {content.popularServices}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${state.slug}/${city.slug}/${service.slug}`}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-aqua-pool-500"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span
                    className="font-semibold hover:opacity-80"
                    style={{ color: "#14B8A6" }}
                  >
                    Get Quotes →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Local */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Homeowners in {city.name} Choose Local Pool Pros
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content.whyLocal}
              </p>
            </div>
          </section>

          {/* Trends */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pool Trends in {city.name}, {state.abbreviation}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{content.trends}</p>
            </div>
          </section>

          {/* Free Quotes */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Free Pool Quotes for {city.name} Homeowners
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {content.freeQuotes}
              </p>
              <ScrollToContactButton className="bg-aqua-pool-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-aqua-pool-600 transition-colors">
                Get Your Free Quote
              </ScrollToContactButton>
            </div>
          </section>

          {/* FAQs */}
          <div className="mb-8">
            <FAQ faqs={content.faqs} />
          </div>

          {/* Blog Articles */}
          {(() => {
            const articles = getArticlesByState(stateSlug);
            if (articles.length > 0) {
              return (
                <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Pool Guides & Resources for {state.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${stateSlug}/${article.slug}`}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-aqua-pool-500 group"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-aqua-pool-500 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {article.metaDescription}
                        </p>
                        <span
                          className="font-semibold hover:opacity-80 text-sm"
                          style={{ color: "#14B8A6" }}
                        >
                          Read Article →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            }
            return null;
          })()}

          {/* Final CTA */}
          <section
            className="text-white rounded-xl shadow-lg p-8 mb-8"
            style={{ backgroundColor: "#14B8A6" }}
          >
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-white leading-relaxed text-lg">
                {content.finalCTA}
              </p>
            </div>
          </section>

          <ContactForm />
        </main>
      </div>
    </>
  );
}
