/**
 * Header Component
 *
 * Site-wide header with logo, navigation, and responsive mobile menu
 *
 * Usage:
 *   <Header />
 */

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 hover:no-underline group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Solum
                </span>
                <span className="text-xs font-medium text-gray-500 hidden sm:inline">
                  Real Estate Group
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2 rounded-md hover:bg-primary-50 hover:no-underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2 rounded-md hover:bg-primary-50 hover:no-underline"
            >
              About
            </Link>
            <Link
              href="/approach"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2 rounded-md hover:bg-primary-50 hover:no-underline"
            >
              Investment Approach
            </Link>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md hover:no-underline"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button - Placeholder */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
