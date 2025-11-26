import Link from "next/link";
import { STATES, getStateBySlug } from "@/data/locations";
import {
  generateStateMetadata,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
  generateStatePageSchema,
} from "@/lib/seo";
import { generateStateContent } from "@/lib/content";
import { getArticlesByState } from "@/data/articleContent";
import JSONLDScript from "@/components/JSONLDScript";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return STATES.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stateSlug: string }>;
}): Promise<Metadata> {
  const { stateSlug } = await params;
  return generateStateMetadata(stateSlug);
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ stateSlug: string }>;
}) {
  const { stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            State Not Found
          </h1>
          <Link
            href="/"
            className="text-aqua-pool-500 hover:text-aqua-pool-600"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema(stateSlug);
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const statePageSchema = generateStatePageSchema(stateSlug);

  const content = generateStateContent(stateSlug);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Content Not Found
          </h1>
          <Link
            href="/"
            className="text-aqua-pool-500 hover:text-aqua-pool-600"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = generateFAQSchema(content.faqs);

  const schemas = [
    breadcrumbSchema,
    organizationSchema,
    websiteSchema,
    statePageSchema,
    faqSchema,
  ].filter(Boolean);

  return (
    <>
      <JSONLDScript data={schemas} />
      <div className="min-h-screen bg-white">
        <Hero
          title={`Pool Services in ${state.name}`}
          subtitle={`Find trusted pool professionals in ${state.name}`}
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pool Services in {state.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{content.intro}</p>
            </div>
          </section>

          {/* Top Areas */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Top Pool Service Areas in {state.name}
            </h2>
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                {content.topAreas}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {state.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${state.slug}/${city.slug}`}
                  className="block bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 hover:border-aqua-pool-500 group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-aqua-pool-500 transition-colors">
                    {city.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Services */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Popular Pool Services in {state.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content.popularServices}
              </p>
            </div>
          </section>

          {/* Why Popular */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Pool Projects Are Popular in {state.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content.whyPopular}
              </p>
            </div>
          </section>

          {/* Free Quotes */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Free Pool Quotes Across {state.abbreviation}
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
