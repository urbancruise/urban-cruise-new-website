// app/components/vehicles/GurugramMaharajaTempoTravellerPage.tsx
"use client";

import MaharajaTempoTraveller from "./tempo-travellers/gurugram/MaharajaTempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramMaharajaTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MaharajaTempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
