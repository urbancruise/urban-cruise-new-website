// app/mumbai/partner-program/page.tsx
import { notFound } from 'next/navigation';
import MumbaiPartnerPage from '@/app/components/partner/MumbaiPartnerPage';

interface MumbaiPartnerPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function MumbaiPartnerProgramPage({ params }: MumbaiPartnerPageProps) {
  const { location } = await params;

  // Only allow this page for Mumbai
  if (location !== 'mumbai') {
    notFound();
  }

  // Render the Mumbai partner page
  return <MumbaiPartnerPage />;
}

