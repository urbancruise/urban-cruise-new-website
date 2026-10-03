// app/components/vehicles/MumbaiInnovaCrystaPage.tsx
"use client";

import InnovnaCrysta from "./cars-suvs/mumbai/InnovaCrysta";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiInnovaCrystaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <InnovnaCrysta cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}