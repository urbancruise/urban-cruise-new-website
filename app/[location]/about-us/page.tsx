// app/[location]/about-us/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import AboutUsSelector from '@/app/components/AboutUsSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface AboutPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "about", `/${location}/about-us`);
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`About Urban Cruise in ${location}`} description={`Learn about Urban Cruise vehicle rental services in ${location}.`} path={`/${location}/about-us`} />
      <AboutUsSelector />
    </>
  );
}
