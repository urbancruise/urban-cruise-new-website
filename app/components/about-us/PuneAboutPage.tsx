// app/components/about-us/PuneAboutPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaUniversity, FaBook, FaGraduationCap, FaTree,
  FaMountain, FaChurch, FaBuilding, FaLaptop
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function PuneAboutPage() {
  const { getLocationUrl } = useLocation();

  const stats = [
    { value: "35+", label: "Vehicle Options" },
    { value: "180+", label: "Happy Customers" },
    { value: "4.8★", label: "Average Rating" },
    { value: "100%", label: "Heritage Certified" },
  ];

  const features = [
    {
      icon: FaUniversity,
      title: "Heritage Tour Specialists",
      desc: "Expert in historical tours covering Shaniwar Wada, Aga Khan Palace, and more."
    },
    {
      icon: FaCar,
      title: "Quality Fleet",
      desc: "Well-maintained vehicles perfect for exploring Pune's cultural and heritage sites."
    },
    {
      icon: FaUsers,
      title: "Cultural Experts",
      desc: "Drivers with deep knowledge of Pune's history, culture, and local attractions."
    },
    {
      icon: FaClock,
      title: "Flexible Service",
      desc: "Customized schedules for heritage tours, educational visits, and business travel."
    },
    {
      icon: FaShieldAlt,
      title: "Safe & Reliable",
      desc: "Regular maintenance, safety checks, and professional chauffeurs."
    },
    {
      icon: FaBook,
      title: "Educational Tours",
      desc: "Specialized in college visits, educational tours, and cultural excursions."
    },
  ];

  const attractions = [
    { icon: FaChurch, label: "Shaniwar Wada", color: "from-amber-600 to-amber-800" },
    { icon: FaBuilding, label: "Aga Khan Palace", color: "from-blue-600 to-blue-800" },
    { icon: FaMountain, label: "Sinhagad Fort", color: "from-green-600 to-green-800" },
    { icon: FaUniversity, label: "Pune University", color: "from-red-600 to-red-800" },
    { icon: FaTree, label: "Osho Garden", color: "from-emerald-600 to-emerald-800" },
    { icon: FaLaptop, label: "IT Parks", color: "from-purple-600 to-purple-800" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55efc4] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#00b894]/30">
              <span className="w-2 h-2 bg-[#00b894] rounded-full animate-pulse" />
              <span className="text-[#55efc4] font-medium text-sm">About Urban Cruise Pune</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Explore the{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Oxford of the East
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Discover Pune's rich culture and heritage. From historical forts to modern IT hubs, 
              experience the best of Pune with Urban Cruise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#0a1a0a] to-[#1a2a1a]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Why Choose Us in Pune?
            </h2>
            <p className="text-gray-600 text-lg">
              We combine heritage knowledge with modern comfort to deliver the best 
              urban cruising experience in Pune.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#00b894]/10 flex items-center justify-center text-[#00b894] text-xl mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0a1a0a] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Discover Pune's Gems
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the most iconic attractions in the cultural capital of Maharashtra.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${attraction.color} p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300 text-center`}
              >
                <attraction.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">{attraction.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Pune?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium cruise experience today and discover the cultural heart 
            of Maharashtra in comfort and style.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#00b894] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

