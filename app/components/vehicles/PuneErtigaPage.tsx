// app/components/vehicles/PuneErtigaPage.tsx
"use client";

import Ertiga from "./cars-suvs/pune/Ertiga";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneErtigaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Ertiga cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}