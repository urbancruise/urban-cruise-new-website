// app/components/vehicles/GurugramLuxuryBusPage.tsx
"use client";

import LuxuryBus from "./luxury-buses/gurugram/LuxuryBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramLuxuryBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}

