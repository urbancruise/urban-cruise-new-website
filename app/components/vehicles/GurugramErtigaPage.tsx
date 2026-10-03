// app/components/vehicles/GurugramErtigaPage.tsx
"use client";

import Ertiga from "./cars-suvs/gurugram/Ertiga";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramErtigaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Ertiga cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}