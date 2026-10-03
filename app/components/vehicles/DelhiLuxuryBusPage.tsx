// app/components/vehicles/DelhiLuxuryBusPage.tsx
"use client";

import LuxuryBus from "./luxury-buses/delhi/LuxuryBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiLuxuryBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
