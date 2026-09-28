// ============================================================
// Location-aware selector for "Why Choose Urban Cruise"
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/DelhiWhyChooseUrbanCruise")
);

const GurugramWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/GurugramWhyChooseUrbanCruise")
);

const MumbaiWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise")
);

const PuneWhyChooseUrbanCruise = dynamic(
  () => import("./home/whychooseurbancruise/PuneWhyChooseUrbanCruise")
);

// ======================================================
// TYPES
// ======================================================

export interface WhyChooseBenefitItem {
  number: string;
  title: string;
  icon?: string;
  description: string[];
  image: string;
  theme?: "green" | "orange";
}

export interface WhyChooseUrbanCruiseContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  benefits?: WhyChooseBenefitItem[];
}

export interface WhyChooseUrbanCruiseProps {
  content?: WhyChooseUrbanCruiseContent;
}

// ======================================================
// COMPONENT
// ======================================================

export default function WhyChooseUrbanCruiseSelector({
  content,
}: WhyChooseUrbanCruiseProps) {
  const { location } = useLocation();

  const map: Record<
    string,
    React.ComponentType<WhyChooseUrbanCruiseProps>
  > = {
    delhi: DelhiWhyChooseUrbanCruise,
    gurugram: GurugramWhyChooseUrbanCruise,
    mumbai: MumbaiWhyChooseUrbanCruise,
    pune: PuneWhyChooseUrbanCruise,
  };

  const Component = map[location];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
