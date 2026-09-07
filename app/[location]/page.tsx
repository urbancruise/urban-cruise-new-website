// app/[location]/page.tsx
import { notFound } from "next/navigation";
import {
  isValidLocation,
} from "@/app/lib/location";

import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";
import VehicleForEveryBudgetSelector from "@/app/components/VehicleForEveryBudgetSelector";
import VehicleForEveryGroupSizeSelector from "../components/VehicleForEveryGroupSizeSelector";
import VehicleForEveryOccasionSelector from "../components/VehicleForEveryOccasionSelector";
import WhyChooseUrbanCruiseSelector from "../components/WhyChooseUrbanCruiseSelector";
import TestimonialSelector from "../components/TestimonialSelector";
import FaqsSelector from "@/app/components/Faq'sSelector";
import VehicleRentalServiceInIndiaSelector from "@/app/components/VehicleRentalServiceInIndiaSelector";
import OurTrustedPartner from "../components/ourtrustedpartner/OurTrustedPartner";
import DownloadApp from "../components/download-app/DownloadApp";
import { createLocationMetadata } from "@/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";
import { formatLocationName } from "@/app/lib/location";
import Breadcrumb from "@/app/components/seo/Breadcrumb";

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { location } = await params;
  return createLocationMetadata(location, "home", `/${location}`);
}

export default async function LocationHome({
  params,
}: LocationPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <JsonLd
        data={webPageSchema({
          name: `Vehicle Rental in ${formatLocationName(location)}`,
          description: `Vehicle rental services in ${formatLocationName(location)} from Urban Cruise.`,
          path: `/${location}`,
        })}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="pointer-events-auto">
          <Breadcrumb
            items={[
              { name: "Home", path: "/" },
              { name: formatLocationName(location), path: `/${location}` },
            ]}
          />
        </div>
      </div>
      {/* HERO */}
      <HeroSelector />

          {/* ABOUT */}
      <AboutSelector />

          {/* HOW IT WORKS */}
      <HowItWorksSelector />

          {/* VEHICLE FOR EVERY BUDGET */}
      <VehicleForEveryBudgetSelector />

      {/* VEHICLE FOR EVERY GROUP SIZE */}
      <VehicleForEveryGroupSizeSelector />

      {/* VEHICLE FOR EVERY OCCASION */}
      <VehicleForEveryOccasionSelector />

      {/* WHY CHOOSE URBAN CRUISE */}
      <WhyChooseUrbanCruiseSelector />

      {/* Testimonial */}
      <TestimonialSelector />

      {/* Faq's */}
      <FaqsSelector />

      {/* VEHICLE RENTAL SERVICE IN INDIA */}
      <VehicleRentalServiceInIndiaSelector />

      {/* Our Trusted Partner */}
      <OurTrustedPartner />

      {/* FEATURES */}
      <DownloadApp />
    </div>
  );
}
