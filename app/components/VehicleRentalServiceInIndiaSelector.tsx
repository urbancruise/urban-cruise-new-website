// app/components/VehicleRentalServiceInIndiaSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DelhiVehicleRentalServiceInIndia = dynamic(() =>
  import("./home/vehiclerentalserviceinindia/DelhiVehicleRentalServiceInIndia")
);
const GurugramVehicleRentalServiceInIndia = dynamic(() =>
  import("./home/vehiclerentalserviceinindia/GurugramVehicleRentalServiceInIndia")
);
const MumbaiVehicleRentalServiceInIndia = dynamic(() =>
  import("./home/vehiclerentalserviceinindia/MumbaiVehicleRentalServiceInIndia")
);
const PuneVehicleRentalServiceInIndia = dynamic(() =>
  import("./home/vehiclerentalserviceinindia/PuneVehicleRentalServiceInIndia")
);
const DefaultVehicleRentalServiceInIndia = dynamic(() =>
  import("./home/vehiclerentalserviceinindia/DefaultVehicleRentalServiceInIndia")
);

export interface ServiceCityItem {
  name: string;
  state: string;
  image: string;
}

export interface VehicleRentalServiceContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  cities?: ServiceCityItem[];
}

interface Props {
  content?: VehicleRentalServiceContent;
}

export default function VehicleRentalServiceInIndiaSelector({
  content,
}: Props) {
  const { selectedLocation } = useLocation();
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];
  const isGlobalRoute = pathSegments.length === 0;

  const map: Record<
    string,
    React.ComponentType<{ content?: VehicleRentalServiceContent }>
  > = {
    delhi: DelhiVehicleRentalServiceInIndia as any,
    gurugram: GurugramVehicleRentalServiceInIndia as any,
    mumbai: MumbaiVehicleRentalServiceInIndia as any,
    pune: PuneVehicleRentalServiceInIndia as any,
  };

  const Component = isGlobalRoute
    ? (DefaultVehicleRentalServiceInIndia as any)
    : map[selectedLocation || ""] ||
      (DefaultVehicleRentalServiceInIndia as any);

  if (!Component) return null;

  return <Component content={content} />;
}