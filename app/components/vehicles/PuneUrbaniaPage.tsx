// app/components/vehicles/PuneUrbaniaPage.tsx
"use client";

import Urbania from "./urbania/pune/Urbania";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function PuneUrbaniaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Urbania cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
