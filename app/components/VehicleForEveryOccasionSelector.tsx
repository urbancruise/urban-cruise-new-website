// app/components/VehicleForEveryOccasionSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// LAZY LOAD VEHICLE FOR EVERY OCCASION COMPONENTS
const DelhiVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
);

// Future components — enable when ready
const GurugramVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
);

const MumbaiVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
);

const PuneVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
);

export default function VehicleForEveryOccasionSelector() {
  const { location } = useLocation();

  // LOCATION → COMPONENT MAPPING
  // Only add locations that have defined components
  const vehicleForEveryOccasionMap: Record<string, React.ComponentType> = {
    delhi: DelhiVehicleForEveryOccasion,
    gurugram: GurugramVehicleForEveryOccasion,
    mumbai: MumbaiVehicleForEveryOccasion,
    pune: PuneVehicleForEveryOccasion,
  };

  // SELECT COMPONENT
  const VehicleForEveryOccasionComponent = vehicleForEveryOccasionMap[location];

  // RENDER - Return null if no component exists for this location
  if (!VehicleForEveryOccasionComponent) {
    return null;
  }

  return <VehicleForEveryOccasionComponent />;
}