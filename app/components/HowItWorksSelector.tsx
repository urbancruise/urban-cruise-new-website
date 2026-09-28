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
