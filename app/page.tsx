// app/page.tsx
import type { Metadata } from "next";
import { getHomeSections, getSeoByPath } from "@/lib/cms";

import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";
import VehicleForEveryBudgetSelector from "@/app/components/VehicleForEveryBudgetSelector";
import VehicleForEveryGroupSizeSelector from "@/app/components/VehicleForEveryGroupSizeSelector";
import VehicleForEveryOccasionSelector from "@/app/components/VehicleForEveryOccasionSelector";
import WhyChooseUrbanCruiseSelector from "@/app/components/WhyChooseUrbanCruiseSelector";
import TestimonialSelector from "@/app/components/TestimonialSelector";
import GlobalFaqsSelector from "@/app/components/GlobalFaqsSelector";
import VehicleRentalServiceInIndiaSelector from "@/app/components/VehicleRentalServiceInIndiaSelector";
import OurTrustedPartner from "@/app/components/ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "@/app/components/download-app/DownloadApp";
import LocationRedirect from "@/app/components/LocationRedirect";
import JsonLd from "@/app/components/seo/JsonLd";
import { createSiteMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = createSiteMetadata();

export default async function Home() {
  // ⭐ Fetch Global CMS content
  const [homeData, seo] = await Promise.all([
    getHomeSections("global"),
    getSeoByPath("/"),
  ]);

  const sections = homeData?.sections ?? {};

  // Debug (remove in production)
  if (process.env.NODE_ENV === "development") {
    console.log("[global-home] section keys:", Object.keys(sections));
    console.log("[global-home] hero present:", !!sections.hero);
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {seo?.seo?.schemas?.length ? (
        <JsonLd data={seo.seo.schemas} />
      ) : null}

      <LocationRedirect />

      <HeroSelector content={sections.hero} />
      <AboutSelector content={sections.about} />
      <HowItWorksSelector content={sections.howitworks} />
      <VehicleForEveryBudgetSelector content={sections.vehiclebudget} />
      <VehicleForEveryGroupSizeSelector content={sections.groupsize} />
      <VehicleForEveryOccasionSelector content={sections.occasion} />
      <WhyChooseUrbanCruiseSelector content={sections.whychoose} />
      <TestimonialSelector content={sections.testimonials} />
      <GlobalFaqsSelector content={sections.faq} />
      <VehicleRentalServiceInIndiaSelector
        content={sections.servicelocations}
      />
      <OurTrustedPartner content={sections.partners} />
      <DownloadApp content={sections.downloadapp} />
    </div>
  );
}