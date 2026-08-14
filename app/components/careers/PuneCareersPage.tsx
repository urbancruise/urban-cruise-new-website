// app/components/careers/PuneCareersPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaBriefcase, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaGraduationCap, FaChartLine, FaGlobe,
  FaHandshake, FaUserTie, FaRocket, FaLeaf,
  FaArrowRight, FaCheck, FaTrophy, FaHeart,
  FaUniversity, FaBook, FaTree
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function PuneCareersPage() {
  const { getLocationUrl } = useLocation();
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const stats = [
    { value: "40+", label: "Team Members" },
    { value: "3+", label: "Years of Excellence" },
    { value: "4.8★", label: "Employee Rating" },
    { value: "6+", label: "Open Positions" },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Career Advancement",
      desc: "Clear career paths with regular promotions and growth opportunities"
    },
    {
      icon: FaUniversity,
      title: "Academic Connections",
      desc: "Work with Pune's premier educational institutions and heritage sites"
    },
    {
      icon: FaGraduationCap,
      title: "Learning Culture",
      desc: "Continuous learning environment with training and development programs"
    },
    {
      icon: FaTree,
      title: "Green Work Environment",
      desc: "Work in Pune's beautiful, green surroundings with a focus on sustainability"
    },
    {
      icon: FaUsers,
      title: "Close-knit Team",
      desc: "Work in a collaborative, family-like environment with supportive colleagues"
    },
    {
      icon: FaBook,
      title: "Knowledge Sharing",
      desc: "Regular knowledge sharing sessions and cultural exchange programs"
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Heritage Tour Guide & Chauffeur",
      department: "Operations",
      location: "Pune",
      type: "Full-Time",
      experience: "2-5 years",
      description: "Drive and guide guests through Pune's rich heritage sites while providing premium transportation services.",
      requirements: [
        "Valid commercial driving license",
        "2-5 years of driving experience",
        "Knowledge of Pune's heritage sites",
        "Excellent communication skills",
        "Passion for history and culture"
      ]
    },
    {
      id: 2,
      title: "Operations Manager",
      department: "Operations",
      location: "Pune",
      type: "Full-Time",
      experience: "5-8 years",
      description: "Lead operations for Urban Cruise Pune, managing fleet, drivers, and service excellence.",
      requirements: [
        "MBA or relevant degree",
        "5-8 years of operations management",
        "Experience in transportation industry",
        "Strong leadership skills",
        "Knowledge of Pune's geography"
      ]
    },
    {
      id: 3,
      title: "Marketing & Brand Executive",
      department: "Marketing",
      location: "Pune",
      type: "Full-Time",
      experience: "2-5 years",
      description: "Build Urban Cruise's brand presence in Pune through strategic marketing initiatives.",
      requirements: [
        "Bachelor's degree in Marketing",
        "2-5 years of marketing experience",
        "Knowledge of Pune's market",
        "Creative thinking",
        "Digital marketing skills"
      ]
    },
    {
      id: 4,
      title: "Customer Service Specialist",
      department: "Customer Service",
      location: "Pune",
      type: "Full-Time",
      experience: "1-3 years",
      description: "Deliver exceptional customer service to Urban Cruise clients in Pune.",
      requirements: [
        "Bachelor's degree",
        "1-3 years in customer service",
        "Excellent communication skills",
        "Problem-solving abilities",
        "Knowledge of Pune's culture"
      ]
    },
  ];

  const cultureValues = [
    "Cultural Excellence",
    "Heritage & Pride",
    "Teamwork & Collaboration",
    "Customer First",
    "Innovation & Growth",
    "Sustainability & Care"
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
              <span className="text-[#55efc4] font-medium text-sm">Careers at Urban Cruise Pune</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Your Future in{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Pune
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Join the cultural capital of Maharashtra. Work with heritage, serve with pride, 
              and grow your career in Pune's most trusted transportation company.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00b894] hover:bg-[#00a381] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00b894]/30"
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

      {/* Why Join Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Why Join Urban Cruise Pune?
            </h2>
            <p className="text-gray-600 text-lg">
              Be part of a company that celebrates Pune's rich culture and heritage while 
              delivering premium transportation services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#00b894]/10 flex items-center justify-center text-[#00b894] text-xl mb-4">
                  <benefit.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0a1a0a] mb-2">{benefit.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Our Culture in Pune
            </h2>
            <p className="text-gray-600 text-lg">
              The values that make Urban Cruise Pune a special place to work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-[#00b894]/10 to-[#55efc4]/10 p-4 rounded-xl"
              >
                <FaCheck className="text-[#00b894] text-sm" />
                <span className="text-[#0a1a0a] font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0a] mb-4">
              Open Positions in Pune
            </h2>
            <p className="text-gray-600 text-lg">
              Find your perfect role at Urban Cruise Pune and start your journey.
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
                      <h3 className="text-lg font-semibold text-[#0a1a0a]">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBriefcase className="text-[#00b894]" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBuilding className="text-[#00b894]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaClock className="text-[#00b894]" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaGraduationCap className="text-[#00b894]" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#00b894]/10 text-[#00b894] text-sm rounded-full">
                        Apply Now
                      </span>
                      <FaArrowRight className={`text-[#00b894] transition-transform duration-300 ${activeJob === index ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>
                
                {activeJob === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    <h4 className="font-semibold text-[#0a1a0a] text-sm mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Link
                      href={getLocationUrl("/contact-us")}
                      className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-[#00b894] text-white text-sm rounded-full hover:bg-[#00a381] transition-colors duration-300"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#00b894] to-[#55efc4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join Urban Cruise Pune and be part of a company that values culture, 
            heritage, and employee growth. Your dream career starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#00b894] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

