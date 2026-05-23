import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F2EADF]">
      <Image
        src="/logo.png"
        alt="Solum Real Estate Group"
        width={420}
        height={160}
        priority
        className="w-[280px] sm:w-[360px] md:w-[420px] h-auto"
      />
      <p className="mt-6 text-base sm:text-lg tracking-widest uppercase text-[#7B8C65] font-medium">
        Strategic Commercial Real Estate Investing
      </p>
    </main>
  );
}
