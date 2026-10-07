import ContactSelector from "@/app/components/ContactSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata() {
  return (
    (await getCmsSeoMetadata("/contact-urban-cruise")) ?? {
      title: "Contact Urban Cruise",
      description:
        "Contact Urban Cruise for vehicle rental bookings and travel support across India.",
    }
  );
}

export default function GlobalContactPage() {
  return (
    <>
      <PageJsonLd
        name="Contact Urban Cruise"
        description="Contact Urban Cruise for vehicle rental bookings and travel support across India."
        path="/contact-urban-cruise"
      />
      <ContactSelector />
    </>
  );
}
