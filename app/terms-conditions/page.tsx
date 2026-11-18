// app/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import {
  groups,
  itActNotice,
  grievanceOfficer,
  grievanceClosing,
  EFFECTIVE_DATE,
  LAST_UPDATED,
  type Clause,
  type ContactBlock,
} from "../components/termsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Urban Cruise – Car & Bus Rentals",
  description:
    "Read the terms for booking, payments, cancellations, and using Urban Cruise car, tempo traveller, and bus rental services.",
  alternates: { canonical: "/terms-and-conditions" },
};

/* ───────────── Hero (same file) ───────────── */
interface TermsHeroProps {
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

function TermsHero({ content }: TermsHeroProps) {
  const eyebrow = content?.eyebrow?.trim() || "Urban Cruise bus & car rental";
  const title = content?.title?.trim() || "Terms & Conditions";
  const titleHighlight =
    content?.titleHighlight?.trim() || "Clear rules for every trip";
  const description =
    content?.description?.trim() ||
    "Please read these terms before you request a quotation or book a car, tempo traveller, or bus with Urban Cruise. They cover bookings, payments, cancellations, and your responsibilities.";
  const bgImage = content?.backgroundImage?.trim() || "/images/hero/herobg.webp";
  const vehiclesImage =
    content?.vehiclesImage?.trim() || "/images/hero/3 images.webp";

  const bgImageAlt =
    content?.backgroundImageAlt?.trim() || "Urban Cruise Terms & Conditions";
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

/* ───────────── Small pieces ───────────── */
function TocList() {
  return (
    <div className="space-y-5">
      {groups.map((g) => (
        <div key={g.id}>
          <a
            href={`#${g.id}`}
            className="block text-sm font-semibold text-[#142236] hover:text-[#03C35E] focus-visible:text-[#03C35E] focus-visible:outline-none"
          >
            {g.label}. {g.title}
          </a>
          <ol className="mt-2 space-y-0.5 border-l border-gray-200">
            {g.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-gray-600 transition-colors hover:border-[#03C35E] hover:text-[#03C35E] focus-visible:border-[#03C35E] focus-visible:text-[#03C35E] focus-visible:outline-none"
                >
                  {s.numeral}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

const bodyText = "text-sm leading-7 text-gray-700 sm:text-[15px]";

function ClauseItem({ clause }: { clause: Clause }) {
  if (typeof clause === "string") {
    return <li className="pl-1">{clause}</li>;
  }
  return (
    <li className="pl-1">
      {clause.lead && (
        <span className="font-semibold text-[#142236]">{clause.lead} </span>
      )}
      {clause.text}
      {clause.table && (
        <div className="my-4 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <thead className="bg-[#03C35E]/10 text-[#142236]">
              <tr>
                {clause.table.head.map((h) => (
                  <th key={h} className="px-4 py-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clause.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td
                      key={cell}
                      className={`px-4 py-2.5 ${i === 0 ? "font-medium text-[#142236]" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {clause.note && <span className="mt-2 block">{clause.note}</span>}
    </li>
  );
}

function ContactCard({ block }: { block: ContactBlock }) {
  return (
    <div className="mt-5 rounded-lg border border-[#03C35E]/20 bg-[#03C35E]/5 p-4 text-sm text-gray-800 sm:p-5 sm:text-[15px]">
      <p className="font-semibold text-[#142236]">{block.heading}</p>
      <dl className="mt-3 space-y-2">
        {block.lines.map((l) => (
          <div
            key={l.label}
            className="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
          >
            <dt className="w-20 shrink-0 font-medium text-gray-600">
              {l.label}
            </dt>
            <dd className="min-w-0 break-words">
              {l.href ? (
                <a href={l.href} className="text-[#03C35E] hover:underline">
                  {l.value}
                </a>
              ) : (
                l.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ───────────── Page ───────────── */
export default function TermsPage() {
  return (
    <main className="overflow-x-clip bg-white">
      <TermsHero />

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <p className="mb-2 text-xs text-gray-500 sm:text-sm">
          Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated:{" "}
          {LAST_UPDATED}
        </p>
        <p className="mb-6 max-w-3xl rounded-md border-l-4 border-[#03C35E] bg-gray-50 px-4 py-3 text-xs leading-6 text-gray-600 sm:mb-8">
          {itActNotice}
        </p>

        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[18rem_minmax(0,1fr)] xl:gap-14">
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
              aria-label="Terms and conditions sections"
              className="max-h-[60vh] overflow-y-auto border-t border-gray-200 px-4 py-3 [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
            >
              <TocList />
            </nav>
          </details>

          {/* Desktop: sticky contents */}
          <nav
            aria-label="Terms and conditions sections"
            className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-3 [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            <p className="mb-4 text-sm font-semibold text-[#142236]">
              On this page
            </p>
            <TocList />
          </nav>

          {/* Content */}
          <article className="min-w-0 max-w-3xl break-words">
            {groups.map((group) => (
              <div key={group.id}>
                <header
                  id={group.id}
                  className="scroll-mt-20 border-b-2 border-[#03C35E] pb-3 pt-4 lg:scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-[#142236] sm:text-3xl">
                    {group.label}. {group.title}
                  </h2>
                </header>

                {group.paras?.map((p, idx) => (
                  <p key={idx} className={`mt-4 ${bodyText}`}>
                    {p}
                  </p>
                ))}

                {group.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-20 border-b border-gray-100 py-6 last:border-b-0 sm:py-8 lg:scroll-mt-24"
                  >
                    <h3 className="text-lg font-semibold leading-snug text-[#142236] sm:text-xl">
                      <span className="text-[#03C35E]">{section.numeral}.</span>{" "}
                      {section.title}
                    </h3>

                    {section.paras?.map((p, idx) => (
                      <p key={idx} className={`mt-3 ${bodyText}`}>
                        {p}
                      </p>
                    ))}

                    {section.clauses && (
                      <ol
                        className={`mt-3 list-decimal space-y-3 pl-5 marker:font-medium marker:text-[#03C35E] ${bodyText}`}
                      >
                        {section.clauses.map((c, idx) => (
                          <ClauseItem key={idx} clause={c} />
                        ))}
                      </ol>
                    )}

                    {section.contacts?.map((b) => (
                      <ContactCard key={b.heading} block={b} />
                    ))}

                    {section.afterParas?.map((p, idx) => (
                      <p key={idx} className={`mt-4 ${bodyText}`}>
                        {p}
                      </p>
                    ))}

                    {section.id === "a-customer-care" && (
                      <>
                        <ContactCard block={grievanceOfficer} />
                        <p className={`mt-4 ${bodyText}`}>{grievanceClosing}</p>
                      </>
                    )}
                  </section>
                ))}
              </div>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}