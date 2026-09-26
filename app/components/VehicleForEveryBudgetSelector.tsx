// // app/components/VehicleForEveryBudgetSelector.tsx
// "use client";

// import React from "react";
// import dynamic from "next/dynamic";
// import { useLocation } from "@/app/context/LocationContext";

// // LAZY LOAD VEHICLE FOR EVERY BUDGET COMPONENTS

// const DelhiVehicleForEveryBudget = dynamic(
//   () => import("./home/vehicleforeverybudget/DelhiVehicleForEveryBudget")
// );

// // Future components — enable when ready
// const GurugramVehicleForEveryBudget = dynamic(
//   () => import("./home/vehicleforeverybudget/GurugramVehicleForEveryBudget")
// );

// const MumbaiVehicleForEveryBudget = dynamic(
//   () => import("./home/vehicleforeverybudget/MumbaiVehicleForEveryBudget")
// );

// const PuneVehicleForEveryBudget = dynamic(
//   () => import("./home/vehicleforeverybudget/PuneVehicleForEveryBudget")
// );

// export default function VehicleForEveryBudgetSelector() {
//   const { location } = useLocation();

//   // LOCATION → COMPONENT MAPPING
//   // Only add locations that have defined components
//   const vehicleForEveryBudgetMap: Record<string, React.ComponentType> = {
//     delhi: DelhiVehicleForEveryBudget,
//     gurugram: GurugramVehicleForEveryBudget,
//     mumbai: MumbaiVehicleForEveryBudget,
//     pune: PuneVehicleForEveryBudget,
//   };

//   // SELECT COMPONENT
//   // If current location is not in map, component will be undefined
//   // and section won't render
//   const VehicleForEveryBudgetComponent = vehicleForEveryBudgetMap[location];

//   // RENDER
//   if (!VehicleForEveryBudgetComponent) {
//     return null;
//   }

//   return <VehicleForEveryBudgetComponent />;
// }

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ============================================================
// Lazy load VehicleForEveryBudget components
// ============================================================
const DelhiVehicleForEveryBudget = dynamic(
  () => import("./home/vehicleforeverybudget/DelhiVehicleForEveryBudget")
);
const GurugramVehicleForEveryBudget = dynamic(
  () => import("./home/vehicleforeverybudget/GurugramVehicleForEveryBudget")
);
const MumbaiVehicleForEveryBudget = dynamic(
  () => import("./home/vehicleforeverybudget/MumbaiVehicleForEveryBudget")
);
const PuneVehicleForEveryBudget = dynamic(
  () => import("./home/vehicleforeverybudget/PuneVehicleForEveryBudget")
);

// ============================================================
// CMS content shape (all optional — falls back to defaults)
// ============================================================
export interface BudgetContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  illustration?: string;
  categories?: Array<{
    title?: string;
    description?: string;
    icon?: string;
    color?: string;
  }>;
  trustBadges?: Array<{
    label?: string;
    label2?: string;
    icon?: string;
  }>;
}

interface Props {
  content?: BudgetContent | null;
}

// ============================================================
// SELECTOR
// ============================================================
export default function VehicleForEveryBudgetSelector({ content }: Props) {
  const { location } = useLocation();

  const map: Record<
    string,
    React.ComponentType<{ content?: BudgetContent | null }>
  > = {
    delhi: DelhiVehicleForEveryBudget,
    gurugram: GurugramVehicleForEveryBudget,
    mumbai: MumbaiVehicleForEveryBudget,
    pune: PuneVehicleForEveryBudget,
  };

  const Component = map[location];
  if (!Component) return null;

  return <Component content={content} />;
}
