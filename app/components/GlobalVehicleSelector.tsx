"use client";

import dynamic from "next/dynamic";

const vehiclePages = {
  "car-suvs": dynamic(() => import("./vehicles/DelhiCarSuvsPage")),
  ertiga: dynamic(() => import("./vehicles/DelhiErtigaPage")),
  "innova-crysta": dynamic(() => import("./vehicles/DelhiInnovaCrystaPage")),
  hycross: dynamic(() => import("./vehicles/DelhiHycrossPage")),
  "luxury-cars-suvs": dynamic(() => import("./vehicles/DelhiLuxuryCarsSuvsPage")),
  "mercedes-sprinter": dynamic(() => import("./vehicles/DelhiMercedesSprinterPage")),
  "luxury-vans": dynamic(() => import("./vehicles/DelhiLuxuryVansPage")),
  "tempo-traveller": dynamic(() => import("./vehicles/DelhiTempoTravellerPage")),
  "maharaja-tempo-traveller": dynamic(
    () => import("./vehicles/DelhiMaharajaTempoTravellerPage"),
  ),
  urbania: dynamic(() => import("./vehicles/DelhiUrbaniaPage")),
  "mini-bus": dynamic(() => import("./vehicles/DelhiMiniBusPage")),
  "luxury-bus": dynamic(() => import("./vehicles/DelhiLuxuryBusPage")),
  "volvo-bus": dynamic(() => import("./vehicles/DelhiVolvoBusPage")),
  "bharat-benz-bus": dynamic(() => import("./vehicles/DelhiBharatBenzBusPage")),
  "bus-with-washroom": dynamic(
    () => import("./vehicles/DelhiBusWithWashroomPage"),
  ),
  "sleeper-bus": dynamic(() => import("./vehicles/DelhiSleeperBusPage")),
} as const;

export type GlobalVehicleSlug = keyof typeof vehiclePages;

export default function GlobalVehicleSelector({
  vehicle,
}: {
  vehicle: GlobalVehicleSlug;
}) {
  const VehiclePage = vehiclePages[vehicle];
  return <VehiclePage />;
}
