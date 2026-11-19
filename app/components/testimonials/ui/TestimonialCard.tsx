"use client";

import {
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuoteRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import StarRating from "./StarRating";
import type { Testimonial } from "./TestimonialsData";

interface TestimonialCardProps {
  item: Testimonial;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(20,34,54,0.06)] ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(20,34,54,0.12)]">
      {/* ── COLORED HEADER BLOCK ── */}
      <div className="relative overflow-hidden bg-[#142236] px-6 pb-10 pt-5">
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#03C35E]/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/5" />
        <FaQuoteRight className="pointer-events-none absolute right-3 top-3 text-[56px] leading-none text-white/[0.07]" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
            <FaStar className="text-[11px] text-[#F5A623]" />
            <span className="text-[11px] font-bold text-white">
              {item.rating.toFixed(1)}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#03C35E]">
            <FaCheckCircle className="text-[10px]" />
            Verified
          </span>
        </div>

        <div className="relative mt-3">
          <h3 className="text-lg font-extrabold leading-tight text-white">
            {item.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-white/60">
            <FaMapMarkerAlt className="text-[#03C35E]" />
            {item.location}
          </p>
        </div>
      </div>

      {/* ── FLOATING AVATAR ── */}
      <div className="relative -mt-7 ml-6 flex items-end justify-between">
        <div className="relative">
          <img
            src={item.avatar}
            alt={`${item.name} profile`}
            loading="lazy"
            className="h-14 w-14 rounded-full border-4 border-white bg-white object-cover shadow-md"
          />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#03C35E] ring-2 ring-white">
            <FaCheckCircle className="text-[9px] text-white" />
          </span>
        </div>

        <span className="mb-2 mr-5 inline-flex items-center gap-1 rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-500 ring-1 ring-gray-100">
          <FaRegCalendarAlt className="text-[9px]" />
          {item.date}
        </span>
      </div>

      {/* ── BODY CONTENT ── */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        <p className="flex-1 text-[14px] leading-7 text-gray-600">
          &ldquo;{item.content}&rdquo;
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#03C35E]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#087F35]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#03C35E]" />
            {item.service}
          </span>

          <StarRating rating={item.rating} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#03C35E] to-[#087F35] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}