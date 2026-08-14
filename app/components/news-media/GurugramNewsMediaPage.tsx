// app/components/news-media/GurugramNewsMediaPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaNewspaper, FaTrophy, FaUsers, FaStar, FaArrowRight, FaCalendar, FaEye, FaShareAlt, FaBuilding, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export default function GurugramNewsMediaPage() {
  const { getLocationUrl } = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All News" },
    { id: "corporate", label: "Corporate" },
    { id: "industry", label: "Industry" },
    { id: "events", label: "Events" },
    { id: "awards", label: "Awards" },
  ];

  const stats = [
    { value: "150+", label: "Corporate Clients", icon: FaUsers },
    { value: "4.9★", label: "Average Rating", icon: FaStar },
    { value: "30+", label: "Luxury Fleet", icon: FaNewspaper },
    { value: "99%", label: "On-Time Delivery", icon: FaTrophy },
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Urban Cruise Expands Corporate Fleet in Gurugram",
      excerpt: "Urban Cruise adds 10 new luxury vehicles to its Gurugram corporate fleet, including Mercedes-Benz and premium SUVs for executive travel.",
      date: "January 18, 2026",
      category: "corporate",
      image: "/images/news/gurugram-fleet.jpg",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Urban Cruise Wins 'Best Corporate Transport Service' Award",
      excerpt: "Urban Cruise Gurugram recognized as the 'Best Corporate Transport Service' at the India Business Awards 2026.",
      date: "January 12, 2026",
      category: "awards",
      image: "/images/news/corporate-award.jpg",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Urban Cruise Partners with Leading Gurugram Corporations",
      excerpt: "Strategic partnerships with 5 major corporations in Gurugram to provide dedicated employee transportation solutions.",
      date: "January 8, 2026",
      category: "corporate",
      image: "/images/news/corporate-partnership.jpg",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Gurugram's Corporate Travel Trends 2026",
      excerpt: "Insights into the evolving corporate travel landscape in Gurugram and how Urban Cruise is leading the way.",
      date: "January 2, 2026",
      category: "industry",
      image: "/images/news/trends.jpg",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Urban Cruise Hosts Corporate Networking Event",
      excerpt: "Urban Cruise organized a successful networking event for corporate clients and partners in Gurugram.",
      date: "December 22, 2025",
      category: "events",
      image: "/images/news/networking.jpg",
      readTime: "3 min read"
    },
  ];

  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1d] via-[#1a1a3e] to-[#2d1b4e] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce7] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b894] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#6c5ce7]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#6c5ce7]/30">
              <span className="w-2 h-2 bg-[#6c5ce7] rounded-full animate-pulse" />
              <span className="text-[#a29bfe] font-medium text-sm">News & Media - Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              News &{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest news, achievements, and media coverage from Urban Cruise Gurugram.
            </p>
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

      {/* Featured News */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              Featured News
            </h2>
            <p className="text-gray-600 text-lg">
              The latest stories and updates from Urban Cruise Gurugram.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] p-8 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                  <div className="text-center text-white">
                    <FaBriefcase className="text-6xl mx-auto mb-4 opacity-50" />
                    <h3 className="text-2xl font-bold">Corporate Excellence</h3>
                    <p className="text-white/80">Making Headlines</p>
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-xs rounded-full mb-3">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-[#0c0c1d] mb-3">
                    Urban Cruise Gurugram: Leading Corporate Mobility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Read our featured article and discover how Urban Cruise is transforming corporate transportation in the Millennium City.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">January 2026</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#6c5ce7] font-semibold hover:underline"
                    >
                      Read Full Story
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c0c1d] mb-4">
              All News & Updates
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through our latest news and media coverage.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#6c5ce7]/20 to-[#a29bfe]/20 flex items-center justify-center">
                  <FaNewspaper className="text-5xl text-[#6c5ce7]/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#6c5ce7]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="text-[#6c5ce7]" />
                      {item.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === item.category)?.label || item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0c0c1d] mb-2 group-hover:text-[#6c5ce7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="text-[#6c5ce7] font-medium hover:underline text-sm flex items-center gap-1"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                    <button className="text-gray-400 hover:text-[#6c5ce7] transition-colors duration-300">
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}