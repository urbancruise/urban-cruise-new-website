// app/components/about/PuneAbout.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, FaUniversity } from "react-icons/fa";

export default function PuneAbout() {
  const { getLocationUrl } = useLocation();

  const features = [
    {
      icon: FaCar,
      title: "Quality Fleet",
      desc: "35+ well-maintained vehicles for every need"
    },
    {
      icon: FaUsers,
      title: "Heritage Experts",
      desc: "Drivers knowledgeable about Pune's history"
    },
    {
      icon: FaStar,
      title: "Highly Rated",
      desc: "180+ happy customers with 4.8/5 rating"
    },
    {
      icon: FaClock,
      title: "Flexible Service",
      desc: "Customized schedules for your convenience"
    },
    {
      icon: FaShieldAlt,
      title: "Safe Travel",
      desc: "Well-maintained vehicles with safety checks"
    },
    {
      icon: FaUniversity,
      title: "Heritage Tours",
      desc: "Specialized in historical & cultural tours"
    }
  ];

  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00b894]/10 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full mb-4 xs:mb-5">
              <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#00b894] rounded-full animate-pulse" />
              <span className="text-[#00b894] font-medium text-[10px] xs:text-xs sm:text-sm">About Urban Cruise Pune</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1a0a] dark:text-white leading-tight mb-3 xs:mb-4">
              Explore the{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Oxford of the East
              </span>
            </h2>

            <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 xs:mb-6 leading-relaxed">
              Urban Cruise Pune combines heritage charm with modern comfort. We help you 
              discover the cultural richness of Pune while providing premium transportation 
              services across the city and beyond.
            </p>

            <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400 mb-6 xs:mb-8 leading-relaxed">
              From the historic Shaniwar Wada to the vibrant Koregaon Park, from educational 
              institutes to IT parks - we know Pune like the back of our hand and ensure 
              your journey is always memorable.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center justify-center px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30 text-xs xs:text-sm sm:text-base"
              >
                Book Now
                <svg className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 ml-1.5 xs:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={getLocationUrl("/vehicles")}
                className="inline-flex items-center justify-center px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 border-2 border-[#00b894] text-[#00b894] font-semibold rounded-full transition-all duration-300 hover:bg-[#00b894] hover:text-white text-xs xs:text-sm sm:text-base"
              >
                View Fleet
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Features */}
          <div className="bg-gradient-to-br from-[#0a1a0a] to-[#1a2a1a] rounded-2xl p-6 xs:p-8 sm:p-10 shadow-xl">
            <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 xs:p-5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2 xs:mb-3">
                    <div className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 rounded-full bg-[#00b894]/20 flex items-center justify-center text-[#00b894] text-sm xs:text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon />
                    </div>
                    <h3 className="text-white font-semibold text-xs xs:text-sm sm:text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-4 xs:mt-5 sm:mt-6 pt-4 xs:pt-5 sm:pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold text-xs xs:text-sm">4.8/5</span>
                </div>
                <span className="text-gray-400 text-[10px] xs:text-xs">180+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

