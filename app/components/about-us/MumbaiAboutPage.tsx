// app/components/about-us/MumbaiAboutPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaUmbrellaBeach, FaUtensils, FaFilm, FaShoppingBag,
  FaPlane, FaShip, FaTrain, FaSubway, FaRoad
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function MumbaiAboutPage() {
  const { getLocationUrl } = useLocation();

  const stats = [
    { value: "40+", label: "Premium Fleet" },
    { value: "300+", label: "Happy Customers" },
    { value: "4.8★", label: "Average Rating" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      icon: FaCar,
      title: "Diverse Premium Fleet",
      desc: "From luxury sedans to spacious SUVs, we have the perfect vehicle for Mumbai's streets."
    },
    {
      icon: FaUsers,
      title: "Local Street Experts",
      desc: "Our chauffeurs know every shortcut and the best routes through Mumbai's traffic."
    },
    {
      icon: FaUmbrellaBeach,
      title: "Coastal Route Specialists",
      desc: "Expert in navigating Mumbai's beautiful coastal roads and sea links."
    },
    {
      icon: FaClock,
      title: "24/7 Availability",
      desc: "Round-the-clock service for the city that never sleeps."
    },
    {
      icon: FaShieldAlt,
      title: "Safety First",
      desc: "Well-maintained vehicles, insured fleet, and safety protocols for every trip."
    },
    {
      icon: FaFilm,
      title: "Bollywood Expertise",
      desc: "Experience Mumbai's film city and iconic locations with our local experts."
    },
  ];

  const experiences = [
    { icon: FaRoad, label: "Sea Link Drive" },
    { icon: FaUmbrellaBeach, label: "Marine Drive" },
    { icon: FaUtensils, label: "Food Tours" },
    { icon: FaShoppingBag, label: "Shopping Spree" },
    { icon: FaFilm, label: "Film City Tour" },
    { icon: FaShip, label: "Gateway Cruise" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#ff6b6b]/30">
              <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
              <span className="text-[#ff6b6b] font-medium text-sm">About Urban Cruise Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Cruise Through{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Maximum City
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Experience the city that never sleeps. From Marine Drive to Bandra, explore 
              Mumbai's iconic landmarks with our premium fleet and expert chauffeurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
              >
                Book Your Ride
                <IoMdArrowForward className="w-4 h-4" />
              </Link>
              <Link
                href={getLocationUrl("/vehicles")}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
              >
                View Our Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#0c0c1e] to-[#1a0a2e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Why Choose Us in Mumbai?
            </h2>
            <p className="text-gray-600 text-lg">
              We combine local expertise with premium service to deliver the best 
              urban cruising experience in Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-xl mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1e] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Mumbai Experiences
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the best of Mumbai with our curated experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#ff6b6b] to-[#ff9a9a] p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                <exp.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">{exp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Mumbai?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium cruise experience today and discover the magic of Mumbai 
            in comfort and style.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ff6b6b] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

