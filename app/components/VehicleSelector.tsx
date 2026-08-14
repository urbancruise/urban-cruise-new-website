// app/components/VehicleSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Car & SUVs
const DelhiCarSuvsPage = dynamic(() => import("./vehicles/DelhiCarSuvsPage"));
const GurugramCarSuvsPage = dynamic(() => import("./vehicles/GurugramCarSuvsPage"));
const MumbaiCarSuvsPage = dynamic(() => import("./vehicles/MumbaiCarSuvsPage"));
const PuneCarSuvsPage = dynamic(() => import("./vehicles/PuneCarSuvsPage"));

// Ertiga
const DelhiErtigaPage = dynamic(() => import("./vehicles/DelhiErtigaPage"));
const GurugramErtigaPage = dynamic(() => import("./vehicles/GurugramErtigaPage"));
const MumbaiErtigaPage = dynamic(() => import("./vehicles/MumbaiErtigaPage"));
const PuneErtigaPage = dynamic(() => import("./vehicles/PuneErtigaPage"));

// Innova Crysta
const DelhiInnovaCrystaPage = dynamic(() => import("./vehicles/DelhiInnovaCrystaPage"));
const GurugramInnovaCrystaPage = dynamic(() => import("./vehicles/GurugramInnovaCrystaPage"));
const MumbaiInnovaCrystaPage = dynamic(() => import("./vehicles/MumbaiInnovaCrystaPage"));
const PuneInnovaCrystaPage = dynamic(() => import("./vehicles/PuneInnovaCrystaPage"));

// Hycross
const DelhiHycrossPage = dynamic(() => import("./vehicles/DelhiHycrossPage"));
const GurugramHycrossPage = dynamic(() => import("./vehicles/GurugramHycrossPage"));
const MumbaiHycrossPage = dynamic(() => import("./vehicles/MumbaiHycrossPage"));
const PuneHycrossPage = dynamic(() => import("./vehicles/PuneHycrossPage"));

// Luxury Cars & SUVs
const DelhiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/DelhiLuxuryCarsSuvsPage"));
const GurugramLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/GurugramLuxuryCarsSuvsPage"));
const MumbaiLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/MumbaiLuxuryCarsSuvsPage"));
const PuneLuxuryCarsSuvsPage = dynamic(() => import("./vehicles/PuneLuxuryCarsSuvsPage"));

// Mercedes Sprinter
const DelhiMercedesSprinterPage = dynamic(() => import("./vehicles/DelhiMercedesSprinterPage"));
const GurugramMercedesSprinterPage = dynamic(() => import("./vehicles/GurugramMercedesSprinterPage"));
const MumbaiMercedesSprinterPage = dynamic(() => import("./vehicles/MumbaiMercedesSprinterPage"));
const PuneMercedesSprinterPage = dynamic(() => import("./vehicles/PuneMercedesSprinterPage"));

// Luxury Vans
const DelhiLuxuryVansPage = dynamic(() => import("./vehicles/DelhiLuxuryVansPage"));
const GurugramLuxuryVansPage = dynamic(() => import("./vehicles/GurugramLuxuryVansPage"));
const MumbaiLuxuryVansPage = dynamic(() => import("./vehicles/MumbaiLuxuryVansPage"));
const PuneLuxuryVansPage = dynamic(() => import("./vehicles/PuneLuxuryVansPage"));

// Tempo Traveller
const DelhiTempoTravellerPage = dynamic(() => import("./vehicles/DelhiTempoTravellerPage"));
const GurugramTempoTravellerPage = dynamic(() => import("./vehicles/GurugramTempoTravellerPage"));
const MumbaiTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiTempoTravellerPage"));
const PuneTempoTravellerPage = dynamic(() => import("./vehicles/PuneTempoTravellerPage"));

// Maharaja Tempo Traveller
const DelhiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/DelhiMaharajaTempoTravellerPage"));
const GurugramMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/GurugramMaharajaTempoTravellerPage"));
const MumbaiMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/MumbaiMaharajaTempoTravellerPage"));
const PuneMaharajaTempoTravellerPage = dynamic(() => import("./vehicles/PuneMaharajaTempoTravellerPage"));

// Urbania
const DelhiUrbaniaPage = dynamic(() => import("./vehicles/DelhiUrbaniaPage"));
const GurugramUrbaniaPage = dynamic(() => import("./vehicles/GurugramUrbaniaPage"));
const MumbaiUrbaniaPage = dynamic(() => import("./vehicles/MumbaiUrbaniaPage"));
const PuneUrbaniaPage = dynamic(() => import("./vehicles/PuneUrbaniaPage"));

// Mini Bus
const DelhiMiniBusPage = dynamic(() => import("./vehicles/DelhiMiniBusPage"));
const GurugramMiniBusPage = dynamic(() => import("./vehicles/GurugramMiniBusPage"));
const MumbaiMiniBusPage = dynamic(() => import("./vehicles/MumbaiMiniBusPage"));
const PuneMiniBusPage = dynamic(() => import("./vehicles/PuneMiniBusPage"));

// Luxury Bus
const DelhiLuxuryBusPage = dynamic(() => import("./vehicles/DelhiLuxuryBusPage"));
const GurugramLuxuryBusPage = dynamic(() => import("./vehicles/GurugramLuxuryBusPage"));
const MumbaiLuxuryBusPage = dynamic(() => import("./vehicles/MumbaiLuxuryBusPage"));
const PuneLuxuryBusPage = dynamic(() => import("./vehicles/PuneLuxuryBusPage"));

// Volvo Bus
const DelhiVolvoBusPage = dynamic(() => import("./vehicles/DelhiVolvoBusPage"));
const GurugramVolvoBusPage = dynamic(() => import("./vehicles/GurugramVolvoBusPage"));
const MumbaiVolvoBusPage = dynamic(() => import("./vehicles/MumbaiVolvoBusPage"));
const PuneVolvoBusPage = dynamic(() => import("./vehicles/PuneVolvoBusPage"));

// Bharat Benz Bus
const DelhiBharatBenzBusPage = dynamic(() => import("./vehicles/DelhiBharatBenzBusPage"));
const GurugramBharatBenzBusPage = dynamic(() => import("./vehicles/GurugramBharatBenzBusPage"));
const MumbaiBharatBenzBusPage = dynamic(() => import("./vehicles/MumbaiBharatBenzBusPage"));
const PuneBharatBenzBusPage = dynamic(() => import("./vehicles/PuneBharatBenzBusPage"));

// Bus With Washroom
const DelhiBusWithWashroomPage = dynamic(() => import("./vehicles/DelhiBusWithWashroomPage"));
const GurugramBusWithWashroomPage = dynamic(() => import("./vehicles/GurugramBusWithWashroomPage"));
const MumbaiBusWithWashroomPage = dynamic(() => import("./vehicles/MumbaiBusWithWashroomPage"));
const PuneBusWithWashroomPage = dynamic(() => import("./vehicles/PuneBusWithWashroomPage"));

// Sleeper Bus
const DelhiSleeperBusPage = dynamic(() => import("./vehicles/DelhiSleeperBusPage"));
const GurugramSleeperBusPage = dynamic(() => import("./vehicles/GurugramSleeperBusPage"));
const MumbaiSleeperBusPage = dynamic(() => import("./vehicles/MumbaiSleeperBusPage"));
const PuneSleeperBusPage = dynamic(() => import("./vehicles/PuneSleeperBusPage"));

interface VehicleSelectorProps {
  vehicleType: string;
}

// Fallback component for missing vehicle pages
function VehicleComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Vehicle page coming soon for this location.</p>
    </div>
  );
}

export default function VehicleSelector({ vehicleType }: VehicleSelectorProps) {
  const { location } = useLocation();

  // Map locations and vehicle types to components
  const vehicleMap: Record<string, Record<string, React.ComponentType>> = {
    'delhi': {
      'car-suvs': DelhiCarSuvsPage,
      'ertiga': DelhiErtigaPage,
      'innova-crysta': DelhiInnovaCrystaPage,
      'hycross': DelhiHycrossPage,
      'luxury-cars-suvs': DelhiLuxuryCarsSuvsPage,
      'mercedes-sprinter': DelhiMercedesSprinterPage,
      'luxury-vans': DelhiLuxuryVansPage,
      'tempo-traveller': DelhiTempoTravellerPage,
      'maharaja-tempo-traveller': DelhiMaharajaTempoTravellerPage,
      'urbania': DelhiUrbaniaPage,
      'mini-bus': DelhiMiniBusPage,
      'luxury-bus': DelhiLuxuryBusPage,
      'volvo-bus': DelhiVolvoBusPage,
      'bharat-benz-bus': DelhiBharatBenzBusPage,
      'bus-with-washroom': DelhiBusWithWashroomPage,
      'sleeper-bus': DelhiSleeperBusPage,
    },
    'gurugram': {
      'car-suvs': GurugramCarSuvsPage,
      'ertiga': GurugramErtigaPage,
      'innova-crysta': GurugramInnovaCrystaPage,
      'hycross': GurugramHycrossPage,
      'luxury-cars-suvs': GurugramLuxuryCarsSuvsPage,
      'mercedes-sprinter': GurugramMercedesSprinterPage,
      'luxury-vans': GurugramLuxuryVansPage,
      'tempo-traveller': GurugramTempoTravellerPage,
      'maharaja-tempo-traveller': GurugramMaharajaTempoTravellerPage,
      'urbania': GurugramUrbaniaPage,
      'mini-bus': GurugramMiniBusPage,
      'luxury-bus': GurugramLuxuryBusPage,
      'volvo-bus': GurugramVolvoBusPage,
      'bharat-benz-bus': GurugramBharatBenzBusPage,
      'bus-with-washroom': GurugramBusWithWashroomPage,
      'sleeper-bus': GurugramSleeperBusPage,
    },
    'mumbai': {
      'car-suvs': MumbaiCarSuvsPage,
      'ertiga': MumbaiErtigaPage,
      'innova-crysta': MumbaiInnovaCrystaPage,
      'hycross': MumbaiHycrossPage,
      'luxury-cars-suvs': MumbaiLuxuryCarsSuvsPage,
      'mercedes-sprinter': MumbaiMercedesSprinterPage,
      'luxury-vans': MumbaiLuxuryVansPage,
      'tempo-traveller': MumbaiTempoTravellerPage,
      'maharaja-tempo-traveller': MumbaiMaharajaTempoTravellerPage,
      'urbania': MumbaiUrbaniaPage,
      'mini-bus': MumbaiMiniBusPage,
      'luxury-bus': MumbaiLuxuryBusPage,
      'volvo-bus': MumbaiVolvoBusPage,
      'bharat-benz-bus': MumbaiBharatBenzBusPage,
      'bus-with-washroom': MumbaiBusWithWashroomPage,
      'sleeper-bus': MumbaiSleeperBusPage,
    },
    'pune': {
      'car-suvs': PuneCarSuvsPage,
      'ertiga': PuneErtigaPage,
      'innova-crysta': PuneInnovaCrystaPage,
      'hycross': PuneHycrossPage,
      'luxury-cars-suvs': PuneLuxuryCarsSuvsPage,
      'mercedes-sprinter': PuneMercedesSprinterPage,
      'luxury-vans': PuneLuxuryVansPage,
      'tempo-traveller': PuneTempoTravellerPage,
      'maharaja-tempo-traveller': PuneMaharajaTempoTravellerPage,
      'urbania': PuneUrbaniaPage,
      'mini-bus': PuneMiniBusPage,
      'luxury-bus': PuneLuxuryBusPage,
      'volvo-bus': PuneVolvoBusPage,
      'bharat-benz-bus': PuneBharatBenzBusPage,
      'bus-with-washroom': PuneBusWithWashroomPage,
      'sleeper-bus': PuneSleeperBusPage,
    },
  };

  // Get the appropriate vehicle component
  const VehicleComponent = vehicleMap[location]?.[vehicleType] || VehicleComingSoon;

  return <VehicleComponent />;
}

