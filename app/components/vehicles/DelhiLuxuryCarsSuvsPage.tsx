// app/components/vehicles/DelhiLuxuryCarsSuvsPage.tsx
"use client";

import LuxuryCarsSuvs from "./luxury-cars-suvs-vans/delhi/LuxuryCarsSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiLuxuryCarsSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryCarsSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
