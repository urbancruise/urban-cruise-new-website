// app/components/HowItWorksSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiHowItWorks = dynamic(() =>
  import("./home/howItworks/DelhiHowItWorks")
);
const GurugramHowItWorks = dynamic(() =>
  import("./home/howItworks/GurugramHowItWorks")
);
const MumbaiHowItWorks = dynamic(() =>
  import("./home/howItworks/MumbaiHowItWorks")
);
const PuneHowItWorks = dynamic(() =>
  import("./home/howItworks/PuneHowItWorks")
);
const DefaultHowItWorks = dynamic(() =>
  import("./home/howItworks/DefaultHowItWorks")
);

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

interface HowItWorksSelectorProps {
  content?: HowItWorksContent;
}

export default function HowItWorksSelector({
  content,
}: HowItWorksSelectorProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<string, React.ComponentType<HowItWorksSelectorProps>> = {
    delhi: DelhiHowItWorks as any,
    gurugram: GurugramHowItWorks as any,
    mumbai: MumbaiHowItWorks as any,
    pune: PuneHowItWorks as any,
  };

  const Component = isGlobalRoute
    ? (DefaultHowItWorks as any)
    : map[selectedLocation || ""] || (DefaultHowItWorks as any);

  return <Component content={content} />;
}