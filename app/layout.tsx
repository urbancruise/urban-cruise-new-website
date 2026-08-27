import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LocationProvider } from "./context/LocationContext";
import SocialMedia from "./components/social-media/SocialMedia";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Cruise - Premium Urban Cruising Experience",
  description: "Your premium urban cruising experience. Book luxury vehicles for city tours, airport transfers, and more.",
  keywords: "urban cruise, luxury car rental, city tours, airport transfers, vehicle rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#F5F2E9]`}>
        <LocationProvider>
          <Navbar />
          {/* <main className="flex-grow pt-28 md:pt-32"> */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <SocialMedia />
        </LocationProvider>
      </body>
    </html>
  );
}


