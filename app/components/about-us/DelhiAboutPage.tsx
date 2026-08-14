// app/components/about-us/DelhiAboutPage.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaMapMarkerAlt, FaMonument, FaUtensils, FaShoppingBag,
  FaLandmark, FaChurch, FaTree, FaMosque
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function DelhiAboutPage() {
  const { getLocationUrl } = useLocation();

  const stats = [
    { value: "50+", label: "Premium Vehicles" },
    { value: "200+", label: "Happy Customers" },
    { value: "4.9★", label: "Average Rating" },
    { value: "24/7", label: "Support Available" },
  ];

  const features = [
    {
      icon: FaCar,
      title: "Diverse Luxury Fleet",
      desc: "From elegant sedans to spacious SUVs and luxury vans, we have the perfect vehicle for every occasion."
    },
    {
      icon: FaUsers,
      title: "Expert Chauffeurs",
      desc: "Our professional drivers have deep knowledge of Delhi's streets and historic landmarks."
    },
    {
      icon: FaMonument,
      title: "Heritage Tour Specialists",
      desc: "We specialize in curated heritage tours covering Red Fort, Qutub Minar, Humayun's Tomb, and more."
    },
    {
      icon: FaClock,
      title: "Punctual Service",
      desc: "Timely pickups and drops guaranteed for airport transfers, corporate meetings, and events."
    },
    {
      icon: FaShieldAlt,
      title: "Safety First",
      desc: "Fully insured vehicles, regular maintenance, and safety protocols for every journey."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local Expertise",
      desc: "Navigate Delhi like a local with our chauffeurs who know every shortcut and landmark."
    },
  ];

  const landmarks = [
    { name: "Red Fort", icon: FaLandmark, color: "from-red-600 to-red-800" },
    { name: "Qutub Minar", icon: FaChurch, color: "from-amber-700 to-amber-900" },
    { name: "India Gate", icon: FaMonument, color: "from-blue-600 to-blue-800" },
    { name: "Lotus Temple", icon: FaTree, color: "from-emerald-600 to-emerald-800" },
    { name: "Jama Masjid", icon: FaMosque, color: "from-orange-600 to-orange-800" },
    { name: "Chandni Chowk", icon: FaShoppingBag, color: "from-yellow-600 to-yellow-800" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#e94560]/30">
              <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
              <span className="text-[#e94560] font-medium text-sm">About Urban Cruise Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Discover Delhi with{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Urban Cruise
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Experience the heart of India's capital in luxury and comfort. From historic 
              monuments to modern marvels, we make every journey through Delhi unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Why Choose Us in Delhi?
            </h2>
            <p className="text-gray-600 text-lg">
              We combine luxury, reliability, and local expertise to deliver the best 
              urban cruising experience in Delhi NCR.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-xl mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Explore Delhi's Iconic Landmarks
            </h2>
            <p className="text-gray-600 text-lg">
              Our chauffeurs will take you to the most iconic spots in the capital city.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {landmarks.map((landmark, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${landmark.color} p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <landmark.icon className="w-8 h-8 mb-2" />
                <p className="font-semibold">{landmark.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Delhi?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book your premium cruise experience today and discover the magic of Delhi 
            in comfort and style.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

