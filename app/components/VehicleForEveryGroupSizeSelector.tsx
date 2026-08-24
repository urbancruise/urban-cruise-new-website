// app/components/VehicleForEveryGroupSizeSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// LAZY LOAD VEHICLE FOR EVERY GROUP SIZE COMPONENTS

const DelhiVehicleForEveryGroupSize = dynamic(
  () => import("./home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
);

// Future components — enable when ready
// const GurugramVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
// );

// const MumbaiVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
// );

// const PuneVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
// );

export default function VehicleForEveryGroupSizeSelector() {
  const { location } = useLocation();

  // LOCATION → COMPONENT MAPPING
  // Only add locations that have defined components
  const vehicleForEveryGroupSizeMap: Record<string, React.ComponentType> = {
    delhi: DelhiVehicleForEveryGroupSize,
    // gurugram: GurugramVehicleForEveryGroupSize,
    // mumbai: MumbaiVehicleForEveryGroupSize,
    // pune: PuneVehicleForEveryGroupSize,
  };

  // SELECT COMPONENT
  // If current location is not in map, component will be undefined
  // and section won't render
  const VehicleForEveryGroupSizeComponent = vehicleForEveryGroupSizeMap[location];

  // RENDER
  if (!VehicleForEveryGroupSizeComponent) {
    return null;
  }

  return <VehicleForEveryGroupSizeComponent />;
}