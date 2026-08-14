// app/components/FaqsSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load FAQs components for better performance
const DelhiFaqsPage = dynamic(() => import("./faqs/DelhiFaqsPage"));
const GurugramFaqsPage = dynamic(() => import("./faqs/GurugramFaqsPage"));
const MumbaiFaqsPage = dynamic(() => import("./faqs/MumbaiFaqsPage"));
const PuneFaqsPage = dynamic(() => import("./faqs/PuneFaqsPage"));

// Fallback component for missing FAQs pages
function FaqsComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">FAQs page coming soon for this location.</p>
    </div>
  );
}

export default function FaqsSelector() {
  const { location } = useLocation();

  // Map locations to their respective FAQs components
  const faqsMap: Record<string, React.ComponentType> = {
    delhi: DelhiFaqsPage,
    gurugram: GurugramFaqsPage,
    mumbai: MumbaiFaqsPage,
    pune: PuneFaqsPage,
  };

  // Get the appropriate FAQs component or use a default
  const FaqsComponent = faqsMap[location] || FaqsComingSoon;

  return <FaqsComponent />;
}
