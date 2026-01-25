export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-zinc-900">Solum Real Estate Group</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Welcome to Solum Real Estate Group
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Professional real estate investment and management.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Solum Real Estate Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
