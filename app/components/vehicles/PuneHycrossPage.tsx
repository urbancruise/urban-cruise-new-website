// app/components/vehicles/PuneHycrossPage.tsx
"use client";

import Hycross from "./cars-suvs/pune/Hycross";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneHycrossPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hycross cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}