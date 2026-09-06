// app/[location]/partner/page.tsx
import { notFound, permanentRedirect } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import PartnerSelector from '@/app/components/PartnerSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface PartnerPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: PartnerPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "partner", `/${location}/partner`);
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  // Redirect Mumbai from /mumbai/partner to /mumbai/partner-program
  if (location === 'mumbai') {
    permanentRedirect(`/${location}/partner-program`);
  }

  return (
    <>
      <PageJsonLd name={`Vehicle Rental Partnership in ${location}`} description={`Partner with Urban Cruise to provide dependable transport solutions in ${location}.`} path={`/${location}/partner`} />
      <PartnerSelector />
    </>
  );
}
