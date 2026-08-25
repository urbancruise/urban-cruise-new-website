"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// DELHI
// ======================================================

const DelhiTestimonials = dynamic(
  () =>
    import(
      "./home/testimonial/DelhiTestimonial"
    ),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

// ======================================================
// FUTURE LOCATIONS
// ======================================================

// const GurugramTestimonials = dynamic(
//   () =>
//     import(
//       "./home/testimonial/GurugramTestimonial"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const MumbaiTestimonials = dynamic(
//   () =>
//     import(
//       "./home/testimonial/MumbaiTestimonial"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const PuneTestimonials = dynamic(
//   () =>
//     import(
//       "./home/testimonial/PuneTestimonial"
//     ),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// ======================================================
// COMPONENT
// ======================================================

export default function TestimonialSelector() {
  const { location } = useLocation();

  // ====================================================
  // NORMALIZE LOCATION
  // ====================================================

  const currentLocation = String(location || "")
    .trim()
    .toLowerCase();

  // ====================================================
  // LOCATION → COMPONENT
  // ====================================================

  const testimonialMap: Record<
    string,
    React.ComponentType
  > = {
    delhi: DelhiTestimonials,

    // Future locations
    // gurugram: GurugramTestimonials,
    // mumbai: MumbaiTestimonials,
    // pune: PuneTestimonials,
  };

  // ====================================================
  // GET COMPONENT
  // ====================================================

  const TestimonialComponent =
    testimonialMap[currentLocation];

  // ====================================================
  // IF COMPONENT DOES NOT EXIST
  // ====================================================

  if (!TestimonialComponent) {
    return null;
  }

  // ====================================================
  // RENDER
  // ====================================================

  return <TestimonialComponent />;
}