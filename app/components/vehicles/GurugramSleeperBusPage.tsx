// app/components/vehicles/GurugramSleeperBusPage.tsx
"use client";

import SleeperSemiSleeperBus from "./luxury-buses/gurugram/SleeperSemiSleeperBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramSleeperBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <SleeperSemiSleeperBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
