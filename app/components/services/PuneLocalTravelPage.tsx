"use client";

import LocalTravelPageSections from "./ui/LocalTravelPageSections";

export default function PuneLocalTravelPage({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <LocalTravelPageSections
      location="pune"
      cityName="Pune"
      coverage="Pune"
      airport="Pune Airport"
      airportPrice="₹800+"
      tourPrice="₹2,500+"
      hourlyPrice="₹500+"
      dayPrice="₹4,000+"
      cmsSections={cmsSections}
    />
  );
}
