// app/components/HowItWorksSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  image: string;
  imagePublicId?: string;
  color?: string;
}

export interface HowItWorksContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  steps?: HowItWorksStep[];
}

export interface HowItWorksSelectorProps {
  content?: HowItWorksContent;
}

const DelhiHowItWorks = dynamic<HowItWorksSelectorProps>(() =>
  import("./home/howItworks/DelhiHowItWorks")
);
const GurugramHowItWorks = dynamic<HowItWorksSelectorProps>(() =>
  import("./home/howItworks/GurugramHowItWorks")
);
const MumbaiHowItWorks = dynamic<HowItWorksSelectorProps>(() =>
  import("./home/howItworks/MumbaiHowItWorks")
);
const PuneHowItWorks = dynamic<HowItWorksSelectorProps>(() =>
  import("./home/howItworks/PuneHowItWorks")
);
const DefaultHowItWorks = dynamic<HowItWorksSelectorProps>(() =>
  import("./home/howItworks/DefaultHowItWorks")
);

export default function HowItWorksSelector({
  content,
}: HowItWorksSelectorProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<string, React.ComponentType<HowItWorksSelectorProps>> = {
    delhi: DelhiHowItWorks,
    gurugram: GurugramHowItWorks,
    mumbai: MumbaiHowItWorks,
    pune: PuneHowItWorks,
  };

  const Component = isGlobalRoute
    ? DefaultHowItWorks
    : map[pathSegments[0]] ||
      map[selectedLocation || ""] ||
      DefaultHowItWorks;

  return <Component content={content} />;
}