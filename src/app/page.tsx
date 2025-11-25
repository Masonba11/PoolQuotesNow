import Link from "next/link";
import { STATES, SERVICES } from "@/data/locations";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Find Trusted Pool Professionals Near You"
        subtitle="Get free quotes from licensed pool contractors for installation, repair, cleaning, and more."
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Pool Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Professional pool services you can trust
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-aqua-pool-500 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aqua-pool-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-aqua-pool-500 font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Browse by State
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Find pool services in your state
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {STATES.map((state) => (
              <Link
                key={state.slug}
                href={`/${state.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center border border-gray-200 hover:border-aqua-pool-500 group"
              >
                <div className="font-bold text-gray-900 text-lg group-hover:text-aqua-pool-500 transition-colors">
                  {state.name}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {state.abbreviation}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#14B8A6" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-aqua-pool-100">
            Get free quotes from trusted pool professionals in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: "#14B8A6" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
