// app/components/vehicles/PuneInnovaCrystaPage.tsx
"use client";

import InnovnaCrysta from "./cars-suvs/pune/InnovaCrysta";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneInnovaCrystaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <InnovnaCrysta cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}