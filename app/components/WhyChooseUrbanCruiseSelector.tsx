// app/components/WhyChooseUrbanCruiseSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";

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

const DelhiWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/DelhiWhyChooseUrbanCruise"), { loading: SectionSkeleton }
);
const GurugramWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/GurugramWhyChooseUrbanCruise"), { loading: SectionSkeleton }
);
const MumbaiWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise"), { loading: SectionSkeleton }
);
const PuneWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/PuneWhyChooseUrbanCruise"), { loading: SectionSkeleton }
);
const DefaultWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/DefaultWhyChooseUrbanCruise"), { loading: SectionSkeleton }
);

export default function WhyChooseUrbanCruiseSelector({
  content,
}: WhyChooseUrbanCruiseProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<WhyChooseUrbanCruiseProps>
  > = {
    delhi: DelhiWhyChoose,
    gurugram: GurugramWhyChoose,
    mumbai: MumbaiWhyChoose,
    pune: PuneWhyChoose,
  };

  const Component = isGlobalRoute
    ? DefaultWhyChoose
    : map[pathSegments[0]] ||
      map[selectedLocation || ""] ||
      DefaultWhyChoose;

  if (!Component) return null;

  return <Component content={content} />;
}