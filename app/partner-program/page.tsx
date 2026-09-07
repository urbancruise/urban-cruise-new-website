import PartnerSelector from "@/app/components/PartnerSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "Partner with Urban Cruise",
  description: "Build dependable travel and mobility solutions with Urban Cruise.",
};

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
