// app/components/vehicles/MumbaiErtigaPage.tsx
"use client";

import Ertiga from "./cars-suvs/mumbai/Ertiga";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiErtigaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Ertiga cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}