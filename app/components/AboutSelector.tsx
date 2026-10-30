// app/components/AboutSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface AboutContent {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  videoUrl?: string;
  paragraphs?: string[];
  videoPoster?: string;
}

const DelhiAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DelhiAbout")
);
const DefaultAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DefaultAbout")
);

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
    gurugram: DelhiAbout,
    mumbai: DelhiAbout,
    pune: DelhiAbout,
  };

  const AboutComponent = isGlobalRoute
    ? DefaultAbout
    : aboutMap[selectedLocation || ""] || DefaultAbout;

  return <AboutComponent content={content} />;
}