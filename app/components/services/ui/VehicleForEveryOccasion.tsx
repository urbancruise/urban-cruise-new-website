"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
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
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
