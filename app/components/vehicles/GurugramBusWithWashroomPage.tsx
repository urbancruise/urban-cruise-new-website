// app/components/vehicles/GurugramBusWithWashroomPage.tsx
"use client";

import BusWithWashroom from "./luxury-buses/gurugram/BusWithWashroom";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramBusWithWashroomPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BusWithWashroom cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
