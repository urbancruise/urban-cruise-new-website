// app/components/vehicles/DelhiBharatBenzBusPage.tsx
"use client";

import BharatBenzBus from "./luxury-buses/delhi/BharatBenzBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiBharatBenzBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <BharatBenzBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
