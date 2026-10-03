// app/components/vehicles/GurugramCarSuvsPage.tsx
"use client";

import CarSuvs from "./cars-suvs/gurugram/CarSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramCarSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <CarSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}