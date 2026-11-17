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

export default function PuneLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="pune"
        content={{
          eyebrow: "Local Travel Service in Pune",
          title: "Pune Local",
          titleHighlight: "Travel Service",
          description:
            "Book reliable local travel in Pune, including airport transfers, city tours, and comfortable daily transportation.",
          backgroundImageAlt: "Local travel service in Pune",
          vehiclesImageAlt: "Cars and buses for local travel in Pune",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="pune" content={cmsSections?.about} />
      <HowItWorks location="pune" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="pune"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="pune"
        content={cmsSections?.occasion}
      />
      <LocalTravelFeatures coverage="Pune" />
      <LocalTravelServices cityName="Pune" />
      <LocalTravelPackages
        cityName="Pune"
        coverage="Pune"
        airport="Pune Airport"
        airportPrice="₹800+"
        tourPrice="₹2,500+"
        hourlyPrice="₹500+"
        dayPrice="₹4,000+"
      />
      <AboutService content={cmsSections?.aboutservice} />
      <WhyChooseUrbanCruise
        location="pune"
        content={cmsSections?.whychoose}
      />
      <Testimonial location="pune" content={cmsSections?.testimonials} />
      <Faqs location="pune" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="pune"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
      <LocalTravelBookingCta cityName="Pune" />
    </div>
  );
}
