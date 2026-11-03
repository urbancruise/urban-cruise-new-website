"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

interface BlogResponse {
  blogs: WebsiteBlog[];
}

export default function ManagedBlogDetailPage({
  blogId,
  citySlug,
}: {
  blogId: string;
  citySlug?: string;
}) {
  const [blogs, setBlogs] = useState<WebsiteBlog[]>([]);
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
        const result = (await response.json()) as BlogResponse & {
          error?: string;
        };
        if (!response.ok) {
          throw new Error(result.error || "Could not load blog posts.");
        }
        setBlogs(result.blogs || []);
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

  const blog = blogs.find((post) => String(post.id) === blogId);
  const relatedPosts = useMemo(
    () =>
      blog
        ? blogs
            .filter(
              (post) =>
                post.id !== blog.id &&
                post.categories.some((category) =>
                  blog.categories.includes(category)
                )
            )
            .slice(0, 5)
        : [],
    [blog, blogs]
  );
  const blogListHref = `${citySlug ? `/${citySlug}` : ""}/blog`;
  const blogHref = (id: number) =>
    `/blog/${id}${citySlug ? `?${new URLSearchParams({ city: citySlug }).toString()}` : ""}`;

  return (
    <main className="min-h-screen bg-[#f6f8f7] pb-10 pt-24 sm:pb-12 sm:pt-28 md:pb-16 md:pt-32">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-8 px-4 xs:px-5 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] lg:gap-10 lg:px-12 xl:gap-16 xl:px-16">
        <section className="min-w-0">
          {loading && (
            <p className="py-12 text-center text-sm text-gray-500">
              Loading blog post...
            </p>
          )}
          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}
          {!loading && !error && !blog && (
            <div className="rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-gray-600">Blog post not found.</p>
              <Link
                href={blogListHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#188A31]"
              >
                Back to blogs <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}
          {blog && (
            <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:rounded-3xl">
                <div className="relative aspect-[16/9] max-h-[520px] overflow-hidden bg-gray-100 sm:aspect-[16/8]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-7 md:p-9 lg:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
                    <span className="font-semibold text-gray-800">
                      {blog.authorName || "Urban Cruise"}
                    </span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-2">
                      <FaCalendar className="text-[#03C35E]" />
                      <time dateTime={blog.createdAt}>
                        {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </span>
                  </div>
                  {blog.categories.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {blog.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-[#03C35E]/10 px-3 py-1 text-xs font-medium text-[#188A31]"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-[#172b24] sm:text-3xl md:text-4xl">
                    {blog.title}
                  </h1>
                  <div
                    className="blog-rich-content max-w-none text-sm leading-7 text-gray-700 sm:text-base sm:leading-8"
                    dangerouslySetInnerHTML={{ __html: blog.paragraph }}
                  />
                </div>
            </article>
          )}
        </section>

        <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6 lg:sticky lg:top-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-[#172b24] sm:text-xl">
              Related Posts
            </h2>
            <span className="h-1 w-8 rounded-full bg-[#03C35E]" />
          </div>
          <div className="flex flex-col gap-4">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="group flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <Link
                  href={blogHref(post.id)}
                  aria-label={`Read ${post.title}`}
                  className="relative h-[72px] w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="min-w-0 py-0.5">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[#1a1a2e] group-hover:text-[#188A31]">
                    <Link href={blogHref(post.id)}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-1 text-xs text-gray-500">
                    {post.categories.join(", ")}
                  </p>
                </div>
              </article>
            ))}
            {!loading && blog && relatedPosts.length === 0 && (
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm leading-relaxed text-gray-600">
                  No related posts in this category yet.
                </p>
                <Link
                  href={blogListHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#188A31]"
                >
                  Explore all blogs <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
