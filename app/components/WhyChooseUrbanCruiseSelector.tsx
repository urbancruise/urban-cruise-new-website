// app/components/WhyChooseUrbanCruiseSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

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
  import("./home/whychooseurbancruise/DelhiWhyChooseUrbanCruise")
);
const DefaultWhyChoose = dynamic<WhyChooseUrbanCruiseProps>(() =>
  import("./home/whychooseurbancruise/DefaultWhyChooseUrbanCruise")
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
    gurugram: DelhiWhyChoose,
    mumbai: DelhiWhyChoose,
    pune: DelhiWhyChoose,
  };

  const Component = isGlobalRoute
    ? DefaultWhyChoose
    : map[selectedLocation || ""] || DefaultWhyChoose;

  if (!Component) return null;

  return <Component content={content} />;
}