// app/[location]/partner/page.tsx
import { notFound, redirect } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import PartnerSelector from '@/app/components/PartnerSelector';

interface PartnerPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  // Redirect Mumbai from /mumbai/partner to /mumbai/partner-program
  if (location === 'mumbai') {
    redirect(`/${location}/partner-program`);
  }

  return <PartnerSelector />;
}

