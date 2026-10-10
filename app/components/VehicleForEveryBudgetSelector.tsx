// app/components/VehicleForEveryBudgetSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiVehicleForEveryBudget = dynamic(() =>
  import("./home/vehicleforeverybudget/DelhiVehicleForEveryBudget")
);
const GurugramVehicleForEveryBudget = dynamic(() =>
  import("./home/vehicleforeverybudget/GurugramVehicleForEveryBudget")
);
const MumbaiVehicleForEveryBudget = dynamic(() =>
  import("./home/vehicleforeverybudget/MumbaiVehicleForEveryBudget")
);
const PuneVehicleForEveryBudget = dynamic(() =>
  import("./home/vehicleforeverybudget/PuneVehicleForEveryBudget")
);
const DefaultVehicleForEveryBudget = dynamic(() =>
  import("./home/vehicleforeverybudget/DefaultVehicleForEveryBudget")
);

export interface BudgetContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  illustration?: string;
  illustrationAlt?: string;
  illustrationPublicId?: string;
  categories?: Array<{
    title?: string;
    description?: string;
    icon?: string;
    iconAlt?: string;
    color?: string;
  }>;
  trustBadges?: Array<{
    label?: string;
    label2?: string;
    icon?: string;
  }>;
}

export interface VehicleForEveryBudgetProps {
  content?: BudgetContent | null;
}

export default function VehicleForEveryBudgetSelector({
  content,
}: VehicleForEveryBudgetProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: BudgetContent | null }>
  > = {
    delhi: DelhiVehicleForEveryBudget as any,
    gurugram: GurugramVehicleForEveryBudget as any,
    mumbai: MumbaiVehicleForEveryBudget as any,
    pune: PuneVehicleForEveryBudget as any,
  };

  const Component = isGlobalRoute
    ? (DefaultVehicleForEveryBudget as any)
    : map[selectedLocation || ""] || (DefaultVehicleForEveryBudget as any);

  if (!Component) return null;

  return <Component content={content} />;
}