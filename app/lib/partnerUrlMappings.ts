// app/lib/partnerUrlMappings.ts

export const partnerUrlMappings: Record<string, string> = {
  'mumbai': 'partner-program',
  'delhi': 'partner',
  'gurugram': 'partner',
  'pune': 'partner',
};

export const partnerUrlReverseMappings: Record<string, string> = {
  'partner-program': 'mumbai',
  'partner': 'delhi', // default fallback
};

export function getPartnerSlug(location: string): string {
  return partnerUrlMappings[location] || 'partner';
}

export function getPartnerUrl(location: string): string {
  const slug = getPartnerSlug(location);
  return `/${location}/${slug}`;
}

export function isPartnerPath(path: string): boolean {
  return path.includes('/partner') || path.includes('/partner-program');
}

export function getLocationFromPartnerPath(path: string): string | null {
  const segments = path.split('/').filter(Boolean);
  if (segments.length >= 2) {
    const lastSegment = segments[segments.length - 1];
    if (lastSegment === 'partner' || lastSegment === 'partner-program') {
      // If it's partner-program, it must be Mumbai
      if (lastSegment === 'partner-program') {
        return 'mumbai';
      }
      // Otherwise, return the location from the path
      return segments[segments.length - 2];
    }
  }
  return null;
}

