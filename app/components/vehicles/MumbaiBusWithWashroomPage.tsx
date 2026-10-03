// app/components/vehicles/MumbaiBusWithWashroomPage.tsx
"use client";

import BusWithWashroom from "./luxury-buses/mumbai/BusWithWashroom";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiBusWithWashroomPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BusWithWashroom cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
