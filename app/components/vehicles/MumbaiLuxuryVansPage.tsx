// app/components/vehicles/MumbaiLuxuryVansPage.tsx
"use client";

import LuxuryVans from "./luxury-cars-suvs-vans/mumbai/LuxuryVans";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiLuxuryVansPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <LuxuryVans cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}