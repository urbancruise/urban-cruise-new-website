// app/components/AboutSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DelhiAbout")
);
const GurugramAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/GurugramAbout")
);
const MumbaiAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/MumbaiAbout")
);
const PuneAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/PuneAbout")
);
const DefaultAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DefaultAbout")
);

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
    delhi: DelhiAbout,
    gurugram: GurugramAbout,
    mumbai: MumbaiAbout,
    pune: PuneAbout,
  };

  const AboutComponent = isGlobalRoute
    ? DefaultAbout
    : aboutMap[pathSegments[0]] ||
      aboutMap[selectedLocation || ""] ||
      DefaultAbout;

  return <AboutComponent content={content} />;
}