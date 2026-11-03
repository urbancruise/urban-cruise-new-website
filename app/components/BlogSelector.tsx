import ManagedBlogPage from "./blog/ManagedBlogPage";

export default function BlogSelector({ citySlug }: { citySlug?: string }) {
  const cityName = citySlug
    ? citySlug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : "";
  return <ManagedBlogPage location={cityName} citySlug={citySlug} />;
}
