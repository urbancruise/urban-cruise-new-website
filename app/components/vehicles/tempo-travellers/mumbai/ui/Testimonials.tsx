// // app/components/vehicles/cars-suvs/delhi/ui/Testimonials.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { extractYouTubeId } from "../../../../../lib/youtube";

// COLORS
const GREEN = "#087F35";
const LIGHT_GREEN = "#03C35E";
const ORANGE = "#F7941E";
const DARK_ORANGE = "#E66F00";
const NAVY = "#12233F";

// ============================================================
// TYPES
// ============================================================
type Testimonial = {
  id: number;
  name: string;
  location: string;
  message: string;
  avatar: string;
  videoId: string;
  rating: number;
  accent: "green" | "orange";
};

interface TestimonialsProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleLine2?: string;
    subtitle?: string;
    description?: string;
    items?: Array<{
      id?: number;
      name: string;
      location: string;
      message: string;
      avatar?: string;
      videoId?: string;
      youtubeUrl?: string;
      rating?: number;
      accent?: "green" | "orange";
    }>;
  };
}

// ============================================================
// FALLBACK DATA (used when CMS has no items)
// ============================================================
const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Mehta",
    location: "Gurugram",
    message:
      "Booked an SUV for a family trip. The comfort and space were excellent. Will definitely book again with Urban Cruise.",
    avatar: "/images/testimonials/1.jpg",
    videoId: "mOvg5tm_azM",
    rating: 5,
    accent: "green",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    location: "New Delhi",
    message:
      "Urban Cruise made our trip super smooth! The car was clean, well-maintained and the driver was polite and professional. Highly recommended!",
    avatar: "/images/testimonials/2.jpg",
    videoId: "mOvg5tm_azM",
    rating: 5,
    accent: "green",
  },
  {
    id: 3,
    name: "Ankit Verma",
    location: "Noida",
    message:
      "On-time pickup, transparent pricing and great customer support. Overall a hassle-free and wonderful experience.",
    avatar: "/images/testimonials/3.jpg",
    videoId: "mOvg5tm_azM",
    rating: 5,
    accent: "orange",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    location: "Delhi",
    message:
      "The vehicle was extremely clean and comfortable. The driver was professional and arrived exactly on time.",
    avatar: "/images/testimonials/4.jpg",
    videoId: "mOvg5tm_azM",
    rating: 5,
    accent: "green",
  },
  {
    id: 5,
    name: "Amit Singh",
    location: "Faridabad",
    message:
      "Excellent service from booking to drop-off. The entire family had a comfortable and enjoyable journey.",
    avatar: "/images/testimonials/5.jpg",
    videoId: "mOvg5tm_azM",
    rating: 5,
    accent: "orange",
  },
];

// ============================================================
// STAR RATING
// ============================================================
function StarRating({
  rating,
  size = 15,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="flex items-center justify-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          style={{ fontSize: size }}
          className={index < rating ? "text-[#F7941E]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

// ============================================================
// YOUTUBE VIDEO
// ============================================================
function YouTubeVideo({
  videoId,
  className = "",
}: {
  videoId: string;
  className?: string;
}) {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
        }}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={false}
      />
    </div>
  );
}

// ============================================================
// AVATAR
// ============================================================
function Avatar({
  testimonial,
  large = false,
}: {
  testimonial: Testimonial;
  large?: boolean;
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-full border-[3px] border-white
        bg-[#edf3ed] shadow-[0_3px_12px_rgba(0,0,0,0.14)]
        ${
          large
            ? "h-[88px] w-[88px] sm:h-[94px] sm:w-[94px]"
            : "h-[65px] w-[65px] sm:h-[70px] sm:w-[70px]"
        }
      `}
    >
      <YouTubeVideo videoId={testimonial.videoId} className="object-cover" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/[0.08]" />
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        fill
        sizes={large ? "94px" : "70px"}
        className="relative z-20 object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[35%] bg-gradient-to-t from-black/[0.10] to-transparent" />
    </div>
  );
}

// ============================================================
// SIDE TESTIMONIAL CARD
// ============================================================
function SideTestimonialCard({
  testimonial,
  side,
  onClick,
}: {
  testimonial: Testimonial;
  side: "left" | "right";
  onClick: () => void;
}) {
  const isOrange = testimonial.accent === "orange";

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="
        group relative h-[265px] w-full cursor-pointer overflow-hidden
        rounded-[18px] border border-[#e7e7e7] bg-white/95
        shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]
        sm:h-[285px] lg:h-[270px] xl:h-[275px]
      "
    >
      <div
        className={`
          pointer-events-none absolute -bottom-16 -left-16 h-[150px] w-[150px]
          rounded-full blur-3xl
          ${isOrange ? "bg-[#F7941E]/[0.06]" : "bg-[#03C35E]/[0.06]"}
        `}
      />

      <div className="relative z-10 flex justify-center pt-4">
        <Avatar testimonial={testimonial} />
      </div>

      <div className="relative z-10 mt-2">
        <StarRating rating={testimonial.rating} size={14} />
      </div>

      <p className="relative z-10 mx-auto mt-3 max-w-[250px] px-4 text-center text-[10.5px] font-medium leading-[1.55] text-[#303944] sm:text-[11px] sm:leading-[1.6] lg:text-[10.5px] xl:text-[11px]">
        {testimonial.message}
      </p>

      <div
        className={`mx-auto mt-2 h-[2px] w-[25px] ${
          isOrange ? "bg-[#F7941E]" : "bg-[#087F35]"
        }`}
      />

      <h4
        className={`relative z-10 mt-2 text-center text-[13px] font-extrabold ${
          isOrange ? "text-[#F7941E]" : "text-[#087F35]"
        }`}
      >
        {testimonial.name}
      </h4>

      <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-[#303944]">
        <FaMapMarkerAlt className={isOrange ? "text-[#F7941E]" : "text-[#087F35]"} />
        <span>{testimonial.location}</span>
      </div>
    </motion.div>
  );
}

// ============================================================
// CENTER CARD
// ============================================================
function CenterTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="
        relative z-30 mt-0 h-[285px] w-full overflow-visible rounded-[18px]
        border border-[#e7e7e7] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.14)]
        sm:h-[305px] lg:h-[285px] xl:h-[290px]
      "
    >
      <div className="absolute inset-0 overflow-hidden rounded-[18px]">
        <YouTubeVideo videoId={testimonial.videoId} className="object-cover" />
        <div className="absolute inset-0 bg-white/[0.55]" />
      </div>

      <div className="absolute right-0 top-0 z-20 flex h-[48px] w-[53%] items-center justify-center rounded-tr-[20px] rounded-bl-[20px] bg-gradient-to-r from-[#087F35] to-[#087F35]">
        <StarRating rating={testimonial.rating} size={20} />
      </div>

      <div className="absolute left-[20px] top-[18px] z-20">
        <span className="font-serif text-[65px] font-black leading-none text-[#087F35] opacity-95">
          &ldquo;
        </span>
      </div>

      <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2">
        <Avatar testimonial={testimonial} large />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center px-8 pt-[72px] sm:pt-[78px]">
        <p className="max-w-[315px] text-center text-[11px] font-medium leading-[1.55] text-[#303944] sm:text-[11.5px] sm:leading-[1.6]">
          {testimonial.message}
        </p>

        <div className="mt-3 h-[2px] w-[32px] bg-[#087F35]" />

        <h3 className="mt-2 text-[14px] font-extrabold text-[#087F35] sm:text-[15px]">
          {testimonial.name}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-[10px] text-[#303944] sm:text-[11px]">
          <FaMapMarkerAlt className="text-[#087F35]" />
          <span>{testimonial.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function Testimonials({ content }: TestimonialsProps) {
  // ⭐ KEY FIX: Build testimonials from CMS or fallback
  const testimonials: Testimonial[] = useMemo(() => {
    const cmsItems = content?.items;

    if (!Array.isArray(cmsItems) || cmsItems.length === 0) {
      return FALLBACK_TESTIMONIALS;
    }

    return cmsItems
      .map((item: any, i: number): Testimonial | null => {
        // Resolve YouTube ID from either videoId or youtubeUrl
        const videoId =
          item.videoId ||
          extractYouTubeId(item.youtubeUrl || null) ||
          "mOvg5tm_azM";

        // Skip items without name or message (invalid CMS rows)
        if (!item.name || !item.message) return null;

        return {
          id: item.id ?? i + 1,
          name: item.name,
          location: item.location || "",
          message: item.message,
          avatar: item.avatar || `/images/testimonials/${(i % 5) + 1}.jpg`,
          videoId,
          rating: typeof item.rating === "number" ? item.rating : 5,
          accent: item.accent || (i % 2 === 0 ? "green" : "orange"),
        };
      })
      .filter((t): t is Testimonial => t !== null);
  }, [content]);

  const total = testimonials.length;

  // ⭐ KEY FIX: Initialize activeIndex safely (0 if array length < 2)
  const [activeIndex, setActiveIndex] = useState(() => (total >= 2 ? 1 : 0));
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ⭐ Reset activeIndex whenever testimonials change (e.g., CMS data loads)
  useEffect(() => {
    if (total === 0) return;
    setActiveIndex((prev) => {
      if (prev >= total) return 0;
      if (total >= 2 && prev === 0) return 1;
      return prev;
    });
  }, [total]);

  // ============================================================
  // PREVIOUS / NEXT
  // ============================================================
  const previous = useCallback(() => {
    if (total <= 1) return;
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [total]);

  const next = useCallback(() => {
    if (total <= 1) return;
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [total]);

  const getPreviousIndex = useCallback(() => {
    if (total <= 1) return 0;
    return activeIndex === 0 ? total - 1 : activeIndex - 1;
  }, [activeIndex, total]);

  const getNextIndex = useCallback(() => {
    if (total <= 1) return 0;
    return activeIndex === total - 1 ? 0 : activeIndex + 1;
  }, [activeIndex, total]);

  // AUTO-SCROLL
  useEffect(() => {
    if (!isAutoPlaying || total <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  // ⭐ EARLY RETURN: no testimonials to render
  if (total === 0) {
    return null;
  }

  // ⭐ Derive active testimonial safely
  const safeIndex = activeIndex < total ? activeIndex : 0;
  const activeTestimonial = testimonials[safeIndex];

  // For 1-item case, avoid carousel layout
  const showCarousel = total >= 3;

  // ============================================================
  // HEADER content (CMS + fallback)
  // ============================================================
  const eyebrow = content?.eyebrow || "What Our Customers Say";
  const title = content?.title || "REAL PEOPLE.";
  const titleLine2 = content?.titleLine2 || "REAL EXPERIENCES.";
  const subtitle = content?.subtitle || "Hear from our happy customers";
  const description =
    content?.description ||
    "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.";

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-[70px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[7%] top-[60px] select-none font-serif text-[170px] font-black leading-none text-[#087F35]/[0.055]">
          &ldquo;
        </div>
        <div className="absolute right-[7%] top-[55px] rotate-180 select-none font-serif text-[170px] font-black leading-none text-[#F7941E]/[0.055]">
          &ldquo;
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px] px-3
          min-[375px]:px-4 min-[430px]:px-5 sm:px-6 md:px-8
          lg:px-9 xl:px-10 2xl:px-12
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mb-9 grid w-full items-center gap-7
            min-[375px]:mb-10 min-[375px]:gap-8
            min-[430px]:mb-10 min-[430px]:gap-8
            sm:mb-12 sm:gap-9 md:mb-14 md:gap-10
            lg:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-6
            xl:mb-[72px] xl:gap-8 2xl:mb-20 2xl:gap-10
          "
        >
          <div className="w-full max-w-[720px] text-left">
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 md:gap-3 lg:gap-3.5 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-[#03C35E] min-[375px]:text-[8.5px] min-[430px]:text-[9px] min-[430px]:tracking-[0.16em] sm:text-[9.5px] sm:tracking-[0.18em] md:text-[10px] lg:text-[11px] xl:text-xs">
                {eyebrow}
              </span>
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
            </div>

            <h2 className="text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#142236] min-[375px]:text-[25px] min-[430px]:text-[27px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
              {title}{" "}
              <span className="text-[#188A31]">
                <br />
                {titleLine2}
              </span>
            </h2>

            <p className="mt-3 font-serif text-[19px] italic leading-tight text-[#03C35E] min-[375px]:text-[20px] min-[430px]:text-[21px] sm:text-[22px] md:text-[25px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
              {subtitle}
            </p>

            <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[430px]:text-[11px] sm:mt-5 sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <p>{description}</p>
            </div>
          </div>

          <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
        </motion.div>

        {/* ============================================================
            DESKTOP CAROUSEL — only when 3+ testimonials
        ============================================================ */}
        {showCarousel && (
          <div className="relative hidden items-center lg:flex">
            {/* LEFT ARROW */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="absolute left-[-22px] z-50 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#dce8d8] bg-[#E8F3DF] text-[17px] text-[#087F35] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#087F35] hover:text-white xl:left-[-32px]"
            >
              <FaChevronLeft />
            </button>

            <div className="grid w-full grid-cols-[1fr_1.35fr_1fr] items-center gap-0">
              <div className="relative z-10 mr-[-18px] pt-[10px]">
                <SideTestimonialCard
                  testimonial={testimonials[getPreviousIndex()]}
                  side="left"
                  onClick={previous}
                />
              </div>

              <div className="relative z-30">
                <AnimatePresence mode="wait">
                  <CenterTestimonialCard
                    testimonial={activeTestimonial}
                    key={activeTestimonial.id}
                  />
                </AnimatePresence>
              </div>

              <div className="relative z-10 ml-[-18px] pt-[10px]">
                <SideTestimonialCard
                  testimonial={testimonials[getNextIndex()]}
                  side="right"
                  onClick={next}
                />
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-[-22px] z-50 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F7941E] text-white shadow-[0_5px_15px_rgba(247,148,30,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#E66F00] xl:right-[-32px]"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* ============================================================
            FALLBACK for 1-2 testimonials or tablet/mobile
        ============================================================ */}
        <div className={showCarousel ? "relative lg:hidden" : "relative"}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
            >
              <CenterTestimonialCard testimonial={activeTestimonial} />
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION — only if > 1 testimonial */}
          {total > 1 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E8F3DF] text-[#087F35] shadow-sm"
              >
                <FaChevronLeft />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonials.map((item: any, index: number) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`
                      h-[7px] rounded-full transition-all duration-300
                      ${
                        index === safeIndex
                          ? "w-[22px] bg-[#087F35]"
                          : "w-[7px] bg-[#cfd8cf]"
                      }
                    `}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F7941E] text-white shadow-sm"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}