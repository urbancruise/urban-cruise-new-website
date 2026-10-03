// app/components/vehicles/DelhiUrbaniaPage.tsx
"use client";

import Urbania from "./urbania/delhi/Urbania";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function DelhiUrbaniaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Urbania cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
