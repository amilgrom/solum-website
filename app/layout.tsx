import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solum Real Estate Group",
  description: "Professional real estate investment and management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
