
// ============================================================
// Location-aware selector for "Vehicles For Every Group Size"
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiVehicleForEveryGroupSize = dynamic(
  () => import("./home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
);

const GurugramVehicleForEveryGroupSize = dynamic(
  () => import("./home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
);

const MumbaiVehicleForEveryGroupSize = dynamic(
  () => import("./home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
);

const PuneVehicleForEveryGroupSize = dynamic(
  () => import("./home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
);

// ======================================================
// TYPES
// ======================================================

export interface VehicleGroupSizeItem {
  type?: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  mainImage: string;
  gallery: string[];
  features: { label: string; icon?: string; color?: string }[];
}

export interface VehicleGroupSizeContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  vehicles?: VehicleGroupSizeItem[];
}

export interface VehicleForEveryGroupSizeProps {
  content?: VehicleGroupSizeContent;
}

// ======================================================
// COMPONENT
// ======================================================

export default function VehicleForEveryGroupSizeSelector({
  content,
}: VehicleForEveryGroupSizeProps) {
  const { location } = useLocation();

  const map: Record<
    string,
    React.ComponentType<VehicleForEveryGroupSizeProps>
  > = {
    delhi: DelhiVehicleForEveryGroupSize,
    gurugram: GurugramVehicleForEveryGroupSize,
    mumbai: MumbaiVehicleForEveryGroupSize,
    pune: PuneVehicleForEveryGroupSize,
  };

  const Component = map[location];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
