// app/[location]/faqs/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import FaqsSelector from '@/app/components/FaqsSelector';

interface FaqsPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function FaqsPage({ params }: FaqsPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <FaqsSelector />;
}