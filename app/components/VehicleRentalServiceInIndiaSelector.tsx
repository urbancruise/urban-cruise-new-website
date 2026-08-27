// app/components/VehicleRentalServiceInIndiaSelector.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// DELHI VEHICLE RENTAL SERVICE
// ======================================================

const DelhiVehicleRentalService = dynamic(
  () => import("./home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia"),
  {
    loading: () => (
      <div className="min-h-[400px] w-full bg-white" />
    ),
  }
);

// ======================================================
// FUTURE LOCATIONS
// ======================================================

// const GurugramVehicleRentalService = dynamic(
//   () => import("./home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia"),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const MumbaiVehicleRentalService = dynamic(
//   () => import("./home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia"),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// const PuneVehicleRentalService = dynamic(
//   () => import("./home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia"),
//   {
//     loading: () => (
//       <div className="min-h-[400px] w-full bg-white" />
//     ),
//   }
// );

// ======================================================
// COMPONENT
// ======================================================

export default function VehicleRentalServiceInIndiaSelector() {
  const { location } = useLocation();

  // ====================================================
  // NORMALIZE LOCATION
  // ====================================================

  const currentLocation = String(location || "")
    .trim()
    .toLowerCase();

  // ====================================================
  // LOCATION → COMPONENT MAP
  // ====================================================

  const componentMap: Record<
    string,
    React.ComponentType
  > = {
    delhi: DelhiVehicleRentalService,

    // Future locations
    // gurugram: GurugramVehicleRentalService,
    // mumbai: MumbaiVehicleRentalService,
    // pune: PuneVehicleRentalService,
  };

  // ====================================================
  // GET COMPONENT
  // ====================================================

  const Component = componentMap[currentLocation];

  // ====================================================
  // NO COMPONENT
  // ====================================================

  if (!Component) {
    return null;
  }

  // ====================================================
  // RENDER
  // ====================================================

  return <Component />;
}