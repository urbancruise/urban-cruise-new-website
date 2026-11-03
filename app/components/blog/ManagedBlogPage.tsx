"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";

interface WebsiteBlog {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  categories: string[];
  citySlugs: string[];
  createdAt: string;
}

interface WebsiteBlogsResponse {
  blogs: WebsiteBlog[];
  categories: string[];
}

export default function ManagedBlogPage({
  location,
  citySlug,
}: {
  location: string;
  citySlug?: string;
}) {
  const [data, setData] = useState<WebsiteBlogsResponse>({
    blogs: [],
    categories: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlogs() {
      setLoading(true);
      setError("");
      try {
        const query = citySlug
          ? `?${new URLSearchParams({ city: citySlug }).toString()}`
          : "";
        const response = await fetch(`/api/blogs${query}`, {
          signal: controller.signal,
        });
        const result = (await response.json()) as WebsiteBlogsResponse & {
          error?: string;
        };
        if (!response.ok) {
          throw new Error(result.error || "Could not load blog posts.");
        }
        setData({
          blogs: result.blogs || [],
          categories: result.categories || [],
        });
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name === "AbortError") return;
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Could not load blog posts."
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadBlogs();
    return () => controller.abort();
  }, [citySlug]);

  const categories = useMemo(
    () => [{ id: "all", label: "All Posts" }, ...data.categories.map((label) => ({ id: label, label }))],
    [data.categories]
  );
  const filteredPosts = data.blogs.filter((post) => {
    const term = searchTerm.toLowerCase();
    const paragraphText = post.paragraph
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;|&#160;/gi, " ")
      .toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(term) ||
      paragraphText.includes(term);
    const matchesCategory =
      activeCategory === "all" || post.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#03C35E] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0f3460] blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#03C35E]/30 bg-[#03C35E]/20 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#03C35E]" />
              <span className="text-sm font-medium text-[#80e8a9]">
                Urban Cruise Blog{location ? ` · ${location}` : ""}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Stories, tips &amp;{" "}
              <span className="bg-gradient-to-r from-[#03C35E] to-[#80e8a9] bg-clip-text text-transparent">
                vehicle guides
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Explore travel ideas and practical guides from Urban Cruise.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-[#03C35E]"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-[#03C35E] text-white shadow-lg shadow-[#03C35E]/30"
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

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          {error && (
            <p role="alert" className="mx-auto max-w-4xl rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}
          {loading && (
            <p className="py-12 text-center text-sm text-gray-500">Loading blog posts...</p>
          )}
          {!loading && !error && filteredPosts.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              {data.blogs.length === 0
                ? "No published blog posts yet."
                : "No blog posts match your search."}
            </p>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendar className="text-[#03C35E]" />
                    <time dateTime={post.createdAt}>
                      {new Date(post.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-[#03C35E]/10 px-3 py-1 text-xs text-[#188A31]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-[#1a1a2e] transition-colors group-hover:text-[#188A31]">
                    {post.title}
                  </h2>
                  <div
                    className="blog-rich-content mb-3 max-h-24 overflow-hidden text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.paragraph }}
                  />
                  <span className="flex items-center gap-1 text-sm font-medium text-[#188A31]">
                    Urban Cruise <FaArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
