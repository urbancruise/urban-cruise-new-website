// ============================================================
// ServiceSelector — Location-aware service page dispatcher.
// Passes CMS sections to the correct city component.
// ============================================================
"use client";

import React from "react";
import { useLocation } from "@/app/context/LocationContext";
import dynamic from "next/dynamic";
import SectionSkeleton from "@/app/components/shared/SectionSkeleton";

// ======================================================
// LAZY LOAD — JIM CORBETT
// ======================================================
const DelhiJimCorbettPage = dynamic(() => import("./services/DelhiJimCorbettPage"), { loading: SectionSkeleton });
const GurugramJimCorbettPage = dynamic(() => import("./services/GurugramJimCorbettPage"), { loading: SectionSkeleton });
const MumbaiJimCorbettPage = dynamic(() => import("./services/MumbaiJimCorbettPage"), { loading: SectionSkeleton });
const PuneJimCorbettPage = dynamic(() => import("./services/PuneJimCorbettPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — DO DHAM YATRA
// ======================================================
const DelhiDoDhamPage = dynamic(() => import("./services/DelhiDoDhamPage"), { loading: SectionSkeleton });
const GurugramDoDhamPage = dynamic(() => import("./services/GurugramDoDhamPage"), { loading: SectionSkeleton });
const MumbaiDoDhamPage = dynamic(() => import("./services/MumbaiDoDhamPage"), { loading: SectionSkeleton });
const PuneDoDhamPage = dynamic(() => import("./services/PuneDoDhamPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — CHAR DHAM YATRA
// ======================================================
const DelhiCharDhamPage = dynamic(() => import("./services/DelhiCharDhamPage"), { loading: SectionSkeleton });
const GurugramCharDhamPage = dynamic(() => import("./services/GurugramCharDhamPage"), { loading: SectionSkeleton });
const MumbaiCharDhamPage = dynamic(() => import("./services/MumbaiCharDhamPage"), { loading: SectionSkeleton });
const PuneCharDhamPage = dynamic(() => import("./services/PuneCharDhamPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — PILGRIMAGE
// ======================================================
const DelhiPilgrimagePage = dynamic(() => import("./services/DelhiPilgrimagePage"), { loading: SectionSkeleton });
const GurugramPilgrimagePage = dynamic(() => import("./services/GurugramPilgrimagePage"), { loading: SectionSkeleton });
const MumbaiPilgrimagePage = dynamic(() => import("./services/MumbaiPilgrimagePage"), { loading: SectionSkeleton });
const PunePilgrimagePage = dynamic(() => import("./services/PunePilgrimagePage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — WEDDING
// ======================================================
const DelhiWeddingPage = dynamic(() => import("./services/DelhiWeddingPage"), { loading: SectionSkeleton });
const GurugramWeddingPage = dynamic(() => import("./services/GurugramWeddingPage"), { loading: SectionSkeleton });
const MumbaiWeddingPage = dynamic(() => import("./services/MumbaiWeddingPage"), { loading: SectionSkeleton });
const PuneWeddingPage = dynamic(() => import("./services/PuneWeddingPage"), { loading: SectionSkeleton });
const GlobalWeddingPage = dynamic(() => import("./services/GlobalWeddingPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — CORPORATE
// ======================================================
const DelhiCorporatePage = dynamic(() => import("./services/DelhiCorporatePage"), { loading: SectionSkeleton });
const GurugramCorporatePage = dynamic(() => import("./services/GurugramCorporatePage"), { loading: SectionSkeleton });
const MumbaiCorporatePage = dynamic(() => import("./services/MumbaiCorporatePage"), { loading: SectionSkeleton });
const PuneCorporatePage = dynamic(() => import("./services/PuneCorporatePage"), { loading: SectionSkeleton });
const GlobalCorporatePage = dynamic(() => import("./services/GlobalCorporatePage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — VACATIONS
// ======================================================
const GlobalVacationsPage = dynamic(() => import("./services/GlobalVacationsPage"), { loading: SectionSkeleton });
const DelhiVacationsPage = dynamic(() => import("./services/DelhiVacationsPage"), { loading: SectionSkeleton });
const GurugramVacationsPage = dynamic(() => import("./services/GurugramVacationsPage"), { loading: SectionSkeleton });
const MumbaiVacationsPage = dynamic(() => import("./services/MumbaiVacationsPage"), { loading: SectionSkeleton });
const PuneVacationsPage = dynamic(() => import("./services/PuneVacationsPage"), { loading: SectionSkeleton });

// ======================================================
// LAZY LOAD — LOCAL TRAVEL
// ======================================================
const DelhiLocalTravelPage = dynamic(() => import("./services/DelhiLocalTravelPage"), { loading: SectionSkeleton });
const GurugramLocalTravelPage = dynamic(() => import("./services/GurugramLocalTravelPage"), { loading: SectionSkeleton });
const MumbaiLocalTravelPage = dynamic(() => import("./services/MumbaiLocalTravelPage"), { loading: SectionSkeleton });
const PuneLocalTravelPage = dynamic(() => import("./services/PuneLocalTravelPage"), { loading: SectionSkeleton });

// ======================================================
// TYPES
// ======================================================
export interface ServiceSelectorProps {
  serviceType: string;
  /** Optional CMS overrides for content sections */
  cmsSections?: Record<string, any> | null;
}

// ======================================================
// FALLBACK
// ======================================================
function ServiceComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">
        Service page coming soon for this location.
      </p>
    </div>
  );
}

// ======================================================
// MAP
// ======================================================
const serviceMap: Record<
  string,
  Record<string, React.ComponentType<any>>
> = {
  global: {
    wedding: GlobalWeddingPage,
    corporate: GlobalCorporatePage,
    vacations: GlobalVacationsPage,
  },
  delhi: {
    "jim-corbett": DelhiJimCorbettPage,
    "do-dham": DelhiDoDhamPage,
    "char-dham": DelhiCharDhamPage,
    pilgrimage: DelhiPilgrimagePage,
    wedding: DelhiWeddingPage,
    corporate: DelhiCorporatePage,
    vacations: DelhiVacationsPage,
    "local-travel": DelhiLocalTravelPage,
  },
  gurugram: {
    "jim-corbett": GurugramJimCorbettPage,
    "do-dham": GurugramDoDhamPage,
    "char-dham": GurugramCharDhamPage,
    pilgrimage: GurugramPilgrimagePage,
    wedding: GurugramWeddingPage,
    corporate: GurugramCorporatePage,
    vacations: GurugramVacationsPage,
    "local-travel": GurugramLocalTravelPage,
  },
  mumbai: {
    "jim-corbett": MumbaiJimCorbettPage,
    "do-dham": MumbaiDoDhamPage,
    "char-dham": MumbaiCharDhamPage,
    pilgrimage: MumbaiPilgrimagePage,
    wedding: MumbaiWeddingPage,
    corporate: MumbaiCorporatePage,
    vacations: MumbaiVacationsPage,
    "local-travel": MumbaiLocalTravelPage,
  },
  pune: {
    "jim-corbett": PuneJimCorbettPage,
    "do-dham": PuneDoDhamPage,
    "char-dham": PuneCharDhamPage,
    pilgrimage: PunePilgrimagePage,
    wedding: PuneWeddingPage,
    corporate: PuneCorporatePage,
    vacations: PuneVacationsPage,
    "local-travel": PuneLocalTravelPage,
  },
};

// ======================================================
// COMPONENT
// ======================================================
export default function ServiceSelector({
  serviceType,
  cmsSections,
}: ServiceSelectorProps) {
  const { location } = useLocation();

  const ServiceComponent =
    serviceMap[location]?.[serviceType] || ServiceComingSoon;

  return <ServiceComponent cmsSections={cmsSections ?? null} />;
}
