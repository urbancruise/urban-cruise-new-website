"use client";

import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type { HowItWorksSelectorProps } from "@/app/components/HowItWorksSelector";
import { isRecord, readRecords, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<HowItWorksSelectorProps>
> = {
  delhi: dynamic(() => import("../../home/howItworks/DelhiHowItWorks"), { loading: SectionSkeleton }),
  gurugram: dynamic(() => import("../../home/howItworks/GurugramHowItWorks"), { loading: SectionSkeleton }),
  mumbai: dynamic(() => import("../../home/howItworks/MumbaiHowItWorks"), { loading: SectionSkeleton }),
  pune: dynamic(() => import("../../home/howItworks/PuneHowItWorks"), { loading: SectionSkeleton }),
  global: dynamic(() => import("../../home/howItworks/DefaultHowItWorks"), { loading: SectionSkeleton }),
};

export default function HowItWorks({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        steps: readRecords(section.steps).map((step, index) => ({
          number: readText(step.number, String(index + 1).padStart(2, "0")),
          title: readText(step.title),
          description: readText(step.description),
          image: readText(step.image),
          imagePublicId: readText(step.imagePublicId) || undefined,
          color: readText(step.color) || undefined,
        })),
      }
    : undefined;
  return <Component content={normalized} />;
}
