"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

export interface ServiceHeroContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImagePublicId?: string;
  vehiclesImage?: string;
  vehiclesImageAlt?: string;
  vehiclesImagePublicId?: string;
}

interface HeroProps {
  location: ServiceLocation;
  content?: ServiceHeroContent;
}

const heroComponents = {
  delhi: dynamic<{ content?: ServiceHeroContent }>(
    () => import("../../home/hero/DelhiHero")
  ),
  gurugram: dynamic<{ content?: ServiceHeroContent }>(
    () => import("../../home/hero/GurugramHero")
  ),
  mumbai: dynamic<{ content?: ServiceHeroContent }>(
    () => import("../../home/hero/MumbaiHero")
  ),
  pune: dynamic<{ content?: ServiceHeroContent }>(
    () => import("../../home/hero/PuneHero")
  ),
  global: dynamic<{ content?: ServiceHeroContent }>(
    () => import("../../home/hero/DefaultHero")
  ),
};

export default function Hero({ location, content }: HeroProps) {
  const Component = heroComponents[location];
  return <Component content={content} />;
}
