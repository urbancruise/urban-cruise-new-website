"use client";

import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type {
  WhyChooseUrbanCruiseProps,
  WhyChooseUrbanCruiseContent,
} from "@/app/components/WhyChooseUrbanCruiseSelector";
import { isRecord, readRecords, readStringArray, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<WhyChooseUrbanCruiseProps>
> = {
  delhi: dynamic<WhyChooseUrbanCruiseProps>(
    () => import("../../home/whychooseurbancruise/DelhiWhyChooseUrbanCruise"), { loading: SectionSkeleton }
  ),
  gurugram: dynamic<WhyChooseUrbanCruiseProps>(
    () => import("../../home/whychooseurbancruise/GurugramWhyChooseUrbanCruise"), { loading: SectionSkeleton }
  ),
  mumbai: dynamic<WhyChooseUrbanCruiseProps>(
    () => import("../../home/whychooseurbancruise/MumbaiWhyChooseUrbanCruise"), { loading: SectionSkeleton }
  ),
  pune: dynamic<WhyChooseUrbanCruiseProps>(
    () => import("../../home/whychooseurbancruise/PuneWhyChooseUrbanCruise"), { loading: SectionSkeleton }
  ),
  global: dynamic<WhyChooseUrbanCruiseProps>(
    () => import("../../home/whychooseurbancruise/DefaultWhyChooseUrbanCruise"), { loading: SectionSkeleton }
  ),
};

export default function WhyChooseUrbanCruise({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: WhyChooseUrbanCruiseContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        benefits: readRecords(section.benefits).map((benefit, index) => {
          const description = readStringArray(
            benefit.description ?? benefit.items,
          );
          return {
            number: readText(
              benefit.number,
              String(index + 1).padStart(2, "0"),
            ),
            title: readText(benefit.title),
            description,
            image: readText(benefit.image),
            imageAlt: readText(benefit.imageAlt) || undefined,
            theme:
              benefit.color === "orange" || benefit.color === "green"
                ? benefit.color
                : undefined,
          };
        }),
      }
    : undefined;
  return <Component content={normalized} />;
}
