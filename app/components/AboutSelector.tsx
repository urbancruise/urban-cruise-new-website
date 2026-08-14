// app/components/AboutSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load about components for better performance
const DelhiAbout = dynamic(() => import("./home/about/DelhiAbout"));
const GurugramAbout = dynamic(() => import("./home/about/GurugramAbout"));
const MumbaiAbout = dynamic(() => import("./home/about/MumbaiAbout"));
const PuneAbout = dynamic(() => import("./home/about/PuneAbout"));
const DefaultAbout = dynamic(() => import("./home/about/DefaultAbout"));

export default function AboutSelector() {
  const { location } = useLocation();

  // Map locations to their respective about components
  const aboutMap: Record<string, React.ComponentType> = {
    delhi: DelhiAbout,
    gurugram: GurugramAbout,
    mumbai: MumbaiAbout,
    pune: PuneAbout,
  };

  // Get the appropriate about component or use default
  const AboutComponent = aboutMap[location] || DefaultAbout;

  return <AboutComponent />;
}

