// app/components/vehicles/GurugramInnovaCrystaPage.tsx
"use client";

import InnovnaCrysta from "./cars-suvs/gurugram/InnovaCrysta";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramInnovaCrystaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <InnovnaCrysta cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}