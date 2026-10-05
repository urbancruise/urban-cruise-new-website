// app/components/HeroSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiHero = dynamic(() => import("./home/hero/DelhiHero"));
const GurugramHero = dynamic(() => import("./home/hero/GurugramHero"));
const MumbaiHero = dynamic(() => import("./home/hero/MumbaiHero"));
const PuneHero = dynamic(() => import("./home/hero/PuneHero"));
const DefaultHero = dynamic(() => import("./home/hero/DefaultHero"));

interface HeroSelectorProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
    backgroundImage?: string;
    backgroundImagePublicId?: string;
    vehiclesImage?: string;
    vehiclesImagePublicId?: string;
  };
}

export default function HeroSelector({ content }: HeroSelectorProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const heroMap: Record<string, React.ComponentType<any>> = {
    delhi: DelhiHero,
    gurugram: GurugramHero,
    mumbai: MumbaiHero,
    pune: PuneHero,
  };

  const HeroComponent = isGlobalRoute
    ? DefaultHero
    : heroMap[selectedLocation || ""] || DefaultHero;

  return <HeroComponent content={content} />;
}