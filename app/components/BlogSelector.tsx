// app/components/BlogSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load Blog components for better performance
const DelhiBlogPage = dynamic(() => import("./blog/DelhiBlogPage"));
const GurugramBlogPage = dynamic(() => import("./blog/GurugramBlogPage"));
const MumbaiBlogPage = dynamic(() => import("./blog/MumbaiBlogPage"));
const PuneBlogPage = dynamic(() => import("./blog/PuneBlogPage"));

// Fallback component for missing blog pages
function BlogComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Blog page coming soon for this location.</p>
    </div>
  );
}

export default function BlogSelector() {
  const { location } = useLocation();

  // Map locations to their respective Blog components
  const blogMap: Record<string, React.ComponentType> = {
    delhi: DelhiBlogPage,
    gurugram: GurugramBlogPage,
    mumbai: MumbaiBlogPage,
    pune: PuneBlogPage,
  };

  // Get the appropriate Blog component or use a default
  const BlogComponent = blogMap[location] || BlogComingSoon;

  return <BlogComponent />;
}
