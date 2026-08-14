// app/components/careers/DelhiCareersPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaBriefcase, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaGraduationCap, FaChartLine, FaGlobe,
  FaHandshake, FaUserTie, FaRocket, FaLeaf,
  FaArrowRight, FaCheck, FaTrophy, FaHeart
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function DelhiCareersPage() {
  const { getLocationUrl } = useLocation();
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const stats = [
    { value: "50+", label: "Team Members" },
    { value: "5+", label: "Years of Excellence" },
    { value: "4.8★", label: "Employee Rating" },
    { value: "10+", label: "Open Positions" },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Fast Career Growth",
      desc: "Rapid promotion opportunities based on performance"
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Development",
      desc: "Regular training sessions and skill development programs"
    },
    {
      icon: FaHeart,
      title: "Health & Wellness",
      desc: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: FaTrophy,
      title: "Performance Bonuses",
      desc: "Competitive bonuses and incentives for top performers"
    },
    {
      icon: FaUsers,
      title: "Great Culture",
      desc: "Collaborative and inclusive work environment"
    },
    {
      icon: FaLeaf,
      title: "Work-Life Balance",
      desc: "Flexible working hours and generous leave policies"
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Luxury Car Driver",
      department: "Operations",
      location: "Delhi NCR",
      type: "Full-Time",
      experience: "3-5 years",
      description: "Drive premium vehicles for high-profile clients in Delhi NCR. Must have excellent driving skills and customer service orientation.",
      requirements: [
        "Valid commercial driving license",
        "3+ years of professional driving experience",
        "Knowledge of Delhi NCR routes",
        "Excellent communication skills",
        "Professional appearance and demeanor"
      ]
    },
    {
      id: 2,
      title: "Fleet Operations Manager",
      department: "Operations",
      location: "Delhi",
      type: "Full-Time",
      experience: "5-8 years",
      description: "Manage our growing fleet of luxury vehicles in Delhi. Oversee maintenance, driver coordination, and operational efficiency.",
      requirements: [
        "MBA or relevant degree",
        "5+ years in fleet management",
        "Strong leadership skills",
        "Experience with fleet management software",
        "Knowledge of Delhi's transportation ecosystem"
      ]
    },
    {
      id: 3,
      title: "Customer Experience Executive",
      department: "Customer Service",
      location: "Delhi NCR",
      type: "Full-Time",
      experience: "1-3 years",
      description: "Deliver exceptional customer experience through phone, email, and chat support for our Delhi clients.",
      requirements: [
        "Bachelor's degree",
        "1-3 years in customer service",
        "Excellent communication skills",
        "Problem-solving abilities",
        "Knowledge of CRM systems"
      ]
    },
    {
      id: 4,
      title: "Marketing & Brand Manager",
      department: "Marketing",
      location: "Delhi",
      type: "Full-Time",
      experience: "4-7 years",
      description: "Lead marketing initiatives for Urban Cruise Delhi. Build brand presence and drive customer acquisition.",
      requirements: [
        "MBA in Marketing",
        "4-7 years of marketing experience",
        "Digital marketing expertise",
        "Creative thinking",
        "Analytical skills"
      ]
    },
  ];

  const cultureValues = [
    "Customer First",
    "Excellence in Service",
    "Teamwork & Collaboration",
    "Innovation & Growth",
    "Integrity & Trust",
    "Respect for All"
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
              <span className="text-[#e94560] font-medium text-sm">Careers at Urban Cruise Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Join Our Team in{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Delhi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Be part of Delhi's premier luxury transportation company. Grow your career while 
              delivering exceptional experiences to our valued customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#e94560]/30"
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

      {/* Why Join Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Why Join Urban Cruise Delhi?
            </h2>
            <p className="text-gray-600 text-lg">
              We're more than just a transportation company. We're a family that values 
              excellence, innovation, and employee growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#e94560]/10 flex items-center justify-center text-[#e94560] text-xl mb-4">
                  <benefit.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{benefit.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Culture & Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do at Urban Cruise Delhi.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-[#e94560]/10 to-[#ff6b6b]/10 p-4 rounded-xl"
              >
                <FaCheck className="text-[#e94560] text-sm" />
                <span className="text-[#1a1a2e] font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Open Positions in Delhi
            </h2>
            <p className="text-gray-600 text-lg">
              Find your dream job at Urban Cruise Delhi. Join us and be part of something special.
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
                      <h3 className="text-lg font-semibold text-[#1a1a2e]">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBriefcase className="text-[#e94560]" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBuilding className="text-[#e94560]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaClock className="text-[#e94560]" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaGraduationCap className="text-[#e94560]" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm rounded-full">
                        Apply Now
                      </span>
                      <FaArrowRight className={`text-[#e94560] transition-transform duration-300 ${activeJob === index ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>
                
                {activeJob === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    <h4 className="font-semibold text-[#1a1a2e] text-sm mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Link
                      href={getLocationUrl("/contact-us")}
                      className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-[#e94560] text-white text-sm rounded-full hover:bg-[#c73652] transition-colors duration-300"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#e94560] to-[#ff6b6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Team?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards an exciting career with Urban Cruise Delhi. 
            We're looking for passionate individuals who love what they do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#e94560] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

