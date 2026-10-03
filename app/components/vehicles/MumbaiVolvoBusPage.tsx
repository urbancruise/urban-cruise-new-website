// app/components/vehicles/MumbaiVolvoBusPage.tsx
"use client";

import VolvoBus from "./luxury-buses/mumbai/VolvoBus";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiVolvoBusPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <VolvoBus cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}