import ContactSelector from "@/app/components/ContactSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "Contact Urban Cruise",
  description: "Contact Urban Cruise for vehicle rental bookings and travel support across India.",
};

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
