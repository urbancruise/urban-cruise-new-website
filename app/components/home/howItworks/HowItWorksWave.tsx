"use client";

import { useId } from "react";

const GREEN = "#03C35E";
const ORANGE = "#F7941E";

export default function HowItWorksWave() {
  const gradientId = `howItWorksWave-${useId().replace(/:/g, "")}`;

  return (
    <svg
      className="pointer-events-none absolute left-0 right-0 top-0 z-10 hidden h-[70px] w-full md:block"
      viewBox="0 0 1320 70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1320"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={GREEN} />
          <stop offset="27%" stopColor={GREEN} />
          <stop offset="31%" stopColor={GREEN} />
          <stop offset="36%" stopColor={ORANGE} />
          <stop offset="64%" stopColor={ORANGE} />
          <stop offset="69%" stopColor={GREEN} />
          <stop offset="73%" stopColor={GREEN} />
          <stop offset="100%" stopColor={GREEN} />
        </linearGradient>
      </defs>
      <path
        d="M 0 70 C 75 50, 125 4, 220 4 C 315 4, 350 44, 440 44 C 530 44, 565 4, 660 4 C 755 4, 790 44, 880 44 C 970 44, 1005 4, 1100 4 C 1195 4, 1245 50, 1320 70"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
