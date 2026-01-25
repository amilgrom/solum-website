import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './components/Container';
import { Card } from './components/Card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 py-24 md:py-32">
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <Container>
            <div className="relative text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl text-balance drop-shadow-lg">
                Solum Real Estate Group
              </h1>
              <p className="mt-6 text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
                Strategic Commercial Real Estate Investing
              </p>
              <p className="mt-4 text-lg text-primary-200 max-w-3xl mx-auto leading-relaxed">
                Building long-term value through disciplined investment strategies
                and operational excellence in commercial properties
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg shadow-lg hover:bg-primary-50 hover:shadow-xl transition-all duration-200 hover:no-underline"
                >
                  Get in Touch
                </a>
                <a
                  href="/approach"
                  className="px-8 py-3 bg-primary-800 text-white font-semibold rounded-lg border-2 border-primary-400 hover:bg-primary-900 hover:border-primary-300 transition-all duration-200 hover:no-underline"
                >
                  Our Approach
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Partner With Us
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise in identifying, acquiring, and managing
                high-performing commercial real estate assets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Data-Driven Strategy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous market analysis and financial modeling guide every
                    investment decision, ensuring disciplined capital allocation
                  </p>
                </div>
              </Card>

              <Card hover>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Operational Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep hands-on experience in property operations and asset
                    management drives consistent performance improvement
                  </p>
                </div>
              </Card>

              <Card hover>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Consistent results across diverse commercial portfolios with
                    strong risk-adjusted returns for partners and investors
                  </p>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Explore Opportunities?
              </h2>
              <p className="text-xl text-primary-200 max-w-2xl mx-auto mb-10">
                We work with lenders, brokers, and property owners who value
                professionalism, transparency, and long-term relationships
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-primary-700 font-bold text-lg rounded-lg shadow-xl hover:bg-primary-50 hover:shadow-2xl transition-all duration-200 hover:no-underline"
              >
                Contact Us Today
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
