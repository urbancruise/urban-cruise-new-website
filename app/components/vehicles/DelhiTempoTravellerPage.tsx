// app/components/vehicles/DelhiTempoTravellerPage.tsx
"use client";

import TempoTraveller from "./tempo-travellers/delhi/TempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <TempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
