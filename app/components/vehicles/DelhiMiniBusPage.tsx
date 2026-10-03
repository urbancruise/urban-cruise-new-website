// app/components/vehicles/DelhiMiniBusPage.tsx
"use client";

import MiniBus from "./mini-bus/delhi/MiniBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiMiniBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MiniBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
