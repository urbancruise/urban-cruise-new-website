"use client";

import { TourPackageCardSection } from "./ui/Card";

export default function CharDhamPageSections({
  cmsSections,
}: {
  cmsSections?: Record<string, unknown> | null;
}) {
  return (
    <>
      <TourPackageCardSection
        sectionKey="chardhampackages"
        content={cmsSections?.chardhampackages}
      />
    </>
  );
}
