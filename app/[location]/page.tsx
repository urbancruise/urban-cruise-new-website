// app/[location]/page.tsx
import { notFound } from "next/navigation";
import {
  isValidLocation,
  formatLocationName,
} from "@/app/lib/location";

import HeroSelector from "@/app/components/HeroSelector";
import AboutSelector from "@/app/components/AboutSelector";
import HowItWorksSelector from "@/app/components/HowItWorksSelector";

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function LocationHome({
  params,
}: LocationPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  const features = [
    {
      title: "Premium Service",
      desc: "Top-notch service and attention to detail",
      icon: "⭐",
    },
    {
      title: "Expert Guides",
      desc: "Knowledgeable local guides",
      icon: "🎯",
    },
    {
      title: "Best Experience",
      desc: "Create lasting memories",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">

          {/* HERO */}
      <HeroSelector />

          {/* ABOUT */}
      <AboutSelector />

          {/* HOW IT WORKS */}
      <HowItWorksSelector />

          {/* FEATURES */}
      <section
        className=" bg-[#F5F2E9] py-12 xs:py-14 sm:py-16 md:py-20">

        <div
          className=" mx-auto max-w-7xl px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          <h2
            className=" mb-3 text-center text-2xl font-bold text-gray-900 xs:mb-4 xs:text-3xl sm:text-4xl">
            Why Choose Us in {formatLocationName(location)}
          </h2>

          <p
            className=" mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 xs:mb-10 xs:text-base sm:mb-12">
            Experience the best urban cruising service in{" "}
            {formatLocationName(location)} with our premium fleet
            and professional drivers.
          </p>

          <div
            className=" grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className=" rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xs:p-6 sm:p-8">
                <div
                  className=" mb-3 text-3xl xs:mb-4 xs:text-4xl sm:text-5xl">
                  {feature.icon}
                </div>

                <h3
                  className=" mb-1.5 text-base font-semibold text-gray-900 xs:mb-2 xs:text-lg sm:text-xl">
                  {feature.title}
                </h3>

                <p
                  className=" text-sm text-gray-600 xs:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


