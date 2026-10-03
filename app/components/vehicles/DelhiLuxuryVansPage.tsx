// app/components/vehicles/DelhiLuxuryVansPage.tsx
"use client";

import LuxuryVans from "./luxury-cars-suvs-vans/delhi/LuxuryVans";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiLuxuryVansPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryVans cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
