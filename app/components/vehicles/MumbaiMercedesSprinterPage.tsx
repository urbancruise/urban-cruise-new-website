// app/components/vehicles/MumbaiMercedesSprinterPage.tsx
"use client";

import MercedesSprinter from "./luxury-cars-suvs-vans/mumbai/MercedesSprinter";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiMercedesSprinterPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MercedesSprinter cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}