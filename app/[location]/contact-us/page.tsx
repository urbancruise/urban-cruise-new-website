// app/[location]/contact-us/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import ContactSelector from '@/app/components/ContactSelector';

interface ContactPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <ContactSelector />;
}

