"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

interface WebsiteBlog {
  id: number;
  title: string;
  authorName: string;
  paragraph: string;
  image: string;
  categories: string[];
  citySlugs: string[];
  createdAt: string;
}

interface WebsiteBlogsResponse {
  blogs: WebsiteBlog[];
}

const POSTS_PER_PAGE = 8;

export default function ManagedBlogPage({
  location,
  citySlug,
}: {
  location: string;
  citySlug?: string;
}) {
  const [data, setData] = useState<WebsiteBlogsResponse>({
    blogs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlogs() {
      setLoading(true);
      setError("");
      setCurrentPage(1);
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

  const recentPosts = data.blogs.slice(0, 5);
  const pageCount = Math.ceil(data.blogs.length / POSTS_PER_PAGE);
  const pagePosts = data.blogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const blogDetailHref = (id: number) =>
    `/blog/${id}${citySlug ? `?${new URLSearchParams({ city: citySlug }).toString()}` : ""}`;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#142236] py-16 sm:min-h-[340px] md:min-h-[420px] md:py-20">
        <Image
          src="/images/hero/herobg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#10192c]/75 via-[#10192c]/50 to-[#10192c]/20" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#10192c]/35 to-transparent" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#80e8a9] sm:text-sm">
              <span className="h-0.5 w-8 bg-[#03C35E]" />
              Urban Cruise Blog{location ? ` · ${location}` : ""}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Stories, tips &amp;
              <span className="block text-[#54d982]">vehicle guides</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
              Explore travel ideas and practical guides from Urban Cruise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {error && (
            <p role="alert" className="mx-auto max-w-4xl rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}
          {loading && (
            <p role="status" className="sr-only">
              Loading blog posts...
            </p>
          )}
          {!loading && !error && data.blogs.length === 0 && (
            <p className="py-12 text-center text-gray-500">No published blog posts yet.</p>
          )}
          <div className="mx-auto grid items-start gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-10 xl:gap-16">
            <div className="flex min-w-0 flex-col gap-6">
              {loading
                ? Array.from({ length: POSTS_PER_PAGE }, (_, index) => (
                    <article
                      key={`blog-skeleton-${index}`}
                      aria-hidden="true"
                      className="flex animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white md:min-h-[300px] md:flex-row"
                    >
                      <div className="h-40 shrink-0 bg-gray-200 sm:h-48 md:h-auto md:w-[44%]" />
                      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5 md:p-6">
                        <div className="h-4 w-2/5 rounded bg-gray-200" />
                        <div className="h-6 w-4/5 rounded bg-gray-200" />
                        <div className="space-y-2">
                          <div className="h-4 rounded bg-gray-200" />
                          <div className="h-4 w-5/6 rounded bg-gray-200" />
                          <div className="h-4 w-2/3 rounded bg-gray-200" />
                        </div>
                        <div className="mt-auto flex justify-end">
                          <div className="h-10 w-32 rounded-full bg-gray-200" />
                        </div>
                      </div>
                    </article>
                  ))
                : pagePosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg md:min-h-[300px] md:flex-row"
                >
                  <div className="relative h-40 shrink-0 bg-gray-100 sm:h-48 md:h-auto md:w-[44%]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:mb-3 sm:text-sm">
                      <span className="font-medium text-gray-700">
                        {post.authorName || "Urban Cruise"}
                      </span>
                      <FaCalendar className="text-[#03C35E]" />
                      <time dateTime={post.createdAt}>
                        {new Date(post.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="mb-2 flex flex-wrap gap-1.5 sm:mb-3">
                      {post.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-[#03C35E]/10 px-3 py-1 text-xs text-[#188A31]"
                        >
                          {category}
                        </span>
                      ))}
                      {!loading && !error && pageCount > 1 && (
                        <nav
                      aria-label="Blog pagination"
                      className="flex flex-wrap items-center justify-center gap-2 pt-4"
                        >
                      <button
                        type="button"
                        onClick={() => setCurrentPage((page) => page - 1)}
                        disabled={currentPage === 1}
                        className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#03C35E] hover:text-[#188A31] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Previous
                      </button>
                      {Array.from({ length: pageCount }, (_, index) => {
                        const page = index + 1;
                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() => setCurrentPage(page)}
                            aria-label={`Go to page ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`h-10 min-w-10 rounded-full px-3 text-sm font-medium transition-colors ${
                              currentPage === page
                                ? "bg-[#03C35E] text-white"
                                : "border border-gray-200 text-gray-700 hover:border-[#03C35E] hover:text-[#188A31]"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setCurrentPage((page) => page + 1)}
                        disabled={currentPage === pageCount}
                        className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#03C35E] hover:text-[#188A31] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Next
                      </button>
                        </nav>
                      )}
                    </div>
                    <h2 className="mb-2 text-base font-bold leading-tight text-[#188A31] transition-colors sm:text-lg md:text-xl">
                      {post.title}
                    </h2>
                    <div
                      className="blog-rich-content mb-3 line-clamp-2 text-sm leading-5 text-gray-600 sm:mb-4 sm:line-clamp-3 sm:leading-6"
                      dangerouslySetInnerHTML={{ __html: post.paragraph }}
                    />
                    <div className="mt-auto flex justify-end">
                      <Link
                        href={blogDetailHref(post.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#03C35E] px-4 py-2.5 text-xs font-semibold uppercase text-[#188A31] transition-colors hover:bg-[#03C35E] hover:text-white sm:px-6 sm:py-3"
                      >
                        Read More <FaArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
                  ))}
            </div>

            <aside className="rounded-2xl border border-gray-100 bg-gray-50 p-5 md:p-6">
              <h2 className="mb-5 text-xl font-bold text-[#1a1a2e]">
                Recent Uploads
              </h2>
              <div className="flex flex-col gap-4">
                {loading
                  ? Array.from({ length: 3 }, (_, index) => (
                      <div
                        key={`recent-skeleton-${index}`}
                        aria-hidden="true"
                        className="flex animate-pulse items-start gap-3"
                      >
                        <div className="h-16 w-20 shrink-0 rounded-lg bg-gray-200" />
                        <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
                          <div className="h-4 w-full rounded bg-gray-200" />
                          <div className="h-4 w-4/5 rounded bg-gray-200" />
                          <div className="mt-1 h-3 w-2/5 rounded bg-gray-200" />
                        </div>
                      </div>
                    ))
                  : recentPosts.map((post) => (
                  <article key={post.id} className="flex items-start gap-3">
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-sm font-semibold text-[#1a1a2e]">
                        {post.title}
                      </h3>
                      <time
                        dateTime={post.createdAt}
                        className="mt-1 block text-xs text-gray-500"
                      >
                        {new Date(post.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </article>
                    ))}
                {!loading && recentPosts.length === 0 && (
                  <p className="text-sm text-gray-500">No recent posts.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
