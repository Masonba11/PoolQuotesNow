import Link from "next/link";
import { SERVICES, STATES, getServiceBySlug } from "@/data/locations";
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
} from "@/lib/seo";
import JSONLDScript from "@/components/JSONLDScript";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found - PoolQuotesNow",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.name} - PoolQuotesNow`,
    description: `Get quotes for ${service.name.toLowerCase()} from trusted pool professionals. ${
      service.description
    }.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-aqua-pool-500 hover:text-aqua-pool-600"
          >
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  const faqs = [
    {
      question: `What is ${service.name.toLowerCase()}?`,
      answer: `${
        service.description
      }. Our network of trusted pool professionals provides expert ${service.name.toLowerCase()} services across the United States.`,
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost?`,
      answer: `The cost of ${service.name.toLowerCase()} varies based on the size of your pool, materials used, and specific requirements. Contact our local professionals for a free, no-obligation quote tailored to your project.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `The timeline for ${service.name.toLowerCase()} depends on the scope of work. Simple repairs may take a few hours, while installations or major remodels can take several weeks. Our professionals will provide a detailed timeline with your quote.`,
    },
    {
      question: `Do I need permits for ${service.name.toLowerCase()}?`,
      answer: `Permit requirements vary by location and project type. Our licensed professionals are familiar with local regulations and will handle all necessary permits for your ${service.name.toLowerCase()} project.`,
    },
    {
      question: `What should I look for in a ${service.name.toLowerCase()} professional?`,
      answer: `When choosing a ${service.name.toLowerCase()} professional, look for licensed and insured contractors with experience, positive reviews, and transparent pricing. All professionals in our network meet these standards.`,
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <JSONLDScript
        data={[breadcrumbSchema, organizationSchema, websiteSchema, faqSchema]}
      />
      <div className="min-h-screen bg-white">
        <Hero
          title={service.name}
          subtitle={service.description}
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional {service.name} Services
            </h2>
            <p className="text-gray-600 mb-4">
              Looking for {service.name.toLowerCase()}? Our network of trusted
              pool professionals provides expert {service.name.toLowerCase()}{" "}
              services throughout the United States. Whether you need routine
              maintenance or a complete project, we connect you with licensed
              and insured contractors who deliver quality work.
            </p>
            <p className="text-gray-600 mb-4">
              Our pool professionals understand local climate conditions,
              building codes, and the unique needs of pool owners. Get free
              quotes from multiple contractors to compare pricing and find the
              best fit for your project.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our {service.name} Professionals?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Licensed and insured contractors</li>
              <li>Local expertise across all service areas</li>
              <li>Free, no-obligation quotes</li>
              <li>Quality workmanship guaranteed</li>
              <li>Competitive pricing</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Find {service.name} in Your Area
            </h2>
            <p className="text-gray-600 mb-6">
              We have pool professionals available in cities across 30 states.
              Browse by state to find {service.name.toLowerCase()} services near
              you:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {STATES.slice(0, 10).map((state) => (
                <Link
                  key={state.slug}
                  href={`/${state.slug}/${state.cities[0].slug}/${service.slug}`}
                  className="text-aqua-pool-500 hover:text-aqua-pool-600 hover:underline"
                >
                  {state.name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/service-areas"
                className="text-aqua-pool-600 hover:text-aqua-pool-800 font-semibold"
              >
                View All States →
              </Link>
            </div>
          </section>

          <FAQ faqs={faqs} />

          <ContactForm />
        </main>
      </div>
    </>
  );
}
