// app/components/HowItWorksSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// LAZY LOAD HOW IT WORKS COMPONENTS

const DelhiHowItWorks = dynamic(
  () => import("./home/howItworks/DelhiHowItWorks")
);

// Future components — enable when ready
// const GurugramHowItWorks = dynamic(
//   () => import("./home/howItworks/GurugramHowItWorks")
// );

// const MumbaiHowItWorks = dynamic(
//   () => import("./home/howItworks/MumbaiHowItWorks")
// );

// const PuneHowItWorks = dynamic(
//   () => import("./home/howItworks/PuneHowItWorks")
// );

export default function HowItWorksSelector() {
  const { location } = useLocation();

  // LOCATION → COMPONENT MAPPING
  // Sirf jin locations ke liye component define hai, wahi map mein rakhein.
  const howItWorksMap: Record<string, React.ComponentType> = {
    delhi: DelhiHowItWorks,
    // gurugram: GurugramHowItWorks,
    // mumbai: MumbaiHowItWorks,
    // pune: PuneHowItWorks,
  };

  // SELECT COMPONENT
  // Agar current location map mein nahi hai (e.g. gurugram/mumbai/pune),
  // toh HowItWorksComponent undefined hoga aur section render hi nahi hoga.
  const HowItWorksComponent = howItWorksMap[location];

  // RENDER
  if (!HowItWorksComponent) {
    return null;
  }

  return <HowItWorksComponent />;
}