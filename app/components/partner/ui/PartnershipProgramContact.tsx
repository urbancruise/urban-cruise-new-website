import {
  FaUserPlus,
  FaClipboardCheck,
  FaBus,
  FaFileSignature,
} from "react-icons/fa";

interface PartnershipProgramContactProps {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
  };
}

const steps = [
  {
    icon: FaUserPlus,
    title: "Vendor Registration",
    text: "Register your business with Urban Cruise by sharing your company, contact and vehicle details.",
  },
  {
    icon: FaClipboardCheck,
    title: "Vehicle Audit",
    text: "Our team inspects your vehicles for safety, condition and documentation before onboarding.",
  },
  {
    icon: FaBus,
    title: "Vehicle Attachment",
    text: "Once approved, your vehicles are attached to our platform and start receiving bookings.",
  },
  {
    icon: FaFileSignature,
    title: "Rates & Service Level Agreement",
    text: "Agree on transparent rates and service terms, then start maximizing earnings from your vehicles.",
  },
];

export default function PartnershipProgramContact({
  content,
}: PartnershipProgramContactProps) {
  const eyebrow = content?.eyebrow || "Partnership Program";
  const title = content?.title || "Steps to become";
  const titleHighlight = content?.titleHighlight || "our partner";
  const description =
    content?.description ||
    "From 1 city to 7 cities now, we are growing rapidly and need partners passionate about travelling, with an innate desire to change the bus rental landscape in India. Join us and maximize earnings from your vehicles.";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#03C35E]/40 bg-white px-4 py-1.5 text-sm font-semibold text-[#03C35E]">
            <FaBus />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#142236] md:text-5xl">
            {title} <span className="text-[#03C35E]">{titleHighlight}</span>
          </h2>
          <p className="mt-4 text-gray-600">{description}</p>
        </div>

        {/* Flip cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              tabIndex={0}
              className="group block outline-none md:h-[290px] md:[perspective:1200px]"
            >
              <div className="relative h-full transition-transform duration-700 ease-out md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-visible:[transform:rotateY(180deg)]">
                {/* FRONT */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:absolute md:inset-0 md:[backface-visibility:hidden]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-5 select-none text-8xl font-black text-gray-100"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#03C35E] text-white shadow-lg shadow-[#03C35E]/30">
                    <Icon size={26} aria-hidden />
                  </span>

                  <h3 className="relative mt-auto text-xl font-bold text-[#142236]">
                    {title}
                  </h3>

                  {/* mobile: no flip, so show description here */}
                  <p className="relative mt-2 text-sm leading-relaxed text-gray-600 md:hidden">
                    {text}
                  </p>

                  {/* desktop hint */}
                  <span className="relative mt-2 hidden items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 md:inline-flex">
                    Hover for details
                    <span aria-hidden className="h-px w-8 bg-gray-300" />
                  </span>
                </div>

                {/* BACK (desktop only) */}
                <div className="absolute inset-0 hidden flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#03C35E] to-[#029a4a] p-7 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] md:flex">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-white/10"
                  />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      Step {i + 1} of {steps.length}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                      {text}
                    </p>
                  </div>

                  <span className="relative inline-flex w-fit items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#142236]">
                    Step {i + 1}
                    <span
                      aria-hidden
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03C35E] text-white"
                    >
                      {i + 1}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}