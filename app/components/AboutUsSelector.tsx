// app/components/AboutUsSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load about-us components for better performance
const DelhiAboutPage = dynamic(() => import("./about-us/DelhiAboutPage"));
const GurugramAboutPage = dynamic(() => import("./about-us/GurugramAboutPage"));
const MumbaiAboutPage = dynamic(() => import("./about-us/MumbaiAboutPage"));
const PuneAboutPage = dynamic(() => import("./about-us/PuneAboutPage"));

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

