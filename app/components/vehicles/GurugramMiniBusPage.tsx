// app/components/vehicles/GurugramMiniBusPage.tsx
"use client";

import MiniBus from "./mini-bus/gurugram/MiniBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramMiniBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MiniBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
