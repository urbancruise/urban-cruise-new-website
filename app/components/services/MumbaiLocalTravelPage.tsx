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

export default function MumbaiLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="mumbai"
        content={{
          eyebrow: "Local Travel Service in Mumbai",
          title: "Mumbai Local",
          titleHighlight: "Travel Service",
          description:
            "Book reliable local travel in Mumbai, including airport transfers, city tours, and comfortable daily transportation.",
          backgroundImageAlt: "Local travel service in Mumbai",
          vehiclesImageAlt: "Cars and buses for local travel in Mumbai",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="mumbai" content={cmsSections?.about} />
      <HowItWorks location="mumbai" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="mumbai"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="mumbai"
        content={cmsSections?.occasion}
      />
      <LocalTravelFeatures coverage="Mumbai" />
      <LocalTravelServices cityName="Mumbai" />
      <LocalTravelPackages
        cityName="Mumbai"
        coverage="Mumbai"
        airport="Mumbai Airport"
        airportPrice="₹900+"
        tourPrice="₹2,800+"
        hourlyPrice="₹550+"
        dayPrice="₹4,500+"
      />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="mumbai"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="mumbai" content={cmsSections?.testimonials} />
      <Faqs location="mumbai" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="mumbai"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
      <LocalTravelBookingCta cityName="Mumbai" />
    </div>
  );
}
