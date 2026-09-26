// // app/components/HowItWorksSelector.tsx
// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import { useLocation } from "@/app/context/LocationContext";

// // LAZY LOAD HOW IT WORKS COMPONENTS

// const DelhiHowItWorks = dynamic(
//   () => import("./home/howItworks/DelhiHowItWorks")
// );

// // Future components — enable when ready
// const GurugramHowItWorks = dynamic(
//   () => import("./home/howItworks/GurugramHowItWorks")
// );

// const MumbaiHowItWorks = dynamic(
//   () => import("./home/howItworks/MumbaiHowItWorks")
// );

// const PuneHowItWorks = dynamic(
//   () => import("./home/howItworks/PuneHowItWorks")
// );

// export default function HowItWorksSelector() {
//   const { location } = useLocation();

//   // LOCATION → COMPONENT MAPPING
//   // Sirf jin locations ke liye component define hai, wahi map mein rakhein.
//   const howItWorksMap: Record<string, React.ComponentType> = {
//     delhi: DelhiHowItWorks,
//     gurugram: GurugramHowItWorks,
//     mumbai: MumbaiHowItWorks,
//     pune: PuneHowItWorks,
//   };

//   // SELECT COMPONENT
//   // Agar current location map mein nahi hai (e.g. gurugram/mumbai/pune),
//   // toh HowItWorksComponent undefined hoga aur section render hi nahi hoga.
//   const HowItWorksComponent = howItWorksMap[location];

//   // RENDER
//   if (!HowItWorksComponent) {
//     return null;
//   }

//   return <HowItWorksComponent />;
// }

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ============================================================
// LAZY LOAD HOW IT WORKS COMPONENTS
// ============================================================

const DelhiHowItWorks = dynamic(() => import("./home/howItWorks/DelhiHowItWorks"));
const GurugramHowItWorks = dynamic(() => import("./home/howItWorks/GurugramHowItWorks"));
const MumbaiHowItWorks = dynamic(() => import("./home/howItWorks/MumbaiHowItWorks"));
const PuneHowItWorks = dynamic(() => import("./home/howItWorks/PuneHowItWorks"));

// ============================================================
// TYPES
// ============================================================
export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imagePublicId?: string;
  color?: string; // optional override
}

export interface HowItWorksContent {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: HowItWorksStep[];
}

export interface HowItWorksSelectorProps {
  content?: HowItWorksContent;
}

type HowItWorksComponent = React.ComponentType<HowItWorksSelectorProps>;

// ============================================================
// SELECTOR
// ============================================================
export default function HowItWorksSelector({ content }: HowItWorksSelectorProps) {
  const { location } = useLocation();

  const howItWorksMap: Record<string, HowItWorksComponent> = {
    delhi: DelhiHowItWorks as HowItWorksComponent,
    gurugram: GurugramHowItWorks as HowItWorksComponent,
    mumbai: MumbaiHowItWorks as HowItWorksComponent,
    pune: PuneHowItWorks as HowItWorksComponent,
  };

  const HowItWorksComponent = howItWorksMap[location];

  if (!HowItWorksComponent) {
    return null;
  }

  return <HowItWorksComponent content={content} />;
}
