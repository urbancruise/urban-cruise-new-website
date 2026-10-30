// app/components/TestimonialSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface TestimonialItem {
  id?: number;
  name: string;
  location: string;
  message: string;
  link?: string;
  avatar?: string;
  avatarAlt?: string;
  videoId?: string;
  youtubeUrl?: string;
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

const DelhiTestimonials = dynamic<TestimonialsProps>(() =>
  import("./home/testimonial/DelhiTestimonial")
);
const DefaultTestimonials = dynamic<TestimonialsProps>(() =>
  import("./home/testimonial/DefaultTestimonial")
);

export default function TestimonialSelector({ content }: TestimonialsProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<TestimonialsProps>
  > = {
    delhi: DelhiTestimonials,
    gurugram: DelhiTestimonials,
    mumbai: DelhiTestimonials,
    pune: DelhiTestimonials,
  };

  const Component = isGlobalRoute
    ? DefaultTestimonials
    : map[selectedLocation || ""] || DefaultTestimonials;

  if (!Component) return null;

  return <Component content={content} />;
}