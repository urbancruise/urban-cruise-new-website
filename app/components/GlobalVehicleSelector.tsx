"use client";

import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";
import {
  ServicesInCitiesContext,
} from "@/app/components/vehicles/ServicesInVariousCities";

const vehiclePages = {
  "car-suvs": dynamic(() => import("./vehicles/DelhiCarSuvsPage"), { loading: SectionSkeleton }),
  ertiga: dynamic(() => import("./vehicles/DelhiErtigaPage"), { loading: SectionSkeleton }),
  "innova-crysta": dynamic(() => import("./vehicles/DelhiInnovaCrystaPage"), { loading: SectionSkeleton }),
  hycross: dynamic(() => import("./vehicles/DelhiHycrossPage"), { loading: SectionSkeleton }),
  "luxury-cars-suvs": dynamic(() => import("./vehicles/DelhiLuxuryCarsSuvsPage"), { loading: SectionSkeleton }),
  "mercedes-sprinter": dynamic(() => import("./vehicles/DelhiMercedesSprinterPage"), { loading: SectionSkeleton }),
  "luxury-vans": dynamic(() => import("./vehicles/DelhiLuxuryVansPage"), { loading: SectionSkeleton }),
  "tempo-traveller": dynamic(() => import("./vehicles/DelhiTempoTravellerPage"), { loading: SectionSkeleton }),
  "maharaja-tempo-traveller": dynamic(
    () => import("./vehicles/DelhiMaharajaTempoTravellerPage"), { loading: SectionSkeleton },
  ),
  urbania: dynamic(() => import("./vehicles/DelhiUrbaniaPage"), { loading: SectionSkeleton }),
  "mini-bus": dynamic(() => import("./vehicles/DelhiMiniBusPage"), { loading: SectionSkeleton }),
  "luxury-bus": dynamic(() => import("./vehicles/DelhiLuxuryBusPage"), { loading: SectionSkeleton }),
  "volvo-bus": dynamic(() => import("./vehicles/DelhiVolvoBusPage"), { loading: SectionSkeleton }),
  "bharat-benz-bus": dynamic(() => import("./vehicles/DelhiBharatBenzBusPage"), { loading: SectionSkeleton }),
  "bus-with-washroom": dynamic(
    () => import("./vehicles/DelhiBusWithWashroomPage"), { loading: SectionSkeleton },
  ),
  "sleeper-bus": dynamic(() => import("./vehicles/DelhiSleeperBusPage"), { loading: SectionSkeleton }),
} as const;

export type GlobalVehicleSlug = keyof typeof vehiclePages;

export default function GlobalVehicleSelector({
  vehicle,
  cmsMeta,
  cmsSections,
}: {
  vehicle: GlobalVehicleSlug;
  cmsMeta?: Record<string, unknown> | null;
  cmsSections?: Record<string, unknown> | null;
}) {
  const VehiclePage = vehiclePages[vehicle];
  return (
    <ServicesInCitiesContext.Provider
      value={{
        content: cmsSections?.servicesincities,
        vehicleType: vehicle,
      }}
    >
      <VehiclePage cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </ServicesInCitiesContext.Provider>
  );
}
