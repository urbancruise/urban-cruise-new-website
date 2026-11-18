// app/components/about-us/ui/OfficesTeam.tsx
import Image from "next/image";

export interface Office {
  city: string;
  label?: string; // e.g. "Head Office"
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
  mapUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface OfficesTeamProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    intro?: string;
    offices?: Office[];
    teamTitle?: string;
    team?: TeamMember[];
  };
}

const DEFAULT_OFFICES: Office[] = [
  {
    city: "Delhi",
    label: "Head Office",
    address: "Your office address, Delhi, India",
    phone: "+91 00000 00000",
    email: "info@urbancruise.in",
    hours: "Mon - Sun, 24/7",
  },
  {
    city: "Ghaziabad",
    label: "Branch Office",
    address: "Your branch address, Ghaziabad, Uttar Pradesh",
    phone: "+91 00000 00000",
    email: "info@urbancruise.in",
    hours: "Mon - Sat, 9:00 AM - 8:00 PM",
  },
];

const DEFAULT_TEAM: TeamMember[] = [
  { name: "Team Member One", role: "Founder & CEO" },
  { name: "Team Member Two", role: "Operations Manager" },
  { name: "Team Member Three", role: "Fleet Manager" },
  { name: "Team Member Four", role: "Customer Support Lead" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function OfficesTeam({ content }: OfficesTeamProps) {
  const eyebrow = content?.eyebrow?.trim() || "Our offices & team";
  const title = content?.title?.trim() || "Meet the people";
  const titleHighlight = content?.titleHighlight?.trim() || "behind every ride";
  const intro =
    content?.intro?.trim() ||
    "Visit us at one of our offices or reach out to our team. We are always happy to help you plan your journey.";
  const offices = content?.offices?.length ? content.offices : DEFAULT_OFFICES;
  const teamTitle = content?.teamTitle?.trim() || "Our Team";
  const team = content?.team?.length ? content.team : DEFAULT_TEAM;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-8 bg-gray-400/60 sm:block" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#03C35E] sm:text-sm">
              {eyebrow}
            </span>
            <span className="hidden h-px w-8 bg-gray-400/60 sm:block" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#142236] sm:text-4xl lg:text-[42px]">
            {title} <span className="text-[#03C35E]">{titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {intro}
          </p>
        </div>

        {/* Offices */}
        <div className="grid gap-6 md:grid-cols-2">
          {offices.map((o, i) => (
            <div
              key={`${o.city}-${i}`}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-[#142236]">{o.city}</h3>
                {o.label && (
                  <span className="rounded-full bg-[#03C35E]/10 px-3 py-1 text-xs font-bold text-[#03C35E]">
                    {o.label}
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#142236]">Address:</span>
                  <span>{o.address}</span>
                </li>
                {o.phone && (
                  <li className="flex gap-3">
                    <span className="font-semibold text-[#142236]">Phone:</span>
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="hover:text-[#03C35E]"
                    >
                      {o.phone}
                    </a>
                  </li>
                )}
                {o.email && (
                  <li className="flex gap-3">
                    <span className="font-semibold text-[#142236]">Email:</span>
                    <a href={`mailto:${o.email}`} className="hover:text-[#03C35E]">
                      {o.email}
                    </a>
                  </li>
                )}
                {o.hours && (
                  <li className="flex gap-3">
                    <span className="font-semibold text-[#142236]">Hours:</span>
                    <span>{o.hours}</span>
                  </li>
                )}
              </ul>

              {o.mapUrl && (
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#03C35E] hover:underline"
                >
                  View on map <span aria-hidden>→</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#142236] sm:text-3xl">
            {teamTitle}
          </h3>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {team.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-[#03C35E]/10 sm:h-28 sm:w-28">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-2xl font-extrabold text-[#03C35E]">
                      {initials(m.name)}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-base font-semibold text-[#142236]">
                  {m.name}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}