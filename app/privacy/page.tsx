// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { sections, contact, EFFECTIVE_DATE } from "../components/privacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Urban Cruise – Car & Bus Rentals",
  description:
    "How Urban Cruise collects, uses, shares, and protects your personal information when you browse our website or book a car or bus rental.",
  alternates: { canonical: "/privacy-policy" },
};

/* ───────────── Hero (same file) ───────────── */
interface PrivacyHeroProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
    backgroundImage?: string;
    backgroundImageAlt?: string;
    vehiclesImage?: string;
    vehiclesImageAlt?: string;
  };
}

function PrivacyHero({ content }: PrivacyHeroProps) {
  const eyebrow = content?.eyebrow?.trim() || "Urban Cruise bus & car rental";
  const title = content?.title?.trim() || "Privacy Policy";
  const titleHighlight =
    content?.titleHighlight?.trim() || "Your data, protected";
  const description =
    content?.description?.trim() ||
    "Learn how Urban Cruise collects, uses, and safeguards your personal information when you browse our website or book a car, tempo traveller, or bus rental.";
  const bgImage = content?.backgroundImage?.trim() || "/images/hero/herobg.webp";
  const vehiclesImage =
    content?.vehiclesImage?.trim() || "/images/hero/3 images.webp";

  const bgImageAlt =
    content?.backgroundImageAlt?.trim() || "Urban Cruise Privacy Policy";
  const vehiclesImageAlt =
    content?.vehiclesImageAlt?.trim() ||
    "Premium cars and buses available for rental in Delhi";

  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full overflow-hidden aspect-[3/4] xs:aspect-[4/5] sm:aspect-[16/12] md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[21/10]">
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30%] bg-gradient-to-b from-transparent via-white/70 to-white sm:h-[28%] md:h-[26%] lg:h-[24%] xl:h-[22%]" />

        <div className="absolute left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 top-[18%] xs:top-[19%] sm:top-[21%] md:top-[20%] lg:top-[19%] xl:top-[20%]">
          <div className="flex max-w-full items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 mb-1 xs:mb-1.5 sm:mb-2 md:mb-2.5">
            <span className="hidden sm:block w-6 md:w-8 lg:w-10 h-px bg-gray-400/60" />
            <span className="text-[8px] xs:text-[9px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] tracking-[0.15em] xs:tracking-[0.17em] sm:tracking-[0.2em] md:tracking-[0.22em] lg:tracking-[0.25em] xl:tracking-[0.28em] font-bold text-[#03C35E] uppercase whitespace-nowrap">
              {eyebrow}
            </span>
            <span className="hidden sm:block w-6 md:w-8 lg:w-10 h-px bg-gray-400/60" />
          </div>

          <h1 className="max-w-4xl xs:max-w-4xl sm:max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl text-center text-[24px] xs:text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[50px] 2xl:text-[58px] leading-[1.06] xs:leading-[1.04] sm:leading-[1.02] md:leading-[1] lg:leading-[0.98] font-extrabold tracking-[-0.02em] xs:tracking-[-0.025em] sm:tracking-[-0.03em] md:tracking-[-0.035em] text-[#142236] px-2">
            {title}
            <br />
            <span className="text-[#03C35E]">{titleHighlight}</span>
          </h1>

          <p className="max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mt-1.5 xs:mt-2 sm:mt-1.5 md:mt-2 lg:mt-2.5 px-3 xs:px-4 text-[11px] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base leading-relaxed font-medium text-gray-600">
            {description}
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center px-2 sm:px-4 top-[52%] xs:top-[51%] sm:top-[30%] md:top-[26%] lg:top-[36%] xl:top-[34%]">
          <div className="relative w-full mx-auto max-w-[400px] xs:max-w-[400px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[960px] 2xl:max-w-[1080px] aspect-[1080/520] scale-[1.15] xs:scale-[1.15] sm:scale-[1.12] md:scale-[1.12] lg:scale-[1.1] xl:scale-[1.1] 2xl:scale-[1.08]">
            <Image
              src={vehiclesImage}
              alt={vehiclesImageAlt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1080px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-white" />
    </section>
  );
}

/* ───────────── Table of contents list (reused) ───────────── */
function TocList() {
  return (
    <ol className="space-y-0.5 border-l border-gray-200">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-gray-600 transition-colors hover:border-[#03C35E] hover:text-[#03C35E] focus-visible:border-[#03C35E] focus-visible:text-[#03C35E] focus-visible:outline-none"
          >
            {i + 1}. {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

/* ───────────── Page ───────────── */
export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-clip bg-white">
      <PrivacyHero />

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <p className="mb-6 text-xs text-gray-500 sm:mb-8 sm:text-sm">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-14">
          {/* Mobile + tablet: collapsible contents */}
          <details className="group mb-8 rounded-lg border border-gray-200 bg-gray-50 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-[#142236] [&::-webkit-details-marker]:hidden">
              On this page
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <nav
              aria-label="Privacy policy sections"
              className="border-t border-gray-200 px-4 py-3"
            >
              <TocList />
            </nav>
          </details>

          {/* Desktop: sticky contents */}
          <nav
            aria-label="Privacy policy sections"
            className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-3 [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            <p className="mb-3 text-sm font-semibold text-[#142236]">
              On this page
            </p>
            <TocList />
          </nav>

          {/* Content */}
          <article className="min-w-0 max-w-3xl break-words">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20 border-b border-gray-100 py-6 first:pt-0 last:border-b-0 sm:py-8 lg:scroll-mt-24"
              >
                <h2 className="text-xl font-semibold leading-snug text-[#142236] sm:text-2xl">
                  {i + 1}. {section.title}
                </h2>

                {section.intro?.map((p, idx) => (
                  <p
                    key={idx}
                    className="mt-3 text-sm leading-7 text-gray-700 sm:mt-4 sm:text-[15px]"
                  >
                    {p}
                  </p>
                ))}

                {section.items?.map((item) => (
                  <div key={item.heading} className="mt-5 sm:mt-6">
                    <h3 className="text-base font-semibold leading-snug text-[#03C35E] sm:text-lg">
                      {item.heading}
                    </h3>
                    {item.body.map((p, idx) => (
                      <p
                        key={idx}
                        className="mt-2 text-sm leading-7 text-gray-700 sm:text-[15px]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}

                {section.id === "contact-information" && (
                  <address className="mt-5 space-y-2 rounded-lg border border-[#03C35E]/20 bg-[#03C35E]/5 p-4 text-sm not-italic text-gray-800 sm:mt-6 sm:p-5 sm:text-[15px]">
                    <p className="font-semibold">{contact.name}</p>
                    <p>{contact.location}</p>
                    <p>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-[#03C35E] hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={contact.website}
                        className="break-all text-[#03C35E] hover:underline"
                      >
                        {contact.website.replace("https://", "")}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="break-all text-[#03C35E] hover:underline"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </address>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}