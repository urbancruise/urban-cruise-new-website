// app/components/VehicleForEveryOccasionSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiVehicleForEveryOccasion = dynamic(() =>
  import("./home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
);
const GurugramVehicleForEveryOccasion = dynamic(() =>
  import("./home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
);
const MumbaiVehicleForEveryOccasion = dynamic(() =>
  import("./home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
);
const PuneVehicleForEveryOccasion = dynamic(() =>
  import("./home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
);
const DefaultVehicleForEveryOccasion = dynamic(() =>
  import("./home/vehicleforeveryoccasion/DefaultVehicleForEveryOccasion")
);

export interface OccasionCard {
  title: string;
  highlight: string;
  description: string;
  seats: string;
  price: string;
  location: string;
  image: string;
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

interface Props {
  content?: VehicleEveryOccasionContent;
}

export default function VehicleForEveryOccasionSelector({ content }: Props) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: VehicleEveryOccasionContent }>
  > = {
    delhi: DelhiVehicleForEveryOccasion as any,
    gurugram: GurugramVehicleForEveryOccasion as any,
    mumbai: MumbaiVehicleForEveryOccasion as any,
    pune: PuneVehicleForEveryOccasion as any,
  };

  const Component = isGlobalRoute
    ? (DefaultVehicleForEveryOccasion as any)
    : map[selectedLocation || ""] || (DefaultVehicleForEveryOccasion as any);

  if (!Component) return null;

  return <Component content={content} />;
}