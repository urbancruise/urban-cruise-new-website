// app/components/AboutSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";

const DelhiAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DelhiAbout"), { loading: SectionSkeleton }
);
const GurugramAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/GurugramAbout"), { loading: SectionSkeleton }
);
const MumbaiAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/MumbaiAbout"), { loading: SectionSkeleton }
);
const PuneAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/PuneAbout"), { loading: SectionSkeleton }
);
const DefaultAbout = dynamic<{ content?: AboutContent | null }>(
  () => import("./home/about/DefaultAbout"), { loading: SectionSkeleton }
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