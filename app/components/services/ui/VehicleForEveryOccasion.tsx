"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type {
  VehicleForEveryOccasionProps,
  VehicleEveryOccasionContent,
} from "@/app/components/VehicleForEveryOccasionSelector";
import { isRecord, readRecords, readStringArray, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<VehicleForEveryOccasionProps>
> = {
  delhi: dynamic(
    () => import("../../home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
  ),
  gurugram: dynamic(
    () => import("../../home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
  ),
  mumbai: dynamic(
    () => import("../../home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
  ),
  pune: dynamic(
    () => import("../../home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
  ),
  global: dynamic(
    () => import("../../home/vehicleforeveryoccasion/DefaultVehicleForEveryOccasion")
  ),
};

export default function VehicleForEveryOccasion({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: VehicleEveryOccasionContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        tabs: readRecords(section.tabs).map((tab, index) => {
          const label = readText(tab.label);
          const cards = readRecords(tab.cards).map((card) => ({
            title: readText(card.title),
            highlight: readText(card.highlight, label),
            description: readText(card.description),
            readMoreLink:
              readText(card.readMoreLink) || readText(card.readMoreHref) || undefined,
            seats: readText(card.seats),
            price: readText(card.price),
            location: readText(card.location),
            image: readText(card.image),
            imageAlt: readText(card.imageAlt) || undefined,
            features: readStringArray(card.features),
          }));
          return {
            id:
              readText(tab.id) ||
              readText(tab.slug) ||
              `occasion-${index + 1}`,
            label,
            iconKey: readText(tab.iconKey || tab.slug) || undefined,
            cards,
          };
        }),
      }
    : undefined;
  return <Component content={normalized} />;
}
