// app/[location]/news-media/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import NewsMediaSelector from '@/app/components/NewsMediaSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface NewsMediaPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: NewsMediaPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "news", `/${location}/news-media`);
}

export default async function NewsMediaPage({ params }: NewsMediaPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Urban Cruise News & Media in ${location}`} description={`Urban Cruise company news and media updates from ${location}.`} path={`/${location}/news-media`} />
      <NewsMediaSelector />
    </>
  );
}