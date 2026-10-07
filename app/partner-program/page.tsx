import PartnerSelector from "@/app/components/PartnerSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/partner-program")) ?? {
      title: "Partner with Urban Cruise",
      description:
        "Build dependable travel and mobility solutions with Urban Cruise.",
    }
  );
}

export default function GlobalPartnerProgramPage() {
  return (
    <>
      <PageJsonLd
        name="Urban Cruise Partner Program"
        description="Build dependable travel and mobility solutions with Urban Cruise."
        path="/partner-program"
      />
      <PartnerSelector />
    </>
  );
}
