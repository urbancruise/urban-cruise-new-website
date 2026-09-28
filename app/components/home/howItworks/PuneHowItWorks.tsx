
"use client";

import Image from "next/image";
import type { HowItWorksSelectorProps } from "../../HowItWorksSelector";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

// ============================================================
// STATIC FALLBACK (Pune-specific copy)
// ============================================================
const FALLBACK = {
  eyebrow: "How It Works",
  title: "HOW IT",
  subtitle: "Simple Steps, Smooth Pune Journeys",
  description:
    "Whether it's a heritage tour, an educational trip, or a weekend escape to Lonavala — booking with Urban Cruise Pune is quick and easy.",
  steps: [
    {
      number: "01",
      title: "PLAN YOUR TRIP",
      description:
        "Share your destination, dates, group size, and any special requests with our team.",
      image: "/images/howitworks/1st.webp",
      color: GREEN,
    },
    {
      number: "02",
      title: "PICK YOUR VEHICLE",
      description:
        "Select from sedans, SUVs, tempo travellers, or luxury buses — with a knowledgeable chauffeur.",
      image: "/images/howitworks/2nd.webp",
      color: ORANGE,
    },
    {
      number: "03",
      title: "HIT THE ROAD",
      description:
        "Confirm your booking and set off. We handle the driving while you enjoy Pune's best sights.",
      image: "/images/howitworks/3rd.webp",
      color: GREEN,
    },
  ],
};

export default function PuneHowItWorks({ content }: HowItWorksSelectorProps) {
  const merged = {
    eyebrow: content?.eyebrow ?? FALLBACK.eyebrow,
    title: content?.title ?? FALLBACK.title,
    subtitle: content?.subtitle ?? FALLBACK.subtitle,
    description: content?.description ?? FALLBACK.description,
    steps:
      Array.isArray(content?.steps) && content!.steps!.length > 0
        ? content!.steps!.map((s, i) => ({
            number: s.number || String(i + 1).padStart(2, "0"),
            title: s.title || "",
            description: s.description || "",
            image: s.image || FALLBACK.steps[i % FALLBACK.steps.length].image,
            color: s.color || (i % 2 === 0 ? GREEN : ORANGE),
          }))
        : FALLBACK.steps,
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20
          bg-gradient-to-b from-white via-white/60 to-transparent
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* HEADER */}
        <div className="mb-14 w-full max-w-[650px] text-left sm:mb-16 md:mb-20">
          <div className="mb-4 flex w-full items-center justify-start gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[9px] xs:tracking-[0.17em] sm:text-[9px] sm:tracking-[0.2em] md:text-[10px] md:tracking-[0.22em] lg:text-[11px] lg:tracking-[0.25em] xl:text-xs">
              {merged.eyebrow}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[24px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[50px] 2xl:text-[58px]">
            {merged.title} <span className="text-[#188A31]">WORKS</span>
          </h2>

          {merged.subtitle && (
            <p className="mt-3 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
              {merged.subtitle}
            </p>
          )}

          {merged.description && (
            <div className="mt-5 max-w-[590px] space-y-3 text-[10px] leading-[1.75] text-[#303944] xs:space-y-4 xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
              <p>{merged.description}</p>
            </div>
          )}
        </div>

        {/* STEPS */}
        <div className="relative pt-10 md:pt-12">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-0 z-10 hidden h-[70px] w-full md:block"
            viewBox="0 0 1320 70"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="wavyConnectorGradientPune"
                x1="0" y1="0" x2="1320" y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor={GREEN} />
                <stop offset="27%" stopColor={GREEN} />
                <stop offset="31%" stopColor={GREEN} />
                <stop offset="36%" stopColor={ORANGE} />
                <stop offset="64%" stopColor={ORANGE} />
                <stop offset="69%" stopColor={GREEN} />
                <stop offset="73%" stopColor={GREEN} />
                <stop offset="100%" stopColor={GREEN} />
              </linearGradient>
            </defs>
            <path
              d="M 0 70 C 75 50, 125 4, 220 4 C 315 4, 350 44, 440 44 C 530 44, 565 4, 660 4 C 755 4, 790 44, 880 44 C 970 44, 1005 4, 1100 4 C 1195 4, 1245 50, 1320 70"
              fill="none"
              stroke="url(#wavyConnectorGradientPune)"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative z-0 bottom-18 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-9 xl:gap-10">
            {merged.steps.map((step, index) => (
              <div
                key={`${step.number}-${index}`}
                className="group relative flex flex-col items-center"
              >
                <div
                  className="relative z-30 mb-[-28px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-white text-[20px] font-black text-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-[80px] sm:w-[80px] sm:text-[22px]"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 6px 14px ${step.color}66`,
                  }}
                >
                  {step.number}
                </div>

                <div
                  className="relative flex min-h-[440px] w-full flex-col items-center overflow-visible rounded-[3rem] bg-white px-5 pb-7 pt-12 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)] sm:px-6 md:min-h-[430px] lg:min-h-[450px] xl:min-h-[460px]"
                  style={{ borderBottom: `4px solid ${step.color}` }}
                >
                  <h3
                    className="mb-4 text-[18px] font-black uppercase tracking-[-0.02em] sm:text-[20px] lg:text-[22px]"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>

                  <div className="relative mx-auto mb-5 flex h-[190px] w-full items-center justify-center sm:h-[210px] md:h-[195px] lg:h-[215px]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 400px"
                      className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                  </div>

                  <p className="mx-auto mt-auto max-w-[280px] text-[14px] font-medium leading-[1.55] text-[#4B5563] sm:text-[15px] lg:text-[16px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2 sm:h-10 lg:h-16 xl:h-20" />
      </div>
    </section>
  );
}
