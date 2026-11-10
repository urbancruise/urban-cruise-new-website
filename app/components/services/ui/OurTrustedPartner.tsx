"use client";

import TrustedPartnerSection from "../../ourtrustedpartner/OurTrustedPartner";
import type { TrustedPartnerContent } from "@/app/components/ourtrustedpartner/OurTrustedPartner";
import { isRecord, readRecords, readText } from "./cms-content";

export default function OurTrustedPartner({ content }: { content?: unknown }) {
  const section = isRecord(content) ? content : undefined;
  const normalized: TrustedPartnerContent | undefined = section
    ? {
        eyebrow: readText(section.eyebrow) || undefined,
        title: readText(section.title) || undefined,
        titleHighlight: readText(section.titleHighlight) || undefined,
        subtitle: readText(section.subtitle) || undefined,
        description: readText(section.description) || undefined,
        logos: readRecords(section.logos).map((logo) => ({
          name: readText(logo.name),
          logo: readText(logo.logo),
          logoAlt: readText(logo.logoAlt) || undefined,
          logoPublicId: readText(logo.logoPublicId) || undefined,
        })),
      }
    : undefined;
  return <TrustedPartnerSection content={normalized} />;
}
