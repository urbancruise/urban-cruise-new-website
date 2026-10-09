'use client';

import { useEffect, useMemo } from "react";
import type { JsonLd } from "@/lib/schema";

export default function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  const scriptContent = useMemo(
    () => JSON.stringify(data).replace(/</g, "\\u003c"),
    [data],
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = scriptContent;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [scriptContent]);

  return null;
}
