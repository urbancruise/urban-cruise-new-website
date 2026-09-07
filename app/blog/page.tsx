import BlogSelector from "@/app/components/BlogSelector";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

export const metadata = {
  title: "Urban Cruise Blog | Travel and Vehicle Rental Guides",
  description: "Travel inspiration, rental advice, and destination guides from Urban Cruise.",
};

export default function GlobalBlogPage() {
  return (
    <>
      <PageJsonLd
        name="Urban Cruise Blog"
        description="Travel inspiration, rental advice, and destination guides from Urban Cruise."
        path="/blog"
      />
      <BlogSelector />
    </>
  );
}
