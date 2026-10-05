// app/[location]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { isValidLocationAsync, formatLocationName } from "@/app/lib/location";
import { getHomeSections, getSeoByPath } from "@/lib/cms";

import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";
import VehicleForEveryBudgetSelector from "@/app/components/VehicleForEveryBudgetSelector";
import VehicleForEveryGroupSizeSelector from "@/app/components/VehicleForEveryGroupSizeSelector";
import VehicleForEveryOccasionSelector from "@/app/components/VehicleForEveryOccasionSelector";
import WhyChooseUrbanCruiseSelector from "@/app/components/WhyChooseUrbanCruiseSelector";
import TestimonialSelector from "@/app/components/TestimonialSelector";
import FaqsSelector from "@/app/components/Faq'sSelector";
import VehicleRentalServiceInIndiaSelector from "@/app/components/VehicleRentalServiceInIndiaSelector";
import OurTrustedPartner from "@/app/components/ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "@/app/components/download-app/DownloadApp";
import JsonLd from "@/app/components/seo/JsonLd";
import Breadcrumb from "@/app/components/seo/Breadcrumb";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { location } = await params;
  const valid = await isValidLocationAsync(location);
  if (!valid) return {};

  const path = `/${location}`;
  const seo = await getSeoByPath(path);
  const city = formatLocationName(location);

  if (!seo?.seo) {
    return {
      title: `Vehicle Rental in ${city} | Urban Cruise`,
      description: `Book cars, buses, tempo travellers in ${city} with Urban Cruise.`,
    };
  }

  const s = seo.seo;
  return {
    title: s.meta_title || s.title || `Vehicle Rental in ${city} | Urban Cruise`,
    description: s.meta_description || undefined,
    keywords: s.meta_keywords,
    alternates: { canonical: s.canonical_url || path },
    robots: s.is_indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: s.og_title || s.meta_title || undefined,
      description: s.og_description || s.meta_description || undefined,
      images:
        s.og_image || s.feature_image
          ? [s.og_image || s.feature_image!]
          : undefined,
      url: s.og_url || undefined,
      type: (s.og_type as any) || "website",
    },
    twitter: {
      card: (s.twitter_card as any) || "summary_large_image",
      title: s.twitter_title || undefined,
      description: s.twitter_description || undefined,
      images: s.twitter_image ? [s.twitter_image] : undefined,
    },
  };
}

export default async function LocationHome({ params }: PageProps) {
  const { location } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  const [homeData, seo] = await Promise.all([
    getHomeSections(location),
    getSeoByPath(`/${location}`),
  ]);

  const sections = homeData?.sections ?? {};
  const city = formatLocationName(location);

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {seo?.seo?.schemas?.length ? (
        <JsonLd data={seo.seo.schemas} />
      ) : (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Vehicle Rental in ${city}`,
            url: `${
              process.env.WEBSITE_ORIGIN || "http://localhost:3000"
            }/${location}`,
          }}
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="pointer-events-auto">
          <Breadcrumb
            items={[
              { name: "Home", path: "/" },
              { name: city, path: `/${location}` },
            ]}
          />
        </div>
      </div>

      <HeroSelector content={sections.hero} />
      <AboutSelector content={sections.about} />
      <HowItWorksSelector content={sections.howitworks} />
      <VehicleForEveryBudgetSelector content={sections.vehiclebudget} />
      <VehicleForEveryGroupSizeSelector content={sections.groupsize} />
      <VehicleForEveryOccasionSelector content={sections.occasion} />
      <WhyChooseUrbanCruiseSelector content={sections.whychoose} />
      <TestimonialSelector content={sections.testimonials} />
      <FaqsSelector content={sections.faq} />
      <VehicleRentalServiceInIndiaSelector
        content={sections.servicelocations}
      />
      <OurTrustedPartner content={sections.partners} />
      <DownloadApp content={sections.downloadapp} />
    </div>
  );
}
