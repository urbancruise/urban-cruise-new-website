// // app/components/VehicleForEveryGroupSizeSelector.tsx
// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import { useLocation } from "@/app/context/LocationContext";

// // LAZY LOAD VEHICLE FOR EVERY GROUP SIZE COMPONENTS

// const DelhiVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/DelhiVehicleForEveryGroupSize")
// );

// // Future components — enable when ready
// const GurugramVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/GurugramVehicleForEveryGroupSize")
// );

// const MumbaiVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/MumbaiVehicleForEveryGroupSize")
// );

// const PuneVehicleForEveryGroupSize = dynamic(
//   () => import("./home/vehicleforeverygroupsize/PuneVehicleForEveryGroupSize")
// );

// export default function VehicleForEveryGroupSizeSelector() {
//   const { location } = useLocation();

//   // LOCATION → COMPONENT MAPPING
//   // Only add locations that have defined components
//   const vehicleForEveryGroupSizeMap: Record<string, React.ComponentType> = {
//     delhi: DelhiVehicleForEveryGroupSize,
//     gurugram: GurugramVehicleForEveryGroupSize,
//     mumbai: MumbaiVehicleForEveryGroupSize,
//     pune: PuneVehicleForEveryGroupSize,
//   };

//   // SELECT COMPONENT
//   // If current location is not in map, component will be undefined
//   // and section won't render
//   const VehicleForEveryGroupSizeComponent = vehicleForEveryGroupSizeMap[location];

//   // RENDER
//   if (!VehicleForEveryGroupSizeComponent) {
//     return null;
//   }

//   return <VehicleForEveryGroupSizeComponent />;
// }

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
