import Link from "next/link";
import { STATES } from "@/data/locations";
import { getArticlesByState } from "@/data/articleContent";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import JSONLDScript from "@/components/JSONLDScript";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Blog - PoolQuotesNow",
  description:
    "Expert pool advice, maintenance tips, and state-specific guides for pool owners in Florida, Texas, California, Arizona, and Nevada.",
};

export default function BlogPage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      <JSONLDScript
        data={[organizationSchema, websiteSchema, breadcrumbSchema]}
      />
      <div className="min-h-screen bg-white">
        <Hero
          title="Pool Resources & Guides"
          subtitle="Expert advice and state-specific information for pool owners"
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {STATES.map((state) => {
              const articles = getArticlesByState(state.slug);
              return (
                <div
                  key={state.slug}
                  className="bg-white rounded-xl shadow-md p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {state.name} Pool Resources
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore state-specific pool guides and articles for{" "}
                    {state.name} homeowners.
                  </p>
                  {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${state.slug}/${article.slug}`}
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
                  ) : (
                    <div className="text-gray-500 italic">
                      Articles coming soon...
                    </div>
                  )}
                  <div className="mt-6">
                    <Link
                      href={`/${state.slug}`}
                      className="text-aqua-pool-500 hover:text-aqua-pool-600 font-semibold"
                    >
                      View Pool Services in {state.name} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

