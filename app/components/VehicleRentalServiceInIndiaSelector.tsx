
// ============================================================
// Location-aware selector for "Vehicle Rental Service In India"
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiVehicleRentalServiceInIndia = dynamic(
  () => import("./home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia"),
  { loading: () => <div className="min-h-[400px] w-full bg-white" /> }
);

const GurugramVehicleRentalServiceInIndia = dynamic(
  () => import("./home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia"),
  { loading: () => <div className="min-h-[400px] w-full bg-white" /> }
);

const MumbaiVehicleRentalServiceInIndia = dynamic(
  () => import("./home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia"),
  { loading: () => <div className="min-h-[400px] w-full bg-white" /> }
);

const PuneVehicleRentalServiceInIndia = dynamic(
  () => import("./home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia"),
  { loading: () => <div className="min-h-[400px] w-full bg-white" /> }
);

// ======================================================
// TYPES
// ======================================================

export interface ServiceCityItem {
  name: string;
  state: string;
  image: string;
}

export interface VehicleRentalServiceContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  cities?: ServiceCityItem[];
}

export interface VehicleRentalServiceProps {
  content?: VehicleRentalServiceContent;
}

// ======================================================
// COMPONENT
// ======================================================

export default function VehicleRentalServiceInIndiaSelector({
  content,
}: VehicleRentalServiceProps) {
  const { location } = useLocation();

  const currentLocation = String(location || "").trim().toLowerCase();

  const map: Record<
    string,
    React.ComponentType<VehicleRentalServiceProps>
  > = {
    delhi: DelhiVehicleRentalServiceInIndia,
    gurugram: GurugramVehicleRentalServiceInIndia,
    mumbai: MumbaiVehicleRentalServiceInIndia,
    pune: PuneVehicleRentalServiceInIndia,
  };

  const Component = map[currentLocation];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
