"use client";

import About from "./ui/About";
import AboutService from "./ui/AboutService";
import Faqs from "./ui/Faqs";
import Hero from "./ui/Hero";
import HowItWorks from "./ui/HowItWorks";
import LocalTravelBookingCta from "./ui/LocalTravelBookingCta";
import LocalTravelFeatures from "./ui/LocalTravelFeatures";
import LocalTravelPackages from "./ui/LocalTravelPackages";
import LocalTravelServices from "./ui/LocalTravelServices";
import OurTrustedPartner from "./ui/OurTrustedPartner";
import Testimonial from "./ui/Testimonial";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";

export default function GlobalLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="global"
        content={{
          eyebrow: "Local Travel Service in India",
          title: "India Local",
          titleHighlight: "Travel Service",
          description:
            "Book reliable local travel across India, including airport transfers, city tours, and comfortable daily transportation.",
          backgroundImageAlt: "Local travel service in India",
          vehiclesImageAlt: "Cars and buses for local travel in India",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="global" content={cmsSections?.about} />
      <HowItWorks location="global" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="global"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="global"
        content={cmsSections?.occasion}
      />
      <LocalTravelFeatures coverage="Across India" />
      <LocalTravelServices cityName="India" />
      <LocalTravelPackages
        cityName="India"
        coverage="Across India"
        airport="Major airports across India"
        airportPrice="₹800+"
        tourPrice="₹2,500+"
        hourlyPrice="₹500+"
        dayPrice="₹4,000+"
      />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="global"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="global" content={cmsSections?.testimonials} />
      <Faqs location="global" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="global"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
      <LocalTravelBookingCta cityName="India" />
    </div>
  );
}
