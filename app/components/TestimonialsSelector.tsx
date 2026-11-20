// app/components/TestimonialsSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";

// Lazy load testimonials components for better performance
const DelhiTestimonialsPage = dynamic(() => import("./testimonials/DelhiTestimonialsPage"), { loading: SectionSkeleton });
const GurugramTestimonialsPage = dynamic(() => import("./testimonials/GurugramTestimonialsPage"), { loading: SectionSkeleton });
const MumbaiTestimonialsPage = dynamic(() => import("./testimonials/MumbaiTestimonialsPage"), { loading: SectionSkeleton });
const PuneTestimonialsPage = dynamic(() => import("./testimonials/PuneTestimonialsPage"), { loading: SectionSkeleton });

// Fallback component for missing testimonials pages
function TestimonialsComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Testimonials page coming soon for this location.</p>
    </div>
  );
}

export default function TestimonialsSelector() {
  const { location } = useLocation();

  // Map locations to their respective testimonials components
  const testimonialsMap: Record<string, React.ComponentType> = {
    delhi: DelhiTestimonialsPage,
    gurugram: GurugramTestimonialsPage,
    mumbai: MumbaiTestimonialsPage,
    pune: PuneTestimonialsPage,
  };

  // Get the appropriate testimonials component or use a default
  const TestimonialsComponent = testimonialsMap[location] || TestimonialsComingSoon;

  return <TestimonialsComponent />;
}


