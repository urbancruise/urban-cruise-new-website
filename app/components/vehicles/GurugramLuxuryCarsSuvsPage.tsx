// app/components/vehicles/GurugramLuxuryCarsSuvsPage.tsx
"use client";

import LuxuryCarsSuvs from "./luxury-cars-suvs-vans/gurugram/LuxuryCarsSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramLuxuryCarsSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryCarsSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}