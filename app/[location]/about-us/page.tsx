// app/[location]/about-us/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import AboutUsSelector from '@/app/components/AboutUsSelector';

interface AboutPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <AboutUsSelector />;
}

