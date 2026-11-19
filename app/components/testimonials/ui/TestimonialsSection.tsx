"use client";

import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import { testimonials } from "./TestimonialsData";

const TESTIMONIALS_PER_PAGE = 6;

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTestimonials = useMemo(() => {
    return activeFilter === "all"
      ? testimonials
      : testimonials.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(
    filteredTestimonials.length / TESTIMONIALS_PER_PAGE
  );

  const currentTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * TESTIMONIALS_PER_PAGE,
    currentPage * TESTIMONIALS_PER_PAGE
  );

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setCurrentPage(1);
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F9F8] py-16 md:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#03C35E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#03C35E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03C35E]/20 bg-white px-4 py-2 text-sm font-bold text-[#087F35]">
              <span className="h-2 w-2 rounded-full bg-[#03C35E]" />
              CUSTOMER TESTIMONIALS
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#142236] sm:text-4xl lg:text-5xl">
              Experiences That
              <span className="block text-[#03C35E]">Speak For Us.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Every journey has a story. Read what our customers have to say
              about their experience with Urban Cruise.
            </p>
          </div>

          {/* REVIEW SUMMARY */}
          <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:min-w-[270px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#03C35E]/10">
              <FaStar className="text-3xl text-[#03C35E]" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#142236]">
                4.9<span className="text-lg text-gray-400">/5</span>
              </div>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Customer satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <CategoryFilter
          activeFilter={activeFilter}
          onChange={handleFilterChange}
          totalReviews={filteredTestimonials.length}
        />

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentTestimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {currentTestimonials.length === 0 && (
          <div className="rounded-3xl bg-white px-5 py-16 text-center">
            <p className="text-lg font-bold text-[#142236]">No reviews found.</p>
            <p className="mt-2 text-sm text-gray-500">
              Try selecting another category.
            </p>
          </div>
        )}

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}