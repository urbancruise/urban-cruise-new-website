// app/components/careers/MumbaiCareersPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaBriefcase, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaGraduationCap, FaChartLine, FaGlobe,
  FaHandshake, FaUserTie, FaRocket, FaLeaf,
  FaArrowRight, FaCheck, FaTrophy, FaHeart,
  FaFilm, FaUmbrellaBeach, FaUtensils
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiCareersPage() {
  const { getLocationUrl } = useLocation();
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const stats = [
    { value: "60+", label: "Team Members" },
    { value: "4+", label: "Years of Excellence" },
    { value: "4.8★", label: "Employee Rating" },
    { value: "12+", label: "Open Positions" },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Rapid Career Growth",
      desc: "Fast-track promotions and career advancement opportunities"
    },
    {
      icon: FaFilm,
      title: "Bollywood Connections",
      desc: "Unique opportunities to work in Mumbai's entertainment industry"
    },
    {
      icon: FaUmbrellaBeach,
      title: "Coastal Office Locations",
      desc: "Work in prime locations with stunning sea views"
    },
    {
      icon: FaGraduationCap,
      title: "Continuous Learning",
      desc: "Regular training programs and skill development workshops"
    },
    {
      icon: FaUsers,
      title: "Diverse Team Culture",
      desc: "Work with a diverse, talented team from various backgrounds"
    },
    {
      icon: FaUtensils,
      title: "Food & Fun",
      desc: "Regular team outings and Mumbai's best culinary experiences"
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Luxury Chauffeur - Premium Vehicles",
      department: "Operations",
      location: "Mumbai",
      type: "Full-Time",
      experience: "3-6 years",
      description: "Drive high-end luxury vehicles for celebrities, executives, and VIPs in Mumbai.",
      requirements: [
        "Valid commercial driving license",
        "3-6 years of luxury driving experience",
        "Excellent knowledge of Mumbai routes",
        "Professional appearance and communication",
        "VIP service experience preferred"
      ]
    },
    {
      id: 2,
      title: "Business Development Manager",
      department: "Sales",
      location: "Mumbai",
      type: "Full-Time",
      experience: "5-8 years",
      description: "Drive business growth and build strategic partnerships in Mumbai's corporate and entertainment sectors.",
      requirements: [
        "MBA or relevant degree",
        "5-8 years of business development experience",
        "Strong network in Mumbai",
        "Excellent communication skills",
        "Strategic thinking abilities"
      ]
    },
    {
      id: 3,
      title: "Customer Experience Manager",
      department: "Customer Service",
      location: "Mumbai",
      type: "Full-Time",
      experience: "4-7 years",
      description: "Lead customer experience initiatives and ensure exceptional service delivery for all Mumbai clients.",
      requirements: [
        "Bachelor's degree",
        "4-7 years in customer experience",
        "Leadership experience",
        "Problem-solving skills",
        "Knowledge of luxury service standards"
      ]
    },
    {
      id: 4,
      title: "Fleet Maintenance Supervisor",
      department: "Operations",
      location: "Mumbai",
      type: "Full-Time",
      experience: "3-6 years",
      description: "Oversee maintenance and servicing of Urban Cruise's premium fleet in Mumbai.",
      requirements: [
        "Mechanical engineering or relevant diploma",
        "3-6 years of fleet maintenance experience",
        "Knowledge of luxury vehicles",
        "Team management skills",
        "Strong attention to detail"
      ]
    },
  ];

  const cultureValues = [
    "Excellence in Service",
    "Innovation & Creativity",
    "Teamwork & Collaboration",
    "Customer First",
    "Integrity & Trust",
    "Celebrate Success"
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
              <span className="text-[#ff6b6b] font-medium text-sm">Careers at Urban Cruise Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Your Dream Career in{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Mumbai
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Join the heart of Mumbai's luxury transportation industry. Work in the city 
              that never sleeps and be part of something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
              >
                View Openings
                <IoMdArrowForward className="w-4 h-4" />
              </a>
              <Link
                href={getLocationUrl("/contact-us")}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
              >
                Contact HR
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

      {/* Why Join Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Why Join Urban Cruise Mumbai?
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the energy of Mumbai while building a rewarding career with 
              the city's premier luxury transportation company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-xl mb-4">
                  <benefit.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1e] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Our Vibrant Culture
            </h2>
            <p className="text-gray-600 text-lg">
              The values that make Urban Cruise Mumbai a great place to work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-[#ff6b6b]/10 to-[#feca57]/10 p-4 rounded-xl"
              >
                <FaCheck className="text-[#ff6b6b] text-sm" />
                <span className="text-[#0c0c1e] font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Open Positions in Mumbai
            </h2>
            <p className="text-gray-600 text-lg">
              Find exciting career opportunities at Urban Cruise Mumbai.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((job, index) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setActiveJob(activeJob === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0c0c1e]">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBriefcase className="text-[#ff6b6b]" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBuilding className="text-[#ff6b6b]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaClock className="text-[#ff6b6b]" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaGraduationCap className="text-[#ff6b6b]" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm rounded-full">
                        Apply Now
                      </span>
                      <FaArrowRight className={`text-[#ff6b6b] transition-transform duration-300 ${activeJob === index ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>
                
                {activeJob === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    <h4 className="font-semibold text-[#0c0c1e] text-sm mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Link
                      href={getLocationUrl("/contact-us")}
                      className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-[#ff6b6b] text-white text-sm rounded-full hover:bg-[#e55a5a] transition-colors duration-300"
                    >
                      Apply Now
                      <IoMdArrowForward className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Shine in Mumbai?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join Urban Cruise Mumbai and be part of the city's most exciting 
            luxury transportation company. Your dream career awaits!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ff6b6b] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Positions
              <IoMdArrowForward className="w-5 h-5" />
            </a>
            <Link
              href={getLocationUrl("/contact-us")}
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact HR Team
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

