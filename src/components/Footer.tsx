import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white mt-20" style={{ backgroundColor: "#14B8A6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              PoolQuotesNow
            </h3>
            <p className="text-white/90 mb-4">
              Find trusted pool professionals for installation, repair,
              cleaning, resurfacing, and remodeling services across the United
              States.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#pool-installation"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pool Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pool-repair"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pool Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pool-cleaning"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pool Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pool-resurfacing"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pool Resurfacing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pool-remodeling"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pool Remodeling
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} PoolQuotesNow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-white/90 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/90 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
