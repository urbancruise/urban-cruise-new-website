// app/[location]/careers-at-urban-cruise/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import CareersSelector from "@/app/components/CareersSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface CareersPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: CareersPageProps) {
  const { location } = await params;
  const path = `/${location}/careers-at-urban-cruise`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "careers", path)
  );
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Urban Cruise Careers in ${location}`}
        description={`Explore careers and join the Urban Cruise team in ${location}.`}
        path={`/${location}/careers-at-urban-cruise`}
      />
      <CareersSelector />
    </>
  );
}