import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import JSONLDScript from "@/components/JSONLDScript";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - PoolQuotesNow",
  description:
    "Read reviews from satisfied customers who found trusted pool professionals through PoolQuotesNow.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Miami, FL",
      service: "Pool builder",
      rating: 5,
      comment:
        "PoolQuotesNow connected me with an amazing pool contractor. The installation was professional and completed on time. Highly recommend!",
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      service: "Pool Repair",
      rating: 5,
      comment:
        "Found a great pool repair service through this site. The contractor was knowledgeable and fixed our pool quickly. Great experience!",
    },
    {
      name: "Emily Rodriguez",
      location: "Phoenix, AZ",
      service: "Pool Cleaning",
      rating: 5,
      comment:
        "I've been using the same pool cleaning service I found here for over a year. They're reliable and do excellent work.",
    },
    {
      name: "David Thompson",
      location: "Dallas, TX",
      service: "Pool Resurfacing",
      rating: 5,
      comment:
        "The pool resurfacing contractor recommended through PoolQuotes did an outstanding job. Our pool looks brand new!",
    },
    {
      name: "Jennifer Martinez",
      location: "Las Vegas, NV",
      service: "Pool Remodeling",
      rating: 5,
      comment:
        "We completely remodeled our pool and the results exceeded our expectations. The contractor was professional throughout the entire process.",
    },
    {
      name: "Robert Williams",
      location: "Atlanta, GA",
      service: "Pool builder",
      rating: 5,
      comment:
        "From getting quotes to final installation, everything went smoothly. PoolQuotes made it easy to find the right professional.",
    },
  ];

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
          title="Customer Reviews"
          subtitle="See what our customers say about the pool professionals they found through PoolQuotesNow"
          showCTAs={false}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                  <p className="text-sm text-aqua-pool-500 mt-1">
                    {review.service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Did you find a great pool professional through PoolQuotesNow? We'd
              love to hear about your experience!
            </p>
            <a
              href="/contact-us"
              className="inline-block text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: "#14B8A6" }}
            >
              Submit a Review
            </a>
          </div>
          <ContactForm />
        </main>
      </div>
    </>
  );
}
