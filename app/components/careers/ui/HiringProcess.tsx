"use client";

import { useState } from "react";
import {
  FaBus,
  FaPaperPlane,
  FaPhoneAlt,
  FaUserTie,
  FaFileSignature,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: FaPaperPlane,
    title: "Apply",
    text: "Fill the form below or send your resume on WhatsApp.",
  },
  {
    icon: FaPhoneAlt,
    title: "Screening call",
    text: "A 10-minute call to understand your experience and expectations.",
  },
  {
    icon: FaUserTie,
    title: "Interview",
    text: "Meet the team. Drivers also do a short road test.",
  },
  {
    icon: FaFileSignature,
    title: "Offer",
    text: "We share salary and joining details within 2 days.",
  },
  {
    icon: FaRocket,
    title: "Onboarding",
    text: "Documents, uniform and training in your first week.",
  },
];

export default function HiringProcess() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const CurrentIcon = current.icon;
  const isLast = active === steps.length - 1;
  const progress = (active / (steps.length - 1)) * 100;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#03C35E]/40 bg-white px-4 py-1.5 text-sm font-semibold text-[#03C35E]">
            <FaBus />
            Hiring Process
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#142236] md:text-5xl">
            How hiring <span className="text-[#03C35E]">works</span>
          </h2>
          <p className="mt-4 text-gray-600">Most people hear back within 3 working days.</p>
        </div>

        {/* Stepper */}
        <div className="relative mt-14">
          {/* track */}
          <div
            aria-hidden
            className="absolute left-6 right-6 top-6 h-1 -translate-y-1/2 rounded-full bg-gray-200"
          >
            <div
              className="h-full rounded-full bg-[#03C35E] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol role="tablist" aria-label="Hiring steps" className="relative flex justify-between">
            {steps.map(({ title }, i) => {
              const done = i < active;
              const isActive = i === active;
              return (
                <li key={title} className="flex w-12 flex-col items-center sm:w-24">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${i + 1}: ${title}`}
                    onClick={() => setActive(i)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ring-8 ring-white transition-all duration-300 ${
                      isActive
                        ? "scale-110 bg-[#03C35E] text-white shadow-lg shadow-[#03C35E]/40"
                        : done
                        ? "bg-[#03C35E] text-white"
                        : "border-2 border-gray-300 bg-white text-gray-400 hover:border-[#03C35E] hover:text-[#03C35E]"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </button>

                  {/* labels: hidden on very small screens */}
                  <span
                    className={`mt-3 hidden text-center text-sm font-semibold transition-colors sm:block ${
                      isActive ? "text-[#142236]" : "text-gray-400"
                    }`}
                  >
                    {title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Detail panel */}
        <div
          role="tabpanel"
          className="relative mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10"
        >
          {/* decorative */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#03C35E]/10 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-8 right-6 select-none text-[9rem] font-black leading-none text-gray-100 sm:text-[11rem]"
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          {/* key re-mounts the block so the fade animation replays */}
          <div
            key={active}
            className="relative z-10 flex animate-[fadeUp_0.4s_ease-out] flex-col gap-6 sm:flex-row sm:items-start sm:gap-8"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#03C35E] text-white shadow-lg shadow-[#03C35E]/30">
              <CurrentIcon size={28} aria-hidden />
            </span>

            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#03C35E]">
                Step {String(active + 1).padStart(2, "0")} of {String(steps.length).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#142236] sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">{current.text}</p>
            </div>
          </div>

          {/* controls */}
          <div className="relative z-10 mt-10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-[#142236] transition hover:border-[#03C35E] hover:text-[#03C35E] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-[#142236]"
            >
              <span aria-hidden>←</span> Previous
            </button>

            <button
              type="button"
              onClick={() => setActive(isLast ? 0 : active + 1)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#03C35E] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition hover:bg-[#142236]"
            >
              {isLast ? "Start over" : "Next step"}
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#03C35E] transition-all group-hover:rotate-45"
              >
                {isLast ? "↺" : "→"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}