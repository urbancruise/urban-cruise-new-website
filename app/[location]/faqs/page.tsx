// app/[location]/faqs/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import FaqsSelector from '@/app/components/FaqsSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface FaqsPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: FaqsPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "faqs", `/${location}/faqs`);
}

export default async function FaqsPage({ params }: FaqsPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Vehicle Rental FAQs in ${location}`} description={`Answers about vehicle rentals, bookings and travel services in ${location}.`} path={`/${location}/faqs`} />
      <FaqsSelector />
    </>
  );
}