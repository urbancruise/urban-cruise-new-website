// app/components/vehicles/DelhiCarSuvsPage.tsx
"use client";

import CarSuvs from "./cars-suvs/delhi/CarSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiCarSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <CarSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
