// app/[location]/blog/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import BlogSelector from '@/app/components/BlogSelector';
import { createLocationMetadata } from '@/lib/seo';
import PageJsonLd from '@/app/components/seo/PageJsonLd';

interface BlogPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "blog", `/${location}/blog`);
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <>
      <PageJsonLd name={`Vehicle Rental Blog for ${location}`} description={`Travel guides and vehicle rental advice for ${location} from Urban Cruise.`} path={`/${location}/blog`} />
      <BlogSelector />
    </>
  );
}