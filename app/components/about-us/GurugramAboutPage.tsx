// app/components/about-us/GurugramAboutPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaCar, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaBriefcase, FaChartLine, FaGlobe,
  FaHotel, FaPlane, FaCalendarCheck, FaHandshake
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function GurugramAboutPage() {
  const { getLocationUrl } = useLocation();

  const stats = [
    { value: "30+", label: "Luxury Vehicles" },
    { value: "150+", label: "Corporate Clients" },
    { value: "4.9★", label: "Average Rating" },
    { value: "99%", label: "On-Time Delivery" },
  ];

  const features = [
    {
      icon: FaBriefcase,
      title: "Corporate Travel Experts",
      desc: "Specialized in business travel solutions with professional chauffeurs and premium vehicles."
    },
    {
      icon: FaCar,
      title: "Executive Fleet",
      desc: "Luxury sedans, SUVs, and vans equipped for corporate executives and VIP clients."
    },
    {
      icon: FaClock,
      title: "Punctuality Guaranteed",
      desc: "On-time pickup and drop for airport transfers, client meetings, and corporate events."
    },
    {
      icon: FaShieldAlt,
      title: "Security & Privacy",
      desc: "Background-verified drivers, insured vehicles, and strict confidentiality protocols."
    },
    {
      icon: FaGlobe,
      title: "Global Standards",
      desc: "International service standards with local expertise in the Millennium City."
    },
    {
      icon: FaHandshake,
      title: "Partnership Focus",
      desc: "Long-term corporate partnerships with flexible billing and dedicated account management."
    },
  ];

  const services = [
    { icon: FaPlane, label: "Airport Transfers" },
    { icon: FaHotel, label: "Hotel Bookings" },
    { icon: FaCalendarCheck, label: "Event Transport" },
    { icon: FaBuilding, label: "Office Commute" },
    { icon: FaChartLine, label: "Executive Travel" },
    { icon: FaUsers, label: "Group Transport" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1d] via-[#1a1a3e] to-[#2d1b4e] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce7] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b894] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#6c5ce7]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#6c5ce7]/30">
              <span className="w-2 h-2 bg-[#6c5ce7] rounded-full animate-pulse" />
              <span className="text-[#a29bfe] font-medium text-sm">About Urban Cruise Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Drive Through{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Millennium City
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              The preferred choice for corporate travel in Gurugram. Experience seamless, 
              professional transportation with our premium fleet and expert chauffeurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={getLocationUrl("/book")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6c5ce7]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#0c0c1d] to-[#1a1a3e]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Why Choose Us in Gurugram?
            </h2>
            <p className="text-gray-600 text-lg">
              We understand the needs of corporate travelers and deliver excellence every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-xl mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1d] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Our Corporate Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive transportation solutions for businesses in Gurugram.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#6c5ce7] to-[#8b7cf7] p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                <service.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Corporate Excellence?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Partner with Urban Cruise Gurugram for all your corporate transportation needs.
          </p>
          <Link
            href={getLocationUrl("/book")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#6c5ce7] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
            <IoMdArrowForward className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
