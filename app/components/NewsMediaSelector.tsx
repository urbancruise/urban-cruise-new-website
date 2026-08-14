// app/components/NewsMediaSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load News & Media components for better performance
const DelhiNewsMediaPage = dynamic(() => import("./news-media/DelhiNewsMediaPage"));
const GurugramNewsMediaPage = dynamic(() => import("./news-media/GurugramNewsMediaPage"));
const MumbaiNewsMediaPage = dynamic(() => import("./news-media/MumbaiNewsMediaPage"));
const PuneNewsMediaPage = dynamic(() => import("./news-media/PuneNewsMediaPage"));

// Fallback component for missing News & Media pages
function NewsMediaComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">News & Media page coming soon for this location.</p>
    </div>
  );
}

export default function NewsMediaSelector() {
  const { location } = useLocation();

  // Map locations to their respective News & Media components
  const newsMediaMap: Record<string, React.ComponentType> = {
    delhi: DelhiNewsMediaPage,
    gurugram: GurugramNewsMediaPage,
    mumbai: MumbaiNewsMediaPage,
    pune: PuneNewsMediaPage,
  };

  // Get the appropriate News & Media component or use a default
  const NewsMediaComponent = newsMediaMap[location] || NewsMediaComingSoon;

  return <NewsMediaComponent />;
}
