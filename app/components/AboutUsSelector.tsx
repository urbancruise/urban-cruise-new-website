// app/components/AboutUsSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";

// Lazy load about-us components for better performance
const DelhiAboutPage = dynamic(() => import("./about-us/DelhiAboutPage"), { loading: SectionSkeleton });
const GurugramAboutPage = dynamic(() => import("./about-us/GurugramAboutPage"), { loading: SectionSkeleton });
const MumbaiAboutPage = dynamic(() => import("./about-us/MumbaiAboutPage"), { loading: SectionSkeleton });
const PuneAboutPage = dynamic(() => import("./about-us/PuneAboutPage"), { loading: SectionSkeleton });

// Fallback component for missing about-us pages
function AboutComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">About page coming soon for this location.</p>
    </div>
  );
}

export default function AboutUsSelector() {
  const { location } = useLocation();

  // Map locations to their respective about-us components
  const aboutMap: Record<string, React.ComponentType> = {
    delhi: DelhiAboutPage,
    gurugram: GurugramAboutPage,
    mumbai: MumbaiAboutPage,
    pune: PuneAboutPage,
  };

  // Get the appropriate about-us component or use a default
  const AboutComponent = aboutMap[location] || AboutComingSoon;

  return <AboutComponent />;
}

