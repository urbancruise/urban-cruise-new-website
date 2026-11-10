"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type { FaqsContent, FaqsProps } from "@/app/components/FaqsSelector";
import { isRecord, readRecords, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<FaqsProps>
> = {
  delhi: dynamic(() => import("../../home/faq's/DelhiFaq’s")),
  gurugram: dynamic(() => import("../../home/faq's/GurugramFaq’s")),
  mumbai: dynamic(() => import("../../home/faq's/MumbaiFaq's")),
  pune: dynamic(() => import("../../home/faq's/PuneFaq’s")),
  global: dynamic(() => import("../../home/faq's/DefaultFaq's")),
};

export default function Faqs({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: FaqsContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        titleAccent: readText(section.titleAccent) || undefined,
        description: readText(section.description) || undefined,
        items: readRecords(section.items).map((item) => ({
          number: readText(item.number) || undefined,
          question: readText(item.question),
          answer: readText(item.answer),
        })),
        supportTitle: readText(section.supportTitle) || undefined,
        supportSubtitle: readText(section.supportSubtitle) || undefined,
        supportButtonLabel:
          readText(section.supportButtonLabel) || undefined,
        supportButtonHref: readText(section.supportButtonHref) || undefined,
      }
    : undefined;
  return <Component content={normalized} />;
}
