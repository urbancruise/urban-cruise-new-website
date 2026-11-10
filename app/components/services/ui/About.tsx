"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";
import type { AboutContent } from "../../AboutSelector";
import type { ComponentType } from "react";

const aboutComponents: Record<
  ServiceLocation,
  ComponentType<{ content?: AboutContent | null }>
> = {
  delhi: dynamic(() => import("../../home/about/DelhiAbout")),
  gurugram: dynamic(() => import("../../home/about/GurugramAbout")),
  mumbai: dynamic(() => import("../../home/about/MumbaiAbout")),
  pune: dynamic(() => import("../../home/about/PuneAbout")),
  global: dynamic(() => import("../../home/about/DefaultAbout")),
};

function normalizeContent(value: unknown): AboutContent | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const section = value as Record<string, unknown>;
  return {
    eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
    title: typeof section.title === "string" ? section.title : undefined,
    tagline: typeof section.tagline === "string" ? section.tagline : undefined,
    videoUrl:
      typeof section.videoUrl === "string" ? section.videoUrl : undefined,
    paragraphs: Array.isArray(section.paragraphs)
      ? section.paragraphs.filter(
          (paragraph): paragraph is string => typeof paragraph === "string",
        )
      : undefined,
  };
}

export default function About({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = aboutComponents[location];
  return <Component content={normalizeContent(content)} />;
}
