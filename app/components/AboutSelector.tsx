// app/components/AboutSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiAbout = dynamic(() => import("./home/about/DelhiAbout"));
const GurugramAbout = dynamic(() => import("./home/about/GurugramAbout"));
const MumbaiAbout = dynamic(() => import("./home/about/MumbaiAbout"));
const PuneAbout = dynamic(() => import("./home/about/PuneAbout"));
const DefaultAbout = dynamic(() => import("./home/about/DefaultAbout"));

export interface AboutContent {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  videoUrl?: string;
  paragraphs?: string[];
  videoPoster?: string;
}

interface AboutSelectorProps {
  content?: AboutContent | null;
}

export default function AboutSelector({ content }: AboutSelectorProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const aboutMap: Record<
    string,
    React.ComponentType<{ content?: AboutContent | null }>
  > = {
    delhi: DelhiAbout as any,
    gurugram: GurugramAbout as any,
    mumbai: MumbaiAbout as any,
    pune: PuneAbout as any,
  };

  const AboutComponent = isGlobalRoute
    ? (DefaultAbout as any)
    : aboutMap[selectedLocation || ""] || (DefaultAbout as any);

  return <AboutComponent content={content} />;
}