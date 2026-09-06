import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createLocationMetadata } from "@/lib/seo";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  return createLocationMetadata(location, "booking", `/${location}/book`);
}

export default async function BookingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

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
