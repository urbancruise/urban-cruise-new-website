"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// ============================================================
// TYPES
// ============================================================
export interface TrustedPartnerLogo {
  name: string;
  logo: string;
  logoAlt?: string;
  logoPublicId?: string;
}

export interface TrustedPartnerContent {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  logos?: TrustedPartnerLogo[];
}

export interface OurTrustedPartnerProps {
  content?: TrustedPartnerContent;
}

// ============================================================
// FALLBACK DATA
// ============================================================
const FALLBACK_LOGOS: TrustedPartnerLogo[] = [
  { name: "TATA", logo: "/images/ourtrustedpartner/tata.png", logoAlt: "TATA logo" },
  { name: "Infosys", logo: "/images/ourtrustedpartner/infosys.png", logoAlt: "Infosys logo" },
  { name: "Wipro", logo: "/images/ourtrustedpartner/wipro.png", logoAlt: "Wipro logo" },
  { name: "HDFC Bank", logo: "/images/ourtrustedpartner/hdfc.png", logoAlt: "HDFC Bank logo" },
  { name: "ICICI Bank", logo: "/images/ourtrustedpartner/icici.png", logoAlt: "ICICI Bank logo" },
  { name: "Mahindra", logo: "/images/ourtrustedpartner/mahindra.png", logoAlt: "Mahindra logo" },
  { name: "Bajaj", logo: "/images/ourtrustedpartner/bajaj.png", logoAlt: "Bajaj logo" },
  { name: "Adani", logo: "/images/ourtrustedpartner/adani.png", logoAlt: "Adani logo" },
  { name: "LIC", logo: "/images/ourtrustedpartner/lic.png", logoAlt: "LIC logo" },
  { name: "Maruti Suzuki", logo: "/images/ourtrustedpartner/maruti.png", logoAlt: "Maruti Suzuki logo" },
  { name: "Asian Paints", logo: "/images/ourtrustedpartner/asian-paints.png", logoAlt: "Asian Paints logo" },
  { name: "Kotak", logo: "/images/ourtrustedpartner/kotak.png", logoAlt: "Kotak logo" },
];

// ============================================================
// DESKTOP / TABLET COMPANY LOGO
// ============================================================
function CompanyLogo({ company }: { company: TrustedPartnerLogo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-[72px] w-[145px] min-w-[145px] shrink-0 items-center justify-center px-3 sm:h-[82px] sm:w-[170px] sm:min-w-[170px] sm:px-4 md:h-[90px] md:w-[185px] md:min-w-[185px] lg:h-[100px] lg:w-[205px] lg:min-w-[205px] xl:h-[105px] xl:w-[220px] xl:min-w-[220px] 2xl:h-[110px] 2xl:w-[225px] 2xl:min-w-[225px]">
      <div className="relative flex h-[40px] w-[110px] items-center justify-center sm:h-[44px] sm:w-[125px] md:h-[48px] md:w-[140px] lg:h-[54px] lg:w-[150px] xl:h-[58px] xl:w-[160px] 2xl:h-[62px] 2xl:w-[170px]">
        {imageError ? (
          <span className="text-sm font-semibold text-slate-500">{company.name}</span>
        ) : (
          <Image
            src={company.logo}
            alt={company.logoAlt || `${company.name} logo`}
            fill
            sizes="(max-width: 640px) 110px, (max-width: 768px) 125px, (max-width: 1024px) 140px, (max-width: 1280px) 150px, 170px"
            className="object-contain p-1 sm:p-1.5 md:p-2"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================
// MOBILE COMPANY LOGO
// ============================================================
function MobileCompanyLogo({ company }: { company: TrustedPartnerLogo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-[64px] w-[100px] min-w-[100px] shrink-0 items-center justify-center px-1 min-[375px]:h-[68px] min-[375px]:w-[112px] min-[375px]:min-w-[112px] min-[375px]:px-1.5 min-[430px]:h-[72px] min-[430px]:w-[122px] min-[430px]:min-w-[122px] min-[430px]:px-2">
      <div className="relative flex h-[30px] w-[80px] items-center justify-center min-[375px]:h-[34px] min-[375px]:w-[88px] min-[430px]:h-[38px] min-[430px]:w-[98px]">
        {imageError ? (
          <span className="break-words text-center text-[10px] font-semibold text-slate-500 min-[375px]:text-[11px]">
            {company.name}
          </span>
        ) : (
          <Image
            src={company.logo}
            alt={company.logoAlt || `${company.name} logo`}
            fill
            sizes="(max-width: 374px) 80px, (max-width: 429px) 88px, 98px"
            className="object-contain p-1"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================
// DESKTOP / TABLET SLIDER ROW
// ============================================================
function DesktopSliderRow({
  items,
  reverse = false,
}: {
  items: TrustedPartnerLogo[];
  reverse?: boolean;
}) {
  const sliderItems = [...items, ...items];
  if (sliderItems.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          x: { duration: 30, repeat: Infinity, repeatType: "loop", ease: "linear" },
        }}
      >
        {sliderItems.map((company, index) => (
          <CompanyLogo key={`${company.name}-${index}`} company={company} />
        ))}
      </motion.div>
    </div>
  );
}

// ============================================================
// MOBILE SLIDER ROW
// ============================================================
function MobileSliderRow({
  items,
  reverse = false,
}: {
  items: TrustedPartnerLogo[];
  reverse?: boolean;
}) {
  const sliderItems = [...items, ...items];
  if (sliderItems.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          x: { duration: 24, repeat: Infinity, repeatType: "loop", ease: "linear" },
        }}
      >
        {sliderItems.map((company, index) => (
          <MobileCompanyLogo key={`${company.name}-${index}`} company={company} />
        ))}
      </motion.div>
    </div>
  );
}

// ============================================================
// SKYLINE BACKGROUND — renders only if the file exists
// ============================================================
function SkylineBackground() {
  const [missing, setMissing] = useState(false);
  if (missing) return null;

  return (
    <div className="absolute bottom-[190px] left-0 h-[90px] w-full bg-contain bg-bottom bg-no-repeat opacity-[0.10] sm:bottom-[210px] sm:h-[110px] md:bottom-[230px] md:h-[130px] lg:bottom-[260px] lg:h-[170px]" onError={() => setMissing(true)} />
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function OurTrustedPartner({ content }: OurTrustedPartnerProps) {
  const cms: TrustedPartnerContent = content || {};

  const eyebrow = cms.eyebrow || "Our Trusted Partners";
  const title = cms.title || "Trusted by";
  const titleHighlight = cms.titleHighlight || " ";
  const subtitle = cms.subtitle || "India's most trusted travel partner";
  const description =
    cms.description ||
    "We are proud to be the preferred travel partner for leading businesses across India. Our commitment to excellence and reliability has earned us the trust of over 100 companies nationwide.";

  const logos: TrustedPartnerLogo[] =
    cms.logos && cms.logos.length > 0 ? cms.logos : FALLBACK_LOGOS;

  const hasEnoughForTwoRows = logos.length >= 2;
  const mid = Math.ceil(logos.length / 2);
  const rowOne = hasEnoughForTwoRows ? logos.slice(0, mid) : logos;
  const rowTwo = hasEnoughForTwoRows ? logos.slice(mid) : [];

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-white py-8 min-[375px]:py-9 min-[430px]:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16 2xl:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-[180px] w-[320px] -translate-x-1/2 rounded-full bg-[#087F35]/[0.025] blur-3xl sm:top-20 sm:h-[220px] sm:w-[420px] md:h-[260px] md:w-[520px] lg:h-[300px] lg:w-[600px]" />
        <SkylineBackground />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] overflow-hidden px-3 min-[375px]:px-4 min-[430px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-6 grid w-full items-center gap-4 overflow-hidden rounded-lg bg-white p-4 min-[375px]:mb-7 min-[375px]:gap-5 min-[375px]:p-5 min-[430px]:mb-8 min-[430px]:gap-6 min-[430px]:p-6 sm:mb-10 sm:gap-8 sm:p-8 md:mb-12 md:gap-9 lg:mb-14 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:bg-cover lg:bg-center lg:bg-no-repeat xl:mb-16 xl:p-10 2xl:mb-20 2xl:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-16 w-1/2 bg-contain bg-right-bottom bg-no-repeat opacity-[0.12] min-[375px]:h-[72px] min-[430px]:h-20 sm:hidden"
            style={{ backgroundImage: "url('/images/ourtrustedpartner/1.png')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
            style={{ backgroundImage: "url('/images/ourtrustedpartner/1.png')" }}
          />
          <div className="relative z-10 w-full max-w-[720px] min-w-0 text-left">
            <div className="mb-2.5 flex w-full items-center justify-start gap-1.5 min-[375px]:mb-3 min-[375px]:gap-2 min-[430px]:mb-3.5 min-[430px]:gap-2.5 sm:mb-4 sm:gap-3 md:gap-3.5 lg:gap-4">
              <span className="block h-px w-4 shrink-0 bg-gray-400/60 min-[375px]:w-5 min-[430px]:w-6 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
              <span className="max-w-[calc(100%-2rem)] text-center text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] sm:max-w-none sm:whitespace-nowrap sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px]">
                {eyebrow}
              </span>
              <span className="block h-px w-4 shrink-0 bg-gray-400/60 min-[375px]:w-5 min-[430px]:w-6 sm:w-7 md:w-9 lg:w-11 xl:w-12 2xl:w-14" />
            </div>

            <h2 className="max-w-full text-[21px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236] sm:text-[27px] md:text-[29px]">
              {title}{" "}
              <span className="text-[#188A31]">
                <br />
                {titleHighlight}
              </span>
            </h2>

            <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] sm:text-[27px] md:text-[29px]">
              {subtitle}
            </p>

            <div className="relative z-10 mt-3 max-w-[530px] space-y-2 text-[10.5px] leading-[1.65] text-[#303944] min-[375px]:mt-3.5 min-[375px]:text-[11px] min-[430px]:text-[11.5px] sm:mt-4 sm:text-[11px] md:mt-5 md:text-xs lg:text-sm xl:text-base">
              <p>{description}</p>
            </div>
          </div>

          <div className="relative hidden w-full items-center justify-center lg:flex lg:justify-end" />
        </motion.div>

        <div className="relative mx-auto w-full max-w-[1140px] overflow-hidden rounded-[16px] bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.07)] backdrop-blur-sm min-[375px]:rounded-[18px] sm:rounded-[20px] lg:rounded-[24px]">
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-5 bg-gradient-to-r from-white to-transparent min-[375px]:w-7 min-[430px]:w-8 sm:w-10 md:w-12 lg:w-16" />
          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-5 bg-gradient-to-l from-white to-transparent min-[375px]:w-7 min-[430px]:w-8 sm:w-10 md:w-12 lg:w-16" />

          <div className="hidden md:block">
            <DesktopSliderRow items={rowOne} />
            {rowTwo.length > 0 && (
              <>
                <div className="h-px w-full bg-[#e5e9e5]" />
                <DesktopSliderRow items={rowTwo} reverse />
              </>
            )}
          </div>

          <div className="block md:hidden">
            <MobileSliderRow items={rowOne} />
            {rowTwo.length > 0 && (
              <>
                <div className="h-px w-full bg-[#e5e9e5]" />
                <MobileSliderRow items={rowTwo} reverse />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}