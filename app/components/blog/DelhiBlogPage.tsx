// app/components/blog/DelhiBlogPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaClock, FaEye } from "react-icons/fa";
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

export default function DelhiBlogPage() {
  const { getLocationUrl } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "travel", label: "Travel" },
    { id: "heritage", label: "Heritage" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "tips", label: "Tips & Guides" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Hidden Gems to Explore in Delhi",
      excerpt: "Discover the lesser-known treasures of Delhi, from secret gardens to historic havelis.",
      date: "January 20, 2026",
      author: "Rahul Sharma",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/delhi-hidden-gems.jpg",
      tags: ["Delhi", "Travel", "Hidden Gems"]
    },
    {
      id: 2,
      title: "The Ultimate Guide to Delhi's Heritage Sites",
      excerpt: "A comprehensive guide to visiting Delhi's UNESCO World Heritage sites and historic monuments.",
      date: "January 15, 2026",
      author: "Priya Patel",
      category: "heritage",
      readTime: "8 min read",
      image: "/images/blog/delhi-heritage.jpg",
      tags: ["Heritage", "History", "UNESCO"]
    },
    {
      id: 3,
      title: "Why Choose Urban Cruise for Your Delhi Travel",
      excerpt: "Discover the benefits of choosing Urban Cruise for your transportation needs in Delhi.",
      date: "January 10, 2026",
      author: "Urban Cruise Team",
      category: "lifestyle",
      readTime: "4 min read",
      image: "/images/blog/urban-cruise-delhi.jpg",
      tags: ["Urban Cruise", "Delhi", "Travel"]
    },
    {
      id: 4,
      title: "Tips for Navigating Delhi Like a Local",
      excerpt: "Expert tips to help you navigate Delhi's streets like a seasoned local.",
      date: "January 5, 2026",
      author: "Vikram Singh",
      category: "tips",
      readTime: "6 min read",
      image: "/images/blog/delhi-tips.jpg",
      tags: ["Tips", "Navigation", "Local"]
    },
    {
      id: 5,
      title: "The Best Time to Visit Delhi",
      excerpt: "A seasonal guide to visiting Delhi, including weather tips and festival recommendations.",
      date: "December 28, 2025",
      author: "Meera Gupta",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/delhi-best-time.jpg",
      tags: ["Delhi", "Travel", "Seasonal"]
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3460] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#e94560]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#e94560]/30">
              <span className="w-2 h-2 bg-[#e94560] rounded-full animate-pulse" />
              <span className="text-[#e94560] font-medium text-sm">Blog - Delhi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Urban Cruise{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stories, tips, and insights from our team about travel, heritage, and life in Delhi.
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
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#e94560] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30"
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
                <div className="h-48 bg-gradient-to-br from-[#e94560]/20 to-[#ff6b6b]/20 flex items-center justify-center">
                  <span className="text-5xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#e94560]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#e94560]" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === post.category)?.label || post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#e94560] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FaUser className="text-[#e94560]" />
                      {post.author}
                    </span>
                    <Link
                      href="#"
                      className="text-[#e94560] font-medium hover:underline text-sm flex items-center gap-1"
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