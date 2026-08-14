// app/lib/location.ts
export const AVAILABLE_LOCATIONS = [
  'delhi',
  'gurugram',
  'mumbai',
  'pune',
];

export function formatLocationName(loc: string): string {
  return loc
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function isValidLocation(location: string): boolean {
  return AVAILABLE_LOCATIONS.includes(location);
}

export function getLocationFromPath(path: string): string | null {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && AVAILABLE_LOCATIONS.includes(segments[0])) {
    return segments[0];
  }
  return null;
}

export function getPathWithoutLocation(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && AVAILABLE_LOCATIONS.includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

