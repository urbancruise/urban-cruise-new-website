// app/[location]/careers-at-urban-cruise/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import CareersSelector from '@/app/components/CareersSelector';

interface CareersPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <CareersSelector />;
}

