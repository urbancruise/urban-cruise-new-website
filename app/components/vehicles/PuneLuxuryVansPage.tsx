// app/components/vehicles/PuneLuxuryVansPage.tsx
"use client";

import LuxuryVans from "./luxury-cars-suvs-vans/pune/LuxuryVans";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneLuxuryVansPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryVans cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}