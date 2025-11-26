import Link from "next/link";
import { STATES } from "@/data/locations";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Blog - PoolQuotesNow",
  description:
    "Expert pool advice, maintenance tips, and state-specific guides for pool owners in Florida, Texas, California, Arizona, and Nevada.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Pool Resources & Guides"
        subtitle="Expert advice and state-specific information for pool owners"
        showCTAs={false}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {STATES.map((state) => (
            <div key={state.slug} className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {state.name} Pool Resources
              </h2>
              <p className="text-gray-600 mb-6">
                Explore state-specific pool guides and articles for {state.name}
                homeowners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Articles will be listed here dynamically */}
                <div className="text-gray-500 italic">
                  Articles coming soon...
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/${state.slug}`}
                  className="text-aqua-pool-500 hover:text-aqua-pool-600 font-semibold"
                >
                  View Pool Services in {state.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

