import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden relative bg-[#F2EADF] flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Solum Real Estate Group"
        width={420}
        height={160}
        priority
        className="max-w-[95vw] max-h-[65vh] w-auto h-auto"
      />
      <p className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[90vw] text-center text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wider sm:tracking-widest sm:whitespace-nowrap uppercase text-[#7B8C65] font-medium">
        Strategic Commercial Real Estate Investing
      </p>
    </main>
  );
}
