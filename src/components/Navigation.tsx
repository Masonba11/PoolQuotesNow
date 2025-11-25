import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="PoolQuotesNow Logo"
              width={120}
              height={120}
              className="object-contain"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/service-areas"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/reviews"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-aqua-pool-500"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
