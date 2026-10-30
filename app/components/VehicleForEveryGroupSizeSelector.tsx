// app/components/VehicleForEveryGroupSizeSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface VehicleGroupSizeItem {
  type?: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  mainImage: string;
  mainImageAlt?: string; 
  gallery: string[];
  galleryAlts?: string[];
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

const DelhiVehicleForEveryGroupSize =
  dynamic<VehicleForEveryGroupSizeProps>(() =>
    import("./home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
  );
const GurugramVehicleForEveryGroupSize =
  dynamic<VehicleForEveryGroupSizeProps>(() =>
    import("./home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
  );
const MumbaiVehicleForEveryGroupSize =
  dynamic<VehicleForEveryGroupSizeProps>(() =>
    import("./home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
  );
const PuneVehicleForEveryGroupSize =
  dynamic<VehicleForEveryGroupSizeProps>(() =>
    import("./home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
  );
const DefaultVehicleForEveryGroupSize =
  dynamic<VehicleForEveryGroupSizeProps>(() =>
    import("./home/vehicleforeverygroupsize/DefaultVehicleForEveryGroupSize")
  );

export default function VehicleForEveryGroupSizeSelector({
  content,
}: VehicleForEveryGroupSizeProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<VehicleForEveryGroupSizeProps>
  > = {
    delhi: DelhiVehicleForEveryGroupSize,
    gurugram: GurugramVehicleForEveryGroupSize,
    mumbai: MumbaiVehicleForEveryGroupSize,
    pune: PuneVehicleForEveryGroupSize,
  };

  const Component = isGlobalRoute
    ? DefaultVehicleForEveryGroupSize
    : map[pathSegments[0]] ||
      map[selectedLocation || ""] ||
      DefaultVehicleForEveryGroupSize;

  if (!Component) return null;

  return <Component content={content} />;
}