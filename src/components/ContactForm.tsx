"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add botcheck field for spam protection
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        setError(
          data.message || "Something went wrong. Please try again later."
        );
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="PoolQuotesNow Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Fill out the form below and we'll connect you with trusted pool
            professionals in your area
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Hidden access key */}
            <input
              type="hidden"
              name="access_key"
              value="e1602d8e-bf8e-427e-834c-7ae016bfbc1e"
            />

            {/* Honeypot field for spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                >
                  <option value="">Select a service</option>
                  <option value="Pool Installation">Pool Installation</option>
                  <option value="Pool Repair">Pool Repair</option>
                  <option value="Pool Cleaning">Pool Cleaning</option>
                  <option value="Pool Resurfacing">Pool Resurfacing</option>
                  <option value="Pool Remodeling">Pool Remodeling</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City & State *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                placeholder="e.g., Miami, FL"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aqua-pool-500 focus:border-aqua-pool-500 text-gray-900"
                placeholder="Tell us about your pool service needs..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#14B8A6" }}
              >
                {isSubmitting ? "Submitting..." : "Get Free Quote"}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We'll contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
