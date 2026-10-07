// app/[location]/book/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const path = `/${location}/book`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "booking", path)
  );
}

export default async function BookingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Book Vehicle Rental in ${location}`}
        description="Request a quote and book a premium rental vehicle with Urban Cruise."
        path={`/${location}/book`}
      />
      {children}
    </>
  );
}