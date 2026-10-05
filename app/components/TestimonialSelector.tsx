// app/components/TestimonialSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiTestimonials = dynamic(() =>
  import("./home/testimonial/DelhiTestimonial")
);
const GurugramTestimonials = dynamic(() =>
  import("./home/testimonial/GurugramTestimonial")
);
const MumbaiTestimonials = dynamic(() =>
  import("./home/testimonial/MumbaiTestimonial")
);
const PuneTestimonials = dynamic(() =>
  import("./home/testimonial/PuneTestimonial")
);
const DefaultTestimonials = dynamic(() =>
  import("./home/testimonial/DefaultTestimonial")
);

export interface TestimonialItem {
  id?: number;
  name: string;
  location: string;
  message: string;
  avatar?: string;
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

interface Props {
  content?: TestimonialsContent;
}

export default function TestimonialSelector({ content }: Props) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: TestimonialsContent }>
  > = {
    delhi: DelhiTestimonials as any,
    gurugram: GurugramTestimonials as any,
    mumbai: MumbaiTestimonials as any,
    pune: PuneTestimonials as any,
  };

  const Component = isGlobalRoute
    ? (DefaultTestimonials as any)
    : map[selectedLocation || ""] || (DefaultTestimonials as any);

  if (!Component) return null;

  return <Component content={content} />;
}