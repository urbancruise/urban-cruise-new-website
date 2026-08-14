// app/components/blog/GurugramBlogPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaClock, FaEye, FaBuilding, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function GurugramBlogPage() {
  const { getLocationUrl } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "corporate", label: "Corporate" },
    { id: "business", label: "Business" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "tips", label: "Tips & Guides" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Corporate Travel Trends in Gurugram 2026",
      excerpt: "Explore the latest corporate travel trends in Gurugram and how Urban Cruise is leading the way.",
      date: "January 22, 2026",
      author: "Ankit Sharma",
      category: "corporate",
      readTime: "6 min read",
      image: "/images/blog/gurugram-trends.jpg",
      tags: ["Corporate", "Gurugram", "Trends"]
    },
    {
      id: 2,
      title: "Why Urban Cruise is Gurugram's Preferred Corporate Transport",
      excerpt: "Discover why leading corporations in Gurugram choose Urban Cruise for their employee transportation needs.",
      date: "January 17, 2026",
      author: "Neha Gupta",
      category: "business",
      readTime: "5 min read",
      image: "/images/blog/corporate-preference.jpg",
      tags: ["Corporate", "Gurugram", "Business"]
    },
    {
      id: 3,
      title: "A Day in the Life of a Corporate Chauffeur in Gurugram",
      excerpt: "Get an inside look at what it's like to be a professional chauffeur in Gurugram's corporate world.",
      date: "January 12, 2026",
      author: "Vikram Rathore",
      category: "lifestyle",
      readTime: "4 min read",
      image: "/images/blog/chauffeur-life.jpg",
      tags: ["Lifestyle", "Gurugram", "Chauffeur"]
    },
    {
      id: 4,
      title: "5 Tips for Smooth Corporate Travel in Gurugram",
      excerpt: "Expert tips to ensure your corporate travel experience in Gurugram is smooth and stress-free.",
      date: "January 7, 2026",
      author: "Priya Sharma",
      category: "tips",
      readTime: "5 min read",
      image: "/images/blog/travel-tips.jpg",
      tags: ["Tips", "Corporate", "Gurugram"]
    },
    {
      id: 5,
      title: "The Future of Corporate Mobility in Gurugram",
      excerpt: "Insights into the future of corporate transportation and how Urban Cruise is innovating in Gurugram.",
      date: "January 2, 2026",
      author: "Dr. Rajiv Malhotra",
      category: "business",
      readTime: "7 min read",
      image: "/images/blog/future-mobility.jpg",
      tags: ["Future", "Mobility", "Gurugram"]
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              <span className="text-[#a29bfe] font-medium text-sm">Blog - Gurugram</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Urban Cruise{' '}
              <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Insights, tips, and stories about corporate travel, business, and life in Gurugram.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/30"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#6c5ce7]/20 to-[#a29bfe]/20 flex items-center justify-center">
                  <span className="text-5xl">💼</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#6c5ce7]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#6c5ce7]" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#6c5ce7]/10 text-[#6c5ce7] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === post.category)?.label || post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0c0c1d] mb-2 group-hover:text-[#6c5ce7] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FaUser className="text-[#6c5ce7]" />
                      {post.author}
                    </span>
                    <Link
                      href="#"
                      className="text-[#6c5ce7] font-medium hover:underline text-sm flex items-center gap-1"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
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