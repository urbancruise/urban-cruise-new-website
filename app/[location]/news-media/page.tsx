// app/[location]/news-media/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import NewsMediaSelector from "@/app/components/NewsMediaSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface NewsMediaPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: NewsMediaPageProps) {
  const { location } = await params;
  const path = `/${location}/news-media`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "news", path)
  );
}

export default async function NewsMediaPage({ params }: NewsMediaPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Urban Cruise News & Media in ${location}`}
        description={`Urban Cruise company news and media updates from ${location}.`}
        path={`/${location}/news-media`}
      />
      <NewsMediaSelector />
    </>
  );
}
