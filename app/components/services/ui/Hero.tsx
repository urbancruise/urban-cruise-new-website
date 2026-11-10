"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import { isRecord, readText } from "./cms-content";

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

const heroComponents: Record<
  ServiceLocation,
  ComponentType<{ content?: ServiceHeroContent }>
> = {
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

export default function Hero({
  location,
  content,
  cmsContent,
}: HeroProps & { cmsContent?: unknown }) {
  const Component = heroComponents[location];
  const section = isRecord(cmsContent) ? cmsContent : {};
  const normalized: ServiceHeroContent = {
    ...content,
    eyebrow: readText(section.eyebrow, content?.eyebrow),
    title: readText(section.title, content?.title),
    titleHighlight: readText(section.titleHighlight, content?.titleHighlight),
    description: readText(section.description, content?.description),
    backgroundImage: readText(
      section.backgroundImage,
      content?.backgroundImage,
    ),
    backgroundImageAlt: readText(
      section.backgroundImageAlt,
      content?.backgroundImageAlt,
    ),
    backgroundImagePublicId: readText(
      section.backgroundImagePublicId,
      content?.backgroundImagePublicId,
    ),
    vehiclesImage: readText(section.vehiclesImage, content?.vehiclesImage),
    vehiclesImageAlt: readText(
      section.vehiclesImageAlt,
      content?.vehiclesImageAlt,
    ),
    vehiclesImagePublicId: readText(
      section.vehiclesImagePublicId,
      content?.vehiclesImagePublicId,
    ),
  };
  return <Component content={normalized} />;
}
