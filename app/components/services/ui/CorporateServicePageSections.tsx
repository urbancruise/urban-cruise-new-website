"use client";

import { TourPackageCardSection } from "./Card";

export default function CorporateServicePageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <TourPackageCardSection
      sectionKey="corporatepackages"
      content={cmsSections?.corporatepackages}
    />
  );
}
