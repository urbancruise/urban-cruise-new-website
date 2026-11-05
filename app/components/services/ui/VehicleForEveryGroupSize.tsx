"use client";

import dynamic from "next/dynamic";
import type { ServiceLocation } from "./types";

const sectionComponents = {
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
}: {
  location: ServiceLocation;
}) {
  const Component = sectionComponents[location];
  return <Component />;
}
