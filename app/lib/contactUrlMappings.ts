// app/lib/contactUrlMappings.ts

export const contactUrlMappings: Record<string, string> = {
  'mumbai': 'contact-us',
  'delhi': 'contact-us',
  'gurugram': 'contact-us',
  'pune': 'contact-us',
};

export function getContactSlug(location: string): string {
  return contactUrlMappings[location] || 'contact-us';
}

export function getContactUrl(location: string): string {
  const slug = getContactSlug(location);
  return `/${location}/${slug}`;
}

