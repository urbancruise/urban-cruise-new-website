// app/[location]/contact-us/page.tsx
import { notFound } from "next/navigation";
import { isValidLocationAsync } from "@/app/lib/location";
import ContactSelector from "@/app/components/ContactSelector";
import { createLocationMetadata } from "@/lib/seo";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

interface ContactPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { location } = await params;
  const path = `/${location}/contact-us`;
  return (
    (await getCmsSeoMetadata(path)) ??
    createLocationMetadata(location, "contact", path)
  );
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  return (
    <>
      <PageJsonLd
        name={`Contact Urban Cruise in ${location}`}
        description={`Contact Urban Cruise for vehicle rental bookings and support in ${location}.`}
        path={`/${location}/contact-us`}
      />
      <ContactSelector />
    </>
  );
}