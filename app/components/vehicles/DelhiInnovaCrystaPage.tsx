// app/components/vehicles/DelhiInnovaCrystaPage.tsx
"use client";

import InnovnaCrysta from "./cars-suvs/delhi/InnovaCrysta";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiInnovaCrystaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <InnovnaCrysta cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
