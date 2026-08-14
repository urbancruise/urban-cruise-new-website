// app/components/blog/PuneBlogPage.tsx
"use client";

import Link from "next/link";
import { useLocation } from "@/app/context/LocationContext";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaClock, FaEye, FaUniversity, FaBook, FaTree } from "react-icons/fa";
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

export default function PuneBlogPage() {
  const { getLocationUrl } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "heritage", label: "Heritage" },
    { id: "education", label: "Education" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "tips", label: "Tips & Guides" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Exploring Pune's Rich Heritage: A Complete Guide",
      excerpt: "A comprehensive guide to exploring Pune's rich cultural heritage, from Shaniwar Wada to Sinhagad Fort.",
      date: "January 24, 2026",
      author: "Dr. Meera Joshi",
      category: "heritage",
      readTime: "8 min read",
      image: "/images/blog/pune-heritage-guide.jpg",
      tags: ["Pune", "Heritage", "History"]
    },
    {
      id: 2,
      title: "Why Pune is the Oxford of the East",
      excerpt: "Discover why Pune is known as the 'Oxford of the East' and how Urban Cruise connects education and heritage.",
      date: "January 19, 2026",
      author: "Prof. Rajesh Kumar",
      category: "education",
      readTime: "6 min read",
      image: "/images/blog/oxford-of-east.jpg",
      tags: ["Education", "Pune", "Culture"]
    },
    {
      id: 3,
      title: "A Day in Pune: Perfect Itinerary for First-Time Visitors",
      excerpt: "Plan the perfect day in Pune with this comprehensive itinerary for first-time visitors.",
      date: "January 14, 2026",
      author: "Ananya Patel",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/pune-itinerary.jpg",
      tags: ["Pune", "Travel", "Itinerary"]
    },
    {
      id: 4,
      title: "Pune's Hidden Treasures: Offbeat Places to Visit",
      excerpt: "Discover the hidden treasures and offbeat places in Pune that tourists often miss.",
      date: "January 9, 2026",
      author: "Vikram Singh",
      category: "travel",
      readTime: "5 min read",
      image: "/images/blog/hidden-treasures.jpg",
      tags: ["Pune", "Hidden Gems", "Offbeat"]
    },
    {
      id: 5,
      title: "The Best Time to Visit Pune's Heritage Sites",
      excerpt: "A seasonal guide to visiting Pune's heritage sites for the best experience.",
      date: "January 4, 2026",
      author: "Sneha Rao",
      category: "tips",
      readTime: "4 min read",
      image: "/images/blog/best-time.jpg",
      tags: ["Pune", "Heritage", "Seasonal"]
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2a1a] to-[#0a2a1a] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#55efc4] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#00b894]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#00b894]/30">
              <span className="w-2 h-2 bg-[#00b894] rounded-full animate-pulse" />
              <span className="text-[#55efc4] font-medium text-sm">Blog - Pune</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Urban Cruise{' '}
              <span className="bg-gradient-to-r from-[#00b894] to-[#55efc4] bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stories, tips, and insights about heritage, education, and life in the Oxford of the East.
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
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#00b894] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#00b894] text-white shadow-lg shadow-[#00b894]/30"
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
                <div className="h-48 bg-gradient-to-br from-[#00b894]/20 to-[#55efc4]/20 flex items-center justify-center">
                  <span className="text-5xl">🏛️</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#00b894]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#00b894]" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#00b894]/10 text-[#00b894] text-xs rounded-full mb-3">
                    {categories.find(c => c.id === post.category)?.label || post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0a1a0a] mb-2 group-hover:text-[#00b894] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FaUser className="text-[#00b894]" />
                      {post.author}
                    </span>
                    <Link
                      href="#"
                      className="text-[#00b894] font-medium hover:underline text-sm flex items-center gap-1"
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