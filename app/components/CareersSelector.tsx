// app/components/CareersSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load careers components for better performance
const DelhiCareersPage = dynamic(() => import("./careers/DelhiCareersPage"));
const GurugramCareersPage = dynamic(() => import("./careers/GurugramCareersPage"));
const MumbaiCareersPage = dynamic(() => import("./careers/MumbaiCareersPage"));
const PuneCareersPage = dynamic(() => import("./careers/PuneCareersPage"));

// Fallback component for missing careers pages
function CareersComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Careers page coming soon for this location.</p>
    </div>
  );
}

export default function CareersSelector() {
  const { location } = useLocation();

  // Map locations to their respective careers components
  const careersMap: Record<string, React.ComponentType> = {
    delhi: DelhiCareersPage,
    gurugram: GurugramCareersPage,
    mumbai: MumbaiCareersPage,
    pune: PuneCareersPage,
  };

  // Get the appropriate careers component or use a default
  const CareersComponent = careersMap[location] || CareersComingSoon;

  return <CareersComponent />;
}

