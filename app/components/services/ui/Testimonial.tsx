"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type {
  TestimonialsContent,
  TestimonialsProps,
} from "@/app/components/TestimonialSelector";
import { extractYouTubeId } from "@/app/lib/youtube";
import { isRecord, readRecords, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<TestimonialsProps>
> = {
  delhi: dynamic(() => import("../../home/testimonial/DelhiTestimonial")),
  gurugram: dynamic(() => import("../../home/testimonial/GurugramTestimonial")),
  mumbai: dynamic(() => import("../../home/testimonial/MumbaiTestimonial")),
  pune: dynamic(() => import("../../home/testimonial/PuneTestimonial")),
  global: dynamic(() => import("../../home/testimonial/DefaultTestimonial")),
};

export default function Testimonial({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: TestimonialsContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleLine2: readText(section.titleLine2 || section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        items: readRecords(section.items).map((item, index) => ({
          id:
            typeof item.id === "number" ? item.id : index + 1,
          name: readText(item.name),
          location: readText(item.location),
          message: readText(item.message),
          avatar: readText(item.avatar) || undefined,
          avatarAlt: readText(item.avatarAlt) || undefined,
          videoId:
            readText(item.videoId) ||
            extractYouTubeId(readText(item.youtubeUrl)) ||
            undefined,
          rating:
            typeof item.rating === "number"
              ? item.rating
              : Number(readText(item.rating, "5")) || 5,
          accent: item.accent === "orange" ? "orange" : "green",
        })),
      }
    : undefined;
  return <Component content={normalized} />;
}
