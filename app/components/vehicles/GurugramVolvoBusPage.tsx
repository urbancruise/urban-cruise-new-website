// app/components/vehicles/GurugramVolvoBusPage.tsx
"use client";

import VolvoBus from "./luxury-buses/gurugram/VolvoBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramVolvoBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <VolvoBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}

