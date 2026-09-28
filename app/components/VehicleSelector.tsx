// ============================================================
// VehicleSelector — Location-aware vehicle page dispatcher.
// Passes CMS content (meta + sections) to the correct city
// component. Falls back to static components when empty.
// ============================================================
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLocation } from "@/app/context/LocationContext";

// ======================================================
// LAZY LOAD — CARS & SUVs
// ======================================================
const DelhiCarSuvsPage = dynamic(() => import("./vehicles/DelhiCarSuvsPage"));
const GurugramCarSuvsPage = dynamic(() => import("./vehicles/GurugramCarSuvsPage"));
const MumbaiCarSuvsPage = dynamic(() => import("./vehicles/MumbaiCarSuvsPage"));
const PuneCarSuvsPage = dynamic(() => import("./vehicles/PuneCarSuvsPage"));

// ======================================================
// LAZY LOAD — ERTIGA
// ======================================================
const DelhiErtigaPage = dynamic(() => import("./vehicles/DelhiErtigaPage"));
const GurugramErtigaPage = dynamic(() => import("./vehicles/GurugramErtigaPage"));
const MumbaiErtigaPage = dynamic(() => import("./vehicles/MumbaiErtigaPage"));
const PuneErtigaPage = dynamic(() => import("./vehicles/PuneErtigaPage"));

// ======================================================
// LAZY LOAD — INNOVA CRYSTA
// ======================================================
const DelhiInnovaCrystaPage = dynamic(() => import("./vehicles/DelhiInnovaCrystaPage"));
const GurugramInnovaCrystaPage = dynamic(() => import("./vehicles/GurugramInnovaCrystaPage"));
const MumbaiInnovaCrystaPage = dynamic(() => import("./vehicles/MumbaiInnovaCrystaPage"));
const PuneInnovaCrystaPage = dynamic(() => import("./vehicles/PuneInnovaCrystaPage"));

// ======================================================
// LAZY LOAD — INNOVA HYCCROSS
// ======================================================
const DelhiHycrossPage = dynamic(() => import("./vehicles/DelhiHycrossPage"));
const GurugramHycrossPage = dynamic(() => import("./vehicles/GurugramHycrossPage"));
const MumbaiHycrossPage = dynamic(() => import("./vehicles/MumbaiHycrossPage"));
const PuneHycrossPage = dynamic(() => import("./vehicles/PuneHycrossPage"));

// ======================================================
// LAZY LOAD — LUXURY CARS & SUVs
// ======================================================
const DelhiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/DelhiLuxuryCarsSuvsPage"));
const GurugramLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/GurugramLuxuryCarsSuvsPage"));
const MumbaiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/MumbaiLuxuryCarsSuvsPage"));
const PuneLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/PuneLuxuryCarsSuvsPage"));

// ======================================================
// LAZY LOAD — MERCEDES SPRINTER
// ======================================================
const DelhiMercedesSprinterPage = dynamic(() => import("./vehicles/DelhiMercedesSprinterPage"));
const GurugramMercedesSprinterPage = dynamic(() => import("./vehicles/GurugramMercedesSprinterPage"));
const MumbaiMercedesSprinterPage = dynamic(() => import("./vehicles/MumbaiMercedesSprinterPage"));
const PuneMercedesSprinterPage = dynamic(() => import("./vehicles/PuneMercedesSprinterPage"));

// ======================================================
// LAZY LOAD — LUXURY VANS
// ======================================================
const DelhiLuxuryVansPage = dynamic(() => import("./vehicles/DelhiLuxuryVansPage"));
const GurugramLuxuryVansPage = dynamic(() => import("./vehicles/GurugramLuxuryVansPage"));
const MumbaiLuxuryVansPage = dynamic(() => import("./vehicles/MumbaiLuxuryVansPage"));
const PuneLuxuryVansPage = dynamic(() => import("./vehicles/PuneLuxuryVansPage"));

// ======================================================
// LAZY LOAD — TEMPO TRAVELLER
// ======================================================
const DelhiTempoTravellerPage = dynamic(() => import("./vehicles/DelhiTempoTravellerPage"));
const GurugramTempoTravellerPage = dynamic(() => import("./vehicles/GurugramTempoTravellerPage"));
const MumbaiTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiTempoTravellerPage"));
const PuneTempoTravellerPage = dynamic(() => import("./vehicles/PuneTempoTravellerPage"));

// ======================================================
// LAZY LOAD — MAHARAJA TEMPO TRAVELLER
// ======================================================
const DelhiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/DelhiMaharajaTempoTravellerPage"));
const GurugramMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/GurugramMaharajaTempoTravellerPage"));
const MumbaiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiMaharajaTempoTravellerPage"));
const PuneMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/PuneMaharajaTempoTravellerPage"));

// ======================================================
// LAZY LOAD — URBANIA
// ======================================================
const DelhiUrbaniaPage = dynamic(() => import("./vehicles/DelhiUrbaniaPage"));
const GurugramUrbaniaPage = dynamic(() => import("./vehicles/GurugramUrbaniaPage"));
const MumbaiUrbaniaPage = dynamic(() => import("./vehicles/MumbaiUrbaniaPage"));
const PuneUrbaniaPage = dynamic(() => import("./vehicles/PuneUrbaniaPage"));

// ======================================================
// LAZY LOAD — MINI BUS
// ======================================================
const DelhiMiniBusPage = dynamic(() => import("./vehicles/DelhiMiniBusPage"));
const GurugramMiniBusPage = dynamic(() => import("./vehicles/GurugramMiniBusPage"));
const MumbaiMiniBusPage = dynamic(() => import("./vehicles/MumbaiMiniBusPage"));
const PuneMiniBusPage = dynamic(() => import("./vehicles/PuneMiniBusPage"));

// ======================================================
// LAZY LOAD — LUXURY BUS
// ======================================================
const DelhiLuxuryBusPage = dynamic(() => import("./vehicles/DelhiLuxuryBusPage"));
const GurugramLuxuryBusPage = dynamic(() => import("./vehicles/GurugramLuxuryBusPage"));
const MumbaiLuxuryBusPage = dynamic(() => import("./vehicles/MumbaiLuxuryBusPage"));
const PuneLuxuryBusPage = dynamic(() => import("./vehicles/PuneLuxuryBusPage"));

// ======================================================
// LAZY LOAD — VOLVO BUS
// ======================================================
const DelhiVolvoBusPage = dynamic(() => import("./vehicles/DelhiVolvoBusPage"));
const GurugramVolvoBusPage = dynamic(() => import("./vehicles/GurugramVolvoBusPage"));
const MumbaiVolvoBusPage = dynamic(() => import("./vehicles/MumbaiVolvoBusPage"));
const PuneVolvoBusPage = dynamic(() => import("./vehicles/PuneVolvoBusPage"));

// ======================================================
// LAZY LOAD — BHARAT BENZ BUS
// ======================================================
const DelhiBharatBenzBusPage = dynamic(() => import("./vehicles/DelhiBharatBenzBusPage"));
const GurugramBharatBenzBusPage = dynamic(() => import("./vehicles/GurugramBharatBenzBusPage"));
const MumbaiBharatBenzBusPage = dynamic(() => import("./vehicles/MumbaiBharatBenzBusPage"));
const PuneBharatBenzBusPage = dynamic(() => import("./vehicles/PuneBharatBenzBusPage"));

// ======================================================
// LAZY LOAD — BUS WITH WASHROOM
// ======================================================
const DelhiBusWithWashroomPage = dynamic(() => import("./vehicles/DelhiBusWithWashroomPage"));
const GurugramBusWithWashroomPage = dynamic(() => import("./vehicles/GurugramBusWithWashroomPage"));
const MumbaiBusWithWashroomPage = dynamic(() => import("./vehicles/MumbaiBusWithWashroomPage"));
const PuneBusWithWashroomPage = dynamic(() => import("./vehicles/PuneBusWithWashroomPage"));

// ======================================================
// LAZY LOAD — SLEEPER BUS
// ======================================================
const DelhiSleeperBusPage = dynamic(() => import("./vehicles/DelhiSleeperBusPage"));
const GurugramSleeperBusPage = dynamic(() => import("./vehicles/GurugramSleeperBusPage"));
const MumbaiSleeperBusPage = dynamic(() => import("./vehicles/MumbaiSleeperBusPage"));
const PuneSleeperBusPage = dynamic(() => import("./vehicles/PuneSleeperBusPage"));

// ======================================================
// TYPES
// ======================================================
export interface VehicleSelectorProps {
  vehicleType: string;
  /** Optional CMS overrides for the vehicle hero/meta block */
  cmsMeta?: Record<string, any> | null;
  /** Optional CMS overrides for content sections */
  cmsSections?: Record<string, any> | null;
}

// ======================================================
// FALLBACK COMPONENT
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
  Record<string, React.ComponentType<any>>
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

  // Forward CMS props to the underlying page component.
  // Page components that don't accept them simply ignore them.
  return (
    <VehicleComponent
      cmsMeta={cmsMeta ?? null}
      cmsSections={cmsSections ?? null}
    />
  );
}
