// app/components/vehicles/PuneBharatBenzBusPage.tsx
"use client";

import BharatBenzBus from "./luxury-buses/pune/BharatBenzBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneBharatBenzBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BharatBenzBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}