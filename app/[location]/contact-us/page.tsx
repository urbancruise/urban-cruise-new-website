// app/[location]/contact-us/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import ContactSelector from '@/app/components/ContactSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface ContactPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "contact", `/${location}/contact-us`);
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Contact Urban Cruise in ${location}`} description={`Contact Urban Cruise for vehicle rental bookings and support in ${location}.`} path={`/${location}/contact-us`} />
      <ContactSelector />
    </>
  );
}
