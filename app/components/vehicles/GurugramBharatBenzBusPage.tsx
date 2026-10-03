// app/components/vehicles/GurugramBharatBenzBusPage.tsx
"use client";

import BharatBenzBus from "./luxury-buses/gurugram/BharatBenzBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramBharatBenzBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BharatBenzBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
