"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
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
              href="/blog"
              className="text-gray-700 hover:text-aqua-pool-500 font-medium transition-colors"
            >
              Blog
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
              onClick={toggleMenu}
              className="text-gray-700 hover:text-aqua-pool-500 focus:outline-none"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/service-areas"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Service Areas
              </Link>
              <Link
                href="/reviews"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 text-gray-700 hover:text-aqua-pool-500 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
