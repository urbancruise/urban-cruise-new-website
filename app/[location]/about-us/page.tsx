// app/[location]/about-us/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import AboutUsSelector from "@/app/components/AboutUsSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface AboutPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { location } = await params;
  const path = `/${location}/about-us`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "about", path)
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`About Urban Cruise in ${location}`}
        description={`Learn about Urban Cruise vehicle rental services in ${location}.`}
        path={`/${location}/about-us`}
      />
      <AboutUsSelector />
    </>
  );
}
