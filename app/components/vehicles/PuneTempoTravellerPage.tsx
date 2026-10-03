// app/components/vehicles/PuneTempoTravellerPage.tsx
"use client";

import TempoTraveller from "./tempo-travellers/pune/TempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <TempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}