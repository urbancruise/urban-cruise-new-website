// app/components/Faq'sSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// DELHI FAQ
// ======================================================

const DelhiFaqs = dynamic(
  () => import("./home/faq's/DelhiFaq’s"),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

// ======================================================
// FUTURE LOCATIONS
// ======================================================

const GurugramFaqs = dynamic(
  () => import("./home/faq's/GurugramFaq’s"),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

const MumbaiFaqs = dynamic(
  () => import("./home/faq's/MumbaiFaq's"),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

const PuneFaqs = dynamic(
  () => import("./home/faq's/PuneFaq’s"),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

// ======================================================
// COMPONENT
// ======================================================

export default function FaqsSelector() {
  const { location } = useLocation();

  // ====================================================
  // NORMALIZE LOCATION
  // ====================================================

  const currentLocation = String(location || "")
    .trim()
    .toLowerCase();

  // ====================================================
  // LOCATION → FAQ COMPONENT
  // ====================================================

  const faqMap: Record<
    string,
    React.ComponentType
  > = {
    delhi: DelhiFaqs,

    // Future locations
    gurugram: GurugramFaqs,
    mumbai: MumbaiFaqs,
    pune: PuneFaqs,
  };

  // ====================================================
  // GET COMPONENT
  // ====================================================

  const FaqComponent = faqMap[currentLocation];

  // ====================================================
  // NO COMPONENT
  // ====================================================

  if (!FaqComponent) {
    return null;
  }

  // ====================================================
  // RENDER
  // ====================================================

  return <FaqComponent />;
}