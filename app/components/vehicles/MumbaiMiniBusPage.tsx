// app/components/vehicles/MumbaiMiniBusPage.tsx
"use client";

import MiniBus from "./mini-bus/mumbai/MiniBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiMiniBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <MiniBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
