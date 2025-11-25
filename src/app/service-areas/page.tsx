import Link from "next/link";
import { STATES } from "@/data/locations";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas - PoolQuotesNow",
  description:
    "Find pool services in cities across 30 states. Browse our service areas to find trusted pool professionals near you.",
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Our Service Areas"
        subtitle="We connect you with trusted pool professionals in cities across the United States"
        showCTAs={false}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {STATES.map((state) => (
            <div key={state.slug} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {state.name} ({state.abbreviation})
                </h2>
                <Link
                  href={`/${state.slug}`}
                  className="text-aqua-pool-500 hover:text-aqua-pool-600 font-semibold"
                >
                  View State →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {state.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${state.slug}/${city.slug}`}
                    className="block p-2 rounded hover:bg-gray-50 text-gray-700 hover:text-aqua-pool-500 hover:underline transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-white rounded-xl p-8 text-center"
          style={{ backgroundColor: "#14B8A6" }}
        >
          <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
          <p className="text-xl mb-6 text-aqua-pool-100">
            Contact us to see if we have pool professionals in your area
          </p>
        </div>
        <ContactForm />
      </main>
    </div>
  );
}
