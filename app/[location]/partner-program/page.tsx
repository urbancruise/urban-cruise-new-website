// app/mumbai/partner-program/page.tsx
import { notFound } from 'next/navigation';
import MumbaiPartnerPage from '@/app/components/partner/MumbaiPartnerPage';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface MumbaiPartnerPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: MumbaiPartnerPageProps) {
  const { location } = await params;
  return createLocationMetadata(
    location,
    "partner",
    `/${location}/partner-program`,
  );
}

export default async function MumbaiPartnerProgramPage({ params }: MumbaiPartnerPageProps) {
  const { location } = await params;

  // Only allow this page for Mumbai
  if (location !== 'mumbai') {
    notFound();
  }

  // Render the Mumbai partner page
  return (
    <>
      <PageJsonLd name="Vehicle Rental Partnership in Mumbai" description="Partner with Urban Cruise to provide dependable transport solutions in Mumbai." path="/mumbai/partner-program" />
      <MumbaiPartnerPage />
    </>
  );
}
