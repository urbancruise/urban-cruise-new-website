// app/components/about-us/ui/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";

export interface AboutProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    paragraphs?: string[];
    highlights?: string[];
    image?: string;
    imageAlt?: string;
    badgeValue?: string;
    badgeLabel?: string;
    ctaText?: string;
    ctaHref?: string;
  };
}

export default function About({ content }: AboutProps) {
  const eyebrow = content?.eyebrow?.trim() || "Who we are";
  const title = content?.title?.trim() || "Driven by comfort,";
  const titleHighlight =
    content?.titleHighlight?.trim() || "trusted by thousands";
  const paragraphs = content?.paragraphs?.length
    ? content.paragraphs
    : [
        "Urban Cruise is a car, tempo traveller, and bus rental service based in Delhi NCR. We started with a simple goal: make every journey safe, comfortable, and hassle-free.",
        "Whether it is an airport transfer, a family trip, a corporate event, or a wedding, our well-maintained vehicles and professional drivers make sure you arrive on time and relaxed.",
      ];
  const highlights = content?.highlights?.length
    ? content.highlights
    : [
        "Well-maintained, fully insured vehicles",
        "Experienced and verified drivers",
        "Transparent pricing, no hidden charges",
        "24/7 customer support",
      ];
  const image = content?.image?.trim() || "/images/about/about.webp";
  const imageAlt =
    content?.imageAlt?.trim() || "Urban Cruise vehicles and chauffeur service";
  const badgeValue = content?.badgeValue?.trim() || "10+";
  const badgeLabel = content?.badgeLabel?.trim() || "Years of experience";
  const ctaText = content?.ctaText?.trim() || "Book Your Ride";
  const ctaHref = content?.ctaHref?.trim() || "/book";

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-4 rounded-xl bg-[#03C35E] px-5 py-4 text-white shadow-lg sm:right-6">
            <p className="text-3xl font-extrabold leading-none">{badgeValue}</p>
            <p className="mt-1 text-xs font-medium sm:text-sm">{badgeLabel}</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-gray-400/60" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#03C35E] sm:text-sm">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#142236] sm:text-4xl lg:text-[42px]">
            {title}
            <br />
            <span className="text-[#03C35E]">{titleHighlight}</span>
          </h2>

          <div className="mt-5 space-y-4">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {text}
              </p>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/15 text-[#03C35E]">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-[#142236]">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#03C35E] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#02a84f]"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}