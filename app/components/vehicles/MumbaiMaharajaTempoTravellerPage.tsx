// app/components/vehicles/MumbaiMaharajaTempoTravellerPage.tsx
"use client";

import MaharajaTempoTraveller from "./tempo-travellers/mumbai/MaharajaTempoTraveller";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiMaharajaTempoTravellerPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MaharajaTempoTraveller cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
