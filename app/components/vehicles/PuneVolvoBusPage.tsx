// app/components/vehicles/PuneVolvoBusPage.tsx
"use client";

import VolvoBus from "./luxury-buses/pune/VolvoBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneVolvoBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <VolvoBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
