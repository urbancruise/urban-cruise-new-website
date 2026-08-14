// app/components/news-media/DelhiNewsMediaPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaNewspaper, FaTrophy, FaUsers, FaStar, FaArrowRight, FaCalendar, FaEye, FaShareAlt } from "react-icons/fa";
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

export default function DelhiNewsMediaPage() {
  const { getLocationUrl } = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All News" },
    { id: "company", label: "Company" },
    { id: "industry", label: "Industry" },
    { id: "events", label: "Events" },
    { id: "awards", label: "Awards" },
  ];

  const stats = [
    { value: "200+", label: "Happy Customers", icon: FaUsers },
    { value: "4.9★", label: "Average Rating", icon: FaStar },
    { value: "50+", label: "Fleet Vehicles", icon: FaNewspaper },
    { value: "24/7", label: "Support Available", icon: FaTrophy },
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Urban Cruise Expands Luxury Fleet in Delhi",
      excerpt: "Urban Cruise adds 15 new luxury vehicles to its Delhi fleet, including Mercedes-Benz and Volvo buses, to meet growing demand.",
      date: "January 15, 2026",
      category: "company",
      image: "/images/news/fleet-expansion.jpg",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Urban Cruise Wins 'Best Urban Mobility Service' Award",
      excerpt: "Urban Cruise Delhi awarded the prestigious 'Best Urban Mobility Service' award at the India Transport Summit 2026.",
      date: "January 10, 2026",
      category: "awards",
      image: "/images/news/award.jpg",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Delhi Heritage Tours Now Available with Expert Guides",
      excerpt: "Urban Cruise launches specialized heritage tour packages with knowledgeable guides for Delhi's iconic landmarks.",
      date: "January 5, 2026",
      category: "events",
      image: "/images/news/heritage-tour.jpg",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Urban Cruise Introduces Eco-Friendly Vehicle Options",
      excerpt: "Urban Cruise Delhi adds hybrid and electric vehicles to its fleet, promoting sustainable urban mobility.",
      date: "December 28, 2025",
      category: "industry",
      image: "/images/news/eco-friendly.jpg",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Urban Cruise Partners with Delhi Tourism",
      excerpt: "Strategic partnership with Delhi Tourism to enhance visitor experiences across the capital.",
      date: "December 20, 2025",
      category: "company",
      image: "/images/news/partnership.jpg",
      readTime: "2 min read"
    },
  ];

  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#e94560]/30">
              <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
              <span className="text-[#e94560] font-medium text-sm">News & Media - Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              News &{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest news, achievements, and media coverage from Urban Cruise Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-2">
                  <stat.icon className="text-[#e94560] text-2xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Featured News
            </h2>
            <p className="text-gray-600 text-lg">
              The latest stories and updates from Urban Cruise Delhi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-[#e94560] to-[#ff6b6b] p-8 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                  <div className="text-center text-white">
                    <FaNewspaper className="text-6xl mx-auto mb-4 opacity-50" />
                    <h3 className="text-2xl font-bold">Urban Cruise</h3>
                    <p className="text-white/80">Making Headlines</p>
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-xs rounded-full mb-3">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
                    Urban Cruise Delhi: Redefining Urban Mobility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Read our featured article and discover how Urban Cruise is transforming transportation in the capital.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">January 2026</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#e94560] font-semibold hover:underline"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
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
                    ? "bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30"
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
                <div className="h-48 bg-gradient-to-br from-[#e94560]/20 to-[#ff6b6b]/20 flex items-center justify-center">
                  <FaNewspaper className="text-5xl text-[#e94560]/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#e94560]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="text-[#e94560]" />
                      {item.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === item.category)?.label || item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#e94560] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="text-[#e94560] font-medium hover:underline text-sm flex items-center gap-1"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                    <button className="text-gray-400 hover:text-[#e94560] transition-colors duration-300">
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