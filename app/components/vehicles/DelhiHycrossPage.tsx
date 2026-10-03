// app/components/vehicles/DelhiHycrossPage.tsx
"use client";

import Hycross from "./cars-suvs/delhi/Hycross";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiHycrossPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hycross cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
