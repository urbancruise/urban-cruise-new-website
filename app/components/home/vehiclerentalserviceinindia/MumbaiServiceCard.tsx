"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type {
  ServiceCityItem,
  VehicleRentalServiceContent,
} from "@/app/components/VehicleRentalServiceInIndiaSelector";

const FALLBACK_CITIES: ServiceCityItem[] = [
  {
    name: "Delhi",
    state: "Delhi NCR",
    image: "/images/vehiclerentalserviceinindia/IndiaGate.webp",
    imageAlt: "India Gate, Delhi - Urban Cruise service area",
  },
  {
    name: "Gurugram",
    state: "Haryana",
    image: "/images/vehiclerentalserviceinindia/Gurugram.webp",
    imageAlt: "Gurugram cityscape - Urban Cruise service area",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/GatewayOfIndia.webp",
    imageAlt: "Gateway of India, Mumbai - Urban Cruise service area",
  },
  {
    name: "Pune",
    state: "Maharashtra",
    image: "/images/vehiclerentalserviceinindia/Pune.webp",
    imageAlt: "Pune city - Urban Cruise service area",
  },
];

const CITIES_PER_SLIDE = 4;

interface Props {
  content?: VehicleRentalServiceContent;
}

export default function MumbaiServiceCard({ content }: Props) {
  const cms = content || {};
  const eyebrow = cms.eyebrow || "Service Area";
  const title = cms.title || "TOP PLACES";
  const titleHighlight = cms.titleHighlight || " ";
  const subtitle = cms.subtitle || "Explore our top service locations";
  const description =
    cms.description ||
    "We take pride in delivering comfortable rides, on-time service and memorable journeys for every customer.";
  const cities: ServiceCityItem[] =
    cms.cities && cms.cities.length > 0 ? cms.cities : FALLBACK_CITIES;
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const totalSlides = Math.ceil(cities.length / CITIES_PER_SLIDE);
  const currentSlide = Math.min(slideIndex, totalSlides - 1);
  const visibleCities = cities.slice(
    currentSlide * CITIES_PER_SLIDE,
    (currentSlide + 1) * CITIES_PER_SLIDE,
  );

  useEffect(() => {
    if (totalSlides <= 1 || isHovered || isFocused) return;

    const intervalId = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isFocused, isHovered, totalSlides]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 min-[375px]:py-11 min-[425px]:py-12 sm:py-14 md:py-16 lg:py-10">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 min-[375px]:px-4 min-[425px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid w-full items-start gap-9 min-[375px]:gap-10 min-[425px]:gap-11 sm:gap-12 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-[720px] text-left lg:sticky lg:top-24"
          >
            <div className="mb-3 flex w-full items-center justify-start gap-2 min-[375px]:mb-3.5 min-[375px]:gap-2.5 min-[425px]:mb-4 min-[425px]:gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-4">
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 min-[375px]:w-6 min-[425px]:w-7 sm:w-8 md:w-10 lg:w-9 xl:w-12 2xl:w-14" />
              <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px]">
                {eyebrow}
              </span>
              <span className="block h-px w-5 shrink-0 bg-gray-400/60 min-[375px]:w-6 min-[425px]:w-7 sm:w-8 md:w-10 lg:w-9 xl:w-12 2xl:w-14" />
            </div>

            <h2 className="text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] sm:text-[27px] md:text-[29px]">
              {title}{" "}
              <span className="text-[#188A31]">
                <br />
                {titleHighlight}
              </span>
            </h2>

            <p className="mt-2 max-w-[600px] font-serif text-[21px] italic leading-tight text-[#03C35E] sm:text-[27px] md:text-[29px]">
              {subtitle}
            </p>

            <div className="mt-4 max-w-[620px] space-y-3 text-[10px] leading-[1.7] text-[#303944] min-[375px]:text-[10.5px] min-[425px]:text-[11px] sm:mt-5 sm:text-[11.5px] md:text-xs lg:text-sm xl:text-base">
              <p>{description}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
            role="region"
            aria-label="Service locations"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (
                !(event.relatedTarget instanceof Node) ||
                !event.currentTarget.contains(event.relatedTarget)
              ) {
                setIsFocused(false);
              }
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid w-full grid-cols-1 gap-x-5 gap-y-9 min-[375px]:gap-x-6 min-[375px]:gap-y-10 min-[425px]:gap-x-7 min-[425px]:gap-y-11 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12 lg:gap-x-7 lg:gap-y-10 xl:gap-x-9 xl:gap-y-12 2xl:gap-x-10 2xl:gap-y-14"
                aria-live="polite"
                aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
              >
                {visibleCities.map((city, index) => (
                  <motion.div
                    key={`${city.name}-${city.state}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative mx-auto aspect-[4/3] w-full max-w-[330px] min-[375px]:max-w-[345px] min-[425px]:max-w-[360px] sm:max-w-[340px] md:max-w-[370px] lg:max-w-[390px] xl:max-w-[420px] 2xl:max-w-[440px]"
                  >
                    <div className="absolute left-0 top-0 right-4 bottom-4 flex items-start rounded-2xl bg-white px-3 py-3 shadow-sm min-[375px]:right-5 min-[375px]:bottom-5 min-[375px]:px-4 min-[375px]:py-3.5 min-[425px]:right-5 min-[425px]:bottom-5 min-[425px]:px-4 sm:right-5 sm:bottom-5 sm:px-4 sm:py-3 md:right-6 md:bottom-6 md:px-4 lg:right-6 lg:bottom-6 xl:right-7 xl:bottom-7 xl:px-5 xl:py-4">
                      <p className="min-w-0 truncate text-left text-[9px] font-bold text-[#142236] min-[375px]:text-[9.5px] min-[425px]:text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11px] xl:text-xs 2xl:text-sm">
                        {city.name}, {city.state}
                      </p>
                    </div>

                    <div className="absolute left-6 top-7 right-0 bottom-0 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-xl min-[375px]:left-7 min-[375px]:top-8 min-[425px]:left-8 min-[425px]:top-9 sm:left-6 sm:top-7 md:left-7 md:top-8 lg:left-7 lg:top-8 xl:left-8 xl:top-9">
                      <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        <Image
                          src={city.image}
                          alt={city.imageAlt || `${city.name}, ${city.state}`}
                          fill
                          sizes="(max-width: 374px) 88vw, (max-width: 424px) 86vw, (max-width: 767px) 42vw, (max-width: 1023px) 42vw, (max-width: 1279px) 38vw, (max-width: 1535px) 35vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={currentSlide === 0 && index < 2}
                        />
                        <div className="absolute inset-0 bg-black/15 transition-all duration-300 group-hover:bg-black/20" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {totalSlides > 1 ? (
              <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8">
                <button
                  type="button"
                  onClick={() =>
                    setSlideIndex(
                      (currentSlide - 1 + totalSlides) % totalSlides,
                    )
                  }
                  aria-label="Show previous service locations"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6e8d2] bg-[#e8f4e4] text-[#188A31] shadow-[0_4px_14px_rgba(20,34,54,0.12)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03C35E]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      aria-label={`Show service locations slide ${index + 1}`}
                      aria-current={currentSlide === index ? "true" : undefined}
                      className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03C35E] ${
                        currentSlide === index
                          ? "w-6 bg-[#03C35E]"
                          : "w-2.5 bg-[#03C35E]/30 hover:bg-[#03C35E]/60"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSlideIndex((currentSlide + 1) % totalSlides)}
                  aria-label="Show next service locations"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9417] text-white shadow-[0_4px_14px_rgba(255,148,23,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9417]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}