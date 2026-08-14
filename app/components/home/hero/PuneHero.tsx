// app/components/hero/PuneHero.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";

export default function PuneHero() {
  const { getLocationUrl } = useLocation();

  return (
    <section className="relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0a]/95 via-[#1a2a1a]/85 to-[#0a2a1a]/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#00b894]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#55efc4]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00b894]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-full mb-4 xs:mb-5 sm:mb-6 border border-[#00b894]/30">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#00b894] rounded-full animate-pulse" />
            <span className="text-[#55efc4] font-medium text-[10px] xs:text-xs sm:text-sm">Pune</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] xs:leading-[1.15] sm:leading-[1.2] mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Explore the{' '}
            <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
              Oxford of the East
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-5 xs:mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Discover Pune's rich culture and heritage. From historical forts to modern IT hubs, experience the best of Pune with Urban Cruise.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
            <Link
              href={getLocationUrl("/book")}
              className="inline-flex items-center justify-center px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30 text-xs xs:text-sm sm:text-base"
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 mt-6 xs:mt-8 sm:mt-10 md:mt-12 pt-4 xs:pt-5 sm:pt-6 md:pt-8 border-t border-white/10">
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">35+</p>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Vehicle Options</p>
            </div>
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">180+</p>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">4.8★</p>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

