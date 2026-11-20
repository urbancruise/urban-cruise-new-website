"use client";

import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";
import type { ComponentType } from "react";
import type { ServiceLocation } from "./types";
import type {
  VehicleRentalServiceContent,
  VehicleRentalServiceProps,
} from "@/app/components/VehicleRentalServiceInIndiaSelector";
import { isRecord, readRecords, readText } from "./cms-content";

const sectionComponents: Record<
  ServiceLocation,
  ComponentType<VehicleRentalServiceProps>
> = {
  delhi: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia"
      ), { loading: SectionSkeleton }
  ),
  gurugram: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia"
      ), { loading: SectionSkeleton }
  ),
  mumbai: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia"
      ), { loading: SectionSkeleton }
  ),
  pune: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia"
      ), { loading: SectionSkeleton }
  ),
  global: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/DefaultVehicleRentalServiceInIndia"
      ), { loading: SectionSkeleton }
  ),
};

export default function VehicleRentalServiceInIndia({
  location,
  content,
}: {
  location: ServiceLocation;
  content?: unknown;
}) {
  const Component = sectionComponents[location];
  const section = isRecord(content) ? content : undefined;
  const normalized: VehicleRentalServiceContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        cities: readRecords(section.cities).map((city) => ({
          name: readText(city.name),
          state: readText(city.state),
          image: readText(city.image),
          imageAlt: readText(city.imageAlt) || undefined,
        })),
      }
    : undefined;
  return <Component content={normalized} />;
}
