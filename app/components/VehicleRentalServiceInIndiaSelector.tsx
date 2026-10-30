// app/components/VehicleRentalServiceInIndiaSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export interface ServiceCityItem {
  name: string;
  state: string;
  image: string;
  imageAlt?: string;
}

export interface VehicleRentalServiceContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  cities?: ServiceCityItem[];
}

export interface VehicleRentalServiceProps {
  content?: VehicleRentalServiceContent;
}

const DelhiVehicleRentalServiceInIndia =
  dynamic<VehicleRentalServiceProps>(() =>
    import("./home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia")
  );
const DefaultVehicleRentalServiceInIndia =
  dynamic<VehicleRentalServiceProps>(() =>
    import("./home/vehiclerentalserviceinindia/DefaultVehicleRentalServiceInIndia")
  );

export default function VehicleRentalServiceInIndiaSelector({
  content,
}: VehicleRentalServiceProps) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<VehicleRentalServiceProps>
  > = {
    delhi: DelhiVehicleRentalServiceInIndia,
    gurugram: DelhiVehicleRentalServiceInIndia,
    mumbai: DelhiVehicleRentalServiceInIndia,
    pune: DelhiVehicleRentalServiceInIndia,
  };

  const Component = isGlobalRoute
    ? DefaultVehicleRentalServiceInIndia
    : map[selectedLocation || ""] ||
      DefaultVehicleRentalServiceInIndia;

  if (!Component) return null;

  return <Component content={content} />;
}