// app/components/HeroSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Lazy load hero components for better performance
const DelhiHero = dynamic(() => import("./home/hero/DelhiHero"));
const GurugramHero = dynamic(() => import("./home/hero/GurugramHero"));
const MumbaiHero = dynamic(() => import("./home/hero/MumbaiHero"));
const PuneHero = dynamic(() => import("./home/hero/PuneHero"));
const DefaultHero = dynamic(() => import("./home/hero/DefaultHero"));

export default function HeroSelector() {
  const { location } = useLocation();

  // Map locations to their respective hero components
  const heroMap: Record<string, React.ComponentType> = {
    delhi: DelhiHero,
    gurugram: GurugramHero,
    mumbai: MumbaiHero,
    pune: PuneHero,
  };

  // Get the appropriate hero component or use default
  const HeroComponent = heroMap[location] || DefaultHero;

  return <HeroComponent />;
}

