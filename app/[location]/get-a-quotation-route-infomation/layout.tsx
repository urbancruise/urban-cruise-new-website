// app/[location]/get-a-quotation-route-infomation/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";
import { formatLocationName } from "@/app/lib/location";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const path = `/${location}/get-a-quotation-route-infomation`;
  const metadata =
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "booking", path);
  const title = `Get a Quote in ${formatLocationName(location)} | Urban Cruise`;

  return {
    ...metadata,
    title,
    openGraph: metadata.openGraph
      ? { ...metadata.openGraph, title }
      : undefined,
    twitter: metadata.twitter ? { ...metadata.twitter, title } : undefined,
  };
}

export default async function QuoteLayout({
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
        name={`Get a Quote in ${location}`}
        description="Request a quote for a premium rental vehicle with Urban Cruise."
        path={`/${location}/get-a-quotation-route-infomation`}
      />
      {children}
    </>
  );
}