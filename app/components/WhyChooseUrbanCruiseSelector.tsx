// app/components/WhyChooseUrbanCruiseSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// LAZY LOAD WHY CHOOSE URBAN CRUISE COMPONENTS
const DelhiWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/DelhiWhyChooseUrbanCruise")
);

// Future components — enable when ready
const GurugramWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/GurugramWhyChooseUrbanCruise")
);

const MumbaiWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise")
);

const PuneWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/PuneWhyChooseUrbanCruise")
);

export default function WhyChooseUrbanCruiseSelector() {
  const { location } = useLocation();

  // LOCATION → COMPONENT MAPPING
  // Only add locations that have defined components
  const whyChooseUrbanCruiseMap: Record<string, React.ComponentType> = {
    delhi: DelhiWhyChooseUrbanCruise,
    gurugram: GurugramWhyChooseUrbanCruise,
    mumbai: MumbaiWhyChooseUrbanCruise,
    pune: PuneWhyChooseUrbanCruise,
  };

  // SELECT COMPONENT
  const WhyChooseUrbanCruiseComponent = whyChooseUrbanCruiseMap[location];

  // RENDER - Return null if no component exists for this location
  if (!WhyChooseUrbanCruiseComponent) {
    return null;
  }

  return <WhyChooseUrbanCruiseComponent />;
}