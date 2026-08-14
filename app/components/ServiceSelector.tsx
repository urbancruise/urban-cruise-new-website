// app/components/ServiceSelector.tsx
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";

// Jim Corbett
const DelhiJimCorbettPage = dynamic(() => import("./services/DelhiJimCorbettPage"));
const GurugramJimCorbettPage = dynamic(() => import("./services/GurugramJimCorbettPage"));
const MumbaiJimCorbettPage = dynamic(() => import("./services/MumbaiJimCorbettPage"));
const PuneJimCorbettPage = dynamic(() => import("./services/PuneJimCorbettPage"));

// Do Dham Yatra
const DelhiDoDhamPage = dynamic(() => import("./services/DelhiDoDhamPage"));
const GurugramDoDhamPage = dynamic(() => import("./services/GurugramDoDhamPage"));
const MumbaiDoDhamPage = dynamic(() => import("./services/MumbaiDoDhamPage"));
const PuneDoDhamPage = dynamic(() => import("./services/PuneDoDhamPage"));

// Char Dham Yatra
const DelhiCharDhamPage = dynamic(() => import("./services/DelhiCharDhamPage"));
const GurugramCharDhamPage = dynamic(() => import("./services/GurugramCharDhamPage"));
const MumbaiCharDhamPage = dynamic(() => import("./services/MumbaiCharDhamPage"));
const PuneCharDhamPage = dynamic(() => import("./services/PuneCharDhamPage"));

// Pilgrimage Travel
const DelhiPilgrimagePage = dynamic(() => import("./services/DelhiPilgrimagePage"));
const GurugramPilgrimagePage = dynamic(() => import("./services/GurugramPilgrimagePage"));
const MumbaiPilgrimagePage = dynamic(() => import("./services/MumbaiPilgrimagePage"));
const PunePilgrimagePage = dynamic(() => import("./services/PunePilgrimagePage"));

// Wedding Travel
const DelhiWeddingPage = dynamic(() => import("./services/DelhiWeddingPage"));
const GurugramWeddingPage = dynamic(() => import("./services/GurugramWeddingPage"));
const MumbaiWeddingPage = dynamic(() => import("./services/MumbaiWeddingPage"));
const PuneWeddingPage = dynamic(() => import("./services/PuneWeddingPage"));

// Corporate Travel
const DelhiCorporatePage = dynamic(() => import("./services/DelhiCorporatePage"));
const GurugramCorporatePage = dynamic(() => import("./services/GurugramCorporatePage"));
const MumbaiCorporatePage = dynamic(() => import("./services/MumbaiCorporatePage"));
const PuneCorporatePage = dynamic(() => import("./services/PuneCorporatePage"));

// Vacations
const DelhiVacationsPage = dynamic(() => import("./services/DelhiVacationsPage"));
const GurugramVacationsPage = dynamic(() => import("./services/GurugramVacationsPage"));
const MumbaiVacationsPage = dynamic(() => import("./services/MumbaiVacationsPage"));
const PuneVacationsPage = dynamic(() => import("./services/PuneVacationsPage"));

// Local Travel
const DelhiLocalTravelPage = dynamic(() => import("./services/DelhiLocalTravelPage"));
const GurugramLocalTravelPage = dynamic(() => import("./services/GurugramLocalTravelPage"));
const MumbaiLocalTravelPage = dynamic(() => import("./services/MumbaiLocalTravelPage"));
const PuneLocalTravelPage = dynamic(() => import("./services/PuneLocalTravelPage"));

interface ServiceSelectorProps {
  serviceType: string;
}

// Fallback component for missing service pages
function ServiceComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Service page coming soon for this location.</p>
    </div>
  );
}

export default function ServiceSelector({ serviceType }: ServiceSelectorProps) {
  const { location } = useLocation();

  // Map locations and service types to components
  const serviceMap: Record<string, Record<string, React.ComponentType>> = {
    'delhi': {
      'jim-corbett': DelhiJimCorbettPage,
      'do-dham': DelhiDoDhamPage,
      'char-dham': DelhiCharDhamPage,
      'pilgrimage': DelhiPilgrimagePage,
      'wedding': DelhiWeddingPage,
      'corporate': DelhiCorporatePage,
      'vacations': DelhiVacationsPage,
      'local-travel': DelhiLocalTravelPage,
    },
    'gurugram': {
      'jim-corbett': GurugramJimCorbettPage,
      'do-dham': GurugramDoDhamPage,
      'char-dham': GurugramCharDhamPage,
      'pilgrimage': GurugramPilgrimagePage,
      'wedding': GurugramWeddingPage,
      'corporate': GurugramCorporatePage,
      'vacations': GurugramVacationsPage,
      'local-travel': GurugramLocalTravelPage,
    },
    'mumbai': {
      'jim-corbett': MumbaiJimCorbettPage,
      'do-dham': MumbaiDoDhamPage,
      'char-dham': MumbaiCharDhamPage,
      'pilgrimage': MumbaiPilgrimagePage,
      'wedding': MumbaiWeddingPage,
      'corporate': MumbaiCorporatePage,
      'vacations': MumbaiVacationsPage,
      'local-travel': MumbaiLocalTravelPage,
    },
    'pune': {
      'jim-corbett': PuneJimCorbettPage,
      'do-dham': PuneDoDhamPage,
      'char-dham': PuneCharDhamPage,
      'pilgrimage': PunePilgrimagePage,
      'wedding': PuneWeddingPage,
      'corporate': PuneCorporatePage,
      'vacations': PuneVacationsPage,
      'local-travel': PuneLocalTravelPage,
    },
  };

  // Get the appropriate service component
  const ServiceComponent = serviceMap[location]?.[serviceType] || ServiceComingSoon;

  return <ServiceComponent />;
}

