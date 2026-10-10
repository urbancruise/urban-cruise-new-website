// app/components/WhyChooseUrbanCruiseSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiWhyChoose = dynamic(() =>
  import("./home/whychooseurbancruise/DelhiWhyChooseUrbanCruise")
);
const GurugramWhyChoose = dynamic(() =>
  import("./home/whychooseurbancruise/GurugramWhyChooseUrbanCruise")
);
const MumbaiWhyChoose = dynamic(() =>
  import("./home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise")
);
const PuneWhyChoose = dynamic(() =>
  import("./home/whychooseurbancruise/PuneWhyChooseUrbanCruise")
);
const DefaultWhyChoose = dynamic(() =>
  import("./home/whychooseurbancruise/DefaultWhyChooseUrbanCruise")
);

export interface WhyChooseBenefitItem {
  number: string;
  title: string;
  icon?: string;
  description: string[];
  image: string;
  imageAlt?: string;
  theme?: "green" | "orange";
}

export interface WhyChooseUrbanCruiseContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  benefits?: WhyChooseBenefitItem[];
}

export interface WhyChooseUrbanCruiseProps {
  content?: WhyChooseUrbanCruiseContent;
}

export default function WhyChooseUrbanCruiseSelector({
  content,
}: WhyChooseUrbanCruiseProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: WhyChooseUrbanCruiseContent }>
  > = {
    delhi: DelhiWhyChoose as any,
    gurugram: GurugramWhyChoose as any,
    mumbai: MumbaiWhyChoose as any,
    pune: PuneWhyChoose as any,
  };

  const Component = isGlobalRoute
    ? (DefaultWhyChoose as any)
    : map[selectedLocation || ""] || (DefaultWhyChoose as any);

  if (!Component) return null;

  return <Component content={content} />;
}