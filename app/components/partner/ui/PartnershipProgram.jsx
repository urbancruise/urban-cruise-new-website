// app/components/partner/ui/PartnershipProgram.jsx
import Image from "next/image";

const defaultSteps = [
  {
    title: "Vendor registration",
    description: "Sign up with your business details.",
  },
  {
    title: "Vehicle audit",
    description: "We inspect safety and condition.",
  },
  {
    title: "Vehicle attachment",
    description: "Add your fleet to our platform.",
  },
  {
    title: "Rates and service level agreement",
    description: "Agree on pricing and terms.",
  },
];

export default function PartnershipProgram({ content }) {
  const eyebrow = content?.eyebrow?.trim() || "Partnership program";
  const title = content?.title?.trim() || "Four steps to start earning";
  const titleHighlight =
    content?.titleHighlight?.trim() || "with your vehicles";
  const steps = content?.steps?.length ? content.steps : defaultSteps;
  const statValue = content?.statValue?.trim() || "1 to 7";
  const statLabel = content?.statLabel?.trim() || "cities in a short time";
  const paragraph =
    content?.paragraph?.trim() ||
    "We are growing rapidly and need partners who are passionate about travel and want to change the bus rental landscape in India. Join us and maximize earnings from your vehicles.";
  const image = content?.image?.trim() || "/images/partnership/team-meeting.webp";
  const imageAlt =
    content?.imageAlt?.trim() || "Urban Cruise team meeting with fleet partners";
  const badgeText = content?.badgeText?.trim() || "7 cities and growing";

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8">
        {/* Text + steps */}
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

          <ol className="relative mt-8 space-y-3">
            <span
              aria-hidden
              className="absolute bottom-8 left-[2.1rem] top-8 w-0.5 bg-[#03C35E]/20"
            />
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#03C35E] text-base font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#142236]">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Image + stat + CTA */}
        <div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-[#03C35E] px-5 py-3 text-white shadow-lg sm:right-6">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="text-sm font-semibold">{badgeText}</span>
            </div>
          </div>

          <div className="mt-10 flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-[#03C35E]">
              {statValue}
            </span>
            <span className="text-gray-600">{statLabel}</span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}