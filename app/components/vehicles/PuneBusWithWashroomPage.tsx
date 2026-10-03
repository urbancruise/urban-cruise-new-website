// app/components/vehicles/PuneBusWithWashroomPage.tsx
"use client";

import BusWithWashroom from "./luxury-buses/pune/BusWithWashroom";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneBusWithWashroomPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BusWithWashroom cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
