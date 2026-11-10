"use client";

import dynamic from "next/dynamic";
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
      )
  ),
  gurugram: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia"
      )
  ),
  mumbai: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia"
      )
  ),
  pune: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia"
      )
  ),
  global: dynamic(
    () =>
      import(
        "../../home/vehiclerentalserviceinindia/DefaultVehicleRentalServiceInIndia"
      )
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
