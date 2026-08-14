// app/components/partner/GurugramPartnerPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaHandshake, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaChartLine, FaGlobe, FaRocket,
  FaArrowRight, FaCheck, FaTrophy, FaHeart,
  FaCar, FaBriefcase, FaUserTie, FaLaptop,
  FaPhone, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function GurugramPartnerPage() {
  const { getLocationUrl } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const stats = [
    { value: "45+", label: "Corporate Partners", icon: FaUsers },
    { value: "150+", label: "Happy Clients", icon: FaStar },
    { value: "98%", label: "Partner Retention", icon: FaHeart },
    { value: "4.9★", label: "Partner Rating", icon: FaTrophy },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Corporate Access",
      desc: "Access to India's largest corporate client base in Gurugram"
    },
    {
      icon: FaGlobe,
      title: "Global Standards",
      desc: "Partner with international service standards and practices"
    },
    {
      icon: FaHandshake,
      title: "Strategic Partnerships",
      desc: "Build long-term strategic partnerships with leading corporations"
    },
    {
      icon: FaChartLine,
      title: "High Growth Potential",
      desc: "Tap into the rapidly growing corporate travel market"
    },
    {
      icon: FaUsers,
      title: "B2B Network",
      desc: "Connect with a vast network of B2B clients and partners"
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Support",
      desc: "Dedicated account management and enterprise-level support"
    },
  ];

  const partnerTypes = [
    {
      title: "Corporate Fleets",
      icon: FaBuilding,
      description: "Corporate fleet owners looking to optimize utilization",
      benefits: ["Consistent bookings", "Enterprise rates", "Dedicated management"]
    },
    {
      title: "Event Management",
      icon: FaBriefcase,
      description: "Event management companies needing reliable transport",
      benefits: ["Bulk bookings", "Special event rates", "Priority service"]
    },
    {
      title: "Corporate Travel",
      icon: FaLaptop,
      description: "Corporate travel agencies and consultants",
      benefits: ["Exclusive corporate rates", "Flexible billing", "Dedicated support"]
    },
    {
      title: "Individual Professionals",
      icon: FaUserTie,
      description: "Professional drivers with corporate-grade vehicles",
      benefits: ["Regular corporate bookings", "Fair compensation", "Professional training"]
    },
  ];

  const successStories = [
    {
      name: "Gurugram Corporate Connect",
      type: "Corporate Fleet",
      story: "Partnered with Urban Cruise Gurugram to serve 50+ corporate clients",
      result: "80% fleet utilization increase"
    },
    {
      name: "Event Masters",
      type: "Event Management",
      story: "Specialized in corporate events, doubled event bookings",
      result: "200+ events transported"
    },
    {
      name: "Business Travel Pro",
      type: "Corporate Travel Agency",
      story: "Partnered to provide premium travel solutions for executives",
      result: "500+ executive trips completed"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner Application:", formData);
    alert("Thank you! Our partnership team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

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
              <span className="text-[#a29bfe] font-medium text-sm">Partner Program - Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Corporate Partnerships in{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Millennium City
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Join the leading corporate transportation network in Gurugram. Partner with 
              us to serve India's top corporations and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6c5ce7]/30"
              >
                Apply Now
                <IoMdArrowForward className="w-4 h-4" />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
              >
                View Benefits
              </a>
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
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#6c5ce7] text-2xl" />
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the corporate partnership benefits with Urban Cruise Gurugram.
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

      {/* Partner Types Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Partnership Models
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the partnership model that best fits your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7] text-xl mb-4">
                  <type.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1d] mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-[#6c5ce7] text-xs" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our corporate partners in Gurugram.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6c5ce7]/10 flex items-center justify-center text-[#6c5ce7]">
                    <FaHandshake />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0c0c1d]">{story.name}</h4>
                    <p className="text-xs text-gray-500">{story.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{story.story}</p>
                <div className="bg-[#6c5ce7]/10 px-3 py-1 rounded-full inline-block">
                  <span className="text-[#6c5ce7] text-xs font-medium">{story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="apply" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Apply for Partnership
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below to start your partnership journey with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent"
                  placeholder="Tell us about your business and partnership interest..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#6c5ce7] hover:bg-[#5a4bd1] text-white font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#6c5ce7]/30"
            >
              Submit Partnership Application
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#6c5ce7] to-[#8b7cf7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join the Urban Cruise Gurugram corporate network and unlock new business opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#6c5ce7] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
              <IoMdArrowForward className="w-5 h-5" />
            </a>
            <Link
              href={getLocationUrl("/contact-us")}
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Partnership Team
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

