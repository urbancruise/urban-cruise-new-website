import {
  FaChartLine,
  FaLaptopCode,
  FaUsers,
  FaBullhorn,
  FaTruck,
  FaCalculator,
  FaBus,
} from "react-icons/fa";

const departments = [
  {
    icon: FaChartLine,
    title: "Sales",
    text: "Connect with customers, understand their travel needs and drive business growth.",
    href: "https://urbancruise.in/delhi/career-sales-jobs",
  },
  {
    icon: FaLaptopCode,
    title: "IT",
    text: "Build technology, products and digital systems that power Urban Cruise.",
    href: "https://urbancruise.in/delhi/it-career-at-urban-cruise/",
  },
  {
    icon: FaUsers,
    title: "Human Resources",
    text: "Build teams, support people and create a workplace where talent can thrive.",
    href: "https://urbancruise.in/delhi/hr-career-at-urban-cruise/",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    text: "Grow our online presence through content, campaigns, SEO and digital experiences.",
    href: "https://urbancruise.in/delhi/digital-marketing-career-at-urban-cruise/",
  },
  {
    icon: FaTruck,
    title: "Operations",
    text: "Make every journey smooth by coordinating vehicles, partners and travel operations.",
    href: "https://urbancruise.in/delhi/operations-career-at-urban-cruise/",
  },
  {
    icon: FaCalculator,
    title: "Accounts & Finance",
    text: "Manage financial operations, reporting, accounting and business controls.",
    href: "https://urbancruise.in/delhi/finance-accountant-career-at-urban-cruise/",
  },
];

export default function Perks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#03C35E]/40 bg-white px-4 py-1.5 text-sm font-semibold text-[#03C35E]">
            <FaBus />
            Our Departments
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#142236] md:text-5xl">
            Find your <span className="text-[#03C35E]">team</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you love driving, selling, planning or building technology, there is a team
            at Urban Cruise where your skills can take us, and your career, further.
          </p>
        </div>

        {/* Flip cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ icon: Icon, title, text, href }, i) => (
            <a
              key={title}
              href={href}
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

                  <h3 className="relative mt-auto text-2xl font-bold text-[#142236]">
                    {title}
                  </h3>

                  {/* mobile: no flip, so show description + CTA here */}
                  <p className="relative mt-2 text-sm leading-relaxed text-gray-600 md:hidden">
                    {text}
                  </p>
                  <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#03C35E] md:hidden">
                    Explore Department <span aria-hidden>→</span>
                  </span>

                  {/* desktop hint */}
                  <span className="relative mt-2 hidden items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 md:inline-flex">
                    Hover to explore
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
                      Department
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">{text}</p>
                  </div>

                  <span className="relative inline-flex w-fit items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#142236]">
                    Explore Department
                    <span
                      aria-hidden
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03C35E] text-white"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}