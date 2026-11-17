"use client";

import LocalTravelPageSections from "./ui/LocalTravelPageSections";

export default function GlobalLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <LocalTravelPageSections
      location="global"
      cityName="India"
      coverage="Across India"
      airport="Major airports across India"
      airportPrice="₹800+"
      tourPrice="₹2,500+"
      hourlyPrice="₹500+"
      dayPrice="₹4,000+"
      cmsSections={cmsSections}
    />
  );
}
