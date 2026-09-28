
// ============================================================
// Location-aware selector for Testimonials section
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiTestimonials = dynamic(
  () => import("./home/testimonial/DelhiTestimonial")
);

const GurugramTestimonials = dynamic(
  () => import("./home/testimonial/GurugramTestimonial")
);

const MumbaiTestimonials = dynamic(
  () => import("./home/testimonial/MumbaiTestimonial")
);

const PuneTestimonials = dynamic(
  () => import("./home/testimonial/PuneTestimonial")
);

// ======================================================
// TYPES
// ======================================================

export interface TestimonialItem {
  id?: number;
  name: string;
  location: string;
  message: string;
  avatar?: string;
  videoId?: string;
  rating: number;
  accent?: "green" | "orange";
}

export interface TestimonialsContent {
  eyebrow?: string;
  title?: string;
  titleLine2?: string;
  subtitle?: string;
  description?: string;
  items?: TestimonialItem[];
}

export interface TestimonialsProps {
  content?: TestimonialsContent;
}

// ======================================================
// COMPONENT
// ======================================================

export default function TestimonialSelector({
  content,
}: TestimonialsProps) {
  const { location } = useLocation();

  const map: Record<string, React.ComponentType<TestimonialsProps>> = {
    delhi: DelhiTestimonials,
    gurugram: GurugramTestimonials,
    mumbai: MumbaiTestimonials,
    pune: PuneTestimonials,
  };

  const Component = map[location];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
