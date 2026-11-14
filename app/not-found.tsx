import Link from "next/link";
import Image from "next/image";

const GREEN = "#6abf0a";

const features = [
  {
    title: "Premium Fleet",
    text: "Wide range of well-maintained vehicles.",
    icon: <path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM7 13h.01M17 13h.01" />,
  },
  {
    title: "Safe & Reliable",
    text: "Your safety is our top priority.",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
        <path d="M8.5 12l2.5 2.5L16 9.5" />
      </>
    ),
  },
  {
    title: "24/7 Support",
    text: "We're here to help you anytime, anywhere.",
    icon: (
      <>
        <path d="M4 14v-2a8 8 0 0116 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="1.5" />
        <rect x="17" y="14" width="4" height="6" rx="1.5" />
        <path d="M19 20c0 1.5-2 2-5 2" />
      </>
    ),
  },
];

function Icon({
  children,
  className = "h-6 w-6",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={GREEN}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* "0" digit with a road + location pin inside */
function RoadZero() {
  return (
    <svg
      viewBox="0 0 120 150"
      className="mx-1 h-[0.7em] w-auto"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="zero-inner">
          <ellipse cx="60" cy="75" rx="32" ry="52" />
        </clipPath>
      </defs>
      {/* outer ring of the zero */}
      <ellipse
        cx="60"
        cy="75"
        rx="44"
        ry="64"
        stroke="#262b33"
        strokeWidth="26"
      />
      {/* road inside the zero */}
      <g clipPath="url(#zero-inner)">
        <path
          d="M10 135 C45 105 66 92 56 48 L68 48 C78 90 72 108 110 135 Z"
          fill="#3a3f47"
        />
        <path
          d="M38 135 C56 108 64 92 62 52"
          stroke={GREEN}
          strokeWidth="3"
          strokeDasharray="8 7"
          strokeLinecap="round"
        />
      </g>
      {/* pin */}
      <path
        d="M62 8c-7 0-12 5-12 11 0 8 12 19 12 19s12-11 12-19c0-6-5-11-12-11z"
        fill={GREEN}
      />
      <circle cx="62" cy="19" r="4" fill="#fff" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="relative isolate min-h-screen overflow-hidden bg-white"
    >
      {/* Right side background image (bus + city + road) */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[65%]">
        <Image
          src="/images/404-bus.webp"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
        {/* white fade so image blends with the left content */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/10" />
        {/* mobile: lighten the image so text stays readable */}
        <div className="absolute inset-0 bg-white/70 lg:hidden" />
      </div>

      {/* pt = space for header, pb = space for the bottom card */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-56 pt-40 lg:px-12 lg:pt-44">
        {/* Left content */}
        <div className="max-w-xl">
          {/* 404 */}
          <div
            className="flex items-center text-[8rem] font-black leading-none text-[#262b33] sm:text-[11rem]"
            aria-hidden="true"
          >
            <span>4</span>
            <RoadZero />
            <span>4</span>
          </div>

          <h1
            id="not-found-title"
            className="mt-4 text-4xl font-bold text-[#262b33] sm:text-5xl"
          >
            <span style={{ color: GREEN }}>Oops!</span> Page Not Found
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            Looks like you&apos;ve taken a wrong turn.
            <br />
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-3.5 text-sm font-semibold uppercase text-white shadow-md transition hover:brightness-95"
              style={{ backgroundColor: GREEN }}
            >
              <span aria-hidden="true">←</span> Go Back Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-xl border bg-white px-8 py-3.5 text-sm font-semibold uppercase text-[#262b33] transition hover:bg-gray-50"
              style={{ borderColor: GREEN }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="#262b33"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
              Explore Services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-800">
            <Icon>
              <path d="M4 14v-2a8 8 0 0116 0v2" />
              <rect x="3" y="14" width="4" height="6" rx="1.5" />
              <rect x="17" y="14" width="4" height="6" rx="1.5" />
            </Icon>
            <span>Need Help? Contact us anytime.</span>
            <a
              href="tel:+919876543210"
              className="font-bold"
              style={{ color: GREEN }}
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Bottom feature card - 10 (40px) from the bottom, centered */}
      <section
        aria-label="Why choose Urban Cruise"
        className="absolute bottom-10 left-1/2 z-10 grid w-[calc(100%-3rem)] max-w-4xl -translate-x-1/2 gap-6 rounded-2xl bg-white p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.10)] md:grid-cols-3 md:gap-0"
      >
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`flex items-center gap-4 md:px-6 ${
              i !== 0 ? "md:border-l md:border-gray-200" : ""
            }`}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white">
              <Icon>{f.icon}</Icon>
            </span>
            <div>
              <h2 className="text-sm font-semibold" style={{ color: GREEN }}>
                {f.title}
              </h2>
              <p className="mt-1 text-xs leading-snug text-gray-600">
                {f.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}