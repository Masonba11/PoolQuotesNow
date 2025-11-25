import Link from "next/link";
import { SERVICES } from "@/data/locations";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Services - PoolQuotesNow",
  description:
    "Browse our pool services including installation, repair, cleaning, resurfacing, and remodeling. Get quotes from trusted professionals.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Pool Services"
        subtitle="Browse our pool services and get quotes from trusted professionals"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-20">
              <Link
                href={`/services/${service.slug}`}
                className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-aqua-pool-500 group"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-aqua-pool-500 transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <span className="text-aqua-pool-500 font-semibold group-hover:underline inline-flex items-center">
                  Learn more →
                </span>
              </Link>
            </div>
          ))}
        </div>
        <ContactForm />
      </main>
    </div>
  );
}
