// app/components/vehicles/GurugramHycrossPage.tsx
"use client";

import Hycross from "./cars-suvs/gurugram/Hycross";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function GurugramHycrossPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hycross cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}