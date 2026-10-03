// app/components/vehicles/MumbaiCarSuvsPage.tsx
"use client";

import CarSuvs from "./cars-suvs/mumbai/CarSuvs";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiCarSuvsPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <CarSuvs cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
