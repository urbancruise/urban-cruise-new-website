"use client";

import { TourPackageCardSection } from "./Card";

export default function VacationPageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <TourPackageCardSection
      sectionKey="vacationpackages"
      content={cmsSections?.vacationpackages}
    />
  );
}
