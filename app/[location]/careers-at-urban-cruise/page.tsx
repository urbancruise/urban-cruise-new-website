// app/[location]/careers-at-urban-cruise/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import CareersSelector from '@/app/components/CareersSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface CareersPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: CareersPageProps) {
  const { location } = await params;
  return createLocationMetadata(
    location,
    "careers",
    `/${location}/careers-at-urban-cruise`,
  );
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Urban Cruise Careers in ${location}`} description={`Explore careers and join the Urban Cruise team in ${location}.`} path={`/${location}/careers-at-urban-cruise`} />
      <CareersSelector />
    </>
  );
}
