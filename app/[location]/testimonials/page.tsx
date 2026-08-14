// app/[location]/testimonials/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import TestimonialsSelector from '@/app/components/TestimonialsSelector';

interface TestimonialsPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <TestimonialsSelector />;
}

