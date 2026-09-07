import TestimonialsSelector from "@/app/components/TestimonialsSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "Urban Cruise Testimonials",
  description: "Read customer experiences with Urban Cruise vehicle rentals.",
};

export default function GlobalTestimonialsPage() {
  return (
    <>
      <PageJsonLd
        name="Urban Cruise Testimonials"
        description="Read customer experiences with Urban Cruise vehicle rentals."
        path="/testimonials"
      />
      <TestimonialsSelector />
    </>
  );
}
