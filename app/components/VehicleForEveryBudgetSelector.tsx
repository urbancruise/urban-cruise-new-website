// app/components/VehicleForEveryBudgetSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

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

const DelhiVehicleForEveryBudget =
  dynamic<VehicleForEveryBudgetProps>(() =>
    import("./home/vehicleforeverybudget/DelhiVehicleForEveryBudget")
  );
const DefaultVehicleForEveryBudget =
  dynamic<VehicleForEveryBudgetProps>(() =>
    import("./home/vehicleforeverybudget/DefaultVehicleForEveryBudget")
  );

export default function VehicleForEveryBudgetSelector({
  content,
}: VehicleForEveryBudgetProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<VehicleForEveryBudgetProps>
  > = {
    delhi: DelhiVehicleForEveryBudget,
    gurugram: DelhiVehicleForEveryBudget,
    mumbai: DelhiVehicleForEveryBudget,
    pune: DelhiVehicleForEveryBudget,
  };

  const Component = isGlobalRoute
    ? DefaultVehicleForEveryBudget
    : map[selectedLocation || ""] || DefaultVehicleForEveryBudget;

  if (!Component) return null;

  return <Component content={content} />;
}