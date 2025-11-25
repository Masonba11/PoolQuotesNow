import Link from "next/link";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - PoolQuotesNow",
  description:
    "Thank you for requesting a quote. We'll connect you with trusted pool professionals in your area.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Thank You!"
        subtitle="We've received your quote request and will connect you with trusted pool professionals"
        showCTAs={false}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-aqua-pool-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Quote Request Has Been Received!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for contacting PoolQuotesNow. We've received your
            information and will connect you with up to three trusted pool
            professionals in your area.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                  •
                </span>
                <span>
                  Our team will review your request and match you with qualified
                  pool professionals in your area.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                  •
                </span>
                <span>
                  You'll receive a confirmation email shortly with details about
                  your request.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                  •
                </span>
                <span>
                  Pool professionals will contact you within 24 hours to discuss
                  your project and provide free quotes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold" style={{ color: "#14B8A6" }}>
                  •
                </span>
                <span>
                  Compare quotes, ask questions, and choose the professional
                  that's right for you—all with no obligation.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: "#14B8A6" }}
            >
              Return to Home
            </Link>
            <Link
              href="/services"
              className="text-aqua-pool-500 px-8 py-4 rounded-lg font-bold text-lg border-2 border-aqua-pool-500 hover:bg-aqua-pool-500 hover:text-white transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
