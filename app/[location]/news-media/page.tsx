// app/[location]/news-media/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import NewsMediaSelector from '@/app/components/NewsMediaSelector';

interface NewsMediaPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function NewsMediaPage({ params }: NewsMediaPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <NewsMediaSelector />;
}