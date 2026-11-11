// app/components/services/DelhiDoDhamPage.tsx
"use client";

import Hero from "./ui/Hero";
import About from "./ui/About";
import HowItWorks from "./ui/HowItWorks";
import VehicleForEveryGroupSize from "./ui/VehicleForEveryGroupSize";
import VehicleForEveryOccasion from "./ui/VehicleForEveryOccasion";
import Hotels from "./ui/Hotels";
import VehiclePackage from "./ui/VehiclePackage";
import Card, {
  doDhamYatraPackages,
  majorStartingPointOfTheDoDhamYatra,
  otherTourPackages,
} from "./ui/Card";
import WhyChooseUrbanCruise from "./ui/WhyChooseUrbanCruise";
import Testimonial from "./ui/Testimonial";
import Faqs from "./ui/Faqs";
import VehicleRentalServiceInIndia from "./ui/VehicleRentalServiceInIndia";
import OurTrustedPartner from "./ui/OurTrustedPartner";

export default function DelhiDoDhamPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        location="delhi"
        content={{
          eyebrow: "Do Dham Yatra from Delhi",
          title: "Delhi to Do Dham",
          titleHighlight: "Yatra Package",
          description:
            "Travel from Delhi to Yamunotri and Gangotri on a comfortable, well-planned Do Dham Yatra.",
          backgroundImageAlt: "Do Dham Yatra from Delhi",
          vehiclesImageAlt: "Vehicles for Do Dham Yatra from Delhi",
        }}
        cmsContent={cmsSections?.hero}
      />
      <About location="delhi" content={cmsSections?.about} />
      <HowItWorks location="delhi" content={cmsSections?.howitworks} />
      <VehicleForEveryGroupSize
        location="delhi"
        content={cmsSections?.groupsize}
      />
      <VehicleForEveryOccasion
        location="delhi"
        content={cmsSections?.occasion}
      />
      <Hotels location="delhi" content={cmsSections?.hotels} />
      <VehiclePackage />
      {/* Do Dham Yatra Packages */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="mb-10">
            <div className="mb-2 flex items-center justify-start gap-1.5">
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em]">
                Recommended Stay
              </span>
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            </div>
            <h2 className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Do Dham Yatra Packages
            </h2>
            <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Choose The Right Do Dham Yatra Package For You
            </p>
            <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              We offer two types of Do Dham Yatra packages: the
              Badrinath-Kedarnath tour package and the Gangotri-Yamunotri tour
              package.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {doDhamYatraPackages.map((resort) => (
              <Card key={resort.id} resort={resort} />
            ))}
          </div>
        </div>
      </section>
      {/* Major Starting Point of the Do Dham Yatra */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="mb-10">
            <div className="mb-2 flex items-center justify-start gap-1.5">
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em]">
                Starting Points
              </span>
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            </div>
            <h2 className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Major Starting Point of the Do Dham Yatra
            </h2>
            <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Start Your Sacred Journey from Delhi, Haridwar & Major Cities
            </p>
            <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              Choose a convenient starting point for your Do Dham pilgrimage,
              with journeys available from Delhi, Haridwar, and major cities.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majorStartingPointOfTheDoDhamYatra.map((resort) => (
              <Card key={resort.id} resort={resort} />
            ))}
          </div>
        </div>
      </section>
      {/* Other Tour Packages */}
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="mb-10">
            <div className="mb-2 flex items-center justify-start gap-1.5">
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em]">
                Other Tour Packages
              </span>
              <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            </div>
            <h2 className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-[#142236] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Other Tour Packages
            </h2>
            <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              Explore Our Additional Sacred Journeys
            </p>
            <p className="mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              Choose a convenient starting point for your Do Dham pilgrimage,
              with journeys available from Delhi, Haridwar, and major cities.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherTourPackages.map((resort) => (
              <Card key={resort.id} resort={resort} showCallButton />
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUrbanCruise location="delhi" content={cmsSections?.whychoose} />
      <Testimonial location="delhi" content={cmsSections?.testimonials} />
      <Faqs location="delhi" content={cmsSections?.faq} />
      <VehicleRentalServiceInIndia
        location="delhi"
        content={cmsSections?.servicelocations}
      />
      <OurTrustedPartner content={cmsSections?.partners} />
    </div>
  );
}
