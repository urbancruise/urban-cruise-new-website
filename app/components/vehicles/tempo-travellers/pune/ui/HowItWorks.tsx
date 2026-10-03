// // app/components/vehicles/cars-suvs/delhi/ui/HowItWorks.tsx

"use client";

import Image from "next/image";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

const FALLBACK_STEPS = [
  {
    number: "01",
    title: "ENQUIRY",
    description:
      "Share your Travel Plan with us through Call, Email, WhatsApp, or Request a Quote",
    image: "/images/howitworks/1st.webp",
    color: GREEN,
  },
  {
    number: "02",
    title: "SELECT VEHICLE",
    description:
      "Our Team will provide Best Suitable Vehicle Options with Best Value Pricing.",
    image: "/images/howitworks/2nd.webp",
    color: ORANGE,
  },
  {
    number: "03",
    title: "BOOK VEHICLE",
    description:
      "Book our Economy to Royal Quality Vehicles on Rent & Enjoy a memorable journey.",
    image: "/images/howitworks/3rd.webp",
    color: GREEN,
  },
];

interface HowItWorksProps {
  content?: any;
}

export default function HowItWorks({ content }: HowItWorksProps) {
  const eyebrow = content?.eyebrow || "How It Works";
  const title = content?.title || "HOW IT";
  const titleHighlight = content?.titleHighlight || "WORKS";
  const subtitle = content?.subtitle || "Simple Steps, Smooth Journey";
  const description =
    content?.description ||
    "Booking your perfect ride with Urban Cruise is simple and hassle-free. Just follow three easy steps to get started.";

  const steps =
    Array.isArray(content?.steps) && content.steps.length > 0
      ? content.steps.map((s: any, i: number) => ({
          number: s.number || String(i + 1).padStart(2, "0"),
          title: s.title || "",
          description: s.description || "",
          image: s.image || FALLBACK_STEPS[i]?.image || "",
          color: i % 2 === 0 ? GREEN : ORANGE,
        }))
      : FALLBACK_STEPS;

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-b from-white via-white/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-14 w-full max-w-[650px] text-left sm:mb-16 md:mb-20">
          <div className="mb-4 flex w-full items-center justify-start gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[9px] xs:tracking-[0.17em] sm:text-[9px] sm:tracking-[0.2em] md:text-[10px] md:tracking-[0.22em] lg:text-[11px] lg:tracking-[0.25em] xl:text-xs">
              {eyebrow}
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[24px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[50px] 2xl:text-[58px]">
            {title} <span className="text-[#188A31]">{titleHighlight}</span>
          </h2>

          <p className="mt-3 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            {subtitle}
          </p>

          <div className="mt-5 max-w-[590px] space-y-3 text-[10px] leading-[1.75] text-[#303944] xs:space-y-4 xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
            <p>{description}</p>
          </div>
        </div>

        <div className="relative pt-10 md:pt-12">
          <div className="relative z-0 bottom-18 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-9 xl:gap-10">
            {steps.map((step: any) => (
              <div key={step.number} className="group relative flex flex-col items-center">
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
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 30vw, 400px"
                        className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
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
