// app/components/hero/DefaultHero.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";

export default function DefaultHero() {
  const { getLocationUrl, location } = useLocation();
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <section className="relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#1a1a2e]/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#03C35E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#03C35E]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#03C35E]/20 backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-full mb-4 xs:mb-5 sm:mb-6 border border-[#03C35E]/30">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#03C35E] rounded-full animate-pulse" />
            <span className="text-[#03C35E] font-medium text-[10px] xs:text-xs sm:text-sm">{locationName}</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] xs:leading-[1.15] sm:leading-[1.2] mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Explore <span className="text-[#03C35E]">{locationName}</span> with Urban Cruise
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-5 xs:mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Experience premium urban cruising in {locationName}. Book luxury vehicles for city tours, airport transfers, and more.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
            <Link
              href={getLocationUrl("/book")}
              className="inline-flex items-center justify-center px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-[#03C35E] hover:bg-[#02a84e] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#03C35E]/30 text-xs xs:text-sm sm:text-base"
            >
              Book Your Ride
              <svg className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 ml-1.5 xs:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={getLocationUrl("/services")}
              className="inline-flex items-center justify-center px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 text-xs xs:text-sm sm:text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

