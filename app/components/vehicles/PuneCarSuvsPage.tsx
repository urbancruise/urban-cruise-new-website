// app/components/vehicles/PuneCarSuvsPage.tsx
"use client";

import CarSuvs from "./cars-suvs/pune/CarSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneCarSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <CarSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
