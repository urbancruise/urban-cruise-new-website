// app/components/vehicles/GurugramTempoTravellerPage.tsx
"use client";

import TempoTraveller from "./tempo-travellers/gurugram/TempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <TempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}