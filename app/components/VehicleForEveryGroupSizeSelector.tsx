// app/components/VehicleForEveryGroupSizeSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiVehicleForEveryGroupSize = dynamic(() =>
  import("./home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
);
const GurugramVehicleForEveryGroupSize = dynamic(() =>
  import("./home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
);
const MumbaiVehicleForEveryGroupSize = dynamic(() =>
  import("./home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
);
const PuneVehicleForEveryGroupSize = dynamic(() =>
  import("./home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
);
const DefaultVehicleForEveryGroupSize = dynamic(() =>
  import("./home/vehicleforeverygroupsize/DefaultVehicleForEveryGroupSize")
);

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

interface Props {
  content?: VehicleGroupSizeContent;
}

export default function VehicleForEveryGroupSizeSelector({ content }: Props) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: VehicleGroupSizeContent }>
  > = {
    delhi: DelhiVehicleForEveryGroupSize as any,
    gurugram: GurugramVehicleForEveryGroupSize as any,
    mumbai: MumbaiVehicleForEveryGroupSize as any,
    pune: PuneVehicleForEveryGroupSize as any,
  };

  const Component = isGlobalRoute
    ? (DefaultVehicleForEveryGroupSize as any)
    : map[selectedLocation || ""] || (DefaultVehicleForEveryGroupSize as any);

  if (!Component) return null;

  return <Component content={content} />;
}