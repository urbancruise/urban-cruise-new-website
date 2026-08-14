// app/components/blog/MumbaiBlogPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaClock, FaEye, FaFilm, FaUmbrellaBeach } from "react-icons/fa";
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

export default function MumbaiBlogPage() {
  const { getLocationUrl } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "travel", label: "Travel" },
    { id: "entertainment", label: "Entertainment" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "tips", label: "Tips & Guides" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Bollywood's Favorite: Urban Cruise Mumbai",
      excerpt: "Discover why Bollywood celebrities and film productions trust Urban Cruise for their transportation needs.",
      date: "January 23, 2026",
      author: "Shah Rukh (Staff)",
      category: "entertainment",
      readTime: "6 min read",
      image: "/images/blog/mumbai-bollywood.jpg",
      tags: ["Bollywood", "Mumbai", "Celebrity"]
    },
    {
      id: 2,
      title: "A Guide to Mumbai's Coastal Drives",
      excerpt: "Explore the most scenic coastal drives in Mumbai and how to experience them in luxury.",
      date: "January 18, 2026",
      author: "Priyanka (Team)",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/coastal-drives.jpg",
      tags: ["Mumbai", "Coastal", "Travel"]
    },
    {
      id: 3,
      title: "Mumbai's Hidden Food Gems: A Culinary Journey",
      excerpt: "Discover the best hidden food spots in Mumbai with insights from Urban Cruise's local experts.",
      date: "January 13, 2026",
      author: "Amit Shah",
      category: "lifestyle",
      readTime: "4 min read",
      image: "/images/blog/food-gems.jpg",
      tags: ["Food", "Mumbai", "Hidden Gems"]
    },
    {
      id: 4,
      title: "5 Must-Visit Places in Mumbai",
      excerpt: "A curated list of must-visit places in Mumbai, from iconic landmarks to hidden treasures.",
      date: "January 8, 2026",
      author: "Sneha Patel",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/mumbai-places.jpg",
      tags: ["Mumbai", "Travel", "Must-Visit"]
    },
    {
      id: 5,
      title: "The Ultimate Guide to Mumbai's Nightlife",
      excerpt: "Experience the best of Mumbai's nightlife with tips and recommendations from Urban Cruise.",
      date: "January 3, 2026",
      author: "Rahul Sharma",
      category: "lifestyle",
      readTime: "6 min read",
      image: "/images/blog/nightlife.jpg",
      tags: ["Nightlife", "Mumbai", "Guide"]
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c1e] via-[#1a0a2e] to-[#2d0a3e] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b6b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#feca57] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#ff6b6b]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#ff6b6b]/30">
              <span className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" />
              <span className="text-[#ff6b6b] font-medium text-sm">Blog - Mumbai</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Urban Cruise{' '}
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stories, tips, and insights from our team about travel, entertainment, and life in Mumbai.
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
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
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
                <div className="h-48 bg-gradient-to-br from-[#ff6b6b]/20 to-[#feca57]/20 flex items-center justify-center">
                  <span className="text-5xl">🎬</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#ff6b6b]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#ff6b6b]" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === post.category)?.label || post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0c0c1e] mb-2 group-hover:text-[#ff6b6b] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FaUser className="text-[#ff6b6b]" />
                      {post.author}
                    </span>
                    <Link
                      href="#"
                      className="text-[#ff6b6b] font-medium hover:underline text-sm flex items-center gap-1"
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