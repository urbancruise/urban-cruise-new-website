// app/[location]/testimonials/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import TestimonialsSelector from '@/app/components/TestimonialsSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface TestimonialsPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: TestimonialsPageProps) {
  const { location } = await params;
  return createLocationMetadata(
    location,
    "testimonials",
    `/${location}/testimonials`,
  );
}

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Vehicle Rental Reviews in ${location}`} description={`Read Urban Cruise customer reviews from ${location}.`} path={`/${location}/testimonials`} />
      <TestimonialsSelector />
    </>
  );
}
