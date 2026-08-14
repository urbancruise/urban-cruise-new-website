// app/components/partner/MumbaiPartnerPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { 
  FaHandshake, FaUsers, FaStar, FaClock, FaShieldAlt, 
  FaBuilding, FaChartLine, FaGlobe, FaRocket,
  FaArrowRight, FaCheck, FaTrophy, FaHeart,
  FaCar, FaFilm, FaUtensils, FaUmbrellaBeach,
  FaPhone, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

export default function MumbaiPartnerPage() {
  const { getLocationUrl } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const stats = [
    { value: "60+", label: "Active Partners", icon: FaUsers },
    { value: "300+", label: "Happy Customers", icon: FaStar },
    { value: "97%", label: "Partner Retention", icon: FaHeart },
    { value: "4.8★", label: "Partner Rating", icon: FaTrophy },
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Celebrity Access",
      desc: "Connect with Bollywood and entertainment industry clients"
    },
    {
      icon: FaGlobe,
      title: "Pan-Mumbai Network",
      desc: "Access to the entire Mumbai metropolitan area network"
    },
    {
      icon: FaHandshake,
      title: "Premium Partnerships",
      desc: "Partner with top-tier entertainment and corporate clients"
    },
    {
      icon: FaChartLine,
      title: "High Revenue Potential",
      desc: "Lucrative opportunities in Mumbai's premium market"
    },
    {
      icon: FaUsers,
      title: "Diverse Client Base",
      desc: "Access to celebrities, executives, and high-net-worth individuals"
    },
    {
      icon: FaShieldAlt,
      title: "Premium Support",
      desc: "24/7 premium support for all your partnership needs"
    },
  ];

  const partnerTypes = [
    {
      title: "Entertainment Partners",
      icon: FaFilm,
      description: "Production houses and entertainment companies needing transport",
      benefits: ["Bollywood network", "Premium rates", "Priority bookings"]
    },
    {
      title: "Tourism Partners",
      icon: FaUmbrellaBeach,
      description: "Tour operators and travel agencies in Mumbai",
      benefits: ["Tourist bookings", "Custom packages", "Coastal tours"]
    },
    {
      title: "Event Management",
      icon: FaUtensils,
      description: "Event companies specializing in premium events",
      benefits: ["Bulk bookings", "Event packages", "VIP services"]
    },
    {
      title: "Fleet Partners",
      icon: FaCar,
      description: "Fleet owners with premium vehicles",
      benefits: ["Consistent bookings", "Competitive rates", "Premium clients"]
    },
  ];

  const successStories = [
    {
      name: "Bollywood Transport Co",
      type: "Entertainment Partner",
      story: "Partnered to provide transport for film shoots and celebrity events",
      result: "50+ film productions served"
    },
    {
      name: "Mumbai Dream Tours",
      type: "Tourism Partner",
      story: "Specialized in luxury tours for international visitors",
      result: "1000+ tourists transported"
    },
    {
      name: "Event Masters Mumbai",
      type: "Event Management",
      story: "Provided premium transport for high-profile events",
      result: "200+ events executed"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#ff6b6b]/30">
              <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
              <span className="text-[#ff6b6b] font-medium text-sm">Partner Program - Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Partner with the Best in{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Maximum City
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Join Mumbai's premier urban transportation network. Partner with us to serve 
              Bollywood, corporate, and premium clients in the city that never sleeps.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b6b]/30"
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
      <section className="py-12 bg-gradient-to-r from-[#0c0c1e] to-[#1a0a2e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#ff6b6b] text-2xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the premium partnership benefits with Urban Cruise Mumbai.
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

      {/* Partner Types Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Explore partnership models in Mumbai's premium market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] text-xl mb-4">
                  <type.icon />
                </div>
                <h3 className="text-lg font-semibold text-[#0c0c1e] mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-[#ff6b6b] text-xs" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our premium partners in Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b]">
                    <FaHandshake />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0c0c1e]">{story.name}</h4>
                    <p className="text-xs text-gray-500">{story.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{story.story}</p>
                <div className="bg-[#ff6b6b]/10 px-3 py-1 rounded-full inline-block">
                  <span className="text-[#ff6b6b] text-xs font-medium">{story.result}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1e] mb-4">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                  placeholder="Tell us about your business and partnership interest..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-semibold py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#ff6b6b]/30"
            >
              Submit Partnership Application
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join the Urban Cruise Mumbai premium network and unlock exciting opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ff6b6b] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

