import CareersSelector from "@/app/components/CareersSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "Careers at Urban Cruise",
  description: "Explore careers and join the Urban Cruise travel team.",
};

export default function GlobalCareersPage() {
  return (
    <>
      <PageJsonLd
        name="Careers at Urban Cruise"
        description="Explore careers and join the Urban Cruise travel team."
        path="/careers-at-urban-cruise"
      />
      <CareersSelector />
    </>
  );
}
