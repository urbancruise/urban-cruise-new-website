// ============================================================
// VehicleSelector — Location-aware vehicle page dispatcher.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";
import { useLocation } from "@/app/context/LocationContext";
import {
  ServicesInCitiesContext,
} from "@/app/components/vehicles/ServicesInVariousCities";

// ======================================================
// LAZY LOAD — CARS & SUVs
// ======================================================
const DelhiCarSuvsPage = dynamic(() => import("./vehicles/DelhiCarSuvsPage"), { loading: SectionSkeleton });
const GurugramCarSuvsPage = dynamic(() => import("./vehicles/GurugramCarSuvsPage"), { loading: SectionSkeleton });
const MumbaiCarSuvsPage = dynamic(() => import("./vehicles/MumbaiCarSuvsPage"), { loading: SectionSkeleton });
const PuneCarSuvsPage = dynamic(() => import("./vehicles/PuneCarSuvsPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — ERTIGA
// ======================================================
const DelhiErtigaPage = dynamic(() => import("./vehicles/DelhiErtigaPage"), { loading: SectionSkeleton });
const GurugramErtigaPage = dynamic(() => import("./vehicles/GurugramErtigaPage"), { loading: SectionSkeleton });
const MumbaiErtigaPage = dynamic(() => import("./vehicles/MumbaiErtigaPage"), { loading: SectionSkeleton });
const PuneErtigaPage = dynamic(() => import("./vehicles/PuneErtigaPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — INNOVA CRYSTA
// ======================================================
const DelhiInnovaCrystaPage = dynamic(() => import("./vehicles/DelhiInnovaCrystaPage"), { loading: SectionSkeleton });
const GurugramInnovaCrystaPage = dynamic(() => import("./vehicles/GurugramInnovaCrystaPage"), { loading: SectionSkeleton });
const MumbaiInnovaCrystaPage = dynamic(() => import("./vehicles/MumbaiInnovaCrystaPage"), { loading: SectionSkeleton });
const PuneInnovaCrystaPage = dynamic(() => import("./vehicles/PuneInnovaCrystaPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — INNOVA HYCCROSS
// ======================================================
const DelhiHycrossPage = dynamic(() => import("./vehicles/DelhiHycrossPage"), { loading: SectionSkeleton });
const GurugramHycrossPage = dynamic(() => import("./vehicles/GurugramHycrossPage"), { loading: SectionSkeleton });
const MumbaiHycrossPage = dynamic(() => import("./vehicles/MumbaiHycrossPage"), { loading: SectionSkeleton });
const PuneHycrossPage = dynamic(() => import("./vehicles/PuneHycrossPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — LUXURY CARS & SUVs
// ======================================================
const DelhiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/DelhiLuxuryCarsSuvsPage"), { loading: SectionSkeleton });
const GurugramLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/GurugramLuxuryCarsSuvsPage"), { loading: SectionSkeleton });
const MumbaiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/MumbaiLuxuryCarsSuvsPage"), { loading: SectionSkeleton });
const PuneLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/PuneLuxuryCarsSuvsPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — MERCEDES SPRINTER
// ======================================================
const DelhiMercedesSprinterPage = dynamic(() => import("./vehicles/DelhiMercedesSprinterPage"), { loading: SectionSkeleton });
const GurugramMercedesSprinterPage = dynamic(() => import("./vehicles/GurugramMercedesSprinterPage"), { loading: SectionSkeleton });
const MumbaiMercedesSprinterPage = dynamic(() => import("./vehicles/MumbaiMercedesSprinterPage"), { loading: SectionSkeleton });
const PuneMercedesSprinterPage = dynamic(() => import("./vehicles/PuneMercedesSprinterPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — LUXURY VANS
// ======================================================
const DelhiLuxuryVansPage = dynamic(() => import("./vehicles/DelhiLuxuryVansPage"), { loading: SectionSkeleton });
const GurugramLuxuryVansPage = dynamic(() => import("./vehicles/GurugramLuxuryVansPage"), { loading: SectionSkeleton });
const MumbaiLuxuryVansPage = dynamic(() => import("./vehicles/MumbaiLuxuryVansPage"), { loading: SectionSkeleton });
const PuneLuxuryVansPage = dynamic(() => import("./vehicles/PuneLuxuryVansPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — TEMPO TRAVELLER
// ======================================================
const DelhiTempoTravellerPage = dynamic(() => import("./vehicles/DelhiTempoTravellerPage"), { loading: SectionSkeleton });
const GurugramTempoTravellerPage = dynamic(() => import("./vehicles/GurugramTempoTravellerPage"), { loading: SectionSkeleton });
const MumbaiTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiTempoTravellerPage"), { loading: SectionSkeleton });
const PuneTempoTravellerPage = dynamic(() => import("./vehicles/PuneTempoTravellerPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — MAHARAJA TEMPO TRAVELLER
// ======================================================
const DelhiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/DelhiMaharajaTempoTravellerPage"), { loading: SectionSkeleton });
const GurugramMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/GurugramMaharajaTempoTravellerPage"), { loading: SectionSkeleton });
const MumbaiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiMaharajaTempoTravellerPage"), { loading: SectionSkeleton });
const PuneMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/PuneMaharajaTempoTravellerPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — URBANIA
// ======================================================
const DelhiUrbaniaPage = dynamic(() => import("./vehicles/DelhiUrbaniaPage"), { loading: SectionSkeleton });
const GurugramUrbaniaPage = dynamic(() => import("./vehicles/GurugramUrbaniaPage"), { loading: SectionSkeleton });
const MumbaiUrbaniaPage = dynamic(() => import("./vehicles/MumbaiUrbaniaPage"), { loading: SectionSkeleton });
const PuneUrbaniaPage = dynamic(() => import("./vehicles/PuneUrbaniaPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — MINI BUS
// ======================================================
const DelhiMiniBusPage = dynamic(() => import("./vehicles/DelhiMiniBusPage"), { loading: SectionSkeleton });
const GurugramMiniBusPage = dynamic(() => import("./vehicles/GurugramMiniBusPage"), { loading: SectionSkeleton });
const MumbaiMiniBusPage = dynamic(() => import("./vehicles/MumbaiMiniBusPage"), { loading: SectionSkeleton });
const PuneMiniBusPage = dynamic(() => import("./vehicles/PuneMiniBusPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — LUXURY BUS
// ======================================================
const DelhiLuxuryBusPage = dynamic(() => import("./vehicles/DelhiLuxuryBusPage"), { loading: SectionSkeleton });
const GurugramLuxuryBusPage = dynamic(() => import("./vehicles/GurugramLuxuryBusPage"), { loading: SectionSkeleton });
const MumbaiLuxuryBusPage = dynamic(() => import("./vehicles/MumbaiLuxuryBusPage"), { loading: SectionSkeleton });
const PuneLuxuryBusPage = dynamic(() => import("./vehicles/PuneLuxuryBusPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — VOLVO BUS
// ======================================================
const DelhiVolvoBusPage = dynamic(() => import("./vehicles/DelhiVolvoBusPage"), { loading: SectionSkeleton });
const GurugramVolvoBusPage = dynamic(() => import("./vehicles/GurugramVolvoBusPage"), { loading: SectionSkeleton });
const MumbaiVolvoBusPage = dynamic(() => import("./vehicles/MumbaiVolvoBusPage"), { loading: SectionSkeleton });
const PuneVolvoBusPage = dynamic(() => import("./vehicles/PuneVolvoBusPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — BHARAT BENZ BUS
// ======================================================
const DelhiBharatBenzBusPage = dynamic(() => import("./vehicles/DelhiBharatBenzBusPage"), { loading: SectionSkeleton });
const GurugramBharatBenzBusPage = dynamic(() => import("./vehicles/GurugramBharatBenzBusPage"), { loading: SectionSkeleton });
const MumbaiBharatBenzBusPage = dynamic(() => import("./vehicles/MumbaiBharatBenzBusPage"), { loading: SectionSkeleton });
const PuneBharatBenzBusPage = dynamic(() => import("./vehicles/PuneBharatBenzBusPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — BUS WITH WASHROOM
// ======================================================
const DelhiBusWithWashroomPage = dynamic(() => import("./vehicles/DelhiBusWithWashroomPage"), { loading: SectionSkeleton });
const GurugramBusWithWashroomPage = dynamic(() => import("./vehicles/GurugramBusWithWashroomPage"), { loading: SectionSkeleton });
const MumbaiBusWithWashroomPage = dynamic(() => import("./vehicles/MumbaiBusWithWashroomPage"), { loading: SectionSkeleton });
const PuneBusWithWashroomPage = dynamic(() => import("./vehicles/PuneBusWithWashroomPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — SLEEPER BUS
// ======================================================
const DelhiSleeperBusPage = dynamic(() => import("./vehicles/DelhiSleeperBusPage"), { loading: SectionSkeleton });
const GurugramSleeperBusPage = dynamic(() => import("./vehicles/GurugramSleeperBusPage"), { loading: SectionSkeleton });
const MumbaiSleeperBusPage = dynamic(() => import("./vehicles/MumbaiSleeperBusPage"), { loading: SectionSkeleton });
const PuneSleeperBusPage = dynamic(() => import("./vehicles/PuneSleeperBusPage"), { loading: SectionSkeleton });

// ======================================================
// TYPES
// ======================================================
export interface VehicleSelectorProps {
  vehicleType: string;
  cmsMeta?: Record<string, unknown> | null;
  cmsSections?: Record<string, unknown> | null;
}

// ======================================================
// FALLBACK
// ======================================================
function VehicleComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">
        Vehicle page coming soon for this location.
      </p>
    </div>
  );
}

// ======================================================
// MAP
// ======================================================
const vehicleMap: Record<
  string,
  Record<
    string,
    React.ComponentType<{
      cmsMeta?: Record<string, unknown> | null;
      cmsSections?: Record<string, unknown> | null;
    }>
  >
> = {
  delhi: {
    "car-suvs": DelhiCarSuvsPage,
    ertiga: DelhiErtigaPage,
    "innova-crysta": DelhiInnovaCrystaPage,
    hycross: DelhiHycrossPage,
    "luxury-cars-suvs": DelhiLuxuryCarsSuvsPage,
    "mercedes-sprinter": DelhiMercedesSprinterPage,
    "luxury-vans": DelhiLuxuryVansPage,
    "tempo-traveller": DelhiTempoTravellerPage,
    "maharaja-tempo-traveller": DelhiMaharajaTempoTravellerPage,
    urbania: DelhiUrbaniaPage,
    "mini-bus": DelhiMiniBusPage,
    "luxury-bus": DelhiLuxuryBusPage,
    "volvo-bus": DelhiVolvoBusPage,
    "bharat-benz-bus": DelhiBharatBenzBusPage,
    "bus-with-washroom": DelhiBusWithWashroomPage,
    "sleeper-bus": DelhiSleeperBusPage,
  },
  gurugram: {
    "car-suvs": GurugramCarSuvsPage,
    ertiga: GurugramErtigaPage,
    "innova-crysta": GurugramInnovaCrystaPage,
    hycross: GurugramHycrossPage,
    "luxury-cars-suvs": GurugramLuxuryCarsSuvsPage,
    "mercedes-sprinter": GurugramMercedesSprinterPage,
    "luxury-vans": GurugramLuxuryVansPage,
    "tempo-traveller": GurugramTempoTravellerPage,
    "maharaja-tempo-traveller": GurugramMaharajaTempoTravellerPage,
    urbania: GurugramUrbaniaPage,
    "mini-bus": GurugramMiniBusPage,
    "luxury-bus": GurugramLuxuryBusPage,
    "volvo-bus": GurugramVolvoBusPage,
    "bharat-benz-bus": GurugramBharatBenzBusPage,
    "bus-with-washroom": GurugramBusWithWashroomPage,
    "sleeper-bus": GurugramSleeperBusPage,
  },
  mumbai: {
    "car-suvs": MumbaiCarSuvsPage,
    ertiga: MumbaiErtigaPage,
    "innova-crysta": MumbaiInnovaCrystaPage,
    hycross: MumbaiHycrossPage,
    "luxury-cars-suvs": MumbaiLuxuryCarsSuvsPage,
    "mercedes-sprinter": MumbaiMercedesSprinterPage,
    "luxury-vans": MumbaiLuxuryVansPage,
    "tempo-traveller": MumbaiTempoTravellerPage,
    "maharaja-tempo-traveller": MumbaiMaharajaTempoTravellerPage,
    urbania: MumbaiUrbaniaPage,
    "mini-bus": MumbaiMiniBusPage,
    "luxury-bus": MumbaiLuxuryBusPage,
    "volvo-bus": MumbaiVolvoBusPage,
    "bharat-benz-bus": MumbaiBharatBenzBusPage,
    "bus-with-washroom": MumbaiBusWithWashroomPage,
    "sleeper-bus": MumbaiSleeperBusPage,
  },
  pune: {
    "car-suvs": PuneCarSuvsPage,
    ertiga: PuneErtigaPage,
    "innova-crysta": PuneInnovaCrystaPage,
    hycross: PuneHycrossPage,
    "luxury-cars-suvs": PuneLuxuryCarsSuvsPage,
    "mercedes-sprinter": PuneMercedesSprinterPage,
    "luxury-vans": PuneLuxuryVansPage,
    "tempo-traveller": PuneTempoTravellerPage,
    "maharaja-tempo-traveller": PuneMaharajaTempoTravellerPage,
    urbania: PuneUrbaniaPage,
    "mini-bus": PuneMiniBusPage,
    "luxury-bus": PuneLuxuryBusPage,
    "volvo-bus": PuneVolvoBusPage,
    "bharat-benz-bus": PuneBharatBenzBusPage,
    "bus-with-washroom": PuneBusWithWashroomPage,
    "sleeper-bus": PuneSleeperBusPage,
  },
};

// ======================================================
// COMPONENT
// ======================================================
export default function VehicleSelector({
  vehicleType,
  cmsMeta,
  cmsSections,
}: VehicleSelectorProps) {
  const { location } = useLocation();

  const VehicleComponent =
    vehicleMap[location]?.[vehicleType] || VehicleComingSoon;

  // ✅ Forward CMS data to the page wrapper, which will
  //    pass it down to each section.
  return (
    <ServicesInCitiesContext.Provider
      value={{
        content: cmsSections?.servicesincities,
        vehicleType,
      }}
    >
      <VehicleComponent
        cmsMeta={cmsMeta ?? null}
        cmsSections={cmsSections ?? null}
      />
    </ServicesInCitiesContext.Provider>
  );
}