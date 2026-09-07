import AboutUsSelector from "@/app/components/AboutUsSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "About Urban Cruise | Premium Vehicle Rental in India",
  description: "Learn about Urban Cruise and our nationwide vehicle rental services.",
};

export default function AboutUrbanCruisePage() {
  return (
    <>
      <PageJsonLd
        name="About Urban Cruise"
        description="Learn about Urban Cruise and our nationwide vehicle rental services."
        path="/about-urban-cruise"
      />
      <AboutUsSelector />
    </>
  );
}
