import Link from "next/link";
import {
  STATES,
  SERVICES,
  getStateBySlug,
  getCityBySlug,
  getServiceBySlug,
} from "@/data/locations";
import {
  generateServiceMetadata,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { generateServiceInCityContent } from "@/lib/content";
import JSONLDScript from "@/components/JSONLDScript";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const params: Array<{
    stateSlug: string;
    citySlug: string;
    serviceSlug: string;
  }> = [];

  STATES.forEach((state) => {
    state.cities.forEach((city) => {
      SERVICES.forEach((service) => {
        params.push({
          stateSlug: state.slug,
          citySlug: city.slug,
          serviceSlug: service.slug,
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stateSlug: string; citySlug: string; serviceSlug: string }>;
}): Promise<Metadata> {
  const { stateSlug, citySlug, serviceSlug } = await params;
  return generateServiceMetadata(stateSlug, citySlug, serviceSlug);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ stateSlug: string; citySlug: string; serviceSlug: string }>;
}) {
  const { stateSlug, citySlug, serviceSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(stateSlug, citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!state || !city || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
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

  const breadcrumbSchema = generateBreadcrumbSchema(
    stateSlug,
    citySlug,
    serviceSlug
  );
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const serviceSchema = generateServiceSchema(stateSlug, citySlug, serviceSlug);

  const content = generateServiceInCityContent(
    stateSlug,
    citySlug,
    serviceSlug
  );

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

  const schemas: object[] = [
    breadcrumbSchema,
    organizationSchema,
    websiteSchema,
    faqSchema,
  ];
  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  return (
    <>
      <JSONLDScript data={schemas} />
      <div className="min-h-screen bg-white">
        <Hero
          title={`${service.name} in ${city.name}, ${state.abbreviation}`}
          subtitle={`${service.description} in ${city.name}, ${state.name}`}
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro Paragraph */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pool {service.name} in {city.name}, {state.abbreviation}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{content.intro}</p>
            </div>
          </section>

          {/* Why Matters */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Pool {service.name} Matters in {city.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content.whyMatters}
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Benefits of Hiring a Local Pool Pro in {city.name},{" "}
              {state.abbreviation}
            </h2>
            <ul className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-gray-700 leading-relaxed flex items-start"
                >
                  <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                    •
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Common Projects */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Pool {service.name} Projects in {city.name}
            </h2>
            <ul className="space-y-3">
              {content.commonProjects.map((project, index) => (
                <li
                  key={index}
                  className="text-gray-700 leading-relaxed flex items-start"
                >
                  <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                    •
                  </span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quote Process */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How the Free Quote Process Works
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {content.quoteProcess}
              </p>
              <div className="mt-6">
                <ScrollToContactButton className="bg-aqua-pool-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-aqua-pool-600 transition-colors">
                  Request Your Free Quote in {city.name}
                </ScrollToContactButton>
              </div>
            </div>
          </section>

          {/* Average Costs */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Average Costs for Pool {service.name} in {city.name},{" "}
              {state.abbreviation}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content.averageCosts}
              </p>
            </div>
          </section>

          {/* Other Services */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Other Pool Services in {city.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.filter((s) => s.slug !== service.slug).map(
                (otherService) => (
                  <Link
                    key={otherService.slug}
                    href={`/${state.slug}/${city.slug}/${otherService.slug}`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-aqua-pool-500 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {otherService.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {otherService.description}
                    </p>
                  </Link>
                )
              )}
            </div>
          </section>

          {/* FAQs */}
          <FAQ faqs={content.faqs} />

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
