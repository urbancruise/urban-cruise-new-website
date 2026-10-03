// app/components/vehicles/PuneLuxuryBusPage.tsx
"use client";

import LuxuryBus from "./luxury-buses/pune/LuxuryBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneLuxuryBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
