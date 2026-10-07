// app/[location]/testimonials/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import TestimonialsSelector from "@/app/components/TestimonialsSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface TestimonialsPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: TestimonialsPageProps) {
  const { location } = await params;
  const path = `/${location}/testimonials`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "testimonials", path)
  );
}

export default async function TestimonialsPage({
  params,
}: TestimonialsPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Vehicle Rental Reviews in ${location}`}
        description={`Read Urban Cruise customer reviews from ${location}.`}
        path={`/${location}/testimonials`}
      />
      <TestimonialsSelector />
    </>
  );
}