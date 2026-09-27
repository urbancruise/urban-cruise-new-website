// // app/components/VehicleForEveryOccasionSelector.tsx
// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import { useLocation } from "@/app/context/LocationContext";

// // LAZY LOAD VEHICLE FOR EVERY OCCASION COMPONENTS
// const DelhiVehicleForEveryOccasion = dynamic(
//   () => import("./home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
// );

// // Future components — enable when ready
// const GurugramVehicleForEveryOccasion = dynamic(
//   () => import("./home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
// );

// const MumbaiVehicleForEveryOccasion = dynamic(
//   () => import("./home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
// );

// const PuneVehicleForEveryOccasion = dynamic(
//   () => import("./home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
// );

// export default function VehicleForEveryOccasionSelector() {
//   const { location } = useLocation();

//   // LOCATION → COMPONENT MAPPING
//   // Only add locations that have defined components
//   const vehicleForEveryOccasionMap: Record<string, React.ComponentType> = {
//     delhi: DelhiVehicleForEveryOccasion,
//     gurugram: GurugramVehicleForEveryOccasion,
//     mumbai: MumbaiVehicleForEveryOccasion,
//     pune: PuneVehicleForEveryOccasion,
//   };

//   // SELECT COMPONENT
//   const VehicleForEveryOccasionComponent = vehicleForEveryOccasionMap[location];

//   // RENDER - Return null if no component exists for this location
//   if (!VehicleForEveryOccasionComponent) {
//     return null;
//   }

//   return <VehicleForEveryOccasionComponent />;
// }

// ============================================================
// Location-aware selector for "Vehicle For Every Occasion"
// Passes CMS content (optional) to the correct city component.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD COMPONENTS
// ======================================================

const DelhiVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/DelhiVehicleForEveryOccasion")
);

const GurugramVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/GurugramVehicleForEveryOccasion")
);

const MumbaiVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/MumbaiVehicleForEveryOccasion")
);

const PuneVehicleForEveryOccasion = dynamic(
  () => import("./home/vehicleforeveryoccasion/PuneVehicleForEveryOccasion")
);

// ======================================================
// TYPES
// ======================================================

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
  /** Icon key — one of "wedding" | "corporate" | "vacation" | "local" | "pilgrimage" | "custom" */
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

// ======================================================
// COMPONENT
// ======================================================

export default function VehicleForEveryOccasionSelector({
  content,
}: VehicleForEveryOccasionProps) {
  const { location } = useLocation();

  const map: Record<
    string,
    React.ComponentType<VehicleForEveryOccasionProps>
  > = {
    delhi: DelhiVehicleForEveryOccasion,
    gurugram: GurugramVehicleForEveryOccasion,
    mumbai: MumbaiVehicleForEveryOccasion,
    pune: PuneVehicleForEveryOccasion,
  };

  const Component = map[location];

  if (!Component) {
    return null;
  }

  return <Component content={content} />;
}
