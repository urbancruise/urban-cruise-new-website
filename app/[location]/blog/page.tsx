// app/[location]/blog/page.tsx
import { notFound } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import BlogSelector from '@/app/components/BlogSelector';

interface BlogPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return <BlogSelector />;
}