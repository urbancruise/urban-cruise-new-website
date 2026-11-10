"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type {
  VehicleForEveryGroupSizeProps,
  VehicleGroupSizeContent,
} from "@/app/components/VehicleForEveryGroupSizeSelector";
import { isRecord, readRecords, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<VehicleForEveryGroupSizeProps>
> = {
  delhi: dynamic(
    () => import("../../home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
  ),
  gurugram: dynamic(
    () => import("../../home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
  ),
  mumbai: dynamic(
    () => import("../../home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
  ),
  pune: dynamic(
    () => import("../../home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
  ),
  global: dynamic(
    () => import("../../home/vehicleforeverygroupsize/DefaultVehicleForEveryGroupSize")
  ),
};

export default function VehicleForEveryGroupSize({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: VehicleGroupSizeContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        vehicles: readRecords(section.vehicles).map((vehicle) => {
          const gallery = Array.isArray(vehicle.gallery)
            ? vehicle.gallery.flatMap((image) => {
                if (typeof image === "string") return [image];
                return isRecord(image) && typeof image.url === "string"
                  ? [image.url]
                  : [];
              })
            : [];
          return {
            type: readText(vehicle.type) || undefined,
            name: readText(vehicle.name),
            detailsUrl: readText(vehicle.detailsUrl) || undefined,
            tagline: readText(vehicle.tagline),
            price: readText(vehicle.price),
            description: readText(vehicle.description),
            mainImage: readText(vehicle.mainImage),
            mainImageAlt: readText(vehicle.mainImageAlt) || undefined,
            gallery,
            galleryAlts: Array.isArray(vehicle.gallery)
              ? vehicle.gallery.flatMap((image) =>
                  isRecord(image) && typeof image.alt === "string"
                    ? [image.alt]
                    : [],
                )
              : undefined,
            features: readRecords(vehicle.features).flatMap((feature) => {
              const label = readText(feature.label || feature.name).trim();
              return label
                ? [{
                    label,
                    icon: readText(feature.icon) || undefined,
                    color: readText(feature.color) || undefined,
                  }]
                : [];
            }),
          };
        }),
      }
    : undefined;
  return <Component content={normalized} />;
}
