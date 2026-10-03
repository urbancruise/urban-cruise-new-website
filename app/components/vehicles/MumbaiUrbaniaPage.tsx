// app/components/vehicles/MumbaiUrbaniaPage.tsx
"use client";

import Urbania from "./urbania/mumbai/Urbania";

interface Props {
  cmsMeta?: Record<string, any> | null;
  cmsSections?: Record<string, any> | null;
}

export default function MumbaiUrbaniaPage({ cmsMeta, cmsSections }: Props) {
  return (
    <main className="min-h-screen w-full bg-white">
      <Urbania cmsMeta={cmsMeta} cmsSections={cmsSections} />
    </main>
  );
}
