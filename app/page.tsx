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
        <section className="bg-gradient-to-b from-primary-50 to-white py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                Solum Real Estate Group
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                Professional CRE Investing
              </p>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Building value through strategic commercial real estate investments
              </p>
            </div>
          </Container>
        </section>

        {/* Value Propositions - Placeholder */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Strategic Approach
                </h3>
                <p className="text-gray-600">
                  Data-driven investment decisions focused on long-term value creation
                </p>
              </Card>

              <Card hover>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Experienced Team
                </h3>
                <p className="text-gray-600">
                  Deep expertise in commercial real estate operations and management
                </p>
              </Card>

              <Card hover>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  Consistent results across diverse commercial property portfolios
                </p>
              </Card>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
