// app/components/careers/GurugramCareersPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaBriefcase, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaGraduationCap, FaChartLine, FaGlobe,
  FaHandshake, FaUserTie, FaRocket, FaLeaf,
  FaArrowRight, FaCheck, FaTrophy, FaHeart,
  FaLaptop, FaMoneyBillWave, FaPlane
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function GurugramCareersPage() {
  const { getLocationUrl } = useLocation();
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const stats = [
    { value: "45+", label: "Team Members" },
    { value: "3+", label: "Years of Excellence" },
    { value: "4.9★", label: "Employee Rating" },
    { value: "8+", label: "Open Positions" },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Fast Career Growth",
      desc: "Clear promotion paths and rapid advancement opportunities"
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Development",
      desc: "Regular training, workshops, and certification programs"
    },
    {
      icon: FaLaptop,
      title: "Modern Work Environment",
      desc: "State-of-the-art office and remote work options"
    },
    {
      icon: FaMoneyBillWave,
      title: "Competitive Compensation",
      desc: "Industry-leading salaries and performance bonuses"
    },
    {
      icon: FaUsers,
      title: "Collaborative Culture",
      desc: "Work with talented professionals in a supportive environment"
    },
    {
      icon: FaPlane,
      title: "Travel Opportunities",
      desc: "Chance to travel and work across different locations"
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Corporate Sales Executive",
      department: "Sales",
      location: "Gurugram",
      type: "Full-Time",
      experience: "2-4 years",
      description: "Drive corporate sales for Urban Cruise Gurugram. Build relationships with corporate clients and manage key accounts.",
      requirements: [
        "Bachelor's degree in Business",
        "2-4 years in corporate sales",
        "Excellent negotiation skills",
        "Knowledge of corporate travel needs",
        "Strong network in Gurugram"
      ]
    },
    {
      id: 2,
      title: "Fleet Operations Executive",
      department: "Operations",
      location: "Gurugram",
      type: "Full-Time",
      experience: "2-5 years",
      description: "Manage fleet operations, driver coordination, and ensure service excellence for corporate clients.",
      requirements: [
        "Bachelor's degree",
        "2-5 years in operations management",
        "Excellent organizational skills",
        "Experience with fleet management",
        "Problem-solving abilities"
      ]
    },
    {
      id: 3,
      title: "HR & Talent Acquisition Specialist",
      department: "Human Resources",
      location: "Gurugram",
      type: "Full-Time",
      experience: "3-6 years",
      description: "Lead talent acquisition, employee engagement, and HR operations for Urban Cruise Gurugram.",
      requirements: [
        "MBA in HR",
        "3-6 years of HR experience",
        "Recruitment expertise",
        "Strong interpersonal skills",
        "Knowledge of HR best practices"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Gurugram",
      type: "Full-Time",
      experience: "4-7 years",
      description: "Lead digital marketing strategies for Urban Cruise's corporate and B2B segment in Gurugram.",
      requirements: [
        "MBA in Marketing",
        "4-7 years in digital marketing",
        "Experience with B2B marketing",
        "Analytics expertise",
        "Creative thinking"
      ]
    },
  ];

  const cultureValues = [
    "Corporate Excellence",
    "Professional Growth",
    "Innovation & Creativity",
    "Teamwork & Collaboration",
    "Customer Focus",
    "Integrity & Transparency"
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
              <span className="text-[#a29bfe] font-medium text-sm">Careers at Urban Cruise Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Your Career in{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Millennium City
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Join India's leading corporate transportation company in Gurugram. 
              Elevate your career in a dynamic, fast-paced environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6c5ce7]/30"
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

      {/* Why Join Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Why Join Urban Cruise Gurugram?
            </h2>
            <p className="text-gray-600 text-lg">
              Be part of a company that values innovation, excellence, and employee well-being 
              in the corporate hub of India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-xl mb-4">
                  <benefit.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1d] mb-2">{benefit.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Our Corporate Culture
            </h2>
            <p className="text-gray-600 text-lg">
              The values that drive success at Urban Cruise Gurugram.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-[#6c5ce7]/10 to-[#a29bfe]/10 p-4 rounded-xl"
              >
                <FaCheck className="text-[#6c5ce7] text-sm" />
                <span className="text-[#0c0c1d] font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Open Positions in Gurugram
            </h2>
            <p className="text-gray-600 text-lg">
              Find your next career opportunity at Urban Cruise Gurugram.
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
                      <h3 className="text-lg font-semibold text-[#0c0c1d]">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBriefcase className="text-[#6c5ce7]" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaBuilding className="text-[#6c5ce7]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaClock className="text-[#6c5ce7]" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaGraduationCap className="text-[#6c5ce7]" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-sm rounded-full">
                        Apply Now
                      </span>
                      <FaArrowRight className={`text-[#6c5ce7] transition-transform duration-300 ${activeJob === index ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </button>
                
                {activeJob === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    <h4 className="font-semibold text-[#0c0c1d] text-sm mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Link
                      href={getLocationUrl("/contact-us")}
                      className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-[#6c5ce7] text-white text-sm rounded-full hover:bg-[#5a4bd1] transition-colors duration-300"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join Urban Cruise Gurugram and be part of India's leading corporate 
            transportation company. Your future starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#6c5ce7] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

