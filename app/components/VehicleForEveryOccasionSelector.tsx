// app/components/VehicleForEveryOccasionSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface OccasionCard {
  title: string;
  highlight: string;
  description: string;
  seats: string;
  price: string;
  location: string;
  image: string;
  imageAlt?: string; 
  features: string[];
}

export interface OccasionTab {
  id: string;
  label: string;
  iconKey?: string;
  cards: OccasionCard[];
}

export interface VehicleEveryOccasionContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  tabs?: OccasionTab[];
}

export interface VehicleForEveryOccasionProps {
  content?: VehicleEveryOccasionContent;
}

const DelhiVehicleForEveryOccasion =
  dynamic<VehicleForEveryOccasionProps>(() =>
    import("./home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
  );
const GurugramVehicleForEveryOccasion =
  dynamic<VehicleForEveryOccasionProps>(() =>
    import("./home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
  );
const MumbaiVehicleForEveryOccasion =
  dynamic<VehicleForEveryOccasionProps>(() =>
    import("./home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
  );
const PuneVehicleForEveryOccasion =
  dynamic<VehicleForEveryOccasionProps>(() =>
    import("./home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
  );
const DefaultVehicleForEveryOccasion =
  dynamic<VehicleForEveryOccasionProps>(() =>
    import("./home/vehicleforeveryoccasion/DefaultVehicleForEveryOccasion")
  );

export default function VehicleForEveryOccasionSelector({
  content,
}: VehicleForEveryOccasionProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<VehicleForEveryOccasionProps>
  > = {
    delhi: DelhiVehicleForEveryOccasion,
    gurugram: GurugramVehicleForEveryOccasion,
    mumbai: MumbaiVehicleForEveryOccasion,
    pune: PuneVehicleForEveryOccasion,
  };

  const Component = isGlobalRoute
    ? DefaultVehicleForEveryOccasion
    : map[pathSegments[0]] ||
      map[selectedLocation || ""] ||
      DefaultVehicleForEveryOccasion;

  if (!Component) return null;

  return <Component content={content} />;
}