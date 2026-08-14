// app/components/ContactSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load contact components for better performance
const DelhiContactPage = dynamic(() => import("./contact/DelhiContactPage"));
const GurugramContactPage = dynamic(() => import("./contact/GurugramContactPage"));
const MumbaiContactPage = dynamic(() => import("./contact/MumbaiContactPage"));
const PuneContactPage = dynamic(() => import("./contact/PuneContactPage"));

// Fallback component for missing contact pages
function ContactComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Contact page coming soon for this location.</p>
    </div>
  );
}

export default function ContactSelector() {
  const { location } = useLocation();

  // Map locations to their respective contact components
  const contactMap: Record<string, React.ComponentType> = {
    delhi: DelhiContactPage,
    gurugram: GurugramContactPage,
    mumbai: MumbaiContactPage,
    pune: PuneContactPage,
  };

  // Get the appropriate contact component
  const ContactComponent = contactMap[location] || ContactComingSoon;

  return <ContactComponent />;
}

