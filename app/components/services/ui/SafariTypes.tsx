"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/* ---------- Dial geometry (5 AM → 7 PM across a semicircle) ---------- */
const AXIS_START = 5;
const AXIS_END = 19;
const SPAN = AXIS_END - AXIS_START;
const CX = 220;
const CY = 215;
const R = 170;
const ticks = [6, 9, 12, 15, 18];

type SafariSession = "morning" | "evening";

type SafariTime = {
  start: string;
  end: string;
  startH: number;
  endH: number;
  distance: string;
  capacity: string;
  perPerson: string;
  full: string;
};

type SafariType = {
  id: string;
  name: string;
  icon: string;
  fullLabel: string;
  morning: SafariTime;
  evening: SafariTime;
};

const polar = (h: number, r: number) => {
  const a = Math.PI - ((h - AXIS_START) / SPAN) * Math.PI;
  return { x: CX + r * Math.cos(a), y: CY - r * Math.sin(a) };
};

const fmtHour = (h: number) =>
  `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "AM" : "PM"}`;
const fmtDuration = (h: number) => `${h % 1 ? h.toFixed(1) : h} hrs`;

const arcPath = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;

const stars = [
  { l: "12%", t: "14%", s: 3 },
  { l: "28%", t: "7%", s: 2 },
  { l: "46%", t: "12%", s: 3 },
  { l: "63%", t: "6%", s: 2 },
  { l: "80%", t: "15%", s: 3 },
  { l: "90%", t: "30%", s: 2 },
  { l: "7%", t: "36%", s: 2 },
];

/* ---------- Data ---------- */
const sessions: { id: SafariSession; label: string; icon: string }[] = [
  { id: "morning", label: "Morning", icon: "🌅" },
  { id: "evening", label: "Evening", icon: "🌇" },
];

const safariTypes: SafariType[] = [
  {
    id: "jeep",
    name: "Jeep Safari",
    icon: "🚙",
    fullLabel: "Full Jeep",
    morning: {
      start: "6:00 AM",
      end: "10:00 AM",
      startH: 6,
      endH: 10,
      distance: "25–40 km",
      capacity: "6 persons",
      perPerson: "₹1200 – 1500",
      full: "₹7000 – 7500",
    },
    evening: {
      start: "2:30 PM",
      end: "5:30 PM",
      startH: 14.5,
      endH: 17.5,
      distance: "25–35 km",
      capacity: "6 persons",
      perPerson: "₹1200 – 1500",
      full: "₹7000 – 7500",
    },
  },
  {
    id: "canter",
    name: "Canter Safari",
    icon: "🚌",
    fullLabel: "Full Canter",
    // TODO: replace with your real canter details
    morning: {
      start: "6:00 AM",
      end: "10:00 AM",
      startH: 6,
      endH: 10,
      distance: "20–30 km",
      capacity: "16–20 persons",
      perPerson: "Contact us",
      full: "Contact us",
    },
    evening: {
      start: "2:30 PM",
      end: "5:30 PM",
      startH: 14.5,
      endH: 17.5,
      distance: "20–30 km",
      capacity: "16–20 persons",
      perPerson: "Contact us",
      full: "Contact us",
    },
  },
  {
    id: "elephant",
    name: "Elephant & Walk Safari",
    icon: "🐘",
    fullLabel: "Full Group",
    // TODO: replace with your real elephant / walk safari details
    morning: {
      start: "6:00 AM",
      end: "9:00 AM",
      startH: 6,
      endH: 9,
      distance: "3–8 km",
      capacity: "4–8 persons",
      perPerson: "Contact us",
      full: "Contact us",
    },
    evening: {
      start: "3:00 PM",
      end: "5:30 PM",
      startH: 15,
      endH: 17.5,
      distance: "3–8 km",
      capacity: "4–8 persons",
      perPerson: "Contact us",
      full: "Contact us",
    },
  },
];

/* ---------- Small pieces ---------- */
function Stat({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#E8E8E8] bg-[#F6F8F7] px-4 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#03C35E]/10 text-xl">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
          {label}
        </p>
        <p className="mt-1 text-[16px] font-bold text-[#142236]">{value}</p>
      </div>
    </div>
  );
}

function SkyDial({ d, evening }: { d: SafariTime; evening: boolean }) {
  const startPct = ((d.startH - AXIS_START) / SPAN) * 100;
  const lenPct = ((d.endH - d.startH) / SPAN) * 100;
  const mid = polar((d.startH + d.endH) / 2, R);
  const a = polar(d.startH, R + 30);
  const b = polar(d.endH, R + 30);

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <svg viewBox="0 0 440 250" className="w-full overflow-visible" aria-hidden="true">
        {/* Track */}
        <path
          d={arcPath}
          pathLength="100"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Glowing safari window */}
        <path
          d={arcPath}
          pathLength="100"
          fill="none"
          stroke={evening ? "#F7941E" : "#03C35E"}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={`${lenPct} 200`}
          strokeDashoffset={-startPct}
          style={{
            transition: "stroke-dasharray 0.8s ease, stroke-dashoffset 0.8s ease",
            filter: `drop-shadow(0 0 10px ${evening ? "rgba(247,148,30,0.75)" : "rgba(3,195,94,0.75)"})`,
          }}
        />

        {/* Ticks + labels */}
        {ticks.map((t) => {
          const p = polar(t, R);
          const l = polar(t, R - 26);
          return (
            <g key={t}>
              <circle cx={p.x} cy={p.y} r="2.5" fill="rgba(255,255,255,0.7)" />
              <text
                x={l.x}
                y={l.y + 4}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(255,255,255,0.75)"
              >
                {fmtHour(t)}
              </text>
            </g>
          );
        })}

        {/* Start / End flags */}
        <g style={{ transition: "opacity 0.4s" }}>
          <text
            x={a.x}
            y={a.y}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill={evening ? "#F7941E" : "#03C35E"}
            style={{ transition: "all 0.8s ease" }}
          >
            START
          </text>
          <text
            x={b.x}
            y={b.y}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill={evening ? "#F7941E" : "#03C35E"}
            style={{ transition: "all 0.8s ease" }}
          >
            END
          </text>
        </g>

        {/* Sun / moon orb */}
        <g
          style={{
            transform: `translate(${mid.x}px, ${mid.y}px)`,
            transition: "transform 0.8s cubic-bezier(.4,.1,.2,1)",
          }}
        >
          <circle r="30" fill={evening ? "#F7941E" : "#03C35E"} opacity="0.3" />
          <circle
            r="17"
            fill={evening ? "#F7941E" : "#fff"}
            style={{
              filter: `drop-shadow(0 0 14px ${evening ? "#F7941E" : "#03C35E"})`,
              transition: "fill 0.8s",
            }}
          />
        </g>
      </svg>

      {/* Center readout */}
      <div className="absolute inset-x-0 bottom-3 text-center text-white">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">
          Safari window
        </p>
        <p
          key={`${d.start}-${d.end}`}
          className="mt-1 animate-[dialIn_0.5s_ease] text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          {d.start}{" "}
          <span className={evening ? "text-[#F7941E]" : "text-[#03C35E]"}>→</span>{" "}
          {d.end}
        </p>
        <p className="mt-1 text-[15px] text-white/80">
          {fmtDuration(d.endH - d.startH)} in the jungle
        </p>
      </div>
    </div>
  );
}

/* ---------- Main ---------- */
export default function SafariTypes() {
  const [typeIdx, setTypeIdx] = useState(0);
  const [session, setSession] = useState<SafariSession>("morning");

  const type = safariTypes[typeIdx];
  const d = type[session];
  const evening = session === "evening";

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F6F8F7] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <div className="mb-2 flex w-full items-center justify-start gap-1.5">
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-[#03C35E] xs:text-[10px] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] lg:text-[12px] lg:tracking-[0.25em] xl:text-[13px]">
              SAFARI GUIDE
            </span>
            <span className="block h-px w-6 bg-gray-400/60 sm:w-8 md:w-10 lg:w-12" />
          </div>

          <h2 className="text-[21px] xs:text-[23px] sm:text-[27px] md:text-[29px] font-extrabold leading-[1] tracking-[-0.04em] text-[#142236]">
            Types of Safari in Jim Corbett
          </h2>

          <p className="mt-2 font-serif text-[21px] italic leading-tight text-[#03C35E] xs:text-[23px] sm:text-[27px] md:text-[29px]">
            Find Your Perfect Jungle Adventure
          </p>

          <p
            className={`${robotoCondensed.className} mt-5 max-w-[900px] text-[10px] leading-[1.75] text-[#303944] xs:text-[11px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base`}
          >
            Choose from multiple safari experiences. Advance booking is strongly
            recommended as slots fill up fast.
          </p>
        </div>

        <div className={robotoCondensed.className}>
          {/* Vehicle tabs */}
          <div
            role="tablist"
            aria-label="Safari types"
            className="mt-8 flex flex-wrap justify-start gap-2.5 sm:justify-center sm:gap-3"
          >
            {safariTypes.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={typeIdx === i}
                onClick={() => setTypeIdx(i)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#03C35E]/20 sm:px-6 sm:py-2.5 sm:text-base ${
                  typeIdx === i
                    ? "border-[#F7941E] bg-[#F7941E] text-white shadow-[0_8px_25px_rgba(247,148,30,0.28)]"
                    : "border-[#E8E8E8] bg-white text-[#344054] shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:border-[#03C35E] hover:text-[#03C35E]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                    typeIdx === i
                      ? "bg-white/20 text-white"
                      : "bg-[#03C35E]/10 text-[#03C35E]"
                  }`}
                >
                  {t.icon}
                </span>
                {t.name}
              </button>
            ))}
          </div>

          {/* Main card */}
          <div className="mt-8 grid overflow-hidden rounded-[22px] border border-[#E8E8E8] bg-white shadow-[0_12px_45px_rgba(20,34,54,0.10)] lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT: sky */}
            <div className="relative isolate flex min-h-[390px] flex-col overflow-hidden p-5 sm:min-h-[440px] sm:p-8 lg:min-h-[480px]">
              {/* Sky layers (cross-fade) */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-b from-[#F7941E] via-[#F9A64A] to-[#FBD38D] transition-opacity duration-1000 ${
                  evening ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-b from-[#142236] via-[#087F35] to-[#03C35E] transition-opacity duration-1000 ${
                  evening ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Stars */}
              {stars.map((s, i) => (
                <span
                  key={i}
                  className={`absolute -z-10 rounded-full bg-white transition-opacity duration-1000 ${
                    evening ? "opacity-90" : "opacity-0"
                  }`}
                  style={{ left: s.l, top: s.t, width: s.s, height: s.s }}
                />
              ))}

              {/* Hills */}
              <svg
                viewBox="0 0 600 120"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 -z-10 h-28 w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 120 L0 70 Q80 20 160 60 T330 50 T500 65 T600 40 L600 120 Z"
                  fill="rgba(20,34,54,0.42)"
                />
                <path
                  d="M0 120 L0 95 Q100 60 200 90 T400 85 T600 80 L600 120 Z"
                  fill="rgba(20,34,54,0.78)"
                />
              </svg>

              {/* Session toggle */}
              <div className="relative mx-auto grid w-64 grid-cols-2 rounded-full border border-white/30 bg-black/10 p-1.5 backdrop-blur-sm">
                <span
                  className="absolute bottom-1.5 left-1.5 top-1.5 w-[calc(50%-0.375rem)] rounded-full bg-white shadow-[0_4px_14px_rgba(20,34,54,0.18)] transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(${session === "morning" ? 0 : 100}%)`,
                  }}
                />
                {sessions.map((s) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={session === s.id}
                    onClick={() => setSession(s.id)}
                    className={`relative z-10 flex items-center justify-center gap-2 rounded-full py-2.5 text-[17px] font-medium transition-colors duration-300 ${
                      session === s.id
                        ? "text-[#087F35]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Dial */}
              <div className="mt-auto pb-5 pt-6 sm:pb-10 sm:pt-8 lg:pb-12">
                <SkyDial d={d} evening={evening} />
              </div>
            </div>

            {/* RIGHT: details */}
            <div
              key={type.id}
              className="flex animate-[dialIn_0.5s_ease] flex-col gap-5 p-5 sm:gap-6 sm:p-7 lg:p-8"
            >
              <div
                className={`group relative flex min-h-[170px] items-end overflow-hidden rounded-[20px] border border-[#E8E8E8] p-5 sm:min-h-[190px] sm:p-6 ${
                  type.id === "jeep"
                    ? "bg-gradient-to-br from-[#EAF8EF] via-white to-[#FDE7CF]"
                    : type.id === "canter"
                      ? "bg-gradient-to-br from-[#EAF8EF] via-white to-[#DDF3E5]"
                      : "bg-gradient-to-br from-[#FDE7CF] via-white to-[#EAF8EF]"
                }`}
              >
                <div className="absolute -right-8 -top-16 h-52 w-52 rounded-full border-[24px] border-white/70" />
                <div className="absolute -right-3 -top-11 h-40 w-40 rounded-full border border-[#03C35E]/15" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#03C35E]/15 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#078B5A] shadow-sm sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#03C35E]" />
                    Corbett Safari
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#142236] sm:text-2xl">
                    {type.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#4B5563] sm:text-sm">
                    Choose your way into the wild
                  </p>
                </div>
              </div>

              <div
                key={session}
                className="animate-[dialIn_0.4s_ease]"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Stat icon="🛣️" label="Distance" value={d.distance} />
                  <Stat icon="👥" label="Capacity" value={d.capacity} />
                </div>

                <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#F7941E]/30 bg-white">
                  <div className="p-3.5 sm:p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                      Per Person
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-[#142236] sm:text-xl">
                      {d.perPerson}
                    </p>
                  </div>
                  <div className="bg-[#F7941E] p-3.5 text-white sm:p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                      {type.fullLabel}
                    </p>
                    <p className="mt-1 text-lg font-extrabold sm:text-xl">{d.full}</p>
                  </div>
                </div>
              </div>

              <Link
                href={`/contact?safari=${encodeURIComponent(
                  `${type.name} - ${session}`
                )}`}
                className="group mt-auto flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#F7941E] px-6 py-3 text-base font-bold text-white shadow-[0_7px_20px_rgba(247,148,30,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#03C35E] hover:shadow-[0_9px_24px_rgba(3,195,94,0.24)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#03C35E]/25 active:translate-y-0 sm:text-lg"
              >
                Enquire Now
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes dialIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}