// app/[location]/blog/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import BlogSelector from "@/app/components/BlogSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface BlogPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { location } = await params;
  const path = `/${location}/blog`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "blog", path)
  );
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Vehicle Rental Blog for ${location}`}
        description={`Travel guides and vehicle rental advice for ${location} from Urban Cruise.`}
        path={`/${location}/blog`}
      />
      <BlogSelector />
    </>
  );
}