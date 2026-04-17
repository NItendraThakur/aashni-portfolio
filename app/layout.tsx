import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aashni Khurana — Research Scientist",
  description:
    "Portfolio of Aashni Khurana, Research Scientist at UC San Diego Health. 4+ years across GMP batch release, HPLC method development, and nanoparticle therapeutics research.",
  openGraph: {
    title: "Aashni Khurana — Research Scientist",
    description: "Analytical chemist turning data into drug development decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white min-h-screen antialiased">{children}</body>
    </html>
  );
}
