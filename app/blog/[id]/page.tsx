import ManagedBlogDetailPage from "@/app/components/blog/ManagedBlogDetailPage";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ city?: string }>;
}

export default async function BlogDetailPage({
  params,
  searchParams,
}: BlogDetailPageProps) {
  const [{ id }, { city }] = await Promise.all([params, searchParams]);
  return <ManagedBlogDetailPage blogIdentifier={id} citySlug={city} />;
}
