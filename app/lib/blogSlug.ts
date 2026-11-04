export function getBlogSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getBlogSlug(blog: {
  slug?: string | null;
  title: string;
}): string {
  const explicitSlug = blog.slug?.trim();
  return explicitSlug || getBlogSlugFromTitle(blog.title);
}
