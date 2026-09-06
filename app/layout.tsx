import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LocationProvider } from "./context/LocationContext";
import SocialMedia from "./components/social-media/SocialMedia";
import JsonLd from "./components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { createSiteMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#F5F2E9]`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
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
