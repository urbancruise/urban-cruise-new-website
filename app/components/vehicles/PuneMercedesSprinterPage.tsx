// app/components/vehicles/PuneMercedesSprinterPage.tsx
"use client";

import MercedesSprinter from "./luxury-cars-suvs-vans/pune/MercedesSprinter";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneMercedesSprinterPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MercedesSprinter cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}