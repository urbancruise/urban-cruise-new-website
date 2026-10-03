// app/components/vehicles/DelhiMaharajaTempoTravellerPage.tsx
"use client";

import MaharajaTempoTraveller from "./tempo-travellers/delhi/MaharajaTempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiMaharajaTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MaharajaTempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
