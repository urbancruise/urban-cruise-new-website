import type { ReactNode } from "react";
import JsonLd from "@/app/components/seo/JsonLd";
import { locationBusinessSchema } from "@/lib/schema";

export default async function LocationLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  return (
    <>
      <JsonLd
        data={[
          locationBusinessSchema(location),
        ]}
      />
      {children}
    </>
  );
}
