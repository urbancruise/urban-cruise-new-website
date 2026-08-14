// app/components/PartnerSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load partner components for better performance
const DelhiPartnerPage = dynamic(() => import("./partner/DelhiPartnerPage"));
const GurugramPartnerPage = dynamic(() => import("./partner/GurugramPartnerPage"));
const MumbaiPartnerPage = dynamic(() => import("./partner/MumbaiPartnerPage"));
const PunePartnerPage = dynamic(() => import("./partner/PunePartnerPage"));

// Fallback component for missing partner pages
function PartnerComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Partner page coming soon for this location.</p>
    </div>
  );
}

export default function PartnerSelector() {
  const { location } = useLocation();

  // Map locations to their respective partner components
  const partnerMap: Record<string, React.ComponentType> = {
    delhi: DelhiPartnerPage,
    gurugram: GurugramPartnerPage,
    mumbai: MumbaiPartnerPage,
    pune: PunePartnerPage,
  };

  // Get the appropriate partner component
  const PartnerComponent = partnerMap[location] || PartnerComingSoon;

  return <PartnerComponent />;
}

