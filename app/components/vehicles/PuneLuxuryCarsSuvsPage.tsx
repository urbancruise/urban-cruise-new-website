// app/components/vehicles/PuneLuxuryCarsSuvsPage.tsx
"use client";

import LuxuryCarsSuvs from "./luxury-cars-suvs-vans/pune/LuxuryCarsSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneLuxuryCarsSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryCarsSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}