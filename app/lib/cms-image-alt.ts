const CMS_IMAGE_ALT_FIELDS = [
  "imageAlt",
  "image_alt",
  "altText",
  "alt_text",
  "alternativeText",
  "alternative_text",
  "accessibilityLabel",
  "alt",
  "mainImageAlt",
  "illustrationAlt",
  "avatarAlt",
  "backgroundImageAlt",
  "vehiclesImageAlt",
] as const;

const CMS_IMAGE_FIELDS = [
  "image",
  "avatar",
  "mainImage",
  "illustration",
  "backgroundImage",
  "vehiclesImage",
  "logo",
] as const;

export function getCmsImageAlt(source: unknown, fallback: string): string {
  if (source === null || typeof source !== "object") return fallback;

  const fields = source as Record<string, unknown>;
  for (const field of CMS_IMAGE_ALT_FIELDS) {
    const value = fields[field];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  for (const field of CMS_IMAGE_FIELDS) {
    const image = fields[field];
    if (image !== null && typeof image === "object") {
      const imageFields = image as Record<string, unknown>;
      for (const altField of CMS_IMAGE_ALT_FIELDS) {
        const value = imageFields[altField];
        if (typeof value === "string" && value.trim()) return value.trim();
      }
    }
  }

  return fallback;
}
