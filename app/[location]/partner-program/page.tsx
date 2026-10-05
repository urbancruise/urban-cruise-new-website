// app/[location]/partner-program/page.tsx
import { notFound, permanentRedirect } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import MumbaiPartnerPage from "@/app/components/partner/MumbaiPartnerPage";
import { createLocationMetadata } from "@/lib/seo";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface PartnerProgramPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({
  params,
}: PartnerProgramPageProps) {
  const { location } = await params;
  return createLocationMetadata(
    location,
    "partner",
    `/${location}/partner-program`
  );
}

export default async function PartnerProgramPage({
  params,
}: PartnerProgramPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  // Only Mumbai uses /partner-program; everything else redirects to /partner
  if (location !== "mumbai") {
    permanentRedirect(`/${location}/partner`);
  }

  return (
    <>
      <PageJsonLd
        name="Vehicle Rental Partnership in Mumbai"
        description="Partner with Urban Cruise to provide dependable transport solutions in Mumbai."
        path={`/${location}/partner-program`}
      />
      <MumbaiPartnerPage />
    </>
  );
}